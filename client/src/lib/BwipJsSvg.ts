// bwip-js/examples/drawing-svg.js
//
// This is an advanced demonstation of using the drawing interface.
//
// Converts the drawing primitives into the equivalent SVG.  Linear barcodes
// are rendered as a series of stroked paths.  2D barcodes are rendered as a 
// series of filled paths.
//
// Rotation is handled during drawing.  The resulting SVG will contain the 
// already-rotated barcode without an SVG transform.
//
// If the requested barcode image contains text, the glyph paths are 
// extracted from the font file (via the builtin FontLib and stb_truetype.js)
// and added as filled SVG paths.
//
// This code can run in the browser and in nodejs.

import bwipjs from 'bwip-js';

const FontLib = bwipjs.FontLib;


export class DrawingSVG {
    // Unrolled x,y rotate/translate matrix
    tx0 = 0;
    tx1 = 0;
    tx2 = 0;
    tx3 = 0;
    ty0 = 0;
    ty1 = 0;
    ty2 = 0;
    ty3 = 0;

    svg = '';
    path;
    lines = {};

    // Magic number to approximate an ellipse/circle using 4 cubic beziers.
    ELLIPSE_MAGIC = 0.55228475 - 0.00045;

    // Global graphics state
    gs_width;
    gs_height;    // image size, in pixels

    gs_dx;
    gs_dy;           // x,y translate (padding)

    opts: bwipjs.CanvasOptions;

    constructor ( opts: bwipjs.CanvasOptions ) {
        this.opts = opts;


    }

    // Make no adjustments
    scale ( sx, sy ) {
    };

    // Measure text.  This and scale() are the only drawing primitives that
    // are called before init().
    //
    // `font` is the font name typically OCR-A or OCR-B.
    // `fwidth` and `fheight` are the requested font cell size.  They will
    // usually be the same, except when the scaling is not symetric.
    measure ( str: string, font: string, fwidth: number, fheight: number ) {
        fwidth = fwidth | 0;
        fheight = fheight | 0;

        var fontid = FontLib.lookup( font );
        var width = 0;
        var ascent = 0;
        var descent = 0;
        for ( var i = 0; i < str.length; i++ ) {
            var ch = str.charCodeAt( i );
            var glyph = FontLib.getpaths( fontid, ch, fwidth, fheight );
            if ( !glyph ) {
                continue;
            }
            ascent = Math.max( ascent, glyph.ascent );
            descent = Math.max( descent, -glyph.descent );
            width += glyph.advance;
        }
        return { width, ascent, descent };
    };

    // width and height represent the maximum bounding box the graphics will occupy.
    // The dimensions are for an unrotated rendering.  Adjust as necessary.
    init ( width, height ) {
        // Add in the effects of padding.  These are always set before the
        // drawing constructor is called.
        var padl = this.opts.paddingleft;
        var padr = this.opts.paddingright;
        var padt = this.opts.paddingtop;
        var padb = this.opts.paddingbottom;
        var rot = this.opts.rotate || 'N';

        width += padl + padr;
        height += padt + padb;

        // Transform indexes are: x, y, w, h
        switch ( rot ) {
            // tx = w-y, ty = x
            case 'R': this.tx1 = -1; this.tx2 = 1; this.ty0 = 1; break;
            // tx = w-x, ty = h-y
            case 'I': this.tx0 = -1; this.tx2 = 1; this.ty1 = -1; this.ty3 = 1; break;
            // tx = y, ty = h-x
            case 'L': this.tx1 = 1; this.ty0 = -1; this.ty3 = 1; break;
            // tx = x, ty = y
            default: this.tx0 = this.ty1 = 1; break;
        }

        // Setup the graphics state
        var swap = rot == 'L' || rot == 'R';
        this.gs_width = swap ? height : width;
        this.gs_height = swap ? width : height;
        this.gs_dx = padl;
        this.gs_dy = padt;

        this.svg = '';
    };

