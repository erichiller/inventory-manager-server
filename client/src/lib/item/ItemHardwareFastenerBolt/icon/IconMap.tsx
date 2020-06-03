import { ItemHardwareFastenerBolt } from "../..";
import { EnumHardwareFastenerDriveEnum, EnumHardwareFastenerBoltPointEnum } from "../../../types/graphql";

import TwelvePoint from './PropertyOptions/DriveType/12-Point.png';
import Clutch from './PropertyOptions/DriveType/Clutch.png';
import DrilledSpanner from './PropertyOptions/DriveType/DrilledSpanner.png';
import Frearson from './PropertyOptions/DriveType/Frearson.png';
import Hex from './PropertyOptions/DriveType/Hex.png';
import HexSlot from './PropertyOptions/DriveType/HexSlot.png';
import HexSocket from './PropertyOptions/DriveType/HexSocket.png';
import HexSocketTamperResistant from './PropertyOptions/DriveType/HexSocketTamperResistant.png';
import HexWithPilotReflex from './PropertyOptions/DriveType/HexWithPilotReflex.png';
import MCMDrive from './PropertyOptions/DriveType/MCMDrive.png';
import NONE from './PropertyOptions/DriveType/NONE.png';
import OneWay from './PropertyOptions/DriveType/OneWay.png';
import Pentagon from './PropertyOptions/DriveType/Pentagon.png';
import Phillips from './PropertyOptions/DriveType/Phillips.png';
import PhillipsSlot from './PropertyOptions/DriveType/PhillipsSlot.png';
import Pozidriv from './PropertyOptions/DriveType/Pozidriv.png';
import Slot from './PropertyOptions/DriveType/Slot.png';
import Square from './PropertyOptions/DriveType/Square.png';
import TorqSet from './PropertyOptions/DriveType/TorqSet.png';
import Torx from './PropertyOptions/DriveType/Torx.png';
import TorxPlus from './PropertyOptions/DriveType/TorxPlus.png';
import TorxTamperResistant from './PropertyOptions/DriveType/TorxTamperResistant.png';
import TriGroove from './PropertyOptions/DriveType/TriGroove.png';
import TriWing from './PropertyOptions/DriveType/TriWing.png';
import WrenchFlat from './PropertyOptions/DriveType/WrenchFlat.png';

import ExtendedPoint from './PropertyOptions/Point/extended.png';
import FlatPoint from './PropertyOptions/Point/flat.png';
import NonMarringPoint from './PropertyOptions/Point/nonmarring.png';
import SwivelPoint from './PropertyOptions/Point/swivel.png';


import React from "react";
import { PNGReactFC, SVGReactFC } from "../../../../styles/icon";

/********************************************************************************
 **** DriveType
 ********************************************************************************/

export const DrilledSpannerIcon: PNGReactFC = ( props ) => <img src={DrilledSpanner} {...props} />;
export const FrearsonIcon: PNGReactFC = ( props ) => <img src={Frearson} {...props} />;
export const HexIcon: PNGReactFC = ( props ) => <img src={Hex} {...props} />;
export const HexSlotIcon: PNGReactFC = ( props ) => <img src={HexSlot} {...props} />;
export const HexSocketIcon: PNGReactFC = ( props ) => <img src={HexSocket} {...props} />;
export const HexSocketTamperResistantIcon: PNGReactFC = ( props ) => <img src={HexSocketTamperResistant} {...props} />;
export const OneWayIcon: PNGReactFC = ( props ) => <img src={OneWay} {...props} />;

export const PhillipsIcon: PNGReactFC = ( props ) => <img src={Phillips} {...props} />;
export const PhillipsSlotIcon: PNGReactFC = ( props ) => <img src={PhillipsSlot} {...props} />;
export const PozidrivIcon: PNGReactFC = ( props ) => <img src={Pozidriv} {...props} />;
export const SlotIcon: PNGReactFC = ( props ) => <img src={Slot} {...props} />;
export const SquareIcon: PNGReactFC = ( props ) => <img src={Square} {...props} />;

export const TorxIcon: PNGReactFC = ( props ) => <img src={Torx} {...props} />;
export const TorxPlusIcon: PNGReactFC = ( props ) => <img src={TorxPlus} {...props} />;
export const TorxTamperResistantIcon: PNGReactFC = ( props ) => <img src={TorxTamperResistant} {...props} />;


export type IconMapT<T extends string> = Record<T, SVGReactFC | PNGReactFC>;

// type ItemHardwareFastenerBoltDriveTypeIconMapT = Record<EnumHardwareFastenerDriveEnum, SVGReactFC | PNGReactFC >;

export const ItemHardwareFastenerBoltDriveTypeIconMap: IconMapT<EnumHardwareFastenerDriveEnum> = {
    drilled_spanner: DrilledSpannerIcon,
    frearson: FrearsonIcon,
    hex: HexIcon,
    hex_slot: HexSlotIcon,
    hex_socket: HexSocketIcon,
    hex_tamper_resistant: HexSocketTamperResistantIcon,
    one_way: OneWayIcon,
    phillips: PhillipsIcon,
    phillips_slot: PhillipsSlotIcon,
    pozidriv: PozidrivIcon,
    slot: SlotIcon,
    square: SquareIcon,
    torx: TorxIcon,
    torx_plus: TorxPlusIcon,
    torx_tamper_resistant: TorxTamperResistantIcon,
};

/********************************************************************************
 **** Point
 ********************************************************************************/

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