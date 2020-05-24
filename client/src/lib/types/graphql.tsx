import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  bigint: any;
  date: any;
  jsonb: any;
  money: any;
  numeric: any;
  smallint: any;
  timestamptz: any;
  tsvector: any;
  /** uint8 (unsigned int between 0 and 255) scalar type for Apollo GraphQL */
  uint8: any;
  uuid: any;
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

/** columns and relationships of "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPoint = {
  __typename?: 'enum_hardware_fastener_bolt_point';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointAggregate = {
  __typename?: 'enum_hardware_fastener_bolt_point_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerBoltPointAggregateFields>;
  nodes: Array<EnumHardwareFastenerBoltPoint>;
};

/** aggregate fields of "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointAggregateFields = {
  __typename?: 'enum_hardware_fastener_bolt_point_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerBoltPointMaxFields>;
  min?: Maybe<EnumHardwareFastenerBoltPointMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerBoltPointSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerBoltPointMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerBoltPointMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointArrRelInsertInput = {
  data: Array<EnumHardwareFastenerBoltPointInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerBoltPointOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_bolt_point". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerBoltPointBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerBoltPointBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerBoltPointBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerBoltPointBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_bolt_point" */
export enum EnumHardwareFastenerBoltPointConstraint {
  /** unique or primary key constraint */
  hardware_fastener_screw_point_pkey = 'hardware_fastener_screw_point_pkey'
}

export enum EnumHardwareFastenerBoltPointEnum {
  bolt_extended = 'bolt_extended',
  bolt_flat = 'bolt_flat'
}

/** expression to compare columns of type enum_hardware_fastener_bolt_point_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerBoltPointEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerBoltPointEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerBoltPointEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerBoltPointMaxFields = {
  __typename?: 'enum_hardware_fastener_bolt_point_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerBoltPointMinFields = {
  __typename?: 'enum_hardware_fastener_bolt_point_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointMutationResponse = {
  __typename?: 'enum_hardware_fastener_bolt_point_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerBoltPoint>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointObjRelInsertInput = {
  data: EnumHardwareFastenerBoltPointInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerBoltPointOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointOnConflict = {
  constraint: EnumHardwareFastenerBoltPointConstraint;
  update_columns: Array<EnumHardwareFastenerBoltPointUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerBoltPointBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_bolt_point" */
export enum EnumHardwareFastenerBoltPointSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_bolt_point" */
export type EnumHardwareFastenerBoltPointSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_bolt_point" */
export enum EnumHardwareFastenerBoltPointUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Drive type for fastener, such as Hex, Torx, Phillips, etc
 * 
 * 
 * columns and relationships of "enum.hardware_fastener_drive"
 */