    // Unconnected stroked lines are used to draw the bars in linear barcodes.
    // No line cap should be applied.  These lines are always orthogonal.
    line ( x0, y0, x1, y1, lw, rgb ) {
        // Try to get non-blurry lines...
        x0 = x0 | 0;
        y0 = y0 | 0;
        x1 = x1 | 0;
        y1 = y1 | 0;
        lw = Math.round( lw );

        // Try to keep the lines "crisp" by using with the SVG line drawing spec to
        // our advantage.
        if ( lw & 1 ) {
            if ( x0 == x1 ) {
                x0 += 0.5;
                x1 += 0.5;
            }
            if ( y0 == y1 ) {
                y0 += 0.5;
                y1 += 0.5;
            }
        }

        // Group together all lines of the same width and emit as single paths.
        // Dramatically reduces resulting text size.
        var key = '' + lw + '#' + rgb;
        if ( !this.lines[ key ] ) {
            this.lines[ key ] = '<path stroke="#' + rgb + '" stroke-width="' + lw + '" d="';
        }
        this.lines[ key ] += 'M' + this.transform( x0, y0 ) + 'L' + this.transform( x1, y1 );
    };
    // Polygons are used to draw the connected regions in a 2d barcode.
    // These will always be unstroked, filled, non-intersecting,
    // orthogonal shapes.
    // You will see a series of polygon() calls, followed by a fill().
    polygon ( pts ) {
        if ( !this.path ) {
            this.path = '<path d="';
        }
        this.path += 'M' + this.transform( pts[ 0 ][ 0 ], pts[ 0 ][ 1 ] );
        for ( var i = 1, n = pts.length; i < n; i++ ) {
            var p = pts[ i ];
            this.path += 'L' + this.transform( p[ 0 ], p[ 1 ] );
        }
        this.path += 'Z';
    };
    // An unstroked, filled hexagon used by maxicode.  You can choose to fill
    // each individually, or wait for the final fill().
    //
    // The hexagon is drawn from the top, counter-clockwise.
    hexagon ( pts, rgb ) {
        this.polygon( pts ); // A hexagon is just a polygon...
    };
    // An unstroked, filled ellipse.  Used by dotcode and maxicode at present.
    // maxicode issues pairs of ellipse calls (one cw, one ccw) followed by a fill()
    // to create the bullseye rings.  dotcode issues all of its ellipses then a
    // fill().
    ellipse ( x, y, rx, ry, ccw ) {
        if ( !this.path ) {
            this.path = '<path d="';
        }
        var dx = rx * this.ELLIPSE_MAGIC;
        var dy = ry * this.ELLIPSE_MAGIC;

        // Since we fill with even-odd, don't worry about cw/ccw
        this.path += 'M' + this.transform( x - rx, y ) +
            'C' + this.transform( x - rx, y - dy ) + ' ' +
            this.transform( x - dx, y - ry ) + ' ' +
            this.transform( x, y - ry ) +
            'C' + this.transform( x + dx, y - ry ) + ' ' +
            this.transform( x + rx, y - dy ) + ' ' +
            this.transform( x + rx, y ) +
            'C' + this.transform( x + rx, y + dy ) + ' ' +
            this.transform( x + dx, y + ry ) + ' ' +
            this.transform( x, y + ry ) +
            'C' + this.transform( x - dx, y + ry ) + ' ' +
            this.transform( x - rx, y + dy ) + ' ' +
            this.transform( x - rx, y ) +
            'Z';
    };
    // PostScript's default fill rule is even-odd.
    fill ( rgb ) {
        if ( this.path ) {
            this.svg += this.path + '" fill="#' + rgb + '" fill-rule="evenodd" />\n';
            this.path = null;
        }
    };
    // Draw text with optional inter-character spacing.  `y` is the baseline.
    // font is an object with properties { name, width, height, dx }
    // width and height are the font cell size.
    // dx is extra space requested between characters (usually zero).
    text ( x, y, str, rgb, font ) {
        var fontid = FontLib.lookup( font.name );
        var fwidth = font.width | 0;
        var fheight = font.height | 0;
        var dx = font.dx | 0;
        var path = '';
        for ( var k = 0; k < str.length; k++ ) {
            var ch = str.charCodeAt( k );
            var glyph = FontLib.getpaths( fontid, ch, fwidth, fheight );
            if ( !glyph ) {
                continue;
            }
            if ( glyph.length ) {
                // A glyph is composed of sequence of curve and line segments.
                // M is move-to
                // L is line-to
                // Q is quadratic bezier curve-to
                // C is cubic bezier curve-to
                for ( var i = 0, l = glyph.length; i < l; i++ ) {
                    let seg = glyph[ i ];
                    if ( seg.type == 'M' || seg.type == 'L' ) {
                        path += seg.type + this.transform( seg.x + x, y - seg.y );
                    } else if ( seg.type == 'Q' ) {
                        path += seg.type + this.transform( seg.cx + x, y - seg.cy ) + ' ' +
                            this.transform( seg.x + x, y - seg.y );
                    } else if ( seg.type == 'C' ) {
                        path += seg.type + this.transform( seg.cx1 + x, y - seg.cy1 ) + ' ' +
                            this.transform( seg.cx2 + x, y - seg.cy2 ) + ' ' +
                            this.transform( seg.x + x, y - seg.y );
                    }
                }
                // Close the shape
                path += 'Z';
            }
            x += glyph.advance + dx;
        }
        if ( path ) {
            this.svg += '<path d="' + path + '" fill="#' + rgb + '" />\n';
        }
    };
    // Called after all drawing is complete.  The return value from this method
    // is the return value from `bwipjs.render()`.
    end () {
        var linesvg = '';
        for ( var key in this.lines ) {
            linesvg += this.lines[ key ] + '" />\n';
        }
        var bg = this.opts.backgroundcolor;
        return '<svg version="1.1" width="' + this.gs_width + '" height="' + this.gs_height +
            '" xmlns="http://www.w3.org/2000/svg">\n' +
            ( /^[0-9A-Fa-f]{6}$/.test( '' + bg )
                ? '<rect width="100%" height="100%" fill="#' + bg + '" />\n'
                : '' ) +
            linesvg + this.svg + '</svg>\n';
    }

    // translate/rotate and return as an SVG coordinate pair
    transform ( x, y ) {
        x += this.gs_dx;
        y += this.gs_dy;
        var tx = this.tx0 * x + this.tx1 * y + this.tx2 * ( this.gs_width - 1 ) + this.tx3 * ( this.gs_height - 1 );
        var ty = this.ty0 * x + this.ty1 * y + this.ty2 * ( this.gs_width - 1 ) + this.ty3 * ( this.gs_height - 1 );
        return '' + ( ( tx | 0 ) == tx ? tx : tx.toFixed( 2 ) ) + ' ' +
            ( ( ty | 0 ) == ty ? ty : ty.toFixed( 2 ) );
    }
}