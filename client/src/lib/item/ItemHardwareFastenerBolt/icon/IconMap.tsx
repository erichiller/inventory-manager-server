import { ItemHardwareFastenerBolt } from "../..";
import { EnumHardwareFastenerDriveEnum, EnumHardwareFastenerBoltPointEnum } from "../../../types/graphql";

import TwelvePoint from './PropertyOptions/DriveType/12-Point.png';
import Hex from './PropertyOptions/DriveType/Hex.png';
import Pentagon from './PropertyOptions/DriveType/Pentagon.png';
import Phillips from './PropertyOptions/DriveType/Phillips.png';
import Slot from './PropertyOptions/DriveType/Slot.png';
import Socket from './PropertyOptions/DriveType/Socket.png';
import Square from './PropertyOptions/DriveType/Square.png';
import Torx from './PropertyOptions/DriveType/Torx.png';
import Torx_Plus from './PropertyOptions/DriveType/Torx_Plus.png';

import ExtendedPoint from './PropertyOptions/Point/extended.png';
import FlatPoint from './PropertyOptions/Point/flat.png';
import NonMarringPoint from './PropertyOptions/Point/nonmarring.png';
import SwivelPoint from './PropertyOptions/Point/swivel.png';


import React from "react";
import { PNGReactFC, SVGReactFC } from "../../../../styles/icon";


export const SocketIcon: PNGReactFC = ( props ) => <img src={Socket} {...props} />;
export const SlotIcon: PNGReactFC = ( props ) => <img src={Slot} {...props} />;
export const PhillipsIcon: PNGReactFC = ( props ) => <img src={Phillips} {...props} />;
export const HexIcon: PNGReactFC = ( props ) => <img src={Hex} {...props} />;

export const TorxIcon: PNGReactFC = ( props ) => <img src={Torx} {...props} />;
export const TorxPlusIcon: PNGReactFC = ( props ) => <img src={Torx_Plus} {...props} />;


export type IconMapT<T extends string> = Record<T, SVGReactFC | PNGReactFC>;

// type ItemHardwareFastenerBoltDriveTypeIconMapT = Record<EnumHardwareFastenerDriveEnum, SVGReactFC | PNGReactFC >;

export const ItemHardwareFastenerBoltDriveTypeIconMap: IconMapT<EnumHardwareFastenerDriveEnum> = {
    drilled_spanner: null,
    hex: HexIcon,
    hex_socket: SocketIcon,
    hex_tamper_resistant: null,
    phillips: PhillipsIcon,
    slot: SlotIcon,
    square: null,
    torx: TorxIcon,
    torx_plus: TorxPlusIcon,
    torx_tamper_resistant: null,
    frearson: null,
    hex_slot: null,
    one_way: null,
    phillips_slot: null,
    pozidriv: null
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