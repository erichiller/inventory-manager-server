export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  bigint: number;
  date: any;
  jsonb: any;
  numeric: number;
  smallint: number;
  timestamptz: any;
  tsvector: any;
  /** uint8 (unsigned int between 0 and 255) scalar type for Apollo GraphQL */
  uint8: number;
  uuid: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type File = {
  __typename?: 'File';
  base64: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  type: Scalars['String'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Label characteristics and properties */
export type LabelCharacteristic = {
  __typename?: 'LabelCharacteristic';
  pinsLeft: Scalars['Int'];
  pinsPrint: Scalars['Int'];
  pinsRight: Scalars['Int'];
  widthMillimeters: Scalars['Int'];
};

export enum MediaType {
  FABRIC_TAPE = 'FABRIC_TAPE',
  FLEXIBLE_ID_TAPE = 'FLEXIBLE_ID_TAPE',
  FLE_TAPE = 'FLE_TAPE',
  HEAT_SHRINK_TUBE = 'HEAT_SHRINK_TUBE',
  INCOMPATIBLE_TAPE = 'INCOMPATIBLE_TAPE',
  LAMINATED_TAPE = 'LAMINATED_TAPE',
  NON_LAMINATED_TAPE = 'NON_LAMINATED_TAPE',
  NO_MEDIA = 'NO_MEDIA',
  SATIN_TAPE = 'SATIN_TAPE'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Send a label to be printed
   * Image Buffer / Raster data arranged as [page][column][pixels] of uint8 to the printer
   */
  putLabelMonochromeBuffer?: Maybe<OperationResult>;
  uploadFiles: Array<Maybe<File>>;
};


export type MutationPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>;
};


export type MutationUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>;
};

export type OperationResult = {
  __typename?: 'OperationResult';
  result: Scalars['Boolean'];
};

/** Printer and label status and properies */
export type PrinterLabelStatus = {
  __typename?: 'PrinterLabelStatus';
  labelCharacteristic?: Maybe<LabelCharacteristic>;
  mediaType?: Maybe<MediaType>;
  mediaWidth: Scalars['Int'];
  tapeColor?: Maybe<TapeColor>;
  textColor?: Maybe<TextColor>;
};

/** Label characteristics and properties */
export type PrinterStatus = {
  __typename?: 'PrinterStatus';
  firmwareVersion: Scalars['Float'];
  heightInch?: Maybe<Scalars['Float']>;
  heightMillimeter?: Maybe<Scalars['Float']>;
  labelStatus: PrinterLabelStatus;
  labelType: Scalars['String'];
  model: Scalars['String'];
  uptime: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve Printer and Label status and properties */
  PrinterStatus?: Maybe<PrinterStatus>;
  files?: Maybe<Array<Maybe<File>>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export enum TapeColor {
  BERRY_PINK = 'BERRY_PINK',
  BLACK = 'BLACK',
  BLUE = 'BLUE',
  BLUE_D = 'BLUE_D',
  BLUE_F = 'BLUE_F',
  CLEANING = 'CLEANING',
  CLEAR = 'CLEAR',
  CLEAR_WHITE_TEXT = 'CLEAR_WHITE_TEXT',
  FLOURESCENT_ORANGE = 'FLOURESCENT_ORANGE',
  FLOURESCENT_YELLOW = 'FLOURESCENT_YELLOW',
  GREEN = 'GREEN',
  INCOMPATIBLE = 'INCOMPATIBLE',
  LIGHT_GRAY = 'LIGHT_GRAY',
  LIME_GREEN = 'LIME_GREEN',
  MATTE_CLEAR = 'MATTE_CLEAR',
  MATTE_SILVER = 'MATTE_SILVER',
  MATTE_WHITE = 'MATTE_WHITE',
  OTHER = 'OTHER',
  PINK_F = 'PINK_F',
  RED = 'RED',
  RED_D = 'RED_D',
  SATIN_GOLD = 'SATIN_GOLD',
  SATIN_SILVER = 'SATIN_SILVER',
  STENCIL = 'STENCIL',
  WHITE = 'WHITE',
  WHITE_FLEX = 'WHITE_FLEX',
  WHITE_HSE = 'WHITE_HSE',
  YELLOW = 'YELLOW',
  YELLOW_F = 'YELLOW_F',
  YELLOW_FLEX = 'YELLOW_FLEX'
}

export enum TextColor {
  BLACK = 'BLACK',
  BLUE = 'BLUE',
  BLUE_F = 'BLUE_F',
  CLEANING = 'CLEANING',
  GOLD = 'GOLD',
  INCOMPATIBLE = 'INCOMPATIBLE',
  OTHER = 'OTHER',
  RED = 'RED',
  STENCIL = 'STENCIL',
  WHITE = 'WHITE'
}



/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "enum_item_cable.connector" */
export type EnumItemCableConnector = {
  __typename?: 'enum_item_cable_connector';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_cable.connector" */
export type EnumItemCableConnectorAggregate = {
  __typename?: 'enum_item_cable_connector_aggregate';
  aggregate?: Maybe<EnumItemCableConnectorAggregateFields>;
  nodes: Array<EnumItemCableConnector>;
};

/** aggregate fields of "enum_item_cable.connector" */
export type EnumItemCableConnectorAggregateFields = {
  __typename?: 'enum_item_cable_connector_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemCableConnectorMaxFields>;
  min?: Maybe<EnumItemCableConnectorMinFields>;
};


/** aggregate fields of "enum_item_cable.connector" */
export type EnumItemCableConnectorAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemCableConnectorSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_cable.connector" */
export type EnumItemCableConnectorAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemCableConnectorMaxOrderBy>;
  min?: Maybe<EnumItemCableConnectorMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_cable.connector" */
export type EnumItemCableConnectorArrRelInsertInput = {
  data: Array<EnumItemCableConnectorInsertInput>;
  on_conflict?: Maybe<EnumItemCableConnectorOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_cable.connector". All fields are combined with a logical 'AND'. */
export type EnumItemCableConnectorBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemCableConnectorBoolExp>>>;
  _not?: Maybe<EnumItemCableConnectorBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemCableConnectorBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_cable.connector" */
export enum EnumItemCableConnectorConstraint {
  /** unique or primary key constraint */
  connector_pkey = 'connector_pkey'
}

/** input type for inserting data into table "enum_item_cable.connector" */
export type EnumItemCableConnectorInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemCableConnectorMaxFields = {
  __typename?: 'enum_item_cable_connector_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_cable.connector" */
export type EnumItemCableConnectorMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemCableConnectorMinFields = {
  __typename?: 'enum_item_cable_connector_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_cable.connector" */
export type EnumItemCableConnectorMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_cable.connector" */
export type EnumItemCableConnectorMutationResponse = {
  __typename?: 'enum_item_cable_connector_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemCableConnector>;
};

/** input type for inserting object relation for remote table "enum_item_cable.connector" */
export type EnumItemCableConnectorObjRelInsertInput = {
  data: EnumItemCableConnectorInsertInput;
  on_conflict?: Maybe<EnumItemCableConnectorOnConflict>;
};

/** on conflict condition type for table "enum_item_cable.connector" */
export type EnumItemCableConnectorOnConflict = {
  constraint: EnumItemCableConnectorConstraint;
  update_columns: Array<EnumItemCableConnectorUpdateColumn>;
  where?: Maybe<EnumItemCableConnectorBoolExp>;
};

/** ordering options when selecting data from "enum_item_cable.connector" */
export type EnumItemCableConnectorOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_cable.connector" */
export type EnumItemCableConnectorPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_cable.connector" */
export enum EnumItemCableConnectorSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_cable.connector" */
export type EnumItemCableConnectorSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_cable.connector" */
export enum EnumItemCableConnectorUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.item_class" */
export type EnumItemClass = {
  __typename?: 'enum_item_class';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.item_class" */
export type EnumItemClassAggregate = {
  __typename?: 'enum_item_class_aggregate';
  aggregate?: Maybe<EnumItemClassAggregateFields>;
  nodes: Array<EnumItemClass>;
};

/** aggregate fields of "enum.item_class" */
export type EnumItemClassAggregateFields = {
  __typename?: 'enum_item_class_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemClassMaxFields>;
  min?: Maybe<EnumItemClassMinFields>;
};


/** aggregate fields of "enum.item_class" */
export type EnumItemClassAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemClassSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.item_class" */
export type EnumItemClassAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemClassMaxOrderBy>;
  min?: Maybe<EnumItemClassMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.item_class" */
export type EnumItemClassArrRelInsertInput = {
  data: Array<EnumItemClassInsertInput>;
  on_conflict?: Maybe<EnumItemClassOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.item_class". All fields are combined with a logical 'AND'. */
export type EnumItemClassBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemClassBoolExp>>>;
  _not?: Maybe<EnumItemClassBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemClassBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.item_class" */
export enum EnumItemClassConstraint {
  /** unique or primary key constraint */
  icon_category_id_key = 'icon_category_id_key',
  /** unique or primary key constraint */
  icon_category_pkey = 'icon_category_pkey'
}

export enum EnumItemClassEnum {
  item_bundle = 'item_bundle',
  item_hardware_fastener_nut = 'item_hardware_fastener_nut',
  item_hardware_fastener_screw = 'item_hardware_fastener_screw',
  item_hardware_fastener_screw_machine = 'item_hardware_fastener_screw_machine',
  item_hardware_fastener_standoff = 'item_hardware_fastener_standoff',
  /** Washers */
  item_hardware_fastener_washer = 'item_hardware_fastener_washer'
}

/** expression to compare columns of type enum_item_class_enum. All fields are combined with logical 'AND'. */
export type EnumItemClassEnumComparisonExp = {
  _eq?: Maybe<EnumItemClassEnum>;
  _in?: Maybe<Array<EnumItemClassEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemClassEnum>;
  _nin?: Maybe<Array<EnumItemClassEnum>>;
};

/** input type for inserting data into table "enum.item_class" */
export type EnumItemClassInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemClassMaxFields = {
  __typename?: 'enum_item_class_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.item_class" */
export type EnumItemClassMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemClassMinFields = {
  __typename?: 'enum_item_class_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.item_class" */
export type EnumItemClassMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.item_class" */
export type EnumItemClassMutationResponse = {
  __typename?: 'enum_item_class_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemClass>;
};

/** input type for inserting object relation for remote table "enum.item_class" */
export type EnumItemClassObjRelInsertInput = {
  data: EnumItemClassInsertInput;
  on_conflict?: Maybe<EnumItemClassOnConflict>;
};

/** on conflict condition type for table "enum.item_class" */
export type EnumItemClassOnConflict = {
  constraint: EnumItemClassConstraint;
  update_columns: Array<EnumItemClassUpdateColumn>;
  where?: Maybe<EnumItemClassBoolExp>;
};

/** ordering options when selecting data from "enum.item_class" */
export type EnumItemClassOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.item_class" */
export type EnumItemClassPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.item_class" */
export enum EnumItemClassSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.item_class" */
export type EnumItemClassSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.item_class" */
export enum EnumItemClassUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item.handedness" */
export type EnumItemHandedness = {
  __typename?: 'enum_item_handedness';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item.handedness" */
export type EnumItemHandednessAggregate = {
  __typename?: 'enum_item_handedness_aggregate';
  aggregate?: Maybe<EnumItemHandednessAggregateFields>;
  nodes: Array<EnumItemHandedness>;
};

/** aggregate fields of "enum_item.handedness" */
export type EnumItemHandednessAggregateFields = {
  __typename?: 'enum_item_handedness_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHandednessMaxFields>;
  min?: Maybe<EnumItemHandednessMinFields>;
};


/** aggregate fields of "enum_item.handedness" */
export type EnumItemHandednessAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHandednessSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item.handedness" */
export type EnumItemHandednessAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHandednessMaxOrderBy>;
  min?: Maybe<EnumItemHandednessMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item.handedness" */
export type EnumItemHandednessArrRelInsertInput = {
  data: Array<EnumItemHandednessInsertInput>;
  on_conflict?: Maybe<EnumItemHandednessOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item.handedness". All fields are combined with a logical 'AND'. */
export type EnumItemHandednessBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHandednessBoolExp>>>;
  _not?: Maybe<EnumItemHandednessBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHandednessBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item.handedness" */
export enum EnumItemHandednessConstraint {
  /** unique or primary key constraint */
  hardware_fastener_thread_direction_pkey = 'hardware_fastener_thread_direction_pkey'
}

export enum EnumItemHandednessEnum {
  /** Specialty direction of threading */
  left = 'left',
  /** Typical direction of threading */
  right = 'right'
}

/** expression to compare columns of type enum_item_handedness_enum. All fields are combined with logical 'AND'. */
export type EnumItemHandednessEnumComparisonExp = {
  _eq?: Maybe<EnumItemHandednessEnum>;
  _in?: Maybe<Array<EnumItemHandednessEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHandednessEnum>;
  _nin?: Maybe<Array<EnumItemHandednessEnum>>;
};

/** input type for inserting data into table "enum_item.handedness" */
export type EnumItemHandednessInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHandednessMaxFields = {
  __typename?: 'enum_item_handedness_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item.handedness" */
export type EnumItemHandednessMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHandednessMinFields = {
  __typename?: 'enum_item_handedness_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item.handedness" */
export type EnumItemHandednessMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item.handedness" */
export type EnumItemHandednessMutationResponse = {
  __typename?: 'enum_item_handedness_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHandedness>;
};

/** input type for inserting object relation for remote table "enum_item.handedness" */
export type EnumItemHandednessObjRelInsertInput = {
  data: EnumItemHandednessInsertInput;
  on_conflict?: Maybe<EnumItemHandednessOnConflict>;
};

/** on conflict condition type for table "enum_item.handedness" */
export type EnumItemHandednessOnConflict = {
  constraint: EnumItemHandednessConstraint;
  update_columns: Array<EnumItemHandednessUpdateColumn>;
  where?: Maybe<EnumItemHandednessBoolExp>;
};

/** ordering options when selecting data from "enum_item.handedness" */
export type EnumItemHandednessOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item.handedness" */
export type EnumItemHandednessPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item.handedness" */
export enum EnumItemHandednessSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item.handedness" */
export type EnumItemHandednessSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item.handedness" */
export enum EnumItemHandednessUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Drive type for fastener, such as Hex, Torx, Phillips, etc
 *
 *
 * columns and relationships of "enum_item_hardware_fastener.drive"
 */
export type EnumItemHardwareFastenerDrive = {
  __typename?: 'enum_item_hardware_fastener_drive';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveAggregate = {
  __typename?: 'enum_item_hardware_fastener_drive_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerDriveAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerDrive>;
};

/** aggregate fields of "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_drive_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerDriveMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerDriveMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerDriveSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerDriveMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerDriveMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerDriveInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerDriveOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener.drive". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerDriveBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerDriveBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerDriveBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerDriveBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener.drive" */
export enum EnumItemHardwareFastenerDriveConstraint {
  /** unique or primary key constraint */
  hardware_fastener_drive_pkey = 'hardware_fastener_drive_pkey'
}

export enum EnumItemHardwareFastenerDriveEnum {
  /** Turn screws that have the tamper-resistant asymmetrical drive exclusive to McMaster-Carr. Also known as insert bits, use these in hand drivers or with a bit adapter in power tools. */
  asymmetrical = 'asymmetrical',
  /** There are two types of clutch screw drives: Type A and Type G. Type A, also known as a "standard clutch", resembles a bow tie, with a small circular "knot" at the center. These were common in GM automobiles, trucks and buses of the 1940s and 1950s. Type G resembles a butterfly, and lacks the center "knot". This type of screw head is commonly used in the manufacture of mobile homes and recreational vehicles.[53] The clutch head was designed to be driven with a flat-blade screwdriver as well as a clutch driver. */
  clutch = 'clutch',
  /** two dots equidistant and opposite each other from center */
  drilled_spanner = 'drilled_spanner',
  /** Similar to Phillips, but less prove to cam-out. Has the notable advantage of working even without the correct drive size. */
  frearson = 'frearson',
  /** external hex (use of crescent wrench) */
  hex = 'hex',
  /** An external hex head with a slot. */
  hex_slot = 'hex_slot',
  /** internal hex ( allen wrench ) */
  hex_socket = 'hex_socket',
  /** hex with center point preventing normal allen wrench tools from operating */
  hex_tamper_resistant = 'hex_tamper_resistant',
  /** No drive present */
  none = 'none',
  /** Installs with a normal slotted driver but can not be removed without special tools */
  one_way = 'one_way',
  /** For tamper resistance it is designed to be intrinsically incompatible with many tools. Since five is an odd number, it cannot be turned by open-end or adjustable wrenches, which have parallel faces (and thus require a fastener with an even number of sides).  */
  pentagon = 'pentagon',
  /** X shaped drive. Abbreviated PH */
  phillips = 'phillips',
  /** combination drive that has both Phillips and Slot drives */
  phillips_slot = 'phillips_slot',
  /** Similar to Phillips, but less prove to cam-out */
  pozidriv = 'pozidriv',
  /** Aka: Regular, Flathead. Abbreviated SL */
  slot = 'slot',
  /** aka Robertson Square Drive. Abbreviated SQ or SD */
  square = 'square',
  /** Torq-set is a cruciform screw drive used in torque-sensitive applications. The Torq-set head is similar in appearance to a Phillips drive in that it has a cross with 4 arms. In Torq-set however, the lines are offset from each other, so they do not align to form intersecting slots across the top of the head. Because of this, a regular Phillips or flat-blade screwdriver will not fit the head. It is used in military and aerospace applications.  https://en.wikipedia.org/wiki/List_of_screw_drives#Torq-set */
  torq_set = 'torq_set',
  /** aka star, 6-pointed star */
  torx = 'torx',
  /** Torx Plus is an improved version of Torx that extends tool life even further and permits greater torque transfer compared to Torx */
  torx_plus = 'torx_plus',
  /** torx with center point preventing normal torx wrench tools from operating */
  torx_tamper_resistant = 'torx_tamper_resistant',
  /** Security Socket with three teeth */
  tri_groove = 'tri_groove',
  /** Sometimes called a triangular slotted screw. It is used as a tamper-resistant screw on various products, typically electronics. */
  tri_wing = 'tri_wing',
  /** The additional points make these sockets easier to connect with the heads of fasteners. This is ideal if you are trying to work on a fastener that is hard to see or you cannot see at all. 12 point sockets are also great for use in tight spaces as they allow you to connect to a fastener at more angles. */
  twelve_point = 'twelve_point'
}

/** expression to compare columns of type enum_item_hardware_fastener_drive_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerDriveEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerDriveEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerDriveEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerDriveEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerDriveEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerDriveMaxFields = {
  __typename?: 'enum_item_hardware_fastener_drive_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerDriveMinFields = {
  __typename?: 'enum_item_hardware_fastener_drive_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_drive_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerDrive>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveObjRelInsertInput = {
  data: EnumItemHardwareFastenerDriveInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerDriveOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveOnConflict = {
  constraint: EnumItemHardwareFastenerDriveConstraint;
  update_columns: Array<EnumItemHardwareFastenerDriveUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerDriveBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDrivePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener.drive" */
export enum EnumItemHardwareFastenerDriveSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener.drive" */
export type EnumItemHardwareFastenerDriveSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener.drive" */
export enum EnumItemHardwareFastenerDriveUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Relevant Information:
 * - https://www.sppusa.com/stainlesssteel_overview.php
 * - https://www.boltdepot.com/fastener-information/Materials-and-Grades/Materials.aspx
 *
 *
 * columns and relationships of "enum_item_hardware_fastener.material"
 */
export type EnumItemHardwareFastenerMaterial = {
  __typename?: 'enum_item_hardware_fastener_material';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialAggregate = {
  __typename?: 'enum_item_hardware_fastener_material_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerMaterialAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerMaterial>;
};

/** aggregate fields of "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_material_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerMaterialMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerMaterialMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerMaterialSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerMaterialMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerMaterialMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerMaterialInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerMaterialOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener.material". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerMaterialBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerMaterialBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerMaterialBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerMaterialBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener.material" */
export enum EnumItemHardwareFastenerMaterialConstraint {
  /** unique or primary key constraint */
  hardware_fastener_material_pkey = 'hardware_fastener_material_pkey'
}

export enum EnumItemHardwareFastenerMaterialEnum {
  /** Highly hardened and usually coated with Black Oxide and/or Oil which offer little corrosion resistance. */
  alloy_steel = 'alloy_steel',
  /** Aluminum is a light, soft, corrosion resistant metal. Like stainless steel, aluminum's corrosion resistance is inherent to the material. Therefore, scratches and nicks will not effect the corrosion resistance. */
  aluminum = 'aluminum',
  /** Brass is an alloy of primarily copper and zinc. Brass is highly corrosion resistant and electrically conductive. However, its use as a fastener is somewhat limited due to its relative softness. It is used primarily for its appearance. */
  brass = 'brass',
  plastic = 'plastic',
  /** Often referred to as simply 'bronze' */
  silicon_bronze = 'silicon_bronze',
  /** Stainless Steel of Unknown Property */
  stainless_steel = 'stainless_steel',
  /** 18-8 refers to any stainless steel containing approximately 18% chromium and 8% nickel. This is the most common stainless designation for hardware.  */
  stainless_steel_18_8 = 'stainless_steel_18_8',
  /** Type 304 Stainless Steel */
  stainless_steel_304 = 'stainless_steel_304',
  /** A highly corrosion resistant grade of stainless steel. Ideal in salt water and chlorine environments. More expensive than 18-8. */
  stainless_steel_316 = 'stainless_steel_316',
  /** A stainless alloy that is harder than 18-8 stainless steel, but not as resistant to corrosion. */
  stainless_steel_410 = 'stainless_steel_410',
  /** Steel is the most common fastener material. Steel fasteners are available plain as well as with various surface treatments such as zinc plating, galvanization, and chrome plating. See Strengths. (Grades and Classes) */
  steel = 'steel',
  titanium = 'titanium'
}

/** expression to compare columns of type enum_item_hardware_fastener_material_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerMaterialEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerMaterialEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerMaterialEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerMaterialMaxFields = {
  __typename?: 'enum_item_hardware_fastener_material_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerMaterialMinFields = {
  __typename?: 'enum_item_hardware_fastener_material_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_material_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerMaterial>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialObjRelInsertInput = {
  data: EnumItemHardwareFastenerMaterialInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerMaterialOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialOnConflict = {
  constraint: EnumItemHardwareFastenerMaterialConstraint;
  update_columns: Array<EnumItemHardwareFastenerMaterialUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerMaterialBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener.material" */
export enum EnumItemHardwareFastenerMaterialSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener.material" */
export type EnumItemHardwareFastenerMaterialSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener.material" */
export enum EnumItemHardwareFastenerMaterialUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutForm = {
  __typename?: 'enum_item_hardware_fastener_nut_form';
  description: Scalars['String'];
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormAggregate = {
  __typename?: 'enum_item_hardware_fastener_nut_form_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerNutFormAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerNutForm>;
};

/** aggregate fields of "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_nut_form_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerNutFormMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerNutFormMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerNutFormSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerNutFormMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerNutFormMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerNutFormInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutFormOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_nut.form". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerNutFormBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerNutFormBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerNutFormBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerNutFormBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_nut.form" */
export enum EnumItemHardwareFastenerNutFormConstraint {
  /** unique or primary key constraint */
  hardware_fastener_nut_form_pkey = 'hardware_fastener_nut_form_pkey'
}

export enum EnumItemHardwareFastenerNutFormEnum {
  /** Acorn nuts are a high crown type of cap nut, used for appearance. */
  acorn = 'acorn',
  /** A nut with a domed top over the end of the fastener. */
  cap = 'cap',
  /** Castle nuts are similar to slotted nuts but with the slots in a rounded section above the main nut. */
  castle = 'castle',
  /** A six sided nut. Also referred to as a finished hex nut. */
  hex = 'hex',
  /** A hex nut with a built in washer like flange. */
  hex_flange = 'hex_flange',
  /** A hex nut with a nylon insert to prevent backing off. Also referred to as a Nylock */
  hex_nylon_lock = 'hex_nylon_lock',
  /** A hex nut with a reduced height. */
  jam = 'jam',
  /** A nylock nut with a reduced height. */
  jam_nylon_lock = 'jam_nylon_lock',
  /** A nut with an attached free-spinning external tooth lockwasher. aka Kep */
  k_lock = 'k_lock',
  /** A nut that does not require a high installation torque and can be installed and removed without thread damage. */
  pin_lock = 'pin_lock',
  /** A non-reversible lock nut used for high temperature applications */
  prevailing_torque_lock = 'prevailing_torque_lock',
  /** Slotted nuts are used in conjunction with a cotter pin on drilled shank fasteners to prevent loosening. */
  slotted = 'slotted',
  /** A four sided nut. */
  square = 'square',
  /** A nut designed to be driven into wood to create a threaded hole. */
  tee = 'tee',
  /** A nut with 'wings' for hand tightening. */
  wing = 'wing'
}

/** expression to compare columns of type enum_item_hardware_fastener_nut_form_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerNutFormEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerNutFormEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerNutFormEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerNutFormEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerNutFormEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerNutFormMaxFields = {
  __typename?: 'enum_item_hardware_fastener_nut_form_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerNutFormMinFields = {
  __typename?: 'enum_item_hardware_fastener_nut_form_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_nut_form_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerNutForm>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormObjRelInsertInput = {
  data: EnumItemHardwareFastenerNutFormInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutFormOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormOnConflict = {
  constraint: EnumItemHardwareFastenerNutFormConstraint;
  update_columns: Array<EnumItemHardwareFastenerNutFormUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerNutFormBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_nut.form" */
export enum EnumItemHardwareFastenerNutFormSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_nut.form" */
export type EnumItemHardwareFastenerNutFormSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_nut.form" */
export enum EnumItemHardwareFastenerNutFormUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrength = {
  __typename?: 'enum_item_hardware_fastener_nut_strength';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthAggregate = {
  __typename?: 'enum_item_hardware_fastener_nut_strength_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerNutStrengthAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerNutStrength>;
};

/** aggregate fields of "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_nut_strength_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerNutStrengthMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerNutStrengthMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerNutStrengthSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerNutStrengthMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerNutStrengthMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerNutStrengthInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutStrengthOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_nut.strength". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerNutStrengthBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_nut.strength" */
export enum EnumItemHardwareFastenerNutStrengthConstraint {
  /** unique or primary key constraint */
  hardware_fastener_nut_strength_pkey = 'hardware_fastener_nut_strength_pkey'
}

export enum EnumItemHardwareFastenerNutStrengthEnum {
  /** usc. Grade F is roughly equivalent to Grade 5. Grade F nuts are used with Grade 5 bolts. */
  grade_f = 'grade_f',
  /** usc. Grade G is roughly equivalent to Grade 8. Grade G nuts are used with Grade 8 bolts. */
  grade_g = 'grade_g'
}

/** expression to compare columns of type enum_item_hardware_fastener_nut_strength_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerNutStrengthEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerNutStrengthEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerNutStrengthEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerNutStrengthEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerNutStrengthEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerNutStrengthMaxFields = {
  __typename?: 'enum_item_hardware_fastener_nut_strength_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerNutStrengthMinFields = {
  __typename?: 'enum_item_hardware_fastener_nut_strength_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_nut_strength_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerNutStrength>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthObjRelInsertInput = {
  data: EnumItemHardwareFastenerNutStrengthInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutStrengthOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthOnConflict = {
  constraint: EnumItemHardwareFastenerNutStrengthConstraint;
  update_columns: Array<EnumItemHardwareFastenerNutStrengthUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_nut.strength" */
export enum EnumItemHardwareFastenerNutStrengthSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_nut.strength" */
export type EnumItemHardwareFastenerNutStrengthSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_nut.strength" */
export enum EnumItemHardwareFastenerNutStrengthUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * metric internal (nut) thread fits are defined by capital G or H ; UTS internal (nut) threads are specified by a appended B
 *
 *
 * columns and relationships of "enum_item_hardware_fastener_nut.thread_fit"
 */
export type EnumItemHardwareFastenerNutThreadFit = {
  __typename?: 'enum_item_hardware_fastener_nut_thread_fit';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitAggregate = {
  __typename?: 'enum_item_hardware_fastener_nut_thread_fit_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerNutThreadFitAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerNutThreadFit>;
};

/** aggregate fields of "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_nut_thread_fit_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerNutThreadFitMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerNutThreadFitMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerNutThreadFitMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerNutThreadFitMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerNutThreadFitInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutThreadFitOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_nut.thread_fit". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerNutThreadFitBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_nut.thread_fit" */
export enum EnumItemHardwareFastenerNutThreadFitConstraint {
  /** unique or primary key constraint */
  hardware_fastener_nut_thread_fit_pkey = 'hardware_fastener_nut_thread_fit_pkey'
}

export enum EnumItemHardwareFastenerNutThreadFitEnum {
  class_1B = 'class_1B',
  class_2B = 'class_2B',
  class_3B = 'class_3B',
  class_4G6G = 'class_4G6G',
  /**
   * `4h6h/4H5H` is approximately equivalent to `3A/3B`
   * although `4g6g/6H` is usually used, which provides a little clearance over `3A/3B`.
   */
  class_4H5H = 'class_4H5H',
  /**
   * `4h6h/4H5H` is approximately equivalent to `3A/3B`
   * although `4g6g/6H` is usually used, which provides a little clearance over `3A/3B`.
   */
  class_6H = 'class_6H'
}

/** expression to compare columns of type enum_item_hardware_fastener_nut_thread_fit_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerNutThreadFitEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerNutThreadFitEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerNutThreadFitEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerNutThreadFitMaxFields = {
  __typename?: 'enum_item_hardware_fastener_nut_thread_fit_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerNutThreadFitMinFields = {
  __typename?: 'enum_item_hardware_fastener_nut_thread_fit_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_nut_thread_fit_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerNutThreadFit>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitObjRelInsertInput = {
  data: EnumItemHardwareFastenerNutThreadFitInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutThreadFitOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitOnConflict = {
  constraint: EnumItemHardwareFastenerNutThreadFitConstraint;
  update_columns: Array<EnumItemHardwareFastenerNutThreadFitUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_nut.thread_fit" */
export enum EnumItemHardwareFastenerNutThreadFitSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_nut.thread_fit" */
export type EnumItemHardwareFastenerNutThreadFitSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_nut.thread_fit" */
export enum EnumItemHardwareFastenerNutThreadFitUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardness = {
  __typename?: 'enum_item_hardware_fastener_screw_hardness';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessAggregate = {
  __typename?: 'enum_item_hardware_fastener_screw_hardness_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerScrewHardnessAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerScrewHardness>;
};

/** aggregate fields of "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_screw_hardness_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerScrewHardnessMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerScrewHardnessMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerScrewHardnessMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerScrewHardnessMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerScrewHardnessInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHardnessOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_screw.hardness". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerScrewHardnessBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_screw.hardness" */
export enum EnumItemHardwareFastenerScrewHardnessConstraint {
  /** unique or primary key constraint */
  hardware_fastener_hardness_pkey = 'hardware_fastener_hardness_pkey'
}

export enum EnumItemHardwareFastenerScrewHardnessEnum {
  rockwell_b50 = 'rockwell_b50',
  rockwell_b55 = 'rockwell_b55',
  rockwell_b70 = 'rockwell_b70',
  rockwell_b71 = 'rockwell_b71',
  rockwell_b80 = 'rockwell_b80',
  rockwell_b85 = 'rockwell_b85',
  rockwell_b96 = 'rockwell_b96',
  rockwell_c22 = 'rockwell_c22',
  rockwell_c24 = 'rockwell_c24',
  rockwell_c32 = 'rockwell_c32',
  rockwell_c38 = 'rockwell_c38',
  rockwell_c39 = 'rockwell_c39'
}

/** expression to compare columns of type enum_item_hardware_fastener_screw_hardness_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerScrewHardnessEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerScrewHardnessMaxFields = {
  __typename?: 'enum_item_hardware_fastener_screw_hardness_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerScrewHardnessMinFields = {
  __typename?: 'enum_item_hardware_fastener_screw_hardness_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_screw_hardness_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerScrewHardness>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessObjRelInsertInput = {
  data: EnumItemHardwareFastenerScrewHardnessInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHardnessOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessOnConflict = {
  constraint: EnumItemHardwareFastenerScrewHardnessConstraint;
  update_columns: Array<EnumItemHardwareFastenerScrewHardnessUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_screw.hardness" */
export enum EnumItemHardwareFastenerScrewHardnessSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_screw.hardness" */
export type EnumItemHardwareFastenerScrewHardnessSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_screw.hardness" */
export enum EnumItemHardwareFastenerScrewHardnessUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHead = {
  __typename?: 'enum_item_hardware_fastener_screw_head';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadAggregate = {
  __typename?: 'enum_item_hardware_fastener_screw_head_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerScrewHeadAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerScrewHead>;
};

/** aggregate fields of "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_screw_head_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerScrewHeadMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerScrewHeadMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerScrewHeadSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerScrewHeadMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerScrewHeadMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerScrewHeadInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHeadOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_screw.head". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerScrewHeadBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_screw.head" */
export enum EnumItemHardwareFastenerScrewHeadConstraint {
  /** unique or primary key constraint */
  hardware_fastener_head_pkey = 'hardware_fastener_head_pkey'
}

export enum EnumItemHardwareFastenerScrewHeadEnum {
  /** A low-profile rounded head using a socket (Allen) drive */
  button = 'button',
  /** A small cylindrical head using a socket (Allen) drive */
  cap = 'cap',
  carriage = 'carriage',
  /**
   * A countersunk head with a flat top.
   * Abbreviated FH.
   */
  flat = 'flat',
  flat_undercut = 'flat_undercut',
  /**
   * hexagonal, same as external hex drive.
   * Abbreviated HH or HX
   */
  hex = 'hex',
  /** A hex head with a built in flange. */
  hex_flanged = 'hex_flanged',
  /** A countersunk head with a rounded top. Abbreviated OH or OV */
  oval = 'oval',
  /** A slightly rounded head with short vertical sides. Abbreviated PN. */
  pan = 'pan',
  /** A domed head. Abbreviated RH */
  round = 'round',
  /** aka grub screw. Machine screws with no head, only a socket (Allen) in the center of the shaft. Made for screwing all the way into holes. */
  set = 'set',
  timber = 'timber',
  /** An extremely wide head with a rounded top */
  truss = 'truss'
}

/** expression to compare columns of type enum_item_hardware_fastener_screw_head_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerScrewHeadEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerScrewHeadEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerScrewHeadEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerScrewHeadEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerScrewHeadEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerScrewHeadMaxFields = {
  __typename?: 'enum_item_hardware_fastener_screw_head_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerScrewHeadMinFields = {
  __typename?: 'enum_item_hardware_fastener_screw_head_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_screw_head_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerScrewHead>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadObjRelInsertInput = {
  data: EnumItemHardwareFastenerScrewHeadInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHeadOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadOnConflict = {
  constraint: EnumItemHardwareFastenerScrewHeadConstraint;
  update_columns: Array<EnumItemHardwareFastenerScrewHeadUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_screw.head" */
export enum EnumItemHardwareFastenerScrewHeadSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_screw.head" */
export type EnumItemHardwareFastenerScrewHeadSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_screw.head" */
export enum EnumItemHardwareFastenerScrewHeadUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePoint = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_point';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointAggregate = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_point_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerScrewMachinePointAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerScrewMachinePoint>;
};

/** aggregate fields of "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_point_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerScrewMachinePointMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerScrewMachinePointMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerScrewMachinePointMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerScrewMachinePointMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerScrewMachinePointInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachinePointOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_screw_machine.point". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerScrewMachinePointBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_screw_machine.point" */
export enum EnumItemHardwareFastenerScrewMachinePointConstraint {
  /** unique or primary key constraint */
  hardware_fastener_screw_point_pkey = 'hardware_fastener_screw_point_pkey'
}

export enum EnumItemHardwareFastenerScrewMachinePointEnum {
  extended = 'extended',
  flat = 'flat',
  nonmarring = 'nonmarring',
  swivel = 'swivel'
}

/** expression to compare columns of type enum_item_hardware_fastener_screw_machine_point_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerScrewMachinePointEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerScrewMachinePointMaxFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_point_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerScrewMachinePointMinFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_point_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_point_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerScrewMachinePoint>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointObjRelInsertInput = {
  data: EnumItemHardwareFastenerScrewMachinePointInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachinePointOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointOnConflict = {
  constraint: EnumItemHardwareFastenerScrewMachinePointConstraint;
  update_columns: Array<EnumItemHardwareFastenerScrewMachinePointUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_screw_machine.point" */
export enum EnumItemHardwareFastenerScrewMachinePointSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_screw_machine.point" */
export type EnumItemHardwareFastenerScrewMachinePointSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_screw_machine.point" */
export enum EnumItemHardwareFastenerScrewMachinePointUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Generally a higher number means a stronger, more hardened part, but also more brittle. US units use Grade and Metric uses Class
 *
 *
 * columns and relationships of "enum_item_hardware_fastener_screw_machine.strength"
 */
export type EnumItemHardwareFastenerScrewMachineStrength = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_strength';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthAggregate = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_strength_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerScrewMachineStrength>;
};

/** aggregate fields of "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_strength_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerScrewMachineStrengthInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_screw_machine.strength". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerScrewMachineStrengthBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_screw_machine.strength" */
export enum EnumItemHardwareFastenerScrewMachineStrengthConstraint {
  /** unique or primary key constraint */
  hardware_fastener_strength_class_pkey = 'hardware_fastener_strength_class_pkey'
}

export enum EnumItemHardwareFastenerScrewMachineStrengthEnum {
  /** metric. Stainless markings vary. Most stainless is non-magnetic. Usually stamped A-2. */
  A_2_stainless = 'A_2_stainless',
  /** metric. Alloy steel, quenched and tempered. */
  class_10_9 = 'class_10_9',
  /** metric. Alloy steel, quenched and tempered */
  class_12_9 = 'class_12_9',
  /** metric. Medium carbon steel, quenched and tempered. */
  class_8_8 = 'class_8_8',
  /** usc. Low or medium carbon steel. No markings present. */
  grade_2 = 'grade_2',
  /** usc. Medium carbon steel, quenched and tempered. Marked with 3 radial lines. */
  grade_5 = 'grade_5',
  /** usc. Medium carbon alloy steel, quenched and tempered. Marked with 6 radial lines. */
  grade_8 = 'grade_8',
  /** usc. Carbon or Alloy Steel with or without Boron	 */
  grade_A325 = 'grade_A325',
  /** usc. Stainless markings vary. Most stainless is non-magnetic. */
  stainless_18_8 = 'stainless_18_8'
}

/** expression to compare columns of type enum_item_hardware_fastener_screw_machine_strength_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerScrewMachineStrengthEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerScrewMachineStrengthMaxFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_strength_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerScrewMachineStrengthMinFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_strength_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_strength_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerScrewMachineStrength>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthObjRelInsertInput = {
  data: EnumItemHardwareFastenerScrewMachineStrengthInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthOnConflict = {
  constraint: EnumItemHardwareFastenerScrewMachineStrengthConstraint;
  update_columns: Array<EnumItemHardwareFastenerScrewMachineStrengthUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_screw_machine.strength" */
export enum EnumItemHardwareFastenerScrewMachineStrengthSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_screw_machine.strength" */
export type EnumItemHardwareFastenerScrewMachineStrengthSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_screw_machine.strength" */
export enum EnumItemHardwareFastenerScrewMachineStrengthUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Thread fit is a combination of allowances and tolerances and a measure of tightness or looseness between them.
 *
 *
 * columns and relationships of "enum_item_hardware_fastener_screw_machine.thread_fit"
 */
export type EnumItemHardwareFastenerScrewMachineThreadFit = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_thread_fit';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitAggregate = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_thread_fit_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerScrewMachineThreadFit>;
};

/** aggregate fields of "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_thread_fit_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerScrewMachineThreadFitInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_screw_machine.thread_fit". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerScrewMachineThreadFitBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export enum EnumItemHardwareFastenerScrewMachineThreadFitConstraint {
  /** unique or primary key constraint */
  hardware_fastener_thread_fit_pkey = 'hardware_fastener_thread_fit_pkey'
}

export enum EnumItemHardwareFastenerScrewMachineThreadFitEnum {
  _1A = '_1A',
  _2A = '_2A',
  _3A = '_3A',
  /**
   * `4h6h/4H5H` is approximately equivalent to `3A/3B`
   * although `4g6g/6H` is usually used, which provides a little clearance over `3A/3B`.
   */
  _4g6g = '_4g6g',
  _4h = '_4h',
  /**
   * `4h6h/4H5H` is approximately equivalent to `3A/3B`
   * although `4g6g/6H` is usually used, which provides a little clearance over `3A/3B`.
   */
  _4h6h = '_4h6h',
  /** `6g/6H` is approximately equivalent to `2A/2B` */
  _6g = '_6g',
  /** `6g/6H` is approximately equivalent to `2A/2B` */
  _6h = '_6h'
}

/** expression to compare columns of type enum_item_hardware_fastener_screw_machine_thread_fit_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerScrewMachineThreadFitEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerScrewMachineThreadFitMaxFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_thread_fit_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerScrewMachineThreadFitMinFields = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_thread_fit_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_screw_machine_thread_fit_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerScrewMachineThreadFit>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitObjRelInsertInput = {
  data: EnumItemHardwareFastenerScrewMachineThreadFitInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitOnConflict = {
  constraint: EnumItemHardwareFastenerScrewMachineThreadFitConstraint;
  update_columns: Array<EnumItemHardwareFastenerScrewMachineThreadFitUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export enum EnumItemHardwareFastenerScrewMachineThreadFitSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export type EnumItemHardwareFastenerScrewMachineThreadFitSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_screw_machine.thread_fit" */
export enum EnumItemHardwareFastenerScrewMachineThreadFitUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShape = {
  __typename?: 'enum_item_hardware_fastener_standoff_shape';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeAggregate = {
  __typename?: 'enum_item_hardware_fastener_standoff_shape_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerStandoffShapeAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerStandoffShape>;
};

/** aggregate fields of "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_standoff_shape_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerStandoffShapeMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerStandoffShapeMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerStandoffShapeMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerStandoffShapeMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerStandoffShapeInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerStandoffShapeOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener.standoff_shape". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerStandoffShapeBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener.standoff_shape" */
export enum EnumItemHardwareFastenerStandoffShapeConstraint {
  /** unique or primary key constraint */
  hardware_fastener_standoff_shape_pkey = 'hardware_fastener_standoff_shape_pkey'
}

export enum EnumItemHardwareFastenerStandoffShapeEnum {
  hex = 'hex',
  round = 'round',
  square = 'square',
  triangle = 'triangle'
}

/** expression to compare columns of type enum_item_hardware_fastener_standoff_shape_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerStandoffShapeEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerStandoffShapeEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerStandoffShapeEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerStandoffShapeMaxFields = {
  __typename?: 'enum_item_hardware_fastener_standoff_shape_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerStandoffShapeMinFields = {
  __typename?: 'enum_item_hardware_fastener_standoff_shape_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_standoff_shape_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerStandoffShape>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeObjRelInsertInput = {
  data: EnumItemHardwareFastenerStandoffShapeInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerStandoffShapeOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeOnConflict = {
  constraint: EnumItemHardwareFastenerStandoffShapeConstraint;
  update_columns: Array<EnumItemHardwareFastenerStandoffShapeUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener.standoff_shape" */
export enum EnumItemHardwareFastenerStandoffShapeSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener.standoff_shape" */
export type EnumItemHardwareFastenerStandoffShapeSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener.standoff_shape" */
export enum EnumItemHardwareFastenerStandoffShapeUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * descriptor of thread
 *
 *
 * columns and relationships of "enum_item_hardware_fastener.thread_label"
 */
export type EnumItemHardwareFastenerThreadLabel = {
  __typename?: 'enum_item_hardware_fastener_thread_label';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelAggregate = {
  __typename?: 'enum_item_hardware_fastener_thread_label_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerThreadLabelAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerThreadLabel>;
};

/** aggregate fields of "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_thread_label_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerThreadLabelMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerThreadLabelMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerThreadLabelSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerThreadLabelMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerThreadLabelMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerThreadLabelInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadLabelOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener.thread_label". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerThreadLabelBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener.thread_label" */
export enum EnumItemHardwareFastenerThreadLabelConstraint {
  /** unique or primary key constraint */
  hardware_fastener_thread_type_pkey = 'hardware_fastener_thread_type_pkey'
}

export enum EnumItemHardwareFastenerThreadLabelEnum {
  /** coarse is the default */
  coarse = 'coarse',
  extra_fine = 'extra_fine',
  fine = 'fine'
}

/** expression to compare columns of type enum_item_hardware_fastener_thread_label_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerThreadLabelEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerThreadLabelEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerThreadLabelEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerThreadLabelEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerThreadLabelEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerThreadLabelMaxFields = {
  __typename?: 'enum_item_hardware_fastener_thread_label_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerThreadLabelMinFields = {
  __typename?: 'enum_item_hardware_fastener_thread_label_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_thread_label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerThreadLabel>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelObjRelInsertInput = {
  data: EnumItemHardwareFastenerThreadLabelInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadLabelOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelOnConflict = {
  constraint: EnumItemHardwareFastenerThreadLabelConstraint;
  update_columns: Array<EnumItemHardwareFastenerThreadLabelUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener.thread_label" */
export enum EnumItemHardwareFastenerThreadLabelSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener.thread_label" */
export type EnumItemHardwareFastenerThreadLabelSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener.thread_label" */
export enum EnumItemHardwareFastenerThreadLabelUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * For more information on thread standards see https://en.wikipedia.org/wiki/Screw_thread#Standardization
 *
 *
 * columns and relationships of "enum_item_hardware_fastener.thread_standard"
 */
export type EnumItemHardwareFastenerThreadStandard = {
  __typename?: 'enum_item_hardware_fastener_thread_standard';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardAggregate = {
  __typename?: 'enum_item_hardware_fastener_thread_standard_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerThreadStandardAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerThreadStandard>;
};

/** aggregate fields of "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_thread_standard_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerThreadStandardMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerThreadStandardMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerThreadStandardSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerThreadStandardMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerThreadStandardMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerThreadStandardInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadStandardOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener.thread_standard". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerThreadStandardBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener.thread_standard" */
export enum EnumItemHardwareFastenerThreadStandardConstraint {
  /** unique or primary key constraint */
  hardware_fastener_thread_standard_pkey = 'hardware_fastener_thread_standard_pkey'
}

export enum EnumItemHardwareFastenerThreadStandardEnum {
  /** German ISO member, Deutsches Institut für Normung */
  DIN = 'DIN',
  /** International Standards Organization. Default metric unit. */
  ISO = 'ISO',
  /** Unified National Coarse, part of Unified Thread Standard (UTS) */
  UNC = 'UNC',
  /** Unified National Extra Fine, part of Unified Thread Standard (UTS) */
  UNEF = 'UNEF',
  /** Unified National Fine, part of Unified Thread Standard (UTS) */
  UNF = 'UNF',
  /** Unified National Special, part of Unified Thread Standard (UTS) */
  UNS = 'UNS'
}

/** expression to compare columns of type enum_item_hardware_fastener_thread_standard_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerThreadStandardEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerThreadStandardEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerThreadStandardEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerThreadStandardEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerThreadStandardEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerThreadStandardMaxFields = {
  __typename?: 'enum_item_hardware_fastener_thread_standard_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerThreadStandardMinFields = {
  __typename?: 'enum_item_hardware_fastener_thread_standard_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_thread_standard_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerThreadStandard>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardObjRelInsertInput = {
  data: EnumItemHardwareFastenerThreadStandardInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadStandardOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardOnConflict = {
  constraint: EnumItemHardwareFastenerThreadStandardConstraint;
  update_columns: Array<EnumItemHardwareFastenerThreadStandardUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener.thread_standard" */
export enum EnumItemHardwareFastenerThreadStandardSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener.thread_standard" */
export type EnumItemHardwareFastenerThreadStandardSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener.thread_standard" */
export enum EnumItemHardwareFastenerThreadStandardUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Shape of the washer
 *
 *
 * columns and relationships of "enum_item_hardware_fastener_washer.form"
 */
export type EnumItemHardwareFastenerWasherForm = {
  __typename?: 'enum_item_hardware_fastener_washer_form';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormAggregate = {
  __typename?: 'enum_item_hardware_fastener_washer_form_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerWasherFormAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerWasherForm>;
};

/** aggregate fields of "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_washer_form_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerWasherFormMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerWasherFormMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerWasherFormSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerWasherFormMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerWasherFormMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerWasherFormInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherFormOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_washer.form". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerWasherFormBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerWasherFormBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerWasherFormBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerWasherFormBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_washer.form" */
export enum EnumItemHardwareFastenerWasherFormConstraint {
  /** unique or primary key constraint */
  hardware_fastener_washer_form_pkey = 'hardware_fastener_washer_form_pkey'
}

export enum EnumItemHardwareFastenerWasherFormEnum {
  /** A washer used to obtain a finished look. Usually used with rounded head fasteners. */
  finishing = 'finishing',
  /** Used to distribute load. see also: pattern */
  flat = 'flat',
  /** Used to prevent nuts and bolts from backing out. see also: lock_mechanism. */
  lock = 'lock',
  /** Thick, large diameter, cast iron washers with a curved or sculpted appearance. Typically used in dock and wood construction. */
  ogee = 'ogee',
  /** A neoprene washer bonded to a metal backing. Used to seal out air/water or dampen noise and vibration. */
  sealing = 'sealing',
  square = 'square'
}

/** expression to compare columns of type enum_item_hardware_fastener_washer_form_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerWasherFormEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerWasherFormEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerWasherFormEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerWasherFormEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerWasherFormEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerWasherFormMaxFields = {
  __typename?: 'enum_item_hardware_fastener_washer_form_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerWasherFormMinFields = {
  __typename?: 'enum_item_hardware_fastener_washer_form_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_washer_form_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerWasherForm>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormObjRelInsertInput = {
  data: EnumItemHardwareFastenerWasherFormInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherFormOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormOnConflict = {
  constraint: EnumItemHardwareFastenerWasherFormConstraint;
  update_columns: Array<EnumItemHardwareFastenerWasherFormUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerWasherFormBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_washer.form" */
export enum EnumItemHardwareFastenerWasherFormSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_washer.form" */
export type EnumItemHardwareFastenerWasherFormSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_washer.form" */
export enum EnumItemHardwareFastenerWasherFormUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanism = {
  __typename?: 'enum_item_hardware_fastener_washer_mechanism';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismAggregate = {
  __typename?: 'enum_item_hardware_fastener_washer_mechanism_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerWasherMechanismAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerWasherMechanism>;
};

/** aggregate fields of "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_washer_mechanism_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerWasherMechanismMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerWasherMechanismMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerWasherMechanismMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerWasherMechanismMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerWasherMechanismInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherMechanismOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_washer.mechanism". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerWasherMechanismBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_washer.mechanism" */
export enum EnumItemHardwareFastenerWasherMechanismConstraint {
  /** unique or primary key constraint */
  hardware_fastener_washer_lock_mechanism_pkey = 'hardware_fastener_washer_lock_mechanism_pkey'
}

export enum EnumItemHardwareFastenerWasherMechanismEnum {
  /** washer with external teeth */
  external_tooth = 'external_tooth',
  /** washer with internal teeth */
  internal_tooth = 'internal_tooth',
  /** the most common lock method */
  split = 'split'
}

/** expression to compare columns of type enum_item_hardware_fastener_washer_mechanism_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerWasherMechanismEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerWasherMechanismEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerWasherMechanismEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerWasherMechanismMaxFields = {
  __typename?: 'enum_item_hardware_fastener_washer_mechanism_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerWasherMechanismMinFields = {
  __typename?: 'enum_item_hardware_fastener_washer_mechanism_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_washer_mechanism_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerWasherMechanism>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismObjRelInsertInput = {
  data: EnumItemHardwareFastenerWasherMechanismInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherMechanismOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismOnConflict = {
  constraint: EnumItemHardwareFastenerWasherMechanismConstraint;
  update_columns: Array<EnumItemHardwareFastenerWasherMechanismUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_washer.mechanism" */
export enum EnumItemHardwareFastenerWasherMechanismSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_washer.mechanism" */
export type EnumItemHardwareFastenerWasherMechanismSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_washer.mechanism" */
export enum EnumItemHardwareFastenerWasherMechanismUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * For Flat washers: Washer patterns define the outer diameter of the washer.
 *
 *
 * columns and relationships of "enum_item_hardware_fastener_washer.pattern"
 */
export type EnumItemHardwareFastenerWasherPattern = {
  __typename?: 'enum_item_hardware_fastener_washer_pattern';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternAggregate = {
  __typename?: 'enum_item_hardware_fastener_washer_pattern_aggregate';
  aggregate?: Maybe<EnumItemHardwareFastenerWasherPatternAggregateFields>;
  nodes: Array<EnumItemHardwareFastenerWasherPattern>;
};

/** aggregate fields of "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternAggregateFields = {
  __typename?: 'enum_item_hardware_fastener_washer_pattern_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFastenerWasherPatternMaxFields>;
  min?: Maybe<EnumItemHardwareFastenerWasherPatternMinFields>;
};


/** aggregate fields of "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFastenerWasherPatternSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFastenerWasherPatternMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFastenerWasherPatternMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternArrRelInsertInput = {
  data: Array<EnumItemHardwareFastenerWasherPatternInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherPatternOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware_fastener_washer.pattern". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFastenerWasherPatternBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware_fastener_washer.pattern" */
export enum EnumItemHardwareFastenerWasherPatternConstraint {
  /** unique or primary key constraint */
  hardware_fastener_washer_pattern_pkey = 'hardware_fastener_washer_pattern_pkey'
}

export enum EnumItemHardwareFastenerWasherPatternEnum {
  /** very large outer diameter */
  Fender = 'Fender',
  /** narrow outer diameter */
  SAE = 'SAE',
  /** wide outer diameter */
  USS = 'USS',
  /** Large outer diameter and thicker */
  dock = 'dock'
}

/** expression to compare columns of type enum_item_hardware_fastener_washer_pattern_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFastenerWasherPatternEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFastenerWasherPatternEnum>;
  _in?: Maybe<Array<EnumItemHardwareFastenerWasherPatternEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFastenerWasherPatternEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFastenerWasherPatternEnum>>;
};

/** input type for inserting data into table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFastenerWasherPatternMaxFields = {
  __typename?: 'enum_item_hardware_fastener_washer_pattern_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFastenerWasherPatternMinFields = {
  __typename?: 'enum_item_hardware_fastener_washer_pattern_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternMutationResponse = {
  __typename?: 'enum_item_hardware_fastener_washer_pattern_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFastenerWasherPattern>;
};

/** input type for inserting object relation for remote table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternObjRelInsertInput = {
  data: EnumItemHardwareFastenerWasherPatternInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherPatternOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternOnConflict = {
  constraint: EnumItemHardwareFastenerWasherPatternConstraint;
  update_columns: Array<EnumItemHardwareFastenerWasherPatternUpdateColumn>;
  where?: Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware_fastener_washer.pattern" */
export enum EnumItemHardwareFastenerWasherPatternSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware_fastener_washer.pattern" */
export type EnumItemHardwareFastenerWasherPatternSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware_fastener_washer.pattern" */
export enum EnumItemHardwareFastenerWasherPatternUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * aka coatings
 *
 *
 * columns and relationships of "enum_item_hardware.finish"
 */
export type EnumItemHardwareFinish = {
  __typename?: 'enum_item_hardware_finish';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware.finish" */
export type EnumItemHardwareFinishAggregate = {
  __typename?: 'enum_item_hardware_finish_aggregate';
  aggregate?: Maybe<EnumItemHardwareFinishAggregateFields>;
  nodes: Array<EnumItemHardwareFinish>;
};

/** aggregate fields of "enum_item_hardware.finish" */
export type EnumItemHardwareFinishAggregateFields = {
  __typename?: 'enum_item_hardware_finish_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareFinishMaxFields>;
  min?: Maybe<EnumItemHardwareFinishMinFields>;
};


/** aggregate fields of "enum_item_hardware.finish" */
export type EnumItemHardwareFinishAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareFinishSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareFinishMaxOrderBy>;
  min?: Maybe<EnumItemHardwareFinishMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishArrRelInsertInput = {
  data: Array<EnumItemHardwareFinishInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFinishOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware.finish". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareFinishBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareFinishBoolExp>>>;
  _not?: Maybe<EnumItemHardwareFinishBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareFinishBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware.finish" */
export enum EnumItemHardwareFinishConstraint {
  /** unique or primary key constraint */
  hardware_finish_pkey = 'hardware_finish_pkey'
}

export enum EnumItemHardwareFinishEnum {
  /** Black Oxide */
  black_oxide = 'black_oxide',
  blue_dyed = 'blue_dyed',
  cadmium_plated = 'cadmium_plated',
  /** Fasteners are chrome plated and polished for appearance. Chrome plating provides similar corrosion resistance to zinc plating. */
  chrome_plated = 'chrome_plated',
  /**
   * Galvanizing is another coating involving the application of a layer of zinc. Hot dip galvanizing puts the thickest possible coating on the metal, resulting in superior corrosion resistance.
   * Because of the thick coating, only galvanized nuts and washers will fit. Typically a rough, dull gray.
   */
  hot_dip_galvanized = 'hot_dip_galvanized',
  /** Moderate corrosion resistance similar to Zinc-plated */
  nickel_plated = 'nickel_plated',
  painted = 'painted',
  passivated = 'passivated',
  ptfe_coated = 'ptfe_coated',
  /**
   * electroplated with zinc for moderate corrosion resistance suitable for (dry) indoor use.
   * Can be either blue or yellow tinted depending on the process.
   */
  zinc_plated = 'zinc_plated'
}

/** expression to compare columns of type enum_item_hardware_finish_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareFinishEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareFinishEnum>;
  _in?: Maybe<Array<EnumItemHardwareFinishEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareFinishEnum>;
  _nin?: Maybe<Array<EnumItemHardwareFinishEnum>>;
};

/** input type for inserting data into table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareFinishMaxFields = {
  __typename?: 'enum_item_hardware_finish_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareFinishMinFields = {
  __typename?: 'enum_item_hardware_finish_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishMutationResponse = {
  __typename?: 'enum_item_hardware_finish_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareFinish>;
};

/** input type for inserting object relation for remote table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishObjRelInsertInput = {
  data: EnumItemHardwareFinishInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFinishOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishOnConflict = {
  constraint: EnumItemHardwareFinishConstraint;
  update_columns: Array<EnumItemHardwareFinishUpdateColumn>;
  where?: Maybe<EnumItemHardwareFinishBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware.finish" */
export type EnumItemHardwareFinishOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware.finish" */
export type EnumItemHardwareFinishPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware.finish" */
export enum EnumItemHardwareFinishSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware.finish" */
export type EnumItemHardwareFinishSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware.finish" */
export enum EnumItemHardwareFinishUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Material which the fastener is to be used in, ie. _Wood_ for _Wood Screws_
 *
 *
 * columns and relationships of "enum_item_hardware.use_material"
 */
export type EnumItemHardwareUseMaterial = {
  __typename?: 'enum_item_hardware_use_material';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialAggregate = {
  __typename?: 'enum_item_hardware_use_material_aggregate';
  aggregate?: Maybe<EnumItemHardwareUseMaterialAggregateFields>;
  nodes: Array<EnumItemHardwareUseMaterial>;
};

/** aggregate fields of "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialAggregateFields = {
  __typename?: 'enum_item_hardware_use_material_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemHardwareUseMaterialMaxFields>;
  min?: Maybe<EnumItemHardwareUseMaterialMinFields>;
};


/** aggregate fields of "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemHardwareUseMaterialSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemHardwareUseMaterialMaxOrderBy>;
  min?: Maybe<EnumItemHardwareUseMaterialMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialArrRelInsertInput = {
  data: Array<EnumItemHardwareUseMaterialInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareUseMaterialOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_hardware.use_material". All fields are combined with a logical 'AND'. */
export type EnumItemHardwareUseMaterialBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemHardwareUseMaterialBoolExp>>>;
  _not?: Maybe<EnumItemHardwareUseMaterialBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemHardwareUseMaterialBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_hardware.use_material" */
export enum EnumItemHardwareUseMaterialConstraint {
  /** unique or primary key constraint */
  hardware_fastener_use_material_pkey = 'hardware_fastener_use_material_pkey'
}

export enum EnumItemHardwareUseMaterialEnum {
  drywall = 'drywall',
  /** Pre-threaded holes, typically in metal */
  machine = 'machine',
  plastic = 'plastic',
  wood = 'wood'
}

/** expression to compare columns of type enum_item_hardware_use_material_enum. All fields are combined with logical 'AND'. */
export type EnumItemHardwareUseMaterialEnumComparisonExp = {
  _eq?: Maybe<EnumItemHardwareUseMaterialEnum>;
  _in?: Maybe<Array<EnumItemHardwareUseMaterialEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumItemHardwareUseMaterialEnum>;
  _nin?: Maybe<Array<EnumItemHardwareUseMaterialEnum>>;
};

/** input type for inserting data into table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemHardwareUseMaterialMaxFields = {
  __typename?: 'enum_item_hardware_use_material_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemHardwareUseMaterialMinFields = {
  __typename?: 'enum_item_hardware_use_material_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialMutationResponse = {
  __typename?: 'enum_item_hardware_use_material_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemHardwareUseMaterial>;
};

/** input type for inserting object relation for remote table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialObjRelInsertInput = {
  data: EnumItemHardwareUseMaterialInsertInput;
  on_conflict?: Maybe<EnumItemHardwareUseMaterialOnConflict>;
};

/** on conflict condition type for table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialOnConflict = {
  constraint: EnumItemHardwareUseMaterialConstraint;
  update_columns: Array<EnumItemHardwareUseMaterialUpdateColumn>;
  where?: Maybe<EnumItemHardwareUseMaterialBoolExp>;
};

/** ordering options when selecting data from "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_hardware.use_material" */
export enum EnumItemHardwareUseMaterialSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_hardware.use_material" */
export type EnumItemHardwareUseMaterialSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_hardware.use_material" */
export enum EnumItemHardwareUseMaterialUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinish = {
  __typename?: 'enum_item_tool_drill_bit_finish';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishAggregate = {
  __typename?: 'enum_item_tool_drill_bit_finish_aggregate';
  aggregate?: Maybe<EnumItemToolDrillBitFinishAggregateFields>;
  nodes: Array<EnumItemToolDrillBitFinish>;
};

/** aggregate fields of "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishAggregateFields = {
  __typename?: 'enum_item_tool_drill_bit_finish_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemToolDrillBitFinishMaxFields>;
  min?: Maybe<EnumItemToolDrillBitFinishMinFields>;
};


/** aggregate fields of "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemToolDrillBitFinishSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemToolDrillBitFinishMaxOrderBy>;
  min?: Maybe<EnumItemToolDrillBitFinishMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishArrRelInsertInput = {
  data: Array<EnumItemToolDrillBitFinishInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitFinishOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_tool.drill_bit_finish". All fields are combined with a logical 'AND'. */
export type EnumItemToolDrillBitFinishBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemToolDrillBitFinishBoolExp>>>;
  _not?: Maybe<EnumItemToolDrillBitFinishBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemToolDrillBitFinishBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_tool.drill_bit_finish" */
export enum EnumItemToolDrillBitFinishConstraint {
  /** unique or primary key constraint */
  drill_bit_finish_pkey = 'drill_bit_finish_pkey'
}

/** input type for inserting data into table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemToolDrillBitFinishMaxFields = {
  __typename?: 'enum_item_tool_drill_bit_finish_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemToolDrillBitFinishMinFields = {
  __typename?: 'enum_item_tool_drill_bit_finish_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishMutationResponse = {
  __typename?: 'enum_item_tool_drill_bit_finish_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemToolDrillBitFinish>;
};

/** input type for inserting object relation for remote table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishObjRelInsertInput = {
  data: EnumItemToolDrillBitFinishInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitFinishOnConflict>;
};

/** on conflict condition type for table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishOnConflict = {
  constraint: EnumItemToolDrillBitFinishConstraint;
  update_columns: Array<EnumItemToolDrillBitFinishUpdateColumn>;
  where?: Maybe<EnumItemToolDrillBitFinishBoolExp>;
};

/** ordering options when selecting data from "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_tool.drill_bit_finish" */
export enum EnumItemToolDrillBitFinishSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_tool.drill_bit_finish" */
export type EnumItemToolDrillBitFinishSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_tool.drill_bit_finish" */
export enum EnumItemToolDrillBitFinishUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClass = {
  __typename?: 'enum_item_tool_drill_bit_length_class';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassAggregate = {
  __typename?: 'enum_item_tool_drill_bit_length_class_aggregate';
  aggregate?: Maybe<EnumItemToolDrillBitLengthClassAggregateFields>;
  nodes: Array<EnumItemToolDrillBitLengthClass>;
};

/** aggregate fields of "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassAggregateFields = {
  __typename?: 'enum_item_tool_drill_bit_length_class_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemToolDrillBitLengthClassMaxFields>;
  min?: Maybe<EnumItemToolDrillBitLengthClassMinFields>;
};


/** aggregate fields of "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemToolDrillBitLengthClassSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemToolDrillBitLengthClassMaxOrderBy>;
  min?: Maybe<EnumItemToolDrillBitLengthClassMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassArrRelInsertInput = {
  data: Array<EnumItemToolDrillBitLengthClassInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitLengthClassOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_tool.drill_bit_length_class". All fields are combined with a logical 'AND'. */
export type EnumItemToolDrillBitLengthClassBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemToolDrillBitLengthClassBoolExp>>>;
  _not?: Maybe<EnumItemToolDrillBitLengthClassBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemToolDrillBitLengthClassBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_tool.drill_bit_length_class" */
export enum EnumItemToolDrillBitLengthClassConstraint {
  /** unique or primary key constraint */
  drill_bit_length_class_pkey = 'drill_bit_length_class_pkey'
}

/** input type for inserting data into table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemToolDrillBitLengthClassMaxFields = {
  __typename?: 'enum_item_tool_drill_bit_length_class_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemToolDrillBitLengthClassMinFields = {
  __typename?: 'enum_item_tool_drill_bit_length_class_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassMutationResponse = {
  __typename?: 'enum_item_tool_drill_bit_length_class_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemToolDrillBitLengthClass>;
};

/** input type for inserting object relation for remote table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassObjRelInsertInput = {
  data: EnumItemToolDrillBitLengthClassInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitLengthClassOnConflict>;
};

/** on conflict condition type for table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassOnConflict = {
  constraint: EnumItemToolDrillBitLengthClassConstraint;
  update_columns: Array<EnumItemToolDrillBitLengthClassUpdateColumn>;
  where?: Maybe<EnumItemToolDrillBitLengthClassBoolExp>;
};

/** ordering options when selecting data from "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_tool.drill_bit_length_class" */
export enum EnumItemToolDrillBitLengthClassSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_tool.drill_bit_length_class" */
export type EnumItemToolDrillBitLengthClassSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_tool.drill_bit_length_class" */
export enum EnumItemToolDrillBitLengthClassUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterial = {
  __typename?: 'enum_item_tool_drill_bit_material';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialAggregate = {
  __typename?: 'enum_item_tool_drill_bit_material_aggregate';
  aggregate?: Maybe<EnumItemToolDrillBitMaterialAggregateFields>;
  nodes: Array<EnumItemToolDrillBitMaterial>;
};

/** aggregate fields of "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialAggregateFields = {
  __typename?: 'enum_item_tool_drill_bit_material_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemToolDrillBitMaterialMaxFields>;
  min?: Maybe<EnumItemToolDrillBitMaterialMinFields>;
};


/** aggregate fields of "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemToolDrillBitMaterialSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemToolDrillBitMaterialMaxOrderBy>;
  min?: Maybe<EnumItemToolDrillBitMaterialMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialArrRelInsertInput = {
  data: Array<EnumItemToolDrillBitMaterialInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitMaterialOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_tool.drill_bit_material". All fields are combined with a logical 'AND'. */
export type EnumItemToolDrillBitMaterialBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemToolDrillBitMaterialBoolExp>>>;
  _not?: Maybe<EnumItemToolDrillBitMaterialBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemToolDrillBitMaterialBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_tool.drill_bit_material" */
export enum EnumItemToolDrillBitMaterialConstraint {
  /** unique or primary key constraint */
  drill_bit_material_pkey = 'drill_bit_material_pkey'
}

/** input type for inserting data into table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemToolDrillBitMaterialMaxFields = {
  __typename?: 'enum_item_tool_drill_bit_material_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemToolDrillBitMaterialMinFields = {
  __typename?: 'enum_item_tool_drill_bit_material_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialMutationResponse = {
  __typename?: 'enum_item_tool_drill_bit_material_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemToolDrillBitMaterial>;
};

/** input type for inserting object relation for remote table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialObjRelInsertInput = {
  data: EnumItemToolDrillBitMaterialInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitMaterialOnConflict>;
};

/** on conflict condition type for table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialOnConflict = {
  constraint: EnumItemToolDrillBitMaterialConstraint;
  update_columns: Array<EnumItemToolDrillBitMaterialUpdateColumn>;
  where?: Maybe<EnumItemToolDrillBitMaterialBoolExp>;
};

/** ordering options when selecting data from "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_tool.drill_bit_material" */
export enum EnumItemToolDrillBitMaterialSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_tool.drill_bit_material" */
export type EnumItemToolDrillBitMaterialSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_tool.drill_bit_material" */
export enum EnumItemToolDrillBitMaterialUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPoint = {
  __typename?: 'enum_item_tool_drill_bit_point';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointAggregate = {
  __typename?: 'enum_item_tool_drill_bit_point_aggregate';
  aggregate?: Maybe<EnumItemToolDrillBitPointAggregateFields>;
  nodes: Array<EnumItemToolDrillBitPoint>;
};

/** aggregate fields of "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointAggregateFields = {
  __typename?: 'enum_item_tool_drill_bit_point_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemToolDrillBitPointMaxFields>;
  min?: Maybe<EnumItemToolDrillBitPointMinFields>;
};


/** aggregate fields of "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemToolDrillBitPointSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemToolDrillBitPointMaxOrderBy>;
  min?: Maybe<EnumItemToolDrillBitPointMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointArrRelInsertInput = {
  data: Array<EnumItemToolDrillBitPointInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitPointOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_tool.drill_bit_point". All fields are combined with a logical 'AND'. */
export type EnumItemToolDrillBitPointBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemToolDrillBitPointBoolExp>>>;
  _not?: Maybe<EnumItemToolDrillBitPointBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemToolDrillBitPointBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_tool.drill_bit_point" */
export enum EnumItemToolDrillBitPointConstraint {
  /** unique or primary key constraint */
  drill_point_pkey = 'drill_point_pkey'
}

/** input type for inserting data into table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemToolDrillBitPointMaxFields = {
  __typename?: 'enum_item_tool_drill_bit_point_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemToolDrillBitPointMinFields = {
  __typename?: 'enum_item_tool_drill_bit_point_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointMutationResponse = {
  __typename?: 'enum_item_tool_drill_bit_point_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemToolDrillBitPoint>;
};

/** input type for inserting object relation for remote table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointObjRelInsertInput = {
  data: EnumItemToolDrillBitPointInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitPointOnConflict>;
};

/** on conflict condition type for table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointOnConflict = {
  constraint: EnumItemToolDrillBitPointConstraint;
  update_columns: Array<EnumItemToolDrillBitPointUpdateColumn>;
  where?: Maybe<EnumItemToolDrillBitPointBoolExp>;
};

/** ordering options when selecting data from "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_tool.drill_bit_point" */
export enum EnumItemToolDrillBitPointSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_tool.drill_bit_point" */
export type EnumItemToolDrillBitPointSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_tool.drill_bit_point" */
export enum EnumItemToolDrillBitPointUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShank = {
  __typename?: 'enum_item_tool_drill_bit_shank';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankAggregate = {
  __typename?: 'enum_item_tool_drill_bit_shank_aggregate';
  aggregate?: Maybe<EnumItemToolDrillBitShankAggregateFields>;
  nodes: Array<EnumItemToolDrillBitShank>;
};

/** aggregate fields of "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankAggregateFields = {
  __typename?: 'enum_item_tool_drill_bit_shank_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemToolDrillBitShankMaxFields>;
  min?: Maybe<EnumItemToolDrillBitShankMinFields>;
};


/** aggregate fields of "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemToolDrillBitShankSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemToolDrillBitShankMaxOrderBy>;
  min?: Maybe<EnumItemToolDrillBitShankMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankArrRelInsertInput = {
  data: Array<EnumItemToolDrillBitShankInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitShankOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_tool.drill_bit_shank". All fields are combined with a logical 'AND'. */
export type EnumItemToolDrillBitShankBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemToolDrillBitShankBoolExp>>>;
  _not?: Maybe<EnumItemToolDrillBitShankBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemToolDrillBitShankBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_tool.drill_bit_shank" */
export enum EnumItemToolDrillBitShankConstraint {
  /** unique or primary key constraint */
  drill_shaft_pkey = 'drill_shaft_pkey'
}

/** input type for inserting data into table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemToolDrillBitShankMaxFields = {
  __typename?: 'enum_item_tool_drill_bit_shank_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemToolDrillBitShankMinFields = {
  __typename?: 'enum_item_tool_drill_bit_shank_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankMutationResponse = {
  __typename?: 'enum_item_tool_drill_bit_shank_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemToolDrillBitShank>;
};

/** input type for inserting object relation for remote table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankObjRelInsertInput = {
  data: EnumItemToolDrillBitShankInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitShankOnConflict>;
};

/** on conflict condition type for table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankOnConflict = {
  constraint: EnumItemToolDrillBitShankConstraint;
  update_columns: Array<EnumItemToolDrillBitShankUpdateColumn>;
  where?: Maybe<EnumItemToolDrillBitShankBoolExp>;
};

/** ordering options when selecting data from "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_tool.drill_bit_shank" */
export enum EnumItemToolDrillBitShankSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_tool.drill_bit_shank" */
export type EnumItemToolDrillBitShankSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_tool.drill_bit_shank" */
export enum EnumItemToolDrillBitShankUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyle = {
  __typename?: 'enum_item_tool_drill_bit_style';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleAggregate = {
  __typename?: 'enum_item_tool_drill_bit_style_aggregate';
  aggregate?: Maybe<EnumItemToolDrillBitStyleAggregateFields>;
  nodes: Array<EnumItemToolDrillBitStyle>;
};

/** aggregate fields of "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleAggregateFields = {
  __typename?: 'enum_item_tool_drill_bit_style_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumItemToolDrillBitStyleMaxFields>;
  min?: Maybe<EnumItemToolDrillBitStyleMinFields>;
};


/** aggregate fields of "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumItemToolDrillBitStyleSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumItemToolDrillBitStyleMaxOrderBy>;
  min?: Maybe<EnumItemToolDrillBitStyleMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleArrRelInsertInput = {
  data: Array<EnumItemToolDrillBitStyleInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitStyleOnConflict>;
};

/** Boolean expression to filter rows from the table "enum_item_tool.drill_bit_style". All fields are combined with a logical 'AND'. */
export type EnumItemToolDrillBitStyleBoolExp = {
  _and?: Maybe<Array<Maybe<EnumItemToolDrillBitStyleBoolExp>>>;
  _not?: Maybe<EnumItemToolDrillBitStyleBoolExp>;
  _or?: Maybe<Array<Maybe<EnumItemToolDrillBitStyleBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum_item_tool.drill_bit_style" */
export enum EnumItemToolDrillBitStyleConstraint {
  /** unique or primary key constraint */
  drill_bit_style_pkey = 'drill_bit_style_pkey'
}

/** input type for inserting data into table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumItemToolDrillBitStyleMaxFields = {
  __typename?: 'enum_item_tool_drill_bit_style_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumItemToolDrillBitStyleMinFields = {
  __typename?: 'enum_item_tool_drill_bit_style_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleMutationResponse = {
  __typename?: 'enum_item_tool_drill_bit_style_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumItemToolDrillBitStyle>;
};

/** input type for inserting object relation for remote table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleObjRelInsertInput = {
  data: EnumItemToolDrillBitStyleInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitStyleOnConflict>;
};

/** on conflict condition type for table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleOnConflict = {
  constraint: EnumItemToolDrillBitStyleConstraint;
  update_columns: Array<EnumItemToolDrillBitStyleUpdateColumn>;
  where?: Maybe<EnumItemToolDrillBitStyleBoolExp>;
};

/** ordering options when selecting data from "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStylePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum_item_tool.drill_bit_style" */
export enum EnumItemToolDrillBitStyleSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum_item_tool.drill_bit_style" */
export type EnumItemToolDrillBitStyleSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum_item_tool.drill_bit_style" */
export enum EnumItemToolDrillBitStyleUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * possible <schema>_<table> classes that can be used in object_maps
 *
 *
 * columns and relationships of "enum.mapped_class"
 */
export type EnumMappedClass = {
  __typename?: 'enum_mapped_class';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.mapped_class" */
export type EnumMappedClassAggregate = {
  __typename?: 'enum_mapped_class_aggregate';
  aggregate?: Maybe<EnumMappedClassAggregateFields>;
  nodes: Array<EnumMappedClass>;
};

/** aggregate fields of "enum.mapped_class" */
export type EnumMappedClassAggregateFields = {
  __typename?: 'enum_mapped_class_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumMappedClassMaxFields>;
  min?: Maybe<EnumMappedClassMinFields>;
};


/** aggregate fields of "enum.mapped_class" */
export type EnumMappedClassAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumMappedClassSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.mapped_class" */
export type EnumMappedClassAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumMappedClassMaxOrderBy>;
  min?: Maybe<EnumMappedClassMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.mapped_class" */
export type EnumMappedClassArrRelInsertInput = {
  data: Array<EnumMappedClassInsertInput>;
  on_conflict?: Maybe<EnumMappedClassOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.mapped_class". All fields are combined with a logical 'AND'. */
export type EnumMappedClassBoolExp = {
  _and?: Maybe<Array<Maybe<EnumMappedClassBoolExp>>>;
  _not?: Maybe<EnumMappedClassBoolExp>;
  _or?: Maybe<Array<Maybe<EnumMappedClassBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.mapped_class" */
export enum EnumMappedClassConstraint {
  /** unique or primary key constraint */
  mapped_class_pkey = 'mapped_class_pkey'
}

export enum EnumMappedClassEnum {
  item_bundle = 'item_bundle',
  item_hardware_fastener_bolt = 'item_hardware_fastener_bolt',
  item_hardware_fastener_nut = 'item_hardware_fastener_nut',
  item_hardware_fastener_screw = 'item_hardware_fastener_screw',
  item_hardware_fastener_screw_machine = 'item_hardware_fastener_screw_machine',
  item_hardware_fastener_standoff = 'item_hardware_fastener_standoff',
  /** Washers */
  item_hardware_fastener_washer = 'item_hardware_fastener_washer'
}

/** expression to compare columns of type enum_mapped_class_enum. All fields are combined with logical 'AND'. */
export type EnumMappedClassEnumComparisonExp = {
  _eq?: Maybe<EnumMappedClassEnum>;
  _in?: Maybe<Array<EnumMappedClassEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumMappedClassEnum>;
  _nin?: Maybe<Array<EnumMappedClassEnum>>;
};

/** input type for inserting data into table "enum.mapped_class" */
export type EnumMappedClassInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumMappedClassMaxFields = {
  __typename?: 'enum_mapped_class_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.mapped_class" */
export type EnumMappedClassMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumMappedClassMinFields = {
  __typename?: 'enum_mapped_class_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.mapped_class" */
export type EnumMappedClassMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.mapped_class" */
export type EnumMappedClassMutationResponse = {
  __typename?: 'enum_mapped_class_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumMappedClass>;
};

/** input type for inserting object relation for remote table "enum.mapped_class" */
export type EnumMappedClassObjRelInsertInput = {
  data: EnumMappedClassInsertInput;
  on_conflict?: Maybe<EnumMappedClassOnConflict>;
};

/** on conflict condition type for table "enum.mapped_class" */
export type EnumMappedClassOnConflict = {
  constraint: EnumMappedClassConstraint;
  update_columns: Array<EnumMappedClassUpdateColumn>;
  where?: Maybe<EnumMappedClassBoolExp>;
};

/** ordering options when selecting data from "enum.mapped_class" */
export type EnumMappedClassOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.mapped_class" */
export type EnumMappedClassPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.mapped_class" */
export enum EnumMappedClassSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.mapped_class" */
export type EnumMappedClassSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.mapped_class" */
export enum EnumMappedClassUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.payment_method_type" */
export type EnumPaymentMethodType = {
  __typename?: 'enum_payment_method_type';
  description: Scalars['String'];
  id: Scalars['String'];
};

/** aggregated selection of "enum.payment_method_type" */
export type EnumPaymentMethodTypeAggregate = {
  __typename?: 'enum_payment_method_type_aggregate';
  aggregate?: Maybe<EnumPaymentMethodTypeAggregateFields>;
  nodes: Array<EnumPaymentMethodType>;
};

/** aggregate fields of "enum.payment_method_type" */
export type EnumPaymentMethodTypeAggregateFields = {
  __typename?: 'enum_payment_method_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumPaymentMethodTypeMaxFields>;
  min?: Maybe<EnumPaymentMethodTypeMinFields>;
};


/** aggregate fields of "enum.payment_method_type" */
export type EnumPaymentMethodTypeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.payment_method_type" */
export type EnumPaymentMethodTypeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumPaymentMethodTypeMaxOrderBy>;
  min?: Maybe<EnumPaymentMethodTypeMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.payment_method_type" */
export type EnumPaymentMethodTypeArrRelInsertInput = {
  data: Array<EnumPaymentMethodTypeInsertInput>;
  on_conflict?: Maybe<EnumPaymentMethodTypeOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.payment_method_type". All fields are combined with a logical 'AND'. */
export type EnumPaymentMethodTypeBoolExp = {
  _and?: Maybe<Array<Maybe<EnumPaymentMethodTypeBoolExp>>>;
  _not?: Maybe<EnumPaymentMethodTypeBoolExp>;
  _or?: Maybe<Array<Maybe<EnumPaymentMethodTypeBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.payment_method_type" */
export enum EnumPaymentMethodTypeConstraint {
  /** unique or primary key constraint */
  payment_method_typ_pkey = 'payment_method_typ_pkey'
}

export enum EnumPaymentMethodTypeEnum {
  /** Bank Automated Clearing House */
  ACH = 'ACH',
  /** Cash */
  CASH = 'CASH',
  /** Credit Card */
  CC = 'CC',
  /** Check */
  CHECK = 'CHECK'
}

/** expression to compare columns of type enum_payment_method_type_enum. All fields are combined with logical 'AND'. */
export type EnumPaymentMethodTypeEnumComparisonExp = {
  _eq?: Maybe<EnumPaymentMethodTypeEnum>;
  _in?: Maybe<Array<EnumPaymentMethodTypeEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumPaymentMethodTypeEnum>;
  _nin?: Maybe<Array<EnumPaymentMethodTypeEnum>>;
};

/** input type for inserting data into table "enum.payment_method_type" */
export type EnumPaymentMethodTypeInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumPaymentMethodTypeMaxFields = {
  __typename?: 'enum_payment_method_type_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.payment_method_type" */
export type EnumPaymentMethodTypeMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumPaymentMethodTypeMinFields = {
  __typename?: 'enum_payment_method_type_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.payment_method_type" */
export type EnumPaymentMethodTypeMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.payment_method_type" */
export type EnumPaymentMethodTypeMutationResponse = {
  __typename?: 'enum_payment_method_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumPaymentMethodType>;
};

/** input type for inserting object relation for remote table "enum.payment_method_type" */
export type EnumPaymentMethodTypeObjRelInsertInput = {
  data: EnumPaymentMethodTypeInsertInput;
  on_conflict?: Maybe<EnumPaymentMethodTypeOnConflict>;
};

/** on conflict condition type for table "enum.payment_method_type" */
export type EnumPaymentMethodTypeOnConflict = {
  constraint: EnumPaymentMethodTypeConstraint;
  update_columns: Array<EnumPaymentMethodTypeUpdateColumn>;
  where?: Maybe<EnumPaymentMethodTypeBoolExp>;
};

/** ordering options when selecting data from "enum.payment_method_type" */
export type EnumPaymentMethodTypeOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.payment_method_type" */
export type EnumPaymentMethodTypePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.payment_method_type" */
export enum EnumPaymentMethodTypeSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.payment_method_type" */
export type EnumPaymentMethodTypeSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.payment_method_type" */
export enum EnumPaymentMethodTypeUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Storage space type
 *
 *
 * columns and relationships of "enum.space_type"
 */
export type EnumSpaceType = {
  __typename?: 'enum_space_type';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.space_type" */
export type EnumSpaceTypeAggregate = {
  __typename?: 'enum_space_type_aggregate';
  aggregate?: Maybe<EnumSpaceTypeAggregateFields>;
  nodes: Array<EnumSpaceType>;
};

/** aggregate fields of "enum.space_type" */
export type EnumSpaceTypeAggregateFields = {
  __typename?: 'enum_space_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumSpaceTypeMaxFields>;
  min?: Maybe<EnumSpaceTypeMinFields>;
};


/** aggregate fields of "enum.space_type" */
export type EnumSpaceTypeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumSpaceTypeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.space_type" */
export type EnumSpaceTypeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumSpaceTypeMaxOrderBy>;
  min?: Maybe<EnumSpaceTypeMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.space_type" */
export type EnumSpaceTypeArrRelInsertInput = {
  data: Array<EnumSpaceTypeInsertInput>;
  on_conflict?: Maybe<EnumSpaceTypeOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.space_type". All fields are combined with a logical 'AND'. */
export type EnumSpaceTypeBoolExp = {
  _and?: Maybe<Array<Maybe<EnumSpaceTypeBoolExp>>>;
  _not?: Maybe<EnumSpaceTypeBoolExp>;
  _or?: Maybe<Array<Maybe<EnumSpaceTypeBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.space_type" */
export enum EnumSpaceTypeConstraint {
  /** unique or primary key constraint */
  space_type_pkey = 'space_type_pkey'
}

export enum EnumSpaceTypeEnum {
  bin = 'bin',
  building = 'building',
  drawer = 'drawer',
  floor = 'floor',
  political_region = 'political_region',
  room = 'room',
  wall = 'wall'
}

/** expression to compare columns of type enum_space_type_enum. All fields are combined with logical 'AND'. */
export type EnumSpaceTypeEnumComparisonExp = {
  _eq?: Maybe<EnumSpaceTypeEnum>;
  _in?: Maybe<Array<EnumSpaceTypeEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumSpaceTypeEnum>;
  _nin?: Maybe<Array<EnumSpaceTypeEnum>>;
};

/** input type for inserting data into table "enum.space_type" */
export type EnumSpaceTypeInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumSpaceTypeMaxFields = {
  __typename?: 'enum_space_type_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.space_type" */
export type EnumSpaceTypeMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumSpaceTypeMinFields = {
  __typename?: 'enum_space_type_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.space_type" */
export type EnumSpaceTypeMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.space_type" */
export type EnumSpaceTypeMutationResponse = {
  __typename?: 'enum_space_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumSpaceType>;
};

/** input type for inserting object relation for remote table "enum.space_type" */
export type EnumSpaceTypeObjRelInsertInput = {
  data: EnumSpaceTypeInsertInput;
  on_conflict?: Maybe<EnumSpaceTypeOnConflict>;
};

/** on conflict condition type for table "enum.space_type" */
export type EnumSpaceTypeOnConflict = {
  constraint: EnumSpaceTypeConstraint;
  update_columns: Array<EnumSpaceTypeUpdateColumn>;
  where?: Maybe<EnumSpaceTypeBoolExp>;
};

/** ordering options when selecting data from "enum.space_type" */
export type EnumSpaceTypeOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.space_type" */
export type EnumSpaceTypePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.space_type" */
export enum EnumSpaceTypeSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.space_type" */
export type EnumSpaceTypeSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.space_type" */
export enum EnumSpaceTypeUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Event types that can add or subtract items from stock.
 *
 *
 * columns and relationships of "enum.stock_event_type"
 */
export type EnumStockEventType = {
  __typename?: 'enum_stock_event_type';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.stock_event_type" */
export type EnumStockEventTypeAggregate = {
  __typename?: 'enum_stock_event_type_aggregate';
  aggregate?: Maybe<EnumStockEventTypeAggregateFields>;
  nodes: Array<EnumStockEventType>;
};

/** aggregate fields of "enum.stock_event_type" */
export type EnumStockEventTypeAggregateFields = {
  __typename?: 'enum_stock_event_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumStockEventTypeMaxFields>;
  min?: Maybe<EnumStockEventTypeMinFields>;
};


/** aggregate fields of "enum.stock_event_type" */
export type EnumStockEventTypeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumStockEventTypeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.stock_event_type" */
export type EnumStockEventTypeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumStockEventTypeMaxOrderBy>;
  min?: Maybe<EnumStockEventTypeMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.stock_event_type" */
export type EnumStockEventTypeArrRelInsertInput = {
  data: Array<EnumStockEventTypeInsertInput>;
  on_conflict?: Maybe<EnumStockEventTypeOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.stock_event_type". All fields are combined with a logical 'AND'. */
export type EnumStockEventTypeBoolExp = {
  _and?: Maybe<Array<Maybe<EnumStockEventTypeBoolExp>>>;
  _not?: Maybe<EnumStockEventTypeBoolExp>;
  _or?: Maybe<Array<Maybe<EnumStockEventTypeBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.stock_event_type" */
export enum EnumStockEventTypeConstraint {
  /** unique or primary key constraint */
  stock_event_type_pkey = 'stock_event_type_pkey'
}

export enum EnumStockEventTypeEnum {
  /** item(s) added in an undefined method. Typically when the order simply was never input to inventory. */
  generic_aquisition = 'generic_aquisition',
  /** item(s) consumed in an undefined manner. Typically for untracked projects. */
  generic_consumption = 'generic_consumption',
  /** item(s) purchased in an order */
  order = 'order',
  /** item(s) consumed in a given project. */
  project = 'project'
}

/** expression to compare columns of type enum_stock_event_type_enum. All fields are combined with logical 'AND'. */
export type EnumStockEventTypeEnumComparisonExp = {
  _eq?: Maybe<EnumStockEventTypeEnum>;
  _in?: Maybe<Array<EnumStockEventTypeEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumStockEventTypeEnum>;
  _nin?: Maybe<Array<EnumStockEventTypeEnum>>;
};

/** input type for inserting data into table "enum.stock_event_type" */
export type EnumStockEventTypeInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumStockEventTypeMaxFields = {
  __typename?: 'enum_stock_event_type_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.stock_event_type" */
export type EnumStockEventTypeMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumStockEventTypeMinFields = {
  __typename?: 'enum_stock_event_type_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.stock_event_type" */
export type EnumStockEventTypeMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.stock_event_type" */
export type EnumStockEventTypeMutationResponse = {
  __typename?: 'enum_stock_event_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumStockEventType>;
};

/** input type for inserting object relation for remote table "enum.stock_event_type" */
export type EnumStockEventTypeObjRelInsertInput = {
  data: EnumStockEventTypeInsertInput;
  on_conflict?: Maybe<EnumStockEventTypeOnConflict>;
};

/** on conflict condition type for table "enum.stock_event_type" */
export type EnumStockEventTypeOnConflict = {
  constraint: EnumStockEventTypeConstraint;
  update_columns: Array<EnumStockEventTypeUpdateColumn>;
  where?: Maybe<EnumStockEventTypeBoolExp>;
};

/** ordering options when selecting data from "enum.stock_event_type" */
export type EnumStockEventTypeOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.stock_event_type" */
export type EnumStockEventTypePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.stock_event_type" */
export enum EnumStockEventTypeSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.stock_event_type" */
export type EnumStockEventTypeSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.stock_event_type" */
export enum EnumStockEventTypeUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.unit" */
export type EnumUnit = {
  __typename?: 'enum_unit';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.unit" */
export type EnumUnitAggregate = {
  __typename?: 'enum_unit_aggregate';
  aggregate?: Maybe<EnumUnitAggregateFields>;
  nodes: Array<EnumUnit>;
};

/** aggregate fields of "enum.unit" */
export type EnumUnitAggregateFields = {
  __typename?: 'enum_unit_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumUnitMaxFields>;
  min?: Maybe<EnumUnitMinFields>;
};


/** aggregate fields of "enum.unit" */
export type EnumUnitAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumUnitSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.unit" */
export type EnumUnitAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumUnitMaxOrderBy>;
  min?: Maybe<EnumUnitMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.unit" */
export type EnumUnitArrRelInsertInput = {
  data: Array<EnumUnitInsertInput>;
  on_conflict?: Maybe<EnumUnitOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.unit". All fields are combined with a logical 'AND'. */
export type EnumUnitBoolExp = {
  _and?: Maybe<Array<Maybe<EnumUnitBoolExp>>>;
  _not?: Maybe<EnumUnitBoolExp>;
  _or?: Maybe<Array<Maybe<EnumUnitBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.unit" */
export enum EnumUnitConstraint {
  /** unique or primary key constraint */
  unit_pkey = 'unit_pkey'
}

export enum EnumUnitEnum {
  metric = 'metric',
  /** United States Customary Measurement System */
  usc = 'usc'
}

/** expression to compare columns of type enum_unit_enum. All fields are combined with logical 'AND'. */
export type EnumUnitEnumComparisonExp = {
  _eq?: Maybe<EnumUnitEnum>;
  _in?: Maybe<Array<EnumUnitEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumUnitEnum>;
  _nin?: Maybe<Array<EnumUnitEnum>>;
};

/** input type for inserting data into table "enum.unit" */
export type EnumUnitInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumUnitMaxFields = {
  __typename?: 'enum_unit_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.unit" */
export type EnumUnitMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumUnitMinFields = {
  __typename?: 'enum_unit_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.unit" */
export type EnumUnitMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.unit" */
export type EnumUnitMutationResponse = {
  __typename?: 'enum_unit_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumUnit>;
};

/** input type for inserting object relation for remote table "enum.unit" */
export type EnumUnitObjRelInsertInput = {
  data: EnumUnitInsertInput;
  on_conflict?: Maybe<EnumUnitOnConflict>;
};

/** on conflict condition type for table "enum.unit" */
export type EnumUnitOnConflict = {
  constraint: EnumUnitConstraint;
  update_columns: Array<EnumUnitUpdateColumn>;
  where?: Maybe<EnumUnitBoolExp>;
};

/** ordering options when selecting data from "enum.unit" */
export type EnumUnitOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.unit" */
export type EnumUnitPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.unit" */
export enum EnumUnitSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.unit" */
export type EnumUnitSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.unit" */
export enum EnumUnitUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Image / icon data for labels
 *
 *
 * columns and relationships of "icon"
 */
export type Icon = {
  __typename?: 'icon';
  /** An array relationship */
  categories: Array<IconItemClassMap>;
  /** An aggregated array relationship */
  categories_aggregate: IconItemClassMapAggregate;
  created_at: Scalars['timestamptz'];
  /** Store image data in Base64 */
  data: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  items: Array<IconItemMap>;
  /** An aggregated array relationship */
  items_aggregate: IconItemMapAggregate;
  /** An array relationship */
  labels: Array<IconLabelMap>;
  /** An aggregated array relationship */
  labels_aggregate: IconLabelMapAggregate;
  title?: Maybe<Scalars['String']>;
};


/**
 * Image / icon data for labels
 *
 *
 * columns and relationships of "icon"
 */
export type IconCategoriesArgs = {
  distinct_on?: Maybe<Array<IconItemClassMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemClassMapOrderBy>>;
  where?: Maybe<IconItemClassMapBoolExp>;
};


/**
 * Image / icon data for labels
 *
 *
 * columns and relationships of "icon"
 */
export type IconCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemClassMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemClassMapOrderBy>>;
  where?: Maybe<IconItemClassMapBoolExp>;
};


/**
 * Image / icon data for labels
 *
 *
 * columns and relationships of "icon"
 */
export type IconItemsArgs = {
  distinct_on?: Maybe<Array<IconItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemMapOrderBy>>;
  where?: Maybe<IconItemMapBoolExp>;
};


/**
 * Image / icon data for labels
 *
 *
 * columns and relationships of "icon"
 */
export type IconItemsAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemMapOrderBy>>;
  where?: Maybe<IconItemMapBoolExp>;
};


/**
 * Image / icon data for labels
 *
 *
 * columns and relationships of "icon"
 */
export type IconLabelsArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconLabelMapOrderBy>>;
  where?: Maybe<IconLabelMapBoolExp>;
};


/**
 * Image / icon data for labels
 *
 *
 * columns and relationships of "icon"
 */
export type IconLabelsAggregateArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconLabelMapOrderBy>>;
  where?: Maybe<IconLabelMapBoolExp>;
};

/** aggregated selection of "icon" */
export type IconAggregate = {
  __typename?: 'icon_aggregate';
  aggregate?: Maybe<IconAggregateFields>;
  nodes: Array<Icon>;
};

/** aggregate fields of "icon" */
export type IconAggregateFields = {
  __typename?: 'icon_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IconMaxFields>;
  min?: Maybe<IconMinFields>;
};


/** aggregate fields of "icon" */
export type IconAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "icon" */
export type IconAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<IconMaxOrderBy>;
  min?: Maybe<IconMinOrderBy>;
};

/** input type for inserting array relation for remote table "icon" */
export type IconArrRelInsertInput = {
  data: Array<IconInsertInput>;
  on_conflict?: Maybe<IconOnConflict>;
};

/** Boolean expression to filter rows from the table "icon". All fields are combined with a logical 'AND'. */
export type IconBoolExp = {
  _and?: Maybe<Array<Maybe<IconBoolExp>>>;
  _not?: Maybe<IconBoolExp>;
  _or?: Maybe<Array<Maybe<IconBoolExp>>>;
  categories?: Maybe<IconItemClassMapBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  data?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  items?: Maybe<IconItemMapBoolExp>;
  labels?: Maybe<IconLabelMapBoolExp>;
  title?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "icon" */
export enum IconConstraint {
  /** unique or primary key constraint */
  icons_id_key = 'icons_id_key',
  /** unique or primary key constraint */
  icons_pkey = 'icons_pkey'
}

/** input type for inserting data into table "icon" */
export type IconInsertInput = {
  categories?: Maybe<IconItemClassMapArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  items?: Maybe<IconItemMapArrRelInsertInput>;
  labels?: Maybe<IconLabelMapArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
};

/** columns and relationships of "icon_item_class_map" */
export type IconItemClassMap = {
  __typename?: 'icon_item_class_map';
  class: EnumItemClassEnum;
  /**
   * json rules in the form of:
   *     { [propKey: keyof item_class]: regex }
   * this is then evaluated for each entry
   * evaluation is done in the sequence order
   */
  criteria?: Maybe<Scalars['jsonb']>;
  icon_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/** columns and relationships of "icon_item_class_map" */
export type IconItemClassMapCriteriaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "icon_item_class_map" */
export type IconItemClassMapAggregate = {
  __typename?: 'icon_item_class_map_aggregate';
  aggregate?: Maybe<IconItemClassMapAggregateFields>;
  nodes: Array<IconItemClassMap>;
};

/** aggregate fields of "icon_item_class_map" */
export type IconItemClassMapAggregateFields = {
  __typename?: 'icon_item_class_map_aggregate_fields';
  avg?: Maybe<IconItemClassMapAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IconItemClassMapMaxFields>;
  min?: Maybe<IconItemClassMapMinFields>;
  stddev?: Maybe<IconItemClassMapStddevFields>;
  stddev_pop?: Maybe<IconItemClassMapStddevPopFields>;
  stddev_samp?: Maybe<IconItemClassMapStddevSampFields>;
  sum?: Maybe<IconItemClassMapSumFields>;
  var_pop?: Maybe<IconItemClassMapVarPopFields>;
  var_samp?: Maybe<IconItemClassMapVarSampFields>;
  variance?: Maybe<IconItemClassMapVarianceFields>;
};


/** aggregate fields of "icon_item_class_map" */
export type IconItemClassMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconItemClassMapSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "icon_item_class_map" */
export type IconItemClassMapAggregateOrderBy = {
  avg?: Maybe<IconItemClassMapAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<IconItemClassMapMaxOrderBy>;
  min?: Maybe<IconItemClassMapMinOrderBy>;
  stddev?: Maybe<IconItemClassMapStddevOrderBy>;
  stddev_pop?: Maybe<IconItemClassMapStddevPopOrderBy>;
  stddev_samp?: Maybe<IconItemClassMapStddevSampOrderBy>;
  sum?: Maybe<IconItemClassMapSumOrderBy>;
  var_pop?: Maybe<IconItemClassMapVarPopOrderBy>;
  var_samp?: Maybe<IconItemClassMapVarSampOrderBy>;
  variance?: Maybe<IconItemClassMapVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type IconItemClassMapAppendInput = {
  criteria?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "icon_item_class_map" */
export type IconItemClassMapArrRelInsertInput = {
  data: Array<IconItemClassMapInsertInput>;
  on_conflict?: Maybe<IconItemClassMapOnConflict>;
};

/** aggregate avg on columns */
export type IconItemClassMapAvgFields = {
  __typename?: 'icon_item_class_map_avg_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "icon_item_class_map" */
export type IconItemClassMapAvgOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "icon_item_class_map". All fields are combined with a logical 'AND'. */
export type IconItemClassMapBoolExp = {
  _and?: Maybe<Array<Maybe<IconItemClassMapBoolExp>>>;
  _not?: Maybe<IconItemClassMapBoolExp>;
  _or?: Maybe<Array<Maybe<IconItemClassMapBoolExp>>>;
  class?: Maybe<EnumItemClassEnumComparisonExp>;
  criteria?: Maybe<JsonbComparisonExp>;
  icon_id?: Maybe<UuidComparisonExp>;
  sequence?: Maybe<SmallintComparisonExp>;
};

/** unique or primary key constraints on table "icon_item_class_map" */
export enum IconItemClassMapConstraint {
  /** unique or primary key constraint */
  icon_item_category_map_category_sequence_key = 'icon_item_category_map_category_sequence_key',
  /** unique or primary key constraint */
  icon_item_category_map_pkey = 'icon_item_category_map_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type IconItemClassMapDeleteAtPathInput = {
  criteria?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type IconItemClassMapDeleteElemInput = {
  criteria?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type IconItemClassMapDeleteKeyInput = {
  criteria?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "icon_item_class_map" */
export type IconItemClassMapIncInput = {
  sequence?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "icon_item_class_map" */
export type IconItemClassMapInsertInput = {
  class?: Maybe<EnumItemClassEnum>;
  criteria?: Maybe<Scalars['jsonb']>;
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type IconItemClassMapMaxFields = {
  __typename?: 'icon_item_class_map_max_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "icon_item_class_map" */
export type IconItemClassMapMaxOrderBy = {
  icon_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type IconItemClassMapMinFields = {
  __typename?: 'icon_item_class_map_min_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "icon_item_class_map" */
export type IconItemClassMapMinOrderBy = {
  icon_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** response of any mutation on the table "icon_item_class_map" */
export type IconItemClassMapMutationResponse = {
  __typename?: 'icon_item_class_map_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<IconItemClassMap>;
};

/** input type for inserting object relation for remote table "icon_item_class_map" */
export type IconItemClassMapObjRelInsertInput = {
  data: IconItemClassMapInsertInput;
  on_conflict?: Maybe<IconItemClassMapOnConflict>;
};

/** on conflict condition type for table "icon_item_class_map" */
export type IconItemClassMapOnConflict = {
  constraint: IconItemClassMapConstraint;
  update_columns: Array<IconItemClassMapUpdateColumn>;
  where?: Maybe<IconItemClassMapBoolExp>;
};

/** ordering options when selecting data from "icon_item_class_map" */
export type IconItemClassMapOrderBy = {
  class?: Maybe<OrderBy>;
  criteria?: Maybe<OrderBy>;
  icon_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** primary key columns input for table: "icon_item_class_map" */
export type IconItemClassMapPkColumnsInput = {
  class: EnumItemClassEnum;
  icon_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type IconItemClassMapPrependInput = {
  criteria?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "icon_item_class_map" */
export enum IconItemClassMapSelectColumn {
  /** column name */
  class = 'class',
  /** column name */
  criteria = 'criteria',
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  sequence = 'sequence'
}

/** input type for updating data in table "icon_item_class_map" */
export type IconItemClassMapSetInput = {
  class?: Maybe<EnumItemClassEnum>;
  criteria?: Maybe<Scalars['jsonb']>;
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type IconItemClassMapStddevFields = {
  __typename?: 'icon_item_class_map_stddev_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "icon_item_class_map" */
export type IconItemClassMapStddevOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type IconItemClassMapStddevPopFields = {
  __typename?: 'icon_item_class_map_stddev_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "icon_item_class_map" */
export type IconItemClassMapStddevPopOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type IconItemClassMapStddevSampFields = {
  __typename?: 'icon_item_class_map_stddev_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "icon_item_class_map" */
export type IconItemClassMapStddevSampOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type IconItemClassMapSumFields = {
  __typename?: 'icon_item_class_map_sum_fields';
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "icon_item_class_map" */
export type IconItemClassMapSumOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** update columns of table "icon_item_class_map" */
export enum IconItemClassMapUpdateColumn {
  /** column name */
  class = 'class',
  /** column name */
  criteria = 'criteria',
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  sequence = 'sequence'
}

/** aggregate var_pop on columns */
export type IconItemClassMapVarPopFields = {
  __typename?: 'icon_item_class_map_var_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "icon_item_class_map" */
export type IconItemClassMapVarPopOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type IconItemClassMapVarSampFields = {
  __typename?: 'icon_item_class_map_var_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "icon_item_class_map" */
export type IconItemClassMapVarSampOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type IconItemClassMapVarianceFields = {
  __typename?: 'icon_item_class_map_variance_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "icon_item_class_map" */
export type IconItemClassMapVarianceOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/**
 * map icon to specific individual items
 *
 *
 * columns and relationships of "icon_item_map"
 */
export type IconItemMap = {
  __typename?: 'icon_item_map';
  /** An object relationship */
  icon: Icon;
  icon_id: Scalars['uuid'];
  /** An object relationship */
  item: Item;
  item_id: Scalars['Int'];
};

/** aggregated selection of "icon_item_map" */
export type IconItemMapAggregate = {
  __typename?: 'icon_item_map_aggregate';
  aggregate?: Maybe<IconItemMapAggregateFields>;
  nodes: Array<IconItemMap>;
};

/** aggregate fields of "icon_item_map" */
export type IconItemMapAggregateFields = {
  __typename?: 'icon_item_map_aggregate_fields';
  avg?: Maybe<IconItemMapAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IconItemMapMaxFields>;
  min?: Maybe<IconItemMapMinFields>;
  stddev?: Maybe<IconItemMapStddevFields>;
  stddev_pop?: Maybe<IconItemMapStddevPopFields>;
  stddev_samp?: Maybe<IconItemMapStddevSampFields>;
  sum?: Maybe<IconItemMapSumFields>;
  var_pop?: Maybe<IconItemMapVarPopFields>;
  var_samp?: Maybe<IconItemMapVarSampFields>;
  variance?: Maybe<IconItemMapVarianceFields>;
};


/** aggregate fields of "icon_item_map" */
export type IconItemMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconItemMapSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "icon_item_map" */
export type IconItemMapAggregateOrderBy = {
  avg?: Maybe<IconItemMapAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<IconItemMapMaxOrderBy>;
  min?: Maybe<IconItemMapMinOrderBy>;
  stddev?: Maybe<IconItemMapStddevOrderBy>;
  stddev_pop?: Maybe<IconItemMapStddevPopOrderBy>;
  stddev_samp?: Maybe<IconItemMapStddevSampOrderBy>;
  sum?: Maybe<IconItemMapSumOrderBy>;
  var_pop?: Maybe<IconItemMapVarPopOrderBy>;
  var_samp?: Maybe<IconItemMapVarSampOrderBy>;
  variance?: Maybe<IconItemMapVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "icon_item_map" */
export type IconItemMapArrRelInsertInput = {
  data: Array<IconItemMapInsertInput>;
  on_conflict?: Maybe<IconItemMapOnConflict>;
};

/** aggregate avg on columns */
export type IconItemMapAvgFields = {
  __typename?: 'icon_item_map_avg_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "icon_item_map" */
export type IconItemMapAvgOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "icon_item_map". All fields are combined with a logical 'AND'. */
export type IconItemMapBoolExp = {
  _and?: Maybe<Array<Maybe<IconItemMapBoolExp>>>;
  _not?: Maybe<IconItemMapBoolExp>;
  _or?: Maybe<Array<Maybe<IconItemMapBoolExp>>>;
  icon?: Maybe<IconBoolExp>;
  icon_id?: Maybe<UuidComparisonExp>;
  item?: Maybe<ItemBoolExp>;
  item_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "icon_item_map" */
export enum IconItemMapConstraint {
  /** unique or primary key constraint */
  icon_item_map_pkey = 'icon_item_map_pkey'
}

/** input type for incrementing integer column in table "icon_item_map" */
export type IconItemMapIncInput = {
  item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "icon_item_map" */
export type IconItemMapInsertInput = {
  icon?: Maybe<IconObjRelInsertInput>;
  icon_id?: Maybe<Scalars['uuid']>;
  item?: Maybe<ItemObjRelInsertInput>;
  item_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type IconItemMapMaxFields = {
  __typename?: 'icon_item_map_max_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "icon_item_map" */
export type IconItemMapMaxOrderBy = {
  icon_id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type IconItemMapMinFields = {
  __typename?: 'icon_item_map_min_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "icon_item_map" */
export type IconItemMapMinOrderBy = {
  icon_id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "icon_item_map" */
export type IconItemMapMutationResponse = {
  __typename?: 'icon_item_map_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<IconItemMap>;
};

/** input type for inserting object relation for remote table "icon_item_map" */
export type IconItemMapObjRelInsertInput = {
  data: IconItemMapInsertInput;
  on_conflict?: Maybe<IconItemMapOnConflict>;
};

/** on conflict condition type for table "icon_item_map" */
export type IconItemMapOnConflict = {
  constraint: IconItemMapConstraint;
  update_columns: Array<IconItemMapUpdateColumn>;
  where?: Maybe<IconItemMapBoolExp>;
};

/** ordering options when selecting data from "icon_item_map" */
export type IconItemMapOrderBy = {
  icon?: Maybe<IconOrderBy>;
  icon_id?: Maybe<OrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "icon_item_map" */
export type IconItemMapPkColumnsInput = {
  icon_id: Scalars['uuid'];
  item_id: Scalars['Int'];
};

/** select columns of table "icon_item_map" */
export enum IconItemMapSelectColumn {
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  item_id = 'item_id'
}

/** input type for updating data in table "icon_item_map" */
export type IconItemMapSetInput = {
  icon_id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type IconItemMapStddevFields = {
  __typename?: 'icon_item_map_stddev_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "icon_item_map" */
export type IconItemMapStddevOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type IconItemMapStddevPopFields = {
  __typename?: 'icon_item_map_stddev_pop_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "icon_item_map" */
export type IconItemMapStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type IconItemMapStddevSampFields = {
  __typename?: 'icon_item_map_stddev_samp_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "icon_item_map" */
export type IconItemMapStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type IconItemMapSumFields = {
  __typename?: 'icon_item_map_sum_fields';
  item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "icon_item_map" */
export type IconItemMapSumOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** update columns of table "icon_item_map" */
export enum IconItemMapUpdateColumn {
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  item_id = 'item_id'
}

/** aggregate var_pop on columns */
export type IconItemMapVarPopFields = {
  __typename?: 'icon_item_map_var_pop_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "icon_item_map" */
export type IconItemMapVarPopOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type IconItemMapVarSampFields = {
  __typename?: 'icon_item_map_var_samp_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "icon_item_map" */
export type IconItemMapVarSampOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type IconItemMapVarianceFields = {
  __typename?: 'icon_item_map_variance_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "icon_item_map" */
export type IconItemMapVarianceOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** columns and relationships of "icon_label_map" */
export type IconLabelMap = {
  __typename?: 'icon_label_map';
  /** An object relationship */
  icon: Icon;
  icon_id: Scalars['uuid'];
  label_id: Scalars['uuid'];
};

/** aggregated selection of "icon_label_map" */
export type IconLabelMapAggregate = {
  __typename?: 'icon_label_map_aggregate';
  aggregate?: Maybe<IconLabelMapAggregateFields>;
  nodes: Array<IconLabelMap>;
};

/** aggregate fields of "icon_label_map" */
export type IconLabelMapAggregateFields = {
  __typename?: 'icon_label_map_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IconLabelMapMaxFields>;
  min?: Maybe<IconLabelMapMinFields>;
};


/** aggregate fields of "icon_label_map" */
export type IconLabelMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconLabelMapSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "icon_label_map" */
export type IconLabelMapAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<IconLabelMapMaxOrderBy>;
  min?: Maybe<IconLabelMapMinOrderBy>;
};

/** input type for inserting array relation for remote table "icon_label_map" */
export type IconLabelMapArrRelInsertInput = {
  data: Array<IconLabelMapInsertInput>;
  on_conflict?: Maybe<IconLabelMapOnConflict>;
};

/** Boolean expression to filter rows from the table "icon_label_map". All fields are combined with a logical 'AND'. */
export type IconLabelMapBoolExp = {
  _and?: Maybe<Array<Maybe<IconLabelMapBoolExp>>>;
  _not?: Maybe<IconLabelMapBoolExp>;
  _or?: Maybe<Array<Maybe<IconLabelMapBoolExp>>>;
  icon?: Maybe<IconBoolExp>;
  icon_id?: Maybe<UuidComparisonExp>;
  label_id?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "icon_label_map" */
export enum IconLabelMapConstraint {
  /** unique or primary key constraint */
  icon_label_map_pkey = 'icon_label_map_pkey'
}

/** input type for inserting data into table "icon_label_map" */
export type IconLabelMapInsertInput = {
  icon?: Maybe<IconObjRelInsertInput>;
  icon_id?: Maybe<Scalars['uuid']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type IconLabelMapMaxFields = {
  __typename?: 'icon_label_map_max_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "icon_label_map" */
export type IconLabelMapMaxOrderBy = {
  icon_id?: Maybe<OrderBy>;
  label_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type IconLabelMapMinFields = {
  __typename?: 'icon_label_map_min_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "icon_label_map" */
export type IconLabelMapMinOrderBy = {
  icon_id?: Maybe<OrderBy>;
  label_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "icon_label_map" */
export type IconLabelMapMutationResponse = {
  __typename?: 'icon_label_map_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<IconLabelMap>;
};

/** input type for inserting object relation for remote table "icon_label_map" */
export type IconLabelMapObjRelInsertInput = {
  data: IconLabelMapInsertInput;
  on_conflict?: Maybe<IconLabelMapOnConflict>;
};

/** on conflict condition type for table "icon_label_map" */
export type IconLabelMapOnConflict = {
  constraint: IconLabelMapConstraint;
  update_columns: Array<IconLabelMapUpdateColumn>;
  where?: Maybe<IconLabelMapBoolExp>;
};

/** ordering options when selecting data from "icon_label_map" */
export type IconLabelMapOrderBy = {
  icon?: Maybe<IconOrderBy>;
  icon_id?: Maybe<OrderBy>;
  label_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "icon_label_map" */
export type IconLabelMapPkColumnsInput = {
  icon_id: Scalars['uuid'];
  label_id: Scalars['uuid'];
};

/** select columns of table "icon_label_map" */
export enum IconLabelMapSelectColumn {
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  label_id = 'label_id'
}

/** input type for updating data in table "icon_label_map" */
export type IconLabelMapSetInput = {
  icon_id?: Maybe<Scalars['uuid']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "icon_label_map" */
export enum IconLabelMapUpdateColumn {
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  label_id = 'label_id'
}

/** aggregate max on columns */
export type IconMaxFields = {
  __typename?: 'icon_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "icon" */
export type IconMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  data?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type IconMinFields = {
  __typename?: 'icon_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "icon" */
export type IconMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  data?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** response of any mutation on the table "icon" */
export type IconMutationResponse = {
  __typename?: 'icon_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Icon>;
};

/** input type for inserting object relation for remote table "icon" */
export type IconObjRelInsertInput = {
  data: IconInsertInput;
  on_conflict?: Maybe<IconOnConflict>;
};

/** on conflict condition type for table "icon" */
export type IconOnConflict = {
  constraint: IconConstraint;
  update_columns: Array<IconUpdateColumn>;
  where?: Maybe<IconBoolExp>;
};

/** ordering options when selecting data from "icon" */
export type IconOrderBy = {
  categories_aggregate?: Maybe<IconItemClassMapAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  data?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  items_aggregate?: Maybe<IconItemMapAggregateOrderBy>;
  labels_aggregate?: Maybe<IconLabelMapAggregateOrderBy>;
  title?: Maybe<OrderBy>;
};

/** primary key columns input for table: "icon" */
export type IconPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "icon" */
export enum IconSelectColumn {
  /** column name */
  created_at = 'created_at',
  /** column name */
  data = 'data',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  title = 'title'
}

/** input type for updating data in table "icon" */
export type IconSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "icon" */
export enum IconUpdateColumn {
  /** column name */
  created_at = 'created_at',
  /** column name */
  data = 'data',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  title = 'title'
}

/** columns and relationships of "item" */
export type Item = {
  __typename?: 'item';
  /** An array relationship */
  bundle: Array<ItemBundleMember>;
  /** An aggregated array relationship */
  bundle_aggregate: ItemBundleMemberAggregate;
  class: EnumItemClassEnum;
  id: Scalars['Int'];
  /** An array relationship */
  itemVariants: Array<ItemVariant>;
  /** An aggregated array relationship */
  itemVariants_aggregate: ItemVariantAggregate;
  /** An array relationship */
  labelTemplates: Array<LabelTemplateMap>;
  /** An aggregated array relationship */
  labelTemplates_aggregate: LabelTemplateMapAggregate;
  /** An array relationship */
  labels: Array<Label>;
  /** An aggregated array relationship */
  labels_aggregate: LabelAggregate;
  /** An array relationship */
  manufacturerItems: Array<ManufacturerItem>;
  /** An aggregated array relationship */
  manufacturerItems_aggregate: ManufacturerItemAggregate;
  object?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  orderItems: Array<OrderItem>;
  /** An aggregated array relationship */
  orderItems_aggregate: OrderItemAggregate;
  /** An array relationship */
  vendorItems: Array<VendorItem>;
  /** An aggregated array relationship */
  vendorItems_aggregate: VendorItemAggregate;
};


/** columns and relationships of "item" */
export type ItemBundleArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};


/** columns and relationships of "item" */
export type ItemBundleAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};


/** columns and relationships of "item" */
export type ItemItemVariantsArgs = {
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** columns and relationships of "item" */
export type ItemItemVariantsAggregateArgs = {
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** columns and relationships of "item" */
export type ItemLabelTemplatesArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/** columns and relationships of "item" */
export type ItemLabelTemplatesAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/** columns and relationships of "item" */
export type ItemLabelsArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** columns and relationships of "item" */
export type ItemLabelsAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** columns and relationships of "item" */
export type ItemManufacturerItemsArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};


/** columns and relationships of "item" */
export type ItemManufacturerItemsAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};


/** columns and relationships of "item" */
export type ItemObjectArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "item" */
export type ItemOrderItemsArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** columns and relationships of "item" */
export type ItemOrderItemsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** columns and relationships of "item" */
export type ItemVendorItemsArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};


/** columns and relationships of "item" */
export type ItemVendorItemsAggregateArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};

/** aggregated selection of "item" */
export type ItemAggregate = {
  __typename?: 'item_aggregate';
  aggregate?: Maybe<ItemAggregateFields>;
  nodes: Array<Item>;
};

/** aggregate fields of "item" */
export type ItemAggregateFields = {
  __typename?: 'item_aggregate_fields';
  avg?: Maybe<ItemAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemMaxFields>;
  min?: Maybe<ItemMinFields>;
  stddev?: Maybe<ItemStddevFields>;
  stddev_pop?: Maybe<ItemStddevPopFields>;
  stddev_samp?: Maybe<ItemStddevSampFields>;
  sum?: Maybe<ItemSumFields>;
  var_pop?: Maybe<ItemVarPopFields>;
  var_samp?: Maybe<ItemVarSampFields>;
  variance?: Maybe<ItemVarianceFields>;
};


/** aggregate fields of "item" */
export type ItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item" */
export type ItemAggregateOrderBy = {
  avg?: Maybe<ItemAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemMaxOrderBy>;
  min?: Maybe<ItemMinOrderBy>;
  stddev?: Maybe<ItemStddevOrderBy>;
  stddev_pop?: Maybe<ItemStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemStddevSampOrderBy>;
  sum?: Maybe<ItemSumOrderBy>;
  var_pop?: Maybe<ItemVarPopOrderBy>;
  var_samp?: Maybe<ItemVarSampOrderBy>;
  variance?: Maybe<ItemVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ItemAppendInput = {
  object?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "item" */
export type ItemArrRelInsertInput = {
  data: Array<ItemInsertInput>;
  on_conflict?: Maybe<ItemOnConflict>;
};

/** aggregate avg on columns */
export type ItemAvgFields = {
  __typename?: 'item_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item" */
export type ItemAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type ItemBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBoolExp>>>;
  _not?: Maybe<ItemBoolExp>;
  _or?: Maybe<Array<Maybe<ItemBoolExp>>>;
  bundle?: Maybe<ItemBundleMemberBoolExp>;
  class?: Maybe<EnumItemClassEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  itemVariants?: Maybe<ItemVariantBoolExp>;
  labelTemplates?: Maybe<LabelTemplateMapBoolExp>;
  labels?: Maybe<LabelBoolExp>;
  manufacturerItems?: Maybe<ManufacturerItemBoolExp>;
  object?: Maybe<JsonbComparisonExp>;
  orderItems?: Maybe<OrderItemBoolExp>;
  vendorItems?: Maybe<VendorItemBoolExp>;
};

/**
 * for items purchased as a bundle or kit (a box of screws for example)
 *
 *
 * columns and relationships of "item.bundle"
 */
export type ItemBundle = {
  __typename?: 'item_bundle';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  item: Item;
  /** An array relationship */
  items: Array<ItemBundleMember>;
  /** An aggregated array relationship */
  items_aggregate: ItemBundleMemberAggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/**
 * for items purchased as a bundle or kit (a box of screws for example)
 *
 *
 * columns and relationships of "item.bundle"
 */
export type ItemBundleItemsArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};


/**
 * for items purchased as a bundle or kit (a box of screws for example)
 *
 *
 * columns and relationships of "item.bundle"
 */
export type ItemBundleItemsAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};

/** aggregated selection of "item.bundle" */
export type ItemBundleAggregate = {
  __typename?: 'item_bundle_aggregate';
  aggregate?: Maybe<ItemBundleAggregateFields>;
  nodes: Array<ItemBundle>;
};

/** aggregate fields of "item.bundle" */
export type ItemBundleAggregateFields = {
  __typename?: 'item_bundle_aggregate_fields';
  avg?: Maybe<ItemBundleAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemBundleMaxFields>;
  min?: Maybe<ItemBundleMinFields>;
  stddev?: Maybe<ItemBundleStddevFields>;
  stddev_pop?: Maybe<ItemBundleStddevPopFields>;
  stddev_samp?: Maybe<ItemBundleStddevSampFields>;
  sum?: Maybe<ItemBundleSumFields>;
  var_pop?: Maybe<ItemBundleVarPopFields>;
  var_samp?: Maybe<ItemBundleVarSampFields>;
  variance?: Maybe<ItemBundleVarianceFields>;
};


/** aggregate fields of "item.bundle" */
export type ItemBundleAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemBundleSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.bundle" */
export type ItemBundleAggregateOrderBy = {
  avg?: Maybe<ItemBundleAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemBundleMaxOrderBy>;
  min?: Maybe<ItemBundleMinOrderBy>;
  stddev?: Maybe<ItemBundleStddevOrderBy>;
  stddev_pop?: Maybe<ItemBundleStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemBundleStddevSampOrderBy>;
  sum?: Maybe<ItemBundleSumOrderBy>;
  var_pop?: Maybe<ItemBundleVarPopOrderBy>;
  var_samp?: Maybe<ItemBundleVarSampOrderBy>;
  variance?: Maybe<ItemBundleVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.bundle" */
export type ItemBundleArrRelInsertInput = {
  data: Array<ItemBundleInsertInput>;
  on_conflict?: Maybe<ItemBundleOnConflict>;
};

/** aggregate avg on columns */
export type ItemBundleAvgFields = {
  __typename?: 'item_bundle_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.bundle" */
export type ItemBundleAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.bundle". All fields are combined with a logical 'AND'. */
export type ItemBundleBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBundleBoolExp>>>;
  _not?: Maybe<ItemBundleBoolExp>;
  _or?: Maybe<Array<Maybe<ItemBundleBoolExp>>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  item?: Maybe<ItemBoolExp>;
  items?: Maybe<ItemBundleMemberBoolExp>;
  name?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "item.bundle" */
export enum ItemBundleConstraint {
  /** unique or primary key constraint */
  item_bundle_name_key = 'item_bundle_name_key',
  /** unique or primary key constraint */
  item_bundle_pkey = 'item_bundle_pkey'
}

/** input type for incrementing integer column in table "item.bundle" */
export type ItemBundleIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "item.bundle" */
export type ItemBundleInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<ItemObjRelInsertInput>;
  items?: Maybe<ItemBundleMemberArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ItemBundleMaxFields = {
  __typename?: 'item_bundle_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "item.bundle" */
export type ItemBundleMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** columns and relationships of "item.bundle_member" */
export type ItemBundleMember = {
  __typename?: 'item_bundle_member';
  /** An object relationship */
  bundle: ItemBundle;
  /** An object relationship */
  item: Item;
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "item.bundle_member" */
export type ItemBundleMemberAggregate = {
  __typename?: 'item_bundle_member_aggregate';
  aggregate?: Maybe<ItemBundleMemberAggregateFields>;
  nodes: Array<ItemBundleMember>;
};

/** aggregate fields of "item.bundle_member" */
export type ItemBundleMemberAggregateFields = {
  __typename?: 'item_bundle_member_aggregate_fields';
  avg?: Maybe<ItemBundleMemberAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemBundleMemberMaxFields>;
  min?: Maybe<ItemBundleMemberMinFields>;
  stddev?: Maybe<ItemBundleMemberStddevFields>;
  stddev_pop?: Maybe<ItemBundleMemberStddevPopFields>;
  stddev_samp?: Maybe<ItemBundleMemberStddevSampFields>;
  sum?: Maybe<ItemBundleMemberSumFields>;
  var_pop?: Maybe<ItemBundleMemberVarPopFields>;
  var_samp?: Maybe<ItemBundleMemberVarSampFields>;
  variance?: Maybe<ItemBundleMemberVarianceFields>;
};


/** aggregate fields of "item.bundle_member" */
export type ItemBundleMemberAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.bundle_member" */
export type ItemBundleMemberAggregateOrderBy = {
  avg?: Maybe<ItemBundleMemberAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemBundleMemberMaxOrderBy>;
  min?: Maybe<ItemBundleMemberMinOrderBy>;
  stddev?: Maybe<ItemBundleMemberStddevOrderBy>;
  stddev_pop?: Maybe<ItemBundleMemberStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemBundleMemberStddevSampOrderBy>;
  sum?: Maybe<ItemBundleMemberSumOrderBy>;
  var_pop?: Maybe<ItemBundleMemberVarPopOrderBy>;
  var_samp?: Maybe<ItemBundleMemberVarSampOrderBy>;
  variance?: Maybe<ItemBundleMemberVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.bundle_member" */
export type ItemBundleMemberArrRelInsertInput = {
  data: Array<ItemBundleMemberInsertInput>;
  on_conflict?: Maybe<ItemBundleMemberOnConflict>;
};

/** aggregate avg on columns */
export type ItemBundleMemberAvgFields = {
  __typename?: 'item_bundle_member_avg_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.bundle_member" */
export type ItemBundleMemberAvgOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.bundle_member". All fields are combined with a logical 'AND'. */
export type ItemBundleMemberBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBundleMemberBoolExp>>>;
  _not?: Maybe<ItemBundleMemberBoolExp>;
  _or?: Maybe<Array<Maybe<ItemBundleMemberBoolExp>>>;
  bundle?: Maybe<ItemBundleBoolExp>;
  item?: Maybe<ItemBoolExp>;
  item_bundle_id?: Maybe<IntComparisonExp>;
  item_member_id?: Maybe<IntComparisonExp>;
  quantity?: Maybe<NumericComparisonExp>;
};

/** unique or primary key constraints on table "item.bundle_member" */
export enum ItemBundleMemberConstraint {
  /** unique or primary key constraint */
  item_bundle_map_pkey = 'item_bundle_map_pkey'
}

/** input type for incrementing integer column in table "item.bundle_member" */
export type ItemBundleMemberIncInput = {
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "item.bundle_member" */
export type ItemBundleMemberInsertInput = {
  bundle?: Maybe<ItemBundleObjRelInsertInput>;
  item?: Maybe<ItemObjRelInsertInput>;
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type ItemBundleMemberMaxFields = {
  __typename?: 'item_bundle_member_max_fields';
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "item.bundle_member" */
export type ItemBundleMemberMaxOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemBundleMemberMinFields = {
  __typename?: 'item_bundle_member_min_fields';
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "item.bundle_member" */
export type ItemBundleMemberMinOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.bundle_member" */
export type ItemBundleMemberMutationResponse = {
  __typename?: 'item_bundle_member_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemBundleMember>;
};

/** input type for inserting object relation for remote table "item.bundle_member" */
export type ItemBundleMemberObjRelInsertInput = {
  data: ItemBundleMemberInsertInput;
  on_conflict?: Maybe<ItemBundleMemberOnConflict>;
};

/** on conflict condition type for table "item.bundle_member" */
export type ItemBundleMemberOnConflict = {
  constraint: ItemBundleMemberConstraint;
  update_columns: Array<ItemBundleMemberUpdateColumn>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};

/** ordering options when selecting data from "item.bundle_member" */
export type ItemBundleMemberOrderBy = {
  bundle?: Maybe<ItemBundleOrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.bundle_member" */
export type ItemBundleMemberPkColumnsInput = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};

/** select columns of table "item.bundle_member" */
export enum ItemBundleMemberSelectColumn {
  /** column name */
  item_bundle_id = 'item_bundle_id',
  /** column name */
  item_member_id = 'item_member_id',
  /** column name */
  quantity = 'quantity'
}

/** input type for updating data in table "item.bundle_member" */
export type ItemBundleMemberSetInput = {
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type ItemBundleMemberStddevFields = {
  __typename?: 'item_bundle_member_stddev_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.bundle_member" */
export type ItemBundleMemberStddevOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemBundleMemberStddevPopFields = {
  __typename?: 'item_bundle_member_stddev_pop_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.bundle_member" */
export type ItemBundleMemberStddevPopOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemBundleMemberStddevSampFields = {
  __typename?: 'item_bundle_member_stddev_samp_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.bundle_member" */
export type ItemBundleMemberStddevSampOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemBundleMemberSumFields = {
  __typename?: 'item_bundle_member_sum_fields';
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "item.bundle_member" */
export type ItemBundleMemberSumOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** update columns of table "item.bundle_member" */
export enum ItemBundleMemberUpdateColumn {
  /** column name */
  item_bundle_id = 'item_bundle_id',
  /** column name */
  item_member_id = 'item_member_id',
  /** column name */
  quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type ItemBundleMemberVarPopFields = {
  __typename?: 'item_bundle_member_var_pop_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.bundle_member" */
export type ItemBundleMemberVarPopOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemBundleMemberVarSampFields = {
  __typename?: 'item_bundle_member_var_samp_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.bundle_member" */
export type ItemBundleMemberVarSampOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemBundleMemberVarianceFields = {
  __typename?: 'item_bundle_member_variance_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.bundle_member" */
export type ItemBundleMemberVarianceOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemBundleMinFields = {
  __typename?: 'item_bundle_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "item.bundle" */
export type ItemBundleMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.bundle" */
export type ItemBundleMutationResponse = {
  __typename?: 'item_bundle_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemBundle>;
};

/** input type for inserting object relation for remote table "item.bundle" */
export type ItemBundleObjRelInsertInput = {
  data: ItemBundleInsertInput;
  on_conflict?: Maybe<ItemBundleOnConflict>;
};

/** on conflict condition type for table "item.bundle" */
export type ItemBundleOnConflict = {
  constraint: ItemBundleConstraint;
  update_columns: Array<ItemBundleUpdateColumn>;
  where?: Maybe<ItemBundleBoolExp>;
};

/** ordering options when selecting data from "item.bundle" */
export type ItemBundleOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item?: Maybe<ItemOrderBy>;
  items_aggregate?: Maybe<ItemBundleMemberAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.bundle" */
export type ItemBundlePkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "item.bundle" */
export enum ItemBundleSelectColumn {
  /** column name */
  created_at = 'created_at',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "item.bundle" */
export type ItemBundleSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type ItemBundleStddevFields = {
  __typename?: 'item_bundle_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.bundle" */
export type ItemBundleStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemBundleStddevPopFields = {
  __typename?: 'item_bundle_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.bundle" */
export type ItemBundleStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemBundleStddevSampFields = {
  __typename?: 'item_bundle_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.bundle" */
export type ItemBundleStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemBundleSumFields = {
  __typename?: 'item_bundle_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item.bundle" */
export type ItemBundleSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "item.bundle" */
export enum ItemBundleUpdateColumn {
  /** column name */
  created_at = 'created_at',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

/** aggregate var_pop on columns */
export type ItemBundleVarPopFields = {
  __typename?: 'item_bundle_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.bundle" */
export type ItemBundleVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemBundleVarSampFields = {
  __typename?: 'item_bundle_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.bundle" */
export type ItemBundleVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemBundleVarianceFields = {
  __typename?: 'item_bundle_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.bundle" */
export type ItemBundleVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/**
 * electrically conductive cables (cables consist of multiple wires)
 *
 *
 * columns and relationships of "item.cable_conductive"
 */
export type ItemCableConductive = {
  __typename?: 'item_cable_conductive';
  cable_diameter?: Maybe<Scalars['numeric']>;
  cable_sheath_material?: Maybe<Scalars['String']>;
  conductor_count: Scalars['Int'];
  conductor_diameter?: Maybe<Scalars['numeric']>;
  conductor_diameter_label?: Maybe<Scalars['String']>;
  conductor_material?: Maybe<Scalars['String']>;
  conductor_sheath_material?: Maybe<Scalars['String']>;
  connector_a: Scalars['String'];
  connector_b: Scalars['String'];
  connector_extra?: Maybe<Scalars['jsonb']>;
  fire_rating?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  length?: Maybe<Scalars['numeric']>;
  max_frequency?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  sheath_max_temperature?: Maybe<Scalars['numeric']>;
  sheath_type?: Maybe<Scalars['String']>;
  shield_material?: Maybe<Scalars['String']>;
  smoke_rating?: Maybe<Scalars['String']>;
  standards_met?: Maybe<Scalars['jsonb']>;
  strand_count?: Maybe<Scalars['Int']>;
  unit: EnumUnitEnum;
};


/**
 * electrically conductive cables (cables consist of multiple wires)
 *
 *
 * columns and relationships of "item.cable_conductive"
 */
export type ItemCableConductiveConnectorExtraArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * electrically conductive cables (cables consist of multiple wires)
 *
 *
 * columns and relationships of "item.cable_conductive"
 */
export type ItemCableConductiveStandardsMetArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "item.cable_conductive" */
export type ItemCableConductiveAggregate = {
  __typename?: 'item_cable_conductive_aggregate';
  aggregate?: Maybe<ItemCableConductiveAggregateFields>;
  nodes: Array<ItemCableConductive>;
};

/** aggregate fields of "item.cable_conductive" */
export type ItemCableConductiveAggregateFields = {
  __typename?: 'item_cable_conductive_aggregate_fields';
  avg?: Maybe<ItemCableConductiveAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemCableConductiveMaxFields>;
  min?: Maybe<ItemCableConductiveMinFields>;
  stddev?: Maybe<ItemCableConductiveStddevFields>;
  stddev_pop?: Maybe<ItemCableConductiveStddevPopFields>;
  stddev_samp?: Maybe<ItemCableConductiveStddevSampFields>;
  sum?: Maybe<ItemCableConductiveSumFields>;
  var_pop?: Maybe<ItemCableConductiveVarPopFields>;
  var_samp?: Maybe<ItemCableConductiveVarSampFields>;
  variance?: Maybe<ItemCableConductiveVarianceFields>;
};


/** aggregate fields of "item.cable_conductive" */
export type ItemCableConductiveAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemCableConductiveSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.cable_conductive" */
export type ItemCableConductiveAggregateOrderBy = {
  avg?: Maybe<ItemCableConductiveAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemCableConductiveMaxOrderBy>;
  min?: Maybe<ItemCableConductiveMinOrderBy>;
  stddev?: Maybe<ItemCableConductiveStddevOrderBy>;
  stddev_pop?: Maybe<ItemCableConductiveStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemCableConductiveStddevSampOrderBy>;
  sum?: Maybe<ItemCableConductiveSumOrderBy>;
  var_pop?: Maybe<ItemCableConductiveVarPopOrderBy>;
  var_samp?: Maybe<ItemCableConductiveVarSampOrderBy>;
  variance?: Maybe<ItemCableConductiveVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ItemCableConductiveAppendInput = {
  connector_extra?: Maybe<Scalars['jsonb']>;
  standards_met?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "item.cable_conductive" */
export type ItemCableConductiveArrRelInsertInput = {
  data: Array<ItemCableConductiveInsertInput>;
  on_conflict?: Maybe<ItemCableConductiveOnConflict>;
};

/** aggregate avg on columns */
export type ItemCableConductiveAvgFields = {
  __typename?: 'item_cable_conductive_avg_fields';
  cable_diameter?: Maybe<Scalars['Float']>;
  conductor_count?: Maybe<Scalars['Float']>;
  conductor_diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  max_frequency?: Maybe<Scalars['Float']>;
  sheath_max_temperature?: Maybe<Scalars['Float']>;
  strand_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.cable_conductive" */
export type ItemCableConductiveAvgOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.cable_conductive". All fields are combined with a logical 'AND'. */
export type ItemCableConductiveBoolExp = {
  _and?: Maybe<Array<Maybe<ItemCableConductiveBoolExp>>>;
  _not?: Maybe<ItemCableConductiveBoolExp>;
  _or?: Maybe<Array<Maybe<ItemCableConductiveBoolExp>>>;
  cable_diameter?: Maybe<NumericComparisonExp>;
  cable_sheath_material?: Maybe<StringComparisonExp>;
  conductor_count?: Maybe<IntComparisonExp>;
  conductor_diameter?: Maybe<NumericComparisonExp>;
  conductor_diameter_label?: Maybe<StringComparisonExp>;
  conductor_material?: Maybe<StringComparisonExp>;
  conductor_sheath_material?: Maybe<StringComparisonExp>;
  connector_a?: Maybe<StringComparisonExp>;
  connector_b?: Maybe<StringComparisonExp>;
  connector_extra?: Maybe<JsonbComparisonExp>;
  fire_rating?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  length?: Maybe<NumericComparisonExp>;
  max_frequency?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  sheath_max_temperature?: Maybe<NumericComparisonExp>;
  sheath_type?: Maybe<StringComparisonExp>;
  shield_material?: Maybe<StringComparisonExp>;
  smoke_rating?: Maybe<StringComparisonExp>;
  standards_met?: Maybe<JsonbComparisonExp>;
  strand_count?: Maybe<IntComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
};

/** unique or primary key constraints on table "item.cable_conductive" */
export enum ItemCableConductiveConstraint {
  /** unique or primary key constraint */
  conductive_pkey = 'conductive_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ItemCableConductiveDeleteAtPathInput = {
  connector_extra?: Maybe<Array<Maybe<Scalars['String']>>>;
  standards_met?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ItemCableConductiveDeleteElemInput = {
  connector_extra?: Maybe<Scalars['Int']>;
  standards_met?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ItemCableConductiveDeleteKeyInput = {
  connector_extra?: Maybe<Scalars['String']>;
  standards_met?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "item.cable_conductive" */
export type ItemCableConductiveIncInput = {
  cable_diameter?: Maybe<Scalars['numeric']>;
  conductor_count?: Maybe<Scalars['Int']>;
  conductor_diameter?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  max_frequency?: Maybe<Scalars['Int']>;
  sheath_max_temperature?: Maybe<Scalars['numeric']>;
  strand_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "item.cable_conductive" */
export type ItemCableConductiveInsertInput = {
  cable_diameter?: Maybe<Scalars['numeric']>;
  cable_sheath_material?: Maybe<Scalars['String']>;
  conductor_count?: Maybe<Scalars['Int']>;
  conductor_diameter?: Maybe<Scalars['numeric']>;
  conductor_diameter_label?: Maybe<Scalars['String']>;
  conductor_material?: Maybe<Scalars['String']>;
  conductor_sheath_material?: Maybe<Scalars['String']>;
  connector_a?: Maybe<Scalars['String']>;
  connector_b?: Maybe<Scalars['String']>;
  connector_extra?: Maybe<Scalars['jsonb']>;
  fire_rating?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  max_frequency?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sheath_max_temperature?: Maybe<Scalars['numeric']>;
  sheath_type?: Maybe<Scalars['String']>;
  shield_material?: Maybe<Scalars['String']>;
  smoke_rating?: Maybe<Scalars['String']>;
  standards_met?: Maybe<Scalars['jsonb']>;
  strand_count?: Maybe<Scalars['Int']>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate max on columns */
export type ItemCableConductiveMaxFields = {
  __typename?: 'item_cable_conductive_max_fields';
  cable_diameter?: Maybe<Scalars['numeric']>;
  cable_sheath_material?: Maybe<Scalars['String']>;
  conductor_count?: Maybe<Scalars['Int']>;
  conductor_diameter?: Maybe<Scalars['numeric']>;
  conductor_diameter_label?: Maybe<Scalars['String']>;
  conductor_material?: Maybe<Scalars['String']>;
  conductor_sheath_material?: Maybe<Scalars['String']>;
  connector_a?: Maybe<Scalars['String']>;
  connector_b?: Maybe<Scalars['String']>;
  fire_rating?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  max_frequency?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sheath_max_temperature?: Maybe<Scalars['numeric']>;
  sheath_type?: Maybe<Scalars['String']>;
  shield_material?: Maybe<Scalars['String']>;
  smoke_rating?: Maybe<Scalars['String']>;
  strand_count?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "item.cable_conductive" */
export type ItemCableConductiveMaxOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  cable_sheath_material?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  conductor_diameter_label?: Maybe<OrderBy>;
  conductor_material?: Maybe<OrderBy>;
  conductor_sheath_material?: Maybe<OrderBy>;
  connector_a?: Maybe<OrderBy>;
  connector_b?: Maybe<OrderBy>;
  fire_rating?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  sheath_type?: Maybe<OrderBy>;
  shield_material?: Maybe<OrderBy>;
  smoke_rating?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemCableConductiveMinFields = {
  __typename?: 'item_cable_conductive_min_fields';
  cable_diameter?: Maybe<Scalars['numeric']>;
  cable_sheath_material?: Maybe<Scalars['String']>;
  conductor_count?: Maybe<Scalars['Int']>;
  conductor_diameter?: Maybe<Scalars['numeric']>;
  conductor_diameter_label?: Maybe<Scalars['String']>;
  conductor_material?: Maybe<Scalars['String']>;
  conductor_sheath_material?: Maybe<Scalars['String']>;
  connector_a?: Maybe<Scalars['String']>;
  connector_b?: Maybe<Scalars['String']>;
  fire_rating?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  max_frequency?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sheath_max_temperature?: Maybe<Scalars['numeric']>;
  sheath_type?: Maybe<Scalars['String']>;
  shield_material?: Maybe<Scalars['String']>;
  smoke_rating?: Maybe<Scalars['String']>;
  strand_count?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "item.cable_conductive" */
export type ItemCableConductiveMinOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  cable_sheath_material?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  conductor_diameter_label?: Maybe<OrderBy>;
  conductor_material?: Maybe<OrderBy>;
  conductor_sheath_material?: Maybe<OrderBy>;
  connector_a?: Maybe<OrderBy>;
  connector_b?: Maybe<OrderBy>;
  fire_rating?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  sheath_type?: Maybe<OrderBy>;
  shield_material?: Maybe<OrderBy>;
  smoke_rating?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.cable_conductive" */
export type ItemCableConductiveMutationResponse = {
  __typename?: 'item_cable_conductive_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemCableConductive>;
};

/** input type for inserting object relation for remote table "item.cable_conductive" */
export type ItemCableConductiveObjRelInsertInput = {
  data: ItemCableConductiveInsertInput;
  on_conflict?: Maybe<ItemCableConductiveOnConflict>;
};

/** on conflict condition type for table "item.cable_conductive" */
export type ItemCableConductiveOnConflict = {
  constraint: ItemCableConductiveConstraint;
  update_columns: Array<ItemCableConductiveUpdateColumn>;
  where?: Maybe<ItemCableConductiveBoolExp>;
};

/** ordering options when selecting data from "item.cable_conductive" */
export type ItemCableConductiveOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  cable_sheath_material?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  conductor_diameter_label?: Maybe<OrderBy>;
  conductor_material?: Maybe<OrderBy>;
  conductor_sheath_material?: Maybe<OrderBy>;
  connector_a?: Maybe<OrderBy>;
  connector_b?: Maybe<OrderBy>;
  connector_extra?: Maybe<OrderBy>;
  fire_rating?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  sheath_type?: Maybe<OrderBy>;
  shield_material?: Maybe<OrderBy>;
  smoke_rating?: Maybe<OrderBy>;
  standards_met?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.cable_conductive" */
export type ItemCableConductivePkColumnsInput = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ItemCableConductivePrependInput = {
  connector_extra?: Maybe<Scalars['jsonb']>;
  standards_met?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "item.cable_conductive" */
export enum ItemCableConductiveSelectColumn {
  /** column name */
  cable_diameter = 'cable_diameter',
  /** column name */
  cable_sheath_material = 'cable_sheath_material',
  /** column name */
  conductor_count = 'conductor_count',
  /** column name */
  conductor_diameter = 'conductor_diameter',
  /** column name */
  conductor_diameter_label = 'conductor_diameter_label',
  /** column name */
  conductor_material = 'conductor_material',
  /** column name */
  conductor_sheath_material = 'conductor_sheath_material',
  /** column name */
  connector_a = 'connector_a',
  /** column name */
  connector_b = 'connector_b',
  /** column name */
  connector_extra = 'connector_extra',
  /** column name */
  fire_rating = 'fire_rating',
  /** column name */
  id = 'id',
  /** column name */
  length = 'length',
  /** column name */
  max_frequency = 'max_frequency',
  /** column name */
  name = 'name',
  /** column name */
  sheath_max_temperature = 'sheath_max_temperature',
  /** column name */
  sheath_type = 'sheath_type',
  /** column name */
  shield_material = 'shield_material',
  /** column name */
  smoke_rating = 'smoke_rating',
  /** column name */
  standards_met = 'standards_met',
  /** column name */
  strand_count = 'strand_count',
  /** column name */
  unit = 'unit'
}

/** input type for updating data in table "item.cable_conductive" */
export type ItemCableConductiveSetInput = {
  cable_diameter?: Maybe<Scalars['numeric']>;
  cable_sheath_material?: Maybe<Scalars['String']>;
  conductor_count?: Maybe<Scalars['Int']>;
  conductor_diameter?: Maybe<Scalars['numeric']>;
  conductor_diameter_label?: Maybe<Scalars['String']>;
  conductor_material?: Maybe<Scalars['String']>;
  conductor_sheath_material?: Maybe<Scalars['String']>;
  connector_a?: Maybe<Scalars['String']>;
  connector_b?: Maybe<Scalars['String']>;
  connector_extra?: Maybe<Scalars['jsonb']>;
  fire_rating?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  max_frequency?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sheath_max_temperature?: Maybe<Scalars['numeric']>;
  sheath_type?: Maybe<Scalars['String']>;
  shield_material?: Maybe<Scalars['String']>;
  smoke_rating?: Maybe<Scalars['String']>;
  standards_met?: Maybe<Scalars['jsonb']>;
  strand_count?: Maybe<Scalars['Int']>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate stddev on columns */
export type ItemCableConductiveStddevFields = {
  __typename?: 'item_cable_conductive_stddev_fields';
  cable_diameter?: Maybe<Scalars['Float']>;
  conductor_count?: Maybe<Scalars['Float']>;
  conductor_diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  max_frequency?: Maybe<Scalars['Float']>;
  sheath_max_temperature?: Maybe<Scalars['Float']>;
  strand_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.cable_conductive" */
export type ItemCableConductiveStddevOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemCableConductiveStddevPopFields = {
  __typename?: 'item_cable_conductive_stddev_pop_fields';
  cable_diameter?: Maybe<Scalars['Float']>;
  conductor_count?: Maybe<Scalars['Float']>;
  conductor_diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  max_frequency?: Maybe<Scalars['Float']>;
  sheath_max_temperature?: Maybe<Scalars['Float']>;
  strand_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.cable_conductive" */
export type ItemCableConductiveStddevPopOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemCableConductiveStddevSampFields = {
  __typename?: 'item_cable_conductive_stddev_samp_fields';
  cable_diameter?: Maybe<Scalars['Float']>;
  conductor_count?: Maybe<Scalars['Float']>;
  conductor_diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  max_frequency?: Maybe<Scalars['Float']>;
  sheath_max_temperature?: Maybe<Scalars['Float']>;
  strand_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.cable_conductive" */
export type ItemCableConductiveStddevSampOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemCableConductiveSumFields = {
  __typename?: 'item_cable_conductive_sum_fields';
  cable_diameter?: Maybe<Scalars['numeric']>;
  conductor_count?: Maybe<Scalars['Int']>;
  conductor_diameter?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  max_frequency?: Maybe<Scalars['Int']>;
  sheath_max_temperature?: Maybe<Scalars['numeric']>;
  strand_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item.cable_conductive" */
export type ItemCableConductiveSumOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** update columns of table "item.cable_conductive" */
export enum ItemCableConductiveUpdateColumn {
  /** column name */
  cable_diameter = 'cable_diameter',
  /** column name */
  cable_sheath_material = 'cable_sheath_material',
  /** column name */
  conductor_count = 'conductor_count',
  /** column name */
  conductor_diameter = 'conductor_diameter',
  /** column name */
  conductor_diameter_label = 'conductor_diameter_label',
  /** column name */
  conductor_material = 'conductor_material',
  /** column name */
  conductor_sheath_material = 'conductor_sheath_material',
  /** column name */
  connector_a = 'connector_a',
  /** column name */
  connector_b = 'connector_b',
  /** column name */
  connector_extra = 'connector_extra',
  /** column name */
  fire_rating = 'fire_rating',
  /** column name */
  id = 'id',
  /** column name */
  length = 'length',
  /** column name */
  max_frequency = 'max_frequency',
  /** column name */
  name = 'name',
  /** column name */
  sheath_max_temperature = 'sheath_max_temperature',
  /** column name */
  sheath_type = 'sheath_type',
  /** column name */
  shield_material = 'shield_material',
  /** column name */
  smoke_rating = 'smoke_rating',
  /** column name */
  standards_met = 'standards_met',
  /** column name */
  strand_count = 'strand_count',
  /** column name */
  unit = 'unit'
}

/** aggregate var_pop on columns */
export type ItemCableConductiveVarPopFields = {
  __typename?: 'item_cable_conductive_var_pop_fields';
  cable_diameter?: Maybe<Scalars['Float']>;
  conductor_count?: Maybe<Scalars['Float']>;
  conductor_diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  max_frequency?: Maybe<Scalars['Float']>;
  sheath_max_temperature?: Maybe<Scalars['Float']>;
  strand_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.cable_conductive" */
export type ItemCableConductiveVarPopOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemCableConductiveVarSampFields = {
  __typename?: 'item_cable_conductive_var_samp_fields';
  cable_diameter?: Maybe<Scalars['Float']>;
  conductor_count?: Maybe<Scalars['Float']>;
  conductor_diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  max_frequency?: Maybe<Scalars['Float']>;
  sheath_max_temperature?: Maybe<Scalars['Float']>;
  strand_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.cable_conductive" */
export type ItemCableConductiveVarSampOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemCableConductiveVarianceFields = {
  __typename?: 'item_cable_conductive_variance_fields';
  cable_diameter?: Maybe<Scalars['Float']>;
  conductor_count?: Maybe<Scalars['Float']>;
  conductor_diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  max_frequency?: Maybe<Scalars['Float']>;
  sheath_max_temperature?: Maybe<Scalars['Float']>;
  strand_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.cable_conductive" */
export type ItemCableConductiveVarianceOrderBy = {
  cable_diameter?: Maybe<OrderBy>;
  conductor_count?: Maybe<OrderBy>;
  conductor_diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  max_frequency?: Maybe<OrderBy>;
  sheath_max_temperature?: Maybe<OrderBy>;
  strand_count?: Maybe<OrderBy>;
};

/** unique or primary key constraints on table "item" */
export enum ItemConstraint {
  /** unique or primary key constraint */
  item_pkey = 'item_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ItemDeleteAtPathInput = {
  object?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ItemDeleteElemInput = {
  object?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ItemDeleteKeyInput = {
  object?: Maybe<Scalars['String']>;
};

/** columns and relationships of "item.hardware_drill_bit" */
export type ItemHardwareDrillBit = {
  __typename?: 'item_hardware_drill_bit';
  diameter: Scalars['numeric'];
  finish?: Maybe<Scalars['String']>;
  /** NOTE: CAN BE DEFAULT */
  flute_direction: EnumItemHandednessEnum;
  /** NOTE: CAN BE DEFAULT */
  hammer: Scalars['Boolean'];
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  length: Scalars['numeric'];
  /** NOTE: CAN BE DEFAULT */
  length_class?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  maximum_drilling_depth?: Maybe<Scalars['numeric']>;
  name: Scalars['String'];
  point?: Maybe<Scalars['String']>;
  point_angle?: Maybe<Scalars['numeric']>;
  shank: Scalars['String'];
  shank_size?: Maybe<Scalars['numeric']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  style?: Maybe<Scalars['String']>;
  unit: Scalars['String'];
  use_material?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "item.hardware_drill_bit" */
export type ItemHardwareDrillBitSpecificationsMetArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "item.hardware_drill_bit" */
export type ItemHardwareDrillBitUseMaterialArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "item.hardware_drill_bit" */
export type ItemHardwareDrillBitAggregate = {
  __typename?: 'item_hardware_drill_bit_aggregate';
  aggregate?: Maybe<ItemHardwareDrillBitAggregateFields>;
  nodes: Array<ItemHardwareDrillBit>;
};

/** aggregate fields of "item.hardware_drill_bit" */
export type ItemHardwareDrillBitAggregateFields = {
  __typename?: 'item_hardware_drill_bit_aggregate_fields';
  avg?: Maybe<ItemHardwareDrillBitAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareDrillBitMaxFields>;
  min?: Maybe<ItemHardwareDrillBitMinFields>;
  stddev?: Maybe<ItemHardwareDrillBitStddevFields>;
  stddev_pop?: Maybe<ItemHardwareDrillBitStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareDrillBitStddevSampFields>;
  sum?: Maybe<ItemHardwareDrillBitSumFields>;
  var_pop?: Maybe<ItemHardwareDrillBitVarPopFields>;
  var_samp?: Maybe<ItemHardwareDrillBitVarSampFields>;
  variance?: Maybe<ItemHardwareDrillBitVarianceFields>;
};


/** aggregate fields of "item.hardware_drill_bit" */
export type ItemHardwareDrillBitAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareDrillBitSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitAggregateOrderBy = {
  avg?: Maybe<ItemHardwareDrillBitAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareDrillBitMaxOrderBy>;
  min?: Maybe<ItemHardwareDrillBitMinOrderBy>;
  stddev?: Maybe<ItemHardwareDrillBitStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareDrillBitStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareDrillBitStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareDrillBitSumOrderBy>;
  var_pop?: Maybe<ItemHardwareDrillBitVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareDrillBitVarSampOrderBy>;
  variance?: Maybe<ItemHardwareDrillBitVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ItemHardwareDrillBitAppendInput = {
  specifications_met?: Maybe<Scalars['jsonb']>;
  use_material?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitArrRelInsertInput = {
  data: Array<ItemHardwareDrillBitInsertInput>;
  on_conflict?: Maybe<ItemHardwareDrillBitOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareDrillBitAvgFields = {
  __typename?: 'item_hardware_drill_bit_avg_fields';
  diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  maximum_drilling_depth?: Maybe<Scalars['Float']>;
  point_angle?: Maybe<Scalars['Float']>;
  shank_size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitAvgOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_drill_bit". All fields are combined with a logical 'AND'. */
export type ItemHardwareDrillBitBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareDrillBitBoolExp>>>;
  _not?: Maybe<ItemHardwareDrillBitBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareDrillBitBoolExp>>>;
  diameter?: Maybe<NumericComparisonExp>;
  finish?: Maybe<StringComparisonExp>;
  flute_direction?: Maybe<EnumItemHandednessEnumComparisonExp>;
  hammer?: Maybe<BooleanComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  label?: Maybe<StringComparisonExp>;
  length?: Maybe<NumericComparisonExp>;
  length_class?: Maybe<StringComparisonExp>;
  material?: Maybe<StringComparisonExp>;
  maximum_drilling_depth?: Maybe<NumericComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  point?: Maybe<StringComparisonExp>;
  point_angle?: Maybe<NumericComparisonExp>;
  shank?: Maybe<StringComparisonExp>;
  shank_size?: Maybe<NumericComparisonExp>;
  specifications_met?: Maybe<JsonbComparisonExp>;
  style?: Maybe<StringComparisonExp>;
  unit?: Maybe<StringComparisonExp>;
  use_material?: Maybe<JsonbComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_drill_bit" */
export enum ItemHardwareDrillBitConstraint {
  /** unique or primary key constraint */
  hardware_drill_bit_pkey = 'hardware_drill_bit_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ItemHardwareDrillBitDeleteAtPathInput = {
  specifications_met?: Maybe<Array<Maybe<Scalars['String']>>>;
  use_material?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ItemHardwareDrillBitDeleteElemInput = {
  specifications_met?: Maybe<Scalars['Int']>;
  use_material?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ItemHardwareDrillBitDeleteKeyInput = {
  specifications_met?: Maybe<Scalars['String']>;
  use_material?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitIncInput = {
  diameter?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  maximum_drilling_depth?: Maybe<Scalars['numeric']>;
  point_angle?: Maybe<Scalars['numeric']>;
  shank_size?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitInsertInput = {
  diameter?: Maybe<Scalars['numeric']>;
  finish?: Maybe<Scalars['String']>;
  flute_direction?: Maybe<EnumItemHandednessEnum>;
  hammer?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['numeric']>;
  length_class?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  maximum_drilling_depth?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
  point_angle?: Maybe<Scalars['numeric']>;
  shank?: Maybe<Scalars['String']>;
  shank_size?: Maybe<Scalars['numeric']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  style?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  use_material?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type ItemHardwareDrillBitMaxFields = {
  __typename?: 'item_hardware_drill_bit_max_fields';
  diameter?: Maybe<Scalars['numeric']>;
  finish?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['numeric']>;
  length_class?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  maximum_drilling_depth?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
  point_angle?: Maybe<Scalars['numeric']>;
  shank?: Maybe<Scalars['String']>;
  shank_size?: Maybe<Scalars['numeric']>;
  style?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitMaxOrderBy = {
  diameter?: Maybe<OrderBy>;
  finish?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  length_class?: Maybe<OrderBy>;
  material?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  point?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
  style?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareDrillBitMinFields = {
  __typename?: 'item_hardware_drill_bit_min_fields';
  diameter?: Maybe<Scalars['numeric']>;
  finish?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['numeric']>;
  length_class?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  maximum_drilling_depth?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
  point_angle?: Maybe<Scalars['numeric']>;
  shank?: Maybe<Scalars['String']>;
  shank_size?: Maybe<Scalars['numeric']>;
  style?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitMinOrderBy = {
  diameter?: Maybe<OrderBy>;
  finish?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  length_class?: Maybe<OrderBy>;
  material?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  point?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
  style?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitMutationResponse = {
  __typename?: 'item_hardware_drill_bit_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareDrillBit>;
};

/** input type for inserting object relation for remote table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitObjRelInsertInput = {
  data: ItemHardwareDrillBitInsertInput;
  on_conflict?: Maybe<ItemHardwareDrillBitOnConflict>;
};

/** on conflict condition type for table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitOnConflict = {
  constraint: ItemHardwareDrillBitConstraint;
  update_columns: Array<ItemHardwareDrillBitUpdateColumn>;
  where?: Maybe<ItemHardwareDrillBitBoolExp>;
};

/** ordering options when selecting data from "item.hardware_drill_bit" */
export type ItemHardwareDrillBitOrderBy = {
  diameter?: Maybe<OrderBy>;
  finish?: Maybe<OrderBy>;
  flute_direction?: Maybe<OrderBy>;
  hammer?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  length_class?: Maybe<OrderBy>;
  material?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  point?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
  specifications_met?: Maybe<OrderBy>;
  style?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
  use_material?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_drill_bit" */
export type ItemHardwareDrillBitPkColumnsInput = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ItemHardwareDrillBitPrependInput = {
  specifications_met?: Maybe<Scalars['jsonb']>;
  use_material?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "item.hardware_drill_bit" */
export enum ItemHardwareDrillBitSelectColumn {
  /** column name */
  diameter = 'diameter',
  /** column name */
  finish = 'finish',
  /** column name */
  flute_direction = 'flute_direction',
  /** column name */
  hammer = 'hammer',
  /** column name */
  id = 'id',
  /** column name */
  label = 'label',
  /** column name */
  length = 'length',
  /** column name */
  length_class = 'length_class',
  /** column name */
  material = 'material',
  /** column name */
  maximum_drilling_depth = 'maximum_drilling_depth',
  /** column name */
  name = 'name',
  /** column name */
  point = 'point',
  /** column name */
  point_angle = 'point_angle',
  /** column name */
  shank = 'shank',
  /** column name */
  shank_size = 'shank_size',
  /** column name */
  specifications_met = 'specifications_met',
  /** column name */
  style = 'style',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** input type for updating data in table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitSetInput = {
  diameter?: Maybe<Scalars['numeric']>;
  finish?: Maybe<Scalars['String']>;
  flute_direction?: Maybe<EnumItemHandednessEnum>;
  hammer?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['numeric']>;
  length_class?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  maximum_drilling_depth?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
  point_angle?: Maybe<Scalars['numeric']>;
  shank?: Maybe<Scalars['String']>;
  shank_size?: Maybe<Scalars['numeric']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  style?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  use_material?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type ItemHardwareDrillBitStddevFields = {
  __typename?: 'item_hardware_drill_bit_stddev_fields';
  diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  maximum_drilling_depth?: Maybe<Scalars['Float']>;
  point_angle?: Maybe<Scalars['Float']>;
  shank_size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitStddevOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareDrillBitStddevPopFields = {
  __typename?: 'item_hardware_drill_bit_stddev_pop_fields';
  diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  maximum_drilling_depth?: Maybe<Scalars['Float']>;
  point_angle?: Maybe<Scalars['Float']>;
  shank_size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitStddevPopOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareDrillBitStddevSampFields = {
  __typename?: 'item_hardware_drill_bit_stddev_samp_fields';
  diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  maximum_drilling_depth?: Maybe<Scalars['Float']>;
  point_angle?: Maybe<Scalars['Float']>;
  shank_size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitStddevSampOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareDrillBitSumFields = {
  __typename?: 'item_hardware_drill_bit_sum_fields';
  diameter?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['numeric']>;
  maximum_drilling_depth?: Maybe<Scalars['numeric']>;
  point_angle?: Maybe<Scalars['numeric']>;
  shank_size?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitSumOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_drill_bit" */
export enum ItemHardwareDrillBitUpdateColumn {
  /** column name */
  diameter = 'diameter',
  /** column name */
  finish = 'finish',
  /** column name */
  flute_direction = 'flute_direction',
  /** column name */
  hammer = 'hammer',
  /** column name */
  id = 'id',
  /** column name */
  label = 'label',
  /** column name */
  length = 'length',
  /** column name */
  length_class = 'length_class',
  /** column name */
  material = 'material',
  /** column name */
  maximum_drilling_depth = 'maximum_drilling_depth',
  /** column name */
  name = 'name',
  /** column name */
  point = 'point',
  /** column name */
  point_angle = 'point_angle',
  /** column name */
  shank = 'shank',
  /** column name */
  shank_size = 'shank_size',
  /** column name */
  specifications_met = 'specifications_met',
  /** column name */
  style = 'style',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** aggregate var_pop on columns */
export type ItemHardwareDrillBitVarPopFields = {
  __typename?: 'item_hardware_drill_bit_var_pop_fields';
  diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  maximum_drilling_depth?: Maybe<Scalars['Float']>;
  point_angle?: Maybe<Scalars['Float']>;
  shank_size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitVarPopOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareDrillBitVarSampFields = {
  __typename?: 'item_hardware_drill_bit_var_samp_fields';
  diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  maximum_drilling_depth?: Maybe<Scalars['Float']>;
  point_angle?: Maybe<Scalars['Float']>;
  shank_size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitVarSampOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareDrillBitVarianceFields = {
  __typename?: 'item_hardware_drill_bit_variance_fields';
  diameter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  maximum_drilling_depth?: Maybe<Scalars['Float']>;
  point_angle?: Maybe<Scalars['Float']>;
  shank_size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_drill_bit" */
export type ItemHardwareDrillBitVarianceOrderBy = {
  diameter?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  length?: Maybe<OrderBy>;
  maximum_drilling_depth?: Maybe<OrderBy>;
  point_angle?: Maybe<OrderBy>;
  shank_size?: Maybe<OrderBy>;
};

/** columns and relationships of "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsert = {
  __typename?: 'item_hardware_fastener_insert';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertAggregate = {
  __typename?: 'item_hardware_fastener_insert_aggregate';
  aggregate?: Maybe<ItemHardwareFastenerInsertAggregateFields>;
  nodes: Array<ItemHardwareFastenerInsert>;
};

/** aggregate fields of "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertAggregateFields = {
  __typename?: 'item_hardware_fastener_insert_aggregate_fields';
  avg?: Maybe<ItemHardwareFastenerInsertAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareFastenerInsertMaxFields>;
  min?: Maybe<ItemHardwareFastenerInsertMinFields>;
  stddev?: Maybe<ItemHardwareFastenerInsertStddevFields>;
  stddev_pop?: Maybe<ItemHardwareFastenerInsertStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareFastenerInsertStddevSampFields>;
  sum?: Maybe<ItemHardwareFastenerInsertSumFields>;
  var_pop?: Maybe<ItemHardwareFastenerInsertVarPopFields>;
  var_samp?: Maybe<ItemHardwareFastenerInsertVarSampFields>;
  variance?: Maybe<ItemHardwareFastenerInsertVarianceFields>;
};


/** aggregate fields of "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerInsertSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerInsertAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareFastenerInsertMaxOrderBy>;
  min?: Maybe<ItemHardwareFastenerInsertMinOrderBy>;
  stddev?: Maybe<ItemHardwareFastenerInsertStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareFastenerInsertStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareFastenerInsertStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareFastenerInsertSumOrderBy>;
  var_pop?: Maybe<ItemHardwareFastenerInsertVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareFastenerInsertVarSampOrderBy>;
  variance?: Maybe<ItemHardwareFastenerInsertVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertArrRelInsertInput = {
  data: Array<ItemHardwareFastenerInsertInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerInsertOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareFastenerInsertAvgFields = {
  __typename?: 'item_hardware_fastener_insert_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_fastener_insert". All fields are combined with a logical 'AND'. */
export type ItemHardwareFastenerInsertBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerInsertBoolExp>>>;
  _not?: Maybe<ItemHardwareFastenerInsertBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerInsertBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_fastener_insert" */
export enum ItemHardwareFastenerInsertConstraint {
  /** unique or primary key constraint */
  hardware_fastener_insert_pkey = 'hardware_fastener_insert_pkey'
}

/** input type for incrementing integer column in table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertInsertInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ItemHardwareFastenerInsertMaxFields = {
  __typename?: 'item_hardware_fastener_insert_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertMaxOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareFastenerInsertMinFields = {
  __typename?: 'item_hardware_fastener_insert_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertMinOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertMutationResponse = {
  __typename?: 'item_hardware_fastener_insert_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerInsert>;
};

/** input type for inserting object relation for remote table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertObjRelInsertInput = {
  data: ItemHardwareFastenerInsertInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerInsertOnConflict>;
};

/** on conflict condition type for table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertOnConflict = {
  constraint: ItemHardwareFastenerInsertConstraint;
  update_columns: Array<ItemHardwareFastenerInsertUpdateColumn>;
  where?: Maybe<ItemHardwareFastenerInsertBoolExp>;
};

/** ordering options when selecting data from "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "item.hardware_fastener_insert" */
export enum ItemHardwareFastenerInsertSelectColumn {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name'
}

/** input type for updating data in table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertSetInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ItemHardwareFastenerInsertStddevFields = {
  __typename?: 'item_hardware_fastener_insert_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareFastenerInsertStddevPopFields = {
  __typename?: 'item_hardware_fastener_insert_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareFastenerInsertStddevSampFields = {
  __typename?: 'item_hardware_fastener_insert_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareFastenerInsertSumFields = {
  __typename?: 'item_hardware_fastener_insert_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_fastener_insert" */
export enum ItemHardwareFastenerInsertUpdateColumn {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name'
}

/** aggregate var_pop on columns */
export type ItemHardwareFastenerInsertVarPopFields = {
  __typename?: 'item_hardware_fastener_insert_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareFastenerInsertVarSampFields = {
  __typename?: 'item_hardware_fastener_insert_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareFastenerInsertVarianceFields = {
  __typename?: 'item_hardware_fastener_insert_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_fastener_insert" */
export type ItemHardwareFastenerInsertVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/**
 * Nuts are used to fasten machine threaded fasteners in through-hole applications. Lock nuts help prevent loosening.
 *
 *
 * columns and relationships of "item.hardware_fastener_nut"
 */
export type ItemHardwareFastenerNut = {
  __typename?: 'item_hardware_fastener_nut';
  description: Scalars['String'];
  form: EnumItemHardwareFastenerNutFormEnum;
  id: Scalars['Int'];
  name: Scalars['String'];
  strength?: Maybe<EnumItemHardwareFastenerNutStrengthEnum>;
  thread_fit?: Maybe<EnumItemHardwareFastenerNutThreadFitEnum>;
  unit: EnumUnitEnum;
};

/** aggregated selection of "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutAggregate = {
  __typename?: 'item_hardware_fastener_nut_aggregate';
  aggregate?: Maybe<ItemHardwareFastenerNutAggregateFields>;
  nodes: Array<ItemHardwareFastenerNut>;
};

/** aggregate fields of "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutAggregateFields = {
  __typename?: 'item_hardware_fastener_nut_aggregate_fields';
  avg?: Maybe<ItemHardwareFastenerNutAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareFastenerNutMaxFields>;
  min?: Maybe<ItemHardwareFastenerNutMinFields>;
  stddev?: Maybe<ItemHardwareFastenerNutStddevFields>;
  stddev_pop?: Maybe<ItemHardwareFastenerNutStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareFastenerNutStddevSampFields>;
  sum?: Maybe<ItemHardwareFastenerNutSumFields>;
  var_pop?: Maybe<ItemHardwareFastenerNutVarPopFields>;
  var_samp?: Maybe<ItemHardwareFastenerNutVarSampFields>;
  variance?: Maybe<ItemHardwareFastenerNutVarianceFields>;
};


/** aggregate fields of "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerNutSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerNutAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareFastenerNutMaxOrderBy>;
  min?: Maybe<ItemHardwareFastenerNutMinOrderBy>;
  stddev?: Maybe<ItemHardwareFastenerNutStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareFastenerNutStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareFastenerNutStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareFastenerNutSumOrderBy>;
  var_pop?: Maybe<ItemHardwareFastenerNutVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareFastenerNutVarSampOrderBy>;
  variance?: Maybe<ItemHardwareFastenerNutVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutArrRelInsertInput = {
  data: Array<ItemHardwareFastenerNutInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerNutOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareFastenerNutAvgFields = {
  __typename?: 'item_hardware_fastener_nut_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_fastener_nut". All fields are combined with a logical 'AND'. */
export type ItemHardwareFastenerNutBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerNutBoolExp>>>;
  _not?: Maybe<ItemHardwareFastenerNutBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerNutBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  form?: Maybe<EnumItemHardwareFastenerNutFormEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  strength?: Maybe<EnumItemHardwareFastenerNutStrengthEnumComparisonExp>;
  thread_fit?: Maybe<EnumItemHardwareFastenerNutThreadFitEnumComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_fastener_nut" */
export enum ItemHardwareFastenerNutConstraint {
  /** unique or primary key constraint */
  items_hardware_nut_pkey = 'items_hardware_nut_pkey'
}

/** input type for incrementing integer column in table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutInsertInput = {
  description?: Maybe<Scalars['String']>;
  form?: Maybe<EnumItemHardwareFastenerNutFormEnum>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  strength?: Maybe<EnumItemHardwareFastenerNutStrengthEnum>;
  thread_fit?: Maybe<EnumItemHardwareFastenerNutThreadFitEnum>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate max on columns */
export type ItemHardwareFastenerNutMaxFields = {
  __typename?: 'item_hardware_fastener_nut_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareFastenerNutMinFields = {
  __typename?: 'item_hardware_fastener_nut_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutMutationResponse = {
  __typename?: 'item_hardware_fastener_nut_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerNut>;
};

/** input type for inserting object relation for remote table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutObjRelInsertInput = {
  data: ItemHardwareFastenerNutInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerNutOnConflict>;
};

/** on conflict condition type for table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutOnConflict = {
  constraint: ItemHardwareFastenerNutConstraint;
  update_columns: Array<ItemHardwareFastenerNutUpdateColumn>;
  where?: Maybe<ItemHardwareFastenerNutBoolExp>;
};

/** ordering options when selecting data from "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutOrderBy = {
  description?: Maybe<OrderBy>;
  form?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  strength?: Maybe<OrderBy>;
  thread_fit?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "item.hardware_fastener_nut" */
export enum ItemHardwareFastenerNutSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  form = 'form',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  strength = 'strength',
  /** column name */
  thread_fit = 'thread_fit',
  /** column name */
  unit = 'unit'
}

/** input type for updating data in table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutSetInput = {
  description?: Maybe<Scalars['String']>;
  form?: Maybe<EnumItemHardwareFastenerNutFormEnum>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  strength?: Maybe<EnumItemHardwareFastenerNutStrengthEnum>;
  thread_fit?: Maybe<EnumItemHardwareFastenerNutThreadFitEnum>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate stddev on columns */
export type ItemHardwareFastenerNutStddevFields = {
  __typename?: 'item_hardware_fastener_nut_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareFastenerNutStddevPopFields = {
  __typename?: 'item_hardware_fastener_nut_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareFastenerNutStddevSampFields = {
  __typename?: 'item_hardware_fastener_nut_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareFastenerNutSumFields = {
  __typename?: 'item_hardware_fastener_nut_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_fastener_nut" */
export enum ItemHardwareFastenerNutUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  form = 'form',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  strength = 'strength',
  /** column name */
  thread_fit = 'thread_fit',
  /** column name */
  unit = 'unit'
}

/** aggregate var_pop on columns */
export type ItemHardwareFastenerNutVarPopFields = {
  __typename?: 'item_hardware_fastener_nut_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareFastenerNutVarSampFields = {
  __typename?: 'item_hardware_fastener_nut_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareFastenerNutVarianceFields = {
  __typename?: 'item_hardware_fastener_nut_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrew = {
  __typename?: 'item_hardware_fastener_screw';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  point: EnumItemHardwareFastenerScrewMachinePointEnum;
  unit: EnumUnitEnum;
  use_material?: Maybe<EnumItemHardwareUseMaterialEnum>;
};

/** aggregated selection of "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewAggregate = {
  __typename?: 'item_hardware_fastener_screw_aggregate';
  aggregate?: Maybe<ItemHardwareFastenerScrewAggregateFields>;
  nodes: Array<ItemHardwareFastenerScrew>;
};

/** aggregate fields of "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewAggregateFields = {
  __typename?: 'item_hardware_fastener_screw_aggregate_fields';
  avg?: Maybe<ItemHardwareFastenerScrewAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareFastenerScrewMaxFields>;
  min?: Maybe<ItemHardwareFastenerScrewMinFields>;
  stddev?: Maybe<ItemHardwareFastenerScrewStddevFields>;
  stddev_pop?: Maybe<ItemHardwareFastenerScrewStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareFastenerScrewStddevSampFields>;
  sum?: Maybe<ItemHardwareFastenerScrewSumFields>;
  var_pop?: Maybe<ItemHardwareFastenerScrewVarPopFields>;
  var_samp?: Maybe<ItemHardwareFastenerScrewVarSampFields>;
  variance?: Maybe<ItemHardwareFastenerScrewVarianceFields>;
};


/** aggregate fields of "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerScrewSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerScrewAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareFastenerScrewMaxOrderBy>;
  min?: Maybe<ItemHardwareFastenerScrewMinOrderBy>;
  stddev?: Maybe<ItemHardwareFastenerScrewStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareFastenerScrewStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareFastenerScrewStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareFastenerScrewSumOrderBy>;
  var_pop?: Maybe<ItemHardwareFastenerScrewVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareFastenerScrewVarSampOrderBy>;
  variance?: Maybe<ItemHardwareFastenerScrewVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewArrRelInsertInput = {
  data: Array<ItemHardwareFastenerScrewInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerScrewOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareFastenerScrewAvgFields = {
  __typename?: 'item_hardware_fastener_screw_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_fastener_screw". All fields are combined with a logical 'AND'. */
export type ItemHardwareFastenerScrewBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerScrewBoolExp>>>;
  _not?: Maybe<ItemHardwareFastenerScrewBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerScrewBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  point?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnumComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
  use_material?: Maybe<EnumItemHardwareUseMaterialEnumComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_fastener_screw" */
export enum ItemHardwareFastenerScrewConstraint {
  /** unique or primary key constraint */
  hardware_fastener_screw_pkey = 'hardware_fastener_screw_pkey'
}

/** input type for incrementing integer column in table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  point?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumItemHardwareUseMaterialEnum>;
};

/** columns and relationships of "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachine = {
  __typename?: 'item_hardware_fastener_screw_machine';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  /** Any value here means it is countersunk; A value != the `head_height` means it is only partially countersunk */
  countersunk_height?: Maybe<Scalars['numeric']>;
  default_fields?: Maybe<Scalars['jsonb']>;
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  diameter?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameter>;
  drive_size?: Maybe<Scalars['String']>;
  drive_type: EnumItemHardwareFastenerDriveEnum;
  /** This is what is typically stated as a fastener's length. Length of bolt that is within the material it is screwed into */
  embedded_length: Scalars['numeric'];
  /** Coating */
  finish?: Maybe<EnumItemHardwareFinishEnum>;
  hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  head_type: EnumItemHardwareFastenerScrewHeadEnum;
  id: Scalars['Int'];
  /** A computed field, executes function "item.hardware_fastener_screw_machine_label_templates_gen" */
  labelTemplates?: Maybe<Array<LabelTemplateMap>>;
  /** Material, such as Zinc coated steel or Stainless Steel */
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  name: Scalars['String'];
  point_type?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
  /**
   * Specifications Met ; array of Organizations that certified this
   * Examples:
   * ASME
   * DIN
   * ISO
   * ASTM
   * Mil. Spec.
   * Fed. Spec.
   * NAS
   * JIS
   */
  specifications_met?: Maybe<Scalars['jsonb']>;
  strength_class?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthEnum>;
  /** psi */
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter_label: Scalars['String'];
  thread_direction?: Maybe<EnumItemHandednessEnum>;
  thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  /** if fully threaded, this should be === `shaft_length` */
  thread_length?: Maybe<Scalars['numeric']>;
  /** TPI for usc, Pitch for metric ; ie. the 0.5 in M3 x 0.5 */
  thread_pitch: Scalars['numeric'];
  thread_standard: EnumItemHardwareFastenerThreadStandardEnum;
  /** ENUM:Unit */
  unit: EnumUnitEnum;
  /** Material this fastener is meant to thread into. */
  use_material?: Maybe<EnumItemHardwareUseMaterialEnum>;
};


/** columns and relationships of "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineDefaultFieldsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineLabelTemplatesArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/** columns and relationships of "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineSpecificationsMetArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineAggregate = {
  __typename?: 'item_hardware_fastener_screw_machine_aggregate';
  aggregate?: Maybe<ItemHardwareFastenerScrewMachineAggregateFields>;
  nodes: Array<ItemHardwareFastenerScrewMachine>;
};

/** aggregate fields of "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineAggregateFields = {
  __typename?: 'item_hardware_fastener_screw_machine_aggregate_fields';
  avg?: Maybe<ItemHardwareFastenerScrewMachineAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareFastenerScrewMachineMaxFields>;
  min?: Maybe<ItemHardwareFastenerScrewMachineMinFields>;
  stddev?: Maybe<ItemHardwareFastenerScrewMachineStddevFields>;
  stddev_pop?: Maybe<ItemHardwareFastenerScrewMachineStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareFastenerScrewMachineStddevSampFields>;
  sum?: Maybe<ItemHardwareFastenerScrewMachineSumFields>;
  var_pop?: Maybe<ItemHardwareFastenerScrewMachineVarPopFields>;
  var_samp?: Maybe<ItemHardwareFastenerScrewMachineVarSampFields>;
  variance?: Maybe<ItemHardwareFastenerScrewMachineVarianceFields>;
};


/** aggregate fields of "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerScrewMachineSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerScrewMachineAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareFastenerScrewMachineMaxOrderBy>;
  min?: Maybe<ItemHardwareFastenerScrewMachineMinOrderBy>;
  stddev?: Maybe<ItemHardwareFastenerScrewMachineStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareFastenerScrewMachineStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareFastenerScrewMachineStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareFastenerScrewMachineSumOrderBy>;
  var_pop?: Maybe<ItemHardwareFastenerScrewMachineVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareFastenerScrewMachineVarSampOrderBy>;
  variance?: Maybe<ItemHardwareFastenerScrewMachineVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ItemHardwareFastenerScrewMachineAppendInput = {
  default_fields?: Maybe<Scalars['jsonb']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineArrRelInsertInput = {
  data: Array<ItemHardwareFastenerScrewMachineInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerScrewMachineOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareFastenerScrewMachineAvgFields = {
  __typename?: 'item_hardware_fastener_screw_machine_avg_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineAvgOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_fastener_screw_machine". All fields are combined with a logical 'AND'. */
export type ItemHardwareFastenerScrewMachineBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerScrewMachineBoolExp>>>;
  _not?: Maybe<ItemHardwareFastenerScrewMachineBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerScrewMachineBoolExp>>>;
  countersunk_angle?: Maybe<NumericComparisonExp>;
  countersunk_height?: Maybe<NumericComparisonExp>;
  default_fields?: Maybe<JsonbComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  diameter?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>;
  drive_size?: Maybe<StringComparisonExp>;
  drive_type?: Maybe<EnumItemHardwareFastenerDriveEnumComparisonExp>;
  embedded_length?: Maybe<NumericComparisonExp>;
  finish?: Maybe<EnumItemHardwareFinishEnumComparisonExp>;
  hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnumComparisonExp>;
  head_diameter?: Maybe<NumericComparisonExp>;
  head_height?: Maybe<NumericComparisonExp>;
  head_type?: Maybe<EnumItemHardwareFastenerScrewHeadEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnumComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  point_type?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnumComparisonExp>;
  specifications_met?: Maybe<JsonbComparisonExp>;
  strength_class?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthEnumComparisonExp>;
  tensile_strength?: Maybe<NumericComparisonExp>;
  thread_diameter_label?: Maybe<StringComparisonExp>;
  thread_direction?: Maybe<EnumItemHandednessEnumComparisonExp>;
  thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnumComparisonExp>;
  thread_length?: Maybe<NumericComparisonExp>;
  thread_pitch?: Maybe<NumericComparisonExp>;
  thread_standard?: Maybe<EnumItemHardwareFastenerThreadStandardEnumComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
  use_material?: Maybe<EnumItemHardwareUseMaterialEnumComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_fastener_screw_machine" */
export enum ItemHardwareFastenerScrewMachineConstraint {
  /** unique or primary key constraint */
  item_hardware_fastener_bolt_pkey = 'item_hardware_fastener_bolt_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ItemHardwareFastenerScrewMachineDeleteAtPathInput = {
  default_fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  specifications_met?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ItemHardwareFastenerScrewMachineDeleteElemInput = {
  default_fields?: Maybe<Scalars['Int']>;
  specifications_met?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ItemHardwareFastenerScrewMachineDeleteKeyInput = {
  default_fields?: Maybe<Scalars['String']>;
  specifications_met?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineIncInput = {
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineInsertInput = {
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  default_fields?: Maybe<Scalars['jsonb']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterObjRelInsertInput>;
  drive_size?: Maybe<Scalars['String']>;
  drive_type?: Maybe<EnumItemHardwareFastenerDriveEnum>;
  embedded_length?: Maybe<Scalars['numeric']>;
  finish?: Maybe<EnumItemHardwareFinishEnum>;
  hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  head_type?: Maybe<EnumItemHardwareFastenerScrewHeadEnum>;
  id?: Maybe<Scalars['Int']>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  point_type?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  strength_class?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthEnum>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter_label?: Maybe<Scalars['String']>;
  thread_direction?: Maybe<EnumItemHandednessEnum>;
  thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
  thread_standard?: Maybe<EnumItemHardwareFastenerThreadStandardEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumItemHardwareUseMaterialEnum>;
};

/** aggregate max on columns */
export type ItemHardwareFastenerScrewMachineMaxFields = {
  __typename?: 'item_hardware_fastener_screw_machine_max_fields';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter_label?: Maybe<Scalars['String']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineMaxOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  drive_size?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter_label?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareFastenerScrewMachineMinFields = {
  __typename?: 'item_hardware_fastener_screw_machine_min_fields';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter_label?: Maybe<Scalars['String']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineMinOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  drive_size?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter_label?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineMutationResponse = {
  __typename?: 'item_hardware_fastener_screw_machine_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerScrewMachine>;
};

/** input type for inserting object relation for remote table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineObjRelInsertInput = {
  data: ItemHardwareFastenerScrewMachineInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerScrewMachineOnConflict>;
};

/** on conflict condition type for table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineOnConflict = {
  constraint: ItemHardwareFastenerScrewMachineConstraint;
  update_columns: Array<ItemHardwareFastenerScrewMachineUpdateColumn>;
  where?: Maybe<ItemHardwareFastenerScrewMachineBoolExp>;
};

/** ordering options when selecting data from "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  default_fields?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  diameter?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterOrderBy>;
  drive_size?: Maybe<OrderBy>;
  drive_type?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  finish?: Maybe<OrderBy>;
  hardness?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  head_type?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  material?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  point_type?: Maybe<OrderBy>;
  specifications_met?: Maybe<OrderBy>;
  strength_class?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter_label?: Maybe<OrderBy>;
  thread_direction?: Maybe<OrderBy>;
  thread_fit?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
  thread_standard?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
  use_material?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachinePkColumnsInput = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ItemHardwareFastenerScrewMachinePrependInput = {
  default_fields?: Maybe<Scalars['jsonb']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "item.hardware_fastener_screw_machine" */
export enum ItemHardwareFastenerScrewMachineSelectColumn {
  /** column name */
  countersunk_angle = 'countersunk_angle',
  /** column name */
  countersunk_height = 'countersunk_height',
  /** column name */
  default_fields = 'default_fields',
  /** column name */
  description = 'description',
  /** column name */
  drive_size = 'drive_size',
  /** column name */
  drive_type = 'drive_type',
  /** column name */
  embedded_length = 'embedded_length',
  /** column name */
  finish = 'finish',
  /** column name */
  hardness = 'hardness',
  /** column name */
  head_diameter = 'head_diameter',
  /** column name */
  head_height = 'head_height',
  /** column name */
  head_type = 'head_type',
  /** column name */
  id = 'id',
  /** column name */
  material = 'material',
  /** column name */
  name = 'name',
  /** column name */
  point_type = 'point_type',
  /** column name */
  specifications_met = 'specifications_met',
  /** column name */
  strength_class = 'strength_class',
  /** column name */
  tensile_strength = 'tensile_strength',
  /** column name */
  thread_diameter_label = 'thread_diameter_label',
  /** column name */
  thread_direction = 'thread_direction',
  /** column name */
  thread_fit = 'thread_fit',
  /** column name */
  thread_length = 'thread_length',
  /** column name */
  thread_pitch = 'thread_pitch',
  /** column name */
  thread_standard = 'thread_standard',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** input type for updating data in table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineSetInput = {
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  default_fields?: Maybe<Scalars['jsonb']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  drive_type?: Maybe<EnumItemHardwareFastenerDriveEnum>;
  embedded_length?: Maybe<Scalars['numeric']>;
  finish?: Maybe<EnumItemHardwareFinishEnum>;
  hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  head_type?: Maybe<EnumItemHardwareFastenerScrewHeadEnum>;
  id?: Maybe<Scalars['Int']>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  point_type?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  strength_class?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthEnum>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter_label?: Maybe<Scalars['String']>;
  thread_direction?: Maybe<EnumItemHandednessEnum>;
  thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
  thread_standard?: Maybe<EnumItemHardwareFastenerThreadStandardEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumItemHardwareUseMaterialEnum>;
};

/** aggregate stddev on columns */
export type ItemHardwareFastenerScrewMachineStddevFields = {
  __typename?: 'item_hardware_fastener_screw_machine_stddev_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineStddevOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareFastenerScrewMachineStddevPopFields = {
  __typename?: 'item_hardware_fastener_screw_machine_stddev_pop_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineStddevPopOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareFastenerScrewMachineStddevSampFields = {
  __typename?: 'item_hardware_fastener_screw_machine_stddev_samp_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineStddevSampOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareFastenerScrewMachineSumFields = {
  __typename?: 'item_hardware_fastener_screw_machine_sum_fields';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineSumOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_fastener_screw_machine" */
export enum ItemHardwareFastenerScrewMachineUpdateColumn {
  /** column name */
  countersunk_angle = 'countersunk_angle',
  /** column name */
  countersunk_height = 'countersunk_height',
  /** column name */
  default_fields = 'default_fields',
  /** column name */
  description = 'description',
  /** column name */
  drive_size = 'drive_size',
  /** column name */
  drive_type = 'drive_type',
  /** column name */
  embedded_length = 'embedded_length',
  /** column name */
  finish = 'finish',
  /** column name */
  hardness = 'hardness',
  /** column name */
  head_diameter = 'head_diameter',
  /** column name */
  head_height = 'head_height',
  /** column name */
  head_type = 'head_type',
  /** column name */
  id = 'id',
  /** column name */
  material = 'material',
  /** column name */
  name = 'name',
  /** column name */
  point_type = 'point_type',
  /** column name */
  specifications_met = 'specifications_met',
  /** column name */
  strength_class = 'strength_class',
  /** column name */
  tensile_strength = 'tensile_strength',
  /** column name */
  thread_diameter_label = 'thread_diameter_label',
  /** column name */
  thread_direction = 'thread_direction',
  /** column name */
  thread_fit = 'thread_fit',
  /** column name */
  thread_length = 'thread_length',
  /** column name */
  thread_pitch = 'thread_pitch',
  /** column name */
  thread_standard = 'thread_standard',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** aggregate var_pop on columns */
export type ItemHardwareFastenerScrewMachineVarPopFields = {
  __typename?: 'item_hardware_fastener_screw_machine_var_pop_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineVarPopOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareFastenerScrewMachineVarSampFields = {
  __typename?: 'item_hardware_fastener_screw_machine_var_samp_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineVarSampOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareFastenerScrewMachineVarianceFields = {
  __typename?: 'item_hardware_fastener_screw_machine_variance_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_fastener_screw_machine" */
export type ItemHardwareFastenerScrewMachineVarianceOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type ItemHardwareFastenerScrewMaxFields = {
  __typename?: 'item_hardware_fastener_screw_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareFastenerScrewMinFields = {
  __typename?: 'item_hardware_fastener_screw_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewMutationResponse = {
  __typename?: 'item_hardware_fastener_screw_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerScrew>;
};

/** input type for inserting object relation for remote table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewObjRelInsertInput = {
  data: ItemHardwareFastenerScrewInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerScrewOnConflict>;
};

/** on conflict condition type for table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewOnConflict = {
  constraint: ItemHardwareFastenerScrewConstraint;
  update_columns: Array<ItemHardwareFastenerScrewUpdateColumn>;
  where?: Maybe<ItemHardwareFastenerScrewBoolExp>;
};

/** ordering options when selecting data from "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  point?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
  use_material?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "item.hardware_fastener_screw" */
export enum ItemHardwareFastenerScrewSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  point = 'point',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** input type for updating data in table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  point?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumItemHardwareUseMaterialEnum>;
};

/** aggregate stddev on columns */
export type ItemHardwareFastenerScrewStddevFields = {
  __typename?: 'item_hardware_fastener_screw_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareFastenerScrewStddevPopFields = {
  __typename?: 'item_hardware_fastener_screw_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareFastenerScrewStddevSampFields = {
  __typename?: 'item_hardware_fastener_screw_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareFastenerScrewSumFields = {
  __typename?: 'item_hardware_fastener_screw_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_fastener_screw" */
export enum ItemHardwareFastenerScrewUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  point = 'point',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** aggregate var_pop on columns */
export type ItemHardwareFastenerScrewVarPopFields = {
  __typename?: 'item_hardware_fastener_screw_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareFastenerScrewVarSampFields = {
  __typename?: 'item_hardware_fastener_screw_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareFastenerScrewVarianceFields = {
  __typename?: 'item_hardware_fastener_screw_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_fastener_screw" */
export type ItemHardwareFastenerScrewVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoff = {
  __typename?: 'item_hardware_fastener_standoff';
  description?: Maybe<Scalars['String']>;
  female_length?: Maybe<Scalars['numeric']>;
  female_od?: Maybe<Scalars['numeric']>;
  female_thread_diameter?: Maybe<Scalars['numeric']>;
  /** In a typical male-female standoff, this is usually listed as the item's length */
  female_thread_length?: Maybe<Scalars['numeric']>;
  female_thread_pitch?: Maybe<Scalars['numeric']>;
  female_thread_tolerance?: Maybe<Scalars['String']>;
  hardness: EnumItemHardwareFastenerScrewHardnessEnum;
  id: Scalars['Int'];
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  material: EnumItemHardwareFastenerMaterialEnum;
  /** Male threads don't have an OD, but there may still be a portion of the spacer that is wider than the female portion ( or there is no female end ) */
  max_od?: Maybe<Scalars['numeric']>;
  name: Scalars['String'];
  shape: EnumItemHardwareFastenerStandoffShapeEnum;
  unit: EnumUnitEnum;
};

/** aggregated selection of "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffAggregate = {
  __typename?: 'item_hardware_fastener_standoff_aggregate';
  aggregate?: Maybe<ItemHardwareFastenerStandoffAggregateFields>;
  nodes: Array<ItemHardwareFastenerStandoff>;
};

/** aggregate fields of "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffAggregateFields = {
  __typename?: 'item_hardware_fastener_standoff_aggregate_fields';
  avg?: Maybe<ItemHardwareFastenerStandoffAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareFastenerStandoffMaxFields>;
  min?: Maybe<ItemHardwareFastenerStandoffMinFields>;
  stddev?: Maybe<ItemHardwareFastenerStandoffStddevFields>;
  stddev_pop?: Maybe<ItemHardwareFastenerStandoffStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareFastenerStandoffStddevSampFields>;
  sum?: Maybe<ItemHardwareFastenerStandoffSumFields>;
  var_pop?: Maybe<ItemHardwareFastenerStandoffVarPopFields>;
  var_samp?: Maybe<ItemHardwareFastenerStandoffVarSampFields>;
  variance?: Maybe<ItemHardwareFastenerStandoffVarianceFields>;
};


/** aggregate fields of "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerStandoffSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerStandoffAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareFastenerStandoffMaxOrderBy>;
  min?: Maybe<ItemHardwareFastenerStandoffMinOrderBy>;
  stddev?: Maybe<ItemHardwareFastenerStandoffStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareFastenerStandoffStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareFastenerStandoffStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareFastenerStandoffSumOrderBy>;
  var_pop?: Maybe<ItemHardwareFastenerStandoffVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareFastenerStandoffVarSampOrderBy>;
  variance?: Maybe<ItemHardwareFastenerStandoffVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffArrRelInsertInput = {
  data: Array<ItemHardwareFastenerStandoffInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerStandoffOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareFastenerStandoffAvgFields = {
  __typename?: 'item_hardware_fastener_standoff_avg_fields';
  female_length?: Maybe<Scalars['Float']>;
  female_od?: Maybe<Scalars['Float']>;
  female_thread_diameter?: Maybe<Scalars['Float']>;
  female_thread_length?: Maybe<Scalars['Float']>;
  female_thread_pitch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  male_length?: Maybe<Scalars['Float']>;
  male_thread_diameter?: Maybe<Scalars['Float']>;
  male_thread_length?: Maybe<Scalars['Float']>;
  male_thread_pitch?: Maybe<Scalars['Float']>;
  max_od?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffAvgOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_fastener_standoff". All fields are combined with a logical 'AND'. */
export type ItemHardwareFastenerStandoffBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerStandoffBoolExp>>>;
  _not?: Maybe<ItemHardwareFastenerStandoffBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerStandoffBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  female_length?: Maybe<NumericComparisonExp>;
  female_od?: Maybe<NumericComparisonExp>;
  female_thread_diameter?: Maybe<NumericComparisonExp>;
  female_thread_length?: Maybe<NumericComparisonExp>;
  female_thread_pitch?: Maybe<NumericComparisonExp>;
  female_thread_tolerance?: Maybe<StringComparisonExp>;
  hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  male_length?: Maybe<NumericComparisonExp>;
  male_thread_diameter?: Maybe<NumericComparisonExp>;
  male_thread_length?: Maybe<NumericComparisonExp>;
  male_thread_pitch?: Maybe<NumericComparisonExp>;
  male_thread_tolerance?: Maybe<StringComparisonExp>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnumComparisonExp>;
  max_od?: Maybe<NumericComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  shape?: Maybe<EnumItemHardwareFastenerStandoffShapeEnumComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_fastener_standoff" */
export enum ItemHardwareFastenerStandoffConstraint {
  /** unique or primary key constraint */
  hardware_fastener_standoff_pkey = 'hardware_fastener_standoff_pkey'
}

/** input type for incrementing integer column in table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffIncInput = {
  female_length?: Maybe<Scalars['numeric']>;
  female_od?: Maybe<Scalars['numeric']>;
  female_thread_diameter?: Maybe<Scalars['numeric']>;
  female_thread_length?: Maybe<Scalars['numeric']>;
  female_thread_pitch?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  max_od?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffInsertInput = {
  description?: Maybe<Scalars['String']>;
  female_length?: Maybe<Scalars['numeric']>;
  female_od?: Maybe<Scalars['numeric']>;
  female_thread_diameter?: Maybe<Scalars['numeric']>;
  female_thread_length?: Maybe<Scalars['numeric']>;
  female_thread_pitch?: Maybe<Scalars['numeric']>;
  female_thread_tolerance?: Maybe<Scalars['String']>;
  hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  max_od?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  shape?: Maybe<EnumItemHardwareFastenerStandoffShapeEnum>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate max on columns */
export type ItemHardwareFastenerStandoffMaxFields = {
  __typename?: 'item_hardware_fastener_standoff_max_fields';
  description?: Maybe<Scalars['String']>;
  female_length?: Maybe<Scalars['numeric']>;
  female_od?: Maybe<Scalars['numeric']>;
  female_thread_diameter?: Maybe<Scalars['numeric']>;
  female_thread_length?: Maybe<Scalars['numeric']>;
  female_thread_pitch?: Maybe<Scalars['numeric']>;
  female_thread_tolerance?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  max_od?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffMaxOrderBy = {
  description?: Maybe<OrderBy>;
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  female_thread_tolerance?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  male_thread_tolerance?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareFastenerStandoffMinFields = {
  __typename?: 'item_hardware_fastener_standoff_min_fields';
  description?: Maybe<Scalars['String']>;
  female_length?: Maybe<Scalars['numeric']>;
  female_od?: Maybe<Scalars['numeric']>;
  female_thread_diameter?: Maybe<Scalars['numeric']>;
  female_thread_length?: Maybe<Scalars['numeric']>;
  female_thread_pitch?: Maybe<Scalars['numeric']>;
  female_thread_tolerance?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  max_od?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffMinOrderBy = {
  description?: Maybe<OrderBy>;
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  female_thread_tolerance?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  male_thread_tolerance?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffMutationResponse = {
  __typename?: 'item_hardware_fastener_standoff_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerStandoff>;
};

/** input type for inserting object relation for remote table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffObjRelInsertInput = {
  data: ItemHardwareFastenerStandoffInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerStandoffOnConflict>;
};

/** on conflict condition type for table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffOnConflict = {
  constraint: ItemHardwareFastenerStandoffConstraint;
  update_columns: Array<ItemHardwareFastenerStandoffUpdateColumn>;
  where?: Maybe<ItemHardwareFastenerStandoffBoolExp>;
};

/** ordering options when selecting data from "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffOrderBy = {
  description?: Maybe<OrderBy>;
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  female_thread_tolerance?: Maybe<OrderBy>;
  hardness?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  male_thread_tolerance?: Maybe<OrderBy>;
  material?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  shape?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "item.hardware_fastener_standoff" */
export enum ItemHardwareFastenerStandoffSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  female_length = 'female_length',
  /** column name */
  female_od = 'female_od',
  /** column name */
  female_thread_diameter = 'female_thread_diameter',
  /** column name */
  female_thread_length = 'female_thread_length',
  /** column name */
  female_thread_pitch = 'female_thread_pitch',
  /** column name */
  female_thread_tolerance = 'female_thread_tolerance',
  /** column name */
  hardness = 'hardness',
  /** column name */
  id = 'id',
  /** column name */
  male_length = 'male_length',
  /** column name */
  male_thread_diameter = 'male_thread_diameter',
  /** column name */
  male_thread_length = 'male_thread_length',
  /** column name */
  male_thread_pitch = 'male_thread_pitch',
  /** column name */
  male_thread_tolerance = 'male_thread_tolerance',
  /** column name */
  material = 'material',
  /** column name */
  max_od = 'max_od',
  /** column name */
  name = 'name',
  /** column name */
  shape = 'shape',
  /** column name */
  unit = 'unit'
}

/** input type for updating data in table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffSetInput = {
  description?: Maybe<Scalars['String']>;
  female_length?: Maybe<Scalars['numeric']>;
  female_od?: Maybe<Scalars['numeric']>;
  female_thread_diameter?: Maybe<Scalars['numeric']>;
  female_thread_length?: Maybe<Scalars['numeric']>;
  female_thread_pitch?: Maybe<Scalars['numeric']>;
  female_thread_tolerance?: Maybe<Scalars['String']>;
  hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  max_od?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  shape?: Maybe<EnumItemHardwareFastenerStandoffShapeEnum>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate stddev on columns */
export type ItemHardwareFastenerStandoffStddevFields = {
  __typename?: 'item_hardware_fastener_standoff_stddev_fields';
  female_length?: Maybe<Scalars['Float']>;
  female_od?: Maybe<Scalars['Float']>;
  female_thread_diameter?: Maybe<Scalars['Float']>;
  female_thread_length?: Maybe<Scalars['Float']>;
  female_thread_pitch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  male_length?: Maybe<Scalars['Float']>;
  male_thread_diameter?: Maybe<Scalars['Float']>;
  male_thread_length?: Maybe<Scalars['Float']>;
  male_thread_pitch?: Maybe<Scalars['Float']>;
  max_od?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffStddevOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareFastenerStandoffStddevPopFields = {
  __typename?: 'item_hardware_fastener_standoff_stddev_pop_fields';
  female_length?: Maybe<Scalars['Float']>;
  female_od?: Maybe<Scalars['Float']>;
  female_thread_diameter?: Maybe<Scalars['Float']>;
  female_thread_length?: Maybe<Scalars['Float']>;
  female_thread_pitch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  male_length?: Maybe<Scalars['Float']>;
  male_thread_diameter?: Maybe<Scalars['Float']>;
  male_thread_length?: Maybe<Scalars['Float']>;
  male_thread_pitch?: Maybe<Scalars['Float']>;
  max_od?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffStddevPopOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareFastenerStandoffStddevSampFields = {
  __typename?: 'item_hardware_fastener_standoff_stddev_samp_fields';
  female_length?: Maybe<Scalars['Float']>;
  female_od?: Maybe<Scalars['Float']>;
  female_thread_diameter?: Maybe<Scalars['Float']>;
  female_thread_length?: Maybe<Scalars['Float']>;
  female_thread_pitch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  male_length?: Maybe<Scalars['Float']>;
  male_thread_diameter?: Maybe<Scalars['Float']>;
  male_thread_length?: Maybe<Scalars['Float']>;
  male_thread_pitch?: Maybe<Scalars['Float']>;
  max_od?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffStddevSampOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareFastenerStandoffSumFields = {
  __typename?: 'item_hardware_fastener_standoff_sum_fields';
  female_length?: Maybe<Scalars['numeric']>;
  female_od?: Maybe<Scalars['numeric']>;
  female_thread_diameter?: Maybe<Scalars['numeric']>;
  female_thread_length?: Maybe<Scalars['numeric']>;
  female_thread_pitch?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  max_od?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffSumOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_fastener_standoff" */
export enum ItemHardwareFastenerStandoffUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  female_length = 'female_length',
  /** column name */
  female_od = 'female_od',
  /** column name */
  female_thread_diameter = 'female_thread_diameter',
  /** column name */
  female_thread_length = 'female_thread_length',
  /** column name */
  female_thread_pitch = 'female_thread_pitch',
  /** column name */
  female_thread_tolerance = 'female_thread_tolerance',
  /** column name */
  hardness = 'hardness',
  /** column name */
  id = 'id',
  /** column name */
  male_length = 'male_length',
  /** column name */
  male_thread_diameter = 'male_thread_diameter',
  /** column name */
  male_thread_length = 'male_thread_length',
  /** column name */
  male_thread_pitch = 'male_thread_pitch',
  /** column name */
  male_thread_tolerance = 'male_thread_tolerance',
  /** column name */
  material = 'material',
  /** column name */
  max_od = 'max_od',
  /** column name */
  name = 'name',
  /** column name */
  shape = 'shape',
  /** column name */
  unit = 'unit'
}

/** aggregate var_pop on columns */
export type ItemHardwareFastenerStandoffVarPopFields = {
  __typename?: 'item_hardware_fastener_standoff_var_pop_fields';
  female_length?: Maybe<Scalars['Float']>;
  female_od?: Maybe<Scalars['Float']>;
  female_thread_diameter?: Maybe<Scalars['Float']>;
  female_thread_length?: Maybe<Scalars['Float']>;
  female_thread_pitch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  male_length?: Maybe<Scalars['Float']>;
  male_thread_diameter?: Maybe<Scalars['Float']>;
  male_thread_length?: Maybe<Scalars['Float']>;
  male_thread_pitch?: Maybe<Scalars['Float']>;
  max_od?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffVarPopOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareFastenerStandoffVarSampFields = {
  __typename?: 'item_hardware_fastener_standoff_var_samp_fields';
  female_length?: Maybe<Scalars['Float']>;
  female_od?: Maybe<Scalars['Float']>;
  female_thread_diameter?: Maybe<Scalars['Float']>;
  female_thread_length?: Maybe<Scalars['Float']>;
  female_thread_pitch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  male_length?: Maybe<Scalars['Float']>;
  male_thread_diameter?: Maybe<Scalars['Float']>;
  male_thread_length?: Maybe<Scalars['Float']>;
  male_thread_pitch?: Maybe<Scalars['Float']>;
  max_od?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffVarSampOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareFastenerStandoffVarianceFields = {
  __typename?: 'item_hardware_fastener_standoff_variance_fields';
  female_length?: Maybe<Scalars['Float']>;
  female_od?: Maybe<Scalars['Float']>;
  female_thread_diameter?: Maybe<Scalars['Float']>;
  female_thread_length?: Maybe<Scalars['Float']>;
  female_thread_pitch?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  male_length?: Maybe<Scalars['Float']>;
  male_thread_diameter?: Maybe<Scalars['Float']>;
  male_thread_length?: Maybe<Scalars['Float']>;
  male_thread_pitch?: Maybe<Scalars['Float']>;
  max_od?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_fastener_standoff" */
export type ItemHardwareFastenerStandoffVarianceOrderBy = {
  female_length?: Maybe<OrderBy>;
  female_od?: Maybe<OrderBy>;
  female_thread_diameter?: Maybe<OrderBy>;
  female_thread_length?: Maybe<OrderBy>;
  female_thread_pitch?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  male_length?: Maybe<OrderBy>;
  male_thread_diameter?: Maybe<OrderBy>;
  male_thread_length?: Maybe<OrderBy>;
  male_thread_pitch?: Maybe<OrderBy>;
  max_od?: Maybe<OrderBy>;
};

/**
 * Washers spread the load over a greater surface area when tightening a bolt, screw, or nut. Lock washers help prevent loosening.
 *
 *
 * columns and relationships of "item.hardware_fastener_washer"
 */
export type ItemHardwareFastenerWasher = {
  __typename?: 'item_hardware_fastener_washer';
  description?: Maybe<Scalars['String']>;
  diameter_inner?: Maybe<Scalars['numeric']>;
  diameter_outer?: Maybe<Scalars['numeric']>;
  diameter_use: Scalars['numeric'];
  finish?: Maybe<EnumItemHardwareFinishEnum>;
  form: EnumItemHardwareFastenerWasherFormEnum;
  id: Scalars['Int'];
  lock_method?: Maybe<EnumItemHardwareFastenerWasherMechanismEnum>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  name: Scalars['String'];
  pattern?: Maybe<EnumItemHardwareFastenerWasherPatternEnum>;
  thickness?: Maybe<Scalars['numeric']>;
  unit: EnumUnitEnum;
};

/** aggregated selection of "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherAggregate = {
  __typename?: 'item_hardware_fastener_washer_aggregate';
  aggregate?: Maybe<ItemHardwareFastenerWasherAggregateFields>;
  nodes: Array<ItemHardwareFastenerWasher>;
};

/** aggregate fields of "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherAggregateFields = {
  __typename?: 'item_hardware_fastener_washer_aggregate_fields';
  avg?: Maybe<ItemHardwareFastenerWasherAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareFastenerWasherMaxFields>;
  min?: Maybe<ItemHardwareFastenerWasherMinFields>;
  stddev?: Maybe<ItemHardwareFastenerWasherStddevFields>;
  stddev_pop?: Maybe<ItemHardwareFastenerWasherStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareFastenerWasherStddevSampFields>;
  sum?: Maybe<ItemHardwareFastenerWasherSumFields>;
  var_pop?: Maybe<ItemHardwareFastenerWasherVarPopFields>;
  var_samp?: Maybe<ItemHardwareFastenerWasherVarSampFields>;
  variance?: Maybe<ItemHardwareFastenerWasherVarianceFields>;
};


/** aggregate fields of "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerWasherSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerWasherAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareFastenerWasherMaxOrderBy>;
  min?: Maybe<ItemHardwareFastenerWasherMinOrderBy>;
  stddev?: Maybe<ItemHardwareFastenerWasherStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareFastenerWasherStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareFastenerWasherStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareFastenerWasherSumOrderBy>;
  var_pop?: Maybe<ItemHardwareFastenerWasherVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareFastenerWasherVarSampOrderBy>;
  variance?: Maybe<ItemHardwareFastenerWasherVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherArrRelInsertInput = {
  data: Array<ItemHardwareFastenerWasherInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerWasherOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareFastenerWasherAvgFields = {
  __typename?: 'item_hardware_fastener_washer_avg_fields';
  diameter_inner?: Maybe<Scalars['Float']>;
  diameter_outer?: Maybe<Scalars['Float']>;
  diameter_use?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  thickness?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherAvgOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_fastener_washer". All fields are combined with a logical 'AND'. */
export type ItemHardwareFastenerWasherBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerWasherBoolExp>>>;
  _not?: Maybe<ItemHardwareFastenerWasherBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerWasherBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  diameter_inner?: Maybe<NumericComparisonExp>;
  diameter_outer?: Maybe<NumericComparisonExp>;
  diameter_use?: Maybe<NumericComparisonExp>;
  finish?: Maybe<EnumItemHardwareFinishEnumComparisonExp>;
  form?: Maybe<EnumItemHardwareFastenerWasherFormEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  lock_method?: Maybe<EnumItemHardwareFastenerWasherMechanismEnumComparisonExp>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnumComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  pattern?: Maybe<EnumItemHardwareFastenerWasherPatternEnumComparisonExp>;
  thickness?: Maybe<NumericComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_fastener_washer" */
export enum ItemHardwareFastenerWasherConstraint {
  /** unique or primary key constraint */
  hardware_fastener_washer_pkey = 'hardware_fastener_washer_pkey'
}

/** input type for incrementing integer column in table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherIncInput = {
  diameter_inner?: Maybe<Scalars['numeric']>;
  diameter_outer?: Maybe<Scalars['numeric']>;
  diameter_use?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  thickness?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherInsertInput = {
  description?: Maybe<Scalars['String']>;
  diameter_inner?: Maybe<Scalars['numeric']>;
  diameter_outer?: Maybe<Scalars['numeric']>;
  diameter_use?: Maybe<Scalars['numeric']>;
  finish?: Maybe<EnumItemHardwareFinishEnum>;
  form?: Maybe<EnumItemHardwareFastenerWasherFormEnum>;
  id?: Maybe<Scalars['Int']>;
  lock_method?: Maybe<EnumItemHardwareFastenerWasherMechanismEnum>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  pattern?: Maybe<EnumItemHardwareFastenerWasherPatternEnum>;
  thickness?: Maybe<Scalars['numeric']>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate max on columns */
export type ItemHardwareFastenerWasherMaxFields = {
  __typename?: 'item_hardware_fastener_washer_max_fields';
  description?: Maybe<Scalars['String']>;
  diameter_inner?: Maybe<Scalars['numeric']>;
  diameter_outer?: Maybe<Scalars['numeric']>;
  diameter_use?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  thickness?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherMaxOrderBy = {
  description?: Maybe<OrderBy>;
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareFastenerWasherMinFields = {
  __typename?: 'item_hardware_fastener_washer_min_fields';
  description?: Maybe<Scalars['String']>;
  diameter_inner?: Maybe<Scalars['numeric']>;
  diameter_outer?: Maybe<Scalars['numeric']>;
  diameter_use?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  thickness?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherMinOrderBy = {
  description?: Maybe<OrderBy>;
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherMutationResponse = {
  __typename?: 'item_hardware_fastener_washer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerWasher>;
};

/** input type for inserting object relation for remote table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherObjRelInsertInput = {
  data: ItemHardwareFastenerWasherInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerWasherOnConflict>;
};

/** on conflict condition type for table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherOnConflict = {
  constraint: ItemHardwareFastenerWasherConstraint;
  update_columns: Array<ItemHardwareFastenerWasherUpdateColumn>;
  where?: Maybe<ItemHardwareFastenerWasherBoolExp>;
};

/** ordering options when selecting data from "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherOrderBy = {
  description?: Maybe<OrderBy>;
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  finish?: Maybe<OrderBy>;
  form?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lock_method?: Maybe<OrderBy>;
  material?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  pattern?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "item.hardware_fastener_washer" */
export enum ItemHardwareFastenerWasherSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  diameter_inner = 'diameter_inner',
  /** column name */
  diameter_outer = 'diameter_outer',
  /** column name */
  diameter_use = 'diameter_use',
  /** column name */
  finish = 'finish',
  /** column name */
  form = 'form',
  /** column name */
  id = 'id',
  /** column name */
  lock_method = 'lock_method',
  /** column name */
  material = 'material',
  /** column name */
  name = 'name',
  /** column name */
  pattern = 'pattern',
  /** column name */
  thickness = 'thickness',
  /** column name */
  unit = 'unit'
}

/** input type for updating data in table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherSetInput = {
  description?: Maybe<Scalars['String']>;
  diameter_inner?: Maybe<Scalars['numeric']>;
  diameter_outer?: Maybe<Scalars['numeric']>;
  diameter_use?: Maybe<Scalars['numeric']>;
  finish?: Maybe<EnumItemHardwareFinishEnum>;
  form?: Maybe<EnumItemHardwareFastenerWasherFormEnum>;
  id?: Maybe<Scalars['Int']>;
  lock_method?: Maybe<EnumItemHardwareFastenerWasherMechanismEnum>;
  material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  pattern?: Maybe<EnumItemHardwareFastenerWasherPatternEnum>;
  thickness?: Maybe<Scalars['numeric']>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate stddev on columns */
export type ItemHardwareFastenerWasherStddevFields = {
  __typename?: 'item_hardware_fastener_washer_stddev_fields';
  diameter_inner?: Maybe<Scalars['Float']>;
  diameter_outer?: Maybe<Scalars['Float']>;
  diameter_use?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  thickness?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherStddevOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareFastenerWasherStddevPopFields = {
  __typename?: 'item_hardware_fastener_washer_stddev_pop_fields';
  diameter_inner?: Maybe<Scalars['Float']>;
  diameter_outer?: Maybe<Scalars['Float']>;
  diameter_use?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  thickness?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherStddevPopOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareFastenerWasherStddevSampFields = {
  __typename?: 'item_hardware_fastener_washer_stddev_samp_fields';
  diameter_inner?: Maybe<Scalars['Float']>;
  diameter_outer?: Maybe<Scalars['Float']>;
  diameter_use?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  thickness?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherStddevSampOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareFastenerWasherSumFields = {
  __typename?: 'item_hardware_fastener_washer_sum_fields';
  diameter_inner?: Maybe<Scalars['numeric']>;
  diameter_outer?: Maybe<Scalars['numeric']>;
  diameter_use?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  thickness?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherSumOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_fastener_washer" */
export enum ItemHardwareFastenerWasherUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  diameter_inner = 'diameter_inner',
  /** column name */
  diameter_outer = 'diameter_outer',
  /** column name */
  diameter_use = 'diameter_use',
  /** column name */
  finish = 'finish',
  /** column name */
  form = 'form',
  /** column name */
  id = 'id',
  /** column name */
  lock_method = 'lock_method',
  /** column name */
  material = 'material',
  /** column name */
  name = 'name',
  /** column name */
  pattern = 'pattern',
  /** column name */
  thickness = 'thickness',
  /** column name */
  unit = 'unit'
}

/** aggregate var_pop on columns */
export type ItemHardwareFastenerWasherVarPopFields = {
  __typename?: 'item_hardware_fastener_washer_var_pop_fields';
  diameter_inner?: Maybe<Scalars['Float']>;
  diameter_outer?: Maybe<Scalars['Float']>;
  diameter_use?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  thickness?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherVarPopOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareFastenerWasherVarSampFields = {
  __typename?: 'item_hardware_fastener_washer_var_samp_fields';
  diameter_inner?: Maybe<Scalars['Float']>;
  diameter_outer?: Maybe<Scalars['Float']>;
  diameter_use?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  thickness?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherVarSampOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareFastenerWasherVarianceFields = {
  __typename?: 'item_hardware_fastener_washer_variance_fields';
  diameter_inner?: Maybe<Scalars['Float']>;
  diameter_outer?: Maybe<Scalars['Float']>;
  diameter_use?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  thickness?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_fastener_washer" */
export type ItemHardwareFastenerWasherVarianceOrderBy = {
  diameter_inner?: Maybe<OrderBy>;
  diameter_outer?: Maybe<OrderBy>;
  diameter_use?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  thickness?: Maybe<OrderBy>;
};

/** input type for incrementing integer column in table "item" */
export type ItemIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "item" */
export type ItemInsertInput = {
  bundle?: Maybe<ItemBundleMemberArrRelInsertInput>;
  class?: Maybe<EnumItemClassEnum>;
  id?: Maybe<Scalars['Int']>;
  labelTemplates?: Maybe<LabelTemplateMapArrRelInsertInput>;
  labels?: Maybe<LabelArrRelInsertInput>;
  manufacturerItems?: Maybe<ManufacturerItemArrRelInsertInput>;
  object?: Maybe<Scalars['jsonb']>;
  orderItems?: Maybe<OrderItemArrRelInsertInput>;
  vendorItems?: Maybe<VendorItemArrRelInsertInput>;
};

/** aggregate max on columns */
export type ItemMaxFields = {
  __typename?: 'item_max_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "item" */
export type ItemMaxOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemMinFields = {
  __typename?: 'item_min_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "item" */
export type ItemMinOrderBy = {
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item" */
export type ItemMutationResponse = {
  __typename?: 'item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Item>;
};

/** input type for inserting object relation for remote table "item" */
export type ItemObjRelInsertInput = {
  data: ItemInsertInput;
  on_conflict?: Maybe<ItemOnConflict>;
};

/** on conflict condition type for table "item" */
export type ItemOnConflict = {
  constraint: ItemConstraint;
  update_columns: Array<ItemUpdateColumn>;
  where?: Maybe<ItemBoolExp>;
};

/** ordering options when selecting data from "item" */
export type ItemOrderBy = {
  bundle_aggregate?: Maybe<ItemBundleMemberAggregateOrderBy>;
  class?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  itemVariants_aggregate?: Maybe<ItemVariantAggregateOrderBy>;
  labelTemplates_aggregate?: Maybe<LabelTemplateMapAggregateOrderBy>;
  labels_aggregate?: Maybe<LabelAggregateOrderBy>;
  manufacturerItems_aggregate?: Maybe<ManufacturerItemAggregateOrderBy>;
  object?: Maybe<OrderBy>;
  orderItems_aggregate?: Maybe<OrderItemAggregateOrderBy>;
  vendorItems_aggregate?: Maybe<VendorItemAggregateOrderBy>;
};

/** primary key columns input for table: "item" */
export type ItemPkColumnsInput = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ItemPrependInput = {
  object?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "item" */
export enum ItemSelectColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  object = 'object'
}

/** input type for updating data in table "item" */
export type ItemSetInput = {
  class?: Maybe<EnumItemClassEnum>;
  id?: Maybe<Scalars['Int']>;
  object?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type ItemStddevFields = {
  __typename?: 'item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item" */
export type ItemStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemStddevPopFields = {
  __typename?: 'item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item" */
export type ItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemStddevSampFields = {
  __typename?: 'item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item" */
export type ItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemSumFields = {
  __typename?: 'item_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item" */
export type ItemSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "item" */
export enum ItemUpdateColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  object = 'object'
}

/** aggregate var_pop on columns */
export type ItemVarPopFields = {
  __typename?: 'item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item" */
export type ItemVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemVarSampFields = {
  __typename?: 'item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item" */
export type ItemVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemVarianceFields = {
  __typename?: 'item_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item" */
export type ItemVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/**
 * All existing combinations of vendor and manufacturer for an item, including null for both.
 *
 *
 * columns and relationships of "item_variant"
 */
export type ItemVariant = {
  __typename?: 'item_variant';
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  item?: Maybe<Item>;
  item_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  manufacturer?: Maybe<Manufacturer>;
  /** An object relationship */
  manufacturerItem?: Maybe<ManufacturerItem>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  object?: Maybe<Scalars['jsonb']>;
  order_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  vendor?: Maybe<Vendor>;
  /** An object relationship */
  vendorItem?: Maybe<VendorItem>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};


/**
 * All existing combinations of vendor and manufacturer for an item, including null for both.
 *
 *
 * columns and relationships of "item_variant"
 */
export type ItemVariantObjectArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "item_variant" */
export type ItemVariantAggregate = {
  __typename?: 'item_variant_aggregate';
  aggregate?: Maybe<ItemVariantAggregateFields>;
  nodes: Array<ItemVariant>;
};

/** aggregate fields of "item_variant" */
export type ItemVariantAggregateFields = {
  __typename?: 'item_variant_aggregate_fields';
  avg?: Maybe<ItemVariantAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemVariantMaxFields>;
  min?: Maybe<ItemVariantMinFields>;
  stddev?: Maybe<ItemVariantStddevFields>;
  stddev_pop?: Maybe<ItemVariantStddevPopFields>;
  stddev_samp?: Maybe<ItemVariantStddevSampFields>;
  sum?: Maybe<ItemVariantSumFields>;
  var_pop?: Maybe<ItemVariantVarPopFields>;
  var_samp?: Maybe<ItemVariantVarSampFields>;
  variance?: Maybe<ItemVariantVarianceFields>;
};


/** aggregate fields of "item_variant" */
export type ItemVariantAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemVariantSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item_variant" */
export type ItemVariantAggregateOrderBy = {
  avg?: Maybe<ItemVariantAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemVariantMaxOrderBy>;
  min?: Maybe<ItemVariantMinOrderBy>;
  stddev?: Maybe<ItemVariantStddevOrderBy>;
  stddev_pop?: Maybe<ItemVariantStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemVariantStddevSampOrderBy>;
  sum?: Maybe<ItemVariantSumOrderBy>;
  var_pop?: Maybe<ItemVariantVarPopOrderBy>;
  var_samp?: Maybe<ItemVariantVarSampOrderBy>;
  variance?: Maybe<ItemVariantVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ItemVariantAppendInput = {
  object?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type ItemVariantAvgFields = {
  __typename?: 'item_variant_avg_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item_variant" */
export type ItemVariantAvgOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item_variant". All fields are combined with a logical 'AND'. */
export type ItemVariantBoolExp = {
  _and?: Maybe<Array<Maybe<ItemVariantBoolExp>>>;
  _not?: Maybe<ItemVariantBoolExp>;
  _or?: Maybe<Array<Maybe<ItemVariantBoolExp>>>;
  class?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  item?: Maybe<ItemBoolExp>;
  item_id?: Maybe<IntComparisonExp>;
  manufacturer?: Maybe<ManufacturerBoolExp>;
  manufacturerItem?: Maybe<ManufacturerItemBoolExp>;
  manufacturer_id?: Maybe<IntComparisonExp>;
  manufacturer_item_id?: Maybe<IntComparisonExp>;
  object?: Maybe<JsonbComparisonExp>;
  order_id?: Maybe<IntComparisonExp>;
  order_item_id?: Maybe<IntComparisonExp>;
  vendor?: Maybe<VendorBoolExp>;
  vendorItem?: Maybe<VendorItemBoolExp>;
  vendor_id?: Maybe<IntComparisonExp>;
  vendor_item_id?: Maybe<IntComparisonExp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ItemVariantDeleteAtPathInput = {
  object?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ItemVariantDeleteElemInput = {
  object?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ItemVariantDeleteKeyInput = {
  object?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ItemVariantMaxFields = {
  __typename?: 'item_variant_max_fields';
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "item_variant" */
export type ItemVariantMaxOrderBy = {
  class?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemVariantMinFields = {
  __typename?: 'item_variant_min_fields';
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "item_variant" */
export type ItemVariantMinOrderBy = {
  class?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** ordering options when selecting data from "item_variant" */
export type ItemVariantOrderBy = {
  class?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer?: Maybe<ManufacturerOrderBy>;
  manufacturerItem?: Maybe<ManufacturerItemOrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  object?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor?: Maybe<VendorOrderBy>;
  vendorItem?: Maybe<VendorItemOrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ItemVariantPrependInput = {
  object?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "item_variant" */
export enum ItemVariantSelectColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_id = 'manufacturer_id',
  /** column name */
  manufacturer_item_id = 'manufacturer_item_id',
  /** column name */
  object = 'object',
  /** column name */
  order_id = 'order_id',
  /** column name */
  order_item_id = 'order_item_id',
  /** column name */
  vendor_id = 'vendor_id',
  /** column name */
  vendor_item_id = 'vendor_item_id'
}

/** aggregate stddev on columns */
export type ItemVariantStddevFields = {
  __typename?: 'item_variant_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item_variant" */
export type ItemVariantStddevOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemVariantStddevPopFields = {
  __typename?: 'item_variant_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item_variant" */
export type ItemVariantStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemVariantStddevSampFields = {
  __typename?: 'item_variant_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item_variant" */
export type ItemVariantStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemVariantSumFields = {
  __typename?: 'item_variant_sum_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item_variant" */
export type ItemVariantSumOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type ItemVariantVarPopFields = {
  __typename?: 'item_variant_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item_variant" */
export type ItemVariantVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemVariantVarSampFields = {
  __typename?: 'item_variant_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item_variant" */
export type ItemVariantVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemVariantVarianceFields = {
  __typename?: 'item_variant_variance_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item_variant" */
export type ItemVariantVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/**
 * For saved labels, use to reprint or template
 *
 *
 * columns and relationships of "label"
 */
export type Label = {
  __typename?: 'label';
  content: Scalars['jsonb'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  edit_of?: Maybe<Label>;
  edit_of_id?: Maybe<Scalars['uuid']>;
  height: Scalars['Int'];
  id: Scalars['uuid'];
  /** An object relationship */
  item?: Maybe<Item>;
  item_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  parent_of: Array<Label>;
  /** An aggregated array relationship */
  parent_of_aggregate: LabelAggregate;
  /** An array relationship */
  template_items: Array<LabelTemplateMap>;
  /** An aggregated array relationship */
  template_items_aggregate: LabelTemplateMapAggregate;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  width: Scalars['Int'];
};


/**
 * For saved labels, use to reprint or template
 *
 *
 * columns and relationships of "label"
 */
export type LabelContentArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * For saved labels, use to reprint or template
 *
 *
 * columns and relationships of "label"
 */
export type LabelParentOfArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/**
 * For saved labels, use to reprint or template
 *
 *
 * columns and relationships of "label"
 */
export type LabelParentOfAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/**
 * For saved labels, use to reprint or template
 *
 *
 * columns and relationships of "label"
 */
export type LabelTemplateItemsArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/**
 * For saved labels, use to reprint or template
 *
 *
 * columns and relationships of "label"
 */
export type LabelTemplateItemsAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};

/** aggregated selection of "label" */
export type LabelAggregate = {
  __typename?: 'label_aggregate';
  aggregate?: Maybe<LabelAggregateFields>;
  nodes: Array<Label>;
};

/** aggregate fields of "label" */
export type LabelAggregateFields = {
  __typename?: 'label_aggregate_fields';
  avg?: Maybe<LabelAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<LabelMaxFields>;
  min?: Maybe<LabelMinFields>;
  stddev?: Maybe<LabelStddevFields>;
  stddev_pop?: Maybe<LabelStddevPopFields>;
  stddev_samp?: Maybe<LabelStddevSampFields>;
  sum?: Maybe<LabelSumFields>;
  var_pop?: Maybe<LabelVarPopFields>;
  var_samp?: Maybe<LabelVarSampFields>;
  variance?: Maybe<LabelVarianceFields>;
};


/** aggregate fields of "label" */
export type LabelAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "label" */
export type LabelAggregateOrderBy = {
  avg?: Maybe<LabelAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<LabelMaxOrderBy>;
  min?: Maybe<LabelMinOrderBy>;
  stddev?: Maybe<LabelStddevOrderBy>;
  stddev_pop?: Maybe<LabelStddevPopOrderBy>;
  stddev_samp?: Maybe<LabelStddevSampOrderBy>;
  sum?: Maybe<LabelSumOrderBy>;
  var_pop?: Maybe<LabelVarPopOrderBy>;
  var_samp?: Maybe<LabelVarSampOrderBy>;
  variance?: Maybe<LabelVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type LabelAppendInput = {
  content?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "label" */
export type LabelArrRelInsertInput = {
  data: Array<LabelInsertInput>;
  on_conflict?: Maybe<LabelOnConflict>;
};

/** aggregate avg on columns */
export type LabelAvgFields = {
  __typename?: 'label_avg_fields';
  height?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "label" */
export type LabelAvgOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export type LabelBoolExp = {
  _and?: Maybe<Array<Maybe<LabelBoolExp>>>;
  _not?: Maybe<LabelBoolExp>;
  _or?: Maybe<Array<Maybe<LabelBoolExp>>>;
  content?: Maybe<JsonbComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  edit_of?: Maybe<LabelBoolExp>;
  edit_of_id?: Maybe<UuidComparisonExp>;
  height?: Maybe<IntComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  item?: Maybe<ItemBoolExp>;
  item_id?: Maybe<IntComparisonExp>;
  parent_of?: Maybe<LabelBoolExp>;
  template_items?: Maybe<LabelTemplateMapBoolExp>;
  title?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  width?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "label" */
export enum LabelConstraint {
  /** unique or primary key constraint */
  label_id_key = 'label_id_key',
  /** unique or primary key constraint */
  label_pkey = 'label_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type LabelDeleteAtPathInput = {
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type LabelDeleteElemInput = {
  content?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type LabelDeleteKeyInput = {
  content?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "label" */
export type LabelIncInput = {
  height?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "label" */
export type LabelInsertInput = {
  content?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edit_of?: Maybe<LabelObjRelInsertInput>;
  edit_of_id?: Maybe<Scalars['uuid']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  item?: Maybe<ItemObjRelInsertInput>;
  item_id?: Maybe<Scalars['Int']>;
  parent_of?: Maybe<LabelArrRelInsertInput>;
  template_items?: Maybe<LabelTemplateMapArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "label_item_map" */
export type LabelItemMap = {
  __typename?: 'label_item_map';
  item_id: Scalars['Int'];
  label_id: Scalars['uuid'];
};

/** aggregated selection of "label_item_map" */
export type LabelItemMapAggregate = {
  __typename?: 'label_item_map_aggregate';
  aggregate?: Maybe<LabelItemMapAggregateFields>;
  nodes: Array<LabelItemMap>;
};

/** aggregate fields of "label_item_map" */
export type LabelItemMapAggregateFields = {
  __typename?: 'label_item_map_aggregate_fields';
  avg?: Maybe<LabelItemMapAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<LabelItemMapMaxFields>;
  min?: Maybe<LabelItemMapMinFields>;
  stddev?: Maybe<LabelItemMapStddevFields>;
  stddev_pop?: Maybe<LabelItemMapStddevPopFields>;
  stddev_samp?: Maybe<LabelItemMapStddevSampFields>;
  sum?: Maybe<LabelItemMapSumFields>;
  var_pop?: Maybe<LabelItemMapVarPopFields>;
  var_samp?: Maybe<LabelItemMapVarSampFields>;
  variance?: Maybe<LabelItemMapVarianceFields>;
};


/** aggregate fields of "label_item_map" */
export type LabelItemMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelItemMapSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "label_item_map" */
export type LabelItemMapAggregateOrderBy = {
  avg?: Maybe<LabelItemMapAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<LabelItemMapMaxOrderBy>;
  min?: Maybe<LabelItemMapMinOrderBy>;
  stddev?: Maybe<LabelItemMapStddevOrderBy>;
  stddev_pop?: Maybe<LabelItemMapStddevPopOrderBy>;
  stddev_samp?: Maybe<LabelItemMapStddevSampOrderBy>;
  sum?: Maybe<LabelItemMapSumOrderBy>;
  var_pop?: Maybe<LabelItemMapVarPopOrderBy>;
  var_samp?: Maybe<LabelItemMapVarSampOrderBy>;
  variance?: Maybe<LabelItemMapVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "label_item_map" */
export type LabelItemMapArrRelInsertInput = {
  data: Array<LabelItemMapInsertInput>;
  on_conflict?: Maybe<LabelItemMapOnConflict>;
};

/** aggregate avg on columns */
export type LabelItemMapAvgFields = {
  __typename?: 'label_item_map_avg_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "label_item_map" */
export type LabelItemMapAvgOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "label_item_map". All fields are combined with a logical 'AND'. */
export type LabelItemMapBoolExp = {
  _and?: Maybe<Array<Maybe<LabelItemMapBoolExp>>>;
  _not?: Maybe<LabelItemMapBoolExp>;
  _or?: Maybe<Array<Maybe<LabelItemMapBoolExp>>>;
  item_id?: Maybe<IntComparisonExp>;
  label_id?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "label_item_map" */
export enum LabelItemMapConstraint {
  /** unique or primary key constraint */
  label_item_map_pkey = 'label_item_map_pkey'
}

/** input type for incrementing integer column in table "label_item_map" */
export type LabelItemMapIncInput = {
  item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "label_item_map" */
export type LabelItemMapInsertInput = {
  item_id?: Maybe<Scalars['Int']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type LabelItemMapMaxFields = {
  __typename?: 'label_item_map_max_fields';
  item_id?: Maybe<Scalars['Int']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "label_item_map" */
export type LabelItemMapMaxOrderBy = {
  item_id?: Maybe<OrderBy>;
  label_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LabelItemMapMinFields = {
  __typename?: 'label_item_map_min_fields';
  item_id?: Maybe<Scalars['Int']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "label_item_map" */
export type LabelItemMapMinOrderBy = {
  item_id?: Maybe<OrderBy>;
  label_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "label_item_map" */
export type LabelItemMapMutationResponse = {
  __typename?: 'label_item_map_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<LabelItemMap>;
};

/** input type for inserting object relation for remote table "label_item_map" */
export type LabelItemMapObjRelInsertInput = {
  data: LabelItemMapInsertInput;
  on_conflict?: Maybe<LabelItemMapOnConflict>;
};

/** on conflict condition type for table "label_item_map" */
export type LabelItemMapOnConflict = {
  constraint: LabelItemMapConstraint;
  update_columns: Array<LabelItemMapUpdateColumn>;
  where?: Maybe<LabelItemMapBoolExp>;
};

/** ordering options when selecting data from "label_item_map" */
export type LabelItemMapOrderBy = {
  item_id?: Maybe<OrderBy>;
  label_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "label_item_map" */
export type LabelItemMapPkColumnsInput = {
  item_id: Scalars['Int'];
  label_id: Scalars['uuid'];
};

/** select columns of table "label_item_map" */
export enum LabelItemMapSelectColumn {
  /** column name */
  item_id = 'item_id',
  /** column name */
  label_id = 'label_id'
}

/** input type for updating data in table "label_item_map" */
export type LabelItemMapSetInput = {
  item_id?: Maybe<Scalars['Int']>;
  label_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type LabelItemMapStddevFields = {
  __typename?: 'label_item_map_stddev_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "label_item_map" */
export type LabelItemMapStddevOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LabelItemMapStddevPopFields = {
  __typename?: 'label_item_map_stddev_pop_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "label_item_map" */
export type LabelItemMapStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LabelItemMapStddevSampFields = {
  __typename?: 'label_item_map_stddev_samp_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "label_item_map" */
export type LabelItemMapStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LabelItemMapSumFields = {
  __typename?: 'label_item_map_sum_fields';
  item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "label_item_map" */
export type LabelItemMapSumOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** update columns of table "label_item_map" */
export enum LabelItemMapUpdateColumn {
  /** column name */
  item_id = 'item_id',
  /** column name */
  label_id = 'label_id'
}

/** aggregate var_pop on columns */
export type LabelItemMapVarPopFields = {
  __typename?: 'label_item_map_var_pop_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "label_item_map" */
export type LabelItemMapVarPopOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LabelItemMapVarSampFields = {
  __typename?: 'label_item_map_var_samp_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "label_item_map" */
export type LabelItemMapVarSampOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LabelItemMapVarianceFields = {
  __typename?: 'label_item_map_variance_fields';
  item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "label_item_map" */
export type LabelItemMapVarianceOrderBy = {
  item_id?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type LabelMaxFields = {
  __typename?: 'label_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  edit_of_id?: Maybe<Scalars['uuid']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "label" */
export type LabelMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  edit_of_id?: Maybe<OrderBy>;
  height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LabelMinFields = {
  __typename?: 'label_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  edit_of_id?: Maybe<Scalars['uuid']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "label" */
export type LabelMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  edit_of_id?: Maybe<OrderBy>;
  height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** response of any mutation on the table "label" */
export type LabelMutationResponse = {
  __typename?: 'label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Label>;
};

/** input type for inserting object relation for remote table "label" */
export type LabelObjRelInsertInput = {
  data: LabelInsertInput;
  on_conflict?: Maybe<LabelOnConflict>;
};

/** on conflict condition type for table "label" */
export type LabelOnConflict = {
  constraint: LabelConstraint;
  update_columns: Array<LabelUpdateColumn>;
  where?: Maybe<LabelBoolExp>;
};

/** ordering options when selecting data from "label" */
export type LabelOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  edit_of?: Maybe<LabelOrderBy>;
  edit_of_id?: Maybe<OrderBy>;
  height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_id?: Maybe<OrderBy>;
  parent_of_aggregate?: Maybe<LabelAggregateOrderBy>;
  template_items_aggregate?: Maybe<LabelTemplateMapAggregateOrderBy>;
  title?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** primary key columns input for table: "label" */
export type LabelPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type LabelPrependInput = {
  content?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "label" */
export enum LabelSelectColumn {
  /** column name */
  content = 'content',
  /** column name */
  created_at = 'created_at',
  /** column name */
  edit_of_id = 'edit_of_id',
  /** column name */
  height = 'height',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  width = 'width'
}

/** input type for updating data in table "label" */
export type LabelSetInput = {
  content?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edit_of_id?: Maybe<Scalars['uuid']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type LabelStddevFields = {
  __typename?: 'label_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "label" */
export type LabelStddevOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LabelStddevPopFields = {
  __typename?: 'label_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "label" */
export type LabelStddevPopOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LabelStddevSampFields = {
  __typename?: 'label_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "label" */
export type LabelStddevSampOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LabelSumFields = {
  __typename?: 'label_sum_fields';
  height?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "label" */
export type LabelSumOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/**
 * map label to item use for template
 *
 *
 * columns and relationships of "label_template_map"
 */
export type LabelTemplateMap = {
  __typename?: 'label_template_map';
  /**
   * json rules in the form of:
   *             { [propKey: keyof item_class]: regex }
   * this is then evaluated for each entry
   * evaluation is done in the sequence order
   */
  criteria?: Maybe<Scalars['jsonb']>;
  item_class: EnumItemClassEnum;
  /** An object relationship */
  label: Label;
  label_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/**
 * map label to item use for template
 *
 *
 * columns and relationships of "label_template_map"
 */
export type LabelTemplateMapCriteriaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "label_template_map" */
export type LabelTemplateMapAggregate = {
  __typename?: 'label_template_map_aggregate';
  aggregate?: Maybe<LabelTemplateMapAggregateFields>;
  nodes: Array<LabelTemplateMap>;
};

/** aggregate fields of "label_template_map" */
export type LabelTemplateMapAggregateFields = {
  __typename?: 'label_template_map_aggregate_fields';
  avg?: Maybe<LabelTemplateMapAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<LabelTemplateMapMaxFields>;
  min?: Maybe<LabelTemplateMapMinFields>;
  stddev?: Maybe<LabelTemplateMapStddevFields>;
  stddev_pop?: Maybe<LabelTemplateMapStddevPopFields>;
  stddev_samp?: Maybe<LabelTemplateMapStddevSampFields>;
  sum?: Maybe<LabelTemplateMapSumFields>;
  var_pop?: Maybe<LabelTemplateMapVarPopFields>;
  var_samp?: Maybe<LabelTemplateMapVarSampFields>;
  variance?: Maybe<LabelTemplateMapVarianceFields>;
};


/** aggregate fields of "label_template_map" */
export type LabelTemplateMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "label_template_map" */
export type LabelTemplateMapAggregateOrderBy = {
  avg?: Maybe<LabelTemplateMapAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<LabelTemplateMapMaxOrderBy>;
  min?: Maybe<LabelTemplateMapMinOrderBy>;
  stddev?: Maybe<LabelTemplateMapStddevOrderBy>;
  stddev_pop?: Maybe<LabelTemplateMapStddevPopOrderBy>;
  stddev_samp?: Maybe<LabelTemplateMapStddevSampOrderBy>;
  sum?: Maybe<LabelTemplateMapSumOrderBy>;
  var_pop?: Maybe<LabelTemplateMapVarPopOrderBy>;
  var_samp?: Maybe<LabelTemplateMapVarSampOrderBy>;
  variance?: Maybe<LabelTemplateMapVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type LabelTemplateMapAppendInput = {
  criteria?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "label_template_map" */
export type LabelTemplateMapArrRelInsertInput = {
  data: Array<LabelTemplateMapInsertInput>;
  on_conflict?: Maybe<LabelTemplateMapOnConflict>;
};

/** aggregate avg on columns */
export type LabelTemplateMapAvgFields = {
  __typename?: 'label_template_map_avg_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "label_template_map" */
export type LabelTemplateMapAvgOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "label_template_map". All fields are combined with a logical 'AND'. */
export type LabelTemplateMapBoolExp = {
  _and?: Maybe<Array<Maybe<LabelTemplateMapBoolExp>>>;
  _not?: Maybe<LabelTemplateMapBoolExp>;
  _or?: Maybe<Array<Maybe<LabelTemplateMapBoolExp>>>;
  criteria?: Maybe<JsonbComparisonExp>;
  item_class?: Maybe<EnumItemClassEnumComparisonExp>;
  label?: Maybe<LabelBoolExp>;
  label_id?: Maybe<UuidComparisonExp>;
  sequence?: Maybe<SmallintComparisonExp>;
};

/** unique or primary key constraints on table "label_template_map" */
export enum LabelTemplateMapConstraint {
  /** unique or primary key constraint */
  label_template_map_pkey = 'label_template_map_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type LabelTemplateMapDeleteAtPathInput = {
  criteria?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type LabelTemplateMapDeleteElemInput = {
  criteria?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type LabelTemplateMapDeleteKeyInput = {
  criteria?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "label_template_map" */
export type LabelTemplateMapIncInput = {
  sequence?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "label_template_map" */
export type LabelTemplateMapInsertInput = {
  criteria?: Maybe<Scalars['jsonb']>;
  item_class?: Maybe<EnumItemClassEnum>;
  label?: Maybe<LabelObjRelInsertInput>;
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type LabelTemplateMapMaxFields = {
  __typename?: 'label_template_map_max_fields';
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "label_template_map" */
export type LabelTemplateMapMaxOrderBy = {
  label_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LabelTemplateMapMinFields = {
  __typename?: 'label_template_map_min_fields';
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "label_template_map" */
export type LabelTemplateMapMinOrderBy = {
  label_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** response of any mutation on the table "label_template_map" */
export type LabelTemplateMapMutationResponse = {
  __typename?: 'label_template_map_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<LabelTemplateMap>;
};

/** input type for inserting object relation for remote table "label_template_map" */
export type LabelTemplateMapObjRelInsertInput = {
  data: LabelTemplateMapInsertInput;
  on_conflict?: Maybe<LabelTemplateMapOnConflict>;
};

/** on conflict condition type for table "label_template_map" */
export type LabelTemplateMapOnConflict = {
  constraint: LabelTemplateMapConstraint;
  update_columns: Array<LabelTemplateMapUpdateColumn>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};

/** ordering options when selecting data from "label_template_map" */
export type LabelTemplateMapOrderBy = {
  criteria?: Maybe<OrderBy>;
  item_class?: Maybe<OrderBy>;
  label?: Maybe<LabelOrderBy>;
  label_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** primary key columns input for table: "label_template_map" */
export type LabelTemplateMapPkColumnsInput = {
  item_class: EnumItemClassEnum;
  label_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type LabelTemplateMapPrependInput = {
  criteria?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "label_template_map" */
export enum LabelTemplateMapSelectColumn {
  /** column name */
  criteria = 'criteria',
  /** column name */
  item_class = 'item_class',
  /** column name */
  label_id = 'label_id',
  /** column name */
  sequence = 'sequence'
}

/** input type for updating data in table "label_template_map" */
export type LabelTemplateMapSetInput = {
  criteria?: Maybe<Scalars['jsonb']>;
  item_class?: Maybe<EnumItemClassEnum>;
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type LabelTemplateMapStddevFields = {
  __typename?: 'label_template_map_stddev_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "label_template_map" */
export type LabelTemplateMapStddevOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LabelTemplateMapStddevPopFields = {
  __typename?: 'label_template_map_stddev_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "label_template_map" */
export type LabelTemplateMapStddevPopOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LabelTemplateMapStddevSampFields = {
  __typename?: 'label_template_map_stddev_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "label_template_map" */
export type LabelTemplateMapStddevSampOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LabelTemplateMapSumFields = {
  __typename?: 'label_template_map_sum_fields';
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "label_template_map" */
export type LabelTemplateMapSumOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** update columns of table "label_template_map" */
export enum LabelTemplateMapUpdateColumn {
  /** column name */
  criteria = 'criteria',
  /** column name */
  item_class = 'item_class',
  /** column name */
  label_id = 'label_id',
  /** column name */
  sequence = 'sequence'
}

/** aggregate var_pop on columns */
export type LabelTemplateMapVarPopFields = {
  __typename?: 'label_template_map_var_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "label_template_map" */
export type LabelTemplateMapVarPopOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LabelTemplateMapVarSampFields = {
  __typename?: 'label_template_map_var_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "label_template_map" */
export type LabelTemplateMapVarSampOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LabelTemplateMapVarianceFields = {
  __typename?: 'label_template_map_variance_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "label_template_map" */
export type LabelTemplateMapVarianceOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** update columns of table "label" */
export enum LabelUpdateColumn {
  /** column name */
  content = 'content',
  /** column name */
  created_at = 'created_at',
  /** column name */
  edit_of_id = 'edit_of_id',
  /** column name */
  height = 'height',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  width = 'width'
}

/** aggregate var_pop on columns */
export type LabelVarPopFields = {
  __typename?: 'label_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "label" */
export type LabelVarPopOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LabelVarSampFields = {
  __typename?: 'label_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "label" */
export type LabelVarSampOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LabelVarianceFields = {
  __typename?: 'label_variance_fields';
  height?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "label" */
export type LabelVarianceOrderBy = {
  height?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  width?: Maybe<OrderBy>;
};

/** columns and relationships of "manufacturer" */
export type Manufacturer = {
  __typename?: 'manufacturer';
  icon_url?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  manufacturer_items: Array<ManufacturerItem>;
  /** An aggregated array relationship */
  manufacturer_items_aggregate: ManufacturerItemAggregate;
  name: Scalars['String'];
  url: Scalars['String'];
  /** An object relationship */
  vendor?: Maybe<Vendor>;
  vendor_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "manufacturer" */
export type ManufacturerManufacturerItemsArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};


/** columns and relationships of "manufacturer" */
export type ManufacturerManufacturerItemsAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};

/** aggregated selection of "manufacturer" */
export type ManufacturerAggregate = {
  __typename?: 'manufacturer_aggregate';
  aggregate?: Maybe<ManufacturerAggregateFields>;
  nodes: Array<Manufacturer>;
};

/** aggregate fields of "manufacturer" */
export type ManufacturerAggregateFields = {
  __typename?: 'manufacturer_aggregate_fields';
  avg?: Maybe<ManufacturerAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ManufacturerMaxFields>;
  min?: Maybe<ManufacturerMinFields>;
  stddev?: Maybe<ManufacturerStddevFields>;
  stddev_pop?: Maybe<ManufacturerStddevPopFields>;
  stddev_samp?: Maybe<ManufacturerStddevSampFields>;
  sum?: Maybe<ManufacturerSumFields>;
  var_pop?: Maybe<ManufacturerVarPopFields>;
  var_samp?: Maybe<ManufacturerVarSampFields>;
  variance?: Maybe<ManufacturerVarianceFields>;
};


/** aggregate fields of "manufacturer" */
export type ManufacturerAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ManufacturerSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "manufacturer" */
export type ManufacturerAggregateOrderBy = {
  avg?: Maybe<ManufacturerAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ManufacturerMaxOrderBy>;
  min?: Maybe<ManufacturerMinOrderBy>;
  stddev?: Maybe<ManufacturerStddevOrderBy>;
  stddev_pop?: Maybe<ManufacturerStddevPopOrderBy>;
  stddev_samp?: Maybe<ManufacturerStddevSampOrderBy>;
  sum?: Maybe<ManufacturerSumOrderBy>;
  var_pop?: Maybe<ManufacturerVarPopOrderBy>;
  var_samp?: Maybe<ManufacturerVarSampOrderBy>;
  variance?: Maybe<ManufacturerVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "manufacturer" */
export type ManufacturerArrRelInsertInput = {
  data: Array<ManufacturerInsertInput>;
  on_conflict?: Maybe<ManufacturerOnConflict>;
};

/** aggregate avg on columns */
export type ManufacturerAvgFields = {
  __typename?: 'manufacturer_avg_fields';
  id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "manufacturer" */
export type ManufacturerAvgOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "manufacturer". All fields are combined with a logical 'AND'. */
export type ManufacturerBoolExp = {
  _and?: Maybe<Array<Maybe<ManufacturerBoolExp>>>;
  _not?: Maybe<ManufacturerBoolExp>;
  _or?: Maybe<Array<Maybe<ManufacturerBoolExp>>>;
  icon_url?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  manufacturer_items?: Maybe<ManufacturerItemBoolExp>;
  name?: Maybe<StringComparisonExp>;
  url?: Maybe<StringComparisonExp>;
  vendor?: Maybe<VendorBoolExp>;
  vendor_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "manufacturer" */
export enum ManufacturerConstraint {
  /** unique or primary key constraint */
  manufacturer_pkey = 'manufacturer_pkey',
  /** unique or primary key constraint */
  manufacturer_vendor_id_key = 'manufacturer_vendor_id_key'
}

/** input type for incrementing integer column in table "manufacturer" */
export type ManufacturerIncInput = {
  id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "manufacturer" */
export type ManufacturerInsertInput = {
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  manufacturer_items?: Maybe<ManufacturerItemArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendor?: Maybe<VendorObjRelInsertInput>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "manufacturer_item" */
export type ManufacturerItem = {
  __typename?: 'manufacturer_item';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  item: Item;
  item_id: Scalars['Int'];
  /** An object relationship */
  manufacturer: Manufacturer;
  manufacturer_id: Scalars['Int'];
  /** example - Cisco 7204VXR */
  manufacturer_product_id: Scalars['String'];
  /** example - Cisco 7204 */
  manufacturer_product_name?: Maybe<Scalars['String']>;
  /** example - Cisco 7200 series */
  manufacturer_product_series?: Maybe<Scalars['String']>;
  /** An array relationship */
  orderItems: Array<OrderItem>;
  /** An aggregated array relationship */
  orderItems_aggregate: OrderItemAggregate;
  product_url?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
};


/** columns and relationships of "manufacturer_item" */
export type ManufacturerItemOrderItemsArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** columns and relationships of "manufacturer_item" */
export type ManufacturerItemOrderItemsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};

/** aggregated selection of "manufacturer_item" */
export type ManufacturerItemAggregate = {
  __typename?: 'manufacturer_item_aggregate';
  aggregate?: Maybe<ManufacturerItemAggregateFields>;
  nodes: Array<ManufacturerItem>;
};

/** aggregate fields of "manufacturer_item" */
export type ManufacturerItemAggregateFields = {
  __typename?: 'manufacturer_item_aggregate_fields';
  avg?: Maybe<ManufacturerItemAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ManufacturerItemMaxFields>;
  min?: Maybe<ManufacturerItemMinFields>;
  stddev?: Maybe<ManufacturerItemStddevFields>;
  stddev_pop?: Maybe<ManufacturerItemStddevPopFields>;
  stddev_samp?: Maybe<ManufacturerItemStddevSampFields>;
  sum?: Maybe<ManufacturerItemSumFields>;
  var_pop?: Maybe<ManufacturerItemVarPopFields>;
  var_samp?: Maybe<ManufacturerItemVarSampFields>;
  variance?: Maybe<ManufacturerItemVarianceFields>;
};


/** aggregate fields of "manufacturer_item" */
export type ManufacturerItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ManufacturerItemSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "manufacturer_item" */
export type ManufacturerItemAggregateOrderBy = {
  avg?: Maybe<ManufacturerItemAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ManufacturerItemMaxOrderBy>;
  min?: Maybe<ManufacturerItemMinOrderBy>;
  stddev?: Maybe<ManufacturerItemStddevOrderBy>;
  stddev_pop?: Maybe<ManufacturerItemStddevPopOrderBy>;
  stddev_samp?: Maybe<ManufacturerItemStddevSampOrderBy>;
  sum?: Maybe<ManufacturerItemSumOrderBy>;
  var_pop?: Maybe<ManufacturerItemVarPopOrderBy>;
  var_samp?: Maybe<ManufacturerItemVarSampOrderBy>;
  variance?: Maybe<ManufacturerItemVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "manufacturer_item" */
export type ManufacturerItemArrRelInsertInput = {
  data: Array<ManufacturerItemInsertInput>;
  on_conflict?: Maybe<ManufacturerItemOnConflict>;
};

/** aggregate avg on columns */
export type ManufacturerItemAvgFields = {
  __typename?: 'manufacturer_item_avg_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "manufacturer_item" */
export type ManufacturerItemAvgOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "manufacturer_item". All fields are combined with a logical 'AND'. */
export type ManufacturerItemBoolExp = {
  _and?: Maybe<Array<Maybe<ManufacturerItemBoolExp>>>;
  _not?: Maybe<ManufacturerItemBoolExp>;
  _or?: Maybe<Array<Maybe<ManufacturerItemBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  item?: Maybe<ItemBoolExp>;
  item_id?: Maybe<IntComparisonExp>;
  manufacturer?: Maybe<ManufacturerBoolExp>;
  manufacturer_id?: Maybe<IntComparisonExp>;
  manufacturer_product_id?: Maybe<StringComparisonExp>;
  manufacturer_product_name?: Maybe<StringComparisonExp>;
  manufacturer_product_series?: Maybe<StringComparisonExp>;
  orderItems?: Maybe<OrderItemBoolExp>;
  product_url?: Maybe<StringComparisonExp>;
  quantity?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "manufacturer_item" */
export enum ManufacturerItemConstraint {
  /** unique or primary key constraint */
  manufacturer_item_id_item_id_key = 'manufacturer_item_id_item_id_key',
  /** unique or primary key constraint */
  manufacturer_item_pkey = 'manufacturer_item_pkey'
}

/** input type for incrementing integer column in table "manufacturer_item" */
export type ManufacturerItemIncInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "manufacturer_item" */
export type ManufacturerItemInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<ItemObjRelInsertInput>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<ManufacturerObjRelInsertInput>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  manufacturer_product_name?: Maybe<Scalars['String']>;
  manufacturer_product_series?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemArrRelInsertInput>;
  product_url?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type ManufacturerItemMaxFields = {
  __typename?: 'manufacturer_item_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  manufacturer_product_name?: Maybe<Scalars['String']>;
  manufacturer_product_series?: Maybe<Scalars['String']>;
  product_url?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "manufacturer_item" */
export type ManufacturerItemMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_product_id?: Maybe<OrderBy>;
  manufacturer_product_name?: Maybe<OrderBy>;
  manufacturer_product_series?: Maybe<OrderBy>;
  product_url?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ManufacturerItemMinFields = {
  __typename?: 'manufacturer_item_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  manufacturer_product_name?: Maybe<Scalars['String']>;
  manufacturer_product_series?: Maybe<Scalars['String']>;
  product_url?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "manufacturer_item" */
export type ManufacturerItemMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_product_id?: Maybe<OrderBy>;
  manufacturer_product_name?: Maybe<OrderBy>;
  manufacturer_product_series?: Maybe<OrderBy>;
  product_url?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** response of any mutation on the table "manufacturer_item" */
export type ManufacturerItemMutationResponse = {
  __typename?: 'manufacturer_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ManufacturerItem>;
};

/** input type for inserting object relation for remote table "manufacturer_item" */
export type ManufacturerItemObjRelInsertInput = {
  data: ManufacturerItemInsertInput;
  on_conflict?: Maybe<ManufacturerItemOnConflict>;
};

/** on conflict condition type for table "manufacturer_item" */
export type ManufacturerItemOnConflict = {
  constraint: ManufacturerItemConstraint;
  update_columns: Array<ManufacturerItemUpdateColumn>;
  where?: Maybe<ManufacturerItemBoolExp>;
};

/** ordering options when selecting data from "manufacturer_item" */
export type ManufacturerItemOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer?: Maybe<ManufacturerOrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_product_id?: Maybe<OrderBy>;
  manufacturer_product_name?: Maybe<OrderBy>;
  manufacturer_product_series?: Maybe<OrderBy>;
  orderItems_aggregate?: Maybe<OrderItemAggregateOrderBy>;
  product_url?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** primary key columns input for table: "manufacturer_item" */
export type ManufacturerItemPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "manufacturer_item" */
export enum ManufacturerItemSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_id = 'manufacturer_id',
  /** column name */
  manufacturer_product_id = 'manufacturer_product_id',
  /** column name */
  manufacturer_product_name = 'manufacturer_product_name',
  /** column name */
  manufacturer_product_series = 'manufacturer_product_series',
  /** column name */
  product_url = 'product_url',
  /** column name */
  quantity = 'quantity'
}

/** input type for updating data in table "manufacturer_item" */
export type ManufacturerItemSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  manufacturer_product_name?: Maybe<Scalars['String']>;
  manufacturer_product_series?: Maybe<Scalars['String']>;
  product_url?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type ManufacturerItemStddevFields = {
  __typename?: 'manufacturer_item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "manufacturer_item" */
export type ManufacturerItemStddevOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ManufacturerItemStddevPopFields = {
  __typename?: 'manufacturer_item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "manufacturer_item" */
export type ManufacturerItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ManufacturerItemStddevSampFields = {
  __typename?: 'manufacturer_item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "manufacturer_item" */
export type ManufacturerItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ManufacturerItemSumFields = {
  __typename?: 'manufacturer_item_sum_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "manufacturer_item" */
export type ManufacturerItemSumOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** update columns of table "manufacturer_item" */
export enum ManufacturerItemUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_id = 'manufacturer_id',
  /** column name */
  manufacturer_product_id = 'manufacturer_product_id',
  /** column name */
  manufacturer_product_name = 'manufacturer_product_name',
  /** column name */
  manufacturer_product_series = 'manufacturer_product_series',
  /** column name */
  product_url = 'product_url',
  /** column name */
  quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type ManufacturerItemVarPopFields = {
  __typename?: 'manufacturer_item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "manufacturer_item" */
export type ManufacturerItemVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ManufacturerItemVarSampFields = {
  __typename?: 'manufacturer_item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "manufacturer_item" */
export type ManufacturerItemVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ManufacturerItemVarianceFields = {
  __typename?: 'manufacturer_item_variance_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "manufacturer_item" */
export type ManufacturerItemVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type ManufacturerMaxFields = {
  __typename?: 'manufacturer_max_fields';
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "manufacturer" */
export type ManufacturerMaxOrderBy = {
  icon_url?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ManufacturerMinFields = {
  __typename?: 'manufacturer_min_fields';
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "manufacturer" */
export type ManufacturerMinOrderBy = {
  icon_url?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "manufacturer" */
export type ManufacturerMutationResponse = {
  __typename?: 'manufacturer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Manufacturer>;
};

/** input type for inserting object relation for remote table "manufacturer" */
export type ManufacturerObjRelInsertInput = {
  data: ManufacturerInsertInput;
  on_conflict?: Maybe<ManufacturerOnConflict>;
};

/** on conflict condition type for table "manufacturer" */
export type ManufacturerOnConflict = {
  constraint: ManufacturerConstraint;
  update_columns: Array<ManufacturerUpdateColumn>;
  where?: Maybe<ManufacturerBoolExp>;
};

/** ordering options when selecting data from "manufacturer" */
export type ManufacturerOrderBy = {
  icon_url?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  manufacturer_items_aggregate?: Maybe<ManufacturerItemAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor?: Maybe<VendorOrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "manufacturer" */
export type ManufacturerPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "manufacturer" */
export enum ManufacturerSelectColumn {
  /** column name */
  icon_url = 'icon_url',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  url = 'url',
  /** column name */
  vendor_id = 'vendor_id'
}

/** input type for updating data in table "manufacturer" */
export type ManufacturerSetInput = {
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type ManufacturerStddevFields = {
  __typename?: 'manufacturer_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "manufacturer" */
export type ManufacturerStddevOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ManufacturerStddevPopFields = {
  __typename?: 'manufacturer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "manufacturer" */
export type ManufacturerStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ManufacturerStddevSampFields = {
  __typename?: 'manufacturer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "manufacturer" */
export type ManufacturerStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ManufacturerSumFields = {
  __typename?: 'manufacturer_sum_fields';
  id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "manufacturer" */
export type ManufacturerSumOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** update columns of table "manufacturer" */
export enum ManufacturerUpdateColumn {
  /** column name */
  icon_url = 'icon_url',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  url = 'url',
  /** column name */
  vendor_id = 'vendor_id'
}

/** aggregate var_pop on columns */
export type ManufacturerVarPopFields = {
  __typename?: 'manufacturer_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "manufacturer" */
export type ManufacturerVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ManufacturerVarSampFields = {
  __typename?: 'manufacturer_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "manufacturer" */
export type ManufacturerVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ManufacturerVarianceFields = {
  __typename?: 'manufacturer_variance_fields';
  id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "manufacturer" */
export type ManufacturerVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "enum_item_cable.connector" */
  delete_enum_item_cable_connector?: Maybe<EnumItemCableConnectorMutationResponse>;
  /** delete single row from the table: "enum_item_cable.connector" */
  delete_enum_item_cable_connector_by_pk?: Maybe<EnumItemCableConnector>;
  /** delete data from the table: "enum.item_class" */
  delete_enum_item_class?: Maybe<EnumItemClassMutationResponse>;
  /** delete single row from the table: "enum.item_class" */
  delete_enum_item_class_by_pk?: Maybe<EnumItemClass>;
  /** delete data from the table: "enum_item.handedness" */
  delete_enum_item_handedness?: Maybe<EnumItemHandednessMutationResponse>;
  /** delete single row from the table: "enum_item.handedness" */
  delete_enum_item_handedness_by_pk?: Maybe<EnumItemHandedness>;
  /** delete data from the table: "enum_item_hardware_fastener.drive" */
  delete_enum_item_hardware_fastener_drive?: Maybe<EnumItemHardwareFastenerDriveMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener.drive" */
  delete_enum_item_hardware_fastener_drive_by_pk?: Maybe<EnumItemHardwareFastenerDrive>;
  /** delete data from the table: "enum_item_hardware_fastener.material" */
  delete_enum_item_hardware_fastener_material?: Maybe<EnumItemHardwareFastenerMaterialMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener.material" */
  delete_enum_item_hardware_fastener_material_by_pk?: Maybe<EnumItemHardwareFastenerMaterial>;
  /** delete data from the table: "enum_item_hardware_fastener_nut.form" */
  delete_enum_item_hardware_fastener_nut_form?: Maybe<EnumItemHardwareFastenerNutFormMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_nut.form" */
  delete_enum_item_hardware_fastener_nut_form_by_pk?: Maybe<EnumItemHardwareFastenerNutForm>;
  /** delete data from the table: "enum_item_hardware_fastener_nut.strength" */
  delete_enum_item_hardware_fastener_nut_strength?: Maybe<EnumItemHardwareFastenerNutStrengthMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_nut.strength" */
  delete_enum_item_hardware_fastener_nut_strength_by_pk?: Maybe<EnumItemHardwareFastenerNutStrength>;
  /** delete data from the table: "enum_item_hardware_fastener_nut.thread_fit" */
  delete_enum_item_hardware_fastener_nut_thread_fit?: Maybe<EnumItemHardwareFastenerNutThreadFitMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_nut.thread_fit" */
  delete_enum_item_hardware_fastener_nut_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerNutThreadFit>;
  /** delete data from the table: "enum_item_hardware_fastener_screw.hardness" */
  delete_enum_item_hardware_fastener_screw_hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_screw.hardness" */
  delete_enum_item_hardware_fastener_screw_hardness_by_pk?: Maybe<EnumItemHardwareFastenerScrewHardness>;
  /** delete data from the table: "enum_item_hardware_fastener_screw.head" */
  delete_enum_item_hardware_fastener_screw_head?: Maybe<EnumItemHardwareFastenerScrewHeadMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_screw.head" */
  delete_enum_item_hardware_fastener_screw_head_by_pk?: Maybe<EnumItemHardwareFastenerScrewHead>;
  /** delete data from the table: "enum_item_hardware_fastener_screw_machine.point" */
  delete_enum_item_hardware_fastener_screw_machine_point?: Maybe<EnumItemHardwareFastenerScrewMachinePointMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_screw_machine.point" */
  delete_enum_item_hardware_fastener_screw_machine_point_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachinePoint>;
  /** delete data from the table: "enum_item_hardware_fastener_screw_machine.strength" */
  delete_enum_item_hardware_fastener_screw_machine_strength?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_screw_machine.strength" */
  delete_enum_item_hardware_fastener_screw_machine_strength_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineStrength>;
  /** delete data from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  delete_enum_item_hardware_fastener_screw_machine_thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  delete_enum_item_hardware_fastener_screw_machine_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFit>;
  /** delete data from the table: "enum_item_hardware_fastener.standoff_shape" */
  delete_enum_item_hardware_fastener_standoff_shape?: Maybe<EnumItemHardwareFastenerStandoffShapeMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener.standoff_shape" */
  delete_enum_item_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumItemHardwareFastenerStandoffShape>;
  /** delete data from the table: "enum_item_hardware_fastener.thread_label" */
  delete_enum_item_hardware_fastener_thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener.thread_label" */
  delete_enum_item_hardware_fastener_thread_label_by_pk?: Maybe<EnumItemHardwareFastenerThreadLabel>;
  /** delete data from the table: "enum_item_hardware_fastener.thread_standard" */
  delete_enum_item_hardware_fastener_thread_standard?: Maybe<EnumItemHardwareFastenerThreadStandardMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener.thread_standard" */
  delete_enum_item_hardware_fastener_thread_standard_by_pk?: Maybe<EnumItemHardwareFastenerThreadStandard>;
  /** delete data from the table: "enum_item_hardware_fastener_washer.form" */
  delete_enum_item_hardware_fastener_washer_form?: Maybe<EnumItemHardwareFastenerWasherFormMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_washer.form" */
  delete_enum_item_hardware_fastener_washer_form_by_pk?: Maybe<EnumItemHardwareFastenerWasherForm>;
  /** delete data from the table: "enum_item_hardware_fastener_washer.mechanism" */
  delete_enum_item_hardware_fastener_washer_mechanism?: Maybe<EnumItemHardwareFastenerWasherMechanismMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_washer.mechanism" */
  delete_enum_item_hardware_fastener_washer_mechanism_by_pk?: Maybe<EnumItemHardwareFastenerWasherMechanism>;
  /** delete data from the table: "enum_item_hardware_fastener_washer.pattern" */
  delete_enum_item_hardware_fastener_washer_pattern?: Maybe<EnumItemHardwareFastenerWasherPatternMutationResponse>;
  /** delete single row from the table: "enum_item_hardware_fastener_washer.pattern" */
  delete_enum_item_hardware_fastener_washer_pattern_by_pk?: Maybe<EnumItemHardwareFastenerWasherPattern>;
  /** delete data from the table: "enum_item_hardware.finish" */
  delete_enum_item_hardware_finish?: Maybe<EnumItemHardwareFinishMutationResponse>;
  /** delete single row from the table: "enum_item_hardware.finish" */
  delete_enum_item_hardware_finish_by_pk?: Maybe<EnumItemHardwareFinish>;
  /** delete data from the table: "enum_item_hardware.use_material" */
  delete_enum_item_hardware_use_material?: Maybe<EnumItemHardwareUseMaterialMutationResponse>;
  /** delete single row from the table: "enum_item_hardware.use_material" */
  delete_enum_item_hardware_use_material_by_pk?: Maybe<EnumItemHardwareUseMaterial>;
  /** delete data from the table: "enum_item_tool.drill_bit_finish" */
  delete_enum_item_tool_drill_bit_finish?: Maybe<EnumItemToolDrillBitFinishMutationResponse>;
  /** delete single row from the table: "enum_item_tool.drill_bit_finish" */
  delete_enum_item_tool_drill_bit_finish_by_pk?: Maybe<EnumItemToolDrillBitFinish>;
  /** delete data from the table: "enum_item_tool.drill_bit_length_class" */
  delete_enum_item_tool_drill_bit_length_class?: Maybe<EnumItemToolDrillBitLengthClassMutationResponse>;
  /** delete single row from the table: "enum_item_tool.drill_bit_length_class" */
  delete_enum_item_tool_drill_bit_length_class_by_pk?: Maybe<EnumItemToolDrillBitLengthClass>;
  /** delete data from the table: "enum_item_tool.drill_bit_material" */
  delete_enum_item_tool_drill_bit_material?: Maybe<EnumItemToolDrillBitMaterialMutationResponse>;
  /** delete single row from the table: "enum_item_tool.drill_bit_material" */
  delete_enum_item_tool_drill_bit_material_by_pk?: Maybe<EnumItemToolDrillBitMaterial>;
  /** delete data from the table: "enum_item_tool.drill_bit_point" */
  delete_enum_item_tool_drill_bit_point?: Maybe<EnumItemToolDrillBitPointMutationResponse>;
  /** delete single row from the table: "enum_item_tool.drill_bit_point" */
  delete_enum_item_tool_drill_bit_point_by_pk?: Maybe<EnumItemToolDrillBitPoint>;
  /** delete data from the table: "enum_item_tool.drill_bit_shank" */
  delete_enum_item_tool_drill_bit_shank?: Maybe<EnumItemToolDrillBitShankMutationResponse>;
  /** delete single row from the table: "enum_item_tool.drill_bit_shank" */
  delete_enum_item_tool_drill_bit_shank_by_pk?: Maybe<EnumItemToolDrillBitShank>;
  /** delete data from the table: "enum_item_tool.drill_bit_style" */
  delete_enum_item_tool_drill_bit_style?: Maybe<EnumItemToolDrillBitStyleMutationResponse>;
  /** delete single row from the table: "enum_item_tool.drill_bit_style" */
  delete_enum_item_tool_drill_bit_style_by_pk?: Maybe<EnumItemToolDrillBitStyle>;
  /** delete data from the table: "enum.mapped_class" */
  delete_enum_mapped_class?: Maybe<EnumMappedClassMutationResponse>;
  /** delete single row from the table: "enum.mapped_class" */
  delete_enum_mapped_class_by_pk?: Maybe<EnumMappedClass>;
  /** delete data from the table: "enum.payment_method_type" */
  delete_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>;
  /** delete single row from the table: "enum.payment_method_type" */
  delete_enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>;
  /** delete data from the table: "enum.space_type" */
  delete_enum_space_type?: Maybe<EnumSpaceTypeMutationResponse>;
  /** delete single row from the table: "enum.space_type" */
  delete_enum_space_type_by_pk?: Maybe<EnumSpaceType>;
  /** delete data from the table: "enum.stock_event_type" */
  delete_enum_stock_event_type?: Maybe<EnumStockEventTypeMutationResponse>;
  /** delete single row from the table: "enum.stock_event_type" */
  delete_enum_stock_event_type_by_pk?: Maybe<EnumStockEventType>;
  /** delete data from the table: "enum.unit" */
  delete_enum_unit?: Maybe<EnumUnitMutationResponse>;
  /** delete single row from the table: "enum.unit" */
  delete_enum_unit_by_pk?: Maybe<EnumUnit>;
  /** delete data from the table: "icon" */
  delete_icon?: Maybe<IconMutationResponse>;
  /** delete single row from the table: "icon" */
  delete_icon_by_pk?: Maybe<Icon>;
  /** delete data from the table: "icon_item_class_map" */
  delete_icon_item_class_map?: Maybe<IconItemClassMapMutationResponse>;
  /** delete single row from the table: "icon_item_class_map" */
  delete_icon_item_class_map_by_pk?: Maybe<IconItemClassMap>;
  /** delete data from the table: "icon_item_map" */
  delete_icon_item_map?: Maybe<IconItemMapMutationResponse>;
  /** delete single row from the table: "icon_item_map" */
  delete_icon_item_map_by_pk?: Maybe<IconItemMap>;
  /** delete data from the table: "icon_label_map" */
  delete_icon_label_map?: Maybe<IconLabelMapMutationResponse>;
  /** delete single row from the table: "icon_label_map" */
  delete_icon_label_map_by_pk?: Maybe<IconLabelMap>;
  /** delete data from the table: "item" */
  delete_item?: Maybe<ItemMutationResponse>;
  /** delete data from the table: "item.bundle" */
  delete_item_bundle?: Maybe<ItemBundleMutationResponse>;
  /** delete single row from the table: "item.bundle" */
  delete_item_bundle_by_pk?: Maybe<ItemBundle>;
  /** delete data from the table: "item.bundle_member" */
  delete_item_bundle_member?: Maybe<ItemBundleMemberMutationResponse>;
  /** delete single row from the table: "item.bundle_member" */
  delete_item_bundle_member_by_pk?: Maybe<ItemBundleMember>;
  /** delete single row from the table: "item" */
  delete_item_by_pk?: Maybe<Item>;
  /** delete data from the table: "item.cable_conductive" */
  delete_item_cable_conductive?: Maybe<ItemCableConductiveMutationResponse>;
  /** delete single row from the table: "item.cable_conductive" */
  delete_item_cable_conductive_by_pk?: Maybe<ItemCableConductive>;
  /** delete data from the table: "item.hardware_drill_bit" */
  delete_item_hardware_drill_bit?: Maybe<ItemHardwareDrillBitMutationResponse>;
  /** delete single row from the table: "item.hardware_drill_bit" */
  delete_item_hardware_drill_bit_by_pk?: Maybe<ItemHardwareDrillBit>;
  /** delete data from the table: "item.hardware_fastener_insert" */
  delete_item_hardware_fastener_insert?: Maybe<ItemHardwareFastenerInsertMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_insert" */
  delete_item_hardware_fastener_insert_by_pk?: Maybe<ItemHardwareFastenerInsert>;
  /** delete data from the table: "item.hardware_fastener_nut" */
  delete_item_hardware_fastener_nut?: Maybe<ItemHardwareFastenerNutMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_nut" */
  delete_item_hardware_fastener_nut_by_pk?: Maybe<ItemHardwareFastenerNut>;
  /** delete data from the table: "item.hardware_fastener_screw" */
  delete_item_hardware_fastener_screw?: Maybe<ItemHardwareFastenerScrewMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_screw" */
  delete_item_hardware_fastener_screw_by_pk?: Maybe<ItemHardwareFastenerScrew>;
  /** delete data from the table: "item.hardware_fastener_screw_machine" */
  delete_item_hardware_fastener_screw_machine?: Maybe<ItemHardwareFastenerScrewMachineMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_screw_machine" */
  delete_item_hardware_fastener_screw_machine_by_pk?: Maybe<ItemHardwareFastenerScrewMachine>;
  /** delete data from the table: "item.hardware_fastener_standoff" */
  delete_item_hardware_fastener_standoff?: Maybe<ItemHardwareFastenerStandoffMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_standoff" */
  delete_item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
  /** delete data from the table: "item.hardware_fastener_washer" */
  delete_item_hardware_fastener_washer?: Maybe<ItemHardwareFastenerWasherMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_washer" */
  delete_item_hardware_fastener_washer_by_pk?: Maybe<ItemHardwareFastenerWasher>;
  /** delete data from the table: "label" */
  delete_label?: Maybe<LabelMutationResponse>;
  /** delete single row from the table: "label" */
  delete_label_by_pk?: Maybe<Label>;
  /** delete data from the table: "label_item_map" */
  delete_label_item_map?: Maybe<LabelItemMapMutationResponse>;
  /** delete single row from the table: "label_item_map" */
  delete_label_item_map_by_pk?: Maybe<LabelItemMap>;
  /** delete data from the table: "label_template_map" */
  delete_label_template_map?: Maybe<LabelTemplateMapMutationResponse>;
  /** delete single row from the table: "label_template_map" */
  delete_label_template_map_by_pk?: Maybe<LabelTemplateMap>;
  /** delete data from the table: "manufacturer" */
  delete_manufacturer?: Maybe<ManufacturerMutationResponse>;
  /** delete single row from the table: "manufacturer" */
  delete_manufacturer_by_pk?: Maybe<Manufacturer>;
  /** delete data from the table: "manufacturer_item" */
  delete_manufacturer_item?: Maybe<ManufacturerItemMutationResponse>;
  /** delete single row from the table: "manufacturer_item" */
  delete_manufacturer_item_by_pk?: Maybe<ManufacturerItem>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<OrderMutationResponse>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** delete data from the table: "order_item" */
  delete_order_item?: Maybe<OrderItemMutationResponse>;
  /** delete single row from the table: "order_item" */
  delete_order_item_by_pk?: Maybe<OrderItem>;
  /** delete data from the table: "payment_method" */
  delete_payment_method?: Maybe<PaymentMethodMutationResponse>;
  /** delete single row from the table: "payment_method" */
  delete_payment_method_by_pk?: Maybe<PaymentMethod>;
  /** delete data from the table: "property.item_hardware_fastener_bolt_strength" */
  delete_property_item_hardware_fastener_bolt_strength?: Maybe<PropertyItemHardwareFastenerBoltStrengthMutationResponse>;
  /** delete single row from the table: "property.item_hardware_fastener_bolt_strength" */
  delete_property_item_hardware_fastener_bolt_strength_by_pk?: Maybe<PropertyItemHardwareFastenerBoltStrength>;
  /** delete data from the table: "property_item_hardware_fastener_screw_machine.diameter" */
  delete_property_item_hardware_fastener_screw_machine_diameter?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterMutationResponse>;
  /** delete single row from the table: "property_item_hardware_fastener_screw_machine.diameter" */
  delete_property_item_hardware_fastener_screw_machine_diameter_by_pk?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameter>;
  /** delete data from the table: "search_data" */
  delete_search_data?: Maybe<SearchDataMutationResponse>;
  /** delete single row from the table: "search_data" */
  delete_search_data_by_pk?: Maybe<SearchData>;
  /** delete data from the table: "shipment" */
  delete_shipment?: Maybe<ShipmentMutationResponse>;
  /** delete single row from the table: "shipment" */
  delete_shipment_by_pk?: Maybe<Shipment>;
  /** delete data from the table: "stock" */
  delete_stock?: Maybe<StockMutationResponse>;
  /** delete single row from the table: "stock" */
  delete_stock_by_pk?: Maybe<Stock>;
  /** delete data from the table: "storage" */
  delete_storage?: Maybe<StorageMutationResponse>;
  /** delete single row from the table: "storage" */
  delete_storage_by_pk?: Maybe<Storage>;
  /** delete data from the table: "tag" */
  delete_tag?: Maybe<TagMutationResponse>;
  /** delete single row from the table: "tag" */
  delete_tag_by_pk?: Maybe<Tag>;
  /** delete data from the table: "vendor" */
  delete_vendor?: Maybe<VendorMutationResponse>;
  /** delete single row from the table: "vendor" */
  delete_vendor_by_pk?: Maybe<Vendor>;
  /** delete data from the table: "vendor_item" */
  delete_vendor_item?: Maybe<VendorItemMutationResponse>;
  /** delete single row from the table: "vendor_item" */
  delete_vendor_item_by_pk?: Maybe<VendorItem>;
  /** insert data into the table: "enum_item_cable.connector" */
  insert_enum_item_cable_connector?: Maybe<EnumItemCableConnectorMutationResponse>;
  /** insert a single row into the table: "enum_item_cable.connector" */
  insert_enum_item_cable_connector_one?: Maybe<EnumItemCableConnector>;
  /** insert data into the table: "enum.item_class" */
  insert_enum_item_class?: Maybe<EnumItemClassMutationResponse>;
  /** insert a single row into the table: "enum.item_class" */
  insert_enum_item_class_one?: Maybe<EnumItemClass>;
  /** insert data into the table: "enum_item.handedness" */
  insert_enum_item_handedness?: Maybe<EnumItemHandednessMutationResponse>;
  /** insert a single row into the table: "enum_item.handedness" */
  insert_enum_item_handedness_one?: Maybe<EnumItemHandedness>;
  /** insert data into the table: "enum_item_hardware_fastener.drive" */
  insert_enum_item_hardware_fastener_drive?: Maybe<EnumItemHardwareFastenerDriveMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener.drive" */
  insert_enum_item_hardware_fastener_drive_one?: Maybe<EnumItemHardwareFastenerDrive>;
  /** insert data into the table: "enum_item_hardware_fastener.material" */
  insert_enum_item_hardware_fastener_material?: Maybe<EnumItemHardwareFastenerMaterialMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener.material" */
  insert_enum_item_hardware_fastener_material_one?: Maybe<EnumItemHardwareFastenerMaterial>;
  /** insert data into the table: "enum_item_hardware_fastener_nut.form" */
  insert_enum_item_hardware_fastener_nut_form?: Maybe<EnumItemHardwareFastenerNutFormMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_nut.form" */
  insert_enum_item_hardware_fastener_nut_form_one?: Maybe<EnumItemHardwareFastenerNutForm>;
  /** insert data into the table: "enum_item_hardware_fastener_nut.strength" */
  insert_enum_item_hardware_fastener_nut_strength?: Maybe<EnumItemHardwareFastenerNutStrengthMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_nut.strength" */
  insert_enum_item_hardware_fastener_nut_strength_one?: Maybe<EnumItemHardwareFastenerNutStrength>;
  /** insert data into the table: "enum_item_hardware_fastener_nut.thread_fit" */
  insert_enum_item_hardware_fastener_nut_thread_fit?: Maybe<EnumItemHardwareFastenerNutThreadFitMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_nut.thread_fit" */
  insert_enum_item_hardware_fastener_nut_thread_fit_one?: Maybe<EnumItemHardwareFastenerNutThreadFit>;
  /** insert data into the table: "enum_item_hardware_fastener_screw.hardness" */
  insert_enum_item_hardware_fastener_screw_hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_screw.hardness" */
  insert_enum_item_hardware_fastener_screw_hardness_one?: Maybe<EnumItemHardwareFastenerScrewHardness>;
  /** insert data into the table: "enum_item_hardware_fastener_screw.head" */
  insert_enum_item_hardware_fastener_screw_head?: Maybe<EnumItemHardwareFastenerScrewHeadMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_screw.head" */
  insert_enum_item_hardware_fastener_screw_head_one?: Maybe<EnumItemHardwareFastenerScrewHead>;
  /** insert data into the table: "enum_item_hardware_fastener_screw_machine.point" */
  insert_enum_item_hardware_fastener_screw_machine_point?: Maybe<EnumItemHardwareFastenerScrewMachinePointMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_screw_machine.point" */
  insert_enum_item_hardware_fastener_screw_machine_point_one?: Maybe<EnumItemHardwareFastenerScrewMachinePoint>;
  /** insert data into the table: "enum_item_hardware_fastener_screw_machine.strength" */
  insert_enum_item_hardware_fastener_screw_machine_strength?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_screw_machine.strength" */
  insert_enum_item_hardware_fastener_screw_machine_strength_one?: Maybe<EnumItemHardwareFastenerScrewMachineStrength>;
  /** insert data into the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  insert_enum_item_hardware_fastener_screw_machine_thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  insert_enum_item_hardware_fastener_screw_machine_thread_fit_one?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFit>;
  /** insert data into the table: "enum_item_hardware_fastener.standoff_shape" */
  insert_enum_item_hardware_fastener_standoff_shape?: Maybe<EnumItemHardwareFastenerStandoffShapeMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener.standoff_shape" */
  insert_enum_item_hardware_fastener_standoff_shape_one?: Maybe<EnumItemHardwareFastenerStandoffShape>;
  /** insert data into the table: "enum_item_hardware_fastener.thread_label" */
  insert_enum_item_hardware_fastener_thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener.thread_label" */
  insert_enum_item_hardware_fastener_thread_label_one?: Maybe<EnumItemHardwareFastenerThreadLabel>;
  /** insert data into the table: "enum_item_hardware_fastener.thread_standard" */
  insert_enum_item_hardware_fastener_thread_standard?: Maybe<EnumItemHardwareFastenerThreadStandardMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener.thread_standard" */
  insert_enum_item_hardware_fastener_thread_standard_one?: Maybe<EnumItemHardwareFastenerThreadStandard>;
  /** insert data into the table: "enum_item_hardware_fastener_washer.form" */
  insert_enum_item_hardware_fastener_washer_form?: Maybe<EnumItemHardwareFastenerWasherFormMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_washer.form" */
  insert_enum_item_hardware_fastener_washer_form_one?: Maybe<EnumItemHardwareFastenerWasherForm>;
  /** insert data into the table: "enum_item_hardware_fastener_washer.mechanism" */
  insert_enum_item_hardware_fastener_washer_mechanism?: Maybe<EnumItemHardwareFastenerWasherMechanismMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_washer.mechanism" */
  insert_enum_item_hardware_fastener_washer_mechanism_one?: Maybe<EnumItemHardwareFastenerWasherMechanism>;
  /** insert data into the table: "enum_item_hardware_fastener_washer.pattern" */
  insert_enum_item_hardware_fastener_washer_pattern?: Maybe<EnumItemHardwareFastenerWasherPatternMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware_fastener_washer.pattern" */
  insert_enum_item_hardware_fastener_washer_pattern_one?: Maybe<EnumItemHardwareFastenerWasherPattern>;
  /** insert data into the table: "enum_item_hardware.finish" */
  insert_enum_item_hardware_finish?: Maybe<EnumItemHardwareFinishMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware.finish" */
  insert_enum_item_hardware_finish_one?: Maybe<EnumItemHardwareFinish>;
  /** insert data into the table: "enum_item_hardware.use_material" */
  insert_enum_item_hardware_use_material?: Maybe<EnumItemHardwareUseMaterialMutationResponse>;
  /** insert a single row into the table: "enum_item_hardware.use_material" */
  insert_enum_item_hardware_use_material_one?: Maybe<EnumItemHardwareUseMaterial>;
  /** insert data into the table: "enum_item_tool.drill_bit_finish" */
  insert_enum_item_tool_drill_bit_finish?: Maybe<EnumItemToolDrillBitFinishMutationResponse>;
  /** insert a single row into the table: "enum_item_tool.drill_bit_finish" */
  insert_enum_item_tool_drill_bit_finish_one?: Maybe<EnumItemToolDrillBitFinish>;
  /** insert data into the table: "enum_item_tool.drill_bit_length_class" */
  insert_enum_item_tool_drill_bit_length_class?: Maybe<EnumItemToolDrillBitLengthClassMutationResponse>;
  /** insert a single row into the table: "enum_item_tool.drill_bit_length_class" */
  insert_enum_item_tool_drill_bit_length_class_one?: Maybe<EnumItemToolDrillBitLengthClass>;
  /** insert data into the table: "enum_item_tool.drill_bit_material" */
  insert_enum_item_tool_drill_bit_material?: Maybe<EnumItemToolDrillBitMaterialMutationResponse>;
  /** insert a single row into the table: "enum_item_tool.drill_bit_material" */
  insert_enum_item_tool_drill_bit_material_one?: Maybe<EnumItemToolDrillBitMaterial>;
  /** insert data into the table: "enum_item_tool.drill_bit_point" */
  insert_enum_item_tool_drill_bit_point?: Maybe<EnumItemToolDrillBitPointMutationResponse>;
  /** insert a single row into the table: "enum_item_tool.drill_bit_point" */
  insert_enum_item_tool_drill_bit_point_one?: Maybe<EnumItemToolDrillBitPoint>;
  /** insert data into the table: "enum_item_tool.drill_bit_shank" */
  insert_enum_item_tool_drill_bit_shank?: Maybe<EnumItemToolDrillBitShankMutationResponse>;
  /** insert a single row into the table: "enum_item_tool.drill_bit_shank" */
  insert_enum_item_tool_drill_bit_shank_one?: Maybe<EnumItemToolDrillBitShank>;
  /** insert data into the table: "enum_item_tool.drill_bit_style" */
  insert_enum_item_tool_drill_bit_style?: Maybe<EnumItemToolDrillBitStyleMutationResponse>;
  /** insert a single row into the table: "enum_item_tool.drill_bit_style" */
  insert_enum_item_tool_drill_bit_style_one?: Maybe<EnumItemToolDrillBitStyle>;
  /** insert data into the table: "enum.mapped_class" */
  insert_enum_mapped_class?: Maybe<EnumMappedClassMutationResponse>;
  /** insert a single row into the table: "enum.mapped_class" */
  insert_enum_mapped_class_one?: Maybe<EnumMappedClass>;
  /** insert data into the table: "enum.payment_method_type" */
  insert_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>;
  /** insert a single row into the table: "enum.payment_method_type" */
  insert_enum_payment_method_type_one?: Maybe<EnumPaymentMethodType>;
  /** insert data into the table: "enum.space_type" */
  insert_enum_space_type?: Maybe<EnumSpaceTypeMutationResponse>;
  /** insert a single row into the table: "enum.space_type" */
  insert_enum_space_type_one?: Maybe<EnumSpaceType>;
  /** insert data into the table: "enum.stock_event_type" */
  insert_enum_stock_event_type?: Maybe<EnumStockEventTypeMutationResponse>;
  /** insert a single row into the table: "enum.stock_event_type" */
  insert_enum_stock_event_type_one?: Maybe<EnumStockEventType>;
  /** insert data into the table: "enum.unit" */
  insert_enum_unit?: Maybe<EnumUnitMutationResponse>;
  /** insert a single row into the table: "enum.unit" */
  insert_enum_unit_one?: Maybe<EnumUnit>;
  /** insert data into the table: "icon" */
  insert_icon?: Maybe<IconMutationResponse>;
  /** insert data into the table: "icon_item_class_map" */
  insert_icon_item_class_map?: Maybe<IconItemClassMapMutationResponse>;
  /** insert a single row into the table: "icon_item_class_map" */
  insert_icon_item_class_map_one?: Maybe<IconItemClassMap>;
  /** insert data into the table: "icon_item_map" */
  insert_icon_item_map?: Maybe<IconItemMapMutationResponse>;
  /** insert a single row into the table: "icon_item_map" */
  insert_icon_item_map_one?: Maybe<IconItemMap>;
  /** insert data into the table: "icon_label_map" */
  insert_icon_label_map?: Maybe<IconLabelMapMutationResponse>;
  /** insert a single row into the table: "icon_label_map" */
  insert_icon_label_map_one?: Maybe<IconLabelMap>;
  /** insert a single row into the table: "icon" */
  insert_icon_one?: Maybe<Icon>;
  /** insert data into the table: "item" */
  insert_item?: Maybe<ItemMutationResponse>;
  /** insert data into the table: "item.bundle" */
  insert_item_bundle?: Maybe<ItemBundleMutationResponse>;
  /** insert data into the table: "item.bundle_member" */
  insert_item_bundle_member?: Maybe<ItemBundleMemberMutationResponse>;
  /** insert a single row into the table: "item.bundle_member" */
  insert_item_bundle_member_one?: Maybe<ItemBundleMember>;
  /** insert a single row into the table: "item.bundle" */
  insert_item_bundle_one?: Maybe<ItemBundle>;
  /** insert data into the table: "item.cable_conductive" */
  insert_item_cable_conductive?: Maybe<ItemCableConductiveMutationResponse>;
  /** insert a single row into the table: "item.cable_conductive" */
  insert_item_cable_conductive_one?: Maybe<ItemCableConductive>;
  /** insert data into the table: "item.hardware_drill_bit" */
  insert_item_hardware_drill_bit?: Maybe<ItemHardwareDrillBitMutationResponse>;
  /** insert a single row into the table: "item.hardware_drill_bit" */
  insert_item_hardware_drill_bit_one?: Maybe<ItemHardwareDrillBit>;
  /** insert data into the table: "item.hardware_fastener_insert" */
  insert_item_hardware_fastener_insert?: Maybe<ItemHardwareFastenerInsertMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_insert" */
  insert_item_hardware_fastener_insert_one?: Maybe<ItemHardwareFastenerInsert>;
  /** insert data into the table: "item.hardware_fastener_nut" */
  insert_item_hardware_fastener_nut?: Maybe<ItemHardwareFastenerNutMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_nut" */
  insert_item_hardware_fastener_nut_one?: Maybe<ItemHardwareFastenerNut>;
  /** insert data into the table: "item.hardware_fastener_screw" */
  insert_item_hardware_fastener_screw?: Maybe<ItemHardwareFastenerScrewMutationResponse>;
  /** insert data into the table: "item.hardware_fastener_screw_machine" */
  insert_item_hardware_fastener_screw_machine?: Maybe<ItemHardwareFastenerScrewMachineMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_screw_machine" */
  insert_item_hardware_fastener_screw_machine_one?: Maybe<ItemHardwareFastenerScrewMachine>;
  /** insert a single row into the table: "item.hardware_fastener_screw" */
  insert_item_hardware_fastener_screw_one?: Maybe<ItemHardwareFastenerScrew>;
  /** insert data into the table: "item.hardware_fastener_standoff" */
  insert_item_hardware_fastener_standoff?: Maybe<ItemHardwareFastenerStandoffMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_standoff" */
  insert_item_hardware_fastener_standoff_one?: Maybe<ItemHardwareFastenerStandoff>;
  /** insert data into the table: "item.hardware_fastener_washer" */
  insert_item_hardware_fastener_washer?: Maybe<ItemHardwareFastenerWasherMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_washer" */
  insert_item_hardware_fastener_washer_one?: Maybe<ItemHardwareFastenerWasher>;
  /** insert a single row into the table: "item" */
  insert_item_one?: Maybe<Item>;
  /** insert data into the table: "label" */
  insert_label?: Maybe<LabelMutationResponse>;
  /** insert data into the table: "label_item_map" */
  insert_label_item_map?: Maybe<LabelItemMapMutationResponse>;
  /** insert a single row into the table: "label_item_map" */
  insert_label_item_map_one?: Maybe<LabelItemMap>;
  /** insert a single row into the table: "label" */
  insert_label_one?: Maybe<Label>;
  /** insert data into the table: "label_template_map" */
  insert_label_template_map?: Maybe<LabelTemplateMapMutationResponse>;
  /** insert a single row into the table: "label_template_map" */
  insert_label_template_map_one?: Maybe<LabelTemplateMap>;
  /** insert data into the table: "manufacturer" */
  insert_manufacturer?: Maybe<ManufacturerMutationResponse>;
  /** insert data into the table: "manufacturer_item" */
  insert_manufacturer_item?: Maybe<ManufacturerItemMutationResponse>;
  /** insert a single row into the table: "manufacturer_item" */
  insert_manufacturer_item_one?: Maybe<ManufacturerItem>;
  /** insert a single row into the table: "manufacturer" */
  insert_manufacturer_one?: Maybe<Manufacturer>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<OrderMutationResponse>;
  /** insert data into the table: "order_item" */
  insert_order_item?: Maybe<OrderItemMutationResponse>;
  /** insert a single row into the table: "order_item" */
  insert_order_item_one?: Maybe<OrderItem>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** insert data into the table: "payment_method" */
  insert_payment_method?: Maybe<PaymentMethodMutationResponse>;
  /** insert a single row into the table: "payment_method" */
  insert_payment_method_one?: Maybe<PaymentMethod>;
  /** insert data into the table: "property.item_hardware_fastener_bolt_strength" */
  insert_property_item_hardware_fastener_bolt_strength?: Maybe<PropertyItemHardwareFastenerBoltStrengthMutationResponse>;
  /** insert a single row into the table: "property.item_hardware_fastener_bolt_strength" */
  insert_property_item_hardware_fastener_bolt_strength_one?: Maybe<PropertyItemHardwareFastenerBoltStrength>;
  /** insert data into the table: "property_item_hardware_fastener_screw_machine.diameter" */
  insert_property_item_hardware_fastener_screw_machine_diameter?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterMutationResponse>;
  /** insert a single row into the table: "property_item_hardware_fastener_screw_machine.diameter" */
  insert_property_item_hardware_fastener_screw_machine_diameter_one?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameter>;
  /** insert data into the table: "search_data" */
  insert_search_data?: Maybe<SearchDataMutationResponse>;
  /** insert a single row into the table: "search_data" */
  insert_search_data_one?: Maybe<SearchData>;
  /** insert data into the table: "shipment" */
  insert_shipment?: Maybe<ShipmentMutationResponse>;
  /** insert a single row into the table: "shipment" */
  insert_shipment_one?: Maybe<Shipment>;
  /** insert data into the table: "stock" */
  insert_stock?: Maybe<StockMutationResponse>;
  /** insert a single row into the table: "stock" */
  insert_stock_one?: Maybe<Stock>;
  /** insert data into the table: "storage" */
  insert_storage?: Maybe<StorageMutationResponse>;
  /** insert a single row into the table: "storage" */
  insert_storage_one?: Maybe<Storage>;
  /** insert data into the table: "tag" */
  insert_tag?: Maybe<TagMutationResponse>;
  /** insert a single row into the table: "tag" */
  insert_tag_one?: Maybe<Tag>;
  /** insert data into the table: "vendor" */
  insert_vendor?: Maybe<VendorMutationResponse>;
  /** insert data into the table: "vendor_item" */
  insert_vendor_item?: Maybe<VendorItemMutationResponse>;
  /** insert a single row into the table: "vendor_item" */
  insert_vendor_item_one?: Maybe<VendorItem>;
  /** insert a single row into the table: "vendor" */
  insert_vendor_one?: Maybe<Vendor>;
  /**
   * Send a label to be printed
   * Image Buffer / Raster data arranged as [page][column][pixels] of uint8 to the printer
   */
  putLabelMonochromeBuffer?: Maybe<OperationResult>;
  /** update data of the table: "enum_item_cable.connector" */
  update_enum_item_cable_connector?: Maybe<EnumItemCableConnectorMutationResponse>;
  /** update single row of the table: "enum_item_cable.connector" */
  update_enum_item_cable_connector_by_pk?: Maybe<EnumItemCableConnector>;
  /** update data of the table: "enum.item_class" */
  update_enum_item_class?: Maybe<EnumItemClassMutationResponse>;
  /** update single row of the table: "enum.item_class" */
  update_enum_item_class_by_pk?: Maybe<EnumItemClass>;
  /** update data of the table: "enum_item.handedness" */
  update_enum_item_handedness?: Maybe<EnumItemHandednessMutationResponse>;
  /** update single row of the table: "enum_item.handedness" */
  update_enum_item_handedness_by_pk?: Maybe<EnumItemHandedness>;
  /** update data of the table: "enum_item_hardware_fastener.drive" */
  update_enum_item_hardware_fastener_drive?: Maybe<EnumItemHardwareFastenerDriveMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener.drive" */
  update_enum_item_hardware_fastener_drive_by_pk?: Maybe<EnumItemHardwareFastenerDrive>;
  /** update data of the table: "enum_item_hardware_fastener.material" */
  update_enum_item_hardware_fastener_material?: Maybe<EnumItemHardwareFastenerMaterialMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener.material" */
  update_enum_item_hardware_fastener_material_by_pk?: Maybe<EnumItemHardwareFastenerMaterial>;
  /** update data of the table: "enum_item_hardware_fastener_nut.form" */
  update_enum_item_hardware_fastener_nut_form?: Maybe<EnumItemHardwareFastenerNutFormMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_nut.form" */
  update_enum_item_hardware_fastener_nut_form_by_pk?: Maybe<EnumItemHardwareFastenerNutForm>;
  /** update data of the table: "enum_item_hardware_fastener_nut.strength" */
  update_enum_item_hardware_fastener_nut_strength?: Maybe<EnumItemHardwareFastenerNutStrengthMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_nut.strength" */
  update_enum_item_hardware_fastener_nut_strength_by_pk?: Maybe<EnumItemHardwareFastenerNutStrength>;
  /** update data of the table: "enum_item_hardware_fastener_nut.thread_fit" */
  update_enum_item_hardware_fastener_nut_thread_fit?: Maybe<EnumItemHardwareFastenerNutThreadFitMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_nut.thread_fit" */
  update_enum_item_hardware_fastener_nut_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerNutThreadFit>;
  /** update data of the table: "enum_item_hardware_fastener_screw.hardness" */
  update_enum_item_hardware_fastener_screw_hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_screw.hardness" */
  update_enum_item_hardware_fastener_screw_hardness_by_pk?: Maybe<EnumItemHardwareFastenerScrewHardness>;
  /** update data of the table: "enum_item_hardware_fastener_screw.head" */
  update_enum_item_hardware_fastener_screw_head?: Maybe<EnumItemHardwareFastenerScrewHeadMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_screw.head" */
  update_enum_item_hardware_fastener_screw_head_by_pk?: Maybe<EnumItemHardwareFastenerScrewHead>;
  /** update data of the table: "enum_item_hardware_fastener_screw_machine.point" */
  update_enum_item_hardware_fastener_screw_machine_point?: Maybe<EnumItemHardwareFastenerScrewMachinePointMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_screw_machine.point" */
  update_enum_item_hardware_fastener_screw_machine_point_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachinePoint>;
  /** update data of the table: "enum_item_hardware_fastener_screw_machine.strength" */
  update_enum_item_hardware_fastener_screw_machine_strength?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_screw_machine.strength" */
  update_enum_item_hardware_fastener_screw_machine_strength_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineStrength>;
  /** update data of the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  update_enum_item_hardware_fastener_screw_machine_thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  update_enum_item_hardware_fastener_screw_machine_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFit>;
  /** update data of the table: "enum_item_hardware_fastener.standoff_shape" */
  update_enum_item_hardware_fastener_standoff_shape?: Maybe<EnumItemHardwareFastenerStandoffShapeMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener.standoff_shape" */
  update_enum_item_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumItemHardwareFastenerStandoffShape>;
  /** update data of the table: "enum_item_hardware_fastener.thread_label" */
  update_enum_item_hardware_fastener_thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener.thread_label" */
  update_enum_item_hardware_fastener_thread_label_by_pk?: Maybe<EnumItemHardwareFastenerThreadLabel>;
  /** update data of the table: "enum_item_hardware_fastener.thread_standard" */
  update_enum_item_hardware_fastener_thread_standard?: Maybe<EnumItemHardwareFastenerThreadStandardMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener.thread_standard" */
  update_enum_item_hardware_fastener_thread_standard_by_pk?: Maybe<EnumItemHardwareFastenerThreadStandard>;
  /** update data of the table: "enum_item_hardware_fastener_washer.form" */
  update_enum_item_hardware_fastener_washer_form?: Maybe<EnumItemHardwareFastenerWasherFormMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_washer.form" */
  update_enum_item_hardware_fastener_washer_form_by_pk?: Maybe<EnumItemHardwareFastenerWasherForm>;
  /** update data of the table: "enum_item_hardware_fastener_washer.mechanism" */
  update_enum_item_hardware_fastener_washer_mechanism?: Maybe<EnumItemHardwareFastenerWasherMechanismMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_washer.mechanism" */
  update_enum_item_hardware_fastener_washer_mechanism_by_pk?: Maybe<EnumItemHardwareFastenerWasherMechanism>;
  /** update data of the table: "enum_item_hardware_fastener_washer.pattern" */
  update_enum_item_hardware_fastener_washer_pattern?: Maybe<EnumItemHardwareFastenerWasherPatternMutationResponse>;
  /** update single row of the table: "enum_item_hardware_fastener_washer.pattern" */
  update_enum_item_hardware_fastener_washer_pattern_by_pk?: Maybe<EnumItemHardwareFastenerWasherPattern>;
  /** update data of the table: "enum_item_hardware.finish" */
  update_enum_item_hardware_finish?: Maybe<EnumItemHardwareFinishMutationResponse>;
  /** update single row of the table: "enum_item_hardware.finish" */
  update_enum_item_hardware_finish_by_pk?: Maybe<EnumItemHardwareFinish>;
  /** update data of the table: "enum_item_hardware.use_material" */
  update_enum_item_hardware_use_material?: Maybe<EnumItemHardwareUseMaterialMutationResponse>;
  /** update single row of the table: "enum_item_hardware.use_material" */
  update_enum_item_hardware_use_material_by_pk?: Maybe<EnumItemHardwareUseMaterial>;
  /** update data of the table: "enum_item_tool.drill_bit_finish" */
  update_enum_item_tool_drill_bit_finish?: Maybe<EnumItemToolDrillBitFinishMutationResponse>;
  /** update single row of the table: "enum_item_tool.drill_bit_finish" */
  update_enum_item_tool_drill_bit_finish_by_pk?: Maybe<EnumItemToolDrillBitFinish>;
  /** update data of the table: "enum_item_tool.drill_bit_length_class" */
  update_enum_item_tool_drill_bit_length_class?: Maybe<EnumItemToolDrillBitLengthClassMutationResponse>;
  /** update single row of the table: "enum_item_tool.drill_bit_length_class" */
  update_enum_item_tool_drill_bit_length_class_by_pk?: Maybe<EnumItemToolDrillBitLengthClass>;
  /** update data of the table: "enum_item_tool.drill_bit_material" */
  update_enum_item_tool_drill_bit_material?: Maybe<EnumItemToolDrillBitMaterialMutationResponse>;
  /** update single row of the table: "enum_item_tool.drill_bit_material" */
  update_enum_item_tool_drill_bit_material_by_pk?: Maybe<EnumItemToolDrillBitMaterial>;
  /** update data of the table: "enum_item_tool.drill_bit_point" */
  update_enum_item_tool_drill_bit_point?: Maybe<EnumItemToolDrillBitPointMutationResponse>;
  /** update single row of the table: "enum_item_tool.drill_bit_point" */
  update_enum_item_tool_drill_bit_point_by_pk?: Maybe<EnumItemToolDrillBitPoint>;
  /** update data of the table: "enum_item_tool.drill_bit_shank" */
  update_enum_item_tool_drill_bit_shank?: Maybe<EnumItemToolDrillBitShankMutationResponse>;
  /** update single row of the table: "enum_item_tool.drill_bit_shank" */
  update_enum_item_tool_drill_bit_shank_by_pk?: Maybe<EnumItemToolDrillBitShank>;
  /** update data of the table: "enum_item_tool.drill_bit_style" */
  update_enum_item_tool_drill_bit_style?: Maybe<EnumItemToolDrillBitStyleMutationResponse>;
  /** update single row of the table: "enum_item_tool.drill_bit_style" */
  update_enum_item_tool_drill_bit_style_by_pk?: Maybe<EnumItemToolDrillBitStyle>;
  /** update data of the table: "enum.mapped_class" */
  update_enum_mapped_class?: Maybe<EnumMappedClassMutationResponse>;
  /** update single row of the table: "enum.mapped_class" */
  update_enum_mapped_class_by_pk?: Maybe<EnumMappedClass>;
  /** update data of the table: "enum.payment_method_type" */
  update_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>;
  /** update single row of the table: "enum.payment_method_type" */
  update_enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>;
  /** update data of the table: "enum.space_type" */
  update_enum_space_type?: Maybe<EnumSpaceTypeMutationResponse>;
  /** update single row of the table: "enum.space_type" */
  update_enum_space_type_by_pk?: Maybe<EnumSpaceType>;
  /** update data of the table: "enum.stock_event_type" */
  update_enum_stock_event_type?: Maybe<EnumStockEventTypeMutationResponse>;
  /** update single row of the table: "enum.stock_event_type" */
  update_enum_stock_event_type_by_pk?: Maybe<EnumStockEventType>;
  /** update data of the table: "enum.unit" */
  update_enum_unit?: Maybe<EnumUnitMutationResponse>;
  /** update single row of the table: "enum.unit" */
  update_enum_unit_by_pk?: Maybe<EnumUnit>;
  /** update data of the table: "icon" */
  update_icon?: Maybe<IconMutationResponse>;
  /** update single row of the table: "icon" */
  update_icon_by_pk?: Maybe<Icon>;
  /** update data of the table: "icon_item_class_map" */
  update_icon_item_class_map?: Maybe<IconItemClassMapMutationResponse>;
  /** update single row of the table: "icon_item_class_map" */
  update_icon_item_class_map_by_pk?: Maybe<IconItemClassMap>;
  /** update data of the table: "icon_item_map" */
  update_icon_item_map?: Maybe<IconItemMapMutationResponse>;
  /** update single row of the table: "icon_item_map" */
  update_icon_item_map_by_pk?: Maybe<IconItemMap>;
  /** update data of the table: "icon_label_map" */
  update_icon_label_map?: Maybe<IconLabelMapMutationResponse>;
  /** update single row of the table: "icon_label_map" */
  update_icon_label_map_by_pk?: Maybe<IconLabelMap>;
  /** update data of the table: "item" */
  update_item?: Maybe<ItemMutationResponse>;
  /** update data of the table: "item.bundle" */
  update_item_bundle?: Maybe<ItemBundleMutationResponse>;
  /** update single row of the table: "item.bundle" */
  update_item_bundle_by_pk?: Maybe<ItemBundle>;
  /** update data of the table: "item.bundle_member" */
  update_item_bundle_member?: Maybe<ItemBundleMemberMutationResponse>;
  /** update single row of the table: "item.bundle_member" */
  update_item_bundle_member_by_pk?: Maybe<ItemBundleMember>;
  /** update single row of the table: "item" */
  update_item_by_pk?: Maybe<Item>;
  /** update data of the table: "item.cable_conductive" */
  update_item_cable_conductive?: Maybe<ItemCableConductiveMutationResponse>;
  /** update single row of the table: "item.cable_conductive" */
  update_item_cable_conductive_by_pk?: Maybe<ItemCableConductive>;
  /** update data of the table: "item.hardware_drill_bit" */
  update_item_hardware_drill_bit?: Maybe<ItemHardwareDrillBitMutationResponse>;
  /** update single row of the table: "item.hardware_drill_bit" */
  update_item_hardware_drill_bit_by_pk?: Maybe<ItemHardwareDrillBit>;
  /** update data of the table: "item.hardware_fastener_insert" */
  update_item_hardware_fastener_insert?: Maybe<ItemHardwareFastenerInsertMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_insert" */
  update_item_hardware_fastener_insert_by_pk?: Maybe<ItemHardwareFastenerInsert>;
  /** update data of the table: "item.hardware_fastener_nut" */
  update_item_hardware_fastener_nut?: Maybe<ItemHardwareFastenerNutMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_nut" */
  update_item_hardware_fastener_nut_by_pk?: Maybe<ItemHardwareFastenerNut>;
  /** update data of the table: "item.hardware_fastener_screw" */
  update_item_hardware_fastener_screw?: Maybe<ItemHardwareFastenerScrewMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_screw" */
  update_item_hardware_fastener_screw_by_pk?: Maybe<ItemHardwareFastenerScrew>;
  /** update data of the table: "item.hardware_fastener_screw_machine" */
  update_item_hardware_fastener_screw_machine?: Maybe<ItemHardwareFastenerScrewMachineMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_screw_machine" */
  update_item_hardware_fastener_screw_machine_by_pk?: Maybe<ItemHardwareFastenerScrewMachine>;
  /** update data of the table: "item.hardware_fastener_standoff" */
  update_item_hardware_fastener_standoff?: Maybe<ItemHardwareFastenerStandoffMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_standoff" */
  update_item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
  /** update data of the table: "item.hardware_fastener_washer" */
  update_item_hardware_fastener_washer?: Maybe<ItemHardwareFastenerWasherMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_washer" */
  update_item_hardware_fastener_washer_by_pk?: Maybe<ItemHardwareFastenerWasher>;
  /** update data of the table: "label" */
  update_label?: Maybe<LabelMutationResponse>;
  /** update single row of the table: "label" */
  update_label_by_pk?: Maybe<Label>;
  /** update data of the table: "label_item_map" */
  update_label_item_map?: Maybe<LabelItemMapMutationResponse>;
  /** update single row of the table: "label_item_map" */
  update_label_item_map_by_pk?: Maybe<LabelItemMap>;
  /** update data of the table: "label_template_map" */
  update_label_template_map?: Maybe<LabelTemplateMapMutationResponse>;
  /** update single row of the table: "label_template_map" */
  update_label_template_map_by_pk?: Maybe<LabelTemplateMap>;
  /** update data of the table: "manufacturer" */
  update_manufacturer?: Maybe<ManufacturerMutationResponse>;
  /** update single row of the table: "manufacturer" */
  update_manufacturer_by_pk?: Maybe<Manufacturer>;
  /** update data of the table: "manufacturer_item" */
  update_manufacturer_item?: Maybe<ManufacturerItemMutationResponse>;
  /** update single row of the table: "manufacturer_item" */
  update_manufacturer_item_by_pk?: Maybe<ManufacturerItem>;
  /** update data of the table: "order" */
  update_order?: Maybe<OrderMutationResponse>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
  /** update data of the table: "order_item" */
  update_order_item?: Maybe<OrderItemMutationResponse>;
  /** update single row of the table: "order_item" */
  update_order_item_by_pk?: Maybe<OrderItem>;
  /** update data of the table: "payment_method" */
  update_payment_method?: Maybe<PaymentMethodMutationResponse>;
  /** update single row of the table: "payment_method" */
  update_payment_method_by_pk?: Maybe<PaymentMethod>;
  /** update data of the table: "property.item_hardware_fastener_bolt_strength" */
  update_property_item_hardware_fastener_bolt_strength?: Maybe<PropertyItemHardwareFastenerBoltStrengthMutationResponse>;
  /** update single row of the table: "property.item_hardware_fastener_bolt_strength" */
  update_property_item_hardware_fastener_bolt_strength_by_pk?: Maybe<PropertyItemHardwareFastenerBoltStrength>;
  /** update data of the table: "property_item_hardware_fastener_screw_machine.diameter" */
  update_property_item_hardware_fastener_screw_machine_diameter?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterMutationResponse>;
  /** update single row of the table: "property_item_hardware_fastener_screw_machine.diameter" */
  update_property_item_hardware_fastener_screw_machine_diameter_by_pk?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameter>;
  /** update data of the table: "search_data" */
  update_search_data?: Maybe<SearchDataMutationResponse>;
  /** update single row of the table: "search_data" */
  update_search_data_by_pk?: Maybe<SearchData>;
  /** update data of the table: "shipment" */
  update_shipment?: Maybe<ShipmentMutationResponse>;
  /** update single row of the table: "shipment" */
  update_shipment_by_pk?: Maybe<Shipment>;
  /** update data of the table: "stock" */
  update_stock?: Maybe<StockMutationResponse>;
  /** update single row of the table: "stock" */
  update_stock_by_pk?: Maybe<Stock>;
  /** update data of the table: "storage" */
  update_storage?: Maybe<StorageMutationResponse>;
  /** update single row of the table: "storage" */
  update_storage_by_pk?: Maybe<Storage>;
  /** update data of the table: "tag" */
  update_tag?: Maybe<TagMutationResponse>;
  /** update single row of the table: "tag" */
  update_tag_by_pk?: Maybe<Tag>;
  /** update data of the table: "vendor" */
  update_vendor?: Maybe<VendorMutationResponse>;
  /** update single row of the table: "vendor" */
  update_vendor_by_pk?: Maybe<Vendor>;
  /** update data of the table: "vendor_item" */
  update_vendor_item?: Maybe<VendorItemMutationResponse>;
  /** update single row of the table: "vendor_item" */
  update_vendor_item_by_pk?: Maybe<VendorItem>;
  uploadFiles: Array<Maybe<File>>;
};


/** mutation root */
export type MutationRootDeleteEnumItemCableConnectorArgs = {
  where: EnumItemCableConnectorBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemCableConnectorByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemClassArgs = {
  where: EnumItemClassBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemClassByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHandednessArgs = {
  where: EnumItemHandednessBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHandednessByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerDriveArgs = {
  where: EnumItemHardwareFastenerDriveBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerDriveByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerMaterialArgs = {
  where: EnumItemHardwareFastenerMaterialBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerNutFormArgs = {
  where: EnumItemHardwareFastenerNutFormBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerNutFormByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerNutStrengthArgs = {
  where: EnumItemHardwareFastenerNutStrengthBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerNutStrengthByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerNutThreadFitArgs = {
  where: EnumItemHardwareFastenerNutThreadFitBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerNutThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewHardnessArgs = {
  where: EnumItemHardwareFastenerScrewHardnessBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewHardnessByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewHeadArgs = {
  where: EnumItemHardwareFastenerScrewHeadBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewHeadByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewMachinePointArgs = {
  where: EnumItemHardwareFastenerScrewMachinePointBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewMachinePointByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewMachineStrengthArgs = {
  where: EnumItemHardwareFastenerScrewMachineStrengthBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewMachineStrengthByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewMachineThreadFitArgs = {
  where: EnumItemHardwareFastenerScrewMachineThreadFitBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerScrewMachineThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerStandoffShapeArgs = {
  where: EnumItemHardwareFastenerStandoffShapeBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerStandoffShapeByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerThreadLabelArgs = {
  where: EnumItemHardwareFastenerThreadLabelBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerThreadLabelByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerThreadStandardArgs = {
  where: EnumItemHardwareFastenerThreadStandardBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerThreadStandardByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerWasherFormArgs = {
  where: EnumItemHardwareFastenerWasherFormBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerWasherFormByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerWasherMechanismArgs = {
  where: EnumItemHardwareFastenerWasherMechanismBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerWasherMechanismByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerWasherPatternArgs = {
  where: EnumItemHardwareFastenerWasherPatternBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFastenerWasherPatternByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFinishArgs = {
  where: EnumItemHardwareFinishBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareFinishByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareUseMaterialArgs = {
  where: EnumItemHardwareUseMaterialBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemHardwareUseMaterialByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitFinishArgs = {
  where: EnumItemToolDrillBitFinishBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitFinishByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitLengthClassArgs = {
  where: EnumItemToolDrillBitLengthClassBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitLengthClassByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitMaterialArgs = {
  where: EnumItemToolDrillBitMaterialBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitMaterialByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitPointArgs = {
  where: EnumItemToolDrillBitPointBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitPointByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitShankArgs = {
  where: EnumItemToolDrillBitShankBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitShankByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitStyleArgs = {
  where: EnumItemToolDrillBitStyleBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumItemToolDrillBitStyleByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumMappedClassArgs = {
  where: EnumMappedClassBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumMappedClassByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumPaymentMethodTypeArgs = {
  where: EnumPaymentMethodTypeBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumPaymentMethodTypeByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumSpaceTypeArgs = {
  where: EnumSpaceTypeBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumSpaceTypeByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumStockEventTypeArgs = {
  where: EnumStockEventTypeBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumStockEventTypeByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumUnitArgs = {
  where: EnumUnitBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumUnitByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteIconArgs = {
  where: IconBoolExp;
};


/** mutation root */
export type MutationRootDeleteIconByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteIconItemClassMapArgs = {
  where: IconItemClassMapBoolExp;
};


/** mutation root */
export type MutationRootDeleteIconItemClassMapByPkArgs = {
  class: EnumItemClassEnum;
  icon_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/** mutation root */
export type MutationRootDeleteIconItemMapArgs = {
  where: IconItemMapBoolExp;
};


/** mutation root */
export type MutationRootDeleteIconItemMapByPkArgs = {
  icon_id: Scalars['uuid'];
  item_id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteIconLabelMapArgs = {
  where: IconLabelMapBoolExp;
};


/** mutation root */
export type MutationRootDeleteIconLabelMapByPkArgs = {
  icon_id: Scalars['uuid'];
  label_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteItemArgs = {
  where: ItemBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemBundleArgs = {
  where: ItemBundleBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemBundleByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemBundleMemberArgs = {
  where: ItemBundleMemberBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemBundleMemberByPkArgs = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemCableConductiveArgs = {
  where: ItemCableConductiveBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemCableConductiveByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareDrillBitArgs = {
  where: ItemHardwareDrillBitBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareDrillBitByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerInsertArgs = {
  where: ItemHardwareFastenerInsertBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerInsertByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerNutArgs = {
  where: ItemHardwareFastenerNutBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerNutByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerScrewArgs = {
  where: ItemHardwareFastenerScrewBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerScrewByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerScrewMachineArgs = {
  where: ItemHardwareFastenerScrewMachineBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerScrewMachineByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerStandoffArgs = {
  where: ItemHardwareFastenerStandoffBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerStandoffByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerWasherArgs = {
  where: ItemHardwareFastenerWasherBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerWasherByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteLabelArgs = {
  where: LabelBoolExp;
};


/** mutation root */
export type MutationRootDeleteLabelByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteLabelItemMapArgs = {
  where: LabelItemMapBoolExp;
};


/** mutation root */
export type MutationRootDeleteLabelItemMapByPkArgs = {
  item_id: Scalars['Int'];
  label_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteLabelTemplateMapArgs = {
  where: LabelTemplateMapBoolExp;
};


/** mutation root */
export type MutationRootDeleteLabelTemplateMapByPkArgs = {
  item_class: EnumItemClassEnum;
  label_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/** mutation root */
export type MutationRootDeleteManufacturerArgs = {
  where: ManufacturerBoolExp;
};


/** mutation root */
export type MutationRootDeleteManufacturerByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteManufacturerItemArgs = {
  where: ManufacturerItemBoolExp;
};


/** mutation root */
export type MutationRootDeleteManufacturerItemByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteOrderArgs = {
  where: OrderBoolExp;
};


/** mutation root */
export type MutationRootDeleteOrderByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteOrderItemArgs = {
  where: OrderItemBoolExp;
};


/** mutation root */
export type MutationRootDeleteOrderItemByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeletePaymentMethodArgs = {
  where: PaymentMethodBoolExp;
};


/** mutation root */
export type MutationRootDeletePaymentMethodByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeletePropertyItemHardwareFastenerBoltStrengthArgs = {
  where: PropertyItemHardwareFastenerBoltStrengthBoolExp;
};


/** mutation root */
export type MutationRootDeletePropertyItemHardwareFastenerBoltStrengthByPkArgs = {
  diameter: Scalars['numeric'];
  strength_grade: Scalars['String'];
  thread_pitch: Scalars['numeric'];
};


/** mutation root */
export type MutationRootDeletePropertyItemHardwareFastenerScrewMachineDiameterArgs = {
  where: PropertyItemHardwareFastenerScrewMachineDiameterBoolExp;
};


/** mutation root */
export type MutationRootDeletePropertyItemHardwareFastenerScrewMachineDiameterByPkArgs = {
  diameter_label: Scalars['String'];
  fit: EnumItemHardwareFastenerScrewMachineThreadFitEnum;
  pitch_label: Scalars['numeric'];
};


/** mutation root */
export type MutationRootDeleteSearchDataArgs = {
  where: SearchDataBoolExp;
};


/** mutation root */
export type MutationRootDeleteSearchDataByPkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type MutationRootDeleteShipmentArgs = {
  where: ShipmentBoolExp;
};


/** mutation root */
export type MutationRootDeleteShipmentByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteStockArgs = {
  where: StockBoolExp;
};


/** mutation root */
export type MutationRootDeleteStockByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteStorageArgs = {
  where: StorageBoolExp;
};


/** mutation root */
export type MutationRootDeleteStorageByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteTagArgs = {
  where: TagBoolExp;
};


/** mutation root */
export type MutationRootDeleteTagByPkArgs = {
  text: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteVendorArgs = {
  where: VendorBoolExp;
};


/** mutation root */
export type MutationRootDeleteVendorByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteVendorItemArgs = {
  where: VendorItemBoolExp;
};


/** mutation root */
export type MutationRootDeleteVendorItemByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertEnumItemCableConnectorArgs = {
  objects: Array<EnumItemCableConnectorInsertInput>;
  on_conflict?: Maybe<EnumItemCableConnectorOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemCableConnectorOneArgs = {
  object: EnumItemCableConnectorInsertInput;
  on_conflict?: Maybe<EnumItemCableConnectorOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemClassArgs = {
  objects: Array<EnumItemClassInsertInput>;
  on_conflict?: Maybe<EnumItemClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemClassOneArgs = {
  object: EnumItemClassInsertInput;
  on_conflict?: Maybe<EnumItemClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHandednessArgs = {
  objects: Array<EnumItemHandednessInsertInput>;
  on_conflict?: Maybe<EnumItemHandednessOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHandednessOneArgs = {
  object: EnumItemHandednessInsertInput;
  on_conflict?: Maybe<EnumItemHandednessOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerDriveArgs = {
  objects: Array<EnumItemHardwareFastenerDriveInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerDriveOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerDriveOneArgs = {
  object: EnumItemHardwareFastenerDriveInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerDriveOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerMaterialArgs = {
  objects: Array<EnumItemHardwareFastenerMaterialInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerMaterialOneArgs = {
  object: EnumItemHardwareFastenerMaterialInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerNutFormArgs = {
  objects: Array<EnumItemHardwareFastenerNutFormInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutFormOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerNutFormOneArgs = {
  object: EnumItemHardwareFastenerNutFormInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutFormOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerNutStrengthArgs = {
  objects: Array<EnumItemHardwareFastenerNutStrengthInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutStrengthOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerNutStrengthOneArgs = {
  object: EnumItemHardwareFastenerNutStrengthInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutStrengthOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerNutThreadFitArgs = {
  objects: Array<EnumItemHardwareFastenerNutThreadFitInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutThreadFitOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerNutThreadFitOneArgs = {
  object: EnumItemHardwareFastenerNutThreadFitInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerNutThreadFitOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewHardnessArgs = {
  objects: Array<EnumItemHardwareFastenerScrewHardnessInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHardnessOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewHardnessOneArgs = {
  object: EnumItemHardwareFastenerScrewHardnessInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHardnessOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewHeadArgs = {
  objects: Array<EnumItemHardwareFastenerScrewHeadInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHeadOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewHeadOneArgs = {
  object: EnumItemHardwareFastenerScrewHeadInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewHeadOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewMachinePointArgs = {
  objects: Array<EnumItemHardwareFastenerScrewMachinePointInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachinePointOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewMachinePointOneArgs = {
  object: EnumItemHardwareFastenerScrewMachinePointInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachinePointOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewMachineStrengthArgs = {
  objects: Array<EnumItemHardwareFastenerScrewMachineStrengthInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewMachineStrengthOneArgs = {
  object: EnumItemHardwareFastenerScrewMachineStrengthInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewMachineThreadFitArgs = {
  objects: Array<EnumItemHardwareFastenerScrewMachineThreadFitInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerScrewMachineThreadFitOneArgs = {
  object: EnumItemHardwareFastenerScrewMachineThreadFitInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerStandoffShapeArgs = {
  objects: Array<EnumItemHardwareFastenerStandoffShapeInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerStandoffShapeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerStandoffShapeOneArgs = {
  object: EnumItemHardwareFastenerStandoffShapeInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerStandoffShapeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerThreadLabelArgs = {
  objects: Array<EnumItemHardwareFastenerThreadLabelInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadLabelOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerThreadLabelOneArgs = {
  object: EnumItemHardwareFastenerThreadLabelInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadLabelOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerThreadStandardArgs = {
  objects: Array<EnumItemHardwareFastenerThreadStandardInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadStandardOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerThreadStandardOneArgs = {
  object: EnumItemHardwareFastenerThreadStandardInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerThreadStandardOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerWasherFormArgs = {
  objects: Array<EnumItemHardwareFastenerWasherFormInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherFormOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerWasherFormOneArgs = {
  object: EnumItemHardwareFastenerWasherFormInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherFormOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerWasherMechanismArgs = {
  objects: Array<EnumItemHardwareFastenerWasherMechanismInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherMechanismOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerWasherMechanismOneArgs = {
  object: EnumItemHardwareFastenerWasherMechanismInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherMechanismOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerWasherPatternArgs = {
  objects: Array<EnumItemHardwareFastenerWasherPatternInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherPatternOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFastenerWasherPatternOneArgs = {
  object: EnumItemHardwareFastenerWasherPatternInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFastenerWasherPatternOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFinishArgs = {
  objects: Array<EnumItemHardwareFinishInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareFinishOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareFinishOneArgs = {
  object: EnumItemHardwareFinishInsertInput;
  on_conflict?: Maybe<EnumItemHardwareFinishOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareUseMaterialArgs = {
  objects: Array<EnumItemHardwareUseMaterialInsertInput>;
  on_conflict?: Maybe<EnumItemHardwareUseMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemHardwareUseMaterialOneArgs = {
  object: EnumItemHardwareUseMaterialInsertInput;
  on_conflict?: Maybe<EnumItemHardwareUseMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitFinishArgs = {
  objects: Array<EnumItemToolDrillBitFinishInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitFinishOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitFinishOneArgs = {
  object: EnumItemToolDrillBitFinishInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitFinishOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitLengthClassArgs = {
  objects: Array<EnumItemToolDrillBitLengthClassInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitLengthClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitLengthClassOneArgs = {
  object: EnumItemToolDrillBitLengthClassInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitLengthClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitMaterialArgs = {
  objects: Array<EnumItemToolDrillBitMaterialInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitMaterialOneArgs = {
  object: EnumItemToolDrillBitMaterialInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitPointArgs = {
  objects: Array<EnumItemToolDrillBitPointInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitPointOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitPointOneArgs = {
  object: EnumItemToolDrillBitPointInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitPointOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitShankArgs = {
  objects: Array<EnumItemToolDrillBitShankInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitShankOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitShankOneArgs = {
  object: EnumItemToolDrillBitShankInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitShankOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitStyleArgs = {
  objects: Array<EnumItemToolDrillBitStyleInsertInput>;
  on_conflict?: Maybe<EnumItemToolDrillBitStyleOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumItemToolDrillBitStyleOneArgs = {
  object: EnumItemToolDrillBitStyleInsertInput;
  on_conflict?: Maybe<EnumItemToolDrillBitStyleOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumMappedClassArgs = {
  objects: Array<EnumMappedClassInsertInput>;
  on_conflict?: Maybe<EnumMappedClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumMappedClassOneArgs = {
  object: EnumMappedClassInsertInput;
  on_conflict?: Maybe<EnumMappedClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumPaymentMethodTypeArgs = {
  objects: Array<EnumPaymentMethodTypeInsertInput>;
  on_conflict?: Maybe<EnumPaymentMethodTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumPaymentMethodTypeOneArgs = {
  object: EnumPaymentMethodTypeInsertInput;
  on_conflict?: Maybe<EnumPaymentMethodTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumSpaceTypeArgs = {
  objects: Array<EnumSpaceTypeInsertInput>;
  on_conflict?: Maybe<EnumSpaceTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumSpaceTypeOneArgs = {
  object: EnumSpaceTypeInsertInput;
  on_conflict?: Maybe<EnumSpaceTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumStockEventTypeArgs = {
  objects: Array<EnumStockEventTypeInsertInput>;
  on_conflict?: Maybe<EnumStockEventTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumStockEventTypeOneArgs = {
  object: EnumStockEventTypeInsertInput;
  on_conflict?: Maybe<EnumStockEventTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumUnitArgs = {
  objects: Array<EnumUnitInsertInput>;
  on_conflict?: Maybe<EnumUnitOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumUnitOneArgs = {
  object: EnumUnitInsertInput;
  on_conflict?: Maybe<EnumUnitOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconArgs = {
  objects: Array<IconInsertInput>;
  on_conflict?: Maybe<IconOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconItemClassMapArgs = {
  objects: Array<IconItemClassMapInsertInput>;
  on_conflict?: Maybe<IconItemClassMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconItemClassMapOneArgs = {
  object: IconItemClassMapInsertInput;
  on_conflict?: Maybe<IconItemClassMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconItemMapArgs = {
  objects: Array<IconItemMapInsertInput>;
  on_conflict?: Maybe<IconItemMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconItemMapOneArgs = {
  object: IconItemMapInsertInput;
  on_conflict?: Maybe<IconItemMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconLabelMapArgs = {
  objects: Array<IconLabelMapInsertInput>;
  on_conflict?: Maybe<IconLabelMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconLabelMapOneArgs = {
  object: IconLabelMapInsertInput;
  on_conflict?: Maybe<IconLabelMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconOneArgs = {
  object: IconInsertInput;
  on_conflict?: Maybe<IconOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemArgs = {
  objects: Array<ItemInsertInput>;
  on_conflict?: Maybe<ItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemBundleArgs = {
  objects: Array<ItemBundleInsertInput>;
  on_conflict?: Maybe<ItemBundleOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemBundleMemberArgs = {
  objects: Array<ItemBundleMemberInsertInput>;
  on_conflict?: Maybe<ItemBundleMemberOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemBundleMemberOneArgs = {
  object: ItemBundleMemberInsertInput;
  on_conflict?: Maybe<ItemBundleMemberOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemBundleOneArgs = {
  object: ItemBundleInsertInput;
  on_conflict?: Maybe<ItemBundleOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemCableConductiveArgs = {
  objects: Array<ItemCableConductiveInsertInput>;
  on_conflict?: Maybe<ItemCableConductiveOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemCableConductiveOneArgs = {
  object: ItemCableConductiveInsertInput;
  on_conflict?: Maybe<ItemCableConductiveOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareDrillBitArgs = {
  objects: Array<ItemHardwareDrillBitInsertInput>;
  on_conflict?: Maybe<ItemHardwareDrillBitOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareDrillBitOneArgs = {
  object: ItemHardwareDrillBitInsertInput;
  on_conflict?: Maybe<ItemHardwareDrillBitOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerInsertArgs = {
  objects: Array<ItemHardwareFastenerInsertInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerInsertOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerInsertOneArgs = {
  object: ItemHardwareFastenerInsertInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerInsertOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerNutArgs = {
  objects: Array<ItemHardwareFastenerNutInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerNutOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerNutOneArgs = {
  object: ItemHardwareFastenerNutInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerNutOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerScrewArgs = {
  objects: Array<ItemHardwareFastenerScrewInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerScrewOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerScrewMachineArgs = {
  objects: Array<ItemHardwareFastenerScrewMachineInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerScrewMachineOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerScrewMachineOneArgs = {
  object: ItemHardwareFastenerScrewMachineInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerScrewMachineOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerScrewOneArgs = {
  object: ItemHardwareFastenerScrewInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerScrewOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerStandoffArgs = {
  objects: Array<ItemHardwareFastenerStandoffInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerStandoffOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerStandoffOneArgs = {
  object: ItemHardwareFastenerStandoffInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerStandoffOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerWasherArgs = {
  objects: Array<ItemHardwareFastenerWasherInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerWasherOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerWasherOneArgs = {
  object: ItemHardwareFastenerWasherInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerWasherOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemOneArgs = {
  object: ItemInsertInput;
  on_conflict?: Maybe<ItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertLabelArgs = {
  objects: Array<LabelInsertInput>;
  on_conflict?: Maybe<LabelOnConflict>;
};


/** mutation root */
export type MutationRootInsertLabelItemMapArgs = {
  objects: Array<LabelItemMapInsertInput>;
  on_conflict?: Maybe<LabelItemMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertLabelItemMapOneArgs = {
  object: LabelItemMapInsertInput;
  on_conflict?: Maybe<LabelItemMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertLabelOneArgs = {
  object: LabelInsertInput;
  on_conflict?: Maybe<LabelOnConflict>;
};


/** mutation root */
export type MutationRootInsertLabelTemplateMapArgs = {
  objects: Array<LabelTemplateMapInsertInput>;
  on_conflict?: Maybe<LabelTemplateMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertLabelTemplateMapOneArgs = {
  object: LabelTemplateMapInsertInput;
  on_conflict?: Maybe<LabelTemplateMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertManufacturerArgs = {
  objects: Array<ManufacturerInsertInput>;
  on_conflict?: Maybe<ManufacturerOnConflict>;
};


/** mutation root */
export type MutationRootInsertManufacturerItemArgs = {
  objects: Array<ManufacturerItemInsertInput>;
  on_conflict?: Maybe<ManufacturerItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertManufacturerItemOneArgs = {
  object: ManufacturerItemInsertInput;
  on_conflict?: Maybe<ManufacturerItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertManufacturerOneArgs = {
  object: ManufacturerInsertInput;
  on_conflict?: Maybe<ManufacturerOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderArgs = {
  objects: Array<OrderInsertInput>;
  on_conflict?: Maybe<OrderOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderItemArgs = {
  objects: Array<OrderItemInsertInput>;
  on_conflict?: Maybe<OrderItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderItemOneArgs = {
  object: OrderItemInsertInput;
  on_conflict?: Maybe<OrderItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderOneArgs = {
  object: OrderInsertInput;
  on_conflict?: Maybe<OrderOnConflict>;
};


/** mutation root */
export type MutationRootInsertPaymentMethodArgs = {
  objects: Array<PaymentMethodInsertInput>;
  on_conflict?: Maybe<PaymentMethodOnConflict>;
};


/** mutation root */
export type MutationRootInsertPaymentMethodOneArgs = {
  object: PaymentMethodInsertInput;
  on_conflict?: Maybe<PaymentMethodOnConflict>;
};


/** mutation root */
export type MutationRootInsertPropertyItemHardwareFastenerBoltStrengthArgs = {
  objects: Array<PropertyItemHardwareFastenerBoltStrengthInsertInput>;
  on_conflict?: Maybe<PropertyItemHardwareFastenerBoltStrengthOnConflict>;
};


/** mutation root */
export type MutationRootInsertPropertyItemHardwareFastenerBoltStrengthOneArgs = {
  object: PropertyItemHardwareFastenerBoltStrengthInsertInput;
  on_conflict?: Maybe<PropertyItemHardwareFastenerBoltStrengthOnConflict>;
};


/** mutation root */
export type MutationRootInsertPropertyItemHardwareFastenerScrewMachineDiameterArgs = {
  objects: Array<PropertyItemHardwareFastenerScrewMachineDiameterInsertInput>;
  on_conflict?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterOnConflict>;
};


/** mutation root */
export type MutationRootInsertPropertyItemHardwareFastenerScrewMachineDiameterOneArgs = {
  object: PropertyItemHardwareFastenerScrewMachineDiameterInsertInput;
  on_conflict?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterOnConflict>;
};


/** mutation root */
export type MutationRootInsertSearchDataArgs = {
  objects: Array<SearchDataInsertInput>;
  on_conflict?: Maybe<SearchDataOnConflict>;
};


/** mutation root */
export type MutationRootInsertSearchDataOneArgs = {
  object: SearchDataInsertInput;
  on_conflict?: Maybe<SearchDataOnConflict>;
};


/** mutation root */
export type MutationRootInsertShipmentArgs = {
  objects: Array<ShipmentInsertInput>;
  on_conflict?: Maybe<ShipmentOnConflict>;
};


/** mutation root */
export type MutationRootInsertShipmentOneArgs = {
  object: ShipmentInsertInput;
  on_conflict?: Maybe<ShipmentOnConflict>;
};


/** mutation root */
export type MutationRootInsertStockArgs = {
  objects: Array<StockInsertInput>;
  on_conflict?: Maybe<StockOnConflict>;
};


/** mutation root */
export type MutationRootInsertStockOneArgs = {
  object: StockInsertInput;
  on_conflict?: Maybe<StockOnConflict>;
};


/** mutation root */
export type MutationRootInsertStorageArgs = {
  objects: Array<StorageInsertInput>;
  on_conflict?: Maybe<StorageOnConflict>;
};


/** mutation root */
export type MutationRootInsertStorageOneArgs = {
  object: StorageInsertInput;
  on_conflict?: Maybe<StorageOnConflict>;
};


/** mutation root */
export type MutationRootInsertTagArgs = {
  objects: Array<TagInsertInput>;
  on_conflict?: Maybe<TagOnConflict>;
};


/** mutation root */
export type MutationRootInsertTagOneArgs = {
  object: TagInsertInput;
  on_conflict?: Maybe<TagOnConflict>;
};


/** mutation root */
export type MutationRootInsertVendorArgs = {
  objects: Array<VendorInsertInput>;
  on_conflict?: Maybe<VendorOnConflict>;
};


/** mutation root */
export type MutationRootInsertVendorItemArgs = {
  objects: Array<VendorItemInsertInput>;
  on_conflict?: Maybe<VendorItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertVendorItemOneArgs = {
  object: VendorItemInsertInput;
  on_conflict?: Maybe<VendorItemOnConflict>;
};


/** mutation root */
export type MutationRootInsertVendorOneArgs = {
  object: VendorInsertInput;
  on_conflict?: Maybe<VendorOnConflict>;
};


/** mutation root */
export type MutationRootPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>;
};


/** mutation root */
export type MutationRootUpdateEnumItemCableConnectorArgs = {
  _set?: Maybe<EnumItemCableConnectorSetInput>;
  where: EnumItemCableConnectorBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemCableConnectorByPkArgs = {
  _set?: Maybe<EnumItemCableConnectorSetInput>;
  pk_columns: EnumItemCableConnectorPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemClassArgs = {
  _set?: Maybe<EnumItemClassSetInput>;
  where: EnumItemClassBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemClassByPkArgs = {
  _set?: Maybe<EnumItemClassSetInput>;
  pk_columns: EnumItemClassPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHandednessArgs = {
  _set?: Maybe<EnumItemHandednessSetInput>;
  where: EnumItemHandednessBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHandednessByPkArgs = {
  _set?: Maybe<EnumItemHandednessSetInput>;
  pk_columns: EnumItemHandednessPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerDriveArgs = {
  _set?: Maybe<EnumItemHardwareFastenerDriveSetInput>;
  where: EnumItemHardwareFastenerDriveBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerDriveByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerDriveSetInput>;
  pk_columns: EnumItemHardwareFastenerDrivePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerMaterialArgs = {
  _set?: Maybe<EnumItemHardwareFastenerMaterialSetInput>;
  where: EnumItemHardwareFastenerMaterialBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerMaterialByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerMaterialSetInput>;
  pk_columns: EnumItemHardwareFastenerMaterialPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerNutFormArgs = {
  _set?: Maybe<EnumItemHardwareFastenerNutFormSetInput>;
  where: EnumItemHardwareFastenerNutFormBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerNutFormByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerNutFormSetInput>;
  pk_columns: EnumItemHardwareFastenerNutFormPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerNutStrengthArgs = {
  _set?: Maybe<EnumItemHardwareFastenerNutStrengthSetInput>;
  where: EnumItemHardwareFastenerNutStrengthBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerNutStrengthByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerNutStrengthSetInput>;
  pk_columns: EnumItemHardwareFastenerNutStrengthPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerNutThreadFitArgs = {
  _set?: Maybe<EnumItemHardwareFastenerNutThreadFitSetInput>;
  where: EnumItemHardwareFastenerNutThreadFitBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerNutThreadFitByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerNutThreadFitSetInput>;
  pk_columns: EnumItemHardwareFastenerNutThreadFitPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewHardnessArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewHardnessSetInput>;
  where: EnumItemHardwareFastenerScrewHardnessBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewHardnessByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewHardnessSetInput>;
  pk_columns: EnumItemHardwareFastenerScrewHardnessPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewHeadArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewHeadSetInput>;
  where: EnumItemHardwareFastenerScrewHeadBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewHeadByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewHeadSetInput>;
  pk_columns: EnumItemHardwareFastenerScrewHeadPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewMachinePointArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewMachinePointSetInput>;
  where: EnumItemHardwareFastenerScrewMachinePointBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewMachinePointByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewMachinePointSetInput>;
  pk_columns: EnumItemHardwareFastenerScrewMachinePointPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewMachineStrengthArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthSetInput>;
  where: EnumItemHardwareFastenerScrewMachineStrengthBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewMachineStrengthByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthSetInput>;
  pk_columns: EnumItemHardwareFastenerScrewMachineStrengthPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewMachineThreadFitArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitSetInput>;
  where: EnumItemHardwareFastenerScrewMachineThreadFitBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerScrewMachineThreadFitByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitSetInput>;
  pk_columns: EnumItemHardwareFastenerScrewMachineThreadFitPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerStandoffShapeArgs = {
  _set?: Maybe<EnumItemHardwareFastenerStandoffShapeSetInput>;
  where: EnumItemHardwareFastenerStandoffShapeBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerStandoffShapeByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerStandoffShapeSetInput>;
  pk_columns: EnumItemHardwareFastenerStandoffShapePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerThreadLabelArgs = {
  _set?: Maybe<EnumItemHardwareFastenerThreadLabelSetInput>;
  where: EnumItemHardwareFastenerThreadLabelBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerThreadLabelByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerThreadLabelSetInput>;
  pk_columns: EnumItemHardwareFastenerThreadLabelPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerThreadStandardArgs = {
  _set?: Maybe<EnumItemHardwareFastenerThreadStandardSetInput>;
  where: EnumItemHardwareFastenerThreadStandardBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerThreadStandardByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerThreadStandardSetInput>;
  pk_columns: EnumItemHardwareFastenerThreadStandardPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerWasherFormArgs = {
  _set?: Maybe<EnumItemHardwareFastenerWasherFormSetInput>;
  where: EnumItemHardwareFastenerWasherFormBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerWasherFormByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerWasherFormSetInput>;
  pk_columns: EnumItemHardwareFastenerWasherFormPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerWasherMechanismArgs = {
  _set?: Maybe<EnumItemHardwareFastenerWasherMechanismSetInput>;
  where: EnumItemHardwareFastenerWasherMechanismBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerWasherMechanismByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerWasherMechanismSetInput>;
  pk_columns: EnumItemHardwareFastenerWasherMechanismPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerWasherPatternArgs = {
  _set?: Maybe<EnumItemHardwareFastenerWasherPatternSetInput>;
  where: EnumItemHardwareFastenerWasherPatternBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFastenerWasherPatternByPkArgs = {
  _set?: Maybe<EnumItemHardwareFastenerWasherPatternSetInput>;
  pk_columns: EnumItemHardwareFastenerWasherPatternPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFinishArgs = {
  _set?: Maybe<EnumItemHardwareFinishSetInput>;
  where: EnumItemHardwareFinishBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareFinishByPkArgs = {
  _set?: Maybe<EnumItemHardwareFinishSetInput>;
  pk_columns: EnumItemHardwareFinishPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareUseMaterialArgs = {
  _set?: Maybe<EnumItemHardwareUseMaterialSetInput>;
  where: EnumItemHardwareUseMaterialBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemHardwareUseMaterialByPkArgs = {
  _set?: Maybe<EnumItemHardwareUseMaterialSetInput>;
  pk_columns: EnumItemHardwareUseMaterialPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitFinishArgs = {
  _set?: Maybe<EnumItemToolDrillBitFinishSetInput>;
  where: EnumItemToolDrillBitFinishBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitFinishByPkArgs = {
  _set?: Maybe<EnumItemToolDrillBitFinishSetInput>;
  pk_columns: EnumItemToolDrillBitFinishPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitLengthClassArgs = {
  _set?: Maybe<EnumItemToolDrillBitLengthClassSetInput>;
  where: EnumItemToolDrillBitLengthClassBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitLengthClassByPkArgs = {
  _set?: Maybe<EnumItemToolDrillBitLengthClassSetInput>;
  pk_columns: EnumItemToolDrillBitLengthClassPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitMaterialArgs = {
  _set?: Maybe<EnumItemToolDrillBitMaterialSetInput>;
  where: EnumItemToolDrillBitMaterialBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitMaterialByPkArgs = {
  _set?: Maybe<EnumItemToolDrillBitMaterialSetInput>;
  pk_columns: EnumItemToolDrillBitMaterialPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitPointArgs = {
  _set?: Maybe<EnumItemToolDrillBitPointSetInput>;
  where: EnumItemToolDrillBitPointBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitPointByPkArgs = {
  _set?: Maybe<EnumItemToolDrillBitPointSetInput>;
  pk_columns: EnumItemToolDrillBitPointPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitShankArgs = {
  _set?: Maybe<EnumItemToolDrillBitShankSetInput>;
  where: EnumItemToolDrillBitShankBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitShankByPkArgs = {
  _set?: Maybe<EnumItemToolDrillBitShankSetInput>;
  pk_columns: EnumItemToolDrillBitShankPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitStyleArgs = {
  _set?: Maybe<EnumItemToolDrillBitStyleSetInput>;
  where: EnumItemToolDrillBitStyleBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumItemToolDrillBitStyleByPkArgs = {
  _set?: Maybe<EnumItemToolDrillBitStyleSetInput>;
  pk_columns: EnumItemToolDrillBitStylePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumMappedClassArgs = {
  _set?: Maybe<EnumMappedClassSetInput>;
  where: EnumMappedClassBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumMappedClassByPkArgs = {
  _set?: Maybe<EnumMappedClassSetInput>;
  pk_columns: EnumMappedClassPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumPaymentMethodTypeArgs = {
  _set?: Maybe<EnumPaymentMethodTypeSetInput>;
  where: EnumPaymentMethodTypeBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumPaymentMethodTypeByPkArgs = {
  _set?: Maybe<EnumPaymentMethodTypeSetInput>;
  pk_columns: EnumPaymentMethodTypePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumSpaceTypeArgs = {
  _set?: Maybe<EnumSpaceTypeSetInput>;
  where: EnumSpaceTypeBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumSpaceTypeByPkArgs = {
  _set?: Maybe<EnumSpaceTypeSetInput>;
  pk_columns: EnumSpaceTypePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumStockEventTypeArgs = {
  _set?: Maybe<EnumStockEventTypeSetInput>;
  where: EnumStockEventTypeBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumStockEventTypeByPkArgs = {
  _set?: Maybe<EnumStockEventTypeSetInput>;
  pk_columns: EnumStockEventTypePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumUnitArgs = {
  _set?: Maybe<EnumUnitSetInput>;
  where: EnumUnitBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumUnitByPkArgs = {
  _set?: Maybe<EnumUnitSetInput>;
  pk_columns: EnumUnitPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateIconArgs = {
  _set?: Maybe<IconSetInput>;
  where: IconBoolExp;
};


/** mutation root */
export type MutationRootUpdateIconByPkArgs = {
  _set?: Maybe<IconSetInput>;
  pk_columns: IconPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateIconItemClassMapArgs = {
  _append?: Maybe<IconItemClassMapAppendInput>;
  _delete_at_path?: Maybe<IconItemClassMapDeleteAtPathInput>;
  _delete_elem?: Maybe<IconItemClassMapDeleteElemInput>;
  _delete_key?: Maybe<IconItemClassMapDeleteKeyInput>;
  _inc?: Maybe<IconItemClassMapIncInput>;
  _prepend?: Maybe<IconItemClassMapPrependInput>;
  _set?: Maybe<IconItemClassMapSetInput>;
  where: IconItemClassMapBoolExp;
};


/** mutation root */
export type MutationRootUpdateIconItemClassMapByPkArgs = {
  _append?: Maybe<IconItemClassMapAppendInput>;
  _delete_at_path?: Maybe<IconItemClassMapDeleteAtPathInput>;
  _delete_elem?: Maybe<IconItemClassMapDeleteElemInput>;
  _delete_key?: Maybe<IconItemClassMapDeleteKeyInput>;
  _inc?: Maybe<IconItemClassMapIncInput>;
  _prepend?: Maybe<IconItemClassMapPrependInput>;
  _set?: Maybe<IconItemClassMapSetInput>;
  pk_columns: IconItemClassMapPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateIconItemMapArgs = {
  _inc?: Maybe<IconItemMapIncInput>;
  _set?: Maybe<IconItemMapSetInput>;
  where: IconItemMapBoolExp;
};


/** mutation root */
export type MutationRootUpdateIconItemMapByPkArgs = {
  _inc?: Maybe<IconItemMapIncInput>;
  _set?: Maybe<IconItemMapSetInput>;
  pk_columns: IconItemMapPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateIconLabelMapArgs = {
  _set?: Maybe<IconLabelMapSetInput>;
  where: IconLabelMapBoolExp;
};


/** mutation root */
export type MutationRootUpdateIconLabelMapByPkArgs = {
  _set?: Maybe<IconLabelMapSetInput>;
  pk_columns: IconLabelMapPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemArgs = {
  _append?: Maybe<ItemAppendInput>;
  _delete_at_path?: Maybe<ItemDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemDeleteElemInput>;
  _delete_key?: Maybe<ItemDeleteKeyInput>;
  _inc?: Maybe<ItemIncInput>;
  _prepend?: Maybe<ItemPrependInput>;
  _set?: Maybe<ItemSetInput>;
  where: ItemBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemBundleArgs = {
  _inc?: Maybe<ItemBundleIncInput>;
  _set?: Maybe<ItemBundleSetInput>;
  where: ItemBundleBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemBundleByPkArgs = {
  _inc?: Maybe<ItemBundleIncInput>;
  _set?: Maybe<ItemBundleSetInput>;
  pk_columns: ItemBundlePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemBundleMemberArgs = {
  _inc?: Maybe<ItemBundleMemberIncInput>;
  _set?: Maybe<ItemBundleMemberSetInput>;
  where: ItemBundleMemberBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemBundleMemberByPkArgs = {
  _inc?: Maybe<ItemBundleMemberIncInput>;
  _set?: Maybe<ItemBundleMemberSetInput>;
  pk_columns: ItemBundleMemberPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemByPkArgs = {
  _append?: Maybe<ItemAppendInput>;
  _delete_at_path?: Maybe<ItemDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemDeleteElemInput>;
  _delete_key?: Maybe<ItemDeleteKeyInput>;
  _inc?: Maybe<ItemIncInput>;
  _prepend?: Maybe<ItemPrependInput>;
  _set?: Maybe<ItemSetInput>;
  pk_columns: ItemPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemCableConductiveArgs = {
  _append?: Maybe<ItemCableConductiveAppendInput>;
  _delete_at_path?: Maybe<ItemCableConductiveDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemCableConductiveDeleteElemInput>;
  _delete_key?: Maybe<ItemCableConductiveDeleteKeyInput>;
  _inc?: Maybe<ItemCableConductiveIncInput>;
  _prepend?: Maybe<ItemCableConductivePrependInput>;
  _set?: Maybe<ItemCableConductiveSetInput>;
  where: ItemCableConductiveBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemCableConductiveByPkArgs = {
  _append?: Maybe<ItemCableConductiveAppendInput>;
  _delete_at_path?: Maybe<ItemCableConductiveDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemCableConductiveDeleteElemInput>;
  _delete_key?: Maybe<ItemCableConductiveDeleteKeyInput>;
  _inc?: Maybe<ItemCableConductiveIncInput>;
  _prepend?: Maybe<ItemCableConductivePrependInput>;
  _set?: Maybe<ItemCableConductiveSetInput>;
  pk_columns: ItemCableConductivePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemHardwareDrillBitArgs = {
  _append?: Maybe<ItemHardwareDrillBitAppendInput>;
  _delete_at_path?: Maybe<ItemHardwareDrillBitDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemHardwareDrillBitDeleteElemInput>;
  _delete_key?: Maybe<ItemHardwareDrillBitDeleteKeyInput>;
  _inc?: Maybe<ItemHardwareDrillBitIncInput>;
  _prepend?: Maybe<ItemHardwareDrillBitPrependInput>;
  _set?: Maybe<ItemHardwareDrillBitSetInput>;
  where: ItemHardwareDrillBitBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareDrillBitByPkArgs = {
  _append?: Maybe<ItemHardwareDrillBitAppendInput>;
  _delete_at_path?: Maybe<ItemHardwareDrillBitDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemHardwareDrillBitDeleteElemInput>;
  _delete_key?: Maybe<ItemHardwareDrillBitDeleteKeyInput>;
  _inc?: Maybe<ItemHardwareDrillBitIncInput>;
  _prepend?: Maybe<ItemHardwareDrillBitPrependInput>;
  _set?: Maybe<ItemHardwareDrillBitSetInput>;
  pk_columns: ItemHardwareDrillBitPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerInsertArgs = {
  _inc?: Maybe<ItemHardwareFastenerInsertIncInput>;
  _set?: Maybe<ItemHardwareFastenerInsertSetInput>;
  where: ItemHardwareFastenerInsertBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerInsertByPkArgs = {
  _inc?: Maybe<ItemHardwareFastenerInsertIncInput>;
  _set?: Maybe<ItemHardwareFastenerInsertSetInput>;
  pk_columns: ItemHardwareFastenerInsertPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerNutArgs = {
  _inc?: Maybe<ItemHardwareFastenerNutIncInput>;
  _set?: Maybe<ItemHardwareFastenerNutSetInput>;
  where: ItemHardwareFastenerNutBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerNutByPkArgs = {
  _inc?: Maybe<ItemHardwareFastenerNutIncInput>;
  _set?: Maybe<ItemHardwareFastenerNutSetInput>;
  pk_columns: ItemHardwareFastenerNutPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerScrewArgs = {
  _inc?: Maybe<ItemHardwareFastenerScrewIncInput>;
  _set?: Maybe<ItemHardwareFastenerScrewSetInput>;
  where: ItemHardwareFastenerScrewBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerScrewByPkArgs = {
  _inc?: Maybe<ItemHardwareFastenerScrewIncInput>;
  _set?: Maybe<ItemHardwareFastenerScrewSetInput>;
  pk_columns: ItemHardwareFastenerScrewPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerScrewMachineArgs = {
  _append?: Maybe<ItemHardwareFastenerScrewMachineAppendInput>;
  _delete_at_path?: Maybe<ItemHardwareFastenerScrewMachineDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemHardwareFastenerScrewMachineDeleteElemInput>;
  _delete_key?: Maybe<ItemHardwareFastenerScrewMachineDeleteKeyInput>;
  _inc?: Maybe<ItemHardwareFastenerScrewMachineIncInput>;
  _prepend?: Maybe<ItemHardwareFastenerScrewMachinePrependInput>;
  _set?: Maybe<ItemHardwareFastenerScrewMachineSetInput>;
  where: ItemHardwareFastenerScrewMachineBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerScrewMachineByPkArgs = {
  _append?: Maybe<ItemHardwareFastenerScrewMachineAppendInput>;
  _delete_at_path?: Maybe<ItemHardwareFastenerScrewMachineDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemHardwareFastenerScrewMachineDeleteElemInput>;
  _delete_key?: Maybe<ItemHardwareFastenerScrewMachineDeleteKeyInput>;
  _inc?: Maybe<ItemHardwareFastenerScrewMachineIncInput>;
  _prepend?: Maybe<ItemHardwareFastenerScrewMachinePrependInput>;
  _set?: Maybe<ItemHardwareFastenerScrewMachineSetInput>;
  pk_columns: ItemHardwareFastenerScrewMachinePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerStandoffArgs = {
  _inc?: Maybe<ItemHardwareFastenerStandoffIncInput>;
  _set?: Maybe<ItemHardwareFastenerStandoffSetInput>;
  where: ItemHardwareFastenerStandoffBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerStandoffByPkArgs = {
  _inc?: Maybe<ItemHardwareFastenerStandoffIncInput>;
  _set?: Maybe<ItemHardwareFastenerStandoffSetInput>;
  pk_columns: ItemHardwareFastenerStandoffPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerWasherArgs = {
  _inc?: Maybe<ItemHardwareFastenerWasherIncInput>;
  _set?: Maybe<ItemHardwareFastenerWasherSetInput>;
  where: ItemHardwareFastenerWasherBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerWasherByPkArgs = {
  _inc?: Maybe<ItemHardwareFastenerWasherIncInput>;
  _set?: Maybe<ItemHardwareFastenerWasherSetInput>;
  pk_columns: ItemHardwareFastenerWasherPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateLabelArgs = {
  _append?: Maybe<LabelAppendInput>;
  _delete_at_path?: Maybe<LabelDeleteAtPathInput>;
  _delete_elem?: Maybe<LabelDeleteElemInput>;
  _delete_key?: Maybe<LabelDeleteKeyInput>;
  _inc?: Maybe<LabelIncInput>;
  _prepend?: Maybe<LabelPrependInput>;
  _set?: Maybe<LabelSetInput>;
  where: LabelBoolExp;
};


/** mutation root */
export type MutationRootUpdateLabelByPkArgs = {
  _append?: Maybe<LabelAppendInput>;
  _delete_at_path?: Maybe<LabelDeleteAtPathInput>;
  _delete_elem?: Maybe<LabelDeleteElemInput>;
  _delete_key?: Maybe<LabelDeleteKeyInput>;
  _inc?: Maybe<LabelIncInput>;
  _prepend?: Maybe<LabelPrependInput>;
  _set?: Maybe<LabelSetInput>;
  pk_columns: LabelPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateLabelItemMapArgs = {
  _inc?: Maybe<LabelItemMapIncInput>;
  _set?: Maybe<LabelItemMapSetInput>;
  where: LabelItemMapBoolExp;
};


/** mutation root */
export type MutationRootUpdateLabelItemMapByPkArgs = {
  _inc?: Maybe<LabelItemMapIncInput>;
  _set?: Maybe<LabelItemMapSetInput>;
  pk_columns: LabelItemMapPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateLabelTemplateMapArgs = {
  _append?: Maybe<LabelTemplateMapAppendInput>;
  _delete_at_path?: Maybe<LabelTemplateMapDeleteAtPathInput>;
  _delete_elem?: Maybe<LabelTemplateMapDeleteElemInput>;
  _delete_key?: Maybe<LabelTemplateMapDeleteKeyInput>;
  _inc?: Maybe<LabelTemplateMapIncInput>;
  _prepend?: Maybe<LabelTemplateMapPrependInput>;
  _set?: Maybe<LabelTemplateMapSetInput>;
  where: LabelTemplateMapBoolExp;
};


/** mutation root */
export type MutationRootUpdateLabelTemplateMapByPkArgs = {
  _append?: Maybe<LabelTemplateMapAppendInput>;
  _delete_at_path?: Maybe<LabelTemplateMapDeleteAtPathInput>;
  _delete_elem?: Maybe<LabelTemplateMapDeleteElemInput>;
  _delete_key?: Maybe<LabelTemplateMapDeleteKeyInput>;
  _inc?: Maybe<LabelTemplateMapIncInput>;
  _prepend?: Maybe<LabelTemplateMapPrependInput>;
  _set?: Maybe<LabelTemplateMapSetInput>;
  pk_columns: LabelTemplateMapPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateManufacturerArgs = {
  _inc?: Maybe<ManufacturerIncInput>;
  _set?: Maybe<ManufacturerSetInput>;
  where: ManufacturerBoolExp;
};


/** mutation root */
export type MutationRootUpdateManufacturerByPkArgs = {
  _inc?: Maybe<ManufacturerIncInput>;
  _set?: Maybe<ManufacturerSetInput>;
  pk_columns: ManufacturerPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateManufacturerItemArgs = {
  _inc?: Maybe<ManufacturerItemIncInput>;
  _set?: Maybe<ManufacturerItemSetInput>;
  where: ManufacturerItemBoolExp;
};


/** mutation root */
export type MutationRootUpdateManufacturerItemByPkArgs = {
  _inc?: Maybe<ManufacturerItemIncInput>;
  _set?: Maybe<ManufacturerItemSetInput>;
  pk_columns: ManufacturerItemPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOrderArgs = {
  _inc?: Maybe<OrderIncInput>;
  _set?: Maybe<OrderSetInput>;
  where: OrderBoolExp;
};


/** mutation root */
export type MutationRootUpdateOrderByPkArgs = {
  _inc?: Maybe<OrderIncInput>;
  _set?: Maybe<OrderSetInput>;
  pk_columns: OrderPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOrderItemArgs = {
  _inc?: Maybe<OrderItemIncInput>;
  _set?: Maybe<OrderItemSetInput>;
  where: OrderItemBoolExp;
};


/** mutation root */
export type MutationRootUpdateOrderItemByPkArgs = {
  _inc?: Maybe<OrderItemIncInput>;
  _set?: Maybe<OrderItemSetInput>;
  pk_columns: OrderItemPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePaymentMethodArgs = {
  _inc?: Maybe<PaymentMethodIncInput>;
  _set?: Maybe<PaymentMethodSetInput>;
  where: PaymentMethodBoolExp;
};


/** mutation root */
export type MutationRootUpdatePaymentMethodByPkArgs = {
  _inc?: Maybe<PaymentMethodIncInput>;
  _set?: Maybe<PaymentMethodSetInput>;
  pk_columns: PaymentMethodPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePropertyItemHardwareFastenerBoltStrengthArgs = {
  _inc?: Maybe<PropertyItemHardwareFastenerBoltStrengthIncInput>;
  _set?: Maybe<PropertyItemHardwareFastenerBoltStrengthSetInput>;
  where: PropertyItemHardwareFastenerBoltStrengthBoolExp;
};


/** mutation root */
export type MutationRootUpdatePropertyItemHardwareFastenerBoltStrengthByPkArgs = {
  _inc?: Maybe<PropertyItemHardwareFastenerBoltStrengthIncInput>;
  _set?: Maybe<PropertyItemHardwareFastenerBoltStrengthSetInput>;
  pk_columns: PropertyItemHardwareFastenerBoltStrengthPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePropertyItemHardwareFastenerScrewMachineDiameterArgs = {
  _inc?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterIncInput>;
  _set?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterSetInput>;
  where: PropertyItemHardwareFastenerScrewMachineDiameterBoolExp;
};


/** mutation root */
export type MutationRootUpdatePropertyItemHardwareFastenerScrewMachineDiameterByPkArgs = {
  _inc?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterIncInput>;
  _set?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterSetInput>;
  pk_columns: PropertyItemHardwareFastenerScrewMachineDiameterPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateSearchDataArgs = {
  _append?: Maybe<SearchDataAppendInput>;
  _delete_at_path?: Maybe<SearchDataDeleteAtPathInput>;
  _delete_elem?: Maybe<SearchDataDeleteElemInput>;
  _delete_key?: Maybe<SearchDataDeleteKeyInput>;
  _inc?: Maybe<SearchDataIncInput>;
  _prepend?: Maybe<SearchDataPrependInput>;
  _set?: Maybe<SearchDataSetInput>;
  where: SearchDataBoolExp;
};


/** mutation root */
export type MutationRootUpdateSearchDataByPkArgs = {
  _append?: Maybe<SearchDataAppendInput>;
  _delete_at_path?: Maybe<SearchDataDeleteAtPathInput>;
  _delete_elem?: Maybe<SearchDataDeleteElemInput>;
  _delete_key?: Maybe<SearchDataDeleteKeyInput>;
  _inc?: Maybe<SearchDataIncInput>;
  _prepend?: Maybe<SearchDataPrependInput>;
  _set?: Maybe<SearchDataSetInput>;
  pk_columns: SearchDataPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateShipmentArgs = {
  _inc?: Maybe<ShipmentIncInput>;
  _set?: Maybe<ShipmentSetInput>;
  where: ShipmentBoolExp;
};


/** mutation root */
export type MutationRootUpdateShipmentByPkArgs = {
  _inc?: Maybe<ShipmentIncInput>;
  _set?: Maybe<ShipmentSetInput>;
  pk_columns: ShipmentPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateStockArgs = {
  _inc?: Maybe<StockIncInput>;
  _set?: Maybe<StockSetInput>;
  where: StockBoolExp;
};


/** mutation root */
export type MutationRootUpdateStockByPkArgs = {
  _inc?: Maybe<StockIncInput>;
  _set?: Maybe<StockSetInput>;
  pk_columns: StockPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateStorageArgs = {
  _inc?: Maybe<StorageIncInput>;
  _set?: Maybe<StorageSetInput>;
  where: StorageBoolExp;
};


/** mutation root */
export type MutationRootUpdateStorageByPkArgs = {
  _inc?: Maybe<StorageIncInput>;
  _set?: Maybe<StorageSetInput>;
  pk_columns: StoragePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTagArgs = {
  _inc?: Maybe<TagIncInput>;
  _set?: Maybe<TagSetInput>;
  where: TagBoolExp;
};


/** mutation root */
export type MutationRootUpdateTagByPkArgs = {
  _inc?: Maybe<TagIncInput>;
  _set?: Maybe<TagSetInput>;
  pk_columns: TagPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateVendorArgs = {
  _inc?: Maybe<VendorIncInput>;
  _set?: Maybe<VendorSetInput>;
  where: VendorBoolExp;
};


/** mutation root */
export type MutationRootUpdateVendorByPkArgs = {
  _inc?: Maybe<VendorIncInput>;
  _set?: Maybe<VendorSetInput>;
  pk_columns: VendorPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateVendorItemArgs = {
  _inc?: Maybe<VendorItemIncInput>;
  _set?: Maybe<VendorItemSetInput>;
  where: VendorItemBoolExp;
};


/** mutation root */
export type MutationRootUpdateVendorItemByPkArgs = {
  _inc?: Maybe<VendorItemIncInput>;
  _set?: Maybe<VendorItemSetInput>;
  pk_columns: VendorItemPkColumnsInput;
};


/** mutation root */
export type MutationRootUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  fulfilled_date?: Maybe<Scalars['date']>;
  id: Scalars['Int'];
  items_cost?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  order_items: Array<OrderItem>;
  /** An aggregated array relationship */
  order_items_aggregate: OrderItemAggregate;
  /** An object relationship */
  payment_method?: Maybe<PaymentMethod>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date: Scalars['date'];
  pon?: Maybe<Scalars['String']>;
  /** An array relationship */
  shipments: Array<Shipment>;
  /** An aggregated array relationship */
  shipments_aggregate: ShipmentAggregate;
  tax_cost?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  vendor: Vendor;
  vendor_id: Scalars['Int'];
  vendor_order_id: Scalars['String'];
};


/** columns and relationships of "order" */
export type OrderOrderItemsArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** columns and relationships of "order" */
export type OrderOrderItemsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** columns and relationships of "order" */
export type OrderShipmentsArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShipmentOrderBy>>;
  where?: Maybe<ShipmentBoolExp>;
};


/** columns and relationships of "order" */
export type OrderShipmentsAggregateArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShipmentOrderBy>>;
  where?: Maybe<ShipmentBoolExp>;
};

/** aggregated selection of "order" */
export type OrderAggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<OrderAggregateFields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type OrderAggregateFields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<OrderAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<OrderMaxFields>;
  min?: Maybe<OrderMinFields>;
  stddev?: Maybe<OrderStddevFields>;
  stddev_pop?: Maybe<OrderStddevPopFields>;
  stddev_samp?: Maybe<OrderStddevSampFields>;
  sum?: Maybe<OrderSumFields>;
  var_pop?: Maybe<OrderVarPopFields>;
  var_samp?: Maybe<OrderVarSampFields>;
  variance?: Maybe<OrderVarianceFields>;
};


/** aggregate fields of "order" */
export type OrderAggregateFieldsCountArgs = {
  columns?: Maybe<Array<OrderSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type OrderAggregateOrderBy = {
  avg?: Maybe<OrderAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<OrderMaxOrderBy>;
  min?: Maybe<OrderMinOrderBy>;
  stddev?: Maybe<OrderStddevOrderBy>;
  stddev_pop?: Maybe<OrderStddevPopOrderBy>;
  stddev_samp?: Maybe<OrderStddevSampOrderBy>;
  sum?: Maybe<OrderSumOrderBy>;
  var_pop?: Maybe<OrderVarPopOrderBy>;
  var_samp?: Maybe<OrderVarSampOrderBy>;
  variance?: Maybe<OrderVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "order" */
export type OrderArrRelInsertInput = {
  data: Array<OrderInsertInput>;
  on_conflict?: Maybe<OrderOnConflict>;
};

/** aggregate avg on columns */
export type OrderAvgFields = {
  __typename?: 'order_avg_fields';
  id?: Maybe<Scalars['Float']>;
  items_cost?: Maybe<Scalars['Float']>;
  payment_method_id?: Maybe<Scalars['Float']>;
  tax_cost?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type OrderAvgOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type OrderBoolExp = {
  _and?: Maybe<Array<Maybe<OrderBoolExp>>>;
  _not?: Maybe<OrderBoolExp>;
  _or?: Maybe<Array<Maybe<OrderBoolExp>>>;
  fulfilled_date?: Maybe<DateComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  items_cost?: Maybe<NumericComparisonExp>;
  order_items?: Maybe<OrderItemBoolExp>;
  payment_method?: Maybe<PaymentMethodBoolExp>;
  payment_method_id?: Maybe<IntComparisonExp>;
  placed_date?: Maybe<DateComparisonExp>;
  pon?: Maybe<StringComparisonExp>;
  shipments?: Maybe<ShipmentBoolExp>;
  tax_cost?: Maybe<NumericComparisonExp>;
  total_cost?: Maybe<NumericComparisonExp>;
  url?: Maybe<StringComparisonExp>;
  vendor?: Maybe<VendorBoolExp>;
  vendor_id?: Maybe<IntComparisonExp>;
  vendor_order_id?: Maybe<StringComparisonExp>;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  asc = 'asc',
  /** in the ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in the descending order, nulls first */
  desc = 'desc',
  /** in the descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in the descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum OrderConstraint {
  /** unique or primary key constraint */
  order_pkey = 'order_pkey'
}

/** input type for incrementing integer column in table "order" */
export type OrderIncInput = {
  id?: Maybe<Scalars['Int']>;
  items_cost?: Maybe<Scalars['numeric']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  tax_cost?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type OrderInsertInput = {
  fulfilled_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  items_cost?: Maybe<Scalars['numeric']>;
  order_items?: Maybe<OrderItemArrRelInsertInput>;
  payment_method?: Maybe<PaymentMethodObjRelInsertInput>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  shipments?: Maybe<ShipmentArrRelInsertInput>;
  tax_cost?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  url?: Maybe<Scalars['String']>;
  vendor?: Maybe<VendorObjRelInsertInput>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_order_id?: Maybe<Scalars['String']>;
};

/**
 * represents a single line item on an order
 *
 *
 * columns and relationships of "order_item"
 */
export type OrderItem = {
  __typename?: 'order_item';
  cost_item?: Maybe<Scalars['numeric']>;
  cost_tax?: Maybe<Scalars['numeric']>;
  cost_total?: Maybe<Scalars['numeric']>;
  id: Scalars['Int'];
  /** An object relationship */
  item: Item;
  item_id: Scalars['Int'];
  /** An object relationship */
  manufacturer_item?: Maybe<ManufacturerItem>;
  /** link to manufacturer item, which in turn links to item */
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  order: Order;
  order_id: Scalars['Int'];
  quantity: Scalars['numeric'];
  /** individual items unique id (as provided by manufacturer) */
  serial_no?: Maybe<Scalars['String']>;
  /** An object relationship */
  shipment?: Maybe<Shipment>;
  shipment_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  vendor_item?: Maybe<VendorItem>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "order_item" */
export type OrderItemAggregate = {
  __typename?: 'order_item_aggregate';
  aggregate?: Maybe<OrderItemAggregateFields>;
  nodes: Array<OrderItem>;
};

/** aggregate fields of "order_item" */
export type OrderItemAggregateFields = {
  __typename?: 'order_item_aggregate_fields';
  avg?: Maybe<OrderItemAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<OrderItemMaxFields>;
  min?: Maybe<OrderItemMinFields>;
  stddev?: Maybe<OrderItemStddevFields>;
  stddev_pop?: Maybe<OrderItemStddevPopFields>;
  stddev_samp?: Maybe<OrderItemStddevSampFields>;
  sum?: Maybe<OrderItemSumFields>;
  var_pop?: Maybe<OrderItemVarPopFields>;
  var_samp?: Maybe<OrderItemVarSampFields>;
  variance?: Maybe<OrderItemVarianceFields>;
};


/** aggregate fields of "order_item" */
export type OrderItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<OrderItemSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_item" */
export type OrderItemAggregateOrderBy = {
  avg?: Maybe<OrderItemAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<OrderItemMaxOrderBy>;
  min?: Maybe<OrderItemMinOrderBy>;
  stddev?: Maybe<OrderItemStddevOrderBy>;
  stddev_pop?: Maybe<OrderItemStddevPopOrderBy>;
  stddev_samp?: Maybe<OrderItemStddevSampOrderBy>;
  sum?: Maybe<OrderItemSumOrderBy>;
  var_pop?: Maybe<OrderItemVarPopOrderBy>;
  var_samp?: Maybe<OrderItemVarSampOrderBy>;
  variance?: Maybe<OrderItemVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "order_item" */
export type OrderItemArrRelInsertInput = {
  data: Array<OrderItemInsertInput>;
  on_conflict?: Maybe<OrderItemOnConflict>;
};

/** aggregate avg on columns */
export type OrderItemAvgFields = {
  __typename?: 'order_item_avg_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_item" */
export type OrderItemAvgOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "order_item". All fields are combined with a logical 'AND'. */
export type OrderItemBoolExp = {
  _and?: Maybe<Array<Maybe<OrderItemBoolExp>>>;
  _not?: Maybe<OrderItemBoolExp>;
  _or?: Maybe<Array<Maybe<OrderItemBoolExp>>>;
  cost_item?: Maybe<NumericComparisonExp>;
  cost_tax?: Maybe<NumericComparisonExp>;
  cost_total?: Maybe<NumericComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  item?: Maybe<ItemBoolExp>;
  item_id?: Maybe<IntComparisonExp>;
  manufacturer_item?: Maybe<ManufacturerItemBoolExp>;
  manufacturer_item_id?: Maybe<IntComparisonExp>;
  order?: Maybe<OrderBoolExp>;
  order_id?: Maybe<IntComparisonExp>;
  quantity?: Maybe<NumericComparisonExp>;
  serial_no?: Maybe<StringComparisonExp>;
  shipment?: Maybe<ShipmentBoolExp>;
  shipment_id?: Maybe<IntComparisonExp>;
  vendor_item?: Maybe<VendorItemBoolExp>;
  vendor_item_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "order_item" */
export enum OrderItemConstraint {
  /** unique or primary key constraint */
  order_item_id_item_id_key = 'order_item_id_item_id_key',
  /** unique or primary key constraint */
  order_item_id_key = 'order_item_id_key',
  /** unique or primary key constraint */
  order_item_id_quantity_key = 'order_item_id_quantity_key',
  /** unique or primary key constraint */
  order_item_id_vendor_item_id_key = 'order_item_id_vendor_item_id_key',
  /** unique or primary key constraint */
  order_item_item_id_vendor_item_id_serial_no_key = 'order_item_item_id_vendor_item_id_serial_no_key',
  /** unique or primary key constraint */
  order_item_pkey = 'order_item_pkey',
  /** unique or primary key constraint */
  order_item_vendor_item_id_order_id_serial_no_key = 'order_item_vendor_item_id_order_id_serial_no_key'
}

/** input type for incrementing integer column in table "order_item" */
export type OrderItemIncInput = {
  cost_item?: Maybe<Scalars['numeric']>;
  cost_tax?: Maybe<Scalars['numeric']>;
  cost_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_item" */
export type OrderItemInsertInput = {
  cost_item?: Maybe<Scalars['numeric']>;
  cost_tax?: Maybe<Scalars['numeric']>;
  cost_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<ItemObjRelInsertInput>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item?: Maybe<ManufacturerItemObjRelInsertInput>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderObjRelInsertInput>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  serial_no?: Maybe<Scalars['String']>;
  shipment?: Maybe<ShipmentObjRelInsertInput>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item?: Maybe<VendorItemObjRelInsertInput>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type OrderItemMaxFields = {
  __typename?: 'order_item_max_fields';
  cost_item?: Maybe<Scalars['numeric']>;
  cost_tax?: Maybe<Scalars['numeric']>;
  cost_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  serial_no?: Maybe<Scalars['String']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_item" */
export type OrderItemMaxOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  serial_no?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type OrderItemMinFields = {
  __typename?: 'order_item_min_fields';
  cost_item?: Maybe<Scalars['numeric']>;
  cost_tax?: Maybe<Scalars['numeric']>;
  cost_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  serial_no?: Maybe<Scalars['String']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_item" */
export type OrderItemMinOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  serial_no?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "order_item" */
export type OrderItemMutationResponse = {
  __typename?: 'order_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<OrderItem>;
};

/** input type for inserting object relation for remote table "order_item" */
export type OrderItemObjRelInsertInput = {
  data: OrderItemInsertInput;
  on_conflict?: Maybe<OrderItemOnConflict>;
};

/** on conflict condition type for table "order_item" */
export type OrderItemOnConflict = {
  constraint: OrderItemConstraint;
  update_columns: Array<OrderItemUpdateColumn>;
  where?: Maybe<OrderItemBoolExp>;
};

/** ordering options when selecting data from "order_item" */
export type OrderItemOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item?: Maybe<ManufacturerItemOrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order?: Maybe<OrderOrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  serial_no?: Maybe<OrderBy>;
  shipment?: Maybe<ShipmentOrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item?: Maybe<VendorItemOrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "order_item" */
export type OrderItemPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "order_item" */
export enum OrderItemSelectColumn {
  /** column name */
  cost_item = 'cost_item',
  /** column name */
  cost_tax = 'cost_tax',
  /** column name */
  cost_total = 'cost_total',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_item_id = 'manufacturer_item_id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  quantity = 'quantity',
  /** column name */
  serial_no = 'serial_no',
  /** column name */
  shipment_id = 'shipment_id',
  /** column name */
  vendor_item_id = 'vendor_item_id'
}

/** input type for updating data in table "order_item" */
export type OrderItemSetInput = {
  cost_item?: Maybe<Scalars['numeric']>;
  cost_tax?: Maybe<Scalars['numeric']>;
  cost_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  serial_no?: Maybe<Scalars['String']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type OrderItemStddevFields = {
  __typename?: 'order_item_stddev_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_item" */
export type OrderItemStddevOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type OrderItemStddevPopFields = {
  __typename?: 'order_item_stddev_pop_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_item" */
export type OrderItemStddevPopOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type OrderItemStddevSampFields = {
  __typename?: 'order_item_stddev_samp_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_item" */
export type OrderItemStddevSampOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type OrderItemSumFields = {
  __typename?: 'order_item_sum_fields';
  cost_item?: Maybe<Scalars['numeric']>;
  cost_tax?: Maybe<Scalars['numeric']>;
  cost_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_item" */
export type OrderItemSumOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** update columns of table "order_item" */
export enum OrderItemUpdateColumn {
  /** column name */
  cost_item = 'cost_item',
  /** column name */
  cost_tax = 'cost_tax',
  /** column name */
  cost_total = 'cost_total',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_item_id = 'manufacturer_item_id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  quantity = 'quantity',
  /** column name */
  serial_no = 'serial_no',
  /** column name */
  shipment_id = 'shipment_id',
  /** column name */
  vendor_item_id = 'vendor_item_id'
}

/** aggregate var_pop on columns */
export type OrderItemVarPopFields = {
  __typename?: 'order_item_var_pop_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_item" */
export type OrderItemVarPopOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type OrderItemVarSampFields = {
  __typename?: 'order_item_var_samp_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_item" */
export type OrderItemVarSampOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type OrderItemVarianceFields = {
  __typename?: 'order_item_variance_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_item" */
export type OrderItemVarianceOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type OrderMaxFields = {
  __typename?: 'order_max_fields';
  fulfilled_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  items_cost?: Maybe<Scalars['numeric']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  tax_cost?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_order_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "order" */
export type OrderMaxOrderBy = {
  fulfilled_date?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  placed_date?: Maybe<OrderBy>;
  pon?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_order_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type OrderMinFields = {
  __typename?: 'order_min_fields';
  fulfilled_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  items_cost?: Maybe<Scalars['numeric']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  tax_cost?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_order_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "order" */
export type OrderMinOrderBy = {
  fulfilled_date?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  placed_date?: Maybe<OrderBy>;
  pon?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_order_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "order" */
export type OrderMutationResponse = {
  __typename?: 'order_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "order" */
export type OrderObjRelInsertInput = {
  data: OrderInsertInput;
  on_conflict?: Maybe<OrderOnConflict>;
};

/** on conflict condition type for table "order" */
export type OrderOnConflict = {
  constraint: OrderConstraint;
  update_columns: Array<OrderUpdateColumn>;
  where?: Maybe<OrderBoolExp>;
};

/** ordering options when selecting data from "order" */
export type OrderOrderBy = {
  fulfilled_date?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  order_items_aggregate?: Maybe<OrderItemAggregateOrderBy>;
  payment_method?: Maybe<PaymentMethodOrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  placed_date?: Maybe<OrderBy>;
  pon?: Maybe<OrderBy>;
  shipments_aggregate?: Maybe<ShipmentAggregateOrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor?: Maybe<VendorOrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_order_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "order" */
export type OrderPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "order" */
export enum OrderSelectColumn {
  /** column name */
  fulfilled_date = 'fulfilled_date',
  /** column name */
  id = 'id',
  /** column name */
  items_cost = 'items_cost',
  /** column name */
  payment_method_id = 'payment_method_id',
  /** column name */
  placed_date = 'placed_date',
  /** column name */
  pon = 'pon',
  /** column name */
  tax_cost = 'tax_cost',
  /** column name */
  total_cost = 'total_cost',
  /** column name */
  url = 'url',
  /** column name */
  vendor_id = 'vendor_id',
  /** column name */
  vendor_order_id = 'vendor_order_id'
}

/** input type for updating data in table "order" */
export type OrderSetInput = {
  fulfilled_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  items_cost?: Maybe<Scalars['numeric']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  tax_cost?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_order_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type OrderStddevFields = {
  __typename?: 'order_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  items_cost?: Maybe<Scalars['Float']>;
  payment_method_id?: Maybe<Scalars['Float']>;
  tax_cost?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type OrderStddevOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type OrderStddevPopFields = {
  __typename?: 'order_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  items_cost?: Maybe<Scalars['Float']>;
  payment_method_id?: Maybe<Scalars['Float']>;
  tax_cost?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type OrderStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type OrderStddevSampFields = {
  __typename?: 'order_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  items_cost?: Maybe<Scalars['Float']>;
  payment_method_id?: Maybe<Scalars['Float']>;
  tax_cost?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type OrderStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type OrderSumFields = {
  __typename?: 'order_sum_fields';
  id?: Maybe<Scalars['Int']>;
  items_cost?: Maybe<Scalars['numeric']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  tax_cost?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order" */
export type OrderSumOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** update columns of table "order" */
export enum OrderUpdateColumn {
  /** column name */
  fulfilled_date = 'fulfilled_date',
  /** column name */
  id = 'id',
  /** column name */
  items_cost = 'items_cost',
  /** column name */
  payment_method_id = 'payment_method_id',
  /** column name */
  placed_date = 'placed_date',
  /** column name */
  pon = 'pon',
  /** column name */
  tax_cost = 'tax_cost',
  /** column name */
  total_cost = 'total_cost',
  /** column name */
  url = 'url',
  /** column name */
  vendor_id = 'vendor_id',
  /** column name */
  vendor_order_id = 'vendor_order_id'
}

/** aggregate var_pop on columns */
export type OrderVarPopFields = {
  __typename?: 'order_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  items_cost?: Maybe<Scalars['Float']>;
  payment_method_id?: Maybe<Scalars['Float']>;
  tax_cost?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type OrderVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type OrderVarSampFields = {
  __typename?: 'order_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  items_cost?: Maybe<Scalars['Float']>;
  payment_method_id?: Maybe<Scalars['Float']>;
  tax_cost?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type OrderVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type OrderVarianceFields = {
  __typename?: 'order_variance_fields';
  id?: Maybe<Scalars['Float']>;
  items_cost?: Maybe<Scalars['Float']>;
  payment_method_id?: Maybe<Scalars['Float']>;
  tax_cost?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type OrderVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  items_cost?: Maybe<OrderBy>;
  payment_method_id?: Maybe<OrderBy>;
  tax_cost?: Maybe<OrderBy>;
  total_cost?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** columns and relationships of "payment_method" */
export type PaymentMethod = {
  __typename?: 'payment_method';
  class: EnumPaymentMethodTypeEnum;
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "payment_method" */
export type PaymentMethodAggregate = {
  __typename?: 'payment_method_aggregate';
  aggregate?: Maybe<PaymentMethodAggregateFields>;
  nodes: Array<PaymentMethod>;
};

/** aggregate fields of "payment_method" */
export type PaymentMethodAggregateFields = {
  __typename?: 'payment_method_aggregate_fields';
  avg?: Maybe<PaymentMethodAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PaymentMethodMaxFields>;
  min?: Maybe<PaymentMethodMinFields>;
  stddev?: Maybe<PaymentMethodStddevFields>;
  stddev_pop?: Maybe<PaymentMethodStddevPopFields>;
  stddev_samp?: Maybe<PaymentMethodStddevSampFields>;
  sum?: Maybe<PaymentMethodSumFields>;
  var_pop?: Maybe<PaymentMethodVarPopFields>;
  var_samp?: Maybe<PaymentMethodVarSampFields>;
  variance?: Maybe<PaymentMethodVarianceFields>;
};


/** aggregate fields of "payment_method" */
export type PaymentMethodAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PaymentMethodSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "payment_method" */
export type PaymentMethodAggregateOrderBy = {
  avg?: Maybe<PaymentMethodAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PaymentMethodMaxOrderBy>;
  min?: Maybe<PaymentMethodMinOrderBy>;
  stddev?: Maybe<PaymentMethodStddevOrderBy>;
  stddev_pop?: Maybe<PaymentMethodStddevPopOrderBy>;
  stddev_samp?: Maybe<PaymentMethodStddevSampOrderBy>;
  sum?: Maybe<PaymentMethodSumOrderBy>;
  var_pop?: Maybe<PaymentMethodVarPopOrderBy>;
  var_samp?: Maybe<PaymentMethodVarSampOrderBy>;
  variance?: Maybe<PaymentMethodVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "payment_method" */
export type PaymentMethodArrRelInsertInput = {
  data: Array<PaymentMethodInsertInput>;
  on_conflict?: Maybe<PaymentMethodOnConflict>;
};

/** aggregate avg on columns */
export type PaymentMethodAvgFields = {
  __typename?: 'payment_method_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "payment_method" */
export type PaymentMethodAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "payment_method". All fields are combined with a logical 'AND'. */
export type PaymentMethodBoolExp = {
  _and?: Maybe<Array<Maybe<PaymentMethodBoolExp>>>;
  _not?: Maybe<PaymentMethodBoolExp>;
  _or?: Maybe<Array<Maybe<PaymentMethodBoolExp>>>;
  class?: Maybe<EnumPaymentMethodTypeEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "payment_method" */
export enum PaymentMethodConstraint {
  /** unique or primary key constraint */
  payment_method_pkey = 'payment_method_pkey'
}

/** input type for incrementing integer column in table "payment_method" */
export type PaymentMethodIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment_method" */
export type PaymentMethodInsertInput = {
  class?: Maybe<EnumPaymentMethodTypeEnum>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PaymentMethodMaxFields = {
  __typename?: 'payment_method_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "payment_method" */
export type PaymentMethodMaxOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PaymentMethodMinFields = {
  __typename?: 'payment_method_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "payment_method" */
export type PaymentMethodMinOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "payment_method" */
export type PaymentMethodMutationResponse = {
  __typename?: 'payment_method_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PaymentMethod>;
};

/** input type for inserting object relation for remote table "payment_method" */
export type PaymentMethodObjRelInsertInput = {
  data: PaymentMethodInsertInput;
  on_conflict?: Maybe<PaymentMethodOnConflict>;
};

/** on conflict condition type for table "payment_method" */
export type PaymentMethodOnConflict = {
  constraint: PaymentMethodConstraint;
  update_columns: Array<PaymentMethodUpdateColumn>;
  where?: Maybe<PaymentMethodBoolExp>;
};

/** ordering options when selecting data from "payment_method" */
export type PaymentMethodOrderBy = {
  class?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "payment_method" */
export type PaymentMethodPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "payment_method" */
export enum PaymentMethodSelectColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name'
}

/** input type for updating data in table "payment_method" */
export type PaymentMethodSetInput = {
  class?: Maybe<EnumPaymentMethodTypeEnum>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PaymentMethodStddevFields = {
  __typename?: 'payment_method_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "payment_method" */
export type PaymentMethodStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PaymentMethodStddevPopFields = {
  __typename?: 'payment_method_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "payment_method" */
export type PaymentMethodStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PaymentMethodStddevSampFields = {
  __typename?: 'payment_method_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "payment_method" */
export type PaymentMethodStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PaymentMethodSumFields = {
  __typename?: 'payment_method_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "payment_method" */
export type PaymentMethodSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "payment_method" */
export enum PaymentMethodUpdateColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name'
}

/** aggregate var_pop on columns */
export type PaymentMethodVarPopFields = {
  __typename?: 'payment_method_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "payment_method" */
export type PaymentMethodVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PaymentMethodVarSampFields = {
  __typename?: 'payment_method_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "payment_method" */
export type PaymentMethodVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PaymentMethodVarianceFields = {
  __typename?: 'payment_method_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "payment_method" */
export type PaymentMethodVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrength = {
  __typename?: 'property_item_hardware_fastener_bolt_strength';
  diameter: Scalars['numeric'];
  max_tightening_torque: Scalars['numeric'];
  proof_load: Scalars['numeric'];
  strength_grade: Scalars['String'];
  thread_pitch: Scalars['numeric'];
};

/** aggregated selection of "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthAggregate = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_aggregate';
  aggregate?: Maybe<PropertyItemHardwareFastenerBoltStrengthAggregateFields>;
  nodes: Array<PropertyItemHardwareFastenerBoltStrength>;
};

/** aggregate fields of "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthAggregateFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_aggregate_fields';
  avg?: Maybe<PropertyItemHardwareFastenerBoltStrengthAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PropertyItemHardwareFastenerBoltStrengthMaxFields>;
  min?: Maybe<PropertyItemHardwareFastenerBoltStrengthMinFields>;
  stddev?: Maybe<PropertyItemHardwareFastenerBoltStrengthStddevFields>;
  stddev_pop?: Maybe<PropertyItemHardwareFastenerBoltStrengthStddevPopFields>;
  stddev_samp?: Maybe<PropertyItemHardwareFastenerBoltStrengthStddevSampFields>;
  sum?: Maybe<PropertyItemHardwareFastenerBoltStrengthSumFields>;
  var_pop?: Maybe<PropertyItemHardwareFastenerBoltStrengthVarPopFields>;
  var_samp?: Maybe<PropertyItemHardwareFastenerBoltStrengthVarSampFields>;
  variance?: Maybe<PropertyItemHardwareFastenerBoltStrengthVarianceFields>;
};


/** aggregate fields of "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthAggregateOrderBy = {
  avg?: Maybe<PropertyItemHardwareFastenerBoltStrengthAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PropertyItemHardwareFastenerBoltStrengthMaxOrderBy>;
  min?: Maybe<PropertyItemHardwareFastenerBoltStrengthMinOrderBy>;
  stddev?: Maybe<PropertyItemHardwareFastenerBoltStrengthStddevOrderBy>;
  stddev_pop?: Maybe<PropertyItemHardwareFastenerBoltStrengthStddevPopOrderBy>;
  stddev_samp?: Maybe<PropertyItemHardwareFastenerBoltStrengthStddevSampOrderBy>;
  sum?: Maybe<PropertyItemHardwareFastenerBoltStrengthSumOrderBy>;
  var_pop?: Maybe<PropertyItemHardwareFastenerBoltStrengthVarPopOrderBy>;
  var_samp?: Maybe<PropertyItemHardwareFastenerBoltStrengthVarSampOrderBy>;
  variance?: Maybe<PropertyItemHardwareFastenerBoltStrengthVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthArrRelInsertInput = {
  data: Array<PropertyItemHardwareFastenerBoltStrengthInsertInput>;
  on_conflict?: Maybe<PropertyItemHardwareFastenerBoltStrengthOnConflict>;
};

/** aggregate avg on columns */
export type PropertyItemHardwareFastenerBoltStrengthAvgFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_avg_fields';
  diameter?: Maybe<Scalars['Float']>;
  max_tightening_torque?: Maybe<Scalars['Float']>;
  proof_load?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthAvgOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "property.item_hardware_fastener_bolt_strength". All fields are combined with a logical 'AND'. */
export type PropertyItemHardwareFastenerBoltStrengthBoolExp = {
  _and?: Maybe<Array<Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>>>;
  _not?: Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>;
  _or?: Maybe<Array<Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>>>;
  diameter?: Maybe<NumericComparisonExp>;
  max_tightening_torque?: Maybe<NumericComparisonExp>;
  proof_load?: Maybe<NumericComparisonExp>;
  strength_grade?: Maybe<StringComparisonExp>;
  thread_pitch?: Maybe<NumericComparisonExp>;
};

/** unique or primary key constraints on table "property.item_hardware_fastener_bolt_strength" */
export enum PropertyItemHardwareFastenerBoltStrengthConstraint {
  /** unique or primary key constraint */
  item_hardware_fastener_bolt_strength_pkey = 'item_hardware_fastener_bolt_strength_pkey'
}

/** input type for incrementing integer column in table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthIncInput = {
  diameter?: Maybe<Scalars['numeric']>;
  max_tightening_torque?: Maybe<Scalars['numeric']>;
  proof_load?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthInsertInput = {
  diameter?: Maybe<Scalars['numeric']>;
  max_tightening_torque?: Maybe<Scalars['numeric']>;
  proof_load?: Maybe<Scalars['numeric']>;
  strength_grade?: Maybe<Scalars['String']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type PropertyItemHardwareFastenerBoltStrengthMaxFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_max_fields';
  diameter?: Maybe<Scalars['numeric']>;
  max_tightening_torque?: Maybe<Scalars['numeric']>;
  proof_load?: Maybe<Scalars['numeric']>;
  strength_grade?: Maybe<Scalars['String']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthMaxOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  strength_grade?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PropertyItemHardwareFastenerBoltStrengthMinFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_min_fields';
  diameter?: Maybe<Scalars['numeric']>;
  max_tightening_torque?: Maybe<Scalars['numeric']>;
  proof_load?: Maybe<Scalars['numeric']>;
  strength_grade?: Maybe<Scalars['String']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthMinOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  strength_grade?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** response of any mutation on the table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthMutationResponse = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PropertyItemHardwareFastenerBoltStrength>;
};

/** input type for inserting object relation for remote table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthObjRelInsertInput = {
  data: PropertyItemHardwareFastenerBoltStrengthInsertInput;
  on_conflict?: Maybe<PropertyItemHardwareFastenerBoltStrengthOnConflict>;
};

/** on conflict condition type for table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthOnConflict = {
  constraint: PropertyItemHardwareFastenerBoltStrengthConstraint;
  update_columns: Array<PropertyItemHardwareFastenerBoltStrengthUpdateColumn>;
  where?: Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>;
};

/** ordering options when selecting data from "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  strength_grade?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** primary key columns input for table: "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthPkColumnsInput = {
  diameter: Scalars['numeric'];
  strength_grade: Scalars['String'];
  thread_pitch: Scalars['numeric'];
};

/** select columns of table "property.item_hardware_fastener_bolt_strength" */
export enum PropertyItemHardwareFastenerBoltStrengthSelectColumn {
  /** column name */
  diameter = 'diameter',
  /** column name */
  max_tightening_torque = 'max_tightening_torque',
  /** column name */
  proof_load = 'proof_load',
  /** column name */
  strength_grade = 'strength_grade',
  /** column name */
  thread_pitch = 'thread_pitch'
}

/** input type for updating data in table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthSetInput = {
  diameter?: Maybe<Scalars['numeric']>;
  max_tightening_torque?: Maybe<Scalars['numeric']>;
  proof_load?: Maybe<Scalars['numeric']>;
  strength_grade?: Maybe<Scalars['String']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type PropertyItemHardwareFastenerBoltStrengthStddevFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_stddev_fields';
  diameter?: Maybe<Scalars['Float']>;
  max_tightening_torque?: Maybe<Scalars['Float']>;
  proof_load?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthStddevOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PropertyItemHardwareFastenerBoltStrengthStddevPopFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_stddev_pop_fields';
  diameter?: Maybe<Scalars['Float']>;
  max_tightening_torque?: Maybe<Scalars['Float']>;
  proof_load?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthStddevPopOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PropertyItemHardwareFastenerBoltStrengthStddevSampFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_stddev_samp_fields';
  diameter?: Maybe<Scalars['Float']>;
  max_tightening_torque?: Maybe<Scalars['Float']>;
  proof_load?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthStddevSampOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PropertyItemHardwareFastenerBoltStrengthSumFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_sum_fields';
  diameter?: Maybe<Scalars['numeric']>;
  max_tightening_torque?: Maybe<Scalars['numeric']>;
  proof_load?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthSumOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** update columns of table "property.item_hardware_fastener_bolt_strength" */
export enum PropertyItemHardwareFastenerBoltStrengthUpdateColumn {
  /** column name */
  diameter = 'diameter',
  /** column name */
  max_tightening_torque = 'max_tightening_torque',
  /** column name */
  proof_load = 'proof_load',
  /** column name */
  strength_grade = 'strength_grade',
  /** column name */
  thread_pitch = 'thread_pitch'
}

/** aggregate var_pop on columns */
export type PropertyItemHardwareFastenerBoltStrengthVarPopFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_var_pop_fields';
  diameter?: Maybe<Scalars['Float']>;
  max_tightening_torque?: Maybe<Scalars['Float']>;
  proof_load?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthVarPopOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PropertyItemHardwareFastenerBoltStrengthVarSampFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_var_samp_fields';
  diameter?: Maybe<Scalars['Float']>;
  max_tightening_torque?: Maybe<Scalars['Float']>;
  proof_load?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthVarSampOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PropertyItemHardwareFastenerBoltStrengthVarianceFields = {
  __typename?: 'property_item_hardware_fastener_bolt_strength_variance_fields';
  diameter?: Maybe<Scalars['Float']>;
  max_tightening_torque?: Maybe<Scalars['Float']>;
  proof_load?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "property.item_hardware_fastener_bolt_strength" */
export type PropertyItemHardwareFastenerBoltStrengthVarianceOrderBy = {
  diameter?: Maybe<OrderBy>;
  max_tightening_torque?: Maybe<OrderBy>;
  proof_load?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/**
 * Lookup table for items with the same diameter, pitch, and fit (+unit) ; to display their common properties, such as tapping drill size, major diameter, etc
 *
 *
 * columns and relationships of "property_item_hardware_fastener_screw_machine.diameter"
 */
export type PropertyItemHardwareFastenerScrewMachineDiameter = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter';
  /** String description of diameter in the format native to the given unit. */
  diameter_label: Scalars['String'];
  /** major diameter normalized to mm */
  diameter_major: Scalars['numeric'];
  fit: EnumItemHardwareFastenerScrewMachineThreadFitEnum;
  /** The pitch normalized to mm. If USC, it is 1/TPI -> mm */
  pitch: Scalars['numeric'];
  /** The pitch in the given unit's native format. TPI for inch, mm for metric */
  pitch_label: Scalars['numeric'];
  /** governing standard, eg. ISO */
  standard: EnumItemHardwareFastenerThreadStandardEnum;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['numeric']>;
  /** thread description, eg. coarse, fine, etc */
  thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelEnum>;
  unit: EnumUnitEnum;
};

/** aggregated selection of "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterAggregate = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_aggregate';
  aggregate?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterAggregateFields>;
  nodes: Array<PropertyItemHardwareFastenerScrewMachineDiameter>;
};

/** aggregate fields of "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterAggregateFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_aggregate_fields';
  avg?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterMaxFields>;
  min?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterMinFields>;
  stddev?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterStddevFields>;
  stddev_pop?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterStddevPopFields>;
  stddev_samp?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterStddevSampFields>;
  sum?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterSumFields>;
  var_pop?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterVarPopFields>;
  var_samp?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterVarSampFields>;
  variance?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterVarianceFields>;
};


/** aggregate fields of "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterAggregateOrderBy = {
  avg?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterMaxOrderBy>;
  min?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterMinOrderBy>;
  stddev?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterStddevOrderBy>;
  stddev_pop?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterStddevPopOrderBy>;
  stddev_samp?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterStddevSampOrderBy>;
  sum?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterSumOrderBy>;
  var_pop?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterVarPopOrderBy>;
  var_samp?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterVarSampOrderBy>;
  variance?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterArrRelInsertInput = {
  data: Array<PropertyItemHardwareFastenerScrewMachineDiameterInsertInput>;
  on_conflict?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterOnConflict>;
};

/** aggregate avg on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterAvgFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_avg_fields';
  diameter_major?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  pitch_label?: Maybe<Scalars['Float']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterAvgOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "property_item_hardware_fastener_screw_machine.diameter". All fields are combined with a logical 'AND'. */
export type PropertyItemHardwareFastenerScrewMachineDiameterBoolExp = {
  _and?: Maybe<Array<Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>>>;
  _not?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>;
  _or?: Maybe<Array<Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>>>;
  diameter_label?: Maybe<StringComparisonExp>;
  diameter_major?: Maybe<NumericComparisonExp>;
  fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnumComparisonExp>;
  pitch?: Maybe<NumericComparisonExp>;
  pitch_label?: Maybe<NumericComparisonExp>;
  standard?: Maybe<EnumItemHardwareFastenerThreadStandardEnumComparisonExp>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<NumericComparisonExp>;
  thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelEnumComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
};

/** unique or primary key constraints on table "property_item_hardware_fastener_screw_machine.diameter" */
export enum PropertyItemHardwareFastenerScrewMachineDiameterConstraint {
  /** unique or primary key constraint */
  diameter_pkey = 'diameter_pkey'
}

/** input type for incrementing integer column in table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterIncInput = {
  diameter_major?: Maybe<Scalars['numeric']>;
  pitch?: Maybe<Scalars['numeric']>;
  pitch_label?: Maybe<Scalars['numeric']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterInsertInput = {
  diameter_label?: Maybe<Scalars['String']>;
  diameter_major?: Maybe<Scalars['numeric']>;
  fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  pitch?: Maybe<Scalars['numeric']>;
  pitch_label?: Maybe<Scalars['numeric']>;
  standard?: Maybe<EnumItemHardwareFastenerThreadStandardEnum>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['numeric']>;
  thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelEnum>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate max on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterMaxFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_max_fields';
  diameter_label?: Maybe<Scalars['String']>;
  diameter_major?: Maybe<Scalars['numeric']>;
  pitch?: Maybe<Scalars['numeric']>;
  pitch_label?: Maybe<Scalars['numeric']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterMaxOrderBy = {
  diameter_label?: Maybe<OrderBy>;
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterMinFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_min_fields';
  diameter_label?: Maybe<Scalars['String']>;
  diameter_major?: Maybe<Scalars['numeric']>;
  pitch?: Maybe<Scalars['numeric']>;
  pitch_label?: Maybe<Scalars['numeric']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterMinOrderBy = {
  diameter_label?: Maybe<OrderBy>;
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** response of any mutation on the table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterMutationResponse = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PropertyItemHardwareFastenerScrewMachineDiameter>;
};

/** input type for inserting object relation for remote table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterObjRelInsertInput = {
  data: PropertyItemHardwareFastenerScrewMachineDiameterInsertInput;
  on_conflict?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterOnConflict>;
};

/** on conflict condition type for table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterOnConflict = {
  constraint: PropertyItemHardwareFastenerScrewMachineDiameterConstraint;
  update_columns: Array<PropertyItemHardwareFastenerScrewMachineDiameterUpdateColumn>;
  where?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>;
};

/** ordering options when selecting data from "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterOrderBy = {
  diameter_label?: Maybe<OrderBy>;
  diameter_major?: Maybe<OrderBy>;
  fit?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  standard?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
  thread_label?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
};

/** primary key columns input for table: "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterPkColumnsInput = {
  /** String description of diameter in the format native to the given unit. */
  diameter_label: Scalars['String'];
  fit: EnumItemHardwareFastenerScrewMachineThreadFitEnum;
  /** The pitch in the given unit's native format. TPI for inch, mm for metric */
  pitch_label: Scalars['numeric'];
};

/** select columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export enum PropertyItemHardwareFastenerScrewMachineDiameterSelectColumn {
  /** column name */
  diameter_label = 'diameter_label',
  /** column name */
  diameter_major = 'diameter_major',
  /** column name */
  fit = 'fit',
  /** column name */
  pitch = 'pitch',
  /** column name */
  pitch_label = 'pitch_label',
  /** column name */
  standard = 'standard',
  /** column name */
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter = 'tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter',
  /** column name */
  thread_label = 'thread_label',
  /** column name */
  unit = 'unit'
}

/** input type for updating data in table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterSetInput = {
  diameter_label?: Maybe<Scalars['String']>;
  diameter_major?: Maybe<Scalars['numeric']>;
  fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  pitch?: Maybe<Scalars['numeric']>;
  pitch_label?: Maybe<Scalars['numeric']>;
  standard?: Maybe<EnumItemHardwareFastenerThreadStandardEnum>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['numeric']>;
  thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelEnum>;
  unit?: Maybe<EnumUnitEnum>;
};

/** aggregate stddev on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterStddevFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_stddev_fields';
  diameter_major?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  pitch_label?: Maybe<Scalars['Float']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterStddevOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterStddevPopFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_stddev_pop_fields';
  diameter_major?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  pitch_label?: Maybe<Scalars['Float']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterStddevPopOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterStddevSampFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_stddev_samp_fields';
  diameter_major?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  pitch_label?: Maybe<Scalars['Float']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterStddevSampOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterSumFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_sum_fields';
  diameter_major?: Maybe<Scalars['numeric']>;
  pitch?: Maybe<Scalars['numeric']>;
  pitch_label?: Maybe<Scalars['numeric']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterSumOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** update columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export enum PropertyItemHardwareFastenerScrewMachineDiameterUpdateColumn {
  /** column name */
  diameter_label = 'diameter_label',
  /** column name */
  diameter_major = 'diameter_major',
  /** column name */
  fit = 'fit',
  /** column name */
  pitch = 'pitch',
  /** column name */
  pitch_label = 'pitch_label',
  /** column name */
  standard = 'standard',
  /** column name */
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter = 'tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter',
  /** column name */
  thread_label = 'thread_label',
  /** column name */
  unit = 'unit'
}

/** aggregate var_pop on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterVarPopFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_var_pop_fields';
  diameter_major?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  pitch_label?: Maybe<Scalars['Float']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterVarPopOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterVarSampFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_var_samp_fields';
  diameter_major?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  pitch_label?: Maybe<Scalars['Float']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterVarSampOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PropertyItemHardwareFastenerScrewMachineDiameterVarianceFields = {
  __typename?: 'property_item_hardware_fastener_screw_machine_diameter_variance_fields';
  diameter_major?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  pitch_label?: Maybe<Scalars['Float']>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "property_item_hardware_fastener_screw_machine.diameter" */
export type PropertyItemHardwareFastenerScrewMachineDiameterVarianceOrderBy = {
  diameter_major?: Maybe<OrderBy>;
  pitch?: Maybe<OrderBy>;
  pitch_label?: Maybe<OrderBy>;
  tap_drill_sizeXXTODOXX_link_to_another_table_unit_and_diameter?: Maybe<OrderBy>;
};

/** query root */
export type QueryRoot = {
  __typename?: 'query_root';
  /** Retrieve Printer and Label status and properties */
  PrinterStatus?: Maybe<PrinterStatus>;
  /** fetch data from the table: "enum_item_cable.connector" */
  enum_item_cable_connector: Array<EnumItemCableConnector>;
  /** fetch aggregated fields from the table: "enum_item_cable.connector" */
  enum_item_cable_connector_aggregate: EnumItemCableConnectorAggregate;
  /** fetch data from the table: "enum_item_cable.connector" using primary key columns */
  enum_item_cable_connector_by_pk?: Maybe<EnumItemCableConnector>;
  /** fetch data from the table: "enum.item_class" */
  enum_item_class: Array<EnumItemClass>;
  /** fetch aggregated fields from the table: "enum.item_class" */
  enum_item_class_aggregate: EnumItemClassAggregate;
  /** fetch data from the table: "enum.item_class" using primary key columns */
  enum_item_class_by_pk?: Maybe<EnumItemClass>;
  /** fetch data from the table: "enum_item.handedness" */
  enum_item_handedness: Array<EnumItemHandedness>;
  /** fetch aggregated fields from the table: "enum_item.handedness" */
  enum_item_handedness_aggregate: EnumItemHandednessAggregate;
  /** fetch data from the table: "enum_item.handedness" using primary key columns */
  enum_item_handedness_by_pk?: Maybe<EnumItemHandedness>;
  /** fetch data from the table: "enum_item_hardware_fastener.drive" */
  enum_item_hardware_fastener_drive: Array<EnumItemHardwareFastenerDrive>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.drive" */
  enum_item_hardware_fastener_drive_aggregate: EnumItemHardwareFastenerDriveAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.drive" using primary key columns */
  enum_item_hardware_fastener_drive_by_pk?: Maybe<EnumItemHardwareFastenerDrive>;
  /** fetch data from the table: "enum_item_hardware_fastener.material" */
  enum_item_hardware_fastener_material: Array<EnumItemHardwareFastenerMaterial>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.material" */
  enum_item_hardware_fastener_material_aggregate: EnumItemHardwareFastenerMaterialAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.material" using primary key columns */
  enum_item_hardware_fastener_material_by_pk?: Maybe<EnumItemHardwareFastenerMaterial>;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.form" */
  enum_item_hardware_fastener_nut_form: Array<EnumItemHardwareFastenerNutForm>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_nut.form" */
  enum_item_hardware_fastener_nut_form_aggregate: EnumItemHardwareFastenerNutFormAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.form" using primary key columns */
  enum_item_hardware_fastener_nut_form_by_pk?: Maybe<EnumItemHardwareFastenerNutForm>;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.strength" */
  enum_item_hardware_fastener_nut_strength: Array<EnumItemHardwareFastenerNutStrength>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_nut.strength" */
  enum_item_hardware_fastener_nut_strength_aggregate: EnumItemHardwareFastenerNutStrengthAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.strength" using primary key columns */
  enum_item_hardware_fastener_nut_strength_by_pk?: Maybe<EnumItemHardwareFastenerNutStrength>;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.thread_fit" */
  enum_item_hardware_fastener_nut_thread_fit: Array<EnumItemHardwareFastenerNutThreadFit>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_nut.thread_fit" */
  enum_item_hardware_fastener_nut_thread_fit_aggregate: EnumItemHardwareFastenerNutThreadFitAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.thread_fit" using primary key columns */
  enum_item_hardware_fastener_nut_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerNutThreadFit>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.hardness" */
  enum_item_hardware_fastener_screw_hardness: Array<EnumItemHardwareFastenerScrewHardness>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw.hardness" */
  enum_item_hardware_fastener_screw_hardness_aggregate: EnumItemHardwareFastenerScrewHardnessAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.hardness" using primary key columns */
  enum_item_hardware_fastener_screw_hardness_by_pk?: Maybe<EnumItemHardwareFastenerScrewHardness>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.head" */
  enum_item_hardware_fastener_screw_head: Array<EnumItemHardwareFastenerScrewHead>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw.head" */
  enum_item_hardware_fastener_screw_head_aggregate: EnumItemHardwareFastenerScrewHeadAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.head" using primary key columns */
  enum_item_hardware_fastener_screw_head_by_pk?: Maybe<EnumItemHardwareFastenerScrewHead>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.point" */
  enum_item_hardware_fastener_screw_machine_point: Array<EnumItemHardwareFastenerScrewMachinePoint>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw_machine.point" */
  enum_item_hardware_fastener_screw_machine_point_aggregate: EnumItemHardwareFastenerScrewMachinePointAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.point" using primary key columns */
  enum_item_hardware_fastener_screw_machine_point_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachinePoint>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.strength" */
  enum_item_hardware_fastener_screw_machine_strength: Array<EnumItemHardwareFastenerScrewMachineStrength>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw_machine.strength" */
  enum_item_hardware_fastener_screw_machine_strength_aggregate: EnumItemHardwareFastenerScrewMachineStrengthAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.strength" using primary key columns */
  enum_item_hardware_fastener_screw_machine_strength_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineStrength>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  enum_item_hardware_fastener_screw_machine_thread_fit: Array<EnumItemHardwareFastenerScrewMachineThreadFit>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  enum_item_hardware_fastener_screw_machine_thread_fit_aggregate: EnumItemHardwareFastenerScrewMachineThreadFitAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" using primary key columns */
  enum_item_hardware_fastener_screw_machine_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFit>;
  /** fetch data from the table: "enum_item_hardware_fastener.standoff_shape" */
  enum_item_hardware_fastener_standoff_shape: Array<EnumItemHardwareFastenerStandoffShape>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.standoff_shape" */
  enum_item_hardware_fastener_standoff_shape_aggregate: EnumItemHardwareFastenerStandoffShapeAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.standoff_shape" using primary key columns */
  enum_item_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumItemHardwareFastenerStandoffShape>;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_label" */
  enum_item_hardware_fastener_thread_label: Array<EnumItemHardwareFastenerThreadLabel>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.thread_label" */
  enum_item_hardware_fastener_thread_label_aggregate: EnumItemHardwareFastenerThreadLabelAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_label" using primary key columns */
  enum_item_hardware_fastener_thread_label_by_pk?: Maybe<EnumItemHardwareFastenerThreadLabel>;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_standard" */
  enum_item_hardware_fastener_thread_standard: Array<EnumItemHardwareFastenerThreadStandard>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.thread_standard" */
  enum_item_hardware_fastener_thread_standard_aggregate: EnumItemHardwareFastenerThreadStandardAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_standard" using primary key columns */
  enum_item_hardware_fastener_thread_standard_by_pk?: Maybe<EnumItemHardwareFastenerThreadStandard>;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.form" */
  enum_item_hardware_fastener_washer_form: Array<EnumItemHardwareFastenerWasherForm>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_washer.form" */
  enum_item_hardware_fastener_washer_form_aggregate: EnumItemHardwareFastenerWasherFormAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.form" using primary key columns */
  enum_item_hardware_fastener_washer_form_by_pk?: Maybe<EnumItemHardwareFastenerWasherForm>;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.mechanism" */
  enum_item_hardware_fastener_washer_mechanism: Array<EnumItemHardwareFastenerWasherMechanism>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_washer.mechanism" */
  enum_item_hardware_fastener_washer_mechanism_aggregate: EnumItemHardwareFastenerWasherMechanismAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.mechanism" using primary key columns */
  enum_item_hardware_fastener_washer_mechanism_by_pk?: Maybe<EnumItemHardwareFastenerWasherMechanism>;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.pattern" */
  enum_item_hardware_fastener_washer_pattern: Array<EnumItemHardwareFastenerWasherPattern>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_washer.pattern" */
  enum_item_hardware_fastener_washer_pattern_aggregate: EnumItemHardwareFastenerWasherPatternAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.pattern" using primary key columns */
  enum_item_hardware_fastener_washer_pattern_by_pk?: Maybe<EnumItemHardwareFastenerWasherPattern>;
  /** fetch data from the table: "enum_item_hardware.finish" */
  enum_item_hardware_finish: Array<EnumItemHardwareFinish>;
  /** fetch aggregated fields from the table: "enum_item_hardware.finish" */
  enum_item_hardware_finish_aggregate: EnumItemHardwareFinishAggregate;
  /** fetch data from the table: "enum_item_hardware.finish" using primary key columns */
  enum_item_hardware_finish_by_pk?: Maybe<EnumItemHardwareFinish>;
  /** fetch data from the table: "enum_item_hardware.use_material" */
  enum_item_hardware_use_material: Array<EnumItemHardwareUseMaterial>;
  /** fetch aggregated fields from the table: "enum_item_hardware.use_material" */
  enum_item_hardware_use_material_aggregate: EnumItemHardwareUseMaterialAggregate;
  /** fetch data from the table: "enum_item_hardware.use_material" using primary key columns */
  enum_item_hardware_use_material_by_pk?: Maybe<EnumItemHardwareUseMaterial>;
  /** fetch data from the table: "enum_item_tool.drill_bit_finish" */
  enum_item_tool_drill_bit_finish: Array<EnumItemToolDrillBitFinish>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_finish" */
  enum_item_tool_drill_bit_finish_aggregate: EnumItemToolDrillBitFinishAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_finish" using primary key columns */
  enum_item_tool_drill_bit_finish_by_pk?: Maybe<EnumItemToolDrillBitFinish>;
  /** fetch data from the table: "enum_item_tool.drill_bit_length_class" */
  enum_item_tool_drill_bit_length_class: Array<EnumItemToolDrillBitLengthClass>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_length_class" */
  enum_item_tool_drill_bit_length_class_aggregate: EnumItemToolDrillBitLengthClassAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_length_class" using primary key columns */
  enum_item_tool_drill_bit_length_class_by_pk?: Maybe<EnumItemToolDrillBitLengthClass>;
  /** fetch data from the table: "enum_item_tool.drill_bit_material" */
  enum_item_tool_drill_bit_material: Array<EnumItemToolDrillBitMaterial>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_material" */
  enum_item_tool_drill_bit_material_aggregate: EnumItemToolDrillBitMaterialAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_material" using primary key columns */
  enum_item_tool_drill_bit_material_by_pk?: Maybe<EnumItemToolDrillBitMaterial>;
  /** fetch data from the table: "enum_item_tool.drill_bit_point" */
  enum_item_tool_drill_bit_point: Array<EnumItemToolDrillBitPoint>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_point" */
  enum_item_tool_drill_bit_point_aggregate: EnumItemToolDrillBitPointAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_point" using primary key columns */
  enum_item_tool_drill_bit_point_by_pk?: Maybe<EnumItemToolDrillBitPoint>;
  /** fetch data from the table: "enum_item_tool.drill_bit_shank" */
  enum_item_tool_drill_bit_shank: Array<EnumItemToolDrillBitShank>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_shank" */
  enum_item_tool_drill_bit_shank_aggregate: EnumItemToolDrillBitShankAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_shank" using primary key columns */
  enum_item_tool_drill_bit_shank_by_pk?: Maybe<EnumItemToolDrillBitShank>;
  /** fetch data from the table: "enum_item_tool.drill_bit_style" */
  enum_item_tool_drill_bit_style: Array<EnumItemToolDrillBitStyle>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_style" */
  enum_item_tool_drill_bit_style_aggregate: EnumItemToolDrillBitStyleAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_style" using primary key columns */
  enum_item_tool_drill_bit_style_by_pk?: Maybe<EnumItemToolDrillBitStyle>;
  /** fetch data from the table: "enum.mapped_class" */
  enum_mapped_class: Array<EnumMappedClass>;
  /** fetch aggregated fields from the table: "enum.mapped_class" */
  enum_mapped_class_aggregate: EnumMappedClassAggregate;
  /** fetch data from the table: "enum.mapped_class" using primary key columns */
  enum_mapped_class_by_pk?: Maybe<EnumMappedClass>;
  /** fetch data from the table: "enum.payment_method_type" */
  enum_payment_method_type: Array<EnumPaymentMethodType>;
  /** fetch aggregated fields from the table: "enum.payment_method_type" */
  enum_payment_method_type_aggregate: EnumPaymentMethodTypeAggregate;
  /** fetch data from the table: "enum.payment_method_type" using primary key columns */
  enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>;
  /** fetch data from the table: "enum.space_type" */
  enum_space_type: Array<EnumSpaceType>;
  /** fetch aggregated fields from the table: "enum.space_type" */
  enum_space_type_aggregate: EnumSpaceTypeAggregate;
  /** fetch data from the table: "enum.space_type" using primary key columns */
  enum_space_type_by_pk?: Maybe<EnumSpaceType>;
  /** fetch data from the table: "enum.stock_event_type" */
  enum_stock_event_type: Array<EnumStockEventType>;
  /** fetch aggregated fields from the table: "enum.stock_event_type" */
  enum_stock_event_type_aggregate: EnumStockEventTypeAggregate;
  /** fetch data from the table: "enum.stock_event_type" using primary key columns */
  enum_stock_event_type_by_pk?: Maybe<EnumStockEventType>;
  /** fetch data from the table: "enum.unit" */
  enum_unit: Array<EnumUnit>;
  /** fetch aggregated fields from the table: "enum.unit" */
  enum_unit_aggregate: EnumUnitAggregate;
  /** fetch data from the table: "enum.unit" using primary key columns */
  enum_unit_by_pk?: Maybe<EnumUnit>;
  files?: Maybe<Array<Maybe<File>>>;
  /** fetch data from the table: "icon" */
  icon: Array<Icon>;
  /** fetch aggregated fields from the table: "icon" */
  icon_aggregate: IconAggregate;
  /** fetch data from the table: "icon" using primary key columns */
  icon_by_pk?: Maybe<Icon>;
  /** fetch data from the table: "icon_item_class_map" */
  icon_item_class_map: Array<IconItemClassMap>;
  /** fetch aggregated fields from the table: "icon_item_class_map" */
  icon_item_class_map_aggregate: IconItemClassMapAggregate;
  /** fetch data from the table: "icon_item_class_map" using primary key columns */
  icon_item_class_map_by_pk?: Maybe<IconItemClassMap>;
  /** fetch data from the table: "icon_item_map" */
  icon_item_map: Array<IconItemMap>;
  /** fetch aggregated fields from the table: "icon_item_map" */
  icon_item_map_aggregate: IconItemMapAggregate;
  /** fetch data from the table: "icon_item_map" using primary key columns */
  icon_item_map_by_pk?: Maybe<IconItemMap>;
  /** fetch data from the table: "icon_label_map" */
  icon_label_map: Array<IconLabelMap>;
  /** fetch aggregated fields from the table: "icon_label_map" */
  icon_label_map_aggregate: IconLabelMapAggregate;
  /** fetch data from the table: "icon_label_map" using primary key columns */
  icon_label_map_by_pk?: Maybe<IconLabelMap>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: ItemAggregate;
  /** fetch data from the table: "item.bundle" */
  item_bundle: Array<ItemBundle>;
  /** fetch aggregated fields from the table: "item.bundle" */
  item_bundle_aggregate: ItemBundleAggregate;
  /** fetch data from the table: "item.bundle" using primary key columns */
  item_bundle_by_pk?: Maybe<ItemBundle>;
  /** fetch data from the table: "item.bundle_member" */
  item_bundle_member: Array<ItemBundleMember>;
  /** fetch aggregated fields from the table: "item.bundle_member" */
  item_bundle_member_aggregate: ItemBundleMemberAggregate;
  /** fetch data from the table: "item.bundle_member" using primary key columns */
  item_bundle_member_by_pk?: Maybe<ItemBundleMember>;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "item.cable_conductive" */
  item_cable_conductive: Array<ItemCableConductive>;
  /** fetch aggregated fields from the table: "item.cable_conductive" */
  item_cable_conductive_aggregate: ItemCableConductiveAggregate;
  /** fetch data from the table: "item.cable_conductive" using primary key columns */
  item_cable_conductive_by_pk?: Maybe<ItemCableConductive>;
  /** fetch data from the table: "item.hardware_drill_bit" */
  item_hardware_drill_bit: Array<ItemHardwareDrillBit>;
  /** fetch aggregated fields from the table: "item.hardware_drill_bit" */
  item_hardware_drill_bit_aggregate: ItemHardwareDrillBitAggregate;
  /** fetch data from the table: "item.hardware_drill_bit" using primary key columns */
  item_hardware_drill_bit_by_pk?: Maybe<ItemHardwareDrillBit>;
  /** fetch data from the table: "item.hardware_fastener_insert" */
  item_hardware_fastener_insert: Array<ItemHardwareFastenerInsert>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_insert" */
  item_hardware_fastener_insert_aggregate: ItemHardwareFastenerInsertAggregate;
  /** fetch data from the table: "item.hardware_fastener_insert" using primary key columns */
  item_hardware_fastener_insert_by_pk?: Maybe<ItemHardwareFastenerInsert>;
  /** fetch data from the table: "item.hardware_fastener_nut" */
  item_hardware_fastener_nut: Array<ItemHardwareFastenerNut>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_nut" */
  item_hardware_fastener_nut_aggregate: ItemHardwareFastenerNutAggregate;
  /** fetch data from the table: "item.hardware_fastener_nut" using primary key columns */
  item_hardware_fastener_nut_by_pk?: Maybe<ItemHardwareFastenerNut>;
  /** fetch data from the table: "item.hardware_fastener_screw" */
  item_hardware_fastener_screw: Array<ItemHardwareFastenerScrew>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_screw" */
  item_hardware_fastener_screw_aggregate: ItemHardwareFastenerScrewAggregate;
  /** fetch data from the table: "item.hardware_fastener_screw" using primary key columns */
  item_hardware_fastener_screw_by_pk?: Maybe<ItemHardwareFastenerScrew>;
  /** fetch data from the table: "item.hardware_fastener_screw_machine" */
  item_hardware_fastener_screw_machine: Array<ItemHardwareFastenerScrewMachine>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_screw_machine" */
  item_hardware_fastener_screw_machine_aggregate: ItemHardwareFastenerScrewMachineAggregate;
  /** fetch data from the table: "item.hardware_fastener_screw_machine" using primary key columns */
  item_hardware_fastener_screw_machine_by_pk?: Maybe<ItemHardwareFastenerScrewMachine>;
  /** fetch data from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff: Array<ItemHardwareFastenerStandoff>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff_aggregate: ItemHardwareFastenerStandoffAggregate;
  /** fetch data from the table: "item.hardware_fastener_standoff" using primary key columns */
  item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
  /** fetch data from the table: "item.hardware_fastener_washer" */
  item_hardware_fastener_washer: Array<ItemHardwareFastenerWasher>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_washer" */
  item_hardware_fastener_washer_aggregate: ItemHardwareFastenerWasherAggregate;
  /** fetch data from the table: "item.hardware_fastener_washer" using primary key columns */
  item_hardware_fastener_washer_by_pk?: Maybe<ItemHardwareFastenerWasher>;
  /** fetch data from the table: "item_variant" */
  item_variant: Array<ItemVariant>;
  /** fetch aggregated fields from the table: "item_variant" */
  item_variant_aggregate: ItemVariantAggregate;
  /** fetch data from the table: "label" */
  label: Array<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: LabelAggregate;
  /** fetch data from the table: "label" using primary key columns */
  label_by_pk?: Maybe<Label>;
  /** fetch data from the table: "label_item_map" */
  label_item_map: Array<LabelItemMap>;
  /** fetch aggregated fields from the table: "label_item_map" */
  label_item_map_aggregate: LabelItemMapAggregate;
  /** fetch data from the table: "label_item_map" using primary key columns */
  label_item_map_by_pk?: Maybe<LabelItemMap>;
  /** fetch data from the table: "label_template_map" */
  label_template_map: Array<LabelTemplateMap>;
  /** fetch aggregated fields from the table: "label_template_map" */
  label_template_map_aggregate: LabelTemplateMapAggregate;
  /** fetch data from the table: "label_template_map" using primary key columns */
  label_template_map_by_pk?: Maybe<LabelTemplateMap>;
  /** fetch data from the table: "manufacturer" */
  manufacturer: Array<Manufacturer>;
  /** fetch aggregated fields from the table: "manufacturer" */
  manufacturer_aggregate: ManufacturerAggregate;
  /** fetch data from the table: "manufacturer" using primary key columns */
  manufacturer_by_pk?: Maybe<Manufacturer>;
  /** fetch data from the table: "manufacturer_item" */
  manufacturer_item: Array<ManufacturerItem>;
  /** fetch aggregated fields from the table: "manufacturer_item" */
  manufacturer_item_aggregate: ManufacturerItemAggregate;
  /** fetch data from the table: "manufacturer_item" using primary key columns */
  manufacturer_item_by_pk?: Maybe<ManufacturerItem>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "order_item" */
  order_item: Array<OrderItem>;
  /** fetch aggregated fields from the table: "order_item" */
  order_item_aggregate: OrderItemAggregate;
  /** fetch data from the table: "order_item" using primary key columns */
  order_item_by_pk?: Maybe<OrderItem>;
  /** fetch data from the table: "payment_method" */
  payment_method: Array<PaymentMethod>;
  /** fetch aggregated fields from the table: "payment_method" */
  payment_method_aggregate: PaymentMethodAggregate;
  /** fetch data from the table: "payment_method" using primary key columns */
  payment_method_by_pk?: Maybe<PaymentMethod>;
  /** fetch data from the table: "property.item_hardware_fastener_bolt_strength" */
  property_item_hardware_fastener_bolt_strength: Array<PropertyItemHardwareFastenerBoltStrength>;
  /** fetch aggregated fields from the table: "property.item_hardware_fastener_bolt_strength" */
  property_item_hardware_fastener_bolt_strength_aggregate: PropertyItemHardwareFastenerBoltStrengthAggregate;
  /** fetch data from the table: "property.item_hardware_fastener_bolt_strength" using primary key columns */
  property_item_hardware_fastener_bolt_strength_by_pk?: Maybe<PropertyItemHardwareFastenerBoltStrength>;
  /** fetch data from the table: "property_item_hardware_fastener_screw_machine.diameter" */
  property_item_hardware_fastener_screw_machine_diameter: Array<PropertyItemHardwareFastenerScrewMachineDiameter>;
  /** fetch aggregated fields from the table: "property_item_hardware_fastener_screw_machine.diameter" */
  property_item_hardware_fastener_screw_machine_diameter_aggregate: PropertyItemHardwareFastenerScrewMachineDiameterAggregate;
  /** fetch data from the table: "property_item_hardware_fastener_screw_machine.diameter" using primary key columns */
  property_item_hardware_fastener_screw_machine_diameter_by_pk?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameter>;
  /** execute function "search" which returns "search_data" */
  search: Array<SearchData>;
  /** execute function "search" and query aggregates on result of table type "search_data" */
  search_aggregate: SearchDataAggregate;
  /** fetch data from the table: "search_data" */
  search_data: Array<SearchData>;
  /** fetch aggregated fields from the table: "search_data" */
  search_data_aggregate: SearchDataAggregate;
  /** fetch data from the table: "search_data" using primary key columns */
  search_data_by_pk?: Maybe<SearchData>;
  /** execute function "search_item" which returns "item" */
  search_item: Array<Item>;
  /** execute function "search_item" and query aggregates on result of table type "item" */
  search_item_aggregate: ItemAggregate;
  /** execute function "search_item_variant" which returns "item_variant" */
  search_item_variant: Array<ItemVariant>;
  /** execute function "search_item_variant" and query aggregates on result of table type "item_variant" */
  search_item_variant_aggregate: ItemVariantAggregate;
  /** fetch data from the table: "shipment" */
  shipment: Array<Shipment>;
  /** fetch aggregated fields from the table: "shipment" */
  shipment_aggregate: ShipmentAggregate;
  /** fetch data from the table: "shipment" using primary key columns */
  shipment_by_pk?: Maybe<Shipment>;
  /** fetch data from the table: "stock" */
  stock: Array<Stock>;
  /** fetch aggregated fields from the table: "stock" */
  stock_aggregate: StockAggregate;
  /** fetch data from the table: "stock" using primary key columns */
  stock_by_pk?: Maybe<Stock>;
  /** fetch data from the table: "storage" */
  storage: Array<Storage>;
  /** fetch aggregated fields from the table: "storage" */
  storage_aggregate: StorageAggregate;
  /** fetch data from the table: "storage" using primary key columns */
  storage_by_pk?: Maybe<Storage>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: TagAggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "vendor" */
  vendor: Array<Vendor>;
  /** fetch aggregated fields from the table: "vendor" */
  vendor_aggregate: VendorAggregate;
  /** fetch data from the table: "vendor" using primary key columns */
  vendor_by_pk?: Maybe<Vendor>;
  /** fetch data from the table: "vendor_item" */
  vendor_item: Array<VendorItem>;
  /** fetch aggregated fields from the table: "vendor_item" */
  vendor_item_aggregate: VendorItemAggregate;
  /** fetch data from the table: "vendor_item" using primary key columns */
  vendor_item_by_pk?: Maybe<VendorItem>;
};


/** query root */
export type QueryRootEnumItemCableConnectorArgs = {
  distinct_on?: Maybe<Array<EnumItemCableConnectorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemCableConnectorOrderBy>>;
  where?: Maybe<EnumItemCableConnectorBoolExp>;
};


/** query root */
export type QueryRootEnumItemCableConnectorAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemCableConnectorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemCableConnectorOrderBy>>;
  where?: Maybe<EnumItemCableConnectorBoolExp>;
};


/** query root */
export type QueryRootEnumItemCableConnectorByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemClassArgs = {
  distinct_on?: Maybe<Array<EnumItemClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemClassOrderBy>>;
  where?: Maybe<EnumItemClassBoolExp>;
};


/** query root */
export type QueryRootEnumItemClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemClassOrderBy>>;
  where?: Maybe<EnumItemClassBoolExp>;
};


/** query root */
export type QueryRootEnumItemClassByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHandednessArgs = {
  distinct_on?: Maybe<Array<EnumItemHandednessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHandednessOrderBy>>;
  where?: Maybe<EnumItemHandednessBoolExp>;
};


/** query root */
export type QueryRootEnumItemHandednessAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHandednessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHandednessOrderBy>>;
  where?: Maybe<EnumItemHandednessBoolExp>;
};


/** query root */
export type QueryRootEnumItemHandednessByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerDriveArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerDriveBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerDriveAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerDriveBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerDriveByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutFormArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutFormBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutFormAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutFormBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutFormByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutStrengthArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutStrengthAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutStrengthByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutThreadFitArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutThreadFitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerNutThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewHardnessArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewHardnessAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewHardnessByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewHeadArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHeadOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewHeadAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHeadOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewHeadByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachinePointArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachinePointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachinePointByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachineStrengthArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachineStrengthAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachineStrengthByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachineThreadFitArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachineThreadFitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerScrewMachineThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerStandoffShapeArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerStandoffShapeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerStandoffShapeByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerThreadLabelArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadLabelOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerThreadLabelAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadLabelOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerThreadLabelByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerThreadStandardArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadStandardSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadStandardOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerThreadStandardAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadStandardSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadStandardOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerThreadStandardByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherFormArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherFormBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherFormAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherFormBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherFormByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherMechanismArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherMechanismAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherMechanismByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherPatternArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherPatternSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherPatternOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherPatternAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherPatternSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherPatternOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFastenerWasherPatternByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFinishOrderBy>>;
  where?: Maybe<EnumItemHardwareFinishBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFinishOrderBy>>;
  where?: Maybe<EnumItemHardwareFinishBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareFinishByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemHardwareUseMaterialArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareUseMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareUseMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareUseMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareUseMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareUseMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumItemHardwareUseMaterialByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemToolDrillBitFinishArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitFinishOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitFinishBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitFinishOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitFinishBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitFinishByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemToolDrillBitLengthClassArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitLengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitLengthClassOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitLengthClassBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitLengthClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitLengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitLengthClassOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitLengthClassBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitLengthClassByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemToolDrillBitMaterialArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitMaterialOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitMaterialOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitMaterialByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemToolDrillBitPointArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitPointOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitPointBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitPointOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitPointBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitPointByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemToolDrillBitShankArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitShankSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitShankOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitShankBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitShankAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitShankSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitShankOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitShankBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitShankByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumItemToolDrillBitStyleArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitStyleOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitStyleBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitStyleAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitStyleOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitStyleBoolExp>;
};


/** query root */
export type QueryRootEnumItemToolDrillBitStyleByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumMappedClassArgs = {
  distinct_on?: Maybe<Array<EnumMappedClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumMappedClassOrderBy>>;
  where?: Maybe<EnumMappedClassBoolExp>;
};


/** query root */
export type QueryRootEnumMappedClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumMappedClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumMappedClassOrderBy>>;
  where?: Maybe<EnumMappedClassBoolExp>;
};


/** query root */
export type QueryRootEnumMappedClassByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumPaymentMethodTypeArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>;
  where?: Maybe<EnumPaymentMethodTypeBoolExp>;
};


/** query root */
export type QueryRootEnumPaymentMethodTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>;
  where?: Maybe<EnumPaymentMethodTypeBoolExp>;
};


/** query root */
export type QueryRootEnumPaymentMethodTypeByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumSpaceTypeArgs = {
  distinct_on?: Maybe<Array<EnumSpaceTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumSpaceTypeOrderBy>>;
  where?: Maybe<EnumSpaceTypeBoolExp>;
};


/** query root */
export type QueryRootEnumSpaceTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumSpaceTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumSpaceTypeOrderBy>>;
  where?: Maybe<EnumSpaceTypeBoolExp>;
};


/** query root */
export type QueryRootEnumSpaceTypeByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumStockEventTypeArgs = {
  distinct_on?: Maybe<Array<EnumStockEventTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumStockEventTypeOrderBy>>;
  where?: Maybe<EnumStockEventTypeBoolExp>;
};


/** query root */
export type QueryRootEnumStockEventTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumStockEventTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumStockEventTypeOrderBy>>;
  where?: Maybe<EnumStockEventTypeBoolExp>;
};


/** query root */
export type QueryRootEnumStockEventTypeByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumUnitArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumUnitOrderBy>>;
  where?: Maybe<EnumUnitBoolExp>;
};


/** query root */
export type QueryRootEnumUnitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumUnitOrderBy>>;
  where?: Maybe<EnumUnitBoolExp>;
};


/** query root */
export type QueryRootEnumUnitByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootIconArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconOrderBy>>;
  where?: Maybe<IconBoolExp>;
};


/** query root */
export type QueryRootIconAggregateArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconOrderBy>>;
  where?: Maybe<IconBoolExp>;
};


/** query root */
export type QueryRootIconByPkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootIconItemClassMapArgs = {
  distinct_on?: Maybe<Array<IconItemClassMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemClassMapOrderBy>>;
  where?: Maybe<IconItemClassMapBoolExp>;
};


/** query root */
export type QueryRootIconItemClassMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemClassMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemClassMapOrderBy>>;
  where?: Maybe<IconItemClassMapBoolExp>;
};


/** query root */
export type QueryRootIconItemClassMapByPkArgs = {
  class: EnumItemClassEnum;
  icon_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/** query root */
export type QueryRootIconItemMapArgs = {
  distinct_on?: Maybe<Array<IconItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemMapOrderBy>>;
  where?: Maybe<IconItemMapBoolExp>;
};


/** query root */
export type QueryRootIconItemMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemMapOrderBy>>;
  where?: Maybe<IconItemMapBoolExp>;
};


/** query root */
export type QueryRootIconItemMapByPkArgs = {
  icon_id: Scalars['uuid'];
  item_id: Scalars['Int'];
};


/** query root */
export type QueryRootIconLabelMapArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconLabelMapOrderBy>>;
  where?: Maybe<IconLabelMapBoolExp>;
};


/** query root */
export type QueryRootIconLabelMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconLabelMapOrderBy>>;
  where?: Maybe<IconLabelMapBoolExp>;
};


/** query root */
export type QueryRootIconLabelMapByPkArgs = {
  icon_id: Scalars['uuid'];
  label_id: Scalars['uuid'];
};


/** query root */
export type QueryRootItemArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** query root */
export type QueryRootItemAggregateArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** query root */
export type QueryRootItemBundleArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleOrderBy>>;
  where?: Maybe<ItemBundleBoolExp>;
};


/** query root */
export type QueryRootItemBundleAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleOrderBy>>;
  where?: Maybe<ItemBundleBoolExp>;
};


/** query root */
export type QueryRootItemBundleByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemBundleMemberArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};


/** query root */
export type QueryRootItemBundleMemberAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};


/** query root */
export type QueryRootItemBundleMemberByPkArgs = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};


/** query root */
export type QueryRootItemByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemCableConductiveArgs = {
  distinct_on?: Maybe<Array<ItemCableConductiveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemCableConductiveOrderBy>>;
  where?: Maybe<ItemCableConductiveBoolExp>;
};


/** query root */
export type QueryRootItemCableConductiveAggregateArgs = {
  distinct_on?: Maybe<Array<ItemCableConductiveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemCableConductiveOrderBy>>;
  where?: Maybe<ItemCableConductiveBoolExp>;
};


/** query root */
export type QueryRootItemCableConductiveByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareDrillBitArgs = {
  distinct_on?: Maybe<Array<ItemHardwareDrillBitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareDrillBitOrderBy>>;
  where?: Maybe<ItemHardwareDrillBitBoolExp>;
};


/** query root */
export type QueryRootItemHardwareDrillBitAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareDrillBitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareDrillBitOrderBy>>;
  where?: Maybe<ItemHardwareDrillBitBoolExp>;
};


/** query root */
export type QueryRootItemHardwareDrillBitByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareFastenerInsertArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerInsertSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerInsertOrderBy>>;
  where?: Maybe<ItemHardwareFastenerInsertBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerInsertAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerInsertSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerInsertOrderBy>>;
  where?: Maybe<ItemHardwareFastenerInsertBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerInsertByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareFastenerNutArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerNutSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerNutOrderBy>>;
  where?: Maybe<ItemHardwareFastenerNutBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerNutSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerNutOrderBy>>;
  where?: Maybe<ItemHardwareFastenerNutBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerNutByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareFastenerScrewArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerScrewAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerScrewByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareFastenerScrewMachineArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewMachineSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewMachineOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewMachineBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerScrewMachineAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewMachineSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewMachineOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewMachineBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerScrewMachineByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareFastenerStandoffArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerStandoffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerStandoffOrderBy>>;
  where?: Maybe<ItemHardwareFastenerStandoffBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerStandoffAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerStandoffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerStandoffOrderBy>>;
  where?: Maybe<ItemHardwareFastenerStandoffBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerStandoffByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareFastenerWasherArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerWasherSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerWasherOrderBy>>;
  where?: Maybe<ItemHardwareFastenerWasherBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerWasherAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerWasherSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerWasherOrderBy>>;
  where?: Maybe<ItemHardwareFastenerWasherBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerWasherByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemVariantArgs = {
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** query root */
export type QueryRootItemVariantAggregateArgs = {
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** query root */
export type QueryRootLabelArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** query root */
export type QueryRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** query root */
export type QueryRootLabelByPkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootLabelItemMapArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelItemMapOrderBy>>;
  where?: Maybe<LabelItemMapBoolExp>;
};


/** query root */
export type QueryRootLabelItemMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelItemMapOrderBy>>;
  where?: Maybe<LabelItemMapBoolExp>;
};


/** query root */
export type QueryRootLabelItemMapByPkArgs = {
  item_id: Scalars['Int'];
  label_id: Scalars['uuid'];
};


/** query root */
export type QueryRootLabelTemplateMapArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/** query root */
export type QueryRootLabelTemplateMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/** query root */
export type QueryRootLabelTemplateMapByPkArgs = {
  item_class: EnumItemClassEnum;
  label_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/** query root */
export type QueryRootManufacturerArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerOrderBy>>;
  where?: Maybe<ManufacturerBoolExp>;
};


/** query root */
export type QueryRootManufacturerAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerOrderBy>>;
  where?: Maybe<ManufacturerBoolExp>;
};


/** query root */
export type QueryRootManufacturerByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootManufacturerItemArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};


/** query root */
export type QueryRootManufacturerItemAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};


/** query root */
export type QueryRootManufacturerItemByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootOrderArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderOrderBy>>;
  where?: Maybe<OrderBoolExp>;
};


/** query root */
export type QueryRootOrderAggregateArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderOrderBy>>;
  where?: Maybe<OrderBoolExp>;
};


/** query root */
export type QueryRootOrderByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootOrderItemArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** query root */
export type QueryRootOrderItemAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** query root */
export type QueryRootOrderItemByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPaymentMethodArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentMethodOrderBy>>;
  where?: Maybe<PaymentMethodBoolExp>;
};


/** query root */
export type QueryRootPaymentMethodAggregateArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentMethodOrderBy>>;
  where?: Maybe<PaymentMethodBoolExp>;
};


/** query root */
export type QueryRootPaymentMethodByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPropertyItemHardwareFastenerBoltStrengthArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>;
};


/** query root */
export type QueryRootPropertyItemHardwareFastenerBoltStrengthAggregateArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>;
};


/** query root */
export type QueryRootPropertyItemHardwareFastenerBoltStrengthByPkArgs = {
  diameter: Scalars['numeric'];
  strength_grade: Scalars['String'];
  thread_pitch: Scalars['numeric'];
};


/** query root */
export type QueryRootPropertyItemHardwareFastenerScrewMachineDiameterArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>;
};


/** query root */
export type QueryRootPropertyItemHardwareFastenerScrewMachineDiameterAggregateArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>;
};


/** query root */
export type QueryRootPropertyItemHardwareFastenerScrewMachineDiameterByPkArgs = {
  diameter_label: Scalars['String'];
  fit: EnumItemHardwareFastenerScrewMachineThreadFitEnum;
  pitch_label: Scalars['numeric'];
};


/** query root */
export type QueryRootSearchArgs = {
  args: SearchArgs;
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** query root */
export type QueryRootSearchAggregateArgs = {
  args: SearchArgs;
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** query root */
export type QueryRootSearchDataArgs = {
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** query root */
export type QueryRootSearchDataAggregateArgs = {
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** query root */
export type QueryRootSearchDataByPkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type QueryRootSearchItemArgs = {
  args: SearchItemArgs;
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** query root */
export type QueryRootSearchItemAggregateArgs = {
  args: SearchItemArgs;
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** query root */
export type QueryRootSearchItemVariantArgs = {
  args: SearchItemVariantArgs;
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** query root */
export type QueryRootSearchItemVariantAggregateArgs = {
  args: SearchItemVariantArgs;
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** query root */
export type QueryRootShipmentArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShipmentOrderBy>>;
  where?: Maybe<ShipmentBoolExp>;
};


/** query root */
export type QueryRootShipmentAggregateArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShipmentOrderBy>>;
  where?: Maybe<ShipmentBoolExp>;
};


/** query root */
export type QueryRootShipmentByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootStockArgs = {
  distinct_on?: Maybe<Array<StockSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StockOrderBy>>;
  where?: Maybe<StockBoolExp>;
};


/** query root */
export type QueryRootStockAggregateArgs = {
  distinct_on?: Maybe<Array<StockSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StockOrderBy>>;
  where?: Maybe<StockBoolExp>;
};


/** query root */
export type QueryRootStockByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootStorageArgs = {
  distinct_on?: Maybe<Array<StorageSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorageOrderBy>>;
  where?: Maybe<StorageBoolExp>;
};


/** query root */
export type QueryRootStorageAggregateArgs = {
  distinct_on?: Maybe<Array<StorageSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorageOrderBy>>;
  where?: Maybe<StorageBoolExp>;
};


/** query root */
export type QueryRootStorageByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootTagArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TagOrderBy>>;
  where?: Maybe<TagBoolExp>;
};


/** query root */
export type QueryRootTagAggregateArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TagOrderBy>>;
  where?: Maybe<TagBoolExp>;
};


/** query root */
export type QueryRootTagByPkArgs = {
  text: Scalars['String'];
};


/** query root */
export type QueryRootVendorArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorOrderBy>>;
  where?: Maybe<VendorBoolExp>;
};


/** query root */
export type QueryRootVendorAggregateArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorOrderBy>>;
  where?: Maybe<VendorBoolExp>;
};


/** query root */
export type QueryRootVendorByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootVendorItemArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};


/** query root */
export type QueryRootVendorItemAggregateArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};


/** query root */
export type QueryRootVendorItemByPkArgs = {
  id: Scalars['Int'];
};

export type SearchArgs = {
  query_text?: Maybe<Scalars['String']>;
  return_limit?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "search_data" */
export type SearchData = {
  __typename?: 'search_data';
  class: EnumMappedClassEnum;
  id: Scalars['bigint'];
  metadata?: Maybe<Scalars['jsonb']>;
  search_vector?: Maybe<Scalars['tsvector']>;
  /** Searchable text */
  text?: Maybe<Scalars['String']>;
};


/** columns and relationships of "search_data" */
export type SearchDataMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "search_data" */
export type SearchDataAggregate = {
  __typename?: 'search_data_aggregate';
  aggregate?: Maybe<SearchDataAggregateFields>;
  nodes: Array<SearchData>;
};

/** aggregate fields of "search_data" */
export type SearchDataAggregateFields = {
  __typename?: 'search_data_aggregate_fields';
  avg?: Maybe<SearchDataAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<SearchDataMaxFields>;
  min?: Maybe<SearchDataMinFields>;
  stddev?: Maybe<SearchDataStddevFields>;
  stddev_pop?: Maybe<SearchDataStddevPopFields>;
  stddev_samp?: Maybe<SearchDataStddevSampFields>;
  sum?: Maybe<SearchDataSumFields>;
  var_pop?: Maybe<SearchDataVarPopFields>;
  var_samp?: Maybe<SearchDataVarSampFields>;
  variance?: Maybe<SearchDataVarianceFields>;
};


/** aggregate fields of "search_data" */
export type SearchDataAggregateFieldsCountArgs = {
  columns?: Maybe<Array<SearchDataSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "search_data" */
export type SearchDataAggregateOrderBy = {
  avg?: Maybe<SearchDataAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<SearchDataMaxOrderBy>;
  min?: Maybe<SearchDataMinOrderBy>;
  stddev?: Maybe<SearchDataStddevOrderBy>;
  stddev_pop?: Maybe<SearchDataStddevPopOrderBy>;
  stddev_samp?: Maybe<SearchDataStddevSampOrderBy>;
  sum?: Maybe<SearchDataSumOrderBy>;
  var_pop?: Maybe<SearchDataVarPopOrderBy>;
  var_samp?: Maybe<SearchDataVarSampOrderBy>;
  variance?: Maybe<SearchDataVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type SearchDataAppendInput = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "search_data" */
export type SearchDataArrRelInsertInput = {
  data: Array<SearchDataInsertInput>;
  on_conflict?: Maybe<SearchDataOnConflict>;
};

/** aggregate avg on columns */
export type SearchDataAvgFields = {
  __typename?: 'search_data_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "search_data" */
export type SearchDataAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "search_data". All fields are combined with a logical 'AND'. */
export type SearchDataBoolExp = {
  _and?: Maybe<Array<Maybe<SearchDataBoolExp>>>;
  _not?: Maybe<SearchDataBoolExp>;
  _or?: Maybe<Array<Maybe<SearchDataBoolExp>>>;
  class?: Maybe<EnumMappedClassEnumComparisonExp>;
  id?: Maybe<BigintComparisonExp>;
  metadata?: Maybe<JsonbComparisonExp>;
  search_vector?: Maybe<TsvectorComparisonExp>;
  text?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "search_data" */
export enum SearchDataConstraint {
  /** unique or primary key constraint */
  search_pkey = 'search_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type SearchDataDeleteAtPathInput = {
  metadata?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type SearchDataDeleteElemInput = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type SearchDataDeleteKeyInput = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "search_data" */
export type SearchDataIncInput = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "search_data" */
export type SearchDataInsertInput = {
  class?: Maybe<EnumMappedClassEnum>;
  id?: Maybe<Scalars['bigint']>;
  metadata?: Maybe<Scalars['jsonb']>;
  search_vector?: Maybe<Scalars['tsvector']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SearchDataMaxFields = {
  __typename?: 'search_data_max_fields';
  id?: Maybe<Scalars['bigint']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "search_data" */
export type SearchDataMaxOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type SearchDataMinFields = {
  __typename?: 'search_data_min_fields';
  id?: Maybe<Scalars['bigint']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "search_data" */
export type SearchDataMinOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
};

/** response of any mutation on the table "search_data" */
export type SearchDataMutationResponse = {
  __typename?: 'search_data_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<SearchData>;
};

/** input type for inserting object relation for remote table "search_data" */
export type SearchDataObjRelInsertInput = {
  data: SearchDataInsertInput;
  on_conflict?: Maybe<SearchDataOnConflict>;
};

/** on conflict condition type for table "search_data" */
export type SearchDataOnConflict = {
  constraint: SearchDataConstraint;
  update_columns: Array<SearchDataUpdateColumn>;
  where?: Maybe<SearchDataBoolExp>;
};

/** ordering options when selecting data from "search_data" */
export type SearchDataOrderBy = {
  class?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  metadata?: Maybe<OrderBy>;
  search_vector?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
};

/** primary key columns input for table: "search_data" */
export type SearchDataPkColumnsInput = {
  id: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type SearchDataPrependInput = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "search_data" */
export enum SearchDataSelectColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  metadata = 'metadata',
  /** column name */
  search_vector = 'search_vector',
  /** column name */
  text = 'text'
}

/** input type for updating data in table "search_data" */
export type SearchDataSetInput = {
  class?: Maybe<EnumMappedClassEnum>;
  id?: Maybe<Scalars['bigint']>;
  metadata?: Maybe<Scalars['jsonb']>;
  search_vector?: Maybe<Scalars['tsvector']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type SearchDataStddevFields = {
  __typename?: 'search_data_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "search_data" */
export type SearchDataStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type SearchDataStddevPopFields = {
  __typename?: 'search_data_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "search_data" */
export type SearchDataStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type SearchDataStddevSampFields = {
  __typename?: 'search_data_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "search_data" */
export type SearchDataStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type SearchDataSumFields = {
  __typename?: 'search_data_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "search_data" */
export type SearchDataSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "search_data" */
export enum SearchDataUpdateColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  metadata = 'metadata',
  /** column name */
  search_vector = 'search_vector',
  /** column name */
  text = 'text'
}

/** aggregate var_pop on columns */
export type SearchDataVarPopFields = {
  __typename?: 'search_data_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "search_data" */
export type SearchDataVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type SearchDataVarSampFields = {
  __typename?: 'search_data_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "search_data" */
export type SearchDataVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type SearchDataVarianceFields = {
  __typename?: 'search_data_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "search_data" */
export type SearchDataVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

export type SearchItemArgs = {
  query_text?: Maybe<Scalars['String']>;
  return_limit?: Maybe<Scalars['Int']>;
};

export type SearchItemVariantArgs = {
  query_text?: Maybe<Scalars['String']>;
  return_limit?: Maybe<Scalars['Int']>;
};

/**
 * shipment or invoices, multiple allowed per order
 *
 *
 * columns and relationships of "shipment"
 */
export type Shipment = {
  __typename?: 'shipment';
  /** An object relationship */
  carrier: Vendor;
  carrier_vendor_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  order?: Maybe<Order>;
  /** An array relationship */
  orderItems: Array<OrderItem>;
  /** An aggregated array relationship */
  orderItems_aggregate: OrderItemAggregate;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  tracking_id: Scalars['String'];
  vendor_invoice_id?: Maybe<Scalars['String']>;
};


/**
 * shipment or invoices, multiple allowed per order
 *
 *
 * columns and relationships of "shipment"
 */
export type ShipmentOrderItemsArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/**
 * shipment or invoices, multiple allowed per order
 *
 *
 * columns and relationships of "shipment"
 */
export type ShipmentOrderItemsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};

/** aggregated selection of "shipment" */
export type ShipmentAggregate = {
  __typename?: 'shipment_aggregate';
  aggregate?: Maybe<ShipmentAggregateFields>;
  nodes: Array<Shipment>;
};

/** aggregate fields of "shipment" */
export type ShipmentAggregateFields = {
  __typename?: 'shipment_aggregate_fields';
  avg?: Maybe<ShipmentAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ShipmentMaxFields>;
  min?: Maybe<ShipmentMinFields>;
  stddev?: Maybe<ShipmentStddevFields>;
  stddev_pop?: Maybe<ShipmentStddevPopFields>;
  stddev_samp?: Maybe<ShipmentStddevSampFields>;
  sum?: Maybe<ShipmentSumFields>;
  var_pop?: Maybe<ShipmentVarPopFields>;
  var_samp?: Maybe<ShipmentVarSampFields>;
  variance?: Maybe<ShipmentVarianceFields>;
};


/** aggregate fields of "shipment" */
export type ShipmentAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ShipmentSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shipment" */
export type ShipmentAggregateOrderBy = {
  avg?: Maybe<ShipmentAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ShipmentMaxOrderBy>;
  min?: Maybe<ShipmentMinOrderBy>;
  stddev?: Maybe<ShipmentStddevOrderBy>;
  stddev_pop?: Maybe<ShipmentStddevPopOrderBy>;
  stddev_samp?: Maybe<ShipmentStddevSampOrderBy>;
  sum?: Maybe<ShipmentSumOrderBy>;
  var_pop?: Maybe<ShipmentVarPopOrderBy>;
  var_samp?: Maybe<ShipmentVarSampOrderBy>;
  variance?: Maybe<ShipmentVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "shipment" */
export type ShipmentArrRelInsertInput = {
  data: Array<ShipmentInsertInput>;
  on_conflict?: Maybe<ShipmentOnConflict>;
};

/** aggregate avg on columns */
export type ShipmentAvgFields = {
  __typename?: 'shipment_avg_fields';
  carrier_vendor_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shipment" */
export type ShipmentAvgOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "shipment". All fields are combined with a logical 'AND'. */
export type ShipmentBoolExp = {
  _and?: Maybe<Array<Maybe<ShipmentBoolExp>>>;
  _not?: Maybe<ShipmentBoolExp>;
  _or?: Maybe<Array<Maybe<ShipmentBoolExp>>>;
  carrier?: Maybe<VendorBoolExp>;
  carrier_vendor_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  order?: Maybe<OrderBoolExp>;
  orderItems?: Maybe<OrderItemBoolExp>;
  order_id?: Maybe<IntComparisonExp>;
  received_date?: Maybe<DateComparisonExp>;
  shipped_date?: Maybe<DateComparisonExp>;
  tracking_id?: Maybe<StringComparisonExp>;
  vendor_invoice_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "shipment" */
export enum ShipmentConstraint {
  /** unique or primary key constraint */
  shipment_pkey = 'shipment_pkey',
  /** unique or primary key constraint */
  shipment_tracking_id_key = 'shipment_tracking_id_key'
}

/** input type for incrementing integer column in table "shipment" */
export type ShipmentIncInput = {
  carrier_vendor_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "shipment" */
export type ShipmentInsertInput = {
  carrier?: Maybe<VendorObjRelInsertInput>;
  carrier_vendor_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderObjRelInsertInput>;
  orderItems?: Maybe<OrderItemArrRelInsertInput>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ShipmentMaxFields = {
  __typename?: 'shipment_max_fields';
  carrier_vendor_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "shipment" */
export type ShipmentMaxOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  received_date?: Maybe<OrderBy>;
  shipped_date?: Maybe<OrderBy>;
  tracking_id?: Maybe<OrderBy>;
  vendor_invoice_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ShipmentMinFields = {
  __typename?: 'shipment_min_fields';
  carrier_vendor_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "shipment" */
export type ShipmentMinOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  received_date?: Maybe<OrderBy>;
  shipped_date?: Maybe<OrderBy>;
  tracking_id?: Maybe<OrderBy>;
  vendor_invoice_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "shipment" */
export type ShipmentMutationResponse = {
  __typename?: 'shipment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Shipment>;
};

/** input type for inserting object relation for remote table "shipment" */
export type ShipmentObjRelInsertInput = {
  data: ShipmentInsertInput;
  on_conflict?: Maybe<ShipmentOnConflict>;
};

/** on conflict condition type for table "shipment" */
export type ShipmentOnConflict = {
  constraint: ShipmentConstraint;
  update_columns: Array<ShipmentUpdateColumn>;
  where?: Maybe<ShipmentBoolExp>;
};

/** ordering options when selecting data from "shipment" */
export type ShipmentOrderBy = {
  carrier?: Maybe<VendorOrderBy>;
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order?: Maybe<OrderOrderBy>;
  orderItems_aggregate?: Maybe<OrderItemAggregateOrderBy>;
  order_id?: Maybe<OrderBy>;
  received_date?: Maybe<OrderBy>;
  shipped_date?: Maybe<OrderBy>;
  tracking_id?: Maybe<OrderBy>;
  vendor_invoice_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "shipment" */
export type ShipmentPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "shipment" */
export enum ShipmentSelectColumn {
  /** column name */
  carrier_vendor_id = 'carrier_vendor_id',
  /** column name */
  id = 'id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  received_date = 'received_date',
  /** column name */
  shipped_date = 'shipped_date',
  /** column name */
  tracking_id = 'tracking_id',
  /** column name */
  vendor_invoice_id = 'vendor_invoice_id'
}

/** input type for updating data in table "shipment" */
export type ShipmentSetInput = {
  carrier_vendor_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ShipmentStddevFields = {
  __typename?: 'shipment_stddev_fields';
  carrier_vendor_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shipment" */
export type ShipmentStddevOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ShipmentStddevPopFields = {
  __typename?: 'shipment_stddev_pop_fields';
  carrier_vendor_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shipment" */
export type ShipmentStddevPopOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ShipmentStddevSampFields = {
  __typename?: 'shipment_stddev_samp_fields';
  carrier_vendor_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shipment" */
export type ShipmentStddevSampOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ShipmentSumFields = {
  __typename?: 'shipment_sum_fields';
  carrier_vendor_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "shipment" */
export type ShipmentSumOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** update columns of table "shipment" */
export enum ShipmentUpdateColumn {
  /** column name */
  carrier_vendor_id = 'carrier_vendor_id',
  /** column name */
  id = 'id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  received_date = 'received_date',
  /** column name */
  shipped_date = 'shipped_date',
  /** column name */
  tracking_id = 'tracking_id',
  /** column name */
  vendor_invoice_id = 'vendor_invoice_id'
}

/** aggregate var_pop on columns */
export type ShipmentVarPopFields = {
  __typename?: 'shipment_var_pop_fields';
  carrier_vendor_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shipment" */
export type ShipmentVarPopOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ShipmentVarSampFields = {
  __typename?: 'shipment_var_samp_fields';
  carrier_vendor_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shipment" */
export type ShipmentVarSampOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ShipmentVarianceFields = {
  __typename?: 'shipment_variance_fields';
  carrier_vendor_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shipment" */
export type ShipmentVarianceOrderBy = {
  carrier_vendor_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};


/** expression to compare columns of type smallint. All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

/**
 * track acquisition and consumption of inventory items
 *
 *
 * columns and relationships of "stock"
 */
export type Stock = {
  __typename?: 'stock';
  date: Scalars['timestamptz'];
  event_type: EnumStockEventTypeEnum;
  id: Scalars['Int'];
  item_id: Scalars['Int'];
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  tag_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "stock" */
export type StockAggregate = {
  __typename?: 'stock_aggregate';
  aggregate?: Maybe<StockAggregateFields>;
  nodes: Array<Stock>;
};

/** aggregate fields of "stock" */
export type StockAggregateFields = {
  __typename?: 'stock_aggregate_fields';
  avg?: Maybe<StockAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StockMaxFields>;
  min?: Maybe<StockMinFields>;
  stddev?: Maybe<StockStddevFields>;
  stddev_pop?: Maybe<StockStddevPopFields>;
  stddev_samp?: Maybe<StockStddevSampFields>;
  sum?: Maybe<StockSumFields>;
  var_pop?: Maybe<StockVarPopFields>;
  var_samp?: Maybe<StockVarSampFields>;
  variance?: Maybe<StockVarianceFields>;
};


/** aggregate fields of "stock" */
export type StockAggregateFieldsCountArgs = {
  columns?: Maybe<Array<StockSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock" */
export type StockAggregateOrderBy = {
  avg?: Maybe<StockAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<StockMaxOrderBy>;
  min?: Maybe<StockMinOrderBy>;
  stddev?: Maybe<StockStddevOrderBy>;
  stddev_pop?: Maybe<StockStddevPopOrderBy>;
  stddev_samp?: Maybe<StockStddevSampOrderBy>;
  sum?: Maybe<StockSumOrderBy>;
  var_pop?: Maybe<StockVarPopOrderBy>;
  var_samp?: Maybe<StockVarSampOrderBy>;
  variance?: Maybe<StockVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "stock" */
export type StockArrRelInsertInput = {
  data: Array<StockInsertInput>;
  on_conflict?: Maybe<StockOnConflict>;
};

/** aggregate avg on columns */
export type StockAvgFields = {
  __typename?: 'stock_avg_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock" */
export type StockAvgOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "stock". All fields are combined with a logical 'AND'. */
export type StockBoolExp = {
  _and?: Maybe<Array<Maybe<StockBoolExp>>>;
  _not?: Maybe<StockBoolExp>;
  _or?: Maybe<Array<Maybe<StockBoolExp>>>;
  date?: Maybe<TimestamptzComparisonExp>;
  event_type?: Maybe<EnumStockEventTypeEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  item_id?: Maybe<IntComparisonExp>;
  manufacturer_item_id?: Maybe<IntComparisonExp>;
  order_item_id?: Maybe<IntComparisonExp>;
  quantity?: Maybe<IntComparisonExp>;
  tag_id?: Maybe<IntComparisonExp>;
  vendor_item_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "stock" */
export enum StockConstraint {
  /** unique or primary key constraint */
  stock_pkey = 'stock_pkey'
}

/** input type for incrementing integer column in table "stock" */
export type StockIncInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "stock" */
export type StockInsertInput = {
  date?: Maybe<Scalars['timestamptz']>;
  event_type?: Maybe<EnumStockEventTypeEnum>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type StockMaxFields = {
  __typename?: 'stock_max_fields';
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "stock" */
export type StockMaxOrderBy = {
  date?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type StockMinFields = {
  __typename?: 'stock_min_fields';
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "stock" */
export type StockMinOrderBy = {
  date?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "stock" */
export type StockMutationResponse = {
  __typename?: 'stock_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock>;
};

/** input type for inserting object relation for remote table "stock" */
export type StockObjRelInsertInput = {
  data: StockInsertInput;
  on_conflict?: Maybe<StockOnConflict>;
};

/** on conflict condition type for table "stock" */
export type StockOnConflict = {
  constraint: StockConstraint;
  update_columns: Array<StockUpdateColumn>;
  where?: Maybe<StockBoolExp>;
};

/** ordering options when selecting data from "stock" */
export type StockOrderBy = {
  date?: Maybe<OrderBy>;
  event_type?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "stock" */
export type StockPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "stock" */
export enum StockSelectColumn {
  /** column name */
  date = 'date',
  /** column name */
  event_type = 'event_type',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_item_id = 'manufacturer_item_id',
  /** column name */
  order_item_id = 'order_item_id',
  /** column name */
  quantity = 'quantity',
  /** column name */
  tag_id = 'tag_id',
  /** column name */
  vendor_item_id = 'vendor_item_id'
}

/** input type for updating data in table "stock" */
export type StockSetInput = {
  date?: Maybe<Scalars['timestamptz']>;
  event_type?: Maybe<EnumStockEventTypeEnum>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type StockStddevFields = {
  __typename?: 'stock_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock" */
export type StockStddevOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type StockStddevPopFields = {
  __typename?: 'stock_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock" */
export type StockStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type StockStddevSampFields = {
  __typename?: 'stock_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock" */
export type StockStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type StockSumFields = {
  __typename?: 'stock_sum_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stock" */
export type StockSumOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** update columns of table "stock" */
export enum StockUpdateColumn {
  /** column name */
  date = 'date',
  /** column name */
  event_type = 'event_type',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_item_id = 'manufacturer_item_id',
  /** column name */
  order_item_id = 'order_item_id',
  /** column name */
  quantity = 'quantity',
  /** column name */
  tag_id = 'tag_id',
  /** column name */
  vendor_item_id = 'vendor_item_id'
}

/** aggregate var_pop on columns */
export type StockVarPopFields = {
  __typename?: 'stock_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock" */
export type StockVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type StockVarSampFields = {
  __typename?: 'stock_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock" */
export type StockVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type StockVarianceFields = {
  __typename?: 'stock_variance_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock" */
export type StockVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** columns and relationships of "storage" */
export type Storage = {
  __typename?: 'storage';
  abbreviation: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  parent_id?: Maybe<Scalars['Int']>;
  space_type: EnumSpaceTypeEnum;
};

/** aggregated selection of "storage" */
export type StorageAggregate = {
  __typename?: 'storage_aggregate';
  aggregate?: Maybe<StorageAggregateFields>;
  nodes: Array<Storage>;
};

/** aggregate fields of "storage" */
export type StorageAggregateFields = {
  __typename?: 'storage_aggregate_fields';
  avg?: Maybe<StorageAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StorageMaxFields>;
  min?: Maybe<StorageMinFields>;
  stddev?: Maybe<StorageStddevFields>;
  stddev_pop?: Maybe<StorageStddevPopFields>;
  stddev_samp?: Maybe<StorageStddevSampFields>;
  sum?: Maybe<StorageSumFields>;
  var_pop?: Maybe<StorageVarPopFields>;
  var_samp?: Maybe<StorageVarSampFields>;
  variance?: Maybe<StorageVarianceFields>;
};


/** aggregate fields of "storage" */
export type StorageAggregateFieldsCountArgs = {
  columns?: Maybe<Array<StorageSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage" */
export type StorageAggregateOrderBy = {
  avg?: Maybe<StorageAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<StorageMaxOrderBy>;
  min?: Maybe<StorageMinOrderBy>;
  stddev?: Maybe<StorageStddevOrderBy>;
  stddev_pop?: Maybe<StorageStddevPopOrderBy>;
  stddev_samp?: Maybe<StorageStddevSampOrderBy>;
  sum?: Maybe<StorageSumOrderBy>;
  var_pop?: Maybe<StorageVarPopOrderBy>;
  var_samp?: Maybe<StorageVarSampOrderBy>;
  variance?: Maybe<StorageVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "storage" */
export type StorageArrRelInsertInput = {
  data: Array<StorageInsertInput>;
  on_conflict?: Maybe<StorageOnConflict>;
};

/** aggregate avg on columns */
export type StorageAvgFields = {
  __typename?: 'storage_avg_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage" */
export type StorageAvgOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "storage". All fields are combined with a logical 'AND'. */
export type StorageBoolExp = {
  _and?: Maybe<Array<Maybe<StorageBoolExp>>>;
  _not?: Maybe<StorageBoolExp>;
  _or?: Maybe<Array<Maybe<StorageBoolExp>>>;
  abbreviation?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  parent_id?: Maybe<IntComparisonExp>;
  space_type?: Maybe<EnumSpaceTypeEnumComparisonExp>;
};

/** unique or primary key constraints on table "storage" */
export enum StorageConstraint {
  /** unique or primary key constraint */
  storage_parent_name_key = 'storage_parent_name_key',
  /** unique or primary key constraint */
  storage_pkey = 'storage_pkey'
}

/** input type for incrementing integer column in table "storage" */
export type StorageIncInput = {
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage" */
export type StorageInsertInput = {
  abbreviation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  space_type?: Maybe<EnumSpaceTypeEnum>;
};

/** aggregate max on columns */
export type StorageMaxFields = {
  __typename?: 'storage_max_fields';
  abbreviation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "storage" */
export type StorageMaxOrderBy = {
  abbreviation?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type StorageMinFields = {
  __typename?: 'storage_min_fields';
  abbreviation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "storage" */
export type StorageMinOrderBy = {
  abbreviation?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "storage" */
export type StorageMutationResponse = {
  __typename?: 'storage_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Storage>;
};

/** input type for inserting object relation for remote table "storage" */
export type StorageObjRelInsertInput = {
  data: StorageInsertInput;
  on_conflict?: Maybe<StorageOnConflict>;
};

/** on conflict condition type for table "storage" */
export type StorageOnConflict = {
  constraint: StorageConstraint;
  update_columns: Array<StorageUpdateColumn>;
  where?: Maybe<StorageBoolExp>;
};

/** ordering options when selecting data from "storage" */
export type StorageOrderBy = {
  abbreviation?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
  space_type?: Maybe<OrderBy>;
};

/** primary key columns input for table: "storage" */
export type StoragePkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "storage" */
export enum StorageSelectColumn {
  /** column name */
  abbreviation = 'abbreviation',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  parent_id = 'parent_id',
  /** column name */
  space_type = 'space_type'
}

/** input type for updating data in table "storage" */
export type StorageSetInput = {
  abbreviation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  space_type?: Maybe<EnumSpaceTypeEnum>;
};

/** aggregate stddev on columns */
export type StorageStddevFields = {
  __typename?: 'storage_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage" */
export type StorageStddevOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type StorageStddevPopFields = {
  __typename?: 'storage_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage" */
export type StorageStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type StorageStddevSampFields = {
  __typename?: 'storage_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage" */
export type StorageStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type StorageSumFields = {
  __typename?: 'storage_sum_fields';
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage" */
export type StorageSumOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** update columns of table "storage" */
export enum StorageUpdateColumn {
  /** column name */
  abbreviation = 'abbreviation',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  parent_id = 'parent_id',
  /** column name */
  space_type = 'space_type'
}

/** aggregate var_pop on columns */
export type StorageVarPopFields = {
  __typename?: 'storage_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage" */
export type StorageVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type StorageVarSampFields = {
  __typename?: 'storage_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage" */
export type StorageVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type StorageVarianceFields = {
  __typename?: 'storage_variance_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage" */
export type StorageVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
};

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "enum_item_cable.connector" */
  enum_item_cable_connector: Array<EnumItemCableConnector>;
  /** fetch aggregated fields from the table: "enum_item_cable.connector" */
  enum_item_cable_connector_aggregate: EnumItemCableConnectorAggregate;
  /** fetch data from the table: "enum_item_cable.connector" using primary key columns */
  enum_item_cable_connector_by_pk?: Maybe<EnumItemCableConnector>;
  /** fetch data from the table: "enum.item_class" */
  enum_item_class: Array<EnumItemClass>;
  /** fetch aggregated fields from the table: "enum.item_class" */
  enum_item_class_aggregate: EnumItemClassAggregate;
  /** fetch data from the table: "enum.item_class" using primary key columns */
  enum_item_class_by_pk?: Maybe<EnumItemClass>;
  /** fetch data from the table: "enum_item.handedness" */
  enum_item_handedness: Array<EnumItemHandedness>;
  /** fetch aggregated fields from the table: "enum_item.handedness" */
  enum_item_handedness_aggregate: EnumItemHandednessAggregate;
  /** fetch data from the table: "enum_item.handedness" using primary key columns */
  enum_item_handedness_by_pk?: Maybe<EnumItemHandedness>;
  /** fetch data from the table: "enum_item_hardware_fastener.drive" */
  enum_item_hardware_fastener_drive: Array<EnumItemHardwareFastenerDrive>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.drive" */
  enum_item_hardware_fastener_drive_aggregate: EnumItemHardwareFastenerDriveAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.drive" using primary key columns */
  enum_item_hardware_fastener_drive_by_pk?: Maybe<EnumItemHardwareFastenerDrive>;
  /** fetch data from the table: "enum_item_hardware_fastener.material" */
  enum_item_hardware_fastener_material: Array<EnumItemHardwareFastenerMaterial>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.material" */
  enum_item_hardware_fastener_material_aggregate: EnumItemHardwareFastenerMaterialAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.material" using primary key columns */
  enum_item_hardware_fastener_material_by_pk?: Maybe<EnumItemHardwareFastenerMaterial>;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.form" */
  enum_item_hardware_fastener_nut_form: Array<EnumItemHardwareFastenerNutForm>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_nut.form" */
  enum_item_hardware_fastener_nut_form_aggregate: EnumItemHardwareFastenerNutFormAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.form" using primary key columns */
  enum_item_hardware_fastener_nut_form_by_pk?: Maybe<EnumItemHardwareFastenerNutForm>;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.strength" */
  enum_item_hardware_fastener_nut_strength: Array<EnumItemHardwareFastenerNutStrength>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_nut.strength" */
  enum_item_hardware_fastener_nut_strength_aggregate: EnumItemHardwareFastenerNutStrengthAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.strength" using primary key columns */
  enum_item_hardware_fastener_nut_strength_by_pk?: Maybe<EnumItemHardwareFastenerNutStrength>;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.thread_fit" */
  enum_item_hardware_fastener_nut_thread_fit: Array<EnumItemHardwareFastenerNutThreadFit>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_nut.thread_fit" */
  enum_item_hardware_fastener_nut_thread_fit_aggregate: EnumItemHardwareFastenerNutThreadFitAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_nut.thread_fit" using primary key columns */
  enum_item_hardware_fastener_nut_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerNutThreadFit>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.hardness" */
  enum_item_hardware_fastener_screw_hardness: Array<EnumItemHardwareFastenerScrewHardness>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw.hardness" */
  enum_item_hardware_fastener_screw_hardness_aggregate: EnumItemHardwareFastenerScrewHardnessAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.hardness" using primary key columns */
  enum_item_hardware_fastener_screw_hardness_by_pk?: Maybe<EnumItemHardwareFastenerScrewHardness>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.head" */
  enum_item_hardware_fastener_screw_head: Array<EnumItemHardwareFastenerScrewHead>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw.head" */
  enum_item_hardware_fastener_screw_head_aggregate: EnumItemHardwareFastenerScrewHeadAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw.head" using primary key columns */
  enum_item_hardware_fastener_screw_head_by_pk?: Maybe<EnumItemHardwareFastenerScrewHead>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.point" */
  enum_item_hardware_fastener_screw_machine_point: Array<EnumItemHardwareFastenerScrewMachinePoint>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw_machine.point" */
  enum_item_hardware_fastener_screw_machine_point_aggregate: EnumItemHardwareFastenerScrewMachinePointAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.point" using primary key columns */
  enum_item_hardware_fastener_screw_machine_point_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachinePoint>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.strength" */
  enum_item_hardware_fastener_screw_machine_strength: Array<EnumItemHardwareFastenerScrewMachineStrength>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw_machine.strength" */
  enum_item_hardware_fastener_screw_machine_strength_aggregate: EnumItemHardwareFastenerScrewMachineStrengthAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.strength" using primary key columns */
  enum_item_hardware_fastener_screw_machine_strength_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineStrength>;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  enum_item_hardware_fastener_screw_machine_thread_fit: Array<EnumItemHardwareFastenerScrewMachineThreadFit>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" */
  enum_item_hardware_fastener_screw_machine_thread_fit_aggregate: EnumItemHardwareFastenerScrewMachineThreadFitAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_screw_machine.thread_fit" using primary key columns */
  enum_item_hardware_fastener_screw_machine_thread_fit_by_pk?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFit>;
  /** fetch data from the table: "enum_item_hardware_fastener.standoff_shape" */
  enum_item_hardware_fastener_standoff_shape: Array<EnumItemHardwareFastenerStandoffShape>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.standoff_shape" */
  enum_item_hardware_fastener_standoff_shape_aggregate: EnumItemHardwareFastenerStandoffShapeAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.standoff_shape" using primary key columns */
  enum_item_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumItemHardwareFastenerStandoffShape>;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_label" */
  enum_item_hardware_fastener_thread_label: Array<EnumItemHardwareFastenerThreadLabel>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.thread_label" */
  enum_item_hardware_fastener_thread_label_aggregate: EnumItemHardwareFastenerThreadLabelAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_label" using primary key columns */
  enum_item_hardware_fastener_thread_label_by_pk?: Maybe<EnumItemHardwareFastenerThreadLabel>;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_standard" */
  enum_item_hardware_fastener_thread_standard: Array<EnumItemHardwareFastenerThreadStandard>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener.thread_standard" */
  enum_item_hardware_fastener_thread_standard_aggregate: EnumItemHardwareFastenerThreadStandardAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener.thread_standard" using primary key columns */
  enum_item_hardware_fastener_thread_standard_by_pk?: Maybe<EnumItemHardwareFastenerThreadStandard>;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.form" */
  enum_item_hardware_fastener_washer_form: Array<EnumItemHardwareFastenerWasherForm>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_washer.form" */
  enum_item_hardware_fastener_washer_form_aggregate: EnumItemHardwareFastenerWasherFormAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.form" using primary key columns */
  enum_item_hardware_fastener_washer_form_by_pk?: Maybe<EnumItemHardwareFastenerWasherForm>;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.mechanism" */
  enum_item_hardware_fastener_washer_mechanism: Array<EnumItemHardwareFastenerWasherMechanism>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_washer.mechanism" */
  enum_item_hardware_fastener_washer_mechanism_aggregate: EnumItemHardwareFastenerWasherMechanismAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.mechanism" using primary key columns */
  enum_item_hardware_fastener_washer_mechanism_by_pk?: Maybe<EnumItemHardwareFastenerWasherMechanism>;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.pattern" */
  enum_item_hardware_fastener_washer_pattern: Array<EnumItemHardwareFastenerWasherPattern>;
  /** fetch aggregated fields from the table: "enum_item_hardware_fastener_washer.pattern" */
  enum_item_hardware_fastener_washer_pattern_aggregate: EnumItemHardwareFastenerWasherPatternAggregate;
  /** fetch data from the table: "enum_item_hardware_fastener_washer.pattern" using primary key columns */
  enum_item_hardware_fastener_washer_pattern_by_pk?: Maybe<EnumItemHardwareFastenerWasherPattern>;
  /** fetch data from the table: "enum_item_hardware.finish" */
  enum_item_hardware_finish: Array<EnumItemHardwareFinish>;
  /** fetch aggregated fields from the table: "enum_item_hardware.finish" */
  enum_item_hardware_finish_aggregate: EnumItemHardwareFinishAggregate;
  /** fetch data from the table: "enum_item_hardware.finish" using primary key columns */
  enum_item_hardware_finish_by_pk?: Maybe<EnumItemHardwareFinish>;
  /** fetch data from the table: "enum_item_hardware.use_material" */
  enum_item_hardware_use_material: Array<EnumItemHardwareUseMaterial>;
  /** fetch aggregated fields from the table: "enum_item_hardware.use_material" */
  enum_item_hardware_use_material_aggregate: EnumItemHardwareUseMaterialAggregate;
  /** fetch data from the table: "enum_item_hardware.use_material" using primary key columns */
  enum_item_hardware_use_material_by_pk?: Maybe<EnumItemHardwareUseMaterial>;
  /** fetch data from the table: "enum_item_tool.drill_bit_finish" */
  enum_item_tool_drill_bit_finish: Array<EnumItemToolDrillBitFinish>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_finish" */
  enum_item_tool_drill_bit_finish_aggregate: EnumItemToolDrillBitFinishAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_finish" using primary key columns */
  enum_item_tool_drill_bit_finish_by_pk?: Maybe<EnumItemToolDrillBitFinish>;
  /** fetch data from the table: "enum_item_tool.drill_bit_length_class" */
  enum_item_tool_drill_bit_length_class: Array<EnumItemToolDrillBitLengthClass>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_length_class" */
  enum_item_tool_drill_bit_length_class_aggregate: EnumItemToolDrillBitLengthClassAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_length_class" using primary key columns */
  enum_item_tool_drill_bit_length_class_by_pk?: Maybe<EnumItemToolDrillBitLengthClass>;
  /** fetch data from the table: "enum_item_tool.drill_bit_material" */
  enum_item_tool_drill_bit_material: Array<EnumItemToolDrillBitMaterial>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_material" */
  enum_item_tool_drill_bit_material_aggregate: EnumItemToolDrillBitMaterialAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_material" using primary key columns */
  enum_item_tool_drill_bit_material_by_pk?: Maybe<EnumItemToolDrillBitMaterial>;
  /** fetch data from the table: "enum_item_tool.drill_bit_point" */
  enum_item_tool_drill_bit_point: Array<EnumItemToolDrillBitPoint>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_point" */
  enum_item_tool_drill_bit_point_aggregate: EnumItemToolDrillBitPointAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_point" using primary key columns */
  enum_item_tool_drill_bit_point_by_pk?: Maybe<EnumItemToolDrillBitPoint>;
  /** fetch data from the table: "enum_item_tool.drill_bit_shank" */
  enum_item_tool_drill_bit_shank: Array<EnumItemToolDrillBitShank>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_shank" */
  enum_item_tool_drill_bit_shank_aggregate: EnumItemToolDrillBitShankAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_shank" using primary key columns */
  enum_item_tool_drill_bit_shank_by_pk?: Maybe<EnumItemToolDrillBitShank>;
  /** fetch data from the table: "enum_item_tool.drill_bit_style" */
  enum_item_tool_drill_bit_style: Array<EnumItemToolDrillBitStyle>;
  /** fetch aggregated fields from the table: "enum_item_tool.drill_bit_style" */
  enum_item_tool_drill_bit_style_aggregate: EnumItemToolDrillBitStyleAggregate;
  /** fetch data from the table: "enum_item_tool.drill_bit_style" using primary key columns */
  enum_item_tool_drill_bit_style_by_pk?: Maybe<EnumItemToolDrillBitStyle>;
  /** fetch data from the table: "enum.mapped_class" */
  enum_mapped_class: Array<EnumMappedClass>;
  /** fetch aggregated fields from the table: "enum.mapped_class" */
  enum_mapped_class_aggregate: EnumMappedClassAggregate;
  /** fetch data from the table: "enum.mapped_class" using primary key columns */
  enum_mapped_class_by_pk?: Maybe<EnumMappedClass>;
  /** fetch data from the table: "enum.payment_method_type" */
  enum_payment_method_type: Array<EnumPaymentMethodType>;
  /** fetch aggregated fields from the table: "enum.payment_method_type" */
  enum_payment_method_type_aggregate: EnumPaymentMethodTypeAggregate;
  /** fetch data from the table: "enum.payment_method_type" using primary key columns */
  enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>;
  /** fetch data from the table: "enum.space_type" */
  enum_space_type: Array<EnumSpaceType>;
  /** fetch aggregated fields from the table: "enum.space_type" */
  enum_space_type_aggregate: EnumSpaceTypeAggregate;
  /** fetch data from the table: "enum.space_type" using primary key columns */
  enum_space_type_by_pk?: Maybe<EnumSpaceType>;
  /** fetch data from the table: "enum.stock_event_type" */
  enum_stock_event_type: Array<EnumStockEventType>;
  /** fetch aggregated fields from the table: "enum.stock_event_type" */
  enum_stock_event_type_aggregate: EnumStockEventTypeAggregate;
  /** fetch data from the table: "enum.stock_event_type" using primary key columns */
  enum_stock_event_type_by_pk?: Maybe<EnumStockEventType>;
  /** fetch data from the table: "enum.unit" */
  enum_unit: Array<EnumUnit>;
  /** fetch aggregated fields from the table: "enum.unit" */
  enum_unit_aggregate: EnumUnitAggregate;
  /** fetch data from the table: "enum.unit" using primary key columns */
  enum_unit_by_pk?: Maybe<EnumUnit>;
  /** fetch data from the table: "icon" */
  icon: Array<Icon>;
  /** fetch aggregated fields from the table: "icon" */
  icon_aggregate: IconAggregate;
  /** fetch data from the table: "icon" using primary key columns */
  icon_by_pk?: Maybe<Icon>;
  /** fetch data from the table: "icon_item_class_map" */
  icon_item_class_map: Array<IconItemClassMap>;
  /** fetch aggregated fields from the table: "icon_item_class_map" */
  icon_item_class_map_aggregate: IconItemClassMapAggregate;
  /** fetch data from the table: "icon_item_class_map" using primary key columns */
  icon_item_class_map_by_pk?: Maybe<IconItemClassMap>;
  /** fetch data from the table: "icon_item_map" */
  icon_item_map: Array<IconItemMap>;
  /** fetch aggregated fields from the table: "icon_item_map" */
  icon_item_map_aggregate: IconItemMapAggregate;
  /** fetch data from the table: "icon_item_map" using primary key columns */
  icon_item_map_by_pk?: Maybe<IconItemMap>;
  /** fetch data from the table: "icon_label_map" */
  icon_label_map: Array<IconLabelMap>;
  /** fetch aggregated fields from the table: "icon_label_map" */
  icon_label_map_aggregate: IconLabelMapAggregate;
  /** fetch data from the table: "icon_label_map" using primary key columns */
  icon_label_map_by_pk?: Maybe<IconLabelMap>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: ItemAggregate;
  /** fetch data from the table: "item.bundle" */
  item_bundle: Array<ItemBundle>;
  /** fetch aggregated fields from the table: "item.bundle" */
  item_bundle_aggregate: ItemBundleAggregate;
  /** fetch data from the table: "item.bundle" using primary key columns */
  item_bundle_by_pk?: Maybe<ItemBundle>;
  /** fetch data from the table: "item.bundle_member" */
  item_bundle_member: Array<ItemBundleMember>;
  /** fetch aggregated fields from the table: "item.bundle_member" */
  item_bundle_member_aggregate: ItemBundleMemberAggregate;
  /** fetch data from the table: "item.bundle_member" using primary key columns */
  item_bundle_member_by_pk?: Maybe<ItemBundleMember>;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "item.cable_conductive" */
  item_cable_conductive: Array<ItemCableConductive>;
  /** fetch aggregated fields from the table: "item.cable_conductive" */
  item_cable_conductive_aggregate: ItemCableConductiveAggregate;
  /** fetch data from the table: "item.cable_conductive" using primary key columns */
  item_cable_conductive_by_pk?: Maybe<ItemCableConductive>;
  /** fetch data from the table: "item.hardware_drill_bit" */
  item_hardware_drill_bit: Array<ItemHardwareDrillBit>;
  /** fetch aggregated fields from the table: "item.hardware_drill_bit" */
  item_hardware_drill_bit_aggregate: ItemHardwareDrillBitAggregate;
  /** fetch data from the table: "item.hardware_drill_bit" using primary key columns */
  item_hardware_drill_bit_by_pk?: Maybe<ItemHardwareDrillBit>;
  /** fetch data from the table: "item.hardware_fastener_insert" */
  item_hardware_fastener_insert: Array<ItemHardwareFastenerInsert>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_insert" */
  item_hardware_fastener_insert_aggregate: ItemHardwareFastenerInsertAggregate;
  /** fetch data from the table: "item.hardware_fastener_insert" using primary key columns */
  item_hardware_fastener_insert_by_pk?: Maybe<ItemHardwareFastenerInsert>;
  /** fetch data from the table: "item.hardware_fastener_nut" */
  item_hardware_fastener_nut: Array<ItemHardwareFastenerNut>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_nut" */
  item_hardware_fastener_nut_aggregate: ItemHardwareFastenerNutAggregate;
  /** fetch data from the table: "item.hardware_fastener_nut" using primary key columns */
  item_hardware_fastener_nut_by_pk?: Maybe<ItemHardwareFastenerNut>;
  /** fetch data from the table: "item.hardware_fastener_screw" */
  item_hardware_fastener_screw: Array<ItemHardwareFastenerScrew>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_screw" */
  item_hardware_fastener_screw_aggregate: ItemHardwareFastenerScrewAggregate;
  /** fetch data from the table: "item.hardware_fastener_screw" using primary key columns */
  item_hardware_fastener_screw_by_pk?: Maybe<ItemHardwareFastenerScrew>;
  /** fetch data from the table: "item.hardware_fastener_screw_machine" */
  item_hardware_fastener_screw_machine: Array<ItemHardwareFastenerScrewMachine>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_screw_machine" */
  item_hardware_fastener_screw_machine_aggregate: ItemHardwareFastenerScrewMachineAggregate;
  /** fetch data from the table: "item.hardware_fastener_screw_machine" using primary key columns */
  item_hardware_fastener_screw_machine_by_pk?: Maybe<ItemHardwareFastenerScrewMachine>;
  /** fetch data from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff: Array<ItemHardwareFastenerStandoff>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff_aggregate: ItemHardwareFastenerStandoffAggregate;
  /** fetch data from the table: "item.hardware_fastener_standoff" using primary key columns */
  item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
  /** fetch data from the table: "item.hardware_fastener_washer" */
  item_hardware_fastener_washer: Array<ItemHardwareFastenerWasher>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_washer" */
  item_hardware_fastener_washer_aggregate: ItemHardwareFastenerWasherAggregate;
  /** fetch data from the table: "item.hardware_fastener_washer" using primary key columns */
  item_hardware_fastener_washer_by_pk?: Maybe<ItemHardwareFastenerWasher>;
  /** fetch data from the table: "item_variant" */
  item_variant: Array<ItemVariant>;
  /** fetch aggregated fields from the table: "item_variant" */
  item_variant_aggregate: ItemVariantAggregate;
  /** fetch data from the table: "label" */
  label: Array<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: LabelAggregate;
  /** fetch data from the table: "label" using primary key columns */
  label_by_pk?: Maybe<Label>;
  /** fetch data from the table: "label_item_map" */
  label_item_map: Array<LabelItemMap>;
  /** fetch aggregated fields from the table: "label_item_map" */
  label_item_map_aggregate: LabelItemMapAggregate;
  /** fetch data from the table: "label_item_map" using primary key columns */
  label_item_map_by_pk?: Maybe<LabelItemMap>;
  /** fetch data from the table: "label_template_map" */
  label_template_map: Array<LabelTemplateMap>;
  /** fetch aggregated fields from the table: "label_template_map" */
  label_template_map_aggregate: LabelTemplateMapAggregate;
  /** fetch data from the table: "label_template_map" using primary key columns */
  label_template_map_by_pk?: Maybe<LabelTemplateMap>;
  /** fetch data from the table: "manufacturer" */
  manufacturer: Array<Manufacturer>;
  /** fetch aggregated fields from the table: "manufacturer" */
  manufacturer_aggregate: ManufacturerAggregate;
  /** fetch data from the table: "manufacturer" using primary key columns */
  manufacturer_by_pk?: Maybe<Manufacturer>;
  /** fetch data from the table: "manufacturer_item" */
  manufacturer_item: Array<ManufacturerItem>;
  /** fetch aggregated fields from the table: "manufacturer_item" */
  manufacturer_item_aggregate: ManufacturerItemAggregate;
  /** fetch data from the table: "manufacturer_item" using primary key columns */
  manufacturer_item_by_pk?: Maybe<ManufacturerItem>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "order_item" */
  order_item: Array<OrderItem>;
  /** fetch aggregated fields from the table: "order_item" */
  order_item_aggregate: OrderItemAggregate;
  /** fetch data from the table: "order_item" using primary key columns */
  order_item_by_pk?: Maybe<OrderItem>;
  /** fetch data from the table: "payment_method" */
  payment_method: Array<PaymentMethod>;
  /** fetch aggregated fields from the table: "payment_method" */
  payment_method_aggregate: PaymentMethodAggregate;
  /** fetch data from the table: "payment_method" using primary key columns */
  payment_method_by_pk?: Maybe<PaymentMethod>;
  /** fetch data from the table: "property.item_hardware_fastener_bolt_strength" */
  property_item_hardware_fastener_bolt_strength: Array<PropertyItemHardwareFastenerBoltStrength>;
  /** fetch aggregated fields from the table: "property.item_hardware_fastener_bolt_strength" */
  property_item_hardware_fastener_bolt_strength_aggregate: PropertyItemHardwareFastenerBoltStrengthAggregate;
  /** fetch data from the table: "property.item_hardware_fastener_bolt_strength" using primary key columns */
  property_item_hardware_fastener_bolt_strength_by_pk?: Maybe<PropertyItemHardwareFastenerBoltStrength>;
  /** fetch data from the table: "property_item_hardware_fastener_screw_machine.diameter" */
  property_item_hardware_fastener_screw_machine_diameter: Array<PropertyItemHardwareFastenerScrewMachineDiameter>;
  /** fetch aggregated fields from the table: "property_item_hardware_fastener_screw_machine.diameter" */
  property_item_hardware_fastener_screw_machine_diameter_aggregate: PropertyItemHardwareFastenerScrewMachineDiameterAggregate;
  /** fetch data from the table: "property_item_hardware_fastener_screw_machine.diameter" using primary key columns */
  property_item_hardware_fastener_screw_machine_diameter_by_pk?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameter>;
  /** execute function "search" which returns "search_data" */
  search: Array<SearchData>;
  /** execute function "search" and query aggregates on result of table type "search_data" */
  search_aggregate: SearchDataAggregate;
  /** fetch data from the table: "search_data" */
  search_data: Array<SearchData>;
  /** fetch aggregated fields from the table: "search_data" */
  search_data_aggregate: SearchDataAggregate;
  /** fetch data from the table: "search_data" using primary key columns */
  search_data_by_pk?: Maybe<SearchData>;
  /** execute function "search_item" which returns "item" */
  search_item: Array<Item>;
  /** execute function "search_item" and query aggregates on result of table type "item" */
  search_item_aggregate: ItemAggregate;
  /** execute function "search_item_variant" which returns "item_variant" */
  search_item_variant: Array<ItemVariant>;
  /** execute function "search_item_variant" and query aggregates on result of table type "item_variant" */
  search_item_variant_aggregate: ItemVariantAggregate;
  /** fetch data from the table: "shipment" */
  shipment: Array<Shipment>;
  /** fetch aggregated fields from the table: "shipment" */
  shipment_aggregate: ShipmentAggregate;
  /** fetch data from the table: "shipment" using primary key columns */
  shipment_by_pk?: Maybe<Shipment>;
  /** fetch data from the table: "stock" */
  stock: Array<Stock>;
  /** fetch aggregated fields from the table: "stock" */
  stock_aggregate: StockAggregate;
  /** fetch data from the table: "stock" using primary key columns */
  stock_by_pk?: Maybe<Stock>;
  /** fetch data from the table: "storage" */
  storage: Array<Storage>;
  /** fetch aggregated fields from the table: "storage" */
  storage_aggregate: StorageAggregate;
  /** fetch data from the table: "storage" using primary key columns */
  storage_by_pk?: Maybe<Storage>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: TagAggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "vendor" */
  vendor: Array<Vendor>;
  /** fetch aggregated fields from the table: "vendor" */
  vendor_aggregate: VendorAggregate;
  /** fetch data from the table: "vendor" using primary key columns */
  vendor_by_pk?: Maybe<Vendor>;
  /** fetch data from the table: "vendor_item" */
  vendor_item: Array<VendorItem>;
  /** fetch aggregated fields from the table: "vendor_item" */
  vendor_item_aggregate: VendorItemAggregate;
  /** fetch data from the table: "vendor_item" using primary key columns */
  vendor_item_by_pk?: Maybe<VendorItem>;
};


/** subscription root */
export type SubscriptionRootEnumItemCableConnectorArgs = {
  distinct_on?: Maybe<Array<EnumItemCableConnectorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemCableConnectorOrderBy>>;
  where?: Maybe<EnumItemCableConnectorBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemCableConnectorAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemCableConnectorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemCableConnectorOrderBy>>;
  where?: Maybe<EnumItemCableConnectorBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemCableConnectorByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemClassArgs = {
  distinct_on?: Maybe<Array<EnumItemClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemClassOrderBy>>;
  where?: Maybe<EnumItemClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemClassOrderBy>>;
  where?: Maybe<EnumItemClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemClassByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHandednessArgs = {
  distinct_on?: Maybe<Array<EnumItemHandednessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHandednessOrderBy>>;
  where?: Maybe<EnumItemHandednessBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHandednessAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHandednessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHandednessOrderBy>>;
  where?: Maybe<EnumItemHandednessBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHandednessByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerDriveArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerDriveBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerDriveAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerDriveBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerDriveByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutFormArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutFormBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutFormAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutFormBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutFormByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutStrengthArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutStrengthAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutStrengthBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutStrengthByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutThreadFitArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutThreadFitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerNutThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerNutThreadFitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerNutThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewHardnessArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewHardnessAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHardnessOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHardnessBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewHardnessByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewHeadArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHeadOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewHeadAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewHeadOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewHeadBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewHeadByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachinePointArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachinePointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachinePointOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachinePointBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachinePointByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachineStrengthArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachineStrengthAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineStrengthOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachineStrengthByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachineThreadFitArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachineThreadFitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerScrewMachineThreadFitOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerScrewMachineThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerStandoffShapeArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerStandoffShapeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerStandoffShapeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerStandoffShapeByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerThreadLabelArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadLabelOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerThreadLabelAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadLabelOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadLabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerThreadLabelByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerThreadStandardArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadStandardSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadStandardOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerThreadStandardAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerThreadStandardSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerThreadStandardOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerThreadStandardBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerThreadStandardByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherFormArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherFormBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherFormAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherFormSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherFormOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherFormBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherFormByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherMechanismArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherMechanismAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherMechanismOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherMechanismBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherMechanismByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherPatternArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherPatternSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherPatternOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherPatternAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFastenerWasherPatternSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFastenerWasherPatternOrderBy>>;
  where?: Maybe<EnumItemHardwareFastenerWasherPatternBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFastenerWasherPatternByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFinishOrderBy>>;
  where?: Maybe<EnumItemHardwareFinishBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareFinishOrderBy>>;
  where?: Maybe<EnumItemHardwareFinishBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareFinishByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareUseMaterialArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareUseMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareUseMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareUseMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemHardwareUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemHardwareUseMaterialOrderBy>>;
  where?: Maybe<EnumItemHardwareUseMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemHardwareUseMaterialByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitFinishArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitFinishOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitFinishBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitFinishOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitFinishBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitFinishByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitLengthClassArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitLengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitLengthClassOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitLengthClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitLengthClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitLengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitLengthClassOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitLengthClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitLengthClassByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitMaterialArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitMaterialOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitMaterialOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitMaterialByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitPointArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitPointOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitPointBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitPointOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitPointBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitPointByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitShankArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitShankSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitShankOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitShankBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitShankAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitShankSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitShankOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitShankBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitShankByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitStyleArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitStyleOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitStyleBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitStyleAggregateArgs = {
  distinct_on?: Maybe<Array<EnumItemToolDrillBitStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumItemToolDrillBitStyleOrderBy>>;
  where?: Maybe<EnumItemToolDrillBitStyleBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumItemToolDrillBitStyleByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumMappedClassArgs = {
  distinct_on?: Maybe<Array<EnumMappedClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumMappedClassOrderBy>>;
  where?: Maybe<EnumMappedClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumMappedClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumMappedClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumMappedClassOrderBy>>;
  where?: Maybe<EnumMappedClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumMappedClassByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumPaymentMethodTypeArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>;
  where?: Maybe<EnumPaymentMethodTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumPaymentMethodTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>;
  where?: Maybe<EnumPaymentMethodTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumPaymentMethodTypeByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumSpaceTypeArgs = {
  distinct_on?: Maybe<Array<EnumSpaceTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumSpaceTypeOrderBy>>;
  where?: Maybe<EnumSpaceTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumSpaceTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumSpaceTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumSpaceTypeOrderBy>>;
  where?: Maybe<EnumSpaceTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumSpaceTypeByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumStockEventTypeArgs = {
  distinct_on?: Maybe<Array<EnumStockEventTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumStockEventTypeOrderBy>>;
  where?: Maybe<EnumStockEventTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumStockEventTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumStockEventTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumStockEventTypeOrderBy>>;
  where?: Maybe<EnumStockEventTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumStockEventTypeByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumUnitArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumUnitOrderBy>>;
  where?: Maybe<EnumUnitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumUnitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumUnitOrderBy>>;
  where?: Maybe<EnumUnitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumUnitByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootIconArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconOrderBy>>;
  where?: Maybe<IconBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconAggregateArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconOrderBy>>;
  where?: Maybe<IconBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconByPkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootIconItemClassMapArgs = {
  distinct_on?: Maybe<Array<IconItemClassMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemClassMapOrderBy>>;
  where?: Maybe<IconItemClassMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconItemClassMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemClassMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemClassMapOrderBy>>;
  where?: Maybe<IconItemClassMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconItemClassMapByPkArgs = {
  class: EnumItemClassEnum;
  icon_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/** subscription root */
export type SubscriptionRootIconItemMapArgs = {
  distinct_on?: Maybe<Array<IconItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemMapOrderBy>>;
  where?: Maybe<IconItemMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconItemMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemMapOrderBy>>;
  where?: Maybe<IconItemMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconItemMapByPkArgs = {
  icon_id: Scalars['uuid'];
  item_id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootIconLabelMapArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconLabelMapOrderBy>>;
  where?: Maybe<IconLabelMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconLabelMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconLabelMapOrderBy>>;
  where?: Maybe<IconLabelMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconLabelMapByPkArgs = {
  icon_id: Scalars['uuid'];
  label_id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootItemArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemAggregateArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemBundleArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleOrderBy>>;
  where?: Maybe<ItemBundleBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemBundleAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleOrderBy>>;
  where?: Maybe<ItemBundleBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemBundleByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemBundleMemberArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemBundleMemberAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMemberSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMemberOrderBy>>;
  where?: Maybe<ItemBundleMemberBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemBundleMemberByPkArgs = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemCableConductiveArgs = {
  distinct_on?: Maybe<Array<ItemCableConductiveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemCableConductiveOrderBy>>;
  where?: Maybe<ItemCableConductiveBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemCableConductiveAggregateArgs = {
  distinct_on?: Maybe<Array<ItemCableConductiveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemCableConductiveOrderBy>>;
  where?: Maybe<ItemCableConductiveBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemCableConductiveByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareDrillBitArgs = {
  distinct_on?: Maybe<Array<ItemHardwareDrillBitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareDrillBitOrderBy>>;
  where?: Maybe<ItemHardwareDrillBitBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareDrillBitAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareDrillBitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareDrillBitOrderBy>>;
  where?: Maybe<ItemHardwareDrillBitBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareDrillBitByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerInsertArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerInsertSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerInsertOrderBy>>;
  where?: Maybe<ItemHardwareFastenerInsertBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerInsertAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerInsertSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerInsertOrderBy>>;
  where?: Maybe<ItemHardwareFastenerInsertBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerInsertByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerNutArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerNutSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerNutOrderBy>>;
  where?: Maybe<ItemHardwareFastenerNutBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerNutSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerNutOrderBy>>;
  where?: Maybe<ItemHardwareFastenerNutBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerNutByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerScrewArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerScrewAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerScrewByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerScrewMachineArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewMachineSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewMachineOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewMachineBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerScrewMachineAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerScrewMachineSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerScrewMachineOrderBy>>;
  where?: Maybe<ItemHardwareFastenerScrewMachineBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerScrewMachineByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerStandoffArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerStandoffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerStandoffOrderBy>>;
  where?: Maybe<ItemHardwareFastenerStandoffBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerStandoffAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerStandoffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerStandoffOrderBy>>;
  where?: Maybe<ItemHardwareFastenerStandoffBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerStandoffByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerWasherArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerWasherSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerWasherOrderBy>>;
  where?: Maybe<ItemHardwareFastenerWasherBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerWasherAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerWasherSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerWasherOrderBy>>;
  where?: Maybe<ItemHardwareFastenerWasherBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerWasherByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemVariantArgs = {
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemVariantAggregateArgs = {
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelByPkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootLabelItemMapArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelItemMapOrderBy>>;
  where?: Maybe<LabelItemMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelItemMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelItemMapOrderBy>>;
  where?: Maybe<LabelItemMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelItemMapByPkArgs = {
  item_id: Scalars['Int'];
  label_id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootLabelTemplateMapArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelTemplateMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>;
  where?: Maybe<LabelTemplateMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelTemplateMapByPkArgs = {
  item_class: EnumItemClassEnum;
  label_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};


/** subscription root */
export type SubscriptionRootManufacturerArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerOrderBy>>;
  where?: Maybe<ManufacturerBoolExp>;
};


/** subscription root */
export type SubscriptionRootManufacturerAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerOrderBy>>;
  where?: Maybe<ManufacturerBoolExp>;
};


/** subscription root */
export type SubscriptionRootManufacturerByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootManufacturerItemArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootManufacturerItemAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>;
  where?: Maybe<ManufacturerItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootManufacturerItemByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootOrderArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderOrderBy>>;
  where?: Maybe<OrderBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrderAggregateArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderOrderBy>>;
  where?: Maybe<OrderBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrderByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootOrderItemArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrderItemAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrderItemByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPaymentMethodArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentMethodOrderBy>>;
  where?: Maybe<PaymentMethodBoolExp>;
};


/** subscription root */
export type SubscriptionRootPaymentMethodAggregateArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentMethodOrderBy>>;
  where?: Maybe<PaymentMethodBoolExp>;
};


/** subscription root */
export type SubscriptionRootPaymentMethodByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPropertyItemHardwareFastenerBoltStrengthArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>;
};


/** subscription root */
export type SubscriptionRootPropertyItemHardwareFastenerBoltStrengthAggregateArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerBoltStrengthOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerBoltStrengthBoolExp>;
};


/** subscription root */
export type SubscriptionRootPropertyItemHardwareFastenerBoltStrengthByPkArgs = {
  diameter: Scalars['numeric'];
  strength_grade: Scalars['String'];
  thread_pitch: Scalars['numeric'];
};


/** subscription root */
export type SubscriptionRootPropertyItemHardwareFastenerScrewMachineDiameterArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>;
};


/** subscription root */
export type SubscriptionRootPropertyItemHardwareFastenerScrewMachineDiameterAggregateArgs = {
  distinct_on?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PropertyItemHardwareFastenerScrewMachineDiameterOrderBy>>;
  where?: Maybe<PropertyItemHardwareFastenerScrewMachineDiameterBoolExp>;
};


/** subscription root */
export type SubscriptionRootPropertyItemHardwareFastenerScrewMachineDiameterByPkArgs = {
  diameter_label: Scalars['String'];
  fit: EnumItemHardwareFastenerScrewMachineThreadFitEnum;
  pitch_label: Scalars['numeric'];
};


/** subscription root */
export type SubscriptionRootSearchArgs = {
  args: SearchArgs;
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** subscription root */
export type SubscriptionRootSearchAggregateArgs = {
  args: SearchArgs;
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** subscription root */
export type SubscriptionRootSearchDataArgs = {
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** subscription root */
export type SubscriptionRootSearchDataAggregateArgs = {
  distinct_on?: Maybe<Array<SearchDataSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SearchDataOrderBy>>;
  where?: Maybe<SearchDataBoolExp>;
};


/** subscription root */
export type SubscriptionRootSearchDataByPkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type SubscriptionRootSearchItemArgs = {
  args: SearchItemArgs;
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootSearchItemAggregateArgs = {
  args: SearchItemArgs;
  distinct_on?: Maybe<Array<ItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemOrderBy>>;
  where?: Maybe<ItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootSearchItemVariantArgs = {
  args: SearchItemVariantArgs;
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** subscription root */
export type SubscriptionRootSearchItemVariantAggregateArgs = {
  args: SearchItemVariantArgs;
  distinct_on?: Maybe<Array<ItemVariantSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemVariantOrderBy>>;
  where?: Maybe<ItemVariantBoolExp>;
};


/** subscription root */
export type SubscriptionRootShipmentArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShipmentOrderBy>>;
  where?: Maybe<ShipmentBoolExp>;
};


/** subscription root */
export type SubscriptionRootShipmentAggregateArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShipmentOrderBy>>;
  where?: Maybe<ShipmentBoolExp>;
};


/** subscription root */
export type SubscriptionRootShipmentByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootStockArgs = {
  distinct_on?: Maybe<Array<StockSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StockOrderBy>>;
  where?: Maybe<StockBoolExp>;
};


/** subscription root */
export type SubscriptionRootStockAggregateArgs = {
  distinct_on?: Maybe<Array<StockSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StockOrderBy>>;
  where?: Maybe<StockBoolExp>;
};


/** subscription root */
export type SubscriptionRootStockByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootStorageArgs = {
  distinct_on?: Maybe<Array<StorageSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorageOrderBy>>;
  where?: Maybe<StorageBoolExp>;
};


/** subscription root */
export type SubscriptionRootStorageAggregateArgs = {
  distinct_on?: Maybe<Array<StorageSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorageOrderBy>>;
  where?: Maybe<StorageBoolExp>;
};


/** subscription root */
export type SubscriptionRootStorageByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootTagArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TagOrderBy>>;
  where?: Maybe<TagBoolExp>;
};


/** subscription root */
export type SubscriptionRootTagAggregateArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TagOrderBy>>;
  where?: Maybe<TagBoolExp>;
};


/** subscription root */
export type SubscriptionRootTagByPkArgs = {
  text: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootVendorArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorOrderBy>>;
  where?: Maybe<VendorBoolExp>;
};


/** subscription root */
export type SubscriptionRootVendorAggregateArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorOrderBy>>;
  where?: Maybe<VendorBoolExp>;
};


/** subscription root */
export type SubscriptionRootVendorByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootVendorItemArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootVendorItemAggregateArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};


/** subscription root */
export type SubscriptionRootVendorItemByPkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: 'tag';
  id?: Maybe<Scalars['Int']>;
  text: Scalars['String'];
};

/** aggregated selection of "tag" */
export type TagAggregate = {
  __typename?: 'tag_aggregate';
  aggregate?: Maybe<TagAggregateFields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "tag" */
export type TagAggregateFields = {
  __typename?: 'tag_aggregate_fields';
  avg?: Maybe<TagAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TagMaxFields>;
  min?: Maybe<TagMinFields>;
  stddev?: Maybe<TagStddevFields>;
  stddev_pop?: Maybe<TagStddevPopFields>;
  stddev_samp?: Maybe<TagStddevSampFields>;
  sum?: Maybe<TagSumFields>;
  var_pop?: Maybe<TagVarPopFields>;
  var_samp?: Maybe<TagVarSampFields>;
  variance?: Maybe<TagVarianceFields>;
};


/** aggregate fields of "tag" */
export type TagAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TagSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tag" */
export type TagAggregateOrderBy = {
  avg?: Maybe<TagAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TagMaxOrderBy>;
  min?: Maybe<TagMinOrderBy>;
  stddev?: Maybe<TagStddevOrderBy>;
  stddev_pop?: Maybe<TagStddevPopOrderBy>;
  stddev_samp?: Maybe<TagStddevSampOrderBy>;
  sum?: Maybe<TagSumOrderBy>;
  var_pop?: Maybe<TagVarPopOrderBy>;
  var_samp?: Maybe<TagVarSampOrderBy>;
  variance?: Maybe<TagVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "tag" */
export type TagArrRelInsertInput = {
  data: Array<TagInsertInput>;
  on_conflict?: Maybe<TagOnConflict>;
};

/** aggregate avg on columns */
export type TagAvgFields = {
  __typename?: 'tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tag" */
export type TagAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type TagBoolExp = {
  _and?: Maybe<Array<Maybe<TagBoolExp>>>;
  _not?: Maybe<TagBoolExp>;
  _or?: Maybe<Array<Maybe<TagBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  text?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "tag" */
export enum TagConstraint {
  /** unique or primary key constraint */
  tag_id_key = 'tag_id_key',
  /** unique or primary key constraint */
  tag_pkey = 'tag_pkey'
}

/** input type for incrementing integer column in table "tag" */
export type TagIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tag" */
export type TagInsertInput = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TagMaxFields = {
  __typename?: 'tag_max_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "tag" */
export type TagMaxOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TagMinFields = {
  __typename?: 'tag_min_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "tag" */
export type TagMinOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
};

/** response of any mutation on the table "tag" */
export type TagMutationResponse = {
  __typename?: 'tag_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tag>;
};

/** input type for inserting object relation for remote table "tag" */
export type TagObjRelInsertInput = {
  data: TagInsertInput;
  on_conflict?: Maybe<TagOnConflict>;
};

/** on conflict condition type for table "tag" */
export type TagOnConflict = {
  constraint: TagConstraint;
  update_columns: Array<TagUpdateColumn>;
  where?: Maybe<TagBoolExp>;
};

/** ordering options when selecting data from "tag" */
export type TagOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
};

/** primary key columns input for table: "tag" */
export type TagPkColumnsInput = {
  text: Scalars['String'];
};

/** select columns of table "tag" */
export enum TagSelectColumn {
  /** column name */
  id = 'id',
  /** column name */
  text = 'text'
}

/** input type for updating data in table "tag" */
export type TagSetInput = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TagStddevFields = {
  __typename?: 'tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tag" */
export type TagStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TagStddevPopFields = {
  __typename?: 'tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tag" */
export type TagStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TagStddevSampFields = {
  __typename?: 'tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tag" */
export type TagStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TagSumFields = {
  __typename?: 'tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tag" */
export type TagSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "tag" */
export enum TagUpdateColumn {
  /** column name */
  id = 'id',
  /** column name */
  text = 'text'
}

/** aggregate var_pop on columns */
export type TagVarPopFields = {
  __typename?: 'tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tag" */
export type TagVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TagVarSampFields = {
  __typename?: 'tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tag" */
export type TagVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TagVarianceFields = {
  __typename?: 'tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tag" */
export type TagVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type tsvector. All fields are combined with logical 'AND'. */
export type TsvectorComparisonExp = {
  _eq?: Maybe<Scalars['tsvector']>;
  _gt?: Maybe<Scalars['tsvector']>;
  _gte?: Maybe<Scalars['tsvector']>;
  _in?: Maybe<Array<Scalars['tsvector']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['tsvector']>;
  _lte?: Maybe<Scalars['tsvector']>;
  _neq?: Maybe<Scalars['tsvector']>;
  _nin?: Maybe<Array<Scalars['tsvector']>>;
};



/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "vendor" */
export type Vendor = {
  __typename?: 'vendor';
  account_id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** use http://domain.tld/{{item_sku}} to autogenerate product urls */
  item_url_template?: Maybe<Scalars['String']>;
  /** An array relationship */
  manufacturer: Array<Manufacturer>;
  /** An aggregated array relationship */
  manufacturer_aggregate: ManufacturerAggregate;
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregated array relationship */
  orders_aggregate: OrderAggregate;
  url?: Maybe<Scalars['String']>;
  /** An array relationship */
  vendor_items: Array<VendorItem>;
  /** An aggregated array relationship */
  vendor_items_aggregate: VendorItemAggregate;
};


/** columns and relationships of "vendor" */
export type VendorManufacturerArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerOrderBy>>;
  where?: Maybe<ManufacturerBoolExp>;
};


/** columns and relationships of "vendor" */
export type VendorManufacturerAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ManufacturerOrderBy>>;
  where?: Maybe<ManufacturerBoolExp>;
};


/** columns and relationships of "vendor" */
export type VendorOrdersArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderOrderBy>>;
  where?: Maybe<OrderBoolExp>;
};


/** columns and relationships of "vendor" */
export type VendorOrdersAggregateArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderOrderBy>>;
  where?: Maybe<OrderBoolExp>;
};


/** columns and relationships of "vendor" */
export type VendorVendorItemsArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};


/** columns and relationships of "vendor" */
export type VendorVendorItemsAggregateArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<VendorItemOrderBy>>;
  where?: Maybe<VendorItemBoolExp>;
};

/** aggregated selection of "vendor" */
export type VendorAggregate = {
  __typename?: 'vendor_aggregate';
  aggregate?: Maybe<VendorAggregateFields>;
  nodes: Array<Vendor>;
};

/** aggregate fields of "vendor" */
export type VendorAggregateFields = {
  __typename?: 'vendor_aggregate_fields';
  avg?: Maybe<VendorAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<VendorMaxFields>;
  min?: Maybe<VendorMinFields>;
  stddev?: Maybe<VendorStddevFields>;
  stddev_pop?: Maybe<VendorStddevPopFields>;
  stddev_samp?: Maybe<VendorStddevSampFields>;
  sum?: Maybe<VendorSumFields>;
  var_pop?: Maybe<VendorVarPopFields>;
  var_samp?: Maybe<VendorVarSampFields>;
  variance?: Maybe<VendorVarianceFields>;
};


/** aggregate fields of "vendor" */
export type VendorAggregateFieldsCountArgs = {
  columns?: Maybe<Array<VendorSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vendor" */
export type VendorAggregateOrderBy = {
  avg?: Maybe<VendorAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<VendorMaxOrderBy>;
  min?: Maybe<VendorMinOrderBy>;
  stddev?: Maybe<VendorStddevOrderBy>;
  stddev_pop?: Maybe<VendorStddevPopOrderBy>;
  stddev_samp?: Maybe<VendorStddevSampOrderBy>;
  sum?: Maybe<VendorSumOrderBy>;
  var_pop?: Maybe<VendorVarPopOrderBy>;
  var_samp?: Maybe<VendorVarSampOrderBy>;
  variance?: Maybe<VendorVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "vendor" */
export type VendorArrRelInsertInput = {
  data: Array<VendorInsertInput>;
  on_conflict?: Maybe<VendorOnConflict>;
};

/** aggregate avg on columns */
export type VendorAvgFields = {
  __typename?: 'vendor_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vendor" */
export type VendorAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "vendor". All fields are combined with a logical 'AND'. */
export type VendorBoolExp = {
  _and?: Maybe<Array<Maybe<VendorBoolExp>>>;
  _not?: Maybe<VendorBoolExp>;
  _or?: Maybe<Array<Maybe<VendorBoolExp>>>;
  account_id?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  item_url_template?: Maybe<StringComparisonExp>;
  manufacturer?: Maybe<ManufacturerBoolExp>;
  name?: Maybe<StringComparisonExp>;
  orders?: Maybe<OrderBoolExp>;
  url?: Maybe<StringComparisonExp>;
  vendor_items?: Maybe<VendorItemBoolExp>;
};

/** unique or primary key constraints on table "vendor" */
export enum VendorConstraint {
  /** unique or primary key constraint */
  vendor_pkey = 'vendor_pkey'
}

/** input type for incrementing integer column in table "vendor" */
export type VendorIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vendor" */
export type VendorInsertInput = {
  account_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_url_template?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderArrRelInsertInput>;
  url?: Maybe<Scalars['String']>;
  vendor_items?: Maybe<VendorItemArrRelInsertInput>;
};

/** columns and relationships of "vendor_item" */
export type VendorItem = {
  __typename?: 'vendor_item';
  /** this should track "variations" of the item_id.      For example the item might be cat6 550mhz      but the vendor item would be 1000ft of it. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  item: Item;
  item_id: Scalars['Int'];
  /** An array relationship */
  orderItems: Array<OrderItem>;
  /** An aggregated array relationship */
  orderItems_aggregate: OrderItemAggregate;
  quantity: Scalars['Int'];
  /** Product URL / Product Page */
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  vendor: Vendor;
  vendor_id: Scalars['Int'];
  vendor_sku: Scalars['String'];
};


/** columns and relationships of "vendor_item" */
export type VendorItemOrderItemsArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** columns and relationships of "vendor_item" */
export type VendorItemOrderItemsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};

/** aggregated selection of "vendor_item" */
export type VendorItemAggregate = {
  __typename?: 'vendor_item_aggregate';
  aggregate?: Maybe<VendorItemAggregateFields>;
  nodes: Array<VendorItem>;
};

/** aggregate fields of "vendor_item" */
export type VendorItemAggregateFields = {
  __typename?: 'vendor_item_aggregate_fields';
  avg?: Maybe<VendorItemAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<VendorItemMaxFields>;
  min?: Maybe<VendorItemMinFields>;
  stddev?: Maybe<VendorItemStddevFields>;
  stddev_pop?: Maybe<VendorItemStddevPopFields>;
  stddev_samp?: Maybe<VendorItemStddevSampFields>;
  sum?: Maybe<VendorItemSumFields>;
  var_pop?: Maybe<VendorItemVarPopFields>;
  var_samp?: Maybe<VendorItemVarSampFields>;
  variance?: Maybe<VendorItemVarianceFields>;
};


/** aggregate fields of "vendor_item" */
export type VendorItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<VendorItemSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vendor_item" */
export type VendorItemAggregateOrderBy = {
  avg?: Maybe<VendorItemAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<VendorItemMaxOrderBy>;
  min?: Maybe<VendorItemMinOrderBy>;
  stddev?: Maybe<VendorItemStddevOrderBy>;
  stddev_pop?: Maybe<VendorItemStddevPopOrderBy>;
  stddev_samp?: Maybe<VendorItemStddevSampOrderBy>;
  sum?: Maybe<VendorItemSumOrderBy>;
  var_pop?: Maybe<VendorItemVarPopOrderBy>;
  var_samp?: Maybe<VendorItemVarSampOrderBy>;
  variance?: Maybe<VendorItemVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "vendor_item" */
export type VendorItemArrRelInsertInput = {
  data: Array<VendorItemInsertInput>;
  on_conflict?: Maybe<VendorItemOnConflict>;
};

/** aggregate avg on columns */
export type VendorItemAvgFields = {
  __typename?: 'vendor_item_avg_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vendor_item" */
export type VendorItemAvgOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "vendor_item". All fields are combined with a logical 'AND'. */
export type VendorItemBoolExp = {
  _and?: Maybe<Array<Maybe<VendorItemBoolExp>>>;
  _not?: Maybe<VendorItemBoolExp>;
  _or?: Maybe<Array<Maybe<VendorItemBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  item?: Maybe<ItemBoolExp>;
  item_id?: Maybe<IntComparisonExp>;
  orderItems?: Maybe<OrderItemBoolExp>;
  quantity?: Maybe<IntComparisonExp>;
  url?: Maybe<StringComparisonExp>;
  vendor?: Maybe<VendorBoolExp>;
  vendor_id?: Maybe<IntComparisonExp>;
  vendor_sku?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "vendor_item" */
export enum VendorItemConstraint {
  /** unique or primary key constraint */
  vendor_item_id_item_id_key = 'vendor_item_id_item_id_key',
  /** unique or primary key constraint */
  vendor_item_item_id_vendor_id_vendor_sku_key = 'vendor_item_item_id_vendor_id_vendor_sku_key',
  /** unique or primary key constraint */
  vendor_item_pkey = 'vendor_item_pkey'
}

/** input type for incrementing integer column in table "vendor_item" */
export type VendorItemIncInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vendor_item" */
export type VendorItemInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<ItemObjRelInsertInput>;
  item_id?: Maybe<Scalars['Int']>;
  orderItems?: Maybe<OrderItemArrRelInsertInput>;
  quantity?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  vendor?: Maybe<VendorObjRelInsertInput>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type VendorItemMaxFields = {
  __typename?: 'vendor_item_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vendor_item" */
export type VendorItemMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_sku?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type VendorItemMinFields = {
  __typename?: 'vendor_item_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vendor_item" */
export type VendorItemMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_sku?: Maybe<OrderBy>;
};

/** response of any mutation on the table "vendor_item" */
export type VendorItemMutationResponse = {
  __typename?: 'vendor_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<VendorItem>;
};

/** input type for inserting object relation for remote table "vendor_item" */
export type VendorItemObjRelInsertInput = {
  data: VendorItemInsertInput;
  on_conflict?: Maybe<VendorItemOnConflict>;
};

/** on conflict condition type for table "vendor_item" */
export type VendorItemOnConflict = {
  constraint: VendorItemConstraint;
  update_columns: Array<VendorItemUpdateColumn>;
  where?: Maybe<VendorItemBoolExp>;
};

/** ordering options when selecting data from "vendor_item" */
export type VendorItemOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_id?: Maybe<OrderBy>;
  orderItems_aggregate?: Maybe<OrderItemAggregateOrderBy>;
  quantity?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor?: Maybe<VendorOrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_sku?: Maybe<OrderBy>;
};

/** primary key columns input for table: "vendor_item" */
export type VendorItemPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "vendor_item" */
export enum VendorItemSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  quantity = 'quantity',
  /** column name */
  url = 'url',
  /** column name */
  vendor_id = 'vendor_id',
  /** column name */
  vendor_sku = 'vendor_sku'
}

/** input type for updating data in table "vendor_item" */
export type VendorItemSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type VendorItemStddevFields = {
  __typename?: 'vendor_item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vendor_item" */
export type VendorItemStddevOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type VendorItemStddevPopFields = {
  __typename?: 'vendor_item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vendor_item" */
export type VendorItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type VendorItemStddevSampFields = {
  __typename?: 'vendor_item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vendor_item" */
export type VendorItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type VendorItemSumFields = {
  __typename?: 'vendor_item_sum_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vendor_item" */
export type VendorItemSumOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** update columns of table "vendor_item" */
export enum VendorItemUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  quantity = 'quantity',
  /** column name */
  url = 'url',
  /** column name */
  vendor_id = 'vendor_id',
  /** column name */
  vendor_sku = 'vendor_sku'
}

/** aggregate var_pop on columns */
export type VendorItemVarPopFields = {
  __typename?: 'vendor_item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vendor_item" */
export type VendorItemVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type VendorItemVarSampFields = {
  __typename?: 'vendor_item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vendor_item" */
export type VendorItemVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type VendorItemVarianceFields = {
  __typename?: 'vendor_item_variance_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vendor_item" */
export type VendorItemVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type VendorMaxFields = {
  __typename?: 'vendor_max_fields';
  account_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_url_template?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vendor" */
export type VendorMaxOrderBy = {
  account_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_url_template?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type VendorMinFields = {
  __typename?: 'vendor_min_fields';
  account_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_url_template?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vendor" */
export type VendorMinOrderBy = {
  account_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_url_template?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** response of any mutation on the table "vendor" */
export type VendorMutationResponse = {
  __typename?: 'vendor_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Vendor>;
};

/** input type for inserting object relation for remote table "vendor" */
export type VendorObjRelInsertInput = {
  data: VendorInsertInput;
  on_conflict?: Maybe<VendorOnConflict>;
};

/** on conflict condition type for table "vendor" */
export type VendorOnConflict = {
  constraint: VendorConstraint;
  update_columns: Array<VendorUpdateColumn>;
  where?: Maybe<VendorBoolExp>;
};

/** ordering options when selecting data from "vendor" */
export type VendorOrderBy = {
  account_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  item_url_template?: Maybe<OrderBy>;
  manufacturer_aggregate?: Maybe<ManufacturerAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  orders_aggregate?: Maybe<OrderAggregateOrderBy>;
  url?: Maybe<OrderBy>;
  vendor_items_aggregate?: Maybe<VendorItemAggregateOrderBy>;
};

/** primary key columns input for table: "vendor" */
export type VendorPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "vendor" */
export enum VendorSelectColumn {
  /** column name */
  account_id = 'account_id',
  /** column name */
  id = 'id',
  /** column name */
  item_url_template = 'item_url_template',
  /** column name */
  name = 'name',
  /** column name */
  url = 'url'
}

/** input type for updating data in table "vendor" */
export type VendorSetInput = {
  account_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  item_url_template?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type VendorStddevFields = {
  __typename?: 'vendor_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vendor" */
export type VendorStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type VendorStddevPopFields = {
  __typename?: 'vendor_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vendor" */
export type VendorStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type VendorStddevSampFields = {
  __typename?: 'vendor_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vendor" */
export type VendorStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type VendorSumFields = {
  __typename?: 'vendor_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vendor" */
export type VendorSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "vendor" */
export enum VendorUpdateColumn {
  /** column name */
  account_id = 'account_id',
  /** column name */
  id = 'id',
  /** column name */
  item_url_template = 'item_url_template',
  /** column name */
  name = 'name',
  /** column name */
  url = 'url'
}

/** aggregate var_pop on columns */
export type VendorVarPopFields = {
  __typename?: 'vendor_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vendor" */
export type VendorVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type VendorVarSampFields = {
  __typename?: 'vendor_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vendor" */
export type VendorVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type VendorVarianceFields = {
  __typename?: 'vendor_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vendor" */
export type VendorVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