export type EnumHardwareFastenerDrive = {
  __typename?: 'enum_hardware_fastener_drive';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveAggregate = {
  __typename?: 'enum_hardware_fastener_drive_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerDriveAggregateFields>;
  nodes: Array<EnumHardwareFastenerDrive>;
};

/** aggregate fields of "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveAggregateFields = {
  __typename?: 'enum_hardware_fastener_drive_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerDriveMaxFields>;
  min?: Maybe<EnumHardwareFastenerDriveMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerDriveSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerDriveMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerDriveMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveArrRelInsertInput = {
  data: Array<EnumHardwareFastenerDriveInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerDriveOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_drive". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerDriveBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerDriveBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerDriveBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerDriveBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_drive" */
export enum EnumHardwareFastenerDriveConstraint {
  /** unique or primary key constraint */
  hardware_fastener_drive_pkey = 'hardware_fastener_drive_pkey'
}

export enum EnumHardwareFastenerDriveEnum {
  /** two dots equidistant and opposite each other from center */
  drilled_spanner = 'drilled_spanner',
  /** external hex (use of crescent wrench) */
  hex = 'hex',
  /** internal hex ( allen wrench ) */
  hex_socket = 'hex_socket',
  /** hex with center point preventing normal allen wrench tools from operating */
  hex_tamper_resistant = 'hex_tamper_resistant',
  phillips = 'phillips',
  /** Aka: Regular, Flathead */
  slot = 'slot',
  square = 'square',
  torx = 'torx',
  torx_plus = 'torx_plus',
  /** torx with center point preventing normal torx wrench tools from operating */
  torx_tamper_resistant = 'torx_tamper_resistant'
}

/** expression to compare columns of type enum_hardware_fastener_drive_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerDriveEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerDriveEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerDriveEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerDriveEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerDriveEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerDriveMaxFields = {
  __typename?: 'enum_hardware_fastener_drive_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerDriveMinFields = {
  __typename?: 'enum_hardware_fastener_drive_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveMutationResponse = {
  __typename?: 'enum_hardware_fastener_drive_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerDrive>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveObjRelInsertInput = {
  data: EnumHardwareFastenerDriveInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerDriveOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveOnConflict = {
  constraint: EnumHardwareFastenerDriveConstraint;
  update_columns: Array<EnumHardwareFastenerDriveUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerDriveBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDrivePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_drive" */
export enum EnumHardwareFastenerDriveSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_drive" */
export type EnumHardwareFastenerDriveSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_drive" */
export enum EnumHardwareFastenerDriveUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardness = {
  __typename?: 'enum_hardware_fastener_hardness';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessAggregate = {
  __typename?: 'enum_hardware_fastener_hardness_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerHardnessAggregateFields>;
  nodes: Array<EnumHardwareFastenerHardness>;
};

/** aggregate fields of "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessAggregateFields = {
  __typename?: 'enum_hardware_fastener_hardness_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerHardnessMaxFields>;
  min?: Maybe<EnumHardwareFastenerHardnessMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerHardnessSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerHardnessMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerHardnessMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessArrRelInsertInput = {
  data: Array<EnumHardwareFastenerHardnessInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerHardnessOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_hardness". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerHardnessBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerHardnessBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerHardnessBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerHardnessBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_hardness" */
export enum EnumHardwareFastenerHardnessConstraint {
  /** unique or primary key constraint */
  hardware_fastener_hardness_pkey = 'hardware_fastener_hardness_pkey'
}

export enum EnumHardwareFastenerHardnessEnum {
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

/** expression to compare columns of type enum_hardware_fastener_hardness_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerHardnessEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerHardnessEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerHardnessEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerHardnessEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerHardnessEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerHardnessMaxFields = {
  __typename?: 'enum_hardware_fastener_hardness_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerHardnessMinFields = {
  __typename?: 'enum_hardware_fastener_hardness_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessMutationResponse = {
  __typename?: 'enum_hardware_fastener_hardness_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerHardness>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessObjRelInsertInput = {
  data: EnumHardwareFastenerHardnessInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerHardnessOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessOnConflict = {
  constraint: EnumHardwareFastenerHardnessConstraint;
  update_columns: Array<EnumHardwareFastenerHardnessUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerHardnessBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_hardness" */
export enum EnumHardwareFastenerHardnessSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_hardness" */
export type EnumHardwareFastenerHardnessSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_hardness" */
export enum EnumHardwareFastenerHardnessUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHead = {
  __typename?: 'enum_hardware_fastener_head';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadAggregate = {
  __typename?: 'enum_hardware_fastener_head_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerHeadAggregateFields>;
  nodes: Array<EnumHardwareFastenerHead>;
};

/** aggregate fields of "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadAggregateFields = {
  __typename?: 'enum_hardware_fastener_head_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerHeadMaxFields>;
  min?: Maybe<EnumHardwareFastenerHeadMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerHeadSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerHeadMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerHeadMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadArrRelInsertInput = {
  data: Array<EnumHardwareFastenerHeadInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerHeadOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_head". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerHeadBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerHeadBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerHeadBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerHeadBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_head" */
export enum EnumHardwareFastenerHeadConstraint {
  /** unique or primary key constraint */
  hardware_fastener_head_pkey = 'hardware_fastener_head_pkey'
}

export enum EnumHardwareFastenerHeadEnum {
  button = 'button',
  cap = 'cap',
  /** countersunk */
  flat = 'flat',
  flat_undercut = 'flat_undercut',
  /** hexagonal, same as external hex drive */
  hex = 'hex',
  oval = 'oval',
  /** aka grub screw */
  set = 'set'
}

/** expression to compare columns of type enum_hardware_fastener_head_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerHeadEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerHeadEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerHeadEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerHeadEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerHeadEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerHeadMaxFields = {
  __typename?: 'enum_hardware_fastener_head_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerHeadMinFields = {
  __typename?: 'enum_hardware_fastener_head_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadMutationResponse = {
  __typename?: 'enum_hardware_fastener_head_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerHead>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadObjRelInsertInput = {
  data: EnumHardwareFastenerHeadInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerHeadOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadOnConflict = {
  constraint: EnumHardwareFastenerHeadConstraint;
  update_columns: Array<EnumHardwareFastenerHeadUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerHeadBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_head" */
export enum EnumHardwareFastenerHeadSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_head" */
export type EnumHardwareFastenerHeadSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_head" */
export enum EnumHardwareFastenerHeadUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * https://www.sppusa.com/stainlesssteel_overview.php
 * 
 * 
 * columns and relationships of "enum.hardware_fastener_material"
 */
export type EnumHardwareFastenerMaterial = {
  __typename?: 'enum_hardware_fastener_material';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregate = {
  __typename?: 'enum_hardware_fastener_material_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerMaterialAggregateFields>;
  nodes: Array<EnumHardwareFastenerMaterial>;
};

/** aggregate fields of "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregateFields = {
  __typename?: 'enum_hardware_fastener_material_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerMaterialMaxFields>;
  min?: Maybe<EnumHardwareFastenerMaterialMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerMaterialMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerMaterialMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialArrRelInsertInput = {
  data: Array<EnumHardwareFastenerMaterialInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_material". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerMaterialBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerMaterialBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerMaterialBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerMaterialBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_material" */
export enum EnumHardwareFastenerMaterialConstraint {
  /** unique or primary key constraint */
  hardware_fastener_material_pkey = 'hardware_fastener_material_pkey'
}

export enum EnumHardwareFastenerMaterialEnum {
  aluminum = 'aluminum',
  brass = 'brass',
  plastic = 'plastic',
  /** Stainless Steel of Unknown Property */
  stainless_steel = 'stainless_steel',
  /** Type 304 Stainless Steel */
  stainless_steel_304 = 'stainless_steel_304',
  steel = 'steel',
  titanium = 'titanium'
}

/** expression to compare columns of type enum_hardware_fastener_material_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerMaterialEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerMaterialEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerMaterialEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerMaterialEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerMaterialEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerMaterialMaxFields = {
  __typename?: 'enum_hardware_fastener_material_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerMaterialMinFields = {
  __typename?: 'enum_hardware_fastener_material_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialMutationResponse = {
  __typename?: 'enum_hardware_fastener_material_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerMaterial>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialObjRelInsertInput = {
  data: EnumHardwareFastenerMaterialInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialOnConflict = {
  constraint: EnumHardwareFastenerMaterialConstraint;
  update_columns: Array<EnumHardwareFastenerMaterialUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_material" */
export enum EnumHardwareFastenerMaterialSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_material" */
export enum EnumHardwareFastenerMaterialUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShape = {
  __typename?: 'enum_hardware_fastener_standoff_shape';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeAggregate = {
  __typename?: 'enum_hardware_fastener_standoff_shape_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerStandoffShapeAggregateFields>;
  nodes: Array<EnumHardwareFastenerStandoffShape>;
};

/** aggregate fields of "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeAggregateFields = {
  __typename?: 'enum_hardware_fastener_standoff_shape_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerStandoffShapeMaxFields>;
  min?: Maybe<EnumHardwareFastenerStandoffShapeMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerStandoffShapeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerStandoffShapeMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerStandoffShapeMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeArrRelInsertInput = {
  data: Array<EnumHardwareFastenerStandoffShapeInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerStandoffShapeOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_standoff_shape". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerStandoffShapeBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerStandoffShapeBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerStandoffShapeBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerStandoffShapeBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_standoff_shape" */
export enum EnumHardwareFastenerStandoffShapeConstraint {
  /** unique or primary key constraint */
  hardware_fastener_standoff_shape_pkey = 'hardware_fastener_standoff_shape_pkey'
}

export enum EnumHardwareFastenerStandoffShapeEnum {
  hex = 'hex',
  round = 'round',
  square = 'square',
  triangle = 'triangle'
}

/** expression to compare columns of type enum_hardware_fastener_standoff_shape_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerStandoffShapeEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerStandoffShapeEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerStandoffShapeEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerStandoffShapeEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerStandoffShapeEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerStandoffShapeMaxFields = {
  __typename?: 'enum_hardware_fastener_standoff_shape_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerStandoffShapeMinFields = {
  __typename?: 'enum_hardware_fastener_standoff_shape_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeMutationResponse = {
  __typename?: 'enum_hardware_fastener_standoff_shape_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerStandoffShape>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeObjRelInsertInput = {
  data: EnumHardwareFastenerStandoffShapeInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerStandoffShapeOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeOnConflict = {
  constraint: EnumHardwareFastenerStandoffShapeConstraint;
  update_columns: Array<EnumHardwareFastenerStandoffShapeUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerStandoffShapeBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_standoff_shape" */
export enum EnumHardwareFastenerStandoffShapeSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_standoff_shape" */
export type EnumHardwareFastenerStandoffShapeSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_standoff_shape" */
export enum EnumHardwareFastenerStandoffShapeUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClass = {
  __typename?: 'enum_hardware_fastener_strength_class';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassAggregate = {
  __typename?: 'enum_hardware_fastener_strength_class_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerStrengthClassAggregateFields>;
  nodes: Array<EnumHardwareFastenerStrengthClass>;
};

/** aggregate fields of "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassAggregateFields = {
  __typename?: 'enum_hardware_fastener_strength_class_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerStrengthClassMaxFields>;
  min?: Maybe<EnumHardwareFastenerStrengthClassMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerStrengthClassSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerStrengthClassMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerStrengthClassMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassArrRelInsertInput = {
  data: Array<EnumHardwareFastenerStrengthClassInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerStrengthClassOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_strength_class". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerStrengthClassBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerStrengthClassBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerStrengthClassBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerStrengthClassBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_strength_class" */
export enum EnumHardwareFastenerStrengthClassConstraint {
  /** unique or primary key constraint */
  hardware_fastener_strength_class_pkey = 'hardware_fastener_strength_class_pkey'
}

export enum EnumHardwareFastenerStrengthClassEnum {
  class_10_9 = 'class_10_9',
  class_12_9 = 'class_12_9',
  class_8_8 = 'class_8_8'
}

/** expression to compare columns of type enum_hardware_fastener_strength_class_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerStrengthClassEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerStrengthClassEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerStrengthClassEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerStrengthClassEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerStrengthClassEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerStrengthClassMaxFields = {
  __typename?: 'enum_hardware_fastener_strength_class_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerStrengthClassMinFields = {
  __typename?: 'enum_hardware_fastener_strength_class_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassMutationResponse = {
  __typename?: 'enum_hardware_fastener_strength_class_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerStrengthClass>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassObjRelInsertInput = {
  data: EnumHardwareFastenerStrengthClassInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerStrengthClassOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassOnConflict = {
  constraint: EnumHardwareFastenerStrengthClassConstraint;
  update_columns: Array<EnumHardwareFastenerStrengthClassUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerStrengthClassBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_strength_class" */
export enum EnumHardwareFastenerStrengthClassSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_strength_class" */
export type EnumHardwareFastenerStrengthClassSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_strength_class" */
export enum EnumHardwareFastenerStrengthClassUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirection = {
  __typename?: 'enum_hardware_fastener_thread_direction';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionAggregate = {
  __typename?: 'enum_hardware_fastener_thread_direction_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerThreadDirectionAggregateFields>;
  nodes: Array<EnumHardwareFastenerThreadDirection>;
};

/** aggregate fields of "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionAggregateFields = {
  __typename?: 'enum_hardware_fastener_thread_direction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerThreadDirectionMaxFields>;
  min?: Maybe<EnumHardwareFastenerThreadDirectionMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerThreadDirectionSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerThreadDirectionMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerThreadDirectionMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionArrRelInsertInput = {
  data: Array<EnumHardwareFastenerThreadDirectionInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerThreadDirectionOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_thread_direction". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerThreadDirectionBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerThreadDirectionBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerThreadDirectionBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerThreadDirectionBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_thread_direction" */
export enum EnumHardwareFastenerThreadDirectionConstraint {
  /** unique or primary key constraint */
  hardware_fastener_thread_direction_pkey = 'hardware_fastener_thread_direction_pkey'
}

export enum EnumHardwareFastenerThreadDirectionEnum {
  /** Specialty direction of threading */
  left = 'left',
  /** Typical direction of threading */
  right = 'right'
}

/** expression to compare columns of type enum_hardware_fastener_thread_direction_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerThreadDirectionEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerThreadDirectionEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerThreadDirectionEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerThreadDirectionEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerThreadDirectionEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerThreadDirectionMaxFields = {
  __typename?: 'enum_hardware_fastener_thread_direction_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerThreadDirectionMinFields = {
  __typename?: 'enum_hardware_fastener_thread_direction_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionMutationResponse = {
  __typename?: 'enum_hardware_fastener_thread_direction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerThreadDirection>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionObjRelInsertInput = {
  data: EnumHardwareFastenerThreadDirectionInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerThreadDirectionOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionOnConflict = {
  constraint: EnumHardwareFastenerThreadDirectionConstraint;
  update_columns: Array<EnumHardwareFastenerThreadDirectionUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerThreadDirectionBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_thread_direction" */
export enum EnumHardwareFastenerThreadDirectionSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_thread_direction" */
export type EnumHardwareFastenerThreadDirectionSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_thread_direction" */
export enum EnumHardwareFastenerThreadDirectionUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFit = {
  __typename?: 'enum_hardware_fastener_thread_fit';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitAggregate = {
  __typename?: 'enum_hardware_fastener_thread_fit_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerThreadFitAggregateFields>;
  nodes: Array<EnumHardwareFastenerThreadFit>;
};

/** aggregate fields of "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitAggregateFields = {
  __typename?: 'enum_hardware_fastener_thread_fit_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerThreadFitMaxFields>;
  min?: Maybe<EnumHardwareFastenerThreadFitMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerThreadFitSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerThreadFitMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerThreadFitMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitArrRelInsertInput = {
  data: Array<EnumHardwareFastenerThreadFitInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerThreadFitOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_thread_fit". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerThreadFitBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerThreadFitBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerThreadFitBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerThreadFitBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_thread_fit" */
export enum EnumHardwareFastenerThreadFitConstraint {
  /** unique or primary key constraint */
  hardware_fastener_thread_fit_pkey = 'hardware_fastener_thread_fit_pkey'
}

export enum EnumHardwareFastenerThreadFitEnum {
  class_2a = 'class_2a',
  class_3a = 'class_3a',
  class_4g6g = 'class_4g6g',
  class_4h = 'class_4h',
  class_6g = 'class_6g',
  class_6h = 'class_6h'
}

/** expression to compare columns of type enum_hardware_fastener_thread_fit_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerThreadFitEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerThreadFitEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerThreadFitEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerThreadFitEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerThreadFitEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerThreadFitMaxFields = {
  __typename?: 'enum_hardware_fastener_thread_fit_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerThreadFitMinFields = {
  __typename?: 'enum_hardware_fastener_thread_fit_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitMutationResponse = {
  __typename?: 'enum_hardware_fastener_thread_fit_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerThreadFit>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitObjRelInsertInput = {
  data: EnumHardwareFastenerThreadFitInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerThreadFitOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitOnConflict = {
  constraint: EnumHardwareFastenerThreadFitConstraint;
  update_columns: Array<EnumHardwareFastenerThreadFitUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerThreadFitBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_thread_fit" */
export enum EnumHardwareFastenerThreadFitSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_thread_fit" */
export type EnumHardwareFastenerThreadFitSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_thread_fit" */
export enum EnumHardwareFastenerThreadFitUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * category of thread
 * 
 * 
 * columns and relationships of "enum.hardware_fastener_thread_type"
 */
export type EnumHardwareFastenerThreadType = {
  __typename?: 'enum_hardware_fastener_thread_type';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeAggregate = {
  __typename?: 'enum_hardware_fastener_thread_type_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerThreadTypeAggregateFields>;
  nodes: Array<EnumHardwareFastenerThreadType>;
};

/** aggregate fields of "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeAggregateFields = {
  __typename?: 'enum_hardware_fastener_thread_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerThreadTypeMaxFields>;
  min?: Maybe<EnumHardwareFastenerThreadTypeMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerThreadTypeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerThreadTypeMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerThreadTypeMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeArrRelInsertInput = {
  data: Array<EnumHardwareFastenerThreadTypeInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerThreadTypeOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_thread_type". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerThreadTypeBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerThreadTypeBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerThreadTypeBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerThreadTypeBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_thread_type" */
export enum EnumHardwareFastenerThreadTypeConstraint {
  /** unique or primary key constraint */
  hardware_fastener_thread_type_pkey = 'hardware_fastener_thread_type_pkey'
}

export enum EnumHardwareFastenerThreadTypeEnum {
  coarse = 'coarse',
  extra_fine = 'extra_fine',
  fine = 'fine'
}

/** expression to compare columns of type enum_hardware_fastener_thread_type_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerThreadTypeEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerThreadTypeEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerThreadTypeEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerThreadTypeEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerThreadTypeEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerThreadTypeMaxFields = {
  __typename?: 'enum_hardware_fastener_thread_type_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerThreadTypeMinFields = {
  __typename?: 'enum_hardware_fastener_thread_type_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeMutationResponse = {
  __typename?: 'enum_hardware_fastener_thread_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerThreadType>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeObjRelInsertInput = {
  data: EnumHardwareFastenerThreadTypeInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerThreadTypeOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeOnConflict = {
  constraint: EnumHardwareFastenerThreadTypeConstraint;
  update_columns: Array<EnumHardwareFastenerThreadTypeUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerThreadTypeBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_thread_type" */
export enum EnumHardwareFastenerThreadTypeSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_thread_type" */
export type EnumHardwareFastenerThreadTypeSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_thread_type" */
export enum EnumHardwareFastenerThreadTypeUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * thread tolerance classes
 * 
 * 
 * columns and relationships of "enum.hardware_fastener_tolerance"
 */
export type EnumHardwareFastenerTolerance = {
  __typename?: 'enum_hardware_fastener_tolerance';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceAggregate = {
  __typename?: 'enum_hardware_fastener_tolerance_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerToleranceAggregateFields>;
  nodes: Array<EnumHardwareFastenerTolerance>;
};

/** aggregate fields of "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceAggregateFields = {
  __typename?: 'enum_hardware_fastener_tolerance_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerToleranceMaxFields>;
  min?: Maybe<EnumHardwareFastenerToleranceMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerToleranceSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerToleranceMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerToleranceMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceArrRelInsertInput = {
  data: Array<EnumHardwareFastenerToleranceInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerToleranceOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_tolerance". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerToleranceBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerToleranceBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerToleranceBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerToleranceBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_tolerance" */
export enum EnumHardwareFastenerToleranceConstraint {
  /** unique or primary key constraint */
  hardware_fastener_tolerance_pkey = 'hardware_fastener_tolerance_pkey'
}

/** input type for inserting data into table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerToleranceMaxFields = {
  __typename?: 'enum_hardware_fastener_tolerance_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerToleranceMinFields = {
  __typename?: 'enum_hardware_fastener_tolerance_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceMutationResponse = {
  __typename?: 'enum_hardware_fastener_tolerance_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerTolerance>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceObjRelInsertInput = {
  data: EnumHardwareFastenerToleranceInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerToleranceOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceOnConflict = {
  constraint: EnumHardwareFastenerToleranceConstraint;
  update_columns: Array<EnumHardwareFastenerToleranceUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerToleranceBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerTolerancePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_tolerance" */
export enum EnumHardwareFastenerToleranceSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_tolerance" */
export type EnumHardwareFastenerToleranceSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_tolerance" */
export enum EnumHardwareFastenerToleranceUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/**
 * Material which the fastener is to be used in, ie. _Wood_ for _Wood Screws_
 * 
 * 
 * columns and relationships of "enum.hardware_fastener_use_material"
 */
export type EnumHardwareFastenerUseMaterial = {
  __typename?: 'enum_hardware_fastener_use_material';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialAggregate = {
  __typename?: 'enum_hardware_fastener_use_material_aggregate';
  aggregate?: Maybe<EnumHardwareFastenerUseMaterialAggregateFields>;
  nodes: Array<EnumHardwareFastenerUseMaterial>;
};

/** aggregate fields of "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialAggregateFields = {
  __typename?: 'enum_hardware_fastener_use_material_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFastenerUseMaterialMaxFields>;
  min?: Maybe<EnumHardwareFastenerUseMaterialMinFields>;
};


/** aggregate fields of "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerUseMaterialSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFastenerUseMaterialMaxOrderBy>;
  min?: Maybe<EnumHardwareFastenerUseMaterialMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialArrRelInsertInput = {
  data: Array<EnumHardwareFastenerUseMaterialInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerUseMaterialOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_fastener_use_material". All fields are combined with a logical 'AND'. */
export type EnumHardwareFastenerUseMaterialBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerUseMaterialBoolExp>>>;
  _not?: Maybe<EnumHardwareFastenerUseMaterialBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerUseMaterialBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_fastener_use_material" */
export enum EnumHardwareFastenerUseMaterialConstraint {
  /** unique or primary key constraint */
  hardware_fastener_use_material_pkey = 'hardware_fastener_use_material_pkey'
}

export enum EnumHardwareFastenerUseMaterialEnum {
  drywall = 'drywall',
  /** Pre-threaded holes, typically in metal */
  machine = 'machine',
  plastic = 'plastic',
  wood = 'wood'
}

/** expression to compare columns of type enum_hardware_fastener_use_material_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFastenerUseMaterialEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
  _in?: Maybe<Array<EnumHardwareFastenerUseMaterialEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
  _nin?: Maybe<Array<EnumHardwareFastenerUseMaterialEnum>>;
};

/** input type for inserting data into table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFastenerUseMaterialMaxFields = {
  __typename?: 'enum_hardware_fastener_use_material_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFastenerUseMaterialMinFields = {
  __typename?: 'enum_hardware_fastener_use_material_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialMutationResponse = {
  __typename?: 'enum_hardware_fastener_use_material_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerUseMaterial>;
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialObjRelInsertInput = {
  data: EnumHardwareFastenerUseMaterialInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerUseMaterialOnConflict>;
};

/** on conflict condition type for table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialOnConflict = {
  constraint: EnumHardwareFastenerUseMaterialConstraint;
  update_columns: Array<EnumHardwareFastenerUseMaterialUpdateColumn>;
  where?: Maybe<EnumHardwareFastenerUseMaterialBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_fastener_use_material" */
export enum EnumHardwareFastenerUseMaterialSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_use_material" */
export type EnumHardwareFastenerUseMaterialSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_fastener_use_material" */
export enum EnumHardwareFastenerUseMaterialUpdateColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** columns and relationships of "enum.hardware_finish" */
export type EnumHardwareFinish = {
  __typename?: 'enum_hardware_finish';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "enum.hardware_finish" */
export type EnumHardwareFinishAggregate = {
  __typename?: 'enum_hardware_finish_aggregate';
  aggregate?: Maybe<EnumHardwareFinishAggregateFields>;
  nodes: Array<EnumHardwareFinish>;
};

/** aggregate fields of "enum.hardware_finish" */
export type EnumHardwareFinishAggregateFields = {
  __typename?: 'enum_hardware_finish_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EnumHardwareFinishMaxFields>;
  min?: Maybe<EnumHardwareFinishMinFields>;
};


/** aggregate fields of "enum.hardware_finish" */
export type EnumHardwareFinishAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFinishSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "enum.hardware_finish" */
export type EnumHardwareFinishAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<EnumHardwareFinishMaxOrderBy>;
  min?: Maybe<EnumHardwareFinishMinOrderBy>;
};

/** input type for inserting array relation for remote table "enum.hardware_finish" */
export type EnumHardwareFinishArrRelInsertInput = {
  data: Array<EnumHardwareFinishInsertInput>;
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>;
};

/** Boolean expression to filter rows from the table "enum.hardware_finish". All fields are combined with a logical 'AND'. */
export type EnumHardwareFinishBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFinishBoolExp>>>;
  _not?: Maybe<EnumHardwareFinishBoolExp>;
  _or?: Maybe<Array<Maybe<EnumHardwareFinishBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "enum.hardware_finish" */
export enum EnumHardwareFinishConstraint {
  /** unique or primary key constraint */
  hardware_finish_pkey = 'hardware_finish_pkey'
}

export enum EnumHardwareFinishEnum {
  /** Black Oxide */
  black_oxide = 'black_oxide',
  blue_dyed = 'blue_dyed',
  cadmium_plated = 'cadmium_plated',
  chrome_plated = 'chrome_plated',
  painted = 'painted',
  passivated = 'passivated',
  ptfe_coated = 'ptfe_coated',
  zinc_plated = 'zinc_plated'
}

/** expression to compare columns of type enum_hardware_finish_enum. All fields are combined with logical 'AND'. */
export type EnumHardwareFinishEnumComparisonExp = {
  _eq?: Maybe<EnumHardwareFinishEnum>;
  _in?: Maybe<Array<EnumHardwareFinishEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<EnumHardwareFinishEnum>;
  _nin?: Maybe<Array<EnumHardwareFinishEnum>>;
};

/** input type for inserting data into table "enum.hardware_finish" */
export type EnumHardwareFinishInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EnumHardwareFinishMaxFields = {
  __typename?: 'enum_hardware_finish_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "enum.hardware_finish" */
export type EnumHardwareFinishMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EnumHardwareFinishMinFields = {
  __typename?: 'enum_hardware_finish_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "enum.hardware_finish" */
export type EnumHardwareFinishMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "enum.hardware_finish" */
export type EnumHardwareFinishMutationResponse = {
  __typename?: 'enum_hardware_finish_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFinish>;
};

/** input type for inserting object relation for remote table "enum.hardware_finish" */
export type EnumHardwareFinishObjRelInsertInput = {
  data: EnumHardwareFinishInsertInput;
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>;
};

/** on conflict condition type for table "enum.hardware_finish" */
export type EnumHardwareFinishOnConflict = {
  constraint: EnumHardwareFinishConstraint;
  update_columns: Array<EnumHardwareFinishUpdateColumn>;
  where?: Maybe<EnumHardwareFinishBoolExp>;
};

/** ordering options when selecting data from "enum.hardware_finish" */
export type EnumHardwareFinishOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "enum.hardware_finish" */
export type EnumHardwareFinishPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "enum.hardware_finish" */
export enum EnumHardwareFinishSelectColumn {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "enum.hardware_finish" */
export type EnumHardwareFinishSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "enum.hardware_finish" */
export enum EnumHardwareFinishUpdateColumn {
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
  item_hardware_fastener_bolt = 'item_hardware_fastener_bolt',
  item_hardware_fastener_nut = 'item_hardware_fastener_nut',
  item_hardware_fastener_screw = 'item_hardware_fastener_screw',
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
  /** German ISO member, Deutsches Institut für Normung */
  din = 'din',
  /** International Standards Organization. Default metric unit. */
  iso = 'iso',
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
  categories: Array<IconItemCategoryMap>;
  /** An aggregated array relationship */
  categories_aggregate: IconItemCategoryMapAggregate;
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
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>;
  where?: Maybe<IconItemCategoryMapBoolExp>;
};


/**
 * Image / icon data for labels
 * 
 * 
 * columns and relationships of "icon"
 */
export type IconCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>;
  where?: Maybe<IconItemCategoryMapBoolExp>;
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
  categories?: Maybe<IconItemCategoryMapBoolExp>;
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
  categories?: Maybe<IconItemCategoryMapArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  items?: Maybe<IconItemMapArrRelInsertInput>;
  labels?: Maybe<IconLabelMapArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
};

/** columns and relationships of "icon_item_category_map" */
export type IconItemCategoryMap = {
  __typename?: 'icon_item_category_map';
  category: EnumItemClassEnum;
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


/** columns and relationships of "icon_item_category_map" */
export type IconItemCategoryMapCriteriaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "icon_item_category_map" */
export type IconItemCategoryMapAggregate = {
  __typename?: 'icon_item_category_map_aggregate';
  aggregate?: Maybe<IconItemCategoryMapAggregateFields>;
  nodes: Array<IconItemCategoryMap>;
};

/** aggregate fields of "icon_item_category_map" */
export type IconItemCategoryMapAggregateFields = {
  __typename?: 'icon_item_category_map_aggregate_fields';
  avg?: Maybe<IconItemCategoryMapAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IconItemCategoryMapMaxFields>;
  min?: Maybe<IconItemCategoryMapMinFields>;
  stddev?: Maybe<IconItemCategoryMapStddevFields>;
  stddev_pop?: Maybe<IconItemCategoryMapStddevPopFields>;
  stddev_samp?: Maybe<IconItemCategoryMapStddevSampFields>;
  sum?: Maybe<IconItemCategoryMapSumFields>;
  var_pop?: Maybe<IconItemCategoryMapVarPopFields>;
  var_samp?: Maybe<IconItemCategoryMapVarSampFields>;
  variance?: Maybe<IconItemCategoryMapVarianceFields>;
};


/** aggregate fields of "icon_item_category_map" */
export type IconItemCategoryMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconItemCategoryMapSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "icon_item_category_map" */
export type IconItemCategoryMapAggregateOrderBy = {
  avg?: Maybe<IconItemCategoryMapAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<IconItemCategoryMapMaxOrderBy>;
  min?: Maybe<IconItemCategoryMapMinOrderBy>;
  stddev?: Maybe<IconItemCategoryMapStddevOrderBy>;
  stddev_pop?: Maybe<IconItemCategoryMapStddevPopOrderBy>;
  stddev_samp?: Maybe<IconItemCategoryMapStddevSampOrderBy>;
  sum?: Maybe<IconItemCategoryMapSumOrderBy>;
  var_pop?: Maybe<IconItemCategoryMapVarPopOrderBy>;
  var_samp?: Maybe<IconItemCategoryMapVarSampOrderBy>;
  variance?: Maybe<IconItemCategoryMapVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type IconItemCategoryMapAppendInput = {
  criteria?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "icon_item_category_map" */
export type IconItemCategoryMapArrRelInsertInput = {
  data: Array<IconItemCategoryMapInsertInput>;
  on_conflict?: Maybe<IconItemCategoryMapOnConflict>;
};

/** aggregate avg on columns */
export type IconItemCategoryMapAvgFields = {
  __typename?: 'icon_item_category_map_avg_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapAvgOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "icon_item_category_map". All fields are combined with a logical 'AND'. */
export type IconItemCategoryMapBoolExp = {
  _and?: Maybe<Array<Maybe<IconItemCategoryMapBoolExp>>>;
  _not?: Maybe<IconItemCategoryMapBoolExp>;
  _or?: Maybe<Array<Maybe<IconItemCategoryMapBoolExp>>>;
  category?: Maybe<EnumItemClassEnumComparisonExp>;
  criteria?: Maybe<JsonbComparisonExp>;
  icon_id?: Maybe<UuidComparisonExp>;
  sequence?: Maybe<SmallintComparisonExp>;
};

/** unique or primary key constraints on table "icon_item_category_map" */
export enum IconItemCategoryMapConstraint {
  /** unique or primary key constraint */
  icon_item_category_map_category_sequence_key = 'icon_item_category_map_category_sequence_key',
  /** unique or primary key constraint */
  icon_item_category_map_pkey = 'icon_item_category_map_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type IconItemCategoryMapDeleteAtPathInput = {
  criteria?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type IconItemCategoryMapDeleteElemInput = {
  criteria?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type IconItemCategoryMapDeleteKeyInput = {
  criteria?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "icon_item_category_map" */
export type IconItemCategoryMapIncInput = {
  sequence?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "icon_item_category_map" */
export type IconItemCategoryMapInsertInput = {
  category?: Maybe<EnumItemClassEnum>;
  criteria?: Maybe<Scalars['jsonb']>;
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type IconItemCategoryMapMaxFields = {
  __typename?: 'icon_item_category_map_max_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapMaxOrderBy = {
  icon_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type IconItemCategoryMapMinFields = {
  __typename?: 'icon_item_category_map_min_fields';
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapMinOrderBy = {
  icon_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** response of any mutation on the table "icon_item_category_map" */
export type IconItemCategoryMapMutationResponse = {
  __typename?: 'icon_item_category_map_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<IconItemCategoryMap>;
};

/** input type for inserting object relation for remote table "icon_item_category_map" */
export type IconItemCategoryMapObjRelInsertInput = {
  data: IconItemCategoryMapInsertInput;
  on_conflict?: Maybe<IconItemCategoryMapOnConflict>;
};

/** on conflict condition type for table "icon_item_category_map" */
export type IconItemCategoryMapOnConflict = {
  constraint: IconItemCategoryMapConstraint;
  update_columns: Array<IconItemCategoryMapUpdateColumn>;
  where?: Maybe<IconItemCategoryMapBoolExp>;
};

/** ordering options when selecting data from "icon_item_category_map" */
export type IconItemCategoryMapOrderBy = {
  category?: Maybe<OrderBy>;
  criteria?: Maybe<OrderBy>;
  icon_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** primary key columns input for table: "icon_item_category_map" */
export type IconItemCategoryMapPkColumnsInput = {
  category: EnumItemClassEnum;
  icon_id: Scalars['uuid'];
  sequence: Scalars['smallint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type IconItemCategoryMapPrependInput = {
  criteria?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "icon_item_category_map" */
export enum IconItemCategoryMapSelectColumn {
  /** column name */
  category = 'category',
  /** column name */
  criteria = 'criteria',
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  sequence = 'sequence'
}

/** input type for updating data in table "icon_item_category_map" */
export type IconItemCategoryMapSetInput = {
  category?: Maybe<EnumItemClassEnum>;
  criteria?: Maybe<Scalars['jsonb']>;
  icon_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type IconItemCategoryMapStddevFields = {
  __typename?: 'icon_item_category_map_stddev_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapStddevOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type IconItemCategoryMapStddevPopFields = {
  __typename?: 'icon_item_category_map_stddev_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapStddevPopOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type IconItemCategoryMapStddevSampFields = {
  __typename?: 'icon_item_category_map_stddev_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapStddevSampOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type IconItemCategoryMapSumFields = {
  __typename?: 'icon_item_category_map_sum_fields';
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapSumOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** update columns of table "icon_item_category_map" */
export enum IconItemCategoryMapUpdateColumn {
  /** column name */
  category = 'category',
  /** column name */
  criteria = 'criteria',
  /** column name */
  icon_id = 'icon_id',
  /** column name */
  sequence = 'sequence'
}

/** aggregate var_pop on columns */
export type IconItemCategoryMapVarPopFields = {
  __typename?: 'icon_item_category_map_var_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapVarPopOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type IconItemCategoryMapVarSampFields = {
  __typename?: 'icon_item_category_map_var_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapVarSampOrderBy = {
  sequence?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type IconItemCategoryMapVarianceFields = {
  __typename?: 'icon_item_category_map_variance_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "icon_item_category_map" */
export type IconItemCategoryMapVarianceOrderBy = {
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
  categories_aggregate?: Maybe<IconItemCategoryMapAggregateOrderBy>;
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
  bundle: Array<ItemBundleMap>;
  /** An aggregated array relationship */
  bundle_aggregate: ItemBundleMapAggregate;
  class: EnumItemClassEnum;
  id: Scalars['Int'];
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
  /** null means that there is stock, but of an unknown quantity. */
  stock?: Maybe<Scalars['smallint']>;
  /** An array relationship */
  vendorItems: Array<VendorItem>;
  /** An aggregated array relationship */
  vendorItems_aggregate: VendorItemAggregate;
};


/** columns and relationships of "item" */
export type ItemBundleArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
};


/** columns and relationships of "item" */
export type ItemBundleAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
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
  stock?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item" */
export type ItemAvgOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type ItemBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBoolExp>>>;
  _not?: Maybe<ItemBoolExp>;
  _or?: Maybe<Array<Maybe<ItemBoolExp>>>;
  bundle?: Maybe<ItemBundleMapBoolExp>;
  class?: Maybe<EnumItemClassEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  labelTemplates?: Maybe<LabelTemplateMapBoolExp>;
  labels?: Maybe<LabelBoolExp>;
  manufacturerItems?: Maybe<ManufacturerItemBoolExp>;
  object?: Maybe<JsonbComparisonExp>;
  orderItems?: Maybe<OrderItemBoolExp>;
  stock?: Maybe<SmallintComparisonExp>;
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
  items: Array<ItemBundleMap>;
  /** An aggregated array relationship */
  items_aggregate: ItemBundleMapAggregate;
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
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
};


/**
 * for items purchased as a bundle or kit (a box of screws for example)
 * 
 * 
 * columns and relationships of "item.bundle"
 */
export type ItemBundleItemsAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
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
  items?: Maybe<ItemBundleMapBoolExp>;
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
  items?: Maybe<ItemBundleMapArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "item.bundle_map" */
export type ItemBundleMap = {
  __typename?: 'item_bundle_map';
  /** An object relationship */
  bundle: ItemBundle;
  /** An object relationship */
  item: Item;
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};

/** aggregated selection of "item.bundle_map" */
export type ItemBundleMapAggregate = {
  __typename?: 'item_bundle_map_aggregate';
  aggregate?: Maybe<ItemBundleMapAggregateFields>;
  nodes: Array<ItemBundleMap>;
};

/** aggregate fields of "item.bundle_map" */
export type ItemBundleMapAggregateFields = {
  __typename?: 'item_bundle_map_aggregate_fields';
  avg?: Maybe<ItemBundleMapAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemBundleMapMaxFields>;
  min?: Maybe<ItemBundleMapMinFields>;
  stddev?: Maybe<ItemBundleMapStddevFields>;
  stddev_pop?: Maybe<ItemBundleMapStddevPopFields>;
  stddev_samp?: Maybe<ItemBundleMapStddevSampFields>;
  sum?: Maybe<ItemBundleMapSumFields>;
  var_pop?: Maybe<ItemBundleMapVarPopFields>;
  var_samp?: Maybe<ItemBundleMapVarSampFields>;
  variance?: Maybe<ItemBundleMapVarianceFields>;
};


/** aggregate fields of "item.bundle_map" */
export type ItemBundleMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemBundleMapSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.bundle_map" */
export type ItemBundleMapAggregateOrderBy = {
  avg?: Maybe<ItemBundleMapAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemBundleMapMaxOrderBy>;
  min?: Maybe<ItemBundleMapMinOrderBy>;
  stddev?: Maybe<ItemBundleMapStddevOrderBy>;
  stddev_pop?: Maybe<ItemBundleMapStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemBundleMapStddevSampOrderBy>;
  sum?: Maybe<ItemBundleMapSumOrderBy>;
  var_pop?: Maybe<ItemBundleMapVarPopOrderBy>;
  var_samp?: Maybe<ItemBundleMapVarSampOrderBy>;
  variance?: Maybe<ItemBundleMapVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "item.bundle_map" */
export type ItemBundleMapArrRelInsertInput = {
  data: Array<ItemBundleMapInsertInput>;
  on_conflict?: Maybe<ItemBundleMapOnConflict>;
};

/** aggregate avg on columns */
export type ItemBundleMapAvgFields = {
  __typename?: 'item_bundle_map_avg_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.bundle_map" */
export type ItemBundleMapAvgOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.bundle_map". All fields are combined with a logical 'AND'. */
export type ItemBundleMapBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBundleMapBoolExp>>>;
  _not?: Maybe<ItemBundleMapBoolExp>;
  _or?: Maybe<Array<Maybe<ItemBundleMapBoolExp>>>;
  bundle?: Maybe<ItemBundleBoolExp>;
  item?: Maybe<ItemBoolExp>;
  item_bundle_id?: Maybe<IntComparisonExp>;
  item_member_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "item.bundle_map" */
export enum ItemBundleMapConstraint {
  /** unique or primary key constraint */
  item_bundle_map_pkey = 'item_bundle_map_pkey'
}

/** input type for incrementing integer column in table "item.bundle_map" */
export type ItemBundleMapIncInput = {
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "item.bundle_map" */
export type ItemBundleMapInsertInput = {
  bundle?: Maybe<ItemBundleObjRelInsertInput>;
  item?: Maybe<ItemObjRelInsertInput>;
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type ItemBundleMapMaxFields = {
  __typename?: 'item_bundle_map_max_fields';
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "item.bundle_map" */
export type ItemBundleMapMaxOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemBundleMapMinFields = {
  __typename?: 'item_bundle_map_min_fields';
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "item.bundle_map" */
export type ItemBundleMapMinOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.bundle_map" */
export type ItemBundleMapMutationResponse = {
  __typename?: 'item_bundle_map_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemBundleMap>;
};

/** input type for inserting object relation for remote table "item.bundle_map" */
export type ItemBundleMapObjRelInsertInput = {
  data: ItemBundleMapInsertInput;
  on_conflict?: Maybe<ItemBundleMapOnConflict>;
};

/** on conflict condition type for table "item.bundle_map" */
export type ItemBundleMapOnConflict = {
  constraint: ItemBundleMapConstraint;
  update_columns: Array<ItemBundleMapUpdateColumn>;
  where?: Maybe<ItemBundleMapBoolExp>;
};

/** ordering options when selecting data from "item.bundle_map" */
export type ItemBundleMapOrderBy = {
  bundle?: Maybe<ItemBundleOrderBy>;
  item?: Maybe<ItemOrderBy>;
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.bundle_map" */
export type ItemBundleMapPkColumnsInput = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};

/** select columns of table "item.bundle_map" */
export enum ItemBundleMapSelectColumn {
  /** column name */
  item_bundle_id = 'item_bundle_id',
  /** column name */
  item_member_id = 'item_member_id'
}

/** input type for updating data in table "item.bundle_map" */
export type ItemBundleMapSetInput = {
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type ItemBundleMapStddevFields = {
  __typename?: 'item_bundle_map_stddev_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.bundle_map" */
export type ItemBundleMapStddevOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemBundleMapStddevPopFields = {
  __typename?: 'item_bundle_map_stddev_pop_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.bundle_map" */
export type ItemBundleMapStddevPopOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemBundleMapStddevSampFields = {
  __typename?: 'item_bundle_map_stddev_samp_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.bundle_map" */
export type ItemBundleMapStddevSampOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemBundleMapSumFields = {
  __typename?: 'item_bundle_map_sum_fields';
  item_bundle_id?: Maybe<Scalars['Int']>;
  item_member_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item.bundle_map" */
export type ItemBundleMapSumOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** update columns of table "item.bundle_map" */
export enum ItemBundleMapUpdateColumn {
  /** column name */
  item_bundle_id = 'item_bundle_id',
  /** column name */
  item_member_id = 'item_member_id'
}

/** aggregate var_pop on columns */
export type ItemBundleMapVarPopFields = {
  __typename?: 'item_bundle_map_var_pop_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.bundle_map" */
export type ItemBundleMapVarPopOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemBundleMapVarSampFields = {
  __typename?: 'item_bundle_map_var_samp_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.bundle_map" */
export type ItemBundleMapVarSampOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemBundleMapVarianceFields = {
  __typename?: 'item_bundle_map_variance_fields';
  item_bundle_id?: Maybe<Scalars['Float']>;
  item_member_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.bundle_map" */
export type ItemBundleMapVarianceOrderBy = {
  item_bundle_id?: Maybe<OrderBy>;
  item_member_id?: Maybe<OrderBy>;
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
  items_aggregate?: Maybe<ItemBundleMapAggregateOrderBy>;
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

/** columns and relationships of "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBolt = {
  __typename?: 'item_hardware_fastener_bolt';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  /** Any value here means it is countersunk; A value != the `head_height` means it is only partially countersunk */
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  drive_type: EnumHardwareFastenerDriveEnum;
  /** This is what is typically stated as a fastener's length. Length of bolt that is within the material it is screwed into */
  embedded_length: Scalars['numeric'];
  /** Coating */
  finish?: Maybe<EnumHardwareFinishEnum>;
  hardness?: Maybe<EnumHardwareFastenerHardnessEnum>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  head_type: EnumHardwareFastenerHeadEnum;
  id: Scalars['Int'];
  /** Material, such as Zinc coated steel or Stainless Steel */
  material?: Maybe<EnumHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  point_type?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  /** length of the straight part of the thread */
  shaft_length?: Maybe<Scalars['numeric']>;
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
  strength_class?: Maybe<EnumHardwareFastenerStrengthClassEnum>;
  /** psi */
  tensile_strength?: Maybe<Scalars['numeric']>;
  /** ie. M3 or #6 */
  thread_diameter: Scalars['numeric'];
  thread_direction: EnumHardwareFastenerThreadDirectionEnum;
  thread_fit?: Maybe<EnumHardwareFastenerThreadFitEnum>;
  /** if fully threaded, this should be === `shaft_length` */
  thread_length?: Maybe<Scalars['numeric']>;
  /** TPI for usc, Pitch for metric ; ie. the 0.5 in M3 x 0.5 */
  thread_pitch: Scalars['numeric'];
  thread_type?: Maybe<EnumHardwareFastenerThreadTypeEnum>;
  /** ENUM:Unit */
  unit: EnumUnitEnum;
  /** Material this fastener is meant to thread into. */
  use_material: EnumHardwareFastenerUseMaterialEnum;
};


/** columns and relationships of "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltSpecificationsMetArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregate = {
  __typename?: 'item_hardware_fastener_bolt_aggregate';
  aggregate?: Maybe<ItemHardwareFastenerBoltAggregateFields>;
  nodes: Array<ItemHardwareFastenerBolt>;
};

/** aggregate fields of "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregateFields = {
  __typename?: 'item_hardware_fastener_bolt_aggregate_fields';
  avg?: Maybe<ItemHardwareFastenerBoltAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ItemHardwareFastenerBoltMaxFields>;
  min?: Maybe<ItemHardwareFastenerBoltMinFields>;
  stddev?: Maybe<ItemHardwareFastenerBoltStddevFields>;
  stddev_pop?: Maybe<ItemHardwareFastenerBoltStddevPopFields>;
  stddev_samp?: Maybe<ItemHardwareFastenerBoltStddevSampFields>;
  sum?: Maybe<ItemHardwareFastenerBoltSumFields>;
  var_pop?: Maybe<ItemHardwareFastenerBoltVarPopFields>;
  var_samp?: Maybe<ItemHardwareFastenerBoltVarSampFields>;
  variance?: Maybe<ItemHardwareFastenerBoltVarianceFields>;
};


/** aggregate fields of "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerBoltAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ItemHardwareFastenerBoltMaxOrderBy>;
  min?: Maybe<ItemHardwareFastenerBoltMinOrderBy>;
  stddev?: Maybe<ItemHardwareFastenerBoltStddevOrderBy>;
  stddev_pop?: Maybe<ItemHardwareFastenerBoltStddevPopOrderBy>;
  stddev_samp?: Maybe<ItemHardwareFastenerBoltStddevSampOrderBy>;
  sum?: Maybe<ItemHardwareFastenerBoltSumOrderBy>;
  var_pop?: Maybe<ItemHardwareFastenerBoltVarPopOrderBy>;
  var_samp?: Maybe<ItemHardwareFastenerBoltVarSampOrderBy>;
  variance?: Maybe<ItemHardwareFastenerBoltVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ItemHardwareFastenerBoltAppendInput = {
  specifications_met?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltArrRelInsertInput = {
  data: Array<ItemHardwareFastenerBoltInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerBoltOnConflict>;
};

/** aggregate avg on columns */
export type ItemHardwareFastenerBoltAvgFields = {
  __typename?: 'item_hardware_fastener_bolt_avg_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shaft_length?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_diameter?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAvgOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "item.hardware_fastener_bolt". All fields are combined with a logical 'AND'. */
export type ItemHardwareFastenerBoltBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerBoltBoolExp>>>;
  _not?: Maybe<ItemHardwareFastenerBoltBoolExp>;
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerBoltBoolExp>>>;
  countersunk_angle?: Maybe<NumericComparisonExp>;
  countersunk_height?: Maybe<NumericComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  drive_size?: Maybe<StringComparisonExp>;
  drive_type?: Maybe<EnumHardwareFastenerDriveEnumComparisonExp>;
  embedded_length?: Maybe<NumericComparisonExp>;
  finish?: Maybe<EnumHardwareFinishEnumComparisonExp>;
  hardness?: Maybe<EnumHardwareFastenerHardnessEnumComparisonExp>;
  head_diameter?: Maybe<NumericComparisonExp>;
  head_height?: Maybe<NumericComparisonExp>;
  head_type?: Maybe<EnumHardwareFastenerHeadEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  material?: Maybe<EnumHardwareFastenerMaterialEnumComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  point_type?: Maybe<EnumHardwareFastenerBoltPointEnumComparisonExp>;
  shaft_length?: Maybe<NumericComparisonExp>;
  specifications_met?: Maybe<JsonbComparisonExp>;
  strength_class?: Maybe<EnumHardwareFastenerStrengthClassEnumComparisonExp>;
  tensile_strength?: Maybe<NumericComparisonExp>;
  thread_diameter?: Maybe<NumericComparisonExp>;
  thread_direction?: Maybe<EnumHardwareFastenerThreadDirectionEnumComparisonExp>;
  thread_fit?: Maybe<EnumHardwareFastenerThreadFitEnumComparisonExp>;
  thread_length?: Maybe<NumericComparisonExp>;
  thread_pitch?: Maybe<NumericComparisonExp>;
  thread_type?: Maybe<EnumHardwareFastenerThreadTypeEnumComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnumComparisonExp>;
};

/** unique or primary key constraints on table "item.hardware_fastener_bolt" */
export enum ItemHardwareFastenerBoltConstraint {
  /** unique or primary key constraint */
  item_hardware_fastener_bolt_pkey = 'item_hardware_fastener_bolt_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ItemHardwareFastenerBoltDeleteAtPathInput = {
  specifications_met?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ItemHardwareFastenerBoltDeleteElemInput = {
  specifications_met?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ItemHardwareFastenerBoltDeleteKeyInput = {
  specifications_met?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltIncInput = {
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  shaft_length?: Maybe<Scalars['numeric']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter?: Maybe<Scalars['numeric']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltInsertInput = {
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  drive_type?: Maybe<EnumHardwareFastenerDriveEnum>;
  embedded_length?: Maybe<Scalars['numeric']>;
  finish?: Maybe<EnumHardwareFinishEnum>;
  hardness?: Maybe<EnumHardwareFastenerHardnessEnum>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  head_type?: Maybe<EnumHardwareFastenerHeadEnum>;
  id?: Maybe<Scalars['Int']>;
  material?: Maybe<EnumHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  point_type?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  shaft_length?: Maybe<Scalars['numeric']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  strength_class?: Maybe<EnumHardwareFastenerStrengthClassEnum>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter?: Maybe<Scalars['numeric']>;
  thread_direction?: Maybe<EnumHardwareFastenerThreadDirectionEnum>;
  thread_fit?: Maybe<EnumHardwareFastenerThreadFitEnum>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
  thread_type?: Maybe<EnumHardwareFastenerThreadTypeEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
};

/** aggregate max on columns */
export type ItemHardwareFastenerBoltMaxFields = {
  __typename?: 'item_hardware_fastener_bolt_max_fields';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shaft_length?: Maybe<Scalars['numeric']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter?: Maybe<Scalars['numeric']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltMaxOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  drive_size?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemHardwareFastenerBoltMinFields = {
  __typename?: 'item_hardware_fastener_bolt_min_fields';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shaft_length?: Maybe<Scalars['numeric']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter?: Maybe<Scalars['numeric']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltMinOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  drive_size?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** response of any mutation on the table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltMutationResponse = {
  __typename?: 'item_hardware_fastener_bolt_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerBolt>;
};

/** input type for inserting object relation for remote table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltObjRelInsertInput = {
  data: ItemHardwareFastenerBoltInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerBoltOnConflict>;
};

/** on conflict condition type for table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltOnConflict = {
  constraint: ItemHardwareFastenerBoltConstraint;
  update_columns: Array<ItemHardwareFastenerBoltUpdateColumn>;
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>;
};

/** ordering options when selecting data from "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
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
  shaft_length?: Maybe<OrderBy>;
  specifications_met?: Maybe<OrderBy>;
  strength_class?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_direction?: Maybe<OrderBy>;
  thread_fit?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
  thread_type?: Maybe<OrderBy>;
  unit?: Maybe<OrderBy>;
  use_material?: Maybe<OrderBy>;
};

/** primary key columns input for table: "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltPkColumnsInput = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ItemHardwareFastenerBoltPrependInput = {
  specifications_met?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "item.hardware_fastener_bolt" */
export enum ItemHardwareFastenerBoltSelectColumn {
  /** column name */
  countersunk_angle = 'countersunk_angle',
  /** column name */
  countersunk_height = 'countersunk_height',
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
  shaft_length = 'shaft_length',
  /** column name */
  specifications_met = 'specifications_met',
  /** column name */
  strength_class = 'strength_class',
  /** column name */
  tensile_strength = 'tensile_strength',
  /** column name */
  thread_diameter = 'thread_diameter',
  /** column name */
  thread_direction = 'thread_direction',
  /** column name */
  thread_fit = 'thread_fit',
  /** column name */
  thread_length = 'thread_length',
  /** column name */
  thread_pitch = 'thread_pitch',
  /** column name */
  thread_type = 'thread_type',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** input type for updating data in table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltSetInput = {
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  drive_type?: Maybe<EnumHardwareFastenerDriveEnum>;
  embedded_length?: Maybe<Scalars['numeric']>;
  finish?: Maybe<EnumHardwareFinishEnum>;
  hardness?: Maybe<EnumHardwareFastenerHardnessEnum>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  head_type?: Maybe<EnumHardwareFastenerHeadEnum>;
  id?: Maybe<Scalars['Int']>;
  material?: Maybe<EnumHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  point_type?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  shaft_length?: Maybe<Scalars['numeric']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  strength_class?: Maybe<EnumHardwareFastenerStrengthClassEnum>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter?: Maybe<Scalars['numeric']>;
  thread_direction?: Maybe<EnumHardwareFastenerThreadDirectionEnum>;
  thread_fit?: Maybe<EnumHardwareFastenerThreadFitEnum>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
  thread_type?: Maybe<EnumHardwareFastenerThreadTypeEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
};

/** aggregate stddev on columns */
export type ItemHardwareFastenerBoltStddevFields = {
  __typename?: 'item_hardware_fastener_bolt_stddev_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shaft_length?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_diameter?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltStddevOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemHardwareFastenerBoltStddevPopFields = {
  __typename?: 'item_hardware_fastener_bolt_stddev_pop_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shaft_length?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_diameter?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltStddevPopOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemHardwareFastenerBoltStddevSampFields = {
  __typename?: 'item_hardware_fastener_bolt_stddev_samp_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shaft_length?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_diameter?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltStddevSampOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemHardwareFastenerBoltSumFields = {
  __typename?: 'item_hardware_fastener_bolt_sum_fields';
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  embedded_length?: Maybe<Scalars['numeric']>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  shaft_length?: Maybe<Scalars['numeric']>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter?: Maybe<Scalars['numeric']>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltSumOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** update columns of table "item.hardware_fastener_bolt" */
export enum ItemHardwareFastenerBoltUpdateColumn {
  /** column name */
  countersunk_angle = 'countersunk_angle',
  /** column name */
  countersunk_height = 'countersunk_height',
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
  shaft_length = 'shaft_length',
  /** column name */
  specifications_met = 'specifications_met',
  /** column name */
  strength_class = 'strength_class',
  /** column name */
  tensile_strength = 'tensile_strength',
  /** column name */
  thread_diameter = 'thread_diameter',
  /** column name */
  thread_direction = 'thread_direction',
  /** column name */
  thread_fit = 'thread_fit',
  /** column name */
  thread_length = 'thread_length',
  /** column name */
  thread_pitch = 'thread_pitch',
  /** column name */
  thread_type = 'thread_type',
  /** column name */
  unit = 'unit',
  /** column name */
  use_material = 'use_material'
}

/** aggregate var_pop on columns */
export type ItemHardwareFastenerBoltVarPopFields = {
  __typename?: 'item_hardware_fastener_bolt_var_pop_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shaft_length?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_diameter?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltVarPopOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemHardwareFastenerBoltVarSampFields = {
  __typename?: 'item_hardware_fastener_bolt_var_samp_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shaft_length?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_diameter?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltVarSampOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemHardwareFastenerBoltVarianceFields = {
  __typename?: 'item_hardware_fastener_bolt_variance_fields';
  countersunk_angle?: Maybe<Scalars['Float']>;
  countersunk_height?: Maybe<Scalars['Float']>;
  embedded_length?: Maybe<Scalars['Float']>;
  head_diameter?: Maybe<Scalars['Float']>;
  head_height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shaft_length?: Maybe<Scalars['Float']>;
  tensile_strength?: Maybe<Scalars['Float']>;
  thread_diameter?: Maybe<Scalars['Float']>;
  thread_length?: Maybe<Scalars['Float']>;
  thread_pitch?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item.hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltVarianceOrderBy = {
  countersunk_angle?: Maybe<OrderBy>;
  countersunk_height?: Maybe<OrderBy>;
  embedded_length?: Maybe<OrderBy>;
  head_diameter?: Maybe<OrderBy>;
  head_height?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shaft_length?: Maybe<OrderBy>;
  tensile_strength?: Maybe<OrderBy>;
  thread_diameter?: Maybe<OrderBy>;
  thread_length?: Maybe<OrderBy>;
  thread_pitch?: Maybe<OrderBy>;
};

/** columns and relationships of "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNut = {
  __typename?: 'item_hardware_fastener_nut';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
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
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
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
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
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
  id = 'id',
  /** column name */
  name = 'name'
}

/** input type for updating data in table "item.hardware_fastener_nut" */
export type ItemHardwareFastenerNutSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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
  id = 'id',
  /** column name */
  name = 'name'
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
  point: EnumHardwareFastenerBoltPointEnum;
  unit: EnumUnitEnum;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
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
  point?: Maybe<EnumHardwareFastenerBoltPointEnumComparisonExp>;
  unit?: Maybe<EnumUnitEnumComparisonExp>;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnumComparisonExp>;
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
  point?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
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
  point?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
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
  hardness: EnumHardwareFastenerHardnessEnum;
  id: Scalars['Int'];
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  material: EnumHardwareFastenerMaterialEnum;
  /** Male threads don't have an OD, but there may still be a portion of the spacer that is wider than the female portion ( or there is no female end ) */
  max_od?: Maybe<Scalars['numeric']>;
  name: Scalars['String'];
  shape: EnumHardwareFastenerStandoffShapeEnum;
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
  hardness?: Maybe<EnumHardwareFastenerHardnessEnumComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  male_length?: Maybe<NumericComparisonExp>;
  male_thread_diameter?: Maybe<NumericComparisonExp>;
  male_thread_length?: Maybe<NumericComparisonExp>;
  male_thread_pitch?: Maybe<NumericComparisonExp>;
  male_thread_tolerance?: Maybe<StringComparisonExp>;
  material?: Maybe<EnumHardwareFastenerMaterialEnumComparisonExp>;
  max_od?: Maybe<NumericComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  shape?: Maybe<EnumHardwareFastenerStandoffShapeEnumComparisonExp>;
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
  hardness?: Maybe<EnumHardwareFastenerHardnessEnum>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  material?: Maybe<EnumHardwareFastenerMaterialEnum>;
  max_od?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  shape?: Maybe<EnumHardwareFastenerStandoffShapeEnum>;
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
  hardness?: Maybe<EnumHardwareFastenerHardnessEnum>;
  id?: Maybe<Scalars['Int']>;
  male_length?: Maybe<Scalars['numeric']>;
  male_thread_diameter?: Maybe<Scalars['numeric']>;
  male_thread_length?: Maybe<Scalars['numeric']>;
  male_thread_pitch?: Maybe<Scalars['numeric']>;
  male_thread_tolerance?: Maybe<Scalars['String']>;
  material?: Maybe<EnumHardwareFastenerMaterialEnum>;
  max_od?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  shape?: Maybe<EnumHardwareFastenerStandoffShapeEnum>;
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

/** input type for incrementing integer column in table "item" */
export type ItemIncInput = {
  id?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "item" */
export type ItemInsertInput = {
  bundle?: Maybe<ItemBundleMapArrRelInsertInput>;
  class?: Maybe<EnumItemClassEnum>;
  id?: Maybe<Scalars['Int']>;
  labelTemplates?: Maybe<LabelTemplateMapArrRelInsertInput>;
  labels?: Maybe<LabelArrRelInsertInput>;
  manufacturerItems?: Maybe<ManufacturerItemArrRelInsertInput>;
  object?: Maybe<Scalars['jsonb']>;
  orderItems?: Maybe<OrderItemArrRelInsertInput>;
  stock?: Maybe<Scalars['smallint']>;
  vendorItems?: Maybe<VendorItemArrRelInsertInput>;
};

/** aggregate max on columns */
export type ItemMaxFields = {
  __typename?: 'item_max_fields';
  id?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "item" */
export type ItemMaxOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ItemMinFields = {
  __typename?: 'item_min_fields';
  id?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "item" */
export type ItemMinOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
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
  bundle_aggregate?: Maybe<ItemBundleMapAggregateOrderBy>;
  class?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  labelTemplates_aggregate?: Maybe<LabelTemplateMapAggregateOrderBy>;
  labels_aggregate?: Maybe<LabelAggregateOrderBy>;
  manufacturerItems_aggregate?: Maybe<ManufacturerItemAggregateOrderBy>;
  object?: Maybe<OrderBy>;
  orderItems_aggregate?: Maybe<OrderItemAggregateOrderBy>;
  stock?: Maybe<OrderBy>;
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
  object = 'object',
  /** column name */
  stock = 'stock'
}

/** input type for updating data in table "item" */
export type ItemSetInput = {
  class?: Maybe<EnumItemClassEnum>;
  id?: Maybe<Scalars['Int']>;
  object?: Maybe<Scalars['jsonb']>;
  stock?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type ItemStddevFields = {
  __typename?: 'item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item" */
export type ItemStddevOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ItemStddevPopFields = {
  __typename?: 'item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item" */
export type ItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ItemStddevSampFields = {
  __typename?: 'item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item" */
export type ItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ItemSumFields = {
  __typename?: 'item_sum_fields';
  id?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "item" */
export type ItemSumOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** update columns of table "item" */
export enum ItemUpdateColumn {
  /** column name */
  class = 'class',
  /** column name */
  id = 'id',
  /** column name */
  object = 'object',
  /** column name */
  stock = 'stock'
}

/** aggregate var_pop on columns */
export type ItemVarPopFields = {
  __typename?: 'item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item" */
export type ItemVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ItemVarSampFields = {
  __typename?: 'item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item" */
export type ItemVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ItemVarianceFields = {
  __typename?: 'item_variance_fields';
  id?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item" */
export type ItemVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  stock?: Maybe<OrderBy>;
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
  item_class: Scalars['String'];
  item_id: Scalars['Int'];
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
  item_id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "label_template_map" */
export type LabelTemplateMapAvgOrderBy = {
  item_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "label_template_map". All fields are combined with a logical 'AND'. */
export type LabelTemplateMapBoolExp = {
  _and?: Maybe<Array<Maybe<LabelTemplateMapBoolExp>>>;
  _not?: Maybe<LabelTemplateMapBoolExp>;
  _or?: Maybe<Array<Maybe<LabelTemplateMapBoolExp>>>;
  criteria?: Maybe<JsonbComparisonExp>;
  item_class?: Maybe<StringComparisonExp>;
  item_id?: Maybe<IntComparisonExp>;
  label?: Maybe<LabelBoolExp>;
  label_id?: Maybe<UuidComparisonExp>;
  sequence?: Maybe<SmallintComparisonExp>;
};

/** unique or primary key constraints on table "label_template_map" */
export enum LabelTemplateMapConstraint {
  /** unique or primary key constraint */
  label_template_map_item_id_label_id_key = 'label_template_map_item_id_label_id_key',
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
  item_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "label_template_map" */
export type LabelTemplateMapInsertInput = {
  criteria?: Maybe<Scalars['jsonb']>;
  item_class?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  label?: Maybe<LabelObjRelInsertInput>;
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type LabelTemplateMapMaxFields = {
  __typename?: 'label_template_map_max_fields';
  item_class?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "label_template_map" */
export type LabelTemplateMapMaxOrderBy = {
  item_class?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  label_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LabelTemplateMapMinFields = {
  __typename?: 'label_template_map_min_fields';
  item_class?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "label_template_map" */
export type LabelTemplateMapMinOrderBy = {
  item_class?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
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
  item_id?: Maybe<OrderBy>;
  label?: Maybe<LabelOrderBy>;
  label_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** primary key columns input for table: "label_template_map" */
export type LabelTemplateMapPkColumnsInput = {
  item_class: Scalars['String'];
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
  item_id = 'item_id',
  /** column name */
  label_id = 'label_id',
  /** column name */
  sequence = 'sequence'
}

/** input type for updating data in table "label_template_map" */
export type LabelTemplateMapSetInput = {
  criteria?: Maybe<Scalars['jsonb']>;
  item_class?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  label_id?: Maybe<Scalars['uuid']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type LabelTemplateMapStddevFields = {
  __typename?: 'label_template_map_stddev_fields';
  item_id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "label_template_map" */
export type LabelTemplateMapStddevOrderBy = {
  item_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LabelTemplateMapStddevPopFields = {
  __typename?: 'label_template_map_stddev_pop_fields';
  item_id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "label_template_map" */
export type LabelTemplateMapStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LabelTemplateMapStddevSampFields = {
  __typename?: 'label_template_map_stddev_samp_fields';
  item_id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "label_template_map" */
export type LabelTemplateMapStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LabelTemplateMapSumFields = {
  __typename?: 'label_template_map_sum_fields';
  item_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "label_template_map" */
export type LabelTemplateMapSumOrderBy = {
  item_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** update columns of table "label_template_map" */
export enum LabelTemplateMapUpdateColumn {
  /** column name */
  criteria = 'criteria',
  /** column name */
  item_class = 'item_class',
  /** column name */
  item_id = 'item_id',
  /** column name */
  label_id = 'label_id',
  /** column name */
  sequence = 'sequence'
}

/** aggregate var_pop on columns */
export type LabelTemplateMapVarPopFields = {
  __typename?: 'label_template_map_var_pop_fields';
  item_id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "label_template_map" */
export type LabelTemplateMapVarPopOrderBy = {
  item_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LabelTemplateMapVarSampFields = {
  __typename?: 'label_template_map_var_samp_fields';
  item_id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "label_template_map" */
export type LabelTemplateMapVarSampOrderBy = {
  item_id?: Maybe<OrderBy>;
  sequence?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LabelTemplateMapVarianceFields = {
  __typename?: 'label_template_map_variance_fields';
  item_id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "label_template_map" */
export type LabelTemplateMapVarianceOrderBy = {
  item_id?: Maybe<OrderBy>;
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
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  vendor_id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  url?: Maybe<StringComparisonExp>;
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
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "manufacturer_item" */
export type ManufacturerItem = {
  __typename?: 'manufacturer_item';
  id: Scalars['Int'];
  item_id: Scalars['Int'];
  manufacturer_id: Scalars['Int'];
  manufacturer_product_id: Scalars['String'];
  product_url: Scalars['String'];
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
};

/** order by avg() on columns of table "manufacturer_item" */
export type ManufacturerItemAvgOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "manufacturer_item". All fields are combined with a logical 'AND'. */
export type ManufacturerItemBoolExp = {
  _and?: Maybe<Array<Maybe<ManufacturerItemBoolExp>>>;
  _not?: Maybe<ManufacturerItemBoolExp>;
  _or?: Maybe<Array<Maybe<ManufacturerItemBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  item_id?: Maybe<IntComparisonExp>;
  manufacturer_id?: Maybe<IntComparisonExp>;
  manufacturer_product_id?: Maybe<StringComparisonExp>;
  product_url?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "manufacturer_item" */
export enum ManufacturerItemConstraint {
  /** unique or primary key constraint */
  manufacturer_item_pkey = 'manufacturer_item_pkey'
}

/** input type for incrementing integer column in table "manufacturer_item" */
export type ManufacturerItemIncInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "manufacturer_item" */
export type ManufacturerItemInsertInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  product_url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ManufacturerItemMaxFields = {
  __typename?: 'manufacturer_item_max_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  product_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "manufacturer_item" */
export type ManufacturerItemMaxOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_product_id?: Maybe<OrderBy>;
  product_url?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ManufacturerItemMinFields = {
  __typename?: 'manufacturer_item_min_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  product_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "manufacturer_item" */
export type ManufacturerItemMinOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_product_id?: Maybe<OrderBy>;
  product_url?: Maybe<OrderBy>;
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
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
  manufacturer_product_id?: Maybe<OrderBy>;
  product_url?: Maybe<OrderBy>;
};

/** primary key columns input for table: "manufacturer_item" */
export type ManufacturerItemPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "manufacturer_item" */
export enum ManufacturerItemSelectColumn {
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_id = 'manufacturer_id',
  /** column name */
  manufacturer_product_id = 'manufacturer_product_id',
  /** column name */
  product_url = 'product_url'
}

/** input type for updating data in table "manufacturer_item" */
export type ManufacturerItemSetInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  manufacturer_product_id?: Maybe<Scalars['String']>;
  product_url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ManufacturerItemStddevFields = {
  __typename?: 'manufacturer_item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "manufacturer_item" */
export type ManufacturerItemStddevOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ManufacturerItemStddevPopFields = {
  __typename?: 'manufacturer_item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "manufacturer_item" */
export type ManufacturerItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ManufacturerItemStddevSampFields = {
  __typename?: 'manufacturer_item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "manufacturer_item" */
export type ManufacturerItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ManufacturerItemSumFields = {
  __typename?: 'manufacturer_item_sum_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "manufacturer_item" */
export type ManufacturerItemSumOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** update columns of table "manufacturer_item" */
export enum ManufacturerItemUpdateColumn {
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  manufacturer_id = 'manufacturer_id',
  /** column name */
  manufacturer_product_id = 'manufacturer_product_id',
  /** column name */
  product_url = 'product_url'
}

/** aggregate var_pop on columns */
export type ManufacturerItemVarPopFields = {
  __typename?: 'manufacturer_item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "manufacturer_item" */
export type ManufacturerItemVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ManufacturerItemVarSampFields = {
  __typename?: 'manufacturer_item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "manufacturer_item" */
export type ManufacturerItemVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ManufacturerItemVarianceFields = {
  __typename?: 'manufacturer_item_variance_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "manufacturer_item" */
export type ManufacturerItemVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_id?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type ManufacturerMaxFields = {
  __typename?: 'manufacturer_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "manufacturer" */
export type ManufacturerMaxOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ManufacturerMinFields = {
  __typename?: 'manufacturer_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "manufacturer" */
export type ManufacturerMinOrderBy = {
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
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "manufacturer" */
export type ManufacturerPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "manufacturer" */
export enum ManufacturerSelectColumn {
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


/** expression to compare columns of type money. All fields are combined with logical 'AND'. */
export type MoneyComparisonExp = {
  _eq?: Maybe<Scalars['money']>;
  _gt?: Maybe<Scalars['money']>;
  _gte?: Maybe<Scalars['money']>;
  _in?: Maybe<Array<Scalars['money']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['money']>;
  _lte?: Maybe<Scalars['money']>;
  _neq?: Maybe<Scalars['money']>;
  _nin?: Maybe<Array<Scalars['money']>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "enum.hardware_fastener_bolt_point" */
  delete_enum_hardware_fastener_bolt_point?: Maybe<EnumHardwareFastenerBoltPointMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_bolt_point" */
  delete_enum_hardware_fastener_bolt_point_by_pk?: Maybe<EnumHardwareFastenerBoltPoint>;
  /** delete data from the table: "enum.hardware_fastener_drive" */
  delete_enum_hardware_fastener_drive?: Maybe<EnumHardwareFastenerDriveMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_drive" */
  delete_enum_hardware_fastener_drive_by_pk?: Maybe<EnumHardwareFastenerDrive>;
  /** delete data from the table: "enum.hardware_fastener_hardness" */
  delete_enum_hardware_fastener_hardness?: Maybe<EnumHardwareFastenerHardnessMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_hardness" */
  delete_enum_hardware_fastener_hardness_by_pk?: Maybe<EnumHardwareFastenerHardness>;
  /** delete data from the table: "enum.hardware_fastener_head" */
  delete_enum_hardware_fastener_head?: Maybe<EnumHardwareFastenerHeadMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_head" */
  delete_enum_hardware_fastener_head_by_pk?: Maybe<EnumHardwareFastenerHead>;
  /** delete data from the table: "enum.hardware_fastener_material" */
  delete_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_material" */
  delete_enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>;
  /** delete data from the table: "enum.hardware_fastener_standoff_shape" */
  delete_enum_hardware_fastener_standoff_shape?: Maybe<EnumHardwareFastenerStandoffShapeMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_standoff_shape" */
  delete_enum_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumHardwareFastenerStandoffShape>;
  /** delete data from the table: "enum.hardware_fastener_strength_class" */
  delete_enum_hardware_fastener_strength_class?: Maybe<EnumHardwareFastenerStrengthClassMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_strength_class" */
  delete_enum_hardware_fastener_strength_class_by_pk?: Maybe<EnumHardwareFastenerStrengthClass>;
  /** delete data from the table: "enum.hardware_fastener_thread_direction" */
  delete_enum_hardware_fastener_thread_direction?: Maybe<EnumHardwareFastenerThreadDirectionMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_thread_direction" */
  delete_enum_hardware_fastener_thread_direction_by_pk?: Maybe<EnumHardwareFastenerThreadDirection>;
  /** delete data from the table: "enum.hardware_fastener_thread_fit" */
  delete_enum_hardware_fastener_thread_fit?: Maybe<EnumHardwareFastenerThreadFitMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_thread_fit" */
  delete_enum_hardware_fastener_thread_fit_by_pk?: Maybe<EnumHardwareFastenerThreadFit>;
  /** delete data from the table: "enum.hardware_fastener_thread_type" */
  delete_enum_hardware_fastener_thread_type?: Maybe<EnumHardwareFastenerThreadTypeMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_thread_type" */
  delete_enum_hardware_fastener_thread_type_by_pk?: Maybe<EnumHardwareFastenerThreadType>;
  /** delete data from the table: "enum.hardware_fastener_tolerance" */
  delete_enum_hardware_fastener_tolerance?: Maybe<EnumHardwareFastenerToleranceMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_tolerance" */
  delete_enum_hardware_fastener_tolerance_by_pk?: Maybe<EnumHardwareFastenerTolerance>;
  /** delete data from the table: "enum.hardware_fastener_use_material" */
  delete_enum_hardware_fastener_use_material?: Maybe<EnumHardwareFastenerUseMaterialMutationResponse>;
  /** delete single row from the table: "enum.hardware_fastener_use_material" */
  delete_enum_hardware_fastener_use_material_by_pk?: Maybe<EnumHardwareFastenerUseMaterial>;
  /** delete data from the table: "enum.hardware_finish" */
  delete_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>;
  /** delete single row from the table: "enum.hardware_finish" */
  delete_enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>;
  /** delete data from the table: "enum.item_class" */
  delete_enum_item_class?: Maybe<EnumItemClassMutationResponse>;
  /** delete single row from the table: "enum.item_class" */
  delete_enum_item_class_by_pk?: Maybe<EnumItemClass>;
  /** delete data from the table: "enum.mapped_class" */
  delete_enum_mapped_class?: Maybe<EnumMappedClassMutationResponse>;
  /** delete single row from the table: "enum.mapped_class" */
  delete_enum_mapped_class_by_pk?: Maybe<EnumMappedClass>;
  /** delete data from the table: "enum.payment_method_type" */
  delete_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>;
  /** delete single row from the table: "enum.payment_method_type" */
  delete_enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>;
  /** delete data from the table: "enum.unit" */
  delete_enum_unit?: Maybe<EnumUnitMutationResponse>;
  /** delete single row from the table: "enum.unit" */
  delete_enum_unit_by_pk?: Maybe<EnumUnit>;
  /** delete data from the table: "icon" */
  delete_icon?: Maybe<IconMutationResponse>;
  /** delete single row from the table: "icon" */
  delete_icon_by_pk?: Maybe<Icon>;
  /** delete data from the table: "icon_item_category_map" */
  delete_icon_item_category_map?: Maybe<IconItemCategoryMapMutationResponse>;
  /** delete single row from the table: "icon_item_category_map" */
  delete_icon_item_category_map_by_pk?: Maybe<IconItemCategoryMap>;
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
  /** delete data from the table: "item.bundle_map" */
  delete_item_bundle_map?: Maybe<ItemBundleMapMutationResponse>;
  /** delete single row from the table: "item.bundle_map" */
  delete_item_bundle_map_by_pk?: Maybe<ItemBundleMap>;
  /** delete single row from the table: "item" */
  delete_item_by_pk?: Maybe<Item>;
  /** delete data from the table: "item.hardware_fastener_bolt" */
  delete_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_bolt" */
  delete_item_hardware_fastener_bolt_by_pk?: Maybe<ItemHardwareFastenerBolt>;
  /** delete data from the table: "item.hardware_fastener_nut" */
  delete_item_hardware_fastener_nut?: Maybe<ItemHardwareFastenerNutMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_nut" */
  delete_item_hardware_fastener_nut_by_pk?: Maybe<ItemHardwareFastenerNut>;
  /** delete data from the table: "item.hardware_fastener_screw" */
  delete_item_hardware_fastener_screw?: Maybe<ItemHardwareFastenerScrewMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_screw" */
  delete_item_hardware_fastener_screw_by_pk?: Maybe<ItemHardwareFastenerScrew>;
  /** delete data from the table: "item.hardware_fastener_standoff" */
  delete_item_hardware_fastener_standoff?: Maybe<ItemHardwareFastenerStandoffMutationResponse>;
  /** delete single row from the table: "item.hardware_fastener_standoff" */
  delete_item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
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
  /** delete data from the table: "search_data" */
  delete_search_data?: Maybe<SearchDataMutationResponse>;
  /** delete single row from the table: "search_data" */
  delete_search_data_by_pk?: Maybe<SearchData>;
  /** delete data from the table: "shipment" */
  delete_shipment?: Maybe<ShipmentMutationResponse>;
  /** delete single row from the table: "shipment" */
  delete_shipment_by_pk?: Maybe<Shipment>;
  /** delete data from the table: "vendor" */
  delete_vendor?: Maybe<VendorMutationResponse>;
  /** delete single row from the table: "vendor" */
  delete_vendor_by_pk?: Maybe<Vendor>;
  /** delete data from the table: "vendor_item" */
  delete_vendor_item?: Maybe<VendorItemMutationResponse>;
  /** delete single row from the table: "vendor_item" */
  delete_vendor_item_by_pk?: Maybe<VendorItem>;
  /** insert data into the table: "enum.hardware_fastener_bolt_point" */
  insert_enum_hardware_fastener_bolt_point?: Maybe<EnumHardwareFastenerBoltPointMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_bolt_point" */
  insert_enum_hardware_fastener_bolt_point_one?: Maybe<EnumHardwareFastenerBoltPoint>;
  /** insert data into the table: "enum.hardware_fastener_drive" */
  insert_enum_hardware_fastener_drive?: Maybe<EnumHardwareFastenerDriveMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_drive" */
  insert_enum_hardware_fastener_drive_one?: Maybe<EnumHardwareFastenerDrive>;
  /** insert data into the table: "enum.hardware_fastener_hardness" */
  insert_enum_hardware_fastener_hardness?: Maybe<EnumHardwareFastenerHardnessMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_hardness" */
  insert_enum_hardware_fastener_hardness_one?: Maybe<EnumHardwareFastenerHardness>;
  /** insert data into the table: "enum.hardware_fastener_head" */
  insert_enum_hardware_fastener_head?: Maybe<EnumHardwareFastenerHeadMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_head" */
  insert_enum_hardware_fastener_head_one?: Maybe<EnumHardwareFastenerHead>;
  /** insert data into the table: "enum.hardware_fastener_material" */
  insert_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_material" */
  insert_enum_hardware_fastener_material_one?: Maybe<EnumHardwareFastenerMaterial>;
  /** insert data into the table: "enum.hardware_fastener_standoff_shape" */
  insert_enum_hardware_fastener_standoff_shape?: Maybe<EnumHardwareFastenerStandoffShapeMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_standoff_shape" */
  insert_enum_hardware_fastener_standoff_shape_one?: Maybe<EnumHardwareFastenerStandoffShape>;
  /** insert data into the table: "enum.hardware_fastener_strength_class" */
  insert_enum_hardware_fastener_strength_class?: Maybe<EnumHardwareFastenerStrengthClassMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_strength_class" */
  insert_enum_hardware_fastener_strength_class_one?: Maybe<EnumHardwareFastenerStrengthClass>;
  /** insert data into the table: "enum.hardware_fastener_thread_direction" */
  insert_enum_hardware_fastener_thread_direction?: Maybe<EnumHardwareFastenerThreadDirectionMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_thread_direction" */
  insert_enum_hardware_fastener_thread_direction_one?: Maybe<EnumHardwareFastenerThreadDirection>;
  /** insert data into the table: "enum.hardware_fastener_thread_fit" */
  insert_enum_hardware_fastener_thread_fit?: Maybe<EnumHardwareFastenerThreadFitMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_thread_fit" */
  insert_enum_hardware_fastener_thread_fit_one?: Maybe<EnumHardwareFastenerThreadFit>;
  /** insert data into the table: "enum.hardware_fastener_thread_type" */
  insert_enum_hardware_fastener_thread_type?: Maybe<EnumHardwareFastenerThreadTypeMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_thread_type" */
  insert_enum_hardware_fastener_thread_type_one?: Maybe<EnumHardwareFastenerThreadType>;
  /** insert data into the table: "enum.hardware_fastener_tolerance" */
  insert_enum_hardware_fastener_tolerance?: Maybe<EnumHardwareFastenerToleranceMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_tolerance" */
  insert_enum_hardware_fastener_tolerance_one?: Maybe<EnumHardwareFastenerTolerance>;
  /** insert data into the table: "enum.hardware_fastener_use_material" */
  insert_enum_hardware_fastener_use_material?: Maybe<EnumHardwareFastenerUseMaterialMutationResponse>;
  /** insert a single row into the table: "enum.hardware_fastener_use_material" */
  insert_enum_hardware_fastener_use_material_one?: Maybe<EnumHardwareFastenerUseMaterial>;
  /** insert data into the table: "enum.hardware_finish" */
  insert_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>;
  /** insert a single row into the table: "enum.hardware_finish" */
  insert_enum_hardware_finish_one?: Maybe<EnumHardwareFinish>;
  /** insert data into the table: "enum.item_class" */
  insert_enum_item_class?: Maybe<EnumItemClassMutationResponse>;
  /** insert a single row into the table: "enum.item_class" */
  insert_enum_item_class_one?: Maybe<EnumItemClass>;
  /** insert data into the table: "enum.mapped_class" */
  insert_enum_mapped_class?: Maybe<EnumMappedClassMutationResponse>;
  /** insert a single row into the table: "enum.mapped_class" */
  insert_enum_mapped_class_one?: Maybe<EnumMappedClass>;
  /** insert data into the table: "enum.payment_method_type" */
  insert_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>;
  /** insert a single row into the table: "enum.payment_method_type" */
  insert_enum_payment_method_type_one?: Maybe<EnumPaymentMethodType>;
  /** insert data into the table: "enum.unit" */
  insert_enum_unit?: Maybe<EnumUnitMutationResponse>;
  /** insert a single row into the table: "enum.unit" */
  insert_enum_unit_one?: Maybe<EnumUnit>;
  /** insert data into the table: "icon" */
  insert_icon?: Maybe<IconMutationResponse>;
  /** insert data into the table: "icon_item_category_map" */
  insert_icon_item_category_map?: Maybe<IconItemCategoryMapMutationResponse>;
  /** insert a single row into the table: "icon_item_category_map" */
  insert_icon_item_category_map_one?: Maybe<IconItemCategoryMap>;
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
  /** insert data into the table: "item.bundle_map" */
  insert_item_bundle_map?: Maybe<ItemBundleMapMutationResponse>;
  /** insert a single row into the table: "item.bundle_map" */
  insert_item_bundle_map_one?: Maybe<ItemBundleMap>;
  /** insert a single row into the table: "item.bundle" */
  insert_item_bundle_one?: Maybe<ItemBundle>;
  /** insert data into the table: "item.hardware_fastener_bolt" */
  insert_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_bolt" */
  insert_item_hardware_fastener_bolt_one?: Maybe<ItemHardwareFastenerBolt>;
  /** insert data into the table: "item.hardware_fastener_nut" */
  insert_item_hardware_fastener_nut?: Maybe<ItemHardwareFastenerNutMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_nut" */
  insert_item_hardware_fastener_nut_one?: Maybe<ItemHardwareFastenerNut>;
  /** insert data into the table: "item.hardware_fastener_screw" */
  insert_item_hardware_fastener_screw?: Maybe<ItemHardwareFastenerScrewMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_screw" */
  insert_item_hardware_fastener_screw_one?: Maybe<ItemHardwareFastenerScrew>;
  /** insert data into the table: "item.hardware_fastener_standoff" */
  insert_item_hardware_fastener_standoff?: Maybe<ItemHardwareFastenerStandoffMutationResponse>;
  /** insert a single row into the table: "item.hardware_fastener_standoff" */
  insert_item_hardware_fastener_standoff_one?: Maybe<ItemHardwareFastenerStandoff>;
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
  /** insert data into the table: "search_data" */
  insert_search_data?: Maybe<SearchDataMutationResponse>;
  /** insert a single row into the table: "search_data" */
  insert_search_data_one?: Maybe<SearchData>;
  /** insert data into the table: "shipment" */
  insert_shipment?: Maybe<ShipmentMutationResponse>;
  /** insert a single row into the table: "shipment" */
  insert_shipment_one?: Maybe<Shipment>;
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
  /** update data of the table: "enum.hardware_fastener_bolt_point" */
  update_enum_hardware_fastener_bolt_point?: Maybe<EnumHardwareFastenerBoltPointMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_bolt_point" */
  update_enum_hardware_fastener_bolt_point_by_pk?: Maybe<EnumHardwareFastenerBoltPoint>;
  /** update data of the table: "enum.hardware_fastener_drive" */
  update_enum_hardware_fastener_drive?: Maybe<EnumHardwareFastenerDriveMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_drive" */
  update_enum_hardware_fastener_drive_by_pk?: Maybe<EnumHardwareFastenerDrive>;
  /** update data of the table: "enum.hardware_fastener_hardness" */
  update_enum_hardware_fastener_hardness?: Maybe<EnumHardwareFastenerHardnessMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_hardness" */
  update_enum_hardware_fastener_hardness_by_pk?: Maybe<EnumHardwareFastenerHardness>;
  /** update data of the table: "enum.hardware_fastener_head" */
  update_enum_hardware_fastener_head?: Maybe<EnumHardwareFastenerHeadMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_head" */
  update_enum_hardware_fastener_head_by_pk?: Maybe<EnumHardwareFastenerHead>;
  /** update data of the table: "enum.hardware_fastener_material" */
  update_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_material" */
  update_enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>;
  /** update data of the table: "enum.hardware_fastener_standoff_shape" */
  update_enum_hardware_fastener_standoff_shape?: Maybe<EnumHardwareFastenerStandoffShapeMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_standoff_shape" */
  update_enum_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumHardwareFastenerStandoffShape>;
  /** update data of the table: "enum.hardware_fastener_strength_class" */
  update_enum_hardware_fastener_strength_class?: Maybe<EnumHardwareFastenerStrengthClassMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_strength_class" */
  update_enum_hardware_fastener_strength_class_by_pk?: Maybe<EnumHardwareFastenerStrengthClass>;
  /** update data of the table: "enum.hardware_fastener_thread_direction" */
  update_enum_hardware_fastener_thread_direction?: Maybe<EnumHardwareFastenerThreadDirectionMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_thread_direction" */
  update_enum_hardware_fastener_thread_direction_by_pk?: Maybe<EnumHardwareFastenerThreadDirection>;
  /** update data of the table: "enum.hardware_fastener_thread_fit" */
  update_enum_hardware_fastener_thread_fit?: Maybe<EnumHardwareFastenerThreadFitMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_thread_fit" */
  update_enum_hardware_fastener_thread_fit_by_pk?: Maybe<EnumHardwareFastenerThreadFit>;
  /** update data of the table: "enum.hardware_fastener_thread_type" */
  update_enum_hardware_fastener_thread_type?: Maybe<EnumHardwareFastenerThreadTypeMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_thread_type" */
  update_enum_hardware_fastener_thread_type_by_pk?: Maybe<EnumHardwareFastenerThreadType>;
  /** update data of the table: "enum.hardware_fastener_tolerance" */
  update_enum_hardware_fastener_tolerance?: Maybe<EnumHardwareFastenerToleranceMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_tolerance" */
  update_enum_hardware_fastener_tolerance_by_pk?: Maybe<EnumHardwareFastenerTolerance>;
  /** update data of the table: "enum.hardware_fastener_use_material" */
  update_enum_hardware_fastener_use_material?: Maybe<EnumHardwareFastenerUseMaterialMutationResponse>;
  /** update single row of the table: "enum.hardware_fastener_use_material" */
  update_enum_hardware_fastener_use_material_by_pk?: Maybe<EnumHardwareFastenerUseMaterial>;
  /** update data of the table: "enum.hardware_finish" */
  update_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>;
  /** update single row of the table: "enum.hardware_finish" */
  update_enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>;
  /** update data of the table: "enum.item_class" */
  update_enum_item_class?: Maybe<EnumItemClassMutationResponse>;
  /** update single row of the table: "enum.item_class" */
  update_enum_item_class_by_pk?: Maybe<EnumItemClass>;
  /** update data of the table: "enum.mapped_class" */
  update_enum_mapped_class?: Maybe<EnumMappedClassMutationResponse>;
  /** update single row of the table: "enum.mapped_class" */
  update_enum_mapped_class_by_pk?: Maybe<EnumMappedClass>;
  /** update data of the table: "enum.payment_method_type" */
  update_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>;
  /** update single row of the table: "enum.payment_method_type" */
  update_enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>;
  /** update data of the table: "enum.unit" */
  update_enum_unit?: Maybe<EnumUnitMutationResponse>;
  /** update single row of the table: "enum.unit" */
  update_enum_unit_by_pk?: Maybe<EnumUnit>;
  /** update data of the table: "icon" */
  update_icon?: Maybe<IconMutationResponse>;
  /** update single row of the table: "icon" */
  update_icon_by_pk?: Maybe<Icon>;
  /** update data of the table: "icon_item_category_map" */
  update_icon_item_category_map?: Maybe<IconItemCategoryMapMutationResponse>;
  /** update single row of the table: "icon_item_category_map" */
  update_icon_item_category_map_by_pk?: Maybe<IconItemCategoryMap>;
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
  /** update data of the table: "item.bundle_map" */
  update_item_bundle_map?: Maybe<ItemBundleMapMutationResponse>;
  /** update single row of the table: "item.bundle_map" */
  update_item_bundle_map_by_pk?: Maybe<ItemBundleMap>;
  /** update single row of the table: "item" */
  update_item_by_pk?: Maybe<Item>;
  /** update data of the table: "item.hardware_fastener_bolt" */
  update_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_bolt" */
  update_item_hardware_fastener_bolt_by_pk?: Maybe<ItemHardwareFastenerBolt>;
  /** update data of the table: "item.hardware_fastener_nut" */
  update_item_hardware_fastener_nut?: Maybe<ItemHardwareFastenerNutMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_nut" */
  update_item_hardware_fastener_nut_by_pk?: Maybe<ItemHardwareFastenerNut>;
  /** update data of the table: "item.hardware_fastener_screw" */
  update_item_hardware_fastener_screw?: Maybe<ItemHardwareFastenerScrewMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_screw" */
  update_item_hardware_fastener_screw_by_pk?: Maybe<ItemHardwareFastenerScrew>;
  /** update data of the table: "item.hardware_fastener_standoff" */
  update_item_hardware_fastener_standoff?: Maybe<ItemHardwareFastenerStandoffMutationResponse>;
  /** update single row of the table: "item.hardware_fastener_standoff" */
  update_item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
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
  /** update data of the table: "search_data" */
  update_search_data?: Maybe<SearchDataMutationResponse>;
  /** update single row of the table: "search_data" */
  update_search_data_by_pk?: Maybe<SearchData>;
  /** update data of the table: "shipment" */
  update_shipment?: Maybe<ShipmentMutationResponse>;
  /** update single row of the table: "shipment" */
  update_shipment_by_pk?: Maybe<Shipment>;
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
export type MutationRootDeleteEnumHardwareFastenerBoltPointArgs = {
  where: EnumHardwareFastenerBoltPointBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerBoltPointByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerDriveArgs = {
  where: EnumHardwareFastenerDriveBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerDriveByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerHardnessArgs = {
  where: EnumHardwareFastenerHardnessBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerHardnessByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerHeadArgs = {
  where: EnumHardwareFastenerHeadBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerHeadByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerMaterialArgs = {
  where: EnumHardwareFastenerMaterialBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerStandoffShapeArgs = {
  where: EnumHardwareFastenerStandoffShapeBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerStandoffShapeByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerStrengthClassArgs = {
  where: EnumHardwareFastenerStrengthClassBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerStrengthClassByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerThreadDirectionArgs = {
  where: EnumHardwareFastenerThreadDirectionBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerThreadDirectionByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerThreadFitArgs = {
  where: EnumHardwareFastenerThreadFitBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerThreadTypeArgs = {
  where: EnumHardwareFastenerThreadTypeBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerThreadTypeByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerToleranceArgs = {
  where: EnumHardwareFastenerToleranceBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerToleranceByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerUseMaterialArgs = {
  where: EnumHardwareFastenerUseMaterialBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerUseMaterialByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFinishArgs = {
  where: EnumHardwareFinishBoolExp;
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFinishByPkArgs = {
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
export type MutationRootDeleteIconItemCategoryMapArgs = {
  where: IconItemCategoryMapBoolExp;
};


/** mutation root */
export type MutationRootDeleteIconItemCategoryMapByPkArgs = {
  category: EnumItemClassEnum;
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
export type MutationRootDeleteItemBundleMapArgs = {
  where: ItemBundleMapBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemBundleMapByPkArgs = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerBoltArgs = {
  where: ItemHardwareFastenerBoltBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerBoltByPkArgs = {
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
export type MutationRootDeleteItemHardwareFastenerStandoffArgs = {
  where: ItemHardwareFastenerStandoffBoolExp;
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerStandoffByPkArgs = {
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
  item_class: Scalars['String'];
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
  order_id: Scalars['Int'];
  serial_no: Scalars['String'];
  vendor_item_id: Scalars['Int'];
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
export type MutationRootInsertEnumHardwareFastenerBoltPointArgs = {
  objects: Array<EnumHardwareFastenerBoltPointInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerBoltPointOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerBoltPointOneArgs = {
  object: EnumHardwareFastenerBoltPointInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerBoltPointOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerDriveArgs = {
  objects: Array<EnumHardwareFastenerDriveInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerDriveOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerDriveOneArgs = {
  object: EnumHardwareFastenerDriveInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerDriveOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerHardnessArgs = {
  objects: Array<EnumHardwareFastenerHardnessInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerHardnessOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerHardnessOneArgs = {
  object: EnumHardwareFastenerHardnessInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerHardnessOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerHeadArgs = {
  objects: Array<EnumHardwareFastenerHeadInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerHeadOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerHeadOneArgs = {
  object: EnumHardwareFastenerHeadInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerHeadOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerMaterialArgs = {
  objects: Array<EnumHardwareFastenerMaterialInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerMaterialOneArgs = {
  object: EnumHardwareFastenerMaterialInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerStandoffShapeArgs = {
  objects: Array<EnumHardwareFastenerStandoffShapeInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerStandoffShapeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerStandoffShapeOneArgs = {
  object: EnumHardwareFastenerStandoffShapeInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerStandoffShapeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerStrengthClassArgs = {
  objects: Array<EnumHardwareFastenerStrengthClassInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerStrengthClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerStrengthClassOneArgs = {
  object: EnumHardwareFastenerStrengthClassInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerStrengthClassOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerThreadDirectionArgs = {
  objects: Array<EnumHardwareFastenerThreadDirectionInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerThreadDirectionOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerThreadDirectionOneArgs = {
  object: EnumHardwareFastenerThreadDirectionInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerThreadDirectionOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerThreadFitArgs = {
  objects: Array<EnumHardwareFastenerThreadFitInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerThreadFitOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerThreadFitOneArgs = {
  object: EnumHardwareFastenerThreadFitInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerThreadFitOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerThreadTypeArgs = {
  objects: Array<EnumHardwareFastenerThreadTypeInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerThreadTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerThreadTypeOneArgs = {
  object: EnumHardwareFastenerThreadTypeInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerThreadTypeOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerToleranceArgs = {
  objects: Array<EnumHardwareFastenerToleranceInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerToleranceOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerToleranceOneArgs = {
  object: EnumHardwareFastenerToleranceInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerToleranceOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerUseMaterialArgs = {
  objects: Array<EnumHardwareFastenerUseMaterialInsertInput>;
  on_conflict?: Maybe<EnumHardwareFastenerUseMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerUseMaterialOneArgs = {
  object: EnumHardwareFastenerUseMaterialInsertInput;
  on_conflict?: Maybe<EnumHardwareFastenerUseMaterialOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFinishArgs = {
  objects: Array<EnumHardwareFinishInsertInput>;
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>;
};


/** mutation root */
export type MutationRootInsertEnumHardwareFinishOneArgs = {
  object: EnumHardwareFinishInsertInput;
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>;
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
export type MutationRootInsertIconItemCategoryMapArgs = {
  objects: Array<IconItemCategoryMapInsertInput>;
  on_conflict?: Maybe<IconItemCategoryMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertIconItemCategoryMapOneArgs = {
  object: IconItemCategoryMapInsertInput;
  on_conflict?: Maybe<IconItemCategoryMapOnConflict>;
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
export type MutationRootInsertItemBundleMapArgs = {
  objects: Array<ItemBundleMapInsertInput>;
  on_conflict?: Maybe<ItemBundleMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemBundleMapOneArgs = {
  object: ItemBundleMapInsertInput;
  on_conflict?: Maybe<ItemBundleMapOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemBundleOneArgs = {
  object: ItemBundleInsertInput;
  on_conflict?: Maybe<ItemBundleOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerBoltArgs = {
  objects: Array<ItemHardwareFastenerBoltInsertInput>;
  on_conflict?: Maybe<ItemHardwareFastenerBoltOnConflict>;
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerBoltOneArgs = {
  object: ItemHardwareFastenerBoltInsertInput;
  on_conflict?: Maybe<ItemHardwareFastenerBoltOnConflict>;
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
export type MutationRootUpdateEnumHardwareFastenerBoltPointArgs = {
  _set?: Maybe<EnumHardwareFastenerBoltPointSetInput>;
  where: EnumHardwareFastenerBoltPointBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerBoltPointByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerBoltPointSetInput>;
  pk_columns: EnumHardwareFastenerBoltPointPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerDriveArgs = {
  _set?: Maybe<EnumHardwareFastenerDriveSetInput>;
  where: EnumHardwareFastenerDriveBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerDriveByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerDriveSetInput>;
  pk_columns: EnumHardwareFastenerDrivePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerHardnessArgs = {
  _set?: Maybe<EnumHardwareFastenerHardnessSetInput>;
  where: EnumHardwareFastenerHardnessBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerHardnessByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerHardnessSetInput>;
  pk_columns: EnumHardwareFastenerHardnessPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerHeadArgs = {
  _set?: Maybe<EnumHardwareFastenerHeadSetInput>;
  where: EnumHardwareFastenerHeadBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerHeadByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerHeadSetInput>;
  pk_columns: EnumHardwareFastenerHeadPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerMaterialArgs = {
  _set?: Maybe<EnumHardwareFastenerMaterialSetInput>;
  where: EnumHardwareFastenerMaterialBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerMaterialByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerMaterialSetInput>;
  pk_columns: EnumHardwareFastenerMaterialPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerStandoffShapeArgs = {
  _set?: Maybe<EnumHardwareFastenerStandoffShapeSetInput>;
  where: EnumHardwareFastenerStandoffShapeBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerStandoffShapeByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerStandoffShapeSetInput>;
  pk_columns: EnumHardwareFastenerStandoffShapePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerStrengthClassArgs = {
  _set?: Maybe<EnumHardwareFastenerStrengthClassSetInput>;
  where: EnumHardwareFastenerStrengthClassBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerStrengthClassByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerStrengthClassSetInput>;
  pk_columns: EnumHardwareFastenerStrengthClassPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerThreadDirectionArgs = {
  _set?: Maybe<EnumHardwareFastenerThreadDirectionSetInput>;
  where: EnumHardwareFastenerThreadDirectionBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerThreadDirectionByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerThreadDirectionSetInput>;
  pk_columns: EnumHardwareFastenerThreadDirectionPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerThreadFitArgs = {
  _set?: Maybe<EnumHardwareFastenerThreadFitSetInput>;
  where: EnumHardwareFastenerThreadFitBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerThreadFitByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerThreadFitSetInput>;
  pk_columns: EnumHardwareFastenerThreadFitPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerThreadTypeArgs = {
  _set?: Maybe<EnumHardwareFastenerThreadTypeSetInput>;
  where: EnumHardwareFastenerThreadTypeBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerThreadTypeByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerThreadTypeSetInput>;
  pk_columns: EnumHardwareFastenerThreadTypePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerToleranceArgs = {
  _set?: Maybe<EnumHardwareFastenerToleranceSetInput>;
  where: EnumHardwareFastenerToleranceBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerToleranceByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerToleranceSetInput>;
  pk_columns: EnumHardwareFastenerTolerancePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerUseMaterialArgs = {
  _set?: Maybe<EnumHardwareFastenerUseMaterialSetInput>;
  where: EnumHardwareFastenerUseMaterialBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerUseMaterialByPkArgs = {
  _set?: Maybe<EnumHardwareFastenerUseMaterialSetInput>;
  pk_columns: EnumHardwareFastenerUseMaterialPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFinishArgs = {
  _set?: Maybe<EnumHardwareFinishSetInput>;
  where: EnumHardwareFinishBoolExp;
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFinishByPkArgs = {
  _set?: Maybe<EnumHardwareFinishSetInput>;
  pk_columns: EnumHardwareFinishPkColumnsInput;
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
export type MutationRootUpdateIconItemCategoryMapArgs = {
  _append?: Maybe<IconItemCategoryMapAppendInput>;
  _delete_at_path?: Maybe<IconItemCategoryMapDeleteAtPathInput>;
  _delete_elem?: Maybe<IconItemCategoryMapDeleteElemInput>;
  _delete_key?: Maybe<IconItemCategoryMapDeleteKeyInput>;
  _inc?: Maybe<IconItemCategoryMapIncInput>;
  _prepend?: Maybe<IconItemCategoryMapPrependInput>;
  _set?: Maybe<IconItemCategoryMapSetInput>;
  where: IconItemCategoryMapBoolExp;
};


/** mutation root */
export type MutationRootUpdateIconItemCategoryMapByPkArgs = {
  _append?: Maybe<IconItemCategoryMapAppendInput>;
  _delete_at_path?: Maybe<IconItemCategoryMapDeleteAtPathInput>;
  _delete_elem?: Maybe<IconItemCategoryMapDeleteElemInput>;
  _delete_key?: Maybe<IconItemCategoryMapDeleteKeyInput>;
  _inc?: Maybe<IconItemCategoryMapIncInput>;
  _prepend?: Maybe<IconItemCategoryMapPrependInput>;
  _set?: Maybe<IconItemCategoryMapSetInput>;
  pk_columns: IconItemCategoryMapPkColumnsInput;
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
export type MutationRootUpdateItemBundleMapArgs = {
  _inc?: Maybe<ItemBundleMapIncInput>;
  _set?: Maybe<ItemBundleMapSetInput>;
  where: ItemBundleMapBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemBundleMapByPkArgs = {
  _inc?: Maybe<ItemBundleMapIncInput>;
  _set?: Maybe<ItemBundleMapSetInput>;
  pk_columns: ItemBundleMapPkColumnsInput;
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
export type MutationRootUpdateItemHardwareFastenerBoltArgs = {
  _append?: Maybe<ItemHardwareFastenerBoltAppendInput>;
  _delete_at_path?: Maybe<ItemHardwareFastenerBoltDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemHardwareFastenerBoltDeleteElemInput>;
  _delete_key?: Maybe<ItemHardwareFastenerBoltDeleteKeyInput>;
  _inc?: Maybe<ItemHardwareFastenerBoltIncInput>;
  _prepend?: Maybe<ItemHardwareFastenerBoltPrependInput>;
  _set?: Maybe<ItemHardwareFastenerBoltSetInput>;
  where: ItemHardwareFastenerBoltBoolExp;
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerBoltByPkArgs = {
  _append?: Maybe<ItemHardwareFastenerBoltAppendInput>;
  _delete_at_path?: Maybe<ItemHardwareFastenerBoltDeleteAtPathInput>;
  _delete_elem?: Maybe<ItemHardwareFastenerBoltDeleteElemInput>;
  _delete_key?: Maybe<ItemHardwareFastenerBoltDeleteKeyInput>;
  _inc?: Maybe<ItemHardwareFastenerBoltIncInput>;
  _prepend?: Maybe<ItemHardwareFastenerBoltPrependInput>;
  _set?: Maybe<ItemHardwareFastenerBoltSetInput>;
  pk_columns: ItemHardwareFastenerBoltPkColumnsInput;
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
  /** An array relationship */
  items: Array<OrderItem>;
  /** An aggregated array relationship */
  items_aggregate: OrderItemAggregate;
  items_cost: Scalars['money'];
  /** An object relationship */
  payment_method?: Maybe<PaymentMethod>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date: Scalars['date'];
  pon?: Maybe<Scalars['String']>;
  /** An array relationship */
  shipments: Array<Shipment>;
  /** An aggregated array relationship */
  shipments_aggregate: ShipmentAggregate;
  tax_cost: Scalars['money'];
  total_cost: Scalars['money'];
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  vendor: Vendor;
  vendor_id: Scalars['Int'];
  vendor_order_id: Scalars['String'];
};


/** columns and relationships of "order" */
export type OrderItemsArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderItemOrderBy>>;
  where?: Maybe<OrderItemBoolExp>;
};


/** columns and relationships of "order" */
export type OrderItemsAggregateArgs = {
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
  items?: Maybe<OrderItemBoolExp>;
  items_cost?: Maybe<MoneyComparisonExp>;
  payment_method?: Maybe<PaymentMethodBoolExp>;
  payment_method_id?: Maybe<IntComparisonExp>;
  placed_date?: Maybe<DateComparisonExp>;
  pon?: Maybe<StringComparisonExp>;
  shipments?: Maybe<ShipmentBoolExp>;
  tax_cost?: Maybe<MoneyComparisonExp>;
  total_cost?: Maybe<MoneyComparisonExp>;
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
  items_cost?: Maybe<Scalars['money']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  tax_cost?: Maybe<Scalars['money']>;
  total_cost?: Maybe<Scalars['money']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type OrderInsertInput = {
  fulfilled_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemArrRelInsertInput>;
  items_cost?: Maybe<Scalars['money']>;
  payment_method?: Maybe<PaymentMethodObjRelInsertInput>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  shipments?: Maybe<ShipmentArrRelInsertInput>;
  tax_cost?: Maybe<Scalars['money']>;
  total_cost?: Maybe<Scalars['money']>;
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
  cost_item: Scalars['money'];
  cost_tax?: Maybe<Scalars['money']>;
  cost_total?: Maybe<Scalars['money']>;
  item_id?: Maybe<Scalars['Int']>;
  /** link to manufacturer item, which in turn links to item */
  manufacturer_item_id: Scalars['Int'];
  order_id: Scalars['Int'];
  qty?: Maybe<Scalars['numeric']>;
  /** individual items unique id (as provided by manufacturer) */
  serial_no: Scalars['String'];
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id: Scalars['Int'];
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
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_item" */
export type OrderItemAvgOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "order_item". All fields are combined with a logical 'AND'. */
export type OrderItemBoolExp = {
  _and?: Maybe<Array<Maybe<OrderItemBoolExp>>>;
  _not?: Maybe<OrderItemBoolExp>;
  _or?: Maybe<Array<Maybe<OrderItemBoolExp>>>;
  cost_item?: Maybe<MoneyComparisonExp>;
  cost_tax?: Maybe<MoneyComparisonExp>;
  cost_total?: Maybe<MoneyComparisonExp>;
  item_id?: Maybe<IntComparisonExp>;
  manufacturer_item_id?: Maybe<IntComparisonExp>;
  order_id?: Maybe<IntComparisonExp>;
  qty?: Maybe<NumericComparisonExp>;
  serial_no?: Maybe<StringComparisonExp>;
  shipment_id?: Maybe<IntComparisonExp>;
  vendor_item_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "order_item" */
export enum OrderItemConstraint {
  /** unique or primary key constraint */
  order_item_pkey = 'order_item_pkey',
  /** unique or primary key constraint */
  order_item_vendor_item_id_order_id_serial_no_key = 'order_item_vendor_item_id_order_id_serial_no_key'
}

/** input type for incrementing integer column in table "order_item" */
export type OrderItemIncInput = {
  cost_item?: Maybe<Scalars['money']>;
  cost_tax?: Maybe<Scalars['money']>;
  cost_total?: Maybe<Scalars['money']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['numeric']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_item" */
export type OrderItemInsertInput = {
  cost_item?: Maybe<Scalars['money']>;
  cost_tax?: Maybe<Scalars['money']>;
  cost_total?: Maybe<Scalars['money']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['numeric']>;
  serial_no?: Maybe<Scalars['String']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type OrderItemMaxFields = {
  __typename?: 'order_item_max_fields';
  cost_item?: Maybe<Scalars['money']>;
  cost_tax?: Maybe<Scalars['money']>;
  cost_total?: Maybe<Scalars['money']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['numeric']>;
  serial_no?: Maybe<Scalars['String']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_item" */
export type OrderItemMaxOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  serial_no?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type OrderItemMinFields = {
  __typename?: 'order_item_min_fields';
  cost_item?: Maybe<Scalars['money']>;
  cost_tax?: Maybe<Scalars['money']>;
  cost_total?: Maybe<Scalars['money']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['numeric']>;
  serial_no?: Maybe<Scalars['String']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_item" */
export type OrderItemMinOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
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
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  serial_no?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "order_item" */
export type OrderItemPkColumnsInput = {
  order_id: Scalars['Int'];
  /** individual items unique id (as provided by manufacturer) */
  serial_no: Scalars['String'];
  vendor_item_id: Scalars['Int'];
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
  item_id = 'item_id',
  /** column name */
  manufacturer_item_id = 'manufacturer_item_id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  qty = 'qty',
  /** column name */
  serial_no = 'serial_no',
  /** column name */
  shipment_id = 'shipment_id',
  /** column name */
  vendor_item_id = 'vendor_item_id'
}

/** input type for updating data in table "order_item" */
export type OrderItemSetInput = {
  cost_item?: Maybe<Scalars['money']>;
  cost_tax?: Maybe<Scalars['money']>;
  cost_total?: Maybe<Scalars['money']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['numeric']>;
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
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_item" */
export type OrderItemStddevOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type OrderItemStddevPopFields = {
  __typename?: 'order_item_stddev_pop_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_item" */
export type OrderItemStddevPopOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type OrderItemStddevSampFields = {
  __typename?: 'order_item_stddev_samp_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_item" */
export type OrderItemStddevSampOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type OrderItemSumFields = {
  __typename?: 'order_item_sum_fields';
  cost_item?: Maybe<Scalars['money']>;
  cost_tax?: Maybe<Scalars['money']>;
  cost_total?: Maybe<Scalars['money']>;
  item_id?: Maybe<Scalars['Int']>;
  manufacturer_item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['numeric']>;
  shipment_id?: Maybe<Scalars['Int']>;
  vendor_item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_item" */
export type OrderItemSumOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
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
  item_id = 'item_id',
  /** column name */
  manufacturer_item_id = 'manufacturer_item_id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  qty = 'qty',
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
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_item" */
export type OrderItemVarPopOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type OrderItemVarSampFields = {
  __typename?: 'order_item_var_samp_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_item" */
export type OrderItemVarSampOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type OrderItemVarianceFields = {
  __typename?: 'order_item_variance_fields';
  cost_item?: Maybe<Scalars['Float']>;
  cost_tax?: Maybe<Scalars['Float']>;
  cost_total?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  manufacturer_item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  shipment_id?: Maybe<Scalars['Float']>;
  vendor_item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_item" */
export type OrderItemVarianceOrderBy = {
  cost_item?: Maybe<OrderBy>;
  cost_tax?: Maybe<OrderBy>;
  cost_total?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  manufacturer_item_id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  qty?: Maybe<OrderBy>;
  shipment_id?: Maybe<OrderBy>;
  vendor_item_id?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type OrderMaxFields = {
  __typename?: 'order_max_fields';
  fulfilled_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  items_cost?: Maybe<Scalars['money']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  tax_cost?: Maybe<Scalars['money']>;
  total_cost?: Maybe<Scalars['money']>;
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
  items_cost?: Maybe<Scalars['money']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  tax_cost?: Maybe<Scalars['money']>;
  total_cost?: Maybe<Scalars['money']>;
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
  items_aggregate?: Maybe<OrderItemAggregateOrderBy>;
  items_cost?: Maybe<OrderBy>;
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
  items_cost?: Maybe<Scalars['money']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  tax_cost?: Maybe<Scalars['money']>;
  total_cost?: Maybe<Scalars['money']>;
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
  items_cost?: Maybe<Scalars['money']>;
  payment_method_id?: Maybe<Scalars['Int']>;
  tax_cost?: Maybe<Scalars['money']>;
  total_cost?: Maybe<Scalars['money']>;
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

/** query root */
export type QueryRoot = {
  __typename?: 'query_root';
  /** Retrieve Printer and Label status and properties */
  PrinterStatus?: Maybe<PrinterStatus>;
  /** fetch data from the table: "enum.hardware_fastener_bolt_point" */
  enum_hardware_fastener_bolt_point: Array<EnumHardwareFastenerBoltPoint>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_bolt_point" */
  enum_hardware_fastener_bolt_point_aggregate: EnumHardwareFastenerBoltPointAggregate;
  /** fetch data from the table: "enum.hardware_fastener_bolt_point" using primary key columns */
  enum_hardware_fastener_bolt_point_by_pk?: Maybe<EnumHardwareFastenerBoltPoint>;
  /** fetch data from the table: "enum.hardware_fastener_drive" */
  enum_hardware_fastener_drive: Array<EnumHardwareFastenerDrive>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_drive" */
  enum_hardware_fastener_drive_aggregate: EnumHardwareFastenerDriveAggregate;
  /** fetch data from the table: "enum.hardware_fastener_drive" using primary key columns */
  enum_hardware_fastener_drive_by_pk?: Maybe<EnumHardwareFastenerDrive>;
  /** fetch data from the table: "enum.hardware_fastener_hardness" */
  enum_hardware_fastener_hardness: Array<EnumHardwareFastenerHardness>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_hardness" */
  enum_hardware_fastener_hardness_aggregate: EnumHardwareFastenerHardnessAggregate;
  /** fetch data from the table: "enum.hardware_fastener_hardness" using primary key columns */
  enum_hardware_fastener_hardness_by_pk?: Maybe<EnumHardwareFastenerHardness>;
  /** fetch data from the table: "enum.hardware_fastener_head" */
  enum_hardware_fastener_head: Array<EnumHardwareFastenerHead>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_head" */
  enum_hardware_fastener_head_aggregate: EnumHardwareFastenerHeadAggregate;
  /** fetch data from the table: "enum.hardware_fastener_head" using primary key columns */
  enum_hardware_fastener_head_by_pk?: Maybe<EnumHardwareFastenerHead>;
  /** fetch data from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material: Array<EnumHardwareFastenerMaterial>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material_aggregate: EnumHardwareFastenerMaterialAggregate;
  /** fetch data from the table: "enum.hardware_fastener_material" using primary key columns */
  enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>;
  /** fetch data from the table: "enum.hardware_fastener_standoff_shape" */
  enum_hardware_fastener_standoff_shape: Array<EnumHardwareFastenerStandoffShape>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_standoff_shape" */
  enum_hardware_fastener_standoff_shape_aggregate: EnumHardwareFastenerStandoffShapeAggregate;
  /** fetch data from the table: "enum.hardware_fastener_standoff_shape" using primary key columns */
  enum_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumHardwareFastenerStandoffShape>;
  /** fetch data from the table: "enum.hardware_fastener_strength_class" */
  enum_hardware_fastener_strength_class: Array<EnumHardwareFastenerStrengthClass>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_strength_class" */
  enum_hardware_fastener_strength_class_aggregate: EnumHardwareFastenerStrengthClassAggregate;
  /** fetch data from the table: "enum.hardware_fastener_strength_class" using primary key columns */
  enum_hardware_fastener_strength_class_by_pk?: Maybe<EnumHardwareFastenerStrengthClass>;
  /** fetch data from the table: "enum.hardware_fastener_thread_direction" */
  enum_hardware_fastener_thread_direction: Array<EnumHardwareFastenerThreadDirection>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_thread_direction" */
  enum_hardware_fastener_thread_direction_aggregate: EnumHardwareFastenerThreadDirectionAggregate;
  /** fetch data from the table: "enum.hardware_fastener_thread_direction" using primary key columns */
  enum_hardware_fastener_thread_direction_by_pk?: Maybe<EnumHardwareFastenerThreadDirection>;
  /** fetch data from the table: "enum.hardware_fastener_thread_fit" */
  enum_hardware_fastener_thread_fit: Array<EnumHardwareFastenerThreadFit>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_thread_fit" */
  enum_hardware_fastener_thread_fit_aggregate: EnumHardwareFastenerThreadFitAggregate;
  /** fetch data from the table: "enum.hardware_fastener_thread_fit" using primary key columns */
  enum_hardware_fastener_thread_fit_by_pk?: Maybe<EnumHardwareFastenerThreadFit>;
  /** fetch data from the table: "enum.hardware_fastener_thread_type" */
  enum_hardware_fastener_thread_type: Array<EnumHardwareFastenerThreadType>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_thread_type" */
  enum_hardware_fastener_thread_type_aggregate: EnumHardwareFastenerThreadTypeAggregate;
  /** fetch data from the table: "enum.hardware_fastener_thread_type" using primary key columns */
  enum_hardware_fastener_thread_type_by_pk?: Maybe<EnumHardwareFastenerThreadType>;
  /** fetch data from the table: "enum.hardware_fastener_tolerance" */
  enum_hardware_fastener_tolerance: Array<EnumHardwareFastenerTolerance>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_tolerance" */
  enum_hardware_fastener_tolerance_aggregate: EnumHardwareFastenerToleranceAggregate;
  /** fetch data from the table: "enum.hardware_fastener_tolerance" using primary key columns */
  enum_hardware_fastener_tolerance_by_pk?: Maybe<EnumHardwareFastenerTolerance>;
  /** fetch data from the table: "enum.hardware_fastener_use_material" */
  enum_hardware_fastener_use_material: Array<EnumHardwareFastenerUseMaterial>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_use_material" */
  enum_hardware_fastener_use_material_aggregate: EnumHardwareFastenerUseMaterialAggregate;
  /** fetch data from the table: "enum.hardware_fastener_use_material" using primary key columns */
  enum_hardware_fastener_use_material_by_pk?: Maybe<EnumHardwareFastenerUseMaterial>;
  /** fetch data from the table: "enum.hardware_finish" */
  enum_hardware_finish: Array<EnumHardwareFinish>;
  /** fetch aggregated fields from the table: "enum.hardware_finish" */
  enum_hardware_finish_aggregate: EnumHardwareFinishAggregate;
  /** fetch data from the table: "enum.hardware_finish" using primary key columns */
  enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>;
  /** fetch data from the table: "enum.item_class" */
  enum_item_class: Array<EnumItemClass>;
  /** fetch aggregated fields from the table: "enum.item_class" */
  enum_item_class_aggregate: EnumItemClassAggregate;
  /** fetch data from the table: "enum.item_class" using primary key columns */
  enum_item_class_by_pk?: Maybe<EnumItemClass>;
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
  /** fetch data from the table: "icon_item_category_map" */
  icon_item_category_map: Array<IconItemCategoryMap>;
  /** fetch aggregated fields from the table: "icon_item_category_map" */
  icon_item_category_map_aggregate: IconItemCategoryMapAggregate;
  /** fetch data from the table: "icon_item_category_map" using primary key columns */
  icon_item_category_map_by_pk?: Maybe<IconItemCategoryMap>;
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
  /** fetch data from the table: "item.bundle_map" */
  item_bundle_map: Array<ItemBundleMap>;
  /** fetch aggregated fields from the table: "item.bundle_map" */
  item_bundle_map_aggregate: ItemBundleMapAggregate;
  /** fetch data from the table: "item.bundle_map" using primary key columns */
  item_bundle_map_by_pk?: Maybe<ItemBundleMap>;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "item.hardware_fastener_bolt" */
  item_hardware_fastener_bolt: Array<ItemHardwareFastenerBolt>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_bolt" */
  item_hardware_fastener_bolt_aggregate: ItemHardwareFastenerBoltAggregate;
  /** fetch data from the table: "item.hardware_fastener_bolt" using primary key columns */
  item_hardware_fastener_bolt_by_pk?: Maybe<ItemHardwareFastenerBolt>;
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
  /** fetch data from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff: Array<ItemHardwareFastenerStandoff>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff_aggregate: ItemHardwareFastenerStandoffAggregate;
  /** fetch data from the table: "item.hardware_fastener_standoff" using primary key columns */
  item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
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
  /** fetch data from the table: "shipment" */
  shipment: Array<Shipment>;
  /** fetch aggregated fields from the table: "shipment" */
  shipment_aggregate: ShipmentAggregate;
  /** fetch data from the table: "shipment" using primary key columns */
  shipment_by_pk?: Maybe<Shipment>;
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
export type QueryRootEnumHardwareFastenerBoltPointArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerBoltPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerBoltPointOrderBy>>;
  where?: Maybe<EnumHardwareFastenerBoltPointBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerBoltPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerBoltPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerBoltPointOrderBy>>;
  where?: Maybe<EnumHardwareFastenerBoltPointBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerBoltPointByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerDriveArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumHardwareFastenerDriveBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerDriveAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumHardwareFastenerDriveBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerDriveByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerHardnessArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHardnessOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHardnessBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerHardnessAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHardnessOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHardnessBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerHardnessByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerHeadArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHeadOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHeadBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerHeadAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHeadOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHeadBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerHeadByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerStandoffShapeArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStandoffShapeBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerStandoffShapeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStandoffShapeBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerStandoffShapeByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerStrengthClassArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStrengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStrengthClassOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStrengthClassBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerStrengthClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStrengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStrengthClassOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStrengthClassBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerStrengthClassByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadDirectionArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadDirectionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadDirectionOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadDirectionBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadDirectionAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadDirectionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadDirectionOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadDirectionBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadDirectionByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadFitArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadFitOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadFitBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadFitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadFitOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadFitBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadTypeArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadTypeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadTypeBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadTypeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadTypeBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerThreadTypeByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerToleranceArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerToleranceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerToleranceOrderBy>>;
  where?: Maybe<EnumHardwareFastenerToleranceBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerToleranceAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerToleranceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerToleranceOrderBy>>;
  where?: Maybe<EnumHardwareFastenerToleranceBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerToleranceByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFastenerUseMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerUseMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerUseMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerUseMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerUseMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerUseMaterialBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFastenerUseMaterialByPkArgs = {
  id: Scalars['String'];
};


/** query root */
export type QueryRootEnumHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>;
  where?: Maybe<EnumHardwareFinishBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>;
  where?: Maybe<EnumHardwareFinishBoolExp>;
};


/** query root */
export type QueryRootEnumHardwareFinishByPkArgs = {
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
export type QueryRootIconItemCategoryMapArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>;
  where?: Maybe<IconItemCategoryMapBoolExp>;
};


/** query root */
export type QueryRootIconItemCategoryMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>;
  where?: Maybe<IconItemCategoryMapBoolExp>;
};


/** query root */
export type QueryRootIconItemCategoryMapByPkArgs = {
  category: EnumItemClassEnum;
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
export type QueryRootItemBundleMapArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
};


/** query root */
export type QueryRootItemBundleMapAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
};


/** query root */
export type QueryRootItemBundleMapByPkArgs = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};


/** query root */
export type QueryRootItemByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootItemHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>;
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>;
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>;
};


/** query root */
export type QueryRootItemHardwareFastenerBoltByPkArgs = {
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
  item_class: Scalars['String'];
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
  order_id: Scalars['Int'];
  serial_no: Scalars['String'];
  vendor_item_id: Scalars['Int'];
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

/**
 * shipment or invoices, multiple allowed per order
 * 
 * 
 * columns and relationships of "shipment"
 */
export type Shipment = {
  __typename?: 'shipment';
  id: Scalars['Int'];
  /** An object relationship */
  order?: Maybe<Order>;
  order_id?: Maybe<Scalars['Int']>;
  received_date: Scalars['date'];
  shipped_date?: Maybe<Scalars['date']>;
  shipping_carrier: Scalars['String'];
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shipment" */
export type ShipmentAvgOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "shipment". All fields are combined with a logical 'AND'. */
export type ShipmentBoolExp = {
  _and?: Maybe<Array<Maybe<ShipmentBoolExp>>>;
  _not?: Maybe<ShipmentBoolExp>;
  _or?: Maybe<Array<Maybe<ShipmentBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  order?: Maybe<OrderBoolExp>;
  order_id?: Maybe<IntComparisonExp>;
  received_date?: Maybe<DateComparisonExp>;
  shipped_date?: Maybe<DateComparisonExp>;
  shipping_carrier?: Maybe<StringComparisonExp>;
  tracking_id?: Maybe<StringComparisonExp>;
  vendor_invoice_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "shipment" */
export enum ShipmentConstraint {
  /** unique or primary key constraint */
  shipment_pkey = 'shipment_pkey'
}

/** input type for incrementing integer column in table "shipment" */
export type ShipmentIncInput = {
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "shipment" */
export type ShipmentInsertInput = {
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderObjRelInsertInput>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  shipping_carrier?: Maybe<Scalars['String']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ShipmentMaxFields = {
  __typename?: 'shipment_max_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  shipping_carrier?: Maybe<Scalars['String']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "shipment" */
export type ShipmentMaxOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  received_date?: Maybe<OrderBy>;
  shipped_date?: Maybe<OrderBy>;
  shipping_carrier?: Maybe<OrderBy>;
  tracking_id?: Maybe<OrderBy>;
  vendor_invoice_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ShipmentMinFields = {
  __typename?: 'shipment_min_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  shipping_carrier?: Maybe<Scalars['String']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "shipment" */
export type ShipmentMinOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
  received_date?: Maybe<OrderBy>;
  shipped_date?: Maybe<OrderBy>;
  shipping_carrier?: Maybe<OrderBy>;
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
  id?: Maybe<OrderBy>;
  order?: Maybe<OrderOrderBy>;
  order_id?: Maybe<OrderBy>;
  received_date?: Maybe<OrderBy>;
  shipped_date?: Maybe<OrderBy>;
  shipping_carrier?: Maybe<OrderBy>;
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
  id = 'id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  received_date = 'received_date',
  /** column name */
  shipped_date = 'shipped_date',
  /** column name */
  shipping_carrier = 'shipping_carrier',
  /** column name */
  tracking_id = 'tracking_id',
  /** column name */
  vendor_invoice_id = 'vendor_invoice_id'
}

/** input type for updating data in table "shipment" */
export type ShipmentSetInput = {
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  received_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  shipping_carrier?: Maybe<Scalars['String']>;
  tracking_id?: Maybe<Scalars['String']>;
  vendor_invoice_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ShipmentStddevFields = {
  __typename?: 'shipment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shipment" */
export type ShipmentStddevOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ShipmentStddevPopFields = {
  __typename?: 'shipment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shipment" */
export type ShipmentStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ShipmentStddevSampFields = {
  __typename?: 'shipment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shipment" */
export type ShipmentStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ShipmentSumFields = {
  __typename?: 'shipment_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "shipment" */
export type ShipmentSumOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** update columns of table "shipment" */
export enum ShipmentUpdateColumn {
  /** column name */
  id = 'id',
  /** column name */
  order_id = 'order_id',
  /** column name */
  received_date = 'received_date',
  /** column name */
  shipped_date = 'shipped_date',
  /** column name */
  shipping_carrier = 'shipping_carrier',
  /** column name */
  tracking_id = 'tracking_id',
  /** column name */
  vendor_invoice_id = 'vendor_invoice_id'
}

/** aggregate var_pop on columns */
export type ShipmentVarPopFields = {
  __typename?: 'shipment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shipment" */
export type ShipmentVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ShipmentVarSampFields = {
  __typename?: 'shipment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shipment" */
export type ShipmentVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  order_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ShipmentVarianceFields = {
  __typename?: 'shipment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shipment" */
export type ShipmentVarianceOrderBy = {
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

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "enum.hardware_fastener_bolt_point" */
  enum_hardware_fastener_bolt_point: Array<EnumHardwareFastenerBoltPoint>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_bolt_point" */
  enum_hardware_fastener_bolt_point_aggregate: EnumHardwareFastenerBoltPointAggregate;
  /** fetch data from the table: "enum.hardware_fastener_bolt_point" using primary key columns */
  enum_hardware_fastener_bolt_point_by_pk?: Maybe<EnumHardwareFastenerBoltPoint>;
  /** fetch data from the table: "enum.hardware_fastener_drive" */
  enum_hardware_fastener_drive: Array<EnumHardwareFastenerDrive>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_drive" */
  enum_hardware_fastener_drive_aggregate: EnumHardwareFastenerDriveAggregate;
  /** fetch data from the table: "enum.hardware_fastener_drive" using primary key columns */
  enum_hardware_fastener_drive_by_pk?: Maybe<EnumHardwareFastenerDrive>;
  /** fetch data from the table: "enum.hardware_fastener_hardness" */
  enum_hardware_fastener_hardness: Array<EnumHardwareFastenerHardness>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_hardness" */
  enum_hardware_fastener_hardness_aggregate: EnumHardwareFastenerHardnessAggregate;
  /** fetch data from the table: "enum.hardware_fastener_hardness" using primary key columns */
  enum_hardware_fastener_hardness_by_pk?: Maybe<EnumHardwareFastenerHardness>;
  /** fetch data from the table: "enum.hardware_fastener_head" */
  enum_hardware_fastener_head: Array<EnumHardwareFastenerHead>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_head" */
  enum_hardware_fastener_head_aggregate: EnumHardwareFastenerHeadAggregate;
  /** fetch data from the table: "enum.hardware_fastener_head" using primary key columns */
  enum_hardware_fastener_head_by_pk?: Maybe<EnumHardwareFastenerHead>;
  /** fetch data from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material: Array<EnumHardwareFastenerMaterial>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material_aggregate: EnumHardwareFastenerMaterialAggregate;
  /** fetch data from the table: "enum.hardware_fastener_material" using primary key columns */
  enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>;
  /** fetch data from the table: "enum.hardware_fastener_standoff_shape" */
  enum_hardware_fastener_standoff_shape: Array<EnumHardwareFastenerStandoffShape>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_standoff_shape" */
  enum_hardware_fastener_standoff_shape_aggregate: EnumHardwareFastenerStandoffShapeAggregate;
  /** fetch data from the table: "enum.hardware_fastener_standoff_shape" using primary key columns */
  enum_hardware_fastener_standoff_shape_by_pk?: Maybe<EnumHardwareFastenerStandoffShape>;
  /** fetch data from the table: "enum.hardware_fastener_strength_class" */
  enum_hardware_fastener_strength_class: Array<EnumHardwareFastenerStrengthClass>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_strength_class" */
  enum_hardware_fastener_strength_class_aggregate: EnumHardwareFastenerStrengthClassAggregate;
  /** fetch data from the table: "enum.hardware_fastener_strength_class" using primary key columns */
  enum_hardware_fastener_strength_class_by_pk?: Maybe<EnumHardwareFastenerStrengthClass>;
  /** fetch data from the table: "enum.hardware_fastener_thread_direction" */
  enum_hardware_fastener_thread_direction: Array<EnumHardwareFastenerThreadDirection>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_thread_direction" */
  enum_hardware_fastener_thread_direction_aggregate: EnumHardwareFastenerThreadDirectionAggregate;
  /** fetch data from the table: "enum.hardware_fastener_thread_direction" using primary key columns */
  enum_hardware_fastener_thread_direction_by_pk?: Maybe<EnumHardwareFastenerThreadDirection>;
  /** fetch data from the table: "enum.hardware_fastener_thread_fit" */
  enum_hardware_fastener_thread_fit: Array<EnumHardwareFastenerThreadFit>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_thread_fit" */
  enum_hardware_fastener_thread_fit_aggregate: EnumHardwareFastenerThreadFitAggregate;
  /** fetch data from the table: "enum.hardware_fastener_thread_fit" using primary key columns */
  enum_hardware_fastener_thread_fit_by_pk?: Maybe<EnumHardwareFastenerThreadFit>;
  /** fetch data from the table: "enum.hardware_fastener_thread_type" */
  enum_hardware_fastener_thread_type: Array<EnumHardwareFastenerThreadType>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_thread_type" */
  enum_hardware_fastener_thread_type_aggregate: EnumHardwareFastenerThreadTypeAggregate;
  /** fetch data from the table: "enum.hardware_fastener_thread_type" using primary key columns */
  enum_hardware_fastener_thread_type_by_pk?: Maybe<EnumHardwareFastenerThreadType>;
  /** fetch data from the table: "enum.hardware_fastener_tolerance" */
  enum_hardware_fastener_tolerance: Array<EnumHardwareFastenerTolerance>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_tolerance" */
  enum_hardware_fastener_tolerance_aggregate: EnumHardwareFastenerToleranceAggregate;
  /** fetch data from the table: "enum.hardware_fastener_tolerance" using primary key columns */
  enum_hardware_fastener_tolerance_by_pk?: Maybe<EnumHardwareFastenerTolerance>;
  /** fetch data from the table: "enum.hardware_fastener_use_material" */
  enum_hardware_fastener_use_material: Array<EnumHardwareFastenerUseMaterial>;
  /** fetch aggregated fields from the table: "enum.hardware_fastener_use_material" */
  enum_hardware_fastener_use_material_aggregate: EnumHardwareFastenerUseMaterialAggregate;
  /** fetch data from the table: "enum.hardware_fastener_use_material" using primary key columns */
  enum_hardware_fastener_use_material_by_pk?: Maybe<EnumHardwareFastenerUseMaterial>;
  /** fetch data from the table: "enum.hardware_finish" */
  enum_hardware_finish: Array<EnumHardwareFinish>;
  /** fetch aggregated fields from the table: "enum.hardware_finish" */
  enum_hardware_finish_aggregate: EnumHardwareFinishAggregate;
  /** fetch data from the table: "enum.hardware_finish" using primary key columns */
  enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>;
  /** fetch data from the table: "enum.item_class" */
  enum_item_class: Array<EnumItemClass>;
  /** fetch aggregated fields from the table: "enum.item_class" */
  enum_item_class_aggregate: EnumItemClassAggregate;
  /** fetch data from the table: "enum.item_class" using primary key columns */
  enum_item_class_by_pk?: Maybe<EnumItemClass>;
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
  /** fetch data from the table: "icon_item_category_map" */
  icon_item_category_map: Array<IconItemCategoryMap>;
  /** fetch aggregated fields from the table: "icon_item_category_map" */
  icon_item_category_map_aggregate: IconItemCategoryMapAggregate;
  /** fetch data from the table: "icon_item_category_map" using primary key columns */
  icon_item_category_map_by_pk?: Maybe<IconItemCategoryMap>;
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
  /** fetch data from the table: "item.bundle_map" */
  item_bundle_map: Array<ItemBundleMap>;
  /** fetch aggregated fields from the table: "item.bundle_map" */
  item_bundle_map_aggregate: ItemBundleMapAggregate;
  /** fetch data from the table: "item.bundle_map" using primary key columns */
  item_bundle_map_by_pk?: Maybe<ItemBundleMap>;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "item.hardware_fastener_bolt" */
  item_hardware_fastener_bolt: Array<ItemHardwareFastenerBolt>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_bolt" */
  item_hardware_fastener_bolt_aggregate: ItemHardwareFastenerBoltAggregate;
  /** fetch data from the table: "item.hardware_fastener_bolt" using primary key columns */
  item_hardware_fastener_bolt_by_pk?: Maybe<ItemHardwareFastenerBolt>;
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
  /** fetch data from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff: Array<ItemHardwareFastenerStandoff>;
  /** fetch aggregated fields from the table: "item.hardware_fastener_standoff" */
  item_hardware_fastener_standoff_aggregate: ItemHardwareFastenerStandoffAggregate;
  /** fetch data from the table: "item.hardware_fastener_standoff" using primary key columns */
  item_hardware_fastener_standoff_by_pk?: Maybe<ItemHardwareFastenerStandoff>;
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
  /** fetch data from the table: "shipment" */
  shipment: Array<Shipment>;
  /** fetch aggregated fields from the table: "shipment" */
  shipment_aggregate: ShipmentAggregate;
  /** fetch data from the table: "shipment" using primary key columns */
  shipment_by_pk?: Maybe<Shipment>;
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
export type SubscriptionRootEnumHardwareFastenerBoltPointArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerBoltPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerBoltPointOrderBy>>;
  where?: Maybe<EnumHardwareFastenerBoltPointBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerBoltPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerBoltPointSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerBoltPointOrderBy>>;
  where?: Maybe<EnumHardwareFastenerBoltPointBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerBoltPointByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerDriveArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumHardwareFastenerDriveBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerDriveAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerDriveSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerDriveOrderBy>>;
  where?: Maybe<EnumHardwareFastenerDriveBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerDriveByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerHardnessArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHardnessOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHardnessBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerHardnessAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHardnessSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHardnessOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHardnessBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerHardnessByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerHeadArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHeadOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHeadBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerHeadAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerHeadSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerHeadOrderBy>>;
  where?: Maybe<EnumHardwareFastenerHeadBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerHeadByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerStandoffShapeArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStandoffShapeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerStandoffShapeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStandoffShapeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStandoffShapeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStandoffShapeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerStandoffShapeByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerStrengthClassArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStrengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStrengthClassOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStrengthClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerStrengthClassAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerStrengthClassSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerStrengthClassOrderBy>>;
  where?: Maybe<EnumHardwareFastenerStrengthClassBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerStrengthClassByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadDirectionArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadDirectionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadDirectionOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadDirectionBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadDirectionAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadDirectionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadDirectionOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadDirectionBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadDirectionByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadFitArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadFitOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadFitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadFitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadFitSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadFitOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadFitBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadFitByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadTypeArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadTypeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerThreadTypeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerThreadTypeOrderBy>>;
  where?: Maybe<EnumHardwareFastenerThreadTypeBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerThreadTypeByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerToleranceArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerToleranceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerToleranceOrderBy>>;
  where?: Maybe<EnumHardwareFastenerToleranceBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerToleranceAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerToleranceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerToleranceOrderBy>>;
  where?: Maybe<EnumHardwareFastenerToleranceBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerToleranceByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerUseMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerUseMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerUseMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerUseMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerUseMaterialSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFastenerUseMaterialOrderBy>>;
  where?: Maybe<EnumHardwareFastenerUseMaterialBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerUseMaterialByPkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootEnumHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>;
  where?: Maybe<EnumHardwareFinishBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>;
  where?: Maybe<EnumHardwareFinishBoolExp>;
};


/** subscription root */
export type SubscriptionRootEnumHardwareFinishByPkArgs = {
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
export type SubscriptionRootIconItemCategoryMapArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>;
  where?: Maybe<IconItemCategoryMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconItemCategoryMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>;
  where?: Maybe<IconItemCategoryMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootIconItemCategoryMapByPkArgs = {
  category: EnumItemClassEnum;
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
export type SubscriptionRootItemBundleMapArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemBundleMapAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>;
  where?: Maybe<ItemBundleMapBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemBundleMapByPkArgs = {
  item_bundle_id: Scalars['Int'];
  item_member_id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>;
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>;
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>;
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerBoltByPkArgs = {
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
  item_class: Scalars['String'];
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
  order_id: Scalars['Int'];
  serial_no: Scalars['String'];
  vendor_item_id: Scalars['Int'];
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
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
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
  name?: Maybe<StringComparisonExp>;
  url?: Maybe<StringComparisonExp>;
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
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** columns and relationships of "vendor_item" */
export type VendorItem = {
  __typename?: 'vendor_item';
  id: Scalars['Int'];
  item_id: Scalars['Int'];
  vendor_id: Scalars['Int'];
  vendor_sku: Scalars['String'];
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
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vendor_item" */
export type VendorItemAvgOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "vendor_item". All fields are combined with a logical 'AND'. */
export type VendorItemBoolExp = {
  _and?: Maybe<Array<Maybe<VendorItemBoolExp>>>;
  _not?: Maybe<VendorItemBoolExp>;
  _or?: Maybe<Array<Maybe<VendorItemBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  item_id?: Maybe<IntComparisonExp>;
  vendor_id?: Maybe<IntComparisonExp>;
  vendor_sku?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "vendor_item" */
export enum VendorItemConstraint {
  /** unique or primary key constraint */
  vendor_item_pkey = 'vendor_item_pkey'
}

/** input type for incrementing integer column in table "vendor_item" */
export type VendorItemIncInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vendor_item" */
export type VendorItemInsertInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type VendorItemMaxFields = {
  __typename?: 'vendor_item_max_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vendor_item" */
export type VendorItemMaxOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
  vendor_sku?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type VendorItemMinFields = {
  __typename?: 'vendor_item_min_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vendor_item" */
export type VendorItemMinOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
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
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
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
  id = 'id',
  /** column name */
  item_id = 'item_id',
  /** column name */
  vendor_id = 'vendor_id',
  /** column name */
  vendor_sku = 'vendor_sku'
}

/** input type for updating data in table "vendor_item" */
export type VendorItemSetInput = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_sku?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type VendorItemStddevFields = {
  __typename?: 'vendor_item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vendor_item" */
export type VendorItemStddevOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type VendorItemStddevPopFields = {
  __typename?: 'vendor_item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vendor_item" */
export type VendorItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type VendorItemStddevSampFields = {
  __typename?: 'vendor_item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vendor_item" */
export type VendorItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type VendorItemSumFields = {
  __typename?: 'vendor_item_sum_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vendor_item" */
export type VendorItemSumOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** update columns of table "vendor_item" */
export enum VendorItemUpdateColumn {
  /** column name */
  id = 'id',
  /** column name */
  item_id = 'item_id',
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
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vendor_item" */
export type VendorItemVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type VendorItemVarSampFields = {
  __typename?: 'vendor_item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vendor_item" */
export type VendorItemVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type VendorItemVarianceFields = {
  __typename?: 'vendor_item_variance_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vendor_item" */
export type VendorItemVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  item_id?: Maybe<OrderBy>;
  vendor_id?: Maybe<OrderBy>;
};

/** aggregate max on columns */
export type VendorMaxFields = {
  __typename?: 'vendor_max_fields';
  account_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vendor" */
export type VendorMaxOrderBy = {
  account_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type VendorMinFields = {
  __typename?: 'vendor_min_fields';
  account_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vendor" */
export type VendorMinOrderBy = {
  account_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
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
  name?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
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
  name = 'name',
  /** column name */
  url = 'url'
}

/** input type for updating data in table "vendor" */
export type VendorSetInput = {
  account_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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

export type InsertIconMutationVariables = {
  mimeData?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  categories?: Maybe<IconItemCategoryMapArrRelInsertInput>;
  labels?: Maybe<IconLabelMapArrRelInsertInput>;
};


export type InsertIconMutation = (
  { __typename?: 'mutation_root' }
  & { insert_icon?: Maybe<(
    { __typename?: 'icon_mutation_response' }
    & Pick<IconMutationResponse, 'affected_rows'>
  )> }
);

export type GetIconQueryVariables = {
  id: Scalars['uuid'];
};


export type GetIconQuery = (
  { __typename?: 'query_root' }
  & { icon?: Maybe<(
    { __typename?: 'icon' }
    & Pick<Icon, 'data' | 'description' | 'id' | 'title'>
    & { categories: Array<(
      { __typename?: 'icon_item_category_map' }
      & Pick<IconItemCategoryMap, 'category' | 'criteria' | 'sequence'>
    )>, labels: Array<(
      { __typename?: 'icon_label_map' }
      & Pick<IconLabelMap, 'label_id'>
    )> }
  )> }
);

export type GetIconsQueryVariables = {};


export type GetIconsQuery = (
  { __typename?: 'query_root' }
  & { icon: Array<(
    { __typename?: 'icon' }
    & Pick<Icon, 'data' | 'description' | 'id' | 'title'>
    & { categories: Array<(
      { __typename?: 'icon_item_category_map' }
      & Pick<IconItemCategoryMap, 'category' | 'criteria' | 'sequence'>
    )>, labels: Array<(
      { __typename?: 'icon_label_map' }
      & Pick<IconLabelMap, 'label_id'>
    )> }
  )> }
);

export type SearchItemsQueryVariables = {
  containsFilter?: Maybe<Scalars['jsonb']>;
  hasAnyKeysFilter?: Maybe<Array<Scalars['String']>>;
};


export type SearchItemsQuery = (
  { __typename?: 'query_root' }
  & { item: Array<(
    { __typename?: 'item' }
    & Pick<Item, 'id' | 'object' | 'class'>
    & { name: Item['object'] }
  )> }
);

export type LabelFieldsFragment = (
  { __typename?: 'label' }
  & Pick<Label, 'id' | 'created_at' | 'content' | 'title' | 'width' | 'height'>
  & { item?: Maybe<(
    { __typename?: 'item' }
    & Pick<Item, 'id' | 'class'>
  )> }
);

export type GetLabelsQueryVariables = {};


export type GetLabelsQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetLabelQueryVariables = {
  label_id: Scalars['uuid'];
};


export type GetLabelQuery = (
  { __typename?: 'query_root' }
  & { label?: Maybe<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetLabelByItemIdQueryVariables = {
  item_id?: Maybe<Scalars['Int']>;
};


export type GetLabelByItemIdQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetTemplatesQueryVariables = {};


export type GetTemplatesQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetSingleLabelsQueryVariables = {};


export type GetSingleLabelsQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & Pick<Label, 'id'>
  )> }
);

export type SaveLabelMutationVariables = {
  content?: Maybe<Scalars['jsonb']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type SaveLabelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_label?: Maybe<(
    { __typename?: 'label_mutation_response' }
    & Pick<LabelMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'label' }
      & Pick<Label, 'id'>
    )> }
  )> }
);

export type EditLabelMutationVariables = {
  content?: Maybe<Scalars['jsonb']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type EditLabelMutation = (
  { __typename: 'mutation_root' }
  & { update_label?: Maybe<(
    { __typename?: 'label_mutation_response' }
    & Pick<LabelMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'label' }
      & Pick<Label, 'id'>
    )> }
  )> }
);

export type GetOrdersByDateRangeQueryVariables = {
  date_start_gte?: Maybe<Scalars['date']>;
  date_end_lte?: Maybe<Scalars['date']>;
};


export type GetOrdersByDateRangeQuery = (
  { __typename?: 'query_root' }
  & { order: Array<(
    { __typename?: 'order' }
    & Pick<Order, 'vendor_order_id' | 'url' | 'total_cost' | 'tax_cost' | 'pon' | 'placed_date' | 'payment_method_id' | 'items_cost' | 'id' | 'fulfilled_date'>
    & { vendor: (
      { __typename?: 'vendor' }
      & Pick<Vendor, 'name' | 'url'>
    ) }
  )> }
);

export type InsertOrderMutationVariables = {
  fulfilled_date?: Maybe<Scalars['date']>;
  items?: Maybe<OrderItemArrRelInsertInput>;
  items_cost?: Maybe<Scalars['money']>;
  payment_method?: Maybe<PaymentMethodObjRelInsertInput>;
  payment_method_id?: Maybe<Scalars['Int']>;
  placed_date?: Maybe<Scalars['date']>;
  pon?: Maybe<Scalars['String']>;
  shipments?: Maybe<ShipmentArrRelInsertInput>;
  tax_cost?: Maybe<Scalars['money']>;
  total_cost?: Maybe<Scalars['money']>;
  url?: Maybe<Scalars['String']>;
  vendor?: Maybe<VendorObjRelInsertInput>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_order_id?: Maybe<Scalars['String']>;
};


export type InsertOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_order?: Maybe<(
    { __typename?: 'order_mutation_response' }
    & Pick<OrderMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'order' }
      & Pick<Order, 'id'>
    )> }
  )> }
);

export type GetPrinterStatusQueryVariables = {};


export type GetPrinterStatusQuery = (
  { __typename?: 'query_root' }
  & { PrinterStatus?: Maybe<(
    { __typename?: 'PrinterStatus' }
    & Pick<PrinterStatus, 'labelType' | 'heightInch'>
    & { labelStatus: (
      { __typename?: 'PrinterLabelStatus' }
      & Pick<PrinterLabelStatus, 'mediaType' | 'tapeColor' | 'textColor'>
      & { labelCharacteristic?: Maybe<(
        { __typename?: 'LabelCharacteristic' }
        & Pick<LabelCharacteristic, 'pinsRight' | 'pinsPrint' | 'pinsLeft' | 'widthMillimeters'>
      )> }
    ) }
  )> }
);

export type SendBufferMutationVariables = {
  buffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>;
};


export type SendBufferMutation = (
  { __typename?: 'mutation_root' }
  & { putLabelMonochromeBuffer?: Maybe<(
    { __typename?: 'OperationResult' }
    & Pick<OperationResult, 'result'>
  )> }
);

export type ItemFieldsFragment = (
  { __typename?: 'item' }
  & Pick<Item, 'id' | 'class' | 'object'>
  & { name: Item['object'] }
);

export type GetItemsQueryVariables = {
  categories?: Maybe<Array<EnumItemClassEnum>>;
};


export type GetItemsQuery = (
  { __typename?: 'query_root' }
  & { items: Array<(
    { __typename?: 'item' }
    & ItemFieldsFragment
  )> }
);

export type GetItemQueryVariables = {
  id: Scalars['Int'];
};


export type GetItemQuery = (
  { __typename?: 'query_root' }
  & { item?: Maybe<(
    { __typename?: 'item' }
    & ItemFieldsFragment
  )> }
);

export type ItemSearchQueryVariables = {
  search_text: Scalars['String'];
};


export type ItemSearchQuery = (
  { __typename?: 'query_root' }
  & { search: Array<(
    { __typename?: 'search_data' }
    & Pick<SearchData, 'id' | 'class' | 'metadata'>
    & { name: SearchData['text'] }
  )> }
);

export type ItemBundleQueryVariables = {};


export type ItemBundleQuery = (
  { __typename?: 'query_root' }
  & { item_bundle: Array<(
    { __typename?: 'item_bundle' }
    & Pick<ItemBundle, 'id' | 'name' | 'description'>
    & { items: Array<(
      { __typename?: 'item_bundle_map' }
      & { item: (
        { __typename?: 'item' }
        & Pick<Item, 'id'>
      ) }
    )> }
  )> }
);

export type ItemHardwareFastenerBoltFieldsFragment = (
  { __typename?: 'item_hardware_fastener_bolt' }
  & Pick<ItemHardwareFastenerBolt, 'id' | 'name' | 'description' | 'unit' | 'thread_length' | 'head_type' | 'drive_type' | 'drive_size' | 'head_diameter' | 'head_height' | 'thread_diameter' | 'finish' | 'material' | 'thread_direction' | 'countersunk_angle' | 'tensile_strength' | 'specifications_met' | 'thread_fit' | 'point_type' | 'hardness' | 'strength_class' | 'use_material'>
);

export type ItemHardwareFastenerBoltQueryVariables = {};


export type ItemHardwareFastenerBoltQuery = (
  { __typename?: 'query_root' }
  & { items: Array<(
    { __typename?: 'item_hardware_fastener_bolt' }
    & ItemHardwareFastenerBoltFieldsFragment
  )> }
);

export type InsertItemHardwareFastenerBoltMutationVariables = {
  countersunk_angle?: Maybe<Scalars['numeric']>;
  countersunk_height?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  drive_size?: Maybe<Scalars['String']>;
  drive_type?: Maybe<EnumHardwareFastenerDriveEnum>;
  embedded_length?: Maybe<Scalars['numeric']>;
  finish?: Maybe<EnumHardwareFinishEnum>;
  hardness?: Maybe<EnumHardwareFastenerHardnessEnum>;
  head_diameter?: Maybe<Scalars['numeric']>;
  head_height?: Maybe<Scalars['numeric']>;
  head_type?: Maybe<EnumHardwareFastenerHeadEnum>;
  id?: Maybe<Scalars['Int']>;
  material?: Maybe<EnumHardwareFastenerMaterialEnum>;
  name?: Maybe<Scalars['String']>;
  point_type?: Maybe<EnumHardwareFastenerBoltPointEnum>;
  shaft_length?: Maybe<Scalars['numeric']>;
  specifications_met?: Maybe<Scalars['jsonb']>;
  strength_class?: Maybe<EnumHardwareFastenerStrengthClassEnum>;
  tensile_strength?: Maybe<Scalars['numeric']>;
  thread_diameter?: Maybe<Scalars['numeric']>;
  thread_direction?: Maybe<EnumHardwareFastenerThreadDirectionEnum>;
  thread_fit?: Maybe<EnumHardwareFastenerThreadFitEnum>;
  thread_length?: Maybe<Scalars['numeric']>;
  thread_pitch?: Maybe<Scalars['numeric']>;
  thread_type?: Maybe<EnumHardwareFastenerThreadTypeEnum>;
  unit?: Maybe<EnumUnitEnum>;
  use_material?: Maybe<EnumHardwareFastenerUseMaterialEnum>;
};


export type InsertItemHardwareFastenerBoltMutation = (
  { __typename?: 'mutation_root' }
  & { insert_item_hardware_fastener_bolt_one?: Maybe<(
    { __typename?: 'item_hardware_fastener_bolt' }
    & ItemHardwareFastenerBoltFieldsFragment
  )> }
);

export const LabelFieldsFragmentDoc = gql`
    fragment labelFields on label {
  id
  created_at
  content
  title
  width
  height
  item {
    id
    class
  }
}
    `;
export const ItemFieldsFragmentDoc = gql`
    fragment ItemFields on item {
  id
  class
  name: object(path: "name")
  object
}
    `;
export const ItemHardwareFastenerBoltFieldsFragmentDoc = gql`
    fragment ItemHardwareFastenerBoltFields on item_hardware_fastener_bolt {
  id
  name
  description
  unit
  thread_length
  head_type
  drive_type
  drive_size
  head_diameter
  head_height
  thread_diameter
  finish
  material
  thread_direction
  countersunk_angle
  tensile_strength
  specifications_met
  thread_fit
  point_type
  hardness
  strength_class
  use_material
}
    `;
export const InsertIconDocument = gql`
    mutation InsertIcon($mimeData: String, $description: String, $id: uuid, $title: String, $categories: icon_item_category_map_arr_rel_insert_input, $labels: icon_label_map_arr_rel_insert_input) {
  insert_icon(objects: {data: $mimeData, description: $description, id: $id, title: $title, categories: $categories, labels: $labels}) {
    affected_rows
  }
}
    `;
export type InsertIconMutationFn = ApolloReactCommon.MutationFunction<InsertIconMutation, InsertIconMutationVariables>;
export type InsertIconProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<InsertIconMutation, InsertIconMutationVariables>
    } & TChildProps;
export function withInsertIcon<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertIconMutation,
  InsertIconMutationVariables,
  InsertIconProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, InsertIconMutation, InsertIconMutationVariables, InsertIconProps<TChildProps, TDataName>>(InsertIconDocument, {
      alias: 'insertIcon',
      ...operationOptions
    });
};

/**
 * __useInsertIconMutation__
 *
 * To run a mutation, you first call `useInsertIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertIconMutation, { data, loading, error }] = useInsertIconMutation({
 *   variables: {
 *      mimeData: // value for 'mimeData'
 *      description: // value for 'description'
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      categories: // value for 'categories'
 *      labels: // value for 'labels'
 *   },
 * });
 */
export function useInsertIconMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertIconMutation, InsertIconMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertIconMutation, InsertIconMutationVariables>(InsertIconDocument, baseOptions);
      }
export type InsertIconMutationHookResult = ReturnType<typeof useInsertIconMutation>;
export type InsertIconMutationResult = ApolloReactCommon.MutationResult<InsertIconMutation>;
export type InsertIconMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertIconMutation, InsertIconMutationVariables>;
export const GetIconDocument = gql`
    query GetIcon($id: uuid!) {
  icon: icon_by_pk(id: $id) {
    data
    description
    id
    title
    categories {
      category
      criteria
      sequence
    }
    labels {
      label_id
    }
  }
}
    `;
export type GetIconProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetIconQuery, GetIconQueryVariables>
    } & TChildProps;
export function withGetIcon<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetIconQuery,
  GetIconQueryVariables,
  GetIconProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetIconQuery, GetIconQueryVariables, GetIconProps<TChildProps, TDataName>>(GetIconDocument, {
      alias: 'getIcon',
      ...operationOptions
    });
};

/**
 * __useGetIconQuery__
 *
 * To run a query within a React component, call `useGetIconQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIconQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIconQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetIconQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetIconQuery, GetIconQueryVariables>) {
        return ApolloReactHooks.useQuery<GetIconQuery, GetIconQueryVariables>(GetIconDocument, baseOptions);
      }
export function useGetIconLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetIconQuery, GetIconQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetIconQuery, GetIconQueryVariables>(GetIconDocument, baseOptions);
        }
export type GetIconQueryHookResult = ReturnType<typeof useGetIconQuery>;
export type GetIconLazyQueryHookResult = ReturnType<typeof useGetIconLazyQuery>;
export type GetIconQueryResult = ApolloReactCommon.QueryResult<GetIconQuery, GetIconQueryVariables>;
export const GetIconsDocument = gql`
    query GetIcons {
  icon {
    data
    description
    id
    title
    categories {
      category
      criteria
      sequence
    }
    labels {
      label_id
    }
  }
}
    `;
export type GetIconsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetIconsQuery, GetIconsQueryVariables>
    } & TChildProps;
export function withGetIcons<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetIconsQuery,
  GetIconsQueryVariables,
  GetIconsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetIconsQuery, GetIconsQueryVariables, GetIconsProps<TChildProps, TDataName>>(GetIconsDocument, {
      alias: 'getIcons',
      ...operationOptions
    });
};

/**
 * __useGetIconsQuery__
 *
 * To run a query within a React component, call `useGetIconsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIconsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIconsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIconsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetIconsQuery, GetIconsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetIconsQuery, GetIconsQueryVariables>(GetIconsDocument, baseOptions);
      }
export function useGetIconsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetIconsQuery, GetIconsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetIconsQuery, GetIconsQueryVariables>(GetIconsDocument, baseOptions);
        }
export type GetIconsQueryHookResult = ReturnType<typeof useGetIconsQuery>;
export type GetIconsLazyQueryHookResult = ReturnType<typeof useGetIconsLazyQuery>;
export type GetIconsQueryResult = ApolloReactCommon.QueryResult<GetIconsQuery, GetIconsQueryVariables>;
export const SearchItemsDocument = gql`
    query SearchItems($containsFilter: jsonb, $hasAnyKeysFilter: [String!]) {
  item(order_by: {class: asc}, where: {object: {_has_keys_any: $hasAnyKeysFilter, _contains: $containsFilter}}) {
    id
    name: object(path: "name")
    object
    class
  }
}
    `;
export type SearchItemsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SearchItemsQuery, SearchItemsQueryVariables>
    } & TChildProps;
export function withSearchItems<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SearchItemsQuery,
  SearchItemsQueryVariables,
  SearchItemsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SearchItemsQuery, SearchItemsQueryVariables, SearchItemsProps<TChildProps, TDataName>>(SearchItemsDocument, {
      alias: 'searchItems',
      ...operationOptions
    });
};

/**
 * __useSearchItemsQuery__
 *
 * To run a query within a React component, call `useSearchItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchItemsQuery({
 *   variables: {
 *      containsFilter: // value for 'containsFilter'
 *      hasAnyKeysFilter: // value for 'hasAnyKeysFilter'
 *   },
 * });
 */
export function useSearchItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchItemsQuery, SearchItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchItemsQuery, SearchItemsQueryVariables>(SearchItemsDocument, baseOptions);
      }
export function useSearchItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchItemsQuery, SearchItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchItemsQuery, SearchItemsQueryVariables>(SearchItemsDocument, baseOptions);
        }
export type SearchItemsQueryHookResult = ReturnType<typeof useSearchItemsQuery>;
export type SearchItemsLazyQueryHookResult = ReturnType<typeof useSearchItemsLazyQuery>;
export type SearchItemsQueryResult = ApolloReactCommon.QueryResult<SearchItemsQuery, SearchItemsQueryVariables>;
export const GetLabelsDocument = gql`
    query GetLabels {
  label(order_by: {created_at: asc}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetLabelsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetLabelsQuery, GetLabelsQueryVariables>
    } & TChildProps;
export function withGetLabels<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLabelsQuery,
  GetLabelsQueryVariables,
  GetLabelsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetLabelsQuery, GetLabelsQueryVariables, GetLabelsProps<TChildProps, TDataName>>(GetLabelsDocument, {
      alias: 'getLabels',
      ...operationOptions
    });
};

/**
 * __useGetLabelsQuery__
 *
 * To run a query within a React component, call `useGetLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLabelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, baseOptions);
      }
export function useGetLabelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, baseOptions);
        }
export type GetLabelsQueryHookResult = ReturnType<typeof useGetLabelsQuery>;
export type GetLabelsLazyQueryHookResult = ReturnType<typeof useGetLabelsLazyQuery>;
export type GetLabelsQueryResult = ApolloReactCommon.QueryResult<GetLabelsQuery, GetLabelsQueryVariables>;
export const GetLabelDocument = gql`
    query GetLabel($label_id: uuid!) {
  label: label_by_pk(id: $label_id) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetLabelProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetLabelQuery, GetLabelQueryVariables>
    } & TChildProps;
export function withGetLabel<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLabelQuery,
  GetLabelQueryVariables,
  GetLabelProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetLabelQuery, GetLabelQueryVariables, GetLabelProps<TChildProps, TDataName>>(GetLabelDocument, {
      alias: 'getLabel',
      ...operationOptions
    });
};

/**
 * __useGetLabelQuery__
 *
 * To run a query within a React component, call `useGetLabelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelQuery({
 *   variables: {
 *      label_id: // value for 'label_id'
 *   },
 * });
 */
export function useGetLabelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLabelQuery, GetLabelQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLabelQuery, GetLabelQueryVariables>(GetLabelDocument, baseOptions);
      }
export function useGetLabelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLabelQuery, GetLabelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLabelQuery, GetLabelQueryVariables>(GetLabelDocument, baseOptions);
        }
export type GetLabelQueryHookResult = ReturnType<typeof useGetLabelQuery>;
export type GetLabelLazyQueryHookResult = ReturnType<typeof useGetLabelLazyQuery>;
export type GetLabelQueryResult = ApolloReactCommon.QueryResult<GetLabelQuery, GetLabelQueryVariables>;
export const GetLabelByItemIdDocument = gql`
    query GetLabelByItemId($item_id: Int) {
  label(order_by: {created_at: asc}, where: {item_id: {_eq: $item_id}}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetLabelByItemIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>
    } & TChildProps;
export function withGetLabelByItemId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLabelByItemIdQuery,
  GetLabelByItemIdQueryVariables,
  GetLabelByItemIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables, GetLabelByItemIdProps<TChildProps, TDataName>>(GetLabelByItemIdDocument, {
      alias: 'getLabelByItemId',
      ...operationOptions
    });
};

/**
 * __useGetLabelByItemIdQuery__
 *
 * To run a query within a React component, call `useGetLabelByItemIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelByItemIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelByItemIdQuery({
 *   variables: {
 *      item_id: // value for 'item_id'
 *   },
 * });
 */
export function useGetLabelByItemIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>(GetLabelByItemIdDocument, baseOptions);
      }
export function useGetLabelByItemIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>(GetLabelByItemIdDocument, baseOptions);
        }
export type GetLabelByItemIdQueryHookResult = ReturnType<typeof useGetLabelByItemIdQuery>;
export type GetLabelByItemIdLazyQueryHookResult = ReturnType<typeof useGetLabelByItemIdLazyQuery>;
export type GetLabelByItemIdQueryResult = ApolloReactCommon.QueryResult<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>;
export const GetTemplatesDocument = gql`
    query GetTemplates {
  label(order_by: {created_at: asc}, where: {template_items: {}}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetTemplatesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTemplatesQuery, GetTemplatesQueryVariables>
    } & TChildProps;
export function withGetTemplates<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTemplatesQuery,
  GetTemplatesQueryVariables,
  GetTemplatesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTemplatesQuery, GetTemplatesQueryVariables, GetTemplatesProps<TChildProps, TDataName>>(GetTemplatesDocument, {
      alias: 'getTemplates',
      ...operationOptions
    });
};

/**
 * __useGetTemplatesQuery__
 *
 * To run a query within a React component, call `useGetTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTemplatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, baseOptions);
      }
export function useGetTemplatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, baseOptions);
        }
export type GetTemplatesQueryHookResult = ReturnType<typeof useGetTemplatesQuery>;
export type GetTemplatesLazyQueryHookResult = ReturnType<typeof useGetTemplatesLazyQuery>;
export type GetTemplatesQueryResult = ApolloReactCommon.QueryResult<GetTemplatesQuery, GetTemplatesQueryVariables>;
export const GetSingleLabelsDocument = gql`
    query GetSingleLabels {
  label(order_by: {created_at: asc}, where: {_not: {template_items: {}}}) {
    id
  }
}
    `;
export type GetSingleLabelsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>
    } & TChildProps;
export function withGetSingleLabels<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSingleLabelsQuery,
  GetSingleLabelsQueryVariables,
  GetSingleLabelsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSingleLabelsQuery, GetSingleLabelsQueryVariables, GetSingleLabelsProps<TChildProps, TDataName>>(GetSingleLabelsDocument, {
      alias: 'getSingleLabels',
      ...operationOptions
    });
};

/**
 * __useGetSingleLabelsQuery__
 *
 * To run a query within a React component, call `useGetSingleLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSingleLabelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>(GetSingleLabelsDocument, baseOptions);
      }
export function useGetSingleLabelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>(GetSingleLabelsDocument, baseOptions);
        }
export type GetSingleLabelsQueryHookResult = ReturnType<typeof useGetSingleLabelsQuery>;
export type GetSingleLabelsLazyQueryHookResult = ReturnType<typeof useGetSingleLabelsLazyQuery>;
export type GetSingleLabelsQueryResult = ApolloReactCommon.QueryResult<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>;
export const SaveLabelDocument = gql`
    mutation SaveLabel($content: jsonb, $height: Int, $id: uuid, $item_id: Int, $title: String, $width: Int) {
  insert_label(objects: {content: $content, height: $height, id: $id, item_id: $item_id, title: $title, width: $width}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type SaveLabelMutationFn = ApolloReactCommon.MutationFunction<SaveLabelMutation, SaveLabelMutationVariables>;
export type SaveLabelProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SaveLabelMutation, SaveLabelMutationVariables>
    } & TChildProps;
export function withSaveLabel<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SaveLabelMutation,
  SaveLabelMutationVariables,
  SaveLabelProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SaveLabelMutation, SaveLabelMutationVariables, SaveLabelProps<TChildProps, TDataName>>(SaveLabelDocument, {
      alias: 'saveLabel',
      ...operationOptions
    });
};

/**
 * __useSaveLabelMutation__
 *
 * To run a mutation, you first call `useSaveLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLabelMutation, { data, loading, error }] = useSaveLabelMutation({
 *   variables: {
 *      content: // value for 'content'
 *      height: // value for 'height'
 *      id: // value for 'id'
 *      item_id: // value for 'item_id'
 *      title: // value for 'title'
 *      width: // value for 'width'
 *   },
 * });
 */
export function useSaveLabelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveLabelMutation, SaveLabelMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveLabelMutation, SaveLabelMutationVariables>(SaveLabelDocument, baseOptions);
      }
export type SaveLabelMutationHookResult = ReturnType<typeof useSaveLabelMutation>;
export type SaveLabelMutationResult = ApolloReactCommon.MutationResult<SaveLabelMutation>;
export type SaveLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveLabelMutation, SaveLabelMutationVariables>;
export const EditLabelDocument = gql`
    mutation EditLabel($content: jsonb, $height: Int, $id: uuid, $item_id: Int, $title: String, $width: Int) {
  __typename
  update_label(where: {id: {_eq: $id}}, _set: {content: $content, height: $height, item_id: $item_id, title: $title, width: $width}) {
    returning {
      id
    }
    affected_rows
  }
}
    `;
export type EditLabelMutationFn = ApolloReactCommon.MutationFunction<EditLabelMutation, EditLabelMutationVariables>;
export type EditLabelProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<EditLabelMutation, EditLabelMutationVariables>
    } & TChildProps;
export function withEditLabel<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditLabelMutation,
  EditLabelMutationVariables,
  EditLabelProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditLabelMutation, EditLabelMutationVariables, EditLabelProps<TChildProps, TDataName>>(EditLabelDocument, {
      alias: 'editLabel',
      ...operationOptions
    });
};

/**
 * __useEditLabelMutation__
 *
 * To run a mutation, you first call `useEditLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editLabelMutation, { data, loading, error }] = useEditLabelMutation({
 *   variables: {
 *      content: // value for 'content'
 *      height: // value for 'height'
 *      id: // value for 'id'
 *      item_id: // value for 'item_id'
 *      title: // value for 'title'
 *      width: // value for 'width'
 *   },
 * });
 */
export function useEditLabelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditLabelMutation, EditLabelMutationVariables>) {
        return ApolloReactHooks.useMutation<EditLabelMutation, EditLabelMutationVariables>(EditLabelDocument, baseOptions);
      }
export type EditLabelMutationHookResult = ReturnType<typeof useEditLabelMutation>;
export type EditLabelMutationResult = ApolloReactCommon.MutationResult<EditLabelMutation>;
export type EditLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<EditLabelMutation, EditLabelMutationVariables>;
export const GetOrdersByDateRangeDocument = gql`
    query GetOrdersByDateRange($date_start_gte: date, $date_end_lte: date) {
  order(where: {placed_date: {_gte: $date_start_gte, _lte: $date_end_lte}}) {
    vendor_order_id
    vendor {
      name
      url
    }
    url
    total_cost
    tax_cost
    pon
    placed_date
    payment_method_id
    items_cost
    id
    fulfilled_date
  }
}
    `;
export type GetOrdersByDateRangeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>
    } & TChildProps;
export function withGetOrdersByDateRange<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOrdersByDateRangeQuery,
  GetOrdersByDateRangeQueryVariables,
  GetOrdersByDateRangeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables, GetOrdersByDateRangeProps<TChildProps, TDataName>>(GetOrdersByDateRangeDocument, {
      alias: 'getOrdersByDateRange',
      ...operationOptions
    });
};

/**
 * __useGetOrdersByDateRangeQuery__
 *
 * To run a query within a React component, call `useGetOrdersByDateRangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersByDateRangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersByDateRangeQuery({
 *   variables: {
 *      date_start_gte: // value for 'date_start_gte'
 *      date_end_lte: // value for 'date_end_lte'
 *   },
 * });
 */
export function useGetOrdersByDateRangeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>(GetOrdersByDateRangeDocument, baseOptions);
      }
export function useGetOrdersByDateRangeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>(GetOrdersByDateRangeDocument, baseOptions);
        }
export type GetOrdersByDateRangeQueryHookResult = ReturnType<typeof useGetOrdersByDateRangeQuery>;
export type GetOrdersByDateRangeLazyQueryHookResult = ReturnType<typeof useGetOrdersByDateRangeLazyQuery>;
export type GetOrdersByDateRangeQueryResult = ApolloReactCommon.QueryResult<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>;
export const InsertOrderDocument = gql`
    mutation InsertOrder($fulfilled_date: date, $items: order_item_arr_rel_insert_input, $items_cost: money, $payment_method: payment_method_obj_rel_insert_input, $payment_method_id: Int, $placed_date: date, $pon: String, $shipments: shipment_arr_rel_insert_input, $tax_cost: money, $total_cost: money, $url: String, $vendor: vendor_obj_rel_insert_input, $vendor_id: Int, $vendor_order_id: String) {
  insert_order(objects: {items: $items, payment_method: $payment_method, shipments: $shipments, vendor: $vendor, fulfilled_date: $fulfilled_date, items_cost: $items_cost, payment_method_id: $payment_method_id, placed_date: $placed_date, pon: $pon, tax_cost: $tax_cost, total_cost: $total_cost, url: $url, vendor_id: $vendor_id, vendor_order_id: $vendor_order_id}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type InsertOrderMutationFn = ApolloReactCommon.MutationFunction<InsertOrderMutation, InsertOrderMutationVariables>;
export type InsertOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<InsertOrderMutation, InsertOrderMutationVariables>
    } & TChildProps;
export function withInsertOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertOrderMutation,
  InsertOrderMutationVariables,
  InsertOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, InsertOrderMutation, InsertOrderMutationVariables, InsertOrderProps<TChildProps, TDataName>>(InsertOrderDocument, {
      alias: 'insertOrder',
      ...operationOptions
    });
};

/**
 * __useInsertOrderMutation__
 *
 * To run a mutation, you first call `useInsertOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertOrderMutation, { data, loading, error }] = useInsertOrderMutation({
 *   variables: {
 *      fulfilled_date: // value for 'fulfilled_date'
 *      items: // value for 'items'
 *      items_cost: // value for 'items_cost'
 *      payment_method: // value for 'payment_method'
 *      payment_method_id: // value for 'payment_method_id'
 *      placed_date: // value for 'placed_date'
 *      pon: // value for 'pon'
 *      shipments: // value for 'shipments'
 *      tax_cost: // value for 'tax_cost'
 *      total_cost: // value for 'total_cost'
 *      url: // value for 'url'
 *      vendor: // value for 'vendor'
 *      vendor_id: // value for 'vendor_id'
 *      vendor_order_id: // value for 'vendor_order_id'
 *   },
 * });
 */
export function useInsertOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertOrderMutation, InsertOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertOrderMutation, InsertOrderMutationVariables>(InsertOrderDocument, baseOptions);
      }
export type InsertOrderMutationHookResult = ReturnType<typeof useInsertOrderMutation>;
export type InsertOrderMutationResult = ApolloReactCommon.MutationResult<InsertOrderMutation>;
export type InsertOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertOrderMutation, InsertOrderMutationVariables>;
export const GetPrinterStatusDocument = gql`
    query GetPrinterStatus {
  PrinterStatus {
    labelType
    heightInch
    labelStatus {
      mediaType
      tapeColor
      textColor
      labelCharacteristic {
        pinsRight
        pinsPrint
        pinsLeft
        widthMillimeters
      }
    }
  }
}
    `;
export type GetPrinterStatusProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>
    } & TChildProps;
export function withGetPrinterStatus<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPrinterStatusQuery,
  GetPrinterStatusQueryVariables,
  GetPrinterStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPrinterStatusQuery, GetPrinterStatusQueryVariables, GetPrinterStatusProps<TChildProps, TDataName>>(GetPrinterStatusDocument, {
      alias: 'getPrinterStatus',
      ...operationOptions
    });
};

/**
 * __useGetPrinterStatusQuery__
 *
 * To run a query within a React component, call `useGetPrinterStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrinterStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrinterStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPrinterStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>(GetPrinterStatusDocument, baseOptions);
      }
export function useGetPrinterStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>(GetPrinterStatusDocument, baseOptions);
        }
export type GetPrinterStatusQueryHookResult = ReturnType<typeof useGetPrinterStatusQuery>;
export type GetPrinterStatusLazyQueryHookResult = ReturnType<typeof useGetPrinterStatusLazyQuery>;
export type GetPrinterStatusQueryResult = ApolloReactCommon.QueryResult<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>;
export const SendBufferDocument = gql`
    mutation SendBuffer($buffer: [[[uint8]]]!) {
  putLabelMonochromeBuffer(imageBuffer: $buffer) {
    result
  }
}
    `;
export type SendBufferMutationFn = ApolloReactCommon.MutationFunction<SendBufferMutation, SendBufferMutationVariables>;
export type SendBufferProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SendBufferMutation, SendBufferMutationVariables>
    } & TChildProps;
export function withSendBuffer<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SendBufferMutation,
  SendBufferMutationVariables,
  SendBufferProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SendBufferMutation, SendBufferMutationVariables, SendBufferProps<TChildProps, TDataName>>(SendBufferDocument, {
      alias: 'sendBuffer',
      ...operationOptions
    });
};

/**
 * __useSendBufferMutation__
 *
 * To run a mutation, you first call `useSendBufferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendBufferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendBufferMutation, { data, loading, error }] = useSendBufferMutation({
 *   variables: {
 *      buffer: // value for 'buffer'
 *   },
 * });
 */
export function useSendBufferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendBufferMutation, SendBufferMutationVariables>) {
        return ApolloReactHooks.useMutation<SendBufferMutation, SendBufferMutationVariables>(SendBufferDocument, baseOptions);
      }
export type SendBufferMutationHookResult = ReturnType<typeof useSendBufferMutation>;
export type SendBufferMutationResult = ApolloReactCommon.MutationResult<SendBufferMutation>;
export type SendBufferMutationOptions = ApolloReactCommon.BaseMutationOptions<SendBufferMutation, SendBufferMutationVariables>;
export const GetItemsDocument = gql`
    query GetItems($categories: [enum_item_class_enum!]) {
  items: item(where: {class: {_in: $categories}}, order_by: {id: asc}) {
    ...ItemFields
  }
}
    ${ItemFieldsFragmentDoc}`;
export type GetItemsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetItemsQuery, GetItemsQueryVariables>
    } & TChildProps;
export function withGetItems<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetItemsQuery,
  GetItemsQueryVariables,
  GetItemsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetItemsQuery, GetItemsQueryVariables, GetItemsProps<TChildProps, TDataName>>(GetItemsDocument, {
      alias: 'getItems',
      ...operationOptions
    });
};

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, baseOptions);
      }
export function useGetItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, baseOptions);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = ApolloReactCommon.QueryResult<GetItemsQuery, GetItemsQueryVariables>;
export const GetItemDocument = gql`
    query GetItem($id: Int!) {
  item: item_by_pk(id: $id) {
    ...ItemFields
  }
}
    ${ItemFieldsFragmentDoc}`;
export type GetItemProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetItemQuery, GetItemQueryVariables>
    } & TChildProps;
export function withGetItem<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetItemQuery,
  GetItemQueryVariables,
  GetItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetItemQuery, GetItemQueryVariables, GetItemProps<TChildProps, TDataName>>(GetItemDocument, {
      alias: 'getItem',
      ...operationOptions
    });
};

/**
 * __useGetItemQuery__
 *
 * To run a query within a React component, call `useGetItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
        return ApolloReactHooks.useQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, baseOptions);
      }
export function useGetItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, baseOptions);
        }
export type GetItemQueryHookResult = ReturnType<typeof useGetItemQuery>;
export type GetItemLazyQueryHookResult = ReturnType<typeof useGetItemLazyQuery>;
export type GetItemQueryResult = ApolloReactCommon.QueryResult<GetItemQuery, GetItemQueryVariables>;
export const ItemSearchDocument = gql`
    query ItemSearch($search_text: String!) {
  search(args: {query_text: $search_text}, where: {class: {}}) {
    id
    class
    name: text
    metadata
  }
}
    `;
export type ItemSearchProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ItemSearchQuery, ItemSearchQueryVariables>
    } & TChildProps;
export function withItemSearch<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemSearchQuery,
  ItemSearchQueryVariables,
  ItemSearchProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ItemSearchQuery, ItemSearchQueryVariables, ItemSearchProps<TChildProps, TDataName>>(ItemSearchDocument, {
      alias: 'itemSearch',
      ...operationOptions
    });
};

/**
 * __useItemSearchQuery__
 *
 * To run a query within a React component, call `useItemSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemSearchQuery({
 *   variables: {
 *      search_text: // value for 'search_text'
 *   },
 * });
 */
export function useItemSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemSearchQuery, ItemSearchQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemSearchQuery, ItemSearchQueryVariables>(ItemSearchDocument, baseOptions);
      }
export function useItemSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemSearchQuery, ItemSearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemSearchQuery, ItemSearchQueryVariables>(ItemSearchDocument, baseOptions);
        }
export type ItemSearchQueryHookResult = ReturnType<typeof useItemSearchQuery>;
export type ItemSearchLazyQueryHookResult = ReturnType<typeof useItemSearchLazyQuery>;
export type ItemSearchQueryResult = ApolloReactCommon.QueryResult<ItemSearchQuery, ItemSearchQueryVariables>;
export const ItemBundleDocument = gql`
    query item_bundle {
  item_bundle {
    id
    name
    description
    items {
      item {
        id
      }
    }
  }
}
    `;
export type ItemBundleProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ItemBundleQuery, ItemBundleQueryVariables>
    } & TChildProps;
export function withItemBundle<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemBundleQuery,
  ItemBundleQueryVariables,
  ItemBundleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ItemBundleQuery, ItemBundleQueryVariables, ItemBundleProps<TChildProps, TDataName>>(ItemBundleDocument, {
      alias: 'itemBundle',
      ...operationOptions
    });
};

/**
 * __useItemBundleQuery__
 *
 * To run a query within a React component, call `useItemBundleQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemBundleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemBundleQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemBundleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemBundleQuery, ItemBundleQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemBundleQuery, ItemBundleQueryVariables>(ItemBundleDocument, baseOptions);
      }
export function useItemBundleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemBundleQuery, ItemBundleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemBundleQuery, ItemBundleQueryVariables>(ItemBundleDocument, baseOptions);
        }
export type ItemBundleQueryHookResult = ReturnType<typeof useItemBundleQuery>;
export type ItemBundleLazyQueryHookResult = ReturnType<typeof useItemBundleLazyQuery>;
export type ItemBundleQueryResult = ApolloReactCommon.QueryResult<ItemBundleQuery, ItemBundleQueryVariables>;
export const ItemHardwareFastenerBoltDocument = gql`
    query item_hardware_fastener_bolt {
  items: item_hardware_fastener_bolt(order_by: {id: asc}) {
    ...ItemHardwareFastenerBoltFields
  }
}
    ${ItemHardwareFastenerBoltFieldsFragmentDoc}`;
export type ItemHardwareFastenerBoltProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables>
    } & TChildProps;
export function withItemHardwareFastenerBolt<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemHardwareFastenerBoltQuery,
  ItemHardwareFastenerBoltQueryVariables,
  ItemHardwareFastenerBoltProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables, ItemHardwareFastenerBoltProps<TChildProps, TDataName>>(ItemHardwareFastenerBoltDocument, {
      alias: 'itemHardwareFastenerBolt',
      ...operationOptions
    });
};

/**
 * __useItemHardwareFastenerBoltQuery__
 *
 * To run a query within a React component, call `useItemHardwareFastenerBoltQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemHardwareFastenerBoltQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemHardwareFastenerBoltQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemHardwareFastenerBoltQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables>(ItemHardwareFastenerBoltDocument, baseOptions);
      }
export function useItemHardwareFastenerBoltLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables>(ItemHardwareFastenerBoltDocument, baseOptions);
        }
export type ItemHardwareFastenerBoltQueryHookResult = ReturnType<typeof useItemHardwareFastenerBoltQuery>;
export type ItemHardwareFastenerBoltLazyQueryHookResult = ReturnType<typeof useItemHardwareFastenerBoltLazyQuery>;
export type ItemHardwareFastenerBoltQueryResult = ApolloReactCommon.QueryResult<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables>;
export const InsertItemHardwareFastenerBoltDocument = gql`
    mutation InsertItemHardwareFastenerBolt($countersunk_angle: numeric, $countersunk_height: numeric, $description: String, $drive_size: String, $drive_type: enum_hardware_fastener_drive_enum, $embedded_length: numeric, $finish: enum_hardware_finish_enum, $hardness: enum_hardware_fastener_hardness_enum, $head_diameter: numeric, $head_height: numeric, $head_type: enum_hardware_fastener_head_enum, $id: Int, $material: enum_hardware_fastener_material_enum, $name: String, $point_type: enum_hardware_fastener_bolt_point_enum, $shaft_length: numeric, $specifications_met: jsonb, $strength_class: enum_hardware_fastener_strength_class_enum, $tensile_strength: numeric, $thread_diameter: numeric, $thread_direction: enum_hardware_fastener_thread_direction_enum, $thread_fit: enum_hardware_fastener_thread_fit_enum, $thread_length: numeric, $thread_pitch: numeric, $thread_type: enum_hardware_fastener_thread_type_enum, $unit: enum_unit_enum, $use_material: enum_hardware_fastener_use_material_enum) {
  insert_item_hardware_fastener_bolt_one(object: {countersunk_angle: $countersunk_angle, countersunk_height: $countersunk_height, description: $description, drive_size: $drive_size, drive_type: $drive_type, embedded_length: $embedded_length, finish: $finish, hardness: $hardness, head_diameter: $head_diameter, head_height: $head_height, head_type: $head_type, material: $material, name: $name, point_type: $point_type, shaft_length: $shaft_length, specifications_met: $specifications_met, strength_class: $strength_class, tensile_strength: $tensile_strength, thread_diameter: $thread_diameter, thread_direction: $thread_direction, thread_fit: $thread_fit, thread_length: $thread_length, thread_pitch: $thread_pitch, thread_type: $thread_type, unit: $unit, use_material: $use_material}) {
    ...ItemHardwareFastenerBoltFields
  }
}
    ${ItemHardwareFastenerBoltFieldsFragmentDoc}`;
export type InsertItemHardwareFastenerBoltMutationFn = ApolloReactCommon.MutationFunction<InsertItemHardwareFastenerBoltMutation, InsertItemHardwareFastenerBoltMutationVariables>;
export type InsertItemHardwareFastenerBoltProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<InsertItemHardwareFastenerBoltMutation, InsertItemHardwareFastenerBoltMutationVariables>
    } & TChildProps;
export function withInsertItemHardwareFastenerBolt<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertItemHardwareFastenerBoltMutation,
  InsertItemHardwareFastenerBoltMutationVariables,
  InsertItemHardwareFastenerBoltProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, InsertItemHardwareFastenerBoltMutation, InsertItemHardwareFastenerBoltMutationVariables, InsertItemHardwareFastenerBoltProps<TChildProps, TDataName>>(InsertItemHardwareFastenerBoltDocument, {
      alias: 'insertItemHardwareFastenerBolt',
      ...operationOptions
    });
};

/**
 * __useInsertItemHardwareFastenerBoltMutation__
 *
 * To run a mutation, you first call `useInsertItemHardwareFastenerBoltMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertItemHardwareFastenerBoltMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertItemHardwareFastenerBoltMutation, { data, loading, error }] = useInsertItemHardwareFastenerBoltMutation({
 *   variables: {
 *      countersunk_angle: // value for 'countersunk_angle'
 *      countersunk_height: // value for 'countersunk_height'
 *      description: // value for 'description'
 *      drive_size: // value for 'drive_size'
 *      drive_type: // value for 'drive_type'
 *      embedded_length: // value for 'embedded_length'
 *      finish: // value for 'finish'
 *      hardness: // value for 'hardness'
 *      head_diameter: // value for 'head_diameter'
 *      head_height: // value for 'head_height'
 *      head_type: // value for 'head_type'
 *      id: // value for 'id'
 *      material: // value for 'material'
 *      name: // value for 'name'
 *      point_type: // value for 'point_type'
 *      shaft_length: // value for 'shaft_length'
 *      specifications_met: // value for 'specifications_met'
 *      strength_class: // value for 'strength_class'
 *      tensile_strength: // value for 'tensile_strength'
 *      thread_diameter: // value for 'thread_diameter'
 *      thread_direction: // value for 'thread_direction'
 *      thread_fit: // value for 'thread_fit'
 *      thread_length: // value for 'thread_length'
 *      thread_pitch: // value for 'thread_pitch'
 *      thread_type: // value for 'thread_type'
 *      unit: // value for 'unit'
 *      use_material: // value for 'use_material'
 *   },
 * });
 */
export function useInsertItemHardwareFastenerBoltMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertItemHardwareFastenerBoltMutation, InsertItemHardwareFastenerBoltMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertItemHardwareFastenerBoltMutation, InsertItemHardwareFastenerBoltMutationVariables>(InsertItemHardwareFastenerBoltDocument, baseOptions);
      }
export type InsertItemHardwareFastenerBoltMutationHookResult = ReturnType<typeof useInsertItemHardwareFastenerBoltMutation>;
export type InsertItemHardwareFastenerBoltMutationResult = ApolloReactCommon.MutationResult<InsertItemHardwareFastenerBoltMutation>;
export type InsertItemHardwareFastenerBoltMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertItemHardwareFastenerBoltMutation, InsertItemHardwareFastenerBoltMutationVariables>;
// graphql typescript defs generated on 2020-05-24T08:55:34-06:00
