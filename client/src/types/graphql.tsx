import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  date: any,
  money: any,
  timestamptz: any,
  uuid: any,
  numeric: any,
  /** uint8 (unsigned int between 0 and 255) scalar type for Apollo GraphQL */
  uint8: any,
  Upload: any,
};

/** conflict action */
export enum ConflictAction {
  /** ignore the insert on this row */
  IGNORE = 'ignore',
  /** update the row with the given values */
  UPDATE = 'update'
}


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: Maybe<Scalars['date']>,
  _gt?: Maybe<Scalars['date']>,
  _gte?: Maybe<Scalars['date']>,
  _in?: Maybe<Array<Scalars['date']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['date']>,
  _lte?: Maybe<Scalars['date']>,
  _neq?: Maybe<Scalars['date']>,
  _nin?: Maybe<Array<Scalars['date']>>,
};

/** columns and relationships of "entity" */
export type Entity = {
   __typename?: 'entity',
  description?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name: Scalars['String'],
  /** An array relationship */
  purchaseAsManufacturer: Array<Purchases>,
  /** An aggregated array relationship */
  purchaseAsManufacturer_aggregate: PurchasesAggregate,
  /** An array relationship */
  purchaseAsVendor: Array<Purchases>,
  /** An aggregated array relationship */
  purchaseAsVendor_aggregate: PurchasesAggregate,
  url?: Maybe<Scalars['String']>,
};


/** columns and relationships of "entity" */
export type EntityPurchaseAsManufacturerArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};


/** columns and relationships of "entity" */
export type EntityPurchaseAsManufacturerAggregateArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};


/** columns and relationships of "entity" */
export type EntityPurchaseAsVendorArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};


/** columns and relationships of "entity" */
export type EntityPurchaseAsVendorAggregateArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};

/** aggregated selection of "entity" */
export type EntityAggregate = {
   __typename?: 'entity_aggregate',
  aggregate?: Maybe<EntityAggregateFields>,
  nodes: Array<Entity>,
};

/** aggregate fields of "entity" */
export type EntityAggregateFields = {
   __typename?: 'entity_aggregate_fields',
  avg?: Maybe<EntityAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EntityMaxFields>,
  min?: Maybe<EntityMinFields>,
  stddev?: Maybe<EntityStddevFields>,
  stddev_pop?: Maybe<EntityStddevPopFields>,
  stddev_samp?: Maybe<EntityStddevSampFields>,
  sum?: Maybe<EntitySumFields>,
  var_pop?: Maybe<EntityVarPopFields>,
  var_samp?: Maybe<EntityVarSampFields>,
  variance?: Maybe<EntityVarianceFields>,
};


