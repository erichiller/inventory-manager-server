/**
 * Type of "callable" Icon
 * @example
 * MyIcon
 * // which can be called later as
 * <MyIcon />
 * @see IconElementT
 */
export type IconComponentT<P = {}> =
    React.FunctionComponent<
        P &
        React.DetailedHTMLProps<
            React.ImgHTMLAttributes<HTMLImageElement>,
            HTMLImageElement
        >
    >
    | React.FunctionComponent<P & React.SVGProps<SVGSVGElement>>;

/**
 * Type of "called" Icon
 * @example
 * <MyIcon />
 * @see IconComponentT
 */
export type IconElementT = React.ReactElement<React.SVGProps<SVGSVGElement>>;