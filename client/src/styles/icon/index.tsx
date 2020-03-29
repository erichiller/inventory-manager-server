import React, { SVGProps, FunctionComponent, ImgHTMLAttributes, FunctionComponentElement } from 'react';

import Icon from '@ant-design/icons';
import { IconComponentProps as IconProps } from '@ant-design/icons/lib/components/Icon';

import VaultIcon from '../icon/vault.svg';
import HexBolt from './HexBolt.png';

export const HexBoltIcon: React.FunctionComponent<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (props) => <img src={HexBolt} {...props} />;
    // React.DetailedHTMLProps < React.ImgHTMLAttributes < HTMLImageElement >, HTMLImageElement >

// export const HexBoltIcon: FunctionComponentElement<"img"> = <img src={HexBolt} />;
// export * from '@ant-design/icons';

// let foo: FunctionComponent<SVGP

// export const VaultIcon = ( props: Omit<IconProps, 'component'> ) => <Icon {...props} component={Vault as FunctionComponent<SVGProps<SVGSVGElement>>} />;

// export * as VaultIcon from './vault.svg';
export {
    VaultIcon
};
