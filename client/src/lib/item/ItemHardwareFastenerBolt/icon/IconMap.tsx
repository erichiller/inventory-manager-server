import { ItemHardwareFastenerBolt } from "../..";
import { EnumHardwareFastenerDriveEnum } from "../../../types/graphql";

import Torx_Plus from './PropertyOptions/DriveType/Torx_Plus.png'
import React from "react";
import { PNGReactFC, SVGReactFC } from "../../../../styles/icon";


export const TorxPlusIcon: PNGReactFC = ( props ) => <img src={Torx_Plus} {...props} />;


export type IconMapT = Record<any, SVGReactFC | PNGReactFC>;

type ItemHardwareFastenerBoltDriveTypeIconMapT = Record<EnumHardwareFastenerDriveEnum, SVGReactFC | PNGReactFC >;

export const ItemHardwareFastenerBoltDriveTypeIconMap: ItemHardwareFastenerBoltDriveTypeIconMapT = {
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
}