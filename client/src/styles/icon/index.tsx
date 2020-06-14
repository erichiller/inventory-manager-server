import React, { SVGProps, FunctionComponent, ImgHTMLAttributes, FunctionComponentElement } from 'react';

import Icon from '@ant-design/icons';
import { IconComponentProps as IconProps } from '@ant-design/icons/lib/components/Icon';

import CodeIcon from './Code.svg';
import CurlyBracesIcon from './CurlyBraces.svg';
import FactoryIcon from './Factory.svg';
import HexBolt from './HexBolt.png';

export type PNGReactFC = React.FunctionComponent<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;

export type SVGReactFC = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export const HexBoltIcon: PNGReactFC = ( props ) => <img src={HexBolt} {...props} />;
export {
    CodeIcon,
    CurlyBracesIcon,
    FactoryIcon
};
