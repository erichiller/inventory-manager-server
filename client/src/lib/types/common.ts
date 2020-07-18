

export type IconComponentT<P = {}> =
    React.FunctionComponent<
        P &
        React.DetailedHTMLProps<
            React.ImgHTMLAttributes<HTMLImageElement>,
            HTMLImageElement
        >
    >
    | React.FunctionComponent<P & React.SVGProps<SVGSVGElement>>;

export type IconElementT = React.ReactElement<React.SVGProps<SVGSVGElement>>;