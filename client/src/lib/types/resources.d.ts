declare module "*.svg" {
    // const content: any;
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}

/**
 * Base64 urlencoded string for use as the `src` of an `<img>` tag
 **/ 
type UrlString = string;
declare module "*.png" {
    // const content: any;
    const content: UrlString;
    export default content;
}
