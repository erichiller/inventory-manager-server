import { ItemHardwareFastenerBolt } from "../..";
import { EnumHardwareFastenerDriveEnum, EnumHardwareFastenerBoltPointEnum } from "../../../types/graphql";

import Torx_Plus from './PropertyOptions/DriveType/Torx_Plus.png';

import ExtendedPoint from './PropertyOptions/Point/extended.png';
import FlatPoint from './PropertyOptions/Point/flat.png';
import NonMarringPoint from './PropertyOptions/Point/nonmarring.png';
import SwivelPoint from './PropertyOptions/Point/swivel.png';


import React from "react";
import { PNGReactFC, SVGReactFC } from "../../../../styles/icon";


export const TorxPlusIcon: PNGReactFC = ( props ) => <img src={Torx_Plus} {...props} />;


export type IconMapT<T extends string> = Record<T, SVGReactFC | PNGReactFC>;

// type ItemHardwareFastenerBoltDriveTypeIconMapT = Record<EnumHardwareFastenerDriveEnum, SVGReactFC | PNGReactFC >;

export const ItemHardwareFastenerBoltDriveTypeIconMap: IconMapT<EnumHardwareFastenerDriveEnum> = {
    drilled_spanner: TorxPlusIcon,
    hex: TorxPlusIcon,
    hex_socket: TorxPlusIcon,
    hex_tamper_resistant: TorxPlusIcon,
    phillips: TorxPlusIcon,
    slot: TorxPlusIcon,
    square: TorxPlusIcon,
    torx: TorxPlusIcon,
    torx_plus: TorxPlusIcon,
    torx_tamper_resistant: TorxPlusIcon
};

export const ExtendedPointIcon: PNGReactFC = ( props ) => <img src={ExtendedPoint} {...props} />;
export const FlatPointIcon: PNGReactFC = ( props ) => <img src={FlatPoint} {...props} />;
export const NonMarringPointIcon: PNGReactFC = ( props ) => <img src={NonMarringPoint} {...props} />;
export const SwivelPointIcon: PNGReactFC = ( props ) => <img src={SwivelPoint} {...props} />;


export const ItemHardwareFastenerBoltPointIconMap: IconMapT<EnumHardwareFastenerBoltPointEnum> = {
    extended: ExtendedPointIcon,
    flat: FlatPointIcon,
    nonmarring: NonMarringPointIcon,
    swivel: SwivelPointIcon
};