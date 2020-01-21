import { TapeColor } from "./graphql";
import { CSSProperties } from "react";




type tapeColorKeyed = {
    readonly [ P in keyof typeof TapeColor ]: CSSProperties
};

export const TapeColorMap: tapeColorKeyed = {

    WHITE:              { backgroundColor: `white` },
    OTHER:              { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    CLEAR:              {
        backgroundColor: '#FFF',
        backgroundSize: '50px 50px',
        backgroundPosition: `0 0, 25px 25px`,
        backgroundImage: `linear-gradient( 45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc ),` +
                         `linear-gradient( 45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc )`
    },
    RED:                { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    BLUE:               { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    YELLOW:             { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    GREEN:              { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    BLACK:              { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    CLEAR_WHITE_TEXT:   {
        backgroundColor: '#FFF',
        backgroundSize: '50px 50px',
        backgroundPosition: `0 0, 25px 25px`,
        backgroundImage: `linear-gradient( 45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc ),`+
                         `linear-gradient( 45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc )`
    },
    MATTE_WHITE:        { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    MATTE_CLEAR:        { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    MATTE_SILVER:       { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    SATIN_GOLD:         { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    SATIN_SILVER:       { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    BLUE_D:             { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    RED_D:              { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    FLOURESCENT_ORANGE: { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    FLOURESCENT_YELLOW: { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    BERRY_PINK:         { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    LIGHT_GRAY:         { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    LIME_GREEN:         { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    YELLOW_F:           { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    PINK_F:             { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    BLUE_F:             { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    WHITE_HSE:          { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    WHITE_FLEX:         { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    YELLOW_FLEX:        { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    CLEANING:           { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    STENCIL:            { backgroundColor: `rgba(199, 199, 199, 0.2)` },
    INCOMPATIBLE:       { backgroundColor: `rgba(199, 199, 199, 0.2)` },
};