import React, { SVGProps, FunctionComponent, ImgHTMLAttributes, FunctionComponentElement } from 'react';

import Icon from '@ant-design/icons';
import { IconComponentProps as IconProps } from '@ant-design/icons/lib/components/Icon';

import ScrewThread from './PropertyDescriptions/ScrewThread.svg';
import ThreadDirection_RightHandRule from './PropertyDescriptions/ThreadDirection_RightHandRule.svg';
import ScrewEmbeddedLength from './PropertyDescriptions/ScrewEmbeddedLength.svg';
import ScrewHeadHeight from './PropertyDescriptions/ScrewHeadHeight.svg';
import ScrewHeadDiameter from './PropertyDescriptions/ScrewHeadDiameter.svg';
export * from './IconMap';

// export const HexBoltIcon: React.FunctionComponent<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ( props ) => <img src={HexBolt} {...props} />;

export {
    ThreadDirection_RightHandRule as ThreadDirection_RightHandRuleIcon,
    ScrewThread as ScrewThreadIcon,
    ScrewEmbeddedLength as ScrewEmbeddedLengthIcon,
    ScrewHeadHeight as ScrewHeadHeightIcon,
    ScrewHeadDiameter as ScrewHeadDiameterIcon
};