/** aggregate fields of "entity" */
export type EntityAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EntitySelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "entity" */
export type EntityAggregateOrderBy = {
  avg?: Maybe<EntityAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<EntityMaxOrderBy>,
  min?: Maybe<EntityMinOrderBy>,
  stddev?: Maybe<EntityStddevOrderBy>,
  stddev_pop?: Maybe<EntityStddevPopOrderBy>,
  stddev_samp?: Maybe<EntityStddevSampOrderBy>,
  sum?: Maybe<EntitySumOrderBy>,
  var_pop?: Maybe<EntityVarPopOrderBy>,
  var_samp?: Maybe<EntityVarSampOrderBy>,
  variance?: Maybe<EntityVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "entity" */
export type EntityArrRelInsertInput = {
  data: Array<EntityInsertInput>,
  on_conflict?: Maybe<EntityOnConflict>,
};

/** aggregate avg on columns */
export type EntityAvgFields = {
   __typename?: 'entity_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "entity" */
export type EntityAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "entity". All fields are combined with a logical 'AND'. */
export type EntityBoolExp = {
  _and?: Maybe<Array<Maybe<EntityBoolExp>>>,
  _not?: Maybe<EntityBoolExp>,
  _or?: Maybe<Array<Maybe<EntityBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
  purchaseAsManufacturer?: Maybe<PurchasesBoolExp>,
  purchaseAsVendor?: Maybe<PurchasesBoolExp>,
  url?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "entity" */
export enum EntityConstraint {
  /** unique or primary key constraint */
  ENTITY_NAME_KEY = 'entity_name_key',
  /** unique or primary key constraint */
  ENTITY_PKEY = 'entity_pkey'
}

/** input type for incrementing integer columne in table "entity" */
export type EntityIncInput = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "entity" */
export type EntityInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  purchaseAsManufacturer?: Maybe<PurchasesArrRelInsertInput>,
  purchaseAsVendor?: Maybe<PurchasesArrRelInsertInput>,
  url?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type EntityMaxFields = {
   __typename?: 'entity_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "entity" */
export type EntityMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type EntityMinFields = {
   __typename?: 'entity_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "entity" */
export type EntityMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
};

/** response of any mutation on the table "entity" */
export type EntityMutationResponse = {
   __typename?: 'entity_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Entity>,
};

/** input type for inserting object relation for remote table "entity" */
export type EntityObjRelInsertInput = {
  data: EntityInsertInput,
  on_conflict?: Maybe<EntityOnConflict>,
};

/** on conflict condition type for table "entity" */
export type EntityOnConflict = {
  constraint: EntityConstraint,
  update_columns: Array<EntityUpdateColumn>,
};

/** ordering options when selecting data from "entity" */
export type EntityOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  purchaseAsManufacturer_aggregate?: Maybe<PurchasesAggregateOrderBy>,
  purchaseAsVendor_aggregate?: Maybe<PurchasesAggregateOrderBy>,
  url?: Maybe<OrderBy>,
};

/** select columns of table "entity" */
export enum EntitySelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  URL = 'url'
}

/** input type for updating data in table "entity" */
export type EntitySetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type EntityStddevFields = {
   __typename?: 'entity_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "entity" */
export type EntityStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type EntityStddevPopFields = {
   __typename?: 'entity_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "entity" */
export type EntityStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type EntityStddevSampFields = {
   __typename?: 'entity_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "entity" */
export type EntityStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type EntitySumFields = {
   __typename?: 'entity_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "entity" */
export type EntitySumOrderBy = {
  id?: Maybe<OrderBy>,
};

/** update columns of table "entity" */
export enum EntityUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  URL = 'url'
}

/** aggregate var_pop on columns */
export type EntityVarPopFields = {
   __typename?: 'entity_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "entity" */
export type EntityVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type EntityVarSampFields = {
   __typename?: 'entity_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "entity" */
export type EntityVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type EntityVarianceFields = {
   __typename?: 'entity_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "entity" */
export type EntityVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

/** columns and relationships of "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterial = {
   __typename?: 'enum_hardware_fastener_material',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** aggregated selection of "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregate = {
   __typename?: 'enum_hardware_fastener_material_aggregate',
  aggregate?: Maybe<EnumHardwareFastenerMaterialAggregateFields>,
  nodes: Array<EnumHardwareFastenerMaterial>,
};

/** aggregate fields of "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregateFields = {
   __typename?: 'enum_hardware_fastener_material_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumHardwareFastenerMaterialMaxFields>,
  min?: Maybe<EnumHardwareFastenerMaterialMinFields>,
};


/** aggregate fields of "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumHardwareFastenerMaterialMaxOrderBy>,
  min?: Maybe<EnumHardwareFastenerMaterialMinOrderBy>,
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialArrRelInsertInput = {
  data: Array<EnumHardwareFastenerMaterialInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>,
};

/** 
 * Boolean expression to filter rows from the table
 * "enum.hardware_fastener_material". All fields are combined with a logical 'AND'.
 **/
export type EnumHardwareFastenerMaterialBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerMaterialBoolExp>>>,
  _not?: Maybe<EnumHardwareFastenerMaterialBoolExp>,
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerMaterialBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "enum.hardware_fastener_material" */
export enum EnumHardwareFastenerMaterialConstraint {
  /** unique or primary key constraint */
  HARDWARE_FASTENER_MATERIAL_PKEY = 'hardware_fastener_material_pkey'
}

/** input type for inserting data into table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type EnumHardwareFastenerMaterialMaxFields = {
   __typename?: 'enum_hardware_fastener_material_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type EnumHardwareFastenerMaterialMinFields = {
   __typename?: 'enum_hardware_fastener_material_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** response of any mutation on the table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialMutationResponse = {
   __typename?: 'enum_hardware_fastener_material_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerMaterial>,
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialObjRelInsertInput = {
  data: EnumHardwareFastenerMaterialInsertInput,
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>,
};

/** on conflict condition type for table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialOnConflict = {
  constraint: EnumHardwareFastenerMaterialConstraint,
  update_columns: Array<EnumHardwareFastenerMaterialUpdateColumn>,
};

/** ordering options when selecting data from "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** select columns of table "enum.hardware_fastener_material" */
export enum EnumHardwareFastenerMaterialSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_material" */
export type EnumHardwareFastenerMaterialSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** update columns of table "enum.hardware_fastener_material" */
export enum EnumHardwareFastenerMaterialUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** columns and relationships of "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPoint = {
   __typename?: 'enum_hardware_fastener_screw_point',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** aggregated selection of "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointAggregate = {
   __typename?: 'enum_hardware_fastener_screw_point_aggregate',
  aggregate?: Maybe<EnumHardwareFastenerScrewPointAggregateFields>,
  nodes: Array<EnumHardwareFastenerScrewPoint>,
};

/** aggregate fields of "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointAggregateFields = {
   __typename?: 'enum_hardware_fastener_screw_point_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumHardwareFastenerScrewPointMaxFields>,
  min?: Maybe<EnumHardwareFastenerScrewPointMinFields>,
};


/** aggregate fields of "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumHardwareFastenerScrewPointMaxOrderBy>,
  min?: Maybe<EnumHardwareFastenerScrewPointMinOrderBy>,
};

/** input type for inserting array relation for remote table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointArrRelInsertInput = {
  data: Array<EnumHardwareFastenerScrewPointInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerScrewPointOnConflict>,
};

/** 
 * Boolean expression to filter rows from the table
 * "enum.hardware_fastener_screw_point". All fields are combined with a logical 'AND'.
 **/
export type EnumHardwareFastenerScrewPointBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerScrewPointBoolExp>>>,
  _not?: Maybe<EnumHardwareFastenerScrewPointBoolExp>,
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerScrewPointBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "enum.hardware_fastener_screw_point" */
export enum EnumHardwareFastenerScrewPointConstraint {
  /** unique or primary key constraint */
  HARDWARE_FASTENER_SCREW_POINT_PKEY = 'hardware_fastener_screw_point_pkey'
}

/** input type for inserting data into table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type EnumHardwareFastenerScrewPointMaxFields = {
   __typename?: 'enum_hardware_fastener_screw_point_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type EnumHardwareFastenerScrewPointMinFields = {
   __typename?: 'enum_hardware_fastener_screw_point_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** response of any mutation on the table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointMutationResponse = {
   __typename?: 'enum_hardware_fastener_screw_point_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFastenerScrewPoint>,
};

/** input type for inserting object relation for remote table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointObjRelInsertInput = {
  data: EnumHardwareFastenerScrewPointInsertInput,
  on_conflict?: Maybe<EnumHardwareFastenerScrewPointOnConflict>,
};

/** on conflict condition type for table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointOnConflict = {
  constraint: EnumHardwareFastenerScrewPointConstraint,
  update_columns: Array<EnumHardwareFastenerScrewPointUpdateColumn>,
};

/** ordering options when selecting data from "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** select columns of table "enum.hardware_fastener_screw_point" */
export enum EnumHardwareFastenerScrewPointSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** input type for updating data in table "enum.hardware_fastener_screw_point" */
export type EnumHardwareFastenerScrewPointSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** update columns of table "enum.hardware_fastener_screw_point" */
export enum EnumHardwareFastenerScrewPointUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** columns and relationships of "enum.hardware_finish" */
export type EnumHardwareFinish = {
   __typename?: 'enum_hardware_finish',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** aggregated selection of "enum.hardware_finish" */
export type EnumHardwareFinishAggregate = {
   __typename?: 'enum_hardware_finish_aggregate',
  aggregate?: Maybe<EnumHardwareFinishAggregateFields>,
  nodes: Array<EnumHardwareFinish>,
};

/** aggregate fields of "enum.hardware_finish" */
export type EnumHardwareFinishAggregateFields = {
   __typename?: 'enum_hardware_finish_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumHardwareFinishMaxFields>,
  min?: Maybe<EnumHardwareFinishMinFields>,
};


/** aggregate fields of "enum.hardware_finish" */
export type EnumHardwareFinishAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "enum.hardware_finish" */
export type EnumHardwareFinishAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumHardwareFinishMaxOrderBy>,
  min?: Maybe<EnumHardwareFinishMinOrderBy>,
};

/** input type for inserting array relation for remote table "enum.hardware_finish" */
export type EnumHardwareFinishArrRelInsertInput = {
  data: Array<EnumHardwareFinishInsertInput>,
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>,
};

/** Boolean expression to filter rows from the table "enum.hardware_finish". All fields are combined with a logical 'AND'. */
export type EnumHardwareFinishBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFinishBoolExp>>>,
  _not?: Maybe<EnumHardwareFinishBoolExp>,
  _or?: Maybe<Array<Maybe<EnumHardwareFinishBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "enum.hardware_finish" */
export enum EnumHardwareFinishConstraint {
  /** unique or primary key constraint */
  HARDWARE_FINISH_PKEY = 'hardware_finish_pkey'
}

/** input type for inserting data into table "enum.hardware_finish" */
export type EnumHardwareFinishInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type EnumHardwareFinishMaxFields = {
   __typename?: 'enum_hardware_finish_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "enum.hardware_finish" */
export type EnumHardwareFinishMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type EnumHardwareFinishMinFields = {
   __typename?: 'enum_hardware_finish_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "enum.hardware_finish" */
export type EnumHardwareFinishMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** response of any mutation on the table "enum.hardware_finish" */
export type EnumHardwareFinishMutationResponse = {
   __typename?: 'enum_hardware_finish_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<EnumHardwareFinish>,
};

/** input type for inserting object relation for remote table "enum.hardware_finish" */
export type EnumHardwareFinishObjRelInsertInput = {
  data: EnumHardwareFinishInsertInput,
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>,
};

/** on conflict condition type for table "enum.hardware_finish" */
export type EnumHardwareFinishOnConflict = {
  constraint: EnumHardwareFinishConstraint,
  update_columns: Array<EnumHardwareFinishUpdateColumn>,
};

/** ordering options when selecting data from "enum.hardware_finish" */
export type EnumHardwareFinishOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** select columns of table "enum.hardware_finish" */
export enum EnumHardwareFinishSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** input type for updating data in table "enum.hardware_finish" */
export type EnumHardwareFinishSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** update columns of table "enum.hardware_finish" */
export enum EnumHardwareFinishUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** columns and relationships of "enum.icon_category" */
export type EnumIconCategory = {
   __typename?: 'enum_icon_category',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** aggregated selection of "enum.icon_category" */
export type EnumIconCategoryAggregate = {
   __typename?: 'enum_icon_category_aggregate',
  aggregate?: Maybe<EnumIconCategoryAggregateFields>,
  nodes: Array<EnumIconCategory>,
};

/** aggregate fields of "enum.icon_category" */
export type EnumIconCategoryAggregateFields = {
   __typename?: 'enum_icon_category_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumIconCategoryMaxFields>,
  min?: Maybe<EnumIconCategoryMinFields>,
};


/** aggregate fields of "enum.icon_category" */
export type EnumIconCategoryAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumIconCategorySelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "enum.icon_category" */
export type EnumIconCategoryAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumIconCategoryMaxOrderBy>,
  min?: Maybe<EnumIconCategoryMinOrderBy>,
};

/** input type for inserting array relation for remote table "enum.icon_category" */
export type EnumIconCategoryArrRelInsertInput = {
  data: Array<EnumIconCategoryInsertInput>,
  on_conflict?: Maybe<EnumIconCategoryOnConflict>,
};

/** Boolean expression to filter rows from the table "enum.icon_category". All fields are combined with a logical 'AND'. */
export type EnumIconCategoryBoolExp = {
  _and?: Maybe<Array<Maybe<EnumIconCategoryBoolExp>>>,
  _not?: Maybe<EnumIconCategoryBoolExp>,
  _or?: Maybe<Array<Maybe<EnumIconCategoryBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "enum.icon_category" */
export enum EnumIconCategoryConstraint {
  /** unique or primary key constraint */
  ICON_CATEGORY_ID_KEY = 'icon_category_id_key',
  /** unique or primary key constraint */
  ICON_CATEGORY_PKEY = 'icon_category_pkey'
}

export enum EnumIconCategoryEnum {
  HARDWAREFASTENER = 'HardwareFastener'
}

/** expression to compare columns of type enum_icon_category_enum. All fields are combined with logical 'AND'. */
export type EnumIconCategoryEnumComparisonExp = {
  _eq?: Maybe<EnumIconCategoryEnum>,
  _in?: Maybe<Array<EnumIconCategoryEnum>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<EnumIconCategoryEnum>,
  _nin?: Maybe<Array<EnumIconCategoryEnum>>,
};

/** input type for inserting data into table "enum.icon_category" */
export type EnumIconCategoryInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type EnumIconCategoryMaxFields = {
   __typename?: 'enum_icon_category_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "enum.icon_category" */
export type EnumIconCategoryMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type EnumIconCategoryMinFields = {
   __typename?: 'enum_icon_category_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "enum.icon_category" */
export type EnumIconCategoryMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** response of any mutation on the table "enum.icon_category" */
export type EnumIconCategoryMutationResponse = {
   __typename?: 'enum_icon_category_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<EnumIconCategory>,
};

/** input type for inserting object relation for remote table "enum.icon_category" */
export type EnumIconCategoryObjRelInsertInput = {
  data: EnumIconCategoryInsertInput,
  on_conflict?: Maybe<EnumIconCategoryOnConflict>,
};

/** on conflict condition type for table "enum.icon_category" */
export type EnumIconCategoryOnConflict = {
  constraint: EnumIconCategoryConstraint,
  update_columns: Array<EnumIconCategoryUpdateColumn>,
};

/** ordering options when selecting data from "enum.icon_category" */
export type EnumIconCategoryOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** select columns of table "enum.icon_category" */
export enum EnumIconCategorySelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** input type for updating data in table "enum.icon_category" */
export type EnumIconCategorySetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** update columns of table "enum.icon_category" */
export enum EnumIconCategoryUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** columns and relationships of "enum.unit" */
export type EnumUnit = {
   __typename?: 'enum_unit',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** aggregated selection of "enum.unit" */
export type EnumUnitAggregate = {
   __typename?: 'enum_unit_aggregate',
  aggregate?: Maybe<EnumUnitAggregateFields>,
  nodes: Array<EnumUnit>,
};

/** aggregate fields of "enum.unit" */
export type EnumUnitAggregateFields = {
   __typename?: 'enum_unit_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumUnitMaxFields>,
  min?: Maybe<EnumUnitMinFields>,
};


/** aggregate fields of "enum.unit" */
export type EnumUnitAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumUnitSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "enum.unit" */
export type EnumUnitAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumUnitMaxOrderBy>,
  min?: Maybe<EnumUnitMinOrderBy>,
};

/** input type for inserting array relation for remote table "enum.unit" */
export type EnumUnitArrRelInsertInput = {
  data: Array<EnumUnitInsertInput>,
  on_conflict?: Maybe<EnumUnitOnConflict>,
};

/** Boolean expression to filter rows from the table "enum.unit". All fields are combined with a logical 'AND'. */
export type EnumUnitBoolExp = {
  _and?: Maybe<Array<Maybe<EnumUnitBoolExp>>>,
  _not?: Maybe<EnumUnitBoolExp>,
  _or?: Maybe<Array<Maybe<EnumUnitBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "enum.unit" */
export enum EnumUnitConstraint {
  /** unique or primary key constraint */
  UNIT_PKEY = 'unit_pkey'
}

export enum EnumUnitEnum {
  METRIC = 'metric',
  /** United States Customary Measurement System */
  USC = 'usc'
}

/** expression to compare columns of type enum_unit_enum. All fields are combined with logical 'AND'. */
export type EnumUnitEnumComparisonExp = {
  _eq?: Maybe<EnumUnitEnum>,
  _in?: Maybe<Array<EnumUnitEnum>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<EnumUnitEnum>,
  _nin?: Maybe<Array<EnumUnitEnum>>,
};

/** input type for inserting data into table "enum.unit" */
export type EnumUnitInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type EnumUnitMaxFields = {
   __typename?: 'enum_unit_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "enum.unit" */
export type EnumUnitMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type EnumUnitMinFields = {
   __typename?: 'enum_unit_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "enum.unit" */
export type EnumUnitMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** response of any mutation on the table "enum.unit" */
export type EnumUnitMutationResponse = {
   __typename?: 'enum_unit_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<EnumUnit>,
};

/** input type for inserting object relation for remote table "enum.unit" */
export type EnumUnitObjRelInsertInput = {
  data: EnumUnitInsertInput,
  on_conflict?: Maybe<EnumUnitOnConflict>,
};

/** on conflict condition type for table "enum.unit" */
export type EnumUnitOnConflict = {
  constraint: EnumUnitConstraint,
  update_columns: Array<EnumUnitUpdateColumn>,
};

/** ordering options when selecting data from "enum.unit" */
export type EnumUnitOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

/** select columns of table "enum.unit" */
export enum EnumUnitSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

/** input type for updating data in table "enum.unit" */
export type EnumUnitSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

/** update columns of table "enum.unit" */
export enum EnumUnitUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id'
}

export type File = {
   __typename?: 'File',
  base64: Scalars['String'],
  name: Scalars['String'],
  path: Scalars['String'],
  type: Scalars['String'],
};

/** columns and relationships of "icons" */
export type Icons = {
   __typename?: 'icons',
  category: EnumIconCategoryEnum,
  created_at: Scalars['timestamptz'],
  data: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['uuid'],
  label?: Maybe<Scalars['String']>,
};

/** aggregated selection of "icons" */
export type IconsAggregate = {
   __typename?: 'icons_aggregate',
  aggregate?: Maybe<IconsAggregateFields>,
  nodes: Array<Icons>,
};

/** aggregate fields of "icons" */
export type IconsAggregateFields = {
   __typename?: 'icons_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<IconsMaxFields>,
  min?: Maybe<IconsMinFields>,
};


/** aggregate fields of "icons" */
export type IconsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconsSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "icons" */
export type IconsAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<IconsMaxOrderBy>,
  min?: Maybe<IconsMinOrderBy>,
};

/** input type for inserting array relation for remote table "icons" */
export type IconsArrRelInsertInput = {
  data: Array<IconsInsertInput>,
  on_conflict?: Maybe<IconsOnConflict>,
};

/** Boolean expression to filter rows from the table "icons". All fields are combined with a logical 'AND'. */
export type IconsBoolExp = {
  _and?: Maybe<Array<Maybe<IconsBoolExp>>>,
  _not?: Maybe<IconsBoolExp>,
  _or?: Maybe<Array<Maybe<IconsBoolExp>>>,
  category?: Maybe<EnumIconCategoryEnumComparisonExp>,
  created_at?: Maybe<TimestamptzComparisonExp>,
  data?: Maybe<StringComparisonExp>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<UuidComparisonExp>,
  label?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "icons" */
export enum IconsConstraint {
  /** unique or primary key constraint */
  ICONS_ID_KEY = 'icons_id_key',
  /** unique or primary key constraint */
  ICONS_PKEY = 'icons_pkey'
}

/** input type for inserting data into table "icons" */
export type IconsInsertInput = {
  category?: Maybe<EnumIconCategoryEnum>,
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  label?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type IconsMaxFields = {
   __typename?: 'icons_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "icons" */
export type IconsMaxOrderBy = {
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  label?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type IconsMinFields = {
   __typename?: 'icons_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "icons" */
export type IconsMinOrderBy = {
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  label?: Maybe<OrderBy>,
};

/** response of any mutation on the table "icons" */
export type IconsMutationResponse = {
   __typename?: 'icons_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Icons>,
};

/** input type for inserting object relation for remote table "icons" */
export type IconsObjRelInsertInput = {
  data: IconsInsertInput,
  on_conflict?: Maybe<IconsOnConflict>,
};

/** on conflict condition type for table "icons" */
export type IconsOnConflict = {
  constraint: IconsConstraint,
  update_columns: Array<IconsUpdateColumn>,
};

/** ordering options when selecting data from "icons" */
export type IconsOrderBy = {
  category?: Maybe<OrderBy>,
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  label?: Maybe<OrderBy>,
};

/** select columns of table "icons" */
export enum IconsSelectColumn {
  /** column name */
  CATEGORY = 'category',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DATA = 'data',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  LABEL = 'label'
}

/** input type for updating data in table "icons" */
export type IconsSetInput = {
  category?: Maybe<EnumIconCategoryEnum>,
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  label?: Maybe<Scalars['String']>,
};

/** update columns of table "icons" */
export enum IconsUpdateColumn {
  /** column name */
  CATEGORY = 'category',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DATA = 'data',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  LABEL = 'label'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** columns and relationships of "items" */
export type Items = {
   __typename?: 'items',
  class?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregated selection of "items" */
export type ItemsAggregate = {
   __typename?: 'items_aggregate',
  aggregate?: Maybe<ItemsAggregateFields>,
  nodes: Array<Items>,
};

/** aggregate fields of "items" */
export type ItemsAggregateFields = {
   __typename?: 'items_aggregate_fields',
  avg?: Maybe<ItemsAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemsMaxFields>,
  min?: Maybe<ItemsMinFields>,
  stddev?: Maybe<ItemsStddevFields>,
  stddev_pop?: Maybe<ItemsStddevPopFields>,
  stddev_samp?: Maybe<ItemsStddevSampFields>,
  sum?: Maybe<ItemsSumFields>,
  var_pop?: Maybe<ItemsVarPopFields>,
  var_samp?: Maybe<ItemsVarSampFields>,
  variance?: Maybe<ItemsVarianceFields>,
};


/** aggregate fields of "items" */
export type ItemsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemsSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "items" */
export type ItemsAggregateOrderBy = {
  avg?: Maybe<ItemsAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemsMaxOrderBy>,
  min?: Maybe<ItemsMinOrderBy>,
  stddev?: Maybe<ItemsStddevOrderBy>,
  stddev_pop?: Maybe<ItemsStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemsStddevSampOrderBy>,
  sum?: Maybe<ItemsSumOrderBy>,
  var_pop?: Maybe<ItemsVarPopOrderBy>,
  var_samp?: Maybe<ItemsVarSampOrderBy>,
  variance?: Maybe<ItemsVarianceOrderBy>,
};

/** aggregate avg on columns */
export type ItemsAvgFields = {
   __typename?: 'items_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "items" */
export type ItemsAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type ItemsBoolExp = {
  _and?: Maybe<Array<Maybe<ItemsBoolExp>>>,
  _not?: Maybe<ItemsBoolExp>,
  _or?: Maybe<Array<Maybe<ItemsBoolExp>>>,
  class?: Maybe<StringComparisonExp>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
};

/** columns and relationships of "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBolt = {
   __typename?: 'items_hardware_fastener_bolt',
  countersunk?: Maybe<Scalars['numeric']>,
  description?: Maybe<Scalars['String']>,
  drive_size: Scalars['String'],
  drive_type: Scalars['String'],
  head: Scalars['String'],
  head_diameter: Scalars['numeric'],
  head_height: Scalars['numeric'],
  id: Scalars['Int'],
  length_embedded: Scalars['numeric'],
  name?: Maybe<Scalars['String']>,
  point: Scalars['String'],
  product_url?: Maybe<Scalars['String']>,
  shaft_length: Scalars['numeric'],
  thread: Scalars['numeric'],
  thread_length: Scalars['numeric'],
  unit: EnumUnitEnum,
};

/** aggregated selection of "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltAggregate = {
   __typename?: 'items_hardware_fastener_bolt_aggregate',
  aggregate?: Maybe<ItemsHardwareFastenerBoltAggregateFields>,
  nodes: Array<ItemsHardwareFastenerBolt>,
};

/** aggregate fields of "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltAggregateFields = {
   __typename?: 'items_hardware_fastener_bolt_aggregate_fields',
  avg?: Maybe<ItemsHardwareFastenerBoltAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemsHardwareFastenerBoltMaxFields>,
  min?: Maybe<ItemsHardwareFastenerBoltMinFields>,
  stddev?: Maybe<ItemsHardwareFastenerBoltStddevFields>,
  stddev_pop?: Maybe<ItemsHardwareFastenerBoltStddevPopFields>,
  stddev_samp?: Maybe<ItemsHardwareFastenerBoltStddevSampFields>,
  sum?: Maybe<ItemsHardwareFastenerBoltSumFields>,
  var_pop?: Maybe<ItemsHardwareFastenerBoltVarPopFields>,
  var_samp?: Maybe<ItemsHardwareFastenerBoltVarSampFields>,
  variance?: Maybe<ItemsHardwareFastenerBoltVarianceFields>,
};


/** aggregate fields of "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemsHardwareFastenerBoltSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltAggregateOrderBy = {
  avg?: Maybe<ItemsHardwareFastenerBoltAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemsHardwareFastenerBoltMaxOrderBy>,
  min?: Maybe<ItemsHardwareFastenerBoltMinOrderBy>,
  stddev?: Maybe<ItemsHardwareFastenerBoltStddevOrderBy>,
  stddev_pop?: Maybe<ItemsHardwareFastenerBoltStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemsHardwareFastenerBoltStddevSampOrderBy>,
  sum?: Maybe<ItemsHardwareFastenerBoltSumOrderBy>,
  var_pop?: Maybe<ItemsHardwareFastenerBoltVarPopOrderBy>,
  var_samp?: Maybe<ItemsHardwareFastenerBoltVarSampOrderBy>,
  variance?: Maybe<ItemsHardwareFastenerBoltVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltArrRelInsertInput = {
  data: Array<ItemsHardwareFastenerBoltInsertInput>,
};

/** aggregate avg on columns */
export type ItemsHardwareFastenerBoltAvgFields = {
   __typename?: 'items_hardware_fastener_bolt_avg_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltAvgOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** 
 * Boolean expression to filter rows from the table "items_hardware_fastener_bolt".
 * All fields are combined with a logical 'AND'.
 **/
export type ItemsHardwareFastenerBoltBoolExp = {
  _and?: Maybe<Array<Maybe<ItemsHardwareFastenerBoltBoolExp>>>,
  _not?: Maybe<ItemsHardwareFastenerBoltBoolExp>,
  _or?: Maybe<Array<Maybe<ItemsHardwareFastenerBoltBoolExp>>>,
  countersunk?: Maybe<NumericComparisonExp>,
  description?: Maybe<StringComparisonExp>,
  drive_size?: Maybe<StringComparisonExp>,
  drive_type?: Maybe<StringComparisonExp>,
  head?: Maybe<StringComparisonExp>,
  head_diameter?: Maybe<NumericComparisonExp>,
  head_height?: Maybe<NumericComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  length_embedded?: Maybe<NumericComparisonExp>,
  name?: Maybe<StringComparisonExp>,
  point?: Maybe<StringComparisonExp>,
  product_url?: Maybe<StringComparisonExp>,
  shaft_length?: Maybe<NumericComparisonExp>,
  thread?: Maybe<NumericComparisonExp>,
  thread_length?: Maybe<NumericComparisonExp>,
  unit?: Maybe<EnumUnitEnumComparisonExp>,
};

/** input type for incrementing integer columne in table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltIncInput = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltInsertInput = {
  countersunk?: Maybe<Scalars['numeric']>,
  description?: Maybe<Scalars['String']>,
  drive_size?: Maybe<Scalars['String']>,
  drive_type?: Maybe<Scalars['String']>,
  head?: Maybe<Scalars['String']>,
  head_diameter?: Maybe<Scalars['numeric']>,
  head_height?: Maybe<Scalars['numeric']>,
  id?: Maybe<Scalars['Int']>,
  length_embedded?: Maybe<Scalars['numeric']>,
  name?: Maybe<Scalars['String']>,
  point?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
  shaft_length?: Maybe<Scalars['numeric']>,
  thread?: Maybe<Scalars['numeric']>,
  thread_length?: Maybe<Scalars['numeric']>,
  unit?: Maybe<EnumUnitEnum>,
};

/** aggregate max on columns */
export type ItemsHardwareFastenerBoltMaxFields = {
   __typename?: 'items_hardware_fastener_bolt_max_fields',
  countersunk?: Maybe<Scalars['numeric']>,
  description?: Maybe<Scalars['String']>,
  drive_size?: Maybe<Scalars['String']>,
  drive_type?: Maybe<Scalars['String']>,
  head?: Maybe<Scalars['String']>,
  head_diameter?: Maybe<Scalars['numeric']>,
  head_height?: Maybe<Scalars['numeric']>,
  id?: Maybe<Scalars['Int']>,
  length_embedded?: Maybe<Scalars['numeric']>,
  name?: Maybe<Scalars['String']>,
  point?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
  shaft_length?: Maybe<Scalars['numeric']>,
  thread?: Maybe<Scalars['numeric']>,
  thread_length?: Maybe<Scalars['numeric']>,
};

/** order by max() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltMaxOrderBy = {
  countersunk?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  drive_size?: Maybe<OrderBy>,
  drive_type?: Maybe<OrderBy>,
  head?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  point?: Maybe<OrderBy>,
  product_url?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type ItemsHardwareFastenerBoltMinFields = {
   __typename?: 'items_hardware_fastener_bolt_min_fields',
  countersunk?: Maybe<Scalars['numeric']>,
  description?: Maybe<Scalars['String']>,
  drive_size?: Maybe<Scalars['String']>,
  drive_type?: Maybe<Scalars['String']>,
  head?: Maybe<Scalars['String']>,
  head_diameter?: Maybe<Scalars['numeric']>,
  head_height?: Maybe<Scalars['numeric']>,
  id?: Maybe<Scalars['Int']>,
  length_embedded?: Maybe<Scalars['numeric']>,
  name?: Maybe<Scalars['String']>,
  point?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
  shaft_length?: Maybe<Scalars['numeric']>,
  thread?: Maybe<Scalars['numeric']>,
  thread_length?: Maybe<Scalars['numeric']>,
};

/** order by min() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltMinOrderBy = {
  countersunk?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  drive_size?: Maybe<OrderBy>,
  drive_type?: Maybe<OrderBy>,
  head?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  point?: Maybe<OrderBy>,
  product_url?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** response of any mutation on the table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltMutationResponse = {
   __typename?: 'items_hardware_fastener_bolt_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<ItemsHardwareFastenerBolt>,
};

/** input type for inserting object relation for remote table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltObjRelInsertInput = {
  data: ItemsHardwareFastenerBoltInsertInput,
};

/** ordering options when selecting data from "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltOrderBy = {
  countersunk?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  drive_size?: Maybe<OrderBy>,
  drive_type?: Maybe<OrderBy>,
  head?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  point?: Maybe<OrderBy>,
  product_url?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
  unit?: Maybe<OrderBy>,
};

/** select columns of table "items_hardware_fastener_bolt" */
export enum ItemsHardwareFastenerBoltSelectColumn {
  /** column name */
  COUNTERSUNK = 'countersunk',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DRIVE_SIZE = 'drive_size',
  /** column name */
  DRIVE_TYPE = 'drive_type',
  /** column name */
  HEAD = 'head',
  /** column name */
  HEAD_DIAMETER = 'head_diameter',
  /** column name */
  HEAD_HEIGHT = 'head_height',
  /** column name */
  ID = 'id',
  /** column name */
  LENGTH_EMBEDDED = 'length_embedded',
  /** column name */
  NAME = 'name',
  /** column name */
  POINT = 'point',
  /** column name */
  PRODUCT_URL = 'product_url',
  /** column name */
  SHAFT_LENGTH = 'shaft_length',
  /** column name */
  THREAD = 'thread',
  /** column name */
  THREAD_LENGTH = 'thread_length',
  /** column name */
  UNIT = 'unit'
}

/** input type for updating data in table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltSetInput = {
  countersunk?: Maybe<Scalars['numeric']>,
  description?: Maybe<Scalars['String']>,
  drive_size?: Maybe<Scalars['String']>,
  drive_type?: Maybe<Scalars['String']>,
  head?: Maybe<Scalars['String']>,
  head_diameter?: Maybe<Scalars['numeric']>,
  head_height?: Maybe<Scalars['numeric']>,
  id?: Maybe<Scalars['Int']>,
  length_embedded?: Maybe<Scalars['numeric']>,
  name?: Maybe<Scalars['String']>,
  point?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
  shaft_length?: Maybe<Scalars['numeric']>,
  thread?: Maybe<Scalars['numeric']>,
  thread_length?: Maybe<Scalars['numeric']>,
  unit?: Maybe<EnumUnitEnum>,
};

/** aggregate stddev on columns */
export type ItemsHardwareFastenerBoltStddevFields = {
   __typename?: 'items_hardware_fastener_bolt_stddev_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltStddevOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type ItemsHardwareFastenerBoltStddevPopFields = {
   __typename?: 'items_hardware_fastener_bolt_stddev_pop_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltStddevPopOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type ItemsHardwareFastenerBoltStddevSampFields = {
   __typename?: 'items_hardware_fastener_bolt_stddev_samp_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltStddevSampOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type ItemsHardwareFastenerBoltSumFields = {
   __typename?: 'items_hardware_fastener_bolt_sum_fields',
  countersunk?: Maybe<Scalars['numeric']>,
  head_diameter?: Maybe<Scalars['numeric']>,
  head_height?: Maybe<Scalars['numeric']>,
  id?: Maybe<Scalars['Int']>,
  length_embedded?: Maybe<Scalars['numeric']>,
  shaft_length?: Maybe<Scalars['numeric']>,
  thread?: Maybe<Scalars['numeric']>,
  thread_length?: Maybe<Scalars['numeric']>,
};

/** order by sum() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltSumOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** aggregate var_pop on columns */
export type ItemsHardwareFastenerBoltVarPopFields = {
   __typename?: 'items_hardware_fastener_bolt_var_pop_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltVarPopOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type ItemsHardwareFastenerBoltVarSampFields = {
   __typename?: 'items_hardware_fastener_bolt_var_samp_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltVarSampOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type ItemsHardwareFastenerBoltVarianceFields = {
   __typename?: 'items_hardware_fastener_bolt_variance_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "items_hardware_fastener_bolt" */
export type ItemsHardwareFastenerBoltVarianceOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** columns and relationships of "items_hardware_nut" */
export type ItemsHardwareNut = {
   __typename?: 'items_hardware_nut',
  description: Scalars['String'],
  id: Scalars['Int'],
  name: Scalars['String'],
};

/** aggregated selection of "items_hardware_nut" */
export type ItemsHardwareNutAggregate = {
   __typename?: 'items_hardware_nut_aggregate',
  aggregate?: Maybe<ItemsHardwareNutAggregateFields>,
  nodes: Array<ItemsHardwareNut>,
};

/** aggregate fields of "items_hardware_nut" */
export type ItemsHardwareNutAggregateFields = {
   __typename?: 'items_hardware_nut_aggregate_fields',
  avg?: Maybe<ItemsHardwareNutAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemsHardwareNutMaxFields>,
  min?: Maybe<ItemsHardwareNutMinFields>,
  stddev?: Maybe<ItemsHardwareNutStddevFields>,
  stddev_pop?: Maybe<ItemsHardwareNutStddevPopFields>,
  stddev_samp?: Maybe<ItemsHardwareNutStddevSampFields>,
  sum?: Maybe<ItemsHardwareNutSumFields>,
  var_pop?: Maybe<ItemsHardwareNutVarPopFields>,
  var_samp?: Maybe<ItemsHardwareNutVarSampFields>,
  variance?: Maybe<ItemsHardwareNutVarianceFields>,
};


/** aggregate fields of "items_hardware_nut" */
export type ItemsHardwareNutAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemsHardwareNutSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "items_hardware_nut" */
export type ItemsHardwareNutAggregateOrderBy = {
  avg?: Maybe<ItemsHardwareNutAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemsHardwareNutMaxOrderBy>,
  min?: Maybe<ItemsHardwareNutMinOrderBy>,
  stddev?: Maybe<ItemsHardwareNutStddevOrderBy>,
  stddev_pop?: Maybe<ItemsHardwareNutStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemsHardwareNutStddevSampOrderBy>,
  sum?: Maybe<ItemsHardwareNutSumOrderBy>,
  var_pop?: Maybe<ItemsHardwareNutVarPopOrderBy>,
  var_samp?: Maybe<ItemsHardwareNutVarSampOrderBy>,
  variance?: Maybe<ItemsHardwareNutVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "items_hardware_nut" */
export type ItemsHardwareNutArrRelInsertInput = {
  data: Array<ItemsHardwareNutInsertInput>,
  on_conflict?: Maybe<ItemsHardwareNutOnConflict>,
};

/** aggregate avg on columns */
export type ItemsHardwareNutAvgFields = {
   __typename?: 'items_hardware_nut_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "items_hardware_nut". All fields are combined with a logical 'AND'. */
export type ItemsHardwareNutBoolExp = {
  _and?: Maybe<Array<Maybe<ItemsHardwareNutBoolExp>>>,
  _not?: Maybe<ItemsHardwareNutBoolExp>,
  _or?: Maybe<Array<Maybe<ItemsHardwareNutBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "items_hardware_nut" */
export enum ItemsHardwareNutConstraint {
  /** unique or primary key constraint */
  ITEMS_HARDWARE_NUT_PKEY = 'items_hardware_nut_pkey'
}

/** input type for incrementing integer columne in table "items_hardware_nut" */
export type ItemsHardwareNutIncInput = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "items_hardware_nut" */
export type ItemsHardwareNutInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type ItemsHardwareNutMaxFields = {
   __typename?: 'items_hardware_nut_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type ItemsHardwareNutMinFields = {
   __typename?: 'items_hardware_nut_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** response of any mutation on the table "items_hardware_nut" */
export type ItemsHardwareNutMutationResponse = {
   __typename?: 'items_hardware_nut_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<ItemsHardwareNut>,
};

/** input type for inserting object relation for remote table "items_hardware_nut" */
export type ItemsHardwareNutObjRelInsertInput = {
  data: ItemsHardwareNutInsertInput,
  on_conflict?: Maybe<ItemsHardwareNutOnConflict>,
};

/** on conflict condition type for table "items_hardware_nut" */
export type ItemsHardwareNutOnConflict = {
  constraint: ItemsHardwareNutConstraint,
  update_columns: Array<ItemsHardwareNutUpdateColumn>,
};

/** ordering options when selecting data from "items_hardware_nut" */
export type ItemsHardwareNutOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** select columns of table "items_hardware_nut" */
export enum ItemsHardwareNutSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** input type for updating data in table "items_hardware_nut" */
export type ItemsHardwareNutSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type ItemsHardwareNutStddevFields = {
   __typename?: 'items_hardware_nut_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type ItemsHardwareNutStddevPopFields = {
   __typename?: 'items_hardware_nut_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type ItemsHardwareNutStddevSampFields = {
   __typename?: 'items_hardware_nut_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type ItemsHardwareNutSumFields = {
   __typename?: 'items_hardware_nut_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutSumOrderBy = {
  id?: Maybe<OrderBy>,
};

/** update columns of table "items_hardware_nut" */
export enum ItemsHardwareNutUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** aggregate var_pop on columns */
export type ItemsHardwareNutVarPopFields = {
   __typename?: 'items_hardware_nut_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type ItemsHardwareNutVarSampFields = {
   __typename?: 'items_hardware_nut_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type ItemsHardwareNutVarianceFields = {
   __typename?: 'items_hardware_nut_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "items_hardware_nut" */
export type ItemsHardwareNutVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate max on columns */
export type ItemsMaxFields = {
   __typename?: 'items_max_fields',
  class?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "items" */
export type ItemsMaxOrderBy = {
  class?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type ItemsMinFields = {
   __typename?: 'items_min_fields',
  class?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "items" */
export type ItemsMinOrderBy = {
  class?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** ordering options when selecting data from "items" */
export type ItemsOrderBy = {
  class?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** select columns of table "items" */
export enum ItemsSelectColumn {
  /** column name */
  CLASS = 'class',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** aggregate stddev on columns */
export type ItemsStddevFields = {
   __typename?: 'items_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "items" */
export type ItemsStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type ItemsStddevPopFields = {
   __typename?: 'items_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "items" */
export type ItemsStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type ItemsStddevSampFields = {
   __typename?: 'items_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "items" */
export type ItemsStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type ItemsSumFields = {
   __typename?: 'items_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "items" */
export type ItemsSumOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate var_pop on columns */
export type ItemsVarPopFields = {
   __typename?: 'items_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "items" */
export type ItemsVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type ItemsVarSampFields = {
   __typename?: 'items_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "items" */
export type ItemsVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type ItemsVarianceFields = {
   __typename?: 'items_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "items" */
export type ItemsVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

export type LabelMonochromeBuffer = {
   __typename?: 'LabelMonochromeBuffer',
  imageBuffer?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>>,
};


/** expression to compare columns of type money. All fields are combined with logical 'AND'. */
export type MoneyComparisonExp = {
  _eq?: Maybe<Scalars['money']>,
  _gt?: Maybe<Scalars['money']>,
  _gte?: Maybe<Scalars['money']>,
  _in?: Maybe<Array<Scalars['money']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['money']>,
  _lte?: Maybe<Scalars['money']>,
  _neq?: Maybe<Scalars['money']>,
  _nin?: Maybe<Array<Scalars['money']>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  putLabelMonochromeBuffer?: Maybe<LabelMonochromeBuffer>,
  uploadFiles: Array<Maybe<File>>,
};


export type MutationPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};


export type MutationUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>
};

/** mutation root */
export type MutationRoot = {
   __typename?: 'mutation_root',
  /** delete data from the table: "entity" */
  delete_entity?: Maybe<EntityMutationResponse>,
  /** delete data from the table: "enum.hardware_fastener_material" */
  delete_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>,
  /** delete data from the table: "enum.hardware_fastener_screw_point" */
  delete_enum_hardware_fastener_screw_point?: Maybe<EnumHardwareFastenerScrewPointMutationResponse>,
  /** delete data from the table: "enum.hardware_finish" */
  delete_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>,
  /** delete data from the table: "enum.icon_category" */
  delete_enum_icon_category?: Maybe<EnumIconCategoryMutationResponse>,
  /** delete data from the table: "enum.unit" */
  delete_enum_unit?: Maybe<EnumUnitMutationResponse>,
  /** delete data from the table: "icons" */
  delete_icons?: Maybe<IconsMutationResponse>,
  /** delete data from the table: "items_hardware_fastener_bolt" */
  delete_items_hardware_fastener_bolt?: Maybe<ItemsHardwareFastenerBoltMutationResponse>,
  /** delete data from the table: "items_hardware_nut" */
  delete_items_hardware_nut?: Maybe<ItemsHardwareNutMutationResponse>,
  /** delete data from the table: "purchases" */
  delete_purchases?: Maybe<PurchasesMutationResponse>,
  /** insert data into the table: "entity" */
  insert_entity?: Maybe<EntityMutationResponse>,
  /** insert data into the table: "enum.hardware_fastener_material" */
  insert_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>,
  /** insert data into the table: "enum.hardware_fastener_screw_point" */
  insert_enum_hardware_fastener_screw_point?: Maybe<EnumHardwareFastenerScrewPointMutationResponse>,
  /** insert data into the table: "enum.hardware_finish" */
  insert_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>,
  /** insert data into the table: "enum.icon_category" */
  insert_enum_icon_category?: Maybe<EnumIconCategoryMutationResponse>,
  /** insert data into the table: "enum.unit" */
  insert_enum_unit?: Maybe<EnumUnitMutationResponse>,
  /** insert data into the table: "icons" */
  insert_icons?: Maybe<IconsMutationResponse>,
  /** insert data into the table: "items_hardware_fastener_bolt" */
  insert_items_hardware_fastener_bolt?: Maybe<ItemsHardwareFastenerBoltMutationResponse>,
  /** insert data into the table: "items_hardware_nut" */
  insert_items_hardware_nut?: Maybe<ItemsHardwareNutMutationResponse>,
  /** insert data into the table: "purchases" */
  insert_purchases?: Maybe<PurchasesMutationResponse>,
  putLabelMonochromeBuffer?: Maybe<LabelMonochromeBuffer>,
  /** update data of the table: "entity" */
  update_entity?: Maybe<EntityMutationResponse>,
  /** update data of the table: "enum.hardware_fastener_material" */
  update_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>,
  /** update data of the table: "enum.hardware_fastener_screw_point" */
  update_enum_hardware_fastener_screw_point?: Maybe<EnumHardwareFastenerScrewPointMutationResponse>,
  /** update data of the table: "enum.hardware_finish" */
  update_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>,
  /** update data of the table: "enum.icon_category" */
  update_enum_icon_category?: Maybe<EnumIconCategoryMutationResponse>,
  /** update data of the table: "enum.unit" */
  update_enum_unit?: Maybe<EnumUnitMutationResponse>,
  /** update data of the table: "icons" */
  update_icons?: Maybe<IconsMutationResponse>,
  /** update data of the table: "items_hardware_fastener_bolt" */
  update_items_hardware_fastener_bolt?: Maybe<ItemsHardwareFastenerBoltMutationResponse>,
  /** update data of the table: "items_hardware_nut" */
  update_items_hardware_nut?: Maybe<ItemsHardwareNutMutationResponse>,
  /** update data of the table: "purchases" */
  update_purchases?: Maybe<PurchasesMutationResponse>,
  uploadFiles: Array<Maybe<File>>,
};


/** mutation root */
export type MutationRootDeleteEntityArgs = {
  where: EntityBoolExp
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerMaterialArgs = {
  where: EnumHardwareFastenerMaterialBoolExp
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFastenerScrewPointArgs = {
  where: EnumHardwareFastenerScrewPointBoolExp
};


/** mutation root */
export type MutationRootDeleteEnumHardwareFinishArgs = {
  where: EnumHardwareFinishBoolExp
};


/** mutation root */
export type MutationRootDeleteEnumIconCategoryArgs = {
  where: EnumIconCategoryBoolExp
};


/** mutation root */
export type MutationRootDeleteEnumUnitArgs = {
  where: EnumUnitBoolExp
};


/** mutation root */
export type MutationRootDeleteIconsArgs = {
  where: IconsBoolExp
};


/** mutation root */
export type MutationRootDeleteItemsHardwareFastenerBoltArgs = {
  where: ItemsHardwareFastenerBoltBoolExp
};


/** mutation root */
export type MutationRootDeleteItemsHardwareNutArgs = {
  where: ItemsHardwareNutBoolExp
};


/** mutation root */
export type MutationRootDeletePurchasesArgs = {
  where: PurchasesBoolExp
};


/** mutation root */
export type MutationRootInsertEntityArgs = {
  objects: Array<EntityInsertInput>,
  on_conflict?: Maybe<EntityOnConflict>
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerMaterialArgs = {
  objects: Array<EnumHardwareFastenerMaterialInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>
};


/** mutation root */
export type MutationRootInsertEnumHardwareFastenerScrewPointArgs = {
  objects: Array<EnumHardwareFastenerScrewPointInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerScrewPointOnConflict>
};


/** mutation root */
export type MutationRootInsertEnumHardwareFinishArgs = {
  objects: Array<EnumHardwareFinishInsertInput>,
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>
};


/** mutation root */
export type MutationRootInsertEnumIconCategoryArgs = {
  objects: Array<EnumIconCategoryInsertInput>,
  on_conflict?: Maybe<EnumIconCategoryOnConflict>
};


/** mutation root */
export type MutationRootInsertEnumUnitArgs = {
  objects: Array<EnumUnitInsertInput>,
  on_conflict?: Maybe<EnumUnitOnConflict>
};


/** mutation root */
export type MutationRootInsertIconsArgs = {
  objects: Array<IconsInsertInput>,
  on_conflict?: Maybe<IconsOnConflict>
};


/** mutation root */
export type MutationRootInsertItemsHardwareFastenerBoltArgs = {
  objects: Array<ItemsHardwareFastenerBoltInsertInput>
};


/** mutation root */
export type MutationRootInsertItemsHardwareNutArgs = {
  objects: Array<ItemsHardwareNutInsertInput>,
  on_conflict?: Maybe<ItemsHardwareNutOnConflict>
};


/** mutation root */
export type MutationRootInsertPurchasesArgs = {
  objects: Array<PurchasesInsertInput>,
  on_conflict?: Maybe<PurchasesOnConflict>
};


/** mutation root */
export type MutationRootPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};


/** mutation root */
export type MutationRootUpdateEntityArgs = {
  _inc?: Maybe<EntityIncInput>,
  _set?: Maybe<EntitySetInput>,
  where: EntityBoolExp
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerMaterialArgs = {
  _set?: Maybe<EnumHardwareFastenerMaterialSetInput>,
  where: EnumHardwareFastenerMaterialBoolExp
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFastenerScrewPointArgs = {
  _set?: Maybe<EnumHardwareFastenerScrewPointSetInput>,
  where: EnumHardwareFastenerScrewPointBoolExp
};


/** mutation root */
export type MutationRootUpdateEnumHardwareFinishArgs = {
  _set?: Maybe<EnumHardwareFinishSetInput>,
  where: EnumHardwareFinishBoolExp
};


/** mutation root */
export type MutationRootUpdateEnumIconCategoryArgs = {
  _set?: Maybe<EnumIconCategorySetInput>,
  where: EnumIconCategoryBoolExp
};


/** mutation root */
export type MutationRootUpdateEnumUnitArgs = {
  _set?: Maybe<EnumUnitSetInput>,
  where: EnumUnitBoolExp
};


/** mutation root */
export type MutationRootUpdateIconsArgs = {
  _set?: Maybe<IconsSetInput>,
  where: IconsBoolExp
};


/** mutation root */
export type MutationRootUpdateItemsHardwareFastenerBoltArgs = {
  _inc?: Maybe<ItemsHardwareFastenerBoltIncInput>,
  _set?: Maybe<ItemsHardwareFastenerBoltSetInput>,
  where: ItemsHardwareFastenerBoltBoolExp
};


/** mutation root */
export type MutationRootUpdateItemsHardwareNutArgs = {
  _inc?: Maybe<ItemsHardwareNutIncInput>,
  _set?: Maybe<ItemsHardwareNutSetInput>,
  where: ItemsHardwareNutBoolExp
};


/** mutation root */
export type MutationRootUpdatePurchasesArgs = {
  _inc?: Maybe<PurchasesIncInput>,
  _set?: Maybe<PurchasesSetInput>,
  where: PurchasesBoolExp
};


/** mutation root */
export type MutationRootUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: Maybe<Scalars['numeric']>,
  _gt?: Maybe<Scalars['numeric']>,
  _gte?: Maybe<Scalars['numeric']>,
  _in?: Maybe<Array<Scalars['numeric']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['numeric']>,
  _lte?: Maybe<Scalars['numeric']>,
  _neq?: Maybe<Scalars['numeric']>,
  _nin?: Maybe<Array<Scalars['numeric']>>,
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  ASC = 'asc',
  /** in the ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in the descending order, nulls first */
  DESC = 'desc',
  /** in the descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

export type PrinterStatus = {
   __typename?: 'PrinterStatus',
  labelType: Scalars['String'],
  uptime?: Maybe<Scalars['Int']>,
};

/** columns and relationships of "purchases" */
export type Purchases = {
   __typename?: 'purchases',
  /** An object relationship */
  entity: Entity,
  /** An object relationship */
  entityByVendorId?: Maybe<Entity>,
  item_id: Scalars['Int'],
  manufacturer_id: Scalars['Int'],
  manufacturer_part_no: Scalars['String'],
  order_date?: Maybe<Scalars['date']>,
  order_no: Scalars['String'],
  order_url: Scalars['String'],
  price: Scalars['money'],
  serial_no: Scalars['String'],
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_part_no: Scalars['String'],
};

/** aggregated selection of "purchases" */
export type PurchasesAggregate = {
   __typename?: 'purchases_aggregate',
  aggregate?: Maybe<PurchasesAggregateFields>,
  nodes: Array<Purchases>,
};

/** aggregate fields of "purchases" */
export type PurchasesAggregateFields = {
   __typename?: 'purchases_aggregate_fields',
  avg?: Maybe<PurchasesAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<PurchasesMaxFields>,
  min?: Maybe<PurchasesMinFields>,
  stddev?: Maybe<PurchasesStddevFields>,
  stddev_pop?: Maybe<PurchasesStddevPopFields>,
  stddev_samp?: Maybe<PurchasesStddevSampFields>,
  sum?: Maybe<PurchasesSumFields>,
  var_pop?: Maybe<PurchasesVarPopFields>,
  var_samp?: Maybe<PurchasesVarSampFields>,
  variance?: Maybe<PurchasesVarianceFields>,
};


/** aggregate fields of "purchases" */
export type PurchasesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PurchasesSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "purchases" */
export type PurchasesAggregateOrderBy = {
  avg?: Maybe<PurchasesAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<PurchasesMaxOrderBy>,
  min?: Maybe<PurchasesMinOrderBy>,
  stddev?: Maybe<PurchasesStddevOrderBy>,
  stddev_pop?: Maybe<PurchasesStddevPopOrderBy>,
  stddev_samp?: Maybe<PurchasesStddevSampOrderBy>,
  sum?: Maybe<PurchasesSumOrderBy>,
  var_pop?: Maybe<PurchasesVarPopOrderBy>,
  var_samp?: Maybe<PurchasesVarSampOrderBy>,
  variance?: Maybe<PurchasesVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "purchases" */
export type PurchasesArrRelInsertInput = {
  data: Array<PurchasesInsertInput>,
  on_conflict?: Maybe<PurchasesOnConflict>,
};

/** aggregate avg on columns */
export type PurchasesAvgFields = {
   __typename?: 'purchases_avg_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "purchases" */
export type PurchasesAvgOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "purchases". All fields are combined with a logical 'AND'. */
export type PurchasesBoolExp = {
  _and?: Maybe<Array<Maybe<PurchasesBoolExp>>>,
  _not?: Maybe<PurchasesBoolExp>,
  _or?: Maybe<Array<Maybe<PurchasesBoolExp>>>,
  entity?: Maybe<EntityBoolExp>,
  entityByVendorId?: Maybe<EntityBoolExp>,
  item_id?: Maybe<IntComparisonExp>,
  manufacturer_id?: Maybe<IntComparisonExp>,
  manufacturer_part_no?: Maybe<StringComparisonExp>,
  order_date?: Maybe<DateComparisonExp>,
  order_no?: Maybe<StringComparisonExp>,
  order_url?: Maybe<StringComparisonExp>,
  price?: Maybe<MoneyComparisonExp>,
  serial_no?: Maybe<StringComparisonExp>,
  vendor_id?: Maybe<IntComparisonExp>,
  vendor_part_no?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "purchases" */
export enum PurchasesConstraint {
  /** unique or primary key constraint */
  PURCHASES_PKEY = 'purchases_pkey'
}

/** input type for incrementing integer columne in table "purchases" */
export type PurchasesIncInput = {
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "purchases" */
export type PurchasesInsertInput = {
  entity?: Maybe<EntityObjRelInsertInput>,
  entityByVendorId?: Maybe<EntityObjRelInsertInput>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_part_no?: Maybe<Scalars['String']>,
  order_date?: Maybe<Scalars['date']>,
  order_no?: Maybe<Scalars['String']>,
  order_url?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['money']>,
  serial_no?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_part_no?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type PurchasesMaxFields = {
   __typename?: 'purchases_max_fields',
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_part_no?: Maybe<Scalars['String']>,
  order_date?: Maybe<Scalars['date']>,
  order_no?: Maybe<Scalars['String']>,
  order_url?: Maybe<Scalars['String']>,
  serial_no?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_part_no?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "purchases" */
export type PurchasesMaxOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  manufacturer_part_no?: Maybe<OrderBy>,
  order_date?: Maybe<OrderBy>,
  order_no?: Maybe<OrderBy>,
  order_url?: Maybe<OrderBy>,
  serial_no?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_part_no?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type PurchasesMinFields = {
   __typename?: 'purchases_min_fields',
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_part_no?: Maybe<Scalars['String']>,
  order_date?: Maybe<Scalars['date']>,
  order_no?: Maybe<Scalars['String']>,
  order_url?: Maybe<Scalars['String']>,
  serial_no?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_part_no?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "purchases" */
export type PurchasesMinOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  manufacturer_part_no?: Maybe<OrderBy>,
  order_date?: Maybe<OrderBy>,
  order_no?: Maybe<OrderBy>,
  order_url?: Maybe<OrderBy>,
  serial_no?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_part_no?: Maybe<OrderBy>,
};

/** response of any mutation on the table "purchases" */
export type PurchasesMutationResponse = {
   __typename?: 'purchases_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Purchases>,
};

/** input type for inserting object relation for remote table "purchases" */
export type PurchasesObjRelInsertInput = {
  data: PurchasesInsertInput,
  on_conflict?: Maybe<PurchasesOnConflict>,
};

/** on conflict condition type for table "purchases" */
export type PurchasesOnConflict = {
  constraint: PurchasesConstraint,
  update_columns: Array<PurchasesUpdateColumn>,
};

/** ordering options when selecting data from "purchases" */
export type PurchasesOrderBy = {
  entity?: Maybe<EntityOrderBy>,
  entityByVendorId?: Maybe<EntityOrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  manufacturer_part_no?: Maybe<OrderBy>,
  order_date?: Maybe<OrderBy>,
  order_no?: Maybe<OrderBy>,
  order_url?: Maybe<OrderBy>,
  price?: Maybe<OrderBy>,
  serial_no?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_part_no?: Maybe<OrderBy>,
};

/** select columns of table "purchases" */
export enum PurchasesSelectColumn {
  /** column name */
  ITEM_ID = 'item_id',
  /** column name */
  MANUFACTURER_ID = 'manufacturer_id',
  /** column name */
  MANUFACTURER_PART_NO = 'manufacturer_part_no',
  /** column name */
  ORDER_DATE = 'order_date',
  /** column name */
  ORDER_NO = 'order_no',
  /** column name */
  ORDER_URL = 'order_url',
  /** column name */
  PRICE = 'price',
  /** column name */
  SERIAL_NO = 'serial_no',
  /** column name */
  VENDOR_ID = 'vendor_id',
  /** column name */
  VENDOR_PART_NO = 'vendor_part_no'
}

/** input type for updating data in table "purchases" */
export type PurchasesSetInput = {
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_part_no?: Maybe<Scalars['String']>,
  order_date?: Maybe<Scalars['date']>,
  order_no?: Maybe<Scalars['String']>,
  order_url?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['money']>,
  serial_no?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_part_no?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type PurchasesStddevFields = {
   __typename?: 'purchases_stddev_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "purchases" */
export type PurchasesStddevOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type PurchasesStddevPopFields = {
   __typename?: 'purchases_stddev_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "purchases" */
export type PurchasesStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type PurchasesStddevSampFields = {
   __typename?: 'purchases_stddev_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "purchases" */
export type PurchasesStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type PurchasesSumFields = {
   __typename?: 'purchases_sum_fields',
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "purchases" */
export type PurchasesSumOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** update columns of table "purchases" */
export enum PurchasesUpdateColumn {
  /** column name */
  ITEM_ID = 'item_id',
  /** column name */
  MANUFACTURER_ID = 'manufacturer_id',
  /** column name */
  MANUFACTURER_PART_NO = 'manufacturer_part_no',
  /** column name */
  ORDER_DATE = 'order_date',
  /** column name */
  ORDER_NO = 'order_no',
  /** column name */
  ORDER_URL = 'order_url',
  /** column name */
  PRICE = 'price',
  /** column name */
  SERIAL_NO = 'serial_no',
  /** column name */
  VENDOR_ID = 'vendor_id',
  /** column name */
  VENDOR_PART_NO = 'vendor_part_no'
}

/** aggregate var_pop on columns */
export type PurchasesVarPopFields = {
   __typename?: 'purchases_var_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "purchases" */
export type PurchasesVarPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type PurchasesVarSampFields = {
   __typename?: 'purchases_var_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "purchases" */
export type PurchasesVarSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type PurchasesVarianceFields = {
   __typename?: 'purchases_variance_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "purchases" */
export type PurchasesVarianceOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type Query = {
   __typename?: 'Query',
  PrinterStatus?: Maybe<PrinterStatus>,
  files?: Maybe<Array<Maybe<File>>>,
};

/** query root */
export type QueryRoot = {
   __typename?: 'query_root',
  PrinterStatus?: Maybe<PrinterStatus>,
  /** fetch data from the table: "entity" */
  entity: Array<Entity>,
  /** fetch aggregated fields from the table: "entity" */
  entity_aggregate: EntityAggregate,
  /** fetch data from the table: "entity" using primary key columns */
  entity_by_pk?: Maybe<Entity>,
  /** fetch data from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material: Array<EnumHardwareFastenerMaterial>,
  /** fetch aggregated fields from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material_aggregate: EnumHardwareFastenerMaterialAggregate,
  /** fetch data from the table: "enum.hardware_fastener_material" using primary key columns */
  enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>,
  /** fetch data from the table: "enum.hardware_fastener_screw_point" */
  enum_hardware_fastener_screw_point: Array<EnumHardwareFastenerScrewPoint>,
  /** fetch aggregated fields from the table: "enum.hardware_fastener_screw_point" */
  enum_hardware_fastener_screw_point_aggregate: EnumHardwareFastenerScrewPointAggregate,
  /** fetch data from the table: "enum.hardware_fastener_screw_point" using primary key columns */
  enum_hardware_fastener_screw_point_by_pk?: Maybe<EnumHardwareFastenerScrewPoint>,
  /** fetch data from the table: "enum.hardware_finish" */
  enum_hardware_finish: Array<EnumHardwareFinish>,
  /** fetch aggregated fields from the table: "enum.hardware_finish" */
  enum_hardware_finish_aggregate: EnumHardwareFinishAggregate,
  /** fetch data from the table: "enum.hardware_finish" using primary key columns */
  enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>,
  /** fetch data from the table: "enum.icon_category" */
  enum_icon_category: Array<EnumIconCategory>,
  /** fetch aggregated fields from the table: "enum.icon_category" */
  enum_icon_category_aggregate: EnumIconCategoryAggregate,
  /** fetch data from the table: "enum.icon_category" using primary key columns */
  enum_icon_category_by_pk?: Maybe<EnumIconCategory>,
  /** fetch data from the table: "enum.unit" */
  enum_unit: Array<EnumUnit>,
  /** fetch aggregated fields from the table: "enum.unit" */
  enum_unit_aggregate: EnumUnitAggregate,
  /** fetch data from the table: "enum.unit" using primary key columns */
  enum_unit_by_pk?: Maybe<EnumUnit>,
  files?: Maybe<Array<Maybe<File>>>,
  /** fetch data from the table: "icons" */
  icons: Array<Icons>,
  /** fetch aggregated fields from the table: "icons" */
  icons_aggregate: IconsAggregate,
  /** fetch data from the table: "icons" using primary key columns */
  icons_by_pk?: Maybe<Icons>,
  /** fetch data from the table: "items" */
  items: Array<Items>,
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: ItemsAggregate,
  /** fetch data from the table: "items_hardware_fastener_bolt" */
  items_hardware_fastener_bolt: Array<ItemsHardwareFastenerBolt>,
  /** fetch aggregated fields from the table: "items_hardware_fastener_bolt" */
  items_hardware_fastener_bolt_aggregate: ItemsHardwareFastenerBoltAggregate,
  /** fetch data from the table: "items_hardware_nut" */
  items_hardware_nut: Array<ItemsHardwareNut>,
  /** fetch aggregated fields from the table: "items_hardware_nut" */
  items_hardware_nut_aggregate: ItemsHardwareNutAggregate,
  /** fetch data from the table: "items_hardware_nut" using primary key columns */
  items_hardware_nut_by_pk?: Maybe<ItemsHardwareNut>,
  /** fetch data from the table: "purchases" */
  purchases: Array<Purchases>,
  /** fetch aggregated fields from the table: "purchases" */
  purchases_aggregate: PurchasesAggregate,
  /** fetch data from the table: "purchases" using primary key columns */
  purchases_by_pk?: Maybe<Purchases>,
};


/** query root */
export type QueryRootEntityArgs = {
  distinct_on?: Maybe<Array<EntitySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EntityOrderBy>>,
  where?: Maybe<EntityBoolExp>
};


/** query root */
export type QueryRootEntityAggregateArgs = {
  distinct_on?: Maybe<Array<EntitySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EntityOrderBy>>,
  where?: Maybe<EntityBoolExp>
};


/** query root */
export type QueryRootEntityByPkArgs = {
  id: Scalars['Int']
};


/** query root */
export type QueryRootEnumHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


/** query root */
export type QueryRootEnumHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


/** query root */
export type QueryRootEnumHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String']
};


/** query root */
export type QueryRootEnumHardwareFastenerScrewPointArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


/** query root */
export type QueryRootEnumHardwareFastenerScrewPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


/** query root */
export type QueryRootEnumHardwareFastenerScrewPointByPkArgs = {
  id: Scalars['String']
};


/** query root */
export type QueryRootEnumHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


/** query root */
export type QueryRootEnumHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


/** query root */
export type QueryRootEnumHardwareFinishByPkArgs = {
  id: Scalars['String']
};


/** query root */
export type QueryRootEnumIconCategoryArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


/** query root */
export type QueryRootEnumIconCategoryAggregateArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


/** query root */
export type QueryRootEnumIconCategoryByPkArgs = {
  id: Scalars['String']
};


/** query root */
export type QueryRootEnumUnitArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


/** query root */
export type QueryRootEnumUnitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


/** query root */
export type QueryRootEnumUnitByPkArgs = {
  id: Scalars['String']
};


/** query root */
export type QueryRootIconsArgs = {
  distinct_on?: Maybe<Array<IconsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconsOrderBy>>,
  where?: Maybe<IconsBoolExp>
};


/** query root */
export type QueryRootIconsAggregateArgs = {
  distinct_on?: Maybe<Array<IconsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconsOrderBy>>,
  where?: Maybe<IconsBoolExp>
};


/** query root */
export type QueryRootIconsByPkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type QueryRootItemsArgs = {
  distinct_on?: Maybe<Array<ItemsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsOrderBy>>,
  where?: Maybe<ItemsBoolExp>
};


/** query root */
export type QueryRootItemsAggregateArgs = {
  distinct_on?: Maybe<Array<ItemsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsOrderBy>>,
  where?: Maybe<ItemsBoolExp>
};


/** query root */
export type QueryRootItemsHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemsHardwareFastenerBoltBoolExp>
};


/** query root */
export type QueryRootItemsHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemsHardwareFastenerBoltBoolExp>
};


/** query root */
export type QueryRootItemsHardwareNutArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareNutOrderBy>>,
  where?: Maybe<ItemsHardwareNutBoolExp>
};


/** query root */
export type QueryRootItemsHardwareNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareNutOrderBy>>,
  where?: Maybe<ItemsHardwareNutBoolExp>
};


/** query root */
export type QueryRootItemsHardwareNutByPkArgs = {
  id: Scalars['Int']
};


/** query root */
export type QueryRootPurchasesArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};


/** query root */
export type QueryRootPurchasesAggregateArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};


/** query root */
export type QueryRootPurchasesByPkArgs = {
  item_id: Scalars['Int'],
  order_no: Scalars['String']
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type SubscriptionRoot = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "entity" */
  entity: Array<Entity>,
  /** fetch aggregated fields from the table: "entity" */
  entity_aggregate: EntityAggregate,
  /** fetch data from the table: "entity" using primary key columns */
  entity_by_pk?: Maybe<Entity>,
  /** fetch data from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material: Array<EnumHardwareFastenerMaterial>,
  /** fetch aggregated fields from the table: "enum.hardware_fastener_material" */
  enum_hardware_fastener_material_aggregate: EnumHardwareFastenerMaterialAggregate,
  /** fetch data from the table: "enum.hardware_fastener_material" using primary key columns */
  enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>,
  /** fetch data from the table: "enum.hardware_fastener_screw_point" */
  enum_hardware_fastener_screw_point: Array<EnumHardwareFastenerScrewPoint>,
  /** fetch aggregated fields from the table: "enum.hardware_fastener_screw_point" */
  enum_hardware_fastener_screw_point_aggregate: EnumHardwareFastenerScrewPointAggregate,
  /** fetch data from the table: "enum.hardware_fastener_screw_point" using primary key columns */
  enum_hardware_fastener_screw_point_by_pk?: Maybe<EnumHardwareFastenerScrewPoint>,
  /** fetch data from the table: "enum.hardware_finish" */
  enum_hardware_finish: Array<EnumHardwareFinish>,
  /** fetch aggregated fields from the table: "enum.hardware_finish" */
  enum_hardware_finish_aggregate: EnumHardwareFinishAggregate,
  /** fetch data from the table: "enum.hardware_finish" using primary key columns */
  enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>,
  /** fetch data from the table: "enum.icon_category" */
  enum_icon_category: Array<EnumIconCategory>,
  /** fetch aggregated fields from the table: "enum.icon_category" */
  enum_icon_category_aggregate: EnumIconCategoryAggregate,
  /** fetch data from the table: "enum.icon_category" using primary key columns */
  enum_icon_category_by_pk?: Maybe<EnumIconCategory>,
  /** fetch data from the table: "enum.unit" */
  enum_unit: Array<EnumUnit>,
  /** fetch aggregated fields from the table: "enum.unit" */
  enum_unit_aggregate: EnumUnitAggregate,
  /** fetch data from the table: "enum.unit" using primary key columns */
  enum_unit_by_pk?: Maybe<EnumUnit>,
  /** fetch data from the table: "icons" */
  icons: Array<Icons>,
  /** fetch aggregated fields from the table: "icons" */
  icons_aggregate: IconsAggregate,
  /** fetch data from the table: "icons" using primary key columns */
  icons_by_pk?: Maybe<Icons>,
  /** fetch data from the table: "items" */
  items: Array<Items>,
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: ItemsAggregate,
  /** fetch data from the table: "items_hardware_fastener_bolt" */
  items_hardware_fastener_bolt: Array<ItemsHardwareFastenerBolt>,
  /** fetch aggregated fields from the table: "items_hardware_fastener_bolt" */
  items_hardware_fastener_bolt_aggregate: ItemsHardwareFastenerBoltAggregate,
  /** fetch data from the table: "items_hardware_nut" */
  items_hardware_nut: Array<ItemsHardwareNut>,
  /** fetch aggregated fields from the table: "items_hardware_nut" */
  items_hardware_nut_aggregate: ItemsHardwareNutAggregate,
  /** fetch data from the table: "items_hardware_nut" using primary key columns */
  items_hardware_nut_by_pk?: Maybe<ItemsHardwareNut>,
  /** fetch data from the table: "purchases" */
  purchases: Array<Purchases>,
  /** fetch aggregated fields from the table: "purchases" */
  purchases_aggregate: PurchasesAggregate,
  /** fetch data from the table: "purchases" using primary key columns */
  purchases_by_pk?: Maybe<Purchases>,
};


/** subscription root */
export type SubscriptionRootEntityArgs = {
  distinct_on?: Maybe<Array<EntitySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EntityOrderBy>>,
  where?: Maybe<EntityBoolExp>
};


/** subscription root */
export type SubscriptionRootEntityAggregateArgs = {
  distinct_on?: Maybe<Array<EntitySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EntityOrderBy>>,
  where?: Maybe<EntityBoolExp>
};


/** subscription root */
export type SubscriptionRootEntityByPkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerScrewPointArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerScrewPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumHardwareFastenerScrewPointByPkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type SubscriptionRootEnumHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumHardwareFinishByPkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type SubscriptionRootEnumIconCategoryArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumIconCategoryAggregateArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumIconCategoryByPkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type SubscriptionRootEnumUnitArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumUnitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


/** subscription root */
export type SubscriptionRootEnumUnitByPkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type SubscriptionRootIconsArgs = {
  distinct_on?: Maybe<Array<IconsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconsOrderBy>>,
  where?: Maybe<IconsBoolExp>
};


/** subscription root */
export type SubscriptionRootIconsAggregateArgs = {
  distinct_on?: Maybe<Array<IconsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconsOrderBy>>,
  where?: Maybe<IconsBoolExp>
};


/** subscription root */
export type SubscriptionRootIconsByPkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type SubscriptionRootItemsArgs = {
  distinct_on?: Maybe<Array<ItemsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsOrderBy>>,
  where?: Maybe<ItemsBoolExp>
};


/** subscription root */
export type SubscriptionRootItemsAggregateArgs = {
  distinct_on?: Maybe<Array<ItemsSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsOrderBy>>,
  where?: Maybe<ItemsBoolExp>
};


/** subscription root */
export type SubscriptionRootItemsHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemsHardwareFastenerBoltBoolExp>
};


/** subscription root */
export type SubscriptionRootItemsHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemsHardwareFastenerBoltBoolExp>
};


/** subscription root */
export type SubscriptionRootItemsHardwareNutArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareNutOrderBy>>,
  where?: Maybe<ItemsHardwareNutBoolExp>
};


/** subscription root */
export type SubscriptionRootItemsHardwareNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemsHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemsHardwareNutOrderBy>>,
  where?: Maybe<ItemsHardwareNutBoolExp>
};


/** subscription root */
export type SubscriptionRootItemsHardwareNutByPkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type SubscriptionRootPurchasesArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};


/** subscription root */
export type SubscriptionRootPurchasesAggregateArgs = {
  distinct_on?: Maybe<Array<PurchasesSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchasesOrderBy>>,
  where?: Maybe<PurchasesBoolExp>
};


/** subscription root */
export type SubscriptionRootPurchasesByPkArgs = {
  item_id: Scalars['Int'],
  order_no: Scalars['String']
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};




/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type InsertIconMutationVariables = {
  mimeData?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  label?: Maybe<Scalars['String']>,
  category?: Maybe<EnumIconCategoryEnum>
};


export type InsertIconMutation = (
  { __typename?: 'mutation_root' }
  & { insert_icons: Maybe<(
    { __typename?: 'icons_mutation_response' }
    & Pick<IconsMutationResponse, 'affected_rows'>
  )> }
);

export type GetIconsQueryVariables = {};


export type GetIconsQuery = (
  { __typename?: 'query_root' }
  & { icons: Array<(
    { __typename?: 'icons' }
    & Pick<Icons, 'data' | 'description' | 'id' | 'label' | 'category'>
  )> }
);

export type GetPrinterStatusQueryVariables = {};


export type GetPrinterStatusQuery = (
  { __typename?: 'query_root' }
  & { PrinterStatus: Maybe<(
    { __typename?: 'PrinterStatus' }
    & Pick<PrinterStatus, 'labelType'>
  )> }
);

export type ItemsHardwareFastenerBoltQueryVariables = {};


export type ItemsHardwareFastenerBoltQuery = (
  { __typename?: 'query_root' }
  & { items: Array<(
    { __typename?: 'items_hardware_fastener_bolt' }
    & Pick<ItemsHardwareFastenerBolt, 'id' | 'name' | 'description' | 'unit' | 'thread_length'>
  )> }
);

export type SendBufferMutationVariables = {
  buffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};


export type SendBufferMutation = (
  { __typename?: 'mutation_root' }
  & { putLabelMonochromeBuffer: Maybe<(
    { __typename?: 'LabelMonochromeBuffer' }
    & Pick<LabelMonochromeBuffer, 'imageBuffer'>
  )> }
);


export const InsertIconDocument = gql`
    mutation InsertIcon($mimeData: String, $description: String, $id: uuid, $label: String, $category: enum_icon_category_enum) {
  insert_icons(objects: {data: $mimeData, description: $description, id: $id, label: $label, category: $category}) {
    affected_rows
  }
}
    `;
export type InsertIconMutationFn = ApolloReactCommon.MutationFunction<InsertIconMutation, InsertIconMutationVariables>;
export type InsertIconComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertIconMutation, InsertIconMutationVariables>, 'mutation'>;

    export const InsertIconComponent = (props: InsertIconComponentProps) => (
      <ApolloReactComponents.Mutation<InsertIconMutation, InsertIconMutationVariables> mutation={InsertIconDocument} {...props} />
    );
    
export type InsertIconProps<TChildProps = {}> = ApolloReactHoc.MutateProps<InsertIconMutation, InsertIconMutationVariables> & TChildProps;
export function withInsertIcon<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertIconMutation,
  InsertIconMutationVariables,
  InsertIconProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, InsertIconMutation, InsertIconMutationVariables, InsertIconProps<TChildProps>>(InsertIconDocument, {
      alias: 'insertIcon',
      ...operationOptions
    });
};
export type InsertIconMutationResult = ApolloReactCommon.MutationResult<InsertIconMutation>;
export type InsertIconMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertIconMutation, InsertIconMutationVariables>;
export const GetIconsDocument = gql`
    query GetIcons {
  icons {
    data
    description
    id
    label
    category
  }
}
    `;
export type GetIconsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetIconsQuery, GetIconsQueryVariables>, 'query'>;

    export const GetIconsComponent = (props: GetIconsComponentProps) => (
      <ApolloReactComponents.Query<GetIconsQuery, GetIconsQueryVariables> query={GetIconsDocument} {...props} />
    );
    
export type GetIconsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetIconsQuery, GetIconsQueryVariables> & TChildProps;
export function withGetIcons<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetIconsQuery,
  GetIconsQueryVariables,
  GetIconsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetIconsQuery, GetIconsQueryVariables, GetIconsProps<TChildProps>>(GetIconsDocument, {
      alias: 'getIcons',
      ...operationOptions
    });
};
export type GetIconsQueryResult = ApolloReactCommon.QueryResult<GetIconsQuery, GetIconsQueryVariables>;
export const GetPrinterStatusDocument = gql`
    query GetPrinterStatus {
  PrinterStatus {
    labelType
  }
}
    `;
export type GetPrinterStatusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>, 'query'>;

    export const GetPrinterStatusComponent = (props: GetPrinterStatusComponentProps) => (
      <ApolloReactComponents.Query<GetPrinterStatusQuery, GetPrinterStatusQueryVariables> query={GetPrinterStatusDocument} {...props} />
    );
    
export type GetPrinterStatusProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetPrinterStatusQuery, GetPrinterStatusQueryVariables> & TChildProps;
export function withGetPrinterStatus<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPrinterStatusQuery,
  GetPrinterStatusQueryVariables,
  GetPrinterStatusProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetPrinterStatusQuery, GetPrinterStatusQueryVariables, GetPrinterStatusProps<TChildProps>>(GetPrinterStatusDocument, {
      alias: 'getPrinterStatus',
      ...operationOptions
    });
};
export type GetPrinterStatusQueryResult = ApolloReactCommon.QueryResult<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>;
export const ItemsHardwareFastenerBoltDocument = gql`
    query items_hardware_fastener_bolt {
  items: items_hardware_fastener_bolt {
    id
    name
    description
    unit
    thread_length
  }
}
    `;
export type ItemsHardwareFastenerBoltComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ItemsHardwareFastenerBoltQuery, ItemsHardwareFastenerBoltQueryVariables>, 'query'>;

    export const ItemsHardwareFastenerBoltComponent = (props: ItemsHardwareFastenerBoltComponentProps) => (
      <ApolloReactComponents.Query<ItemsHardwareFastenerBoltQuery, ItemsHardwareFastenerBoltQueryVariables> query={ItemsHardwareFastenerBoltDocument} {...props} />
    );
    
export type ItemsHardwareFastenerBoltProps<TChildProps = {}> = ApolloReactHoc.DataProps<ItemsHardwareFastenerBoltQuery, ItemsHardwareFastenerBoltQueryVariables> & TChildProps;
export function withItemsHardwareFastenerBolt<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemsHardwareFastenerBoltQuery,
  ItemsHardwareFastenerBoltQueryVariables,
  ItemsHardwareFastenerBoltProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ItemsHardwareFastenerBoltQuery, ItemsHardwareFastenerBoltQueryVariables, ItemsHardwareFastenerBoltProps<TChildProps>>(ItemsHardwareFastenerBoltDocument, {
      alias: 'itemsHardwareFastenerBolt',
      ...operationOptions
    });
};
export type ItemsHardwareFastenerBoltQueryResult = ApolloReactCommon.QueryResult<ItemsHardwareFastenerBoltQuery, ItemsHardwareFastenerBoltQueryVariables>;
export const SendBufferDocument = gql`
    mutation SendBuffer($buffer: [[[uint8]]]!) {
  putLabelMonochromeBuffer(imageBuffer: $buffer) {
    imageBuffer
  }
}
    `;
export type SendBufferMutationFn = ApolloReactCommon.MutationFunction<SendBufferMutation, SendBufferMutationVariables>;
export type SendBufferComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SendBufferMutation, SendBufferMutationVariables>, 'mutation'>;

    export const SendBufferComponent = (props: SendBufferComponentProps) => (
      <ApolloReactComponents.Mutation<SendBufferMutation, SendBufferMutationVariables> mutation={SendBufferDocument} {...props} />
    );
    
export type SendBufferProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SendBufferMutation, SendBufferMutationVariables> & TChildProps;
export function withSendBuffer<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SendBufferMutation,
  SendBufferMutationVariables,
  SendBufferProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SendBufferMutation, SendBufferMutationVariables, SendBufferProps<TChildProps>>(SendBufferDocument, {
      alias: 'sendBuffer',
      ...operationOptions
    });
};
export type SendBufferMutationResult = ApolloReactCommon.MutationResult<SendBufferMutation>;
export type SendBufferMutationOptions = ApolloReactCommon.BaseMutationOptions<SendBufferMutation, SendBufferMutationVariables>;
// graphql typescript defs generated on 2019-10-27T16:07:37-06:00
