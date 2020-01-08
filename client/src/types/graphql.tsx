import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamptz: any,
  uuid: any,
  numeric: any,
  jsonb: any,
  date: any,
  money: any,
  /** uint8 (unsigned int between 0 and 255) scalar type for Apollo GraphQL */
  uint8: any,
  Upload: any,
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Scalars['Boolean']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Scalars['Boolean']>>,
};


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
  url?: Maybe<Scalars['String']>,
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
  where?: Maybe<EntityBoolExp>,
};

/** ordering options when selecting data from "entity" */
export type EntityOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
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

/** 
 * https://www.sppusa.com/stainlesssteel_overview.php
 * 
 * 
 * columns and relationships of "enum.hardware_fastener_material"
 **/
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
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>,
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
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>,
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
  where?: Maybe<EnumHardwareFinishBoolExp>,
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
  where?: Maybe<EnumIconCategoryBoolExp>,
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
  where?: Maybe<EnumUnitBoolExp>,
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

/** 
 * Image / icon data for labels
 * 
 * 
 * columns and relationships of "icon"
 **/
export type Icon = {
   __typename?: 'icon',
  category: EnumIconCategoryEnum,
  created_at: Scalars['timestamptz'],
  /** Store image data in Base64 */
  data: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['uuid'],
  label?: Maybe<Scalars['String']>,
};

/** aggregated selection of "icon" */
export type IconAggregate = {
   __typename?: 'icon_aggregate',
  aggregate?: Maybe<IconAggregateFields>,
  nodes: Array<Icon>,
};

/** aggregate fields of "icon" */
export type IconAggregateFields = {
   __typename?: 'icon_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<IconMaxFields>,
  min?: Maybe<IconMinFields>,
};


/** aggregate fields of "icon" */
export type IconAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "icon" */
export type IconAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<IconMaxOrderBy>,
  min?: Maybe<IconMinOrderBy>,
};

/** input type for inserting array relation for remote table "icon" */
export type IconArrRelInsertInput = {
  data: Array<IconInsertInput>,
  on_conflict?: Maybe<IconOnConflict>,
};

/** Boolean expression to filter rows from the table "icon". All fields are combined with a logical 'AND'. */
export type IconBoolExp = {
  _and?: Maybe<Array<Maybe<IconBoolExp>>>,
  _not?: Maybe<IconBoolExp>,
  _or?: Maybe<Array<Maybe<IconBoolExp>>>,
  category?: Maybe<EnumIconCategoryEnumComparisonExp>,
  created_at?: Maybe<TimestamptzComparisonExp>,
  data?: Maybe<StringComparisonExp>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<UuidComparisonExp>,
  label?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "icon" */
export enum IconConstraint {
  /** unique or primary key constraint */
  ICONS_ID_KEY = 'icons_id_key',
  /** unique or primary key constraint */
  ICONS_PKEY = 'icons_pkey'
}

/** input type for inserting data into table "icon" */
export type IconInsertInput = {
  category?: Maybe<EnumIconCategoryEnum>,
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  label?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type IconMaxFields = {
   __typename?: 'icon_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "icon" */
export type IconMaxOrderBy = {
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  label?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type IconMinFields = {
   __typename?: 'icon_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "icon" */
export type IconMinOrderBy = {
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  label?: Maybe<OrderBy>,
};

/** response of any mutation on the table "icon" */
export type IconMutationResponse = {
   __typename?: 'icon_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Icon>,
};

/** input type for inserting object relation for remote table "icon" */
export type IconObjRelInsertInput = {
  data: IconInsertInput,
  on_conflict?: Maybe<IconOnConflict>,
};

/** on conflict condition type for table "icon" */
export type IconOnConflict = {
  constraint: IconConstraint,
  update_columns: Array<IconUpdateColumn>,
  where?: Maybe<IconBoolExp>,
};

/** ordering options when selecting data from "icon" */
export type IconOrderBy = {
  category?: Maybe<OrderBy>,
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  label?: Maybe<OrderBy>,
};

/** select columns of table "icon" */
export enum IconSelectColumn {
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

/** input type for updating data in table "icon" */
export type IconSetInput = {
  category?: Maybe<EnumIconCategoryEnum>,
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  label?: Maybe<Scalars['String']>,
};

/** update columns of table "icon" */
export enum IconUpdateColumn {
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

/** columns and relationships of "item" */
export type Item = {
   __typename?: 'item',
  class?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregated selection of "item" */
export type ItemAggregate = {
   __typename?: 'item_aggregate',
  aggregate?: Maybe<ItemAggregateFields>,
  nodes: Array<Item>,
};

/** aggregate fields of "item" */
export type ItemAggregateFields = {
   __typename?: 'item_aggregate_fields',
  avg?: Maybe<ItemAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemMaxFields>,
  min?: Maybe<ItemMinFields>,
  stddev?: Maybe<ItemStddevFields>,
  stddev_pop?: Maybe<ItemStddevPopFields>,
  stddev_samp?: Maybe<ItemStddevSampFields>,
  sum?: Maybe<ItemSumFields>,
  var_pop?: Maybe<ItemVarPopFields>,
  var_samp?: Maybe<ItemVarSampFields>,
  variance?: Maybe<ItemVarianceFields>,
};


/** aggregate fields of "item" */
export type ItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "item" */
export type ItemAggregateOrderBy = {
  avg?: Maybe<ItemAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemMaxOrderBy>,
  min?: Maybe<ItemMinOrderBy>,
  stddev?: Maybe<ItemStddevOrderBy>,
  stddev_pop?: Maybe<ItemStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemStddevSampOrderBy>,
  sum?: Maybe<ItemSumOrderBy>,
  var_pop?: Maybe<ItemVarPopOrderBy>,
  var_samp?: Maybe<ItemVarSampOrderBy>,
  variance?: Maybe<ItemVarianceOrderBy>,
};

/** aggregate avg on columns */
export type ItemAvgFields = {
   __typename?: 'item_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "item" */
export type ItemAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type ItemBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBoolExp>>>,
  _not?: Maybe<ItemBoolExp>,
  _or?: Maybe<Array<Maybe<ItemBoolExp>>>,
  class?: Maybe<StringComparisonExp>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
};

/** columns and relationships of "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBolt = {
   __typename?: 'item_hardware_fastener_bolt',
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

/** aggregated selection of "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregate = {
   __typename?: 'item_hardware_fastener_bolt_aggregate',
  aggregate?: Maybe<ItemHardwareFastenerBoltAggregateFields>,
  nodes: Array<ItemHardwareFastenerBolt>,
};

/** aggregate fields of "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregateFields = {
   __typename?: 'item_hardware_fastener_bolt_aggregate_fields',
  avg?: Maybe<ItemHardwareFastenerBoltAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemHardwareFastenerBoltMaxFields>,
  min?: Maybe<ItemHardwareFastenerBoltMinFields>,
  stddev?: Maybe<ItemHardwareFastenerBoltStddevFields>,
  stddev_pop?: Maybe<ItemHardwareFastenerBoltStddevPopFields>,
  stddev_samp?: Maybe<ItemHardwareFastenerBoltStddevSampFields>,
  sum?: Maybe<ItemHardwareFastenerBoltSumFields>,
  var_pop?: Maybe<ItemHardwareFastenerBoltVarPopFields>,
  var_samp?: Maybe<ItemHardwareFastenerBoltVarSampFields>,
  variance?: Maybe<ItemHardwareFastenerBoltVarianceFields>,
};


/** aggregate fields of "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAggregateOrderBy = {
  avg?: Maybe<ItemHardwareFastenerBoltAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemHardwareFastenerBoltMaxOrderBy>,
  min?: Maybe<ItemHardwareFastenerBoltMinOrderBy>,
  stddev?: Maybe<ItemHardwareFastenerBoltStddevOrderBy>,
  stddev_pop?: Maybe<ItemHardwareFastenerBoltStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemHardwareFastenerBoltStddevSampOrderBy>,
  sum?: Maybe<ItemHardwareFastenerBoltSumOrderBy>,
  var_pop?: Maybe<ItemHardwareFastenerBoltVarPopOrderBy>,
  var_samp?: Maybe<ItemHardwareFastenerBoltVarSampOrderBy>,
  variance?: Maybe<ItemHardwareFastenerBoltVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltArrRelInsertInput = {
  data: Array<ItemHardwareFastenerBoltInsertInput>,
};

/** aggregate avg on columns */
export type ItemHardwareFastenerBoltAvgFields = {
   __typename?: 'item_hardware_fastener_bolt_avg_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltAvgOrderBy = {
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
 * Boolean expression to filter rows from the table "item_hardware_fastener_bolt".
 * All fields are combined with a logical 'AND'.
 **/
export type ItemHardwareFastenerBoltBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareFastenerBoltBoolExp>>>,
  _not?: Maybe<ItemHardwareFastenerBoltBoolExp>,
  _or?: Maybe<Array<Maybe<ItemHardwareFastenerBoltBoolExp>>>,
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

/** input type for incrementing integer columne in table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltIncInput = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltInsertInput = {
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
export type ItemHardwareFastenerBoltMaxFields = {
   __typename?: 'item_hardware_fastener_bolt_max_fields',
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

/** order by max() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltMaxOrderBy = {
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
export type ItemHardwareFastenerBoltMinFields = {
   __typename?: 'item_hardware_fastener_bolt_min_fields',
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

/** order by min() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltMinOrderBy = {
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

/** response of any mutation on the table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltMutationResponse = {
   __typename?: 'item_hardware_fastener_bolt_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareFastenerBolt>,
};

/** input type for inserting object relation for remote table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltObjRelInsertInput = {
  data: ItemHardwareFastenerBoltInsertInput,
};

/** ordering options when selecting data from "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltOrderBy = {
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

/** select columns of table "item_hardware_fastener_bolt" */
export enum ItemHardwareFastenerBoltSelectColumn {
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

/** input type for updating data in table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltSetInput = {
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
export type ItemHardwareFastenerBoltStddevFields = {
   __typename?: 'item_hardware_fastener_bolt_stddev_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltStddevOrderBy = {
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
export type ItemHardwareFastenerBoltStddevPopFields = {
   __typename?: 'item_hardware_fastener_bolt_stddev_pop_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltStddevPopOrderBy = {
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
export type ItemHardwareFastenerBoltStddevSampFields = {
   __typename?: 'item_hardware_fastener_bolt_stddev_samp_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltStddevSampOrderBy = {
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
export type ItemHardwareFastenerBoltSumFields = {
   __typename?: 'item_hardware_fastener_bolt_sum_fields',
  countersunk?: Maybe<Scalars['numeric']>,
  head_diameter?: Maybe<Scalars['numeric']>,
  head_height?: Maybe<Scalars['numeric']>,
  id?: Maybe<Scalars['Int']>,
  length_embedded?: Maybe<Scalars['numeric']>,
  shaft_length?: Maybe<Scalars['numeric']>,
  thread?: Maybe<Scalars['numeric']>,
  thread_length?: Maybe<Scalars['numeric']>,
};

/** order by sum() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltSumOrderBy = {
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
export type ItemHardwareFastenerBoltVarPopFields = {
   __typename?: 'item_hardware_fastener_bolt_var_pop_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltVarPopOrderBy = {
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
export type ItemHardwareFastenerBoltVarSampFields = {
   __typename?: 'item_hardware_fastener_bolt_var_samp_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltVarSampOrderBy = {
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
export type ItemHardwareFastenerBoltVarianceFields = {
   __typename?: 'item_hardware_fastener_bolt_variance_fields',
  countersunk?: Maybe<Scalars['Float']>,
  head_diameter?: Maybe<Scalars['Float']>,
  head_height?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  length_embedded?: Maybe<Scalars['Float']>,
  shaft_length?: Maybe<Scalars['Float']>,
  thread?: Maybe<Scalars['Float']>,
  thread_length?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "item_hardware_fastener_bolt" */
export type ItemHardwareFastenerBoltVarianceOrderBy = {
  countersunk?: Maybe<OrderBy>,
  head_diameter?: Maybe<OrderBy>,
  head_height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  length_embedded?: Maybe<OrderBy>,
  shaft_length?: Maybe<OrderBy>,
  thread?: Maybe<OrderBy>,
  thread_length?: Maybe<OrderBy>,
};

/** columns and relationships of "item_hardware_nut" */
export type ItemHardwareNut = {
   __typename?: 'item_hardware_nut',
  description: Scalars['String'],
  id: Scalars['Int'],
  name: Scalars['String'],
};

/** aggregated selection of "item_hardware_nut" */
export type ItemHardwareNutAggregate = {
   __typename?: 'item_hardware_nut_aggregate',
  aggregate?: Maybe<ItemHardwareNutAggregateFields>,
  nodes: Array<ItemHardwareNut>,
};

/** aggregate fields of "item_hardware_nut" */
export type ItemHardwareNutAggregateFields = {
   __typename?: 'item_hardware_nut_aggregate_fields',
  avg?: Maybe<ItemHardwareNutAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemHardwareNutMaxFields>,
  min?: Maybe<ItemHardwareNutMinFields>,
  stddev?: Maybe<ItemHardwareNutStddevFields>,
  stddev_pop?: Maybe<ItemHardwareNutStddevPopFields>,
  stddev_samp?: Maybe<ItemHardwareNutStddevSampFields>,
  sum?: Maybe<ItemHardwareNutSumFields>,
  var_pop?: Maybe<ItemHardwareNutVarPopFields>,
  var_samp?: Maybe<ItemHardwareNutVarSampFields>,
  variance?: Maybe<ItemHardwareNutVarianceFields>,
};


/** aggregate fields of "item_hardware_nut" */
export type ItemHardwareNutAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "item_hardware_nut" */
export type ItemHardwareNutAggregateOrderBy = {
  avg?: Maybe<ItemHardwareNutAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemHardwareNutMaxOrderBy>,
  min?: Maybe<ItemHardwareNutMinOrderBy>,
  stddev?: Maybe<ItemHardwareNutStddevOrderBy>,
  stddev_pop?: Maybe<ItemHardwareNutStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemHardwareNutStddevSampOrderBy>,
  sum?: Maybe<ItemHardwareNutSumOrderBy>,
  var_pop?: Maybe<ItemHardwareNutVarPopOrderBy>,
  var_samp?: Maybe<ItemHardwareNutVarSampOrderBy>,
  variance?: Maybe<ItemHardwareNutVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "item_hardware_nut" */
export type ItemHardwareNutArrRelInsertInput = {
  data: Array<ItemHardwareNutInsertInput>,
  on_conflict?: Maybe<ItemHardwareNutOnConflict>,
};

/** aggregate avg on columns */
export type ItemHardwareNutAvgFields = {
   __typename?: 'item_hardware_nut_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "item_hardware_nut" */
export type ItemHardwareNutAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "item_hardware_nut". All fields are combined with a logical 'AND'. */
export type ItemHardwareNutBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareNutBoolExp>>>,
  _not?: Maybe<ItemHardwareNutBoolExp>,
  _or?: Maybe<Array<Maybe<ItemHardwareNutBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
};

/** unique or primary key constraints on table "item_hardware_nut" */
export enum ItemHardwareNutConstraint {
  /** unique or primary key constraint */
  ITEMS_HARDWARE_NUT_PKEY = 'items_hardware_nut_pkey'
}

/** input type for incrementing integer columne in table "item_hardware_nut" */
export type ItemHardwareNutIncInput = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "item_hardware_nut" */
export type ItemHardwareNutInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type ItemHardwareNutMaxFields = {
   __typename?: 'item_hardware_nut_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "item_hardware_nut" */
export type ItemHardwareNutMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type ItemHardwareNutMinFields = {
   __typename?: 'item_hardware_nut_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "item_hardware_nut" */
export type ItemHardwareNutMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** response of any mutation on the table "item_hardware_nut" */
export type ItemHardwareNutMutationResponse = {
   __typename?: 'item_hardware_nut_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<ItemHardwareNut>,
};

/** input type for inserting object relation for remote table "item_hardware_nut" */
export type ItemHardwareNutObjRelInsertInput = {
  data: ItemHardwareNutInsertInput,
  on_conflict?: Maybe<ItemHardwareNutOnConflict>,
};

/** on conflict condition type for table "item_hardware_nut" */
export type ItemHardwareNutOnConflict = {
  constraint: ItemHardwareNutConstraint,
  update_columns: Array<ItemHardwareNutUpdateColumn>,
  where?: Maybe<ItemHardwareNutBoolExp>,
};

/** ordering options when selecting data from "item_hardware_nut" */
export type ItemHardwareNutOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** select columns of table "item_hardware_nut" */
export enum ItemHardwareNutSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** input type for updating data in table "item_hardware_nut" */
export type ItemHardwareNutSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type ItemHardwareNutStddevFields = {
   __typename?: 'item_hardware_nut_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "item_hardware_nut" */
export type ItemHardwareNutStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type ItemHardwareNutStddevPopFields = {
   __typename?: 'item_hardware_nut_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "item_hardware_nut" */
export type ItemHardwareNutStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type ItemHardwareNutStddevSampFields = {
   __typename?: 'item_hardware_nut_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "item_hardware_nut" */
export type ItemHardwareNutStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type ItemHardwareNutSumFields = {
   __typename?: 'item_hardware_nut_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "item_hardware_nut" */
export type ItemHardwareNutSumOrderBy = {
  id?: Maybe<OrderBy>,
};

/** update columns of table "item_hardware_nut" */
export enum ItemHardwareNutUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** aggregate var_pop on columns */
export type ItemHardwareNutVarPopFields = {
   __typename?: 'item_hardware_nut_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "item_hardware_nut" */
export type ItemHardwareNutVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type ItemHardwareNutVarSampFields = {
   __typename?: 'item_hardware_nut_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "item_hardware_nut" */
export type ItemHardwareNutVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type ItemHardwareNutVarianceFields = {
   __typename?: 'item_hardware_nut_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "item_hardware_nut" */
export type ItemHardwareNutVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate max on columns */
export type ItemMaxFields = {
   __typename?: 'item_max_fields',
  class?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "item" */
export type ItemMaxOrderBy = {
  class?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type ItemMinFields = {
   __typename?: 'item_min_fields',
  class?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "item" */
export type ItemMinOrderBy = {
  class?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** ordering options when selecting data from "item" */
export type ItemOrderBy = {
  class?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

/** select columns of table "item" */
export enum ItemSelectColumn {
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
export type ItemStddevFields = {
   __typename?: 'item_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "item" */
export type ItemStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type ItemStddevPopFields = {
   __typename?: 'item_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "item" */
export type ItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type ItemStddevSampFields = {
   __typename?: 'item_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "item" */
export type ItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type ItemSumFields = {
   __typename?: 'item_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "item" */
export type ItemSumOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate var_pop on columns */
export type ItemVarPopFields = {
   __typename?: 'item_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "item" */
export type ItemVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type ItemVarSampFields = {
   __typename?: 'item_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "item" */
export type ItemVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type ItemVarianceFields = {
   __typename?: 'item_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "item" */
export type ItemVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>,
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>,
  _eq?: Maybe<Scalars['jsonb']>,
  _gt?: Maybe<Scalars['jsonb']>,
  _gte?: Maybe<Scalars['jsonb']>,
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>,
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>,
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>,
  _in?: Maybe<Array<Scalars['jsonb']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['jsonb']>,
  _lte?: Maybe<Scalars['jsonb']>,
  _neq?: Maybe<Scalars['jsonb']>,
  _nin?: Maybe<Array<Scalars['jsonb']>>,
};

/** 
 * For saved labels, use to reprint or template
 * 
 * 
 * columns and relationships of "label"
 **/
export type Label = {
   __typename?: 'label',
  content: Scalars['jsonb'],
  created_at: Scalars['timestamptz'],
  /** An object relationship */
  edit_of?: Maybe<Label>,
  edit_of_id?: Maybe<Scalars['uuid']>,
  height: Scalars['Int'],
  id: Scalars['uuid'],
  is_template: Scalars['Boolean'],
  /** An object relationship */
  item?: Maybe<Item>,
  item_id?: Maybe<Scalars['Int']>,
  /** An array relationship */
  parent_of: Array<Label>,
  /** An aggregated array relationship */
  parent_of_aggregate: LabelAggregate,
  title?: Maybe<Scalars['String']>,
  updated_at: Scalars['timestamptz'],
  width: Scalars['Int'],
};


/** 
 * For saved labels, use to reprint or template
 * 
 * 
 * columns and relationships of "label"
 **/
export type LabelContentArgs = {
  path?: Maybe<Scalars['String']>
};


/** 
 * For saved labels, use to reprint or template
 * 
 * 
 * columns and relationships of "label"
 **/
export type LabelParentOfArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


/** 
 * For saved labels, use to reprint or template
 * 
 * 
 * columns and relationships of "label"
 **/
export type LabelParentOfAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};

/** aggregated selection of "label" */
export type LabelAggregate = {
   __typename?: 'label_aggregate',
  aggregate?: Maybe<LabelAggregateFields>,
  nodes: Array<Label>,
};

/** aggregate fields of "label" */
export type LabelAggregateFields = {
   __typename?: 'label_aggregate_fields',
  avg?: Maybe<LabelAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<LabelMaxFields>,
  min?: Maybe<LabelMinFields>,
  stddev?: Maybe<LabelStddevFields>,
  stddev_pop?: Maybe<LabelStddevPopFields>,
  stddev_samp?: Maybe<LabelStddevSampFields>,
  sum?: Maybe<LabelSumFields>,
  var_pop?: Maybe<LabelVarPopFields>,
  var_samp?: Maybe<LabelVarSampFields>,
  variance?: Maybe<LabelVarianceFields>,
};


/** aggregate fields of "label" */
export type LabelAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "label" */
export type LabelAggregateOrderBy = {
  avg?: Maybe<LabelAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<LabelMaxOrderBy>,
  min?: Maybe<LabelMinOrderBy>,
  stddev?: Maybe<LabelStddevOrderBy>,
  stddev_pop?: Maybe<LabelStddevPopOrderBy>,
  stddev_samp?: Maybe<LabelStddevSampOrderBy>,
  sum?: Maybe<LabelSumOrderBy>,
  var_pop?: Maybe<LabelVarPopOrderBy>,
  var_samp?: Maybe<LabelVarSampOrderBy>,
  variance?: Maybe<LabelVarianceOrderBy>,
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type LabelAppendInput = {
  content?: Maybe<Scalars['jsonb']>,
};

/** input type for inserting array relation for remote table "label" */
export type LabelArrRelInsertInput = {
  data: Array<LabelInsertInput>,
  on_conflict?: Maybe<LabelOnConflict>,
};

/** aggregate avg on columns */
export type LabelAvgFields = {
   __typename?: 'label_avg_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "label" */
export type LabelAvgOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export type LabelBoolExp = {
  _and?: Maybe<Array<Maybe<LabelBoolExp>>>,
  _not?: Maybe<LabelBoolExp>,
  _or?: Maybe<Array<Maybe<LabelBoolExp>>>,
  content?: Maybe<JsonbComparisonExp>,
  created_at?: Maybe<TimestamptzComparisonExp>,
  edit_of?: Maybe<LabelBoolExp>,
  edit_of_id?: Maybe<UuidComparisonExp>,
  height?: Maybe<IntComparisonExp>,
  id?: Maybe<UuidComparisonExp>,
  is_template?: Maybe<BooleanComparisonExp>,
  item?: Maybe<ItemBoolExp>,
  item_id?: Maybe<IntComparisonExp>,
  parent_of?: Maybe<LabelBoolExp>,
  title?: Maybe<StringComparisonExp>,
  updated_at?: Maybe<TimestamptzComparisonExp>,
  width?: Maybe<IntComparisonExp>,
};

/** unique or primary key constraints on table "label" */
export enum LabelConstraint {
  /** unique or primary key constraint */
  LABEL_ID_KEY = 'label_id_key',
  /** unique or primary key constraint */
  LABEL_PKEY = 'label_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type LabelDeleteAtPathInput = {
  content?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** 
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 **/
export type LabelDeleteElemInput = {
  content?: Maybe<Scalars['Int']>,
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type LabelDeleteKeyInput = {
  content?: Maybe<Scalars['String']>,
};

/** input type for incrementing integer columne in table "label" */
export type LabelIncInput = {
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "label" */
export type LabelInsertInput = {
  content?: Maybe<Scalars['jsonb']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  edit_of?: Maybe<LabelObjRelInsertInput>,
  edit_of_id?: Maybe<Scalars['uuid']>,
  height?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  is_template?: Maybe<Scalars['Boolean']>,
  item_id?: Maybe<Scalars['Int']>,
  parent_of?: Maybe<LabelArrRelInsertInput>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

/** aggregate max on columns */
export type LabelMaxFields = {
   __typename?: 'label_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "label" */
export type LabelMaxOrderBy = {
  created_at?: Maybe<OrderBy>,
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  title?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** aggregate min on columns */
export type LabelMinFields = {
   __typename?: 'label_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "label" */
export type LabelMinOrderBy = {
  created_at?: Maybe<OrderBy>,
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  title?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** response of any mutation on the table "label" */
export type LabelMutationResponse = {
   __typename?: 'label_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Label>,
};

/** input type for inserting object relation for remote table "label" */
export type LabelObjRelInsertInput = {
  data: LabelInsertInput,
  on_conflict?: Maybe<LabelOnConflict>,
};

/** on conflict condition type for table "label" */
export type LabelOnConflict = {
  constraint: LabelConstraint,
  update_columns: Array<LabelUpdateColumn>,
  where?: Maybe<LabelBoolExp>,
};

/** ordering options when selecting data from "label" */
export type LabelOrderBy = {
  content?: Maybe<OrderBy>,
  created_at?: Maybe<OrderBy>,
  edit_of?: Maybe<LabelOrderBy>,
  edit_of_id?: Maybe<OrderBy>,
  height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  is_template?: Maybe<OrderBy>,
  item?: Maybe<ItemOrderBy>,
  item_id?: Maybe<OrderBy>,
  parent_of_aggregate?: Maybe<LabelAggregateOrderBy>,
  title?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type LabelPrependInput = {
  content?: Maybe<Scalars['jsonb']>,
};

/** select columns of table "label" */
export enum LabelSelectColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EDIT_OF_ID = 'edit_of_id',
  /** column name */
  HEIGHT = 'height',
  /** column name */
  ID = 'id',
  /** column name */
  IS_TEMPLATE = 'is_template',
  /** column name */
  ITEM_ID = 'item_id',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WIDTH = 'width'
}

/** input type for updating data in table "label" */
export type LabelSetInput = {
  content?: Maybe<Scalars['jsonb']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  edit_of_id?: Maybe<Scalars['uuid']>,
  height?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  is_template?: Maybe<Scalars['Boolean']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

/** aggregate stddev on columns */
export type LabelStddevFields = {
   __typename?: 'label_stddev_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "label" */
export type LabelStddevOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type LabelStddevPopFields = {
   __typename?: 'label_stddev_pop_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "label" */
export type LabelStddevPopOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type LabelStddevSampFields = {
   __typename?: 'label_stddev_samp_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "label" */
export type LabelStddevSampOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type LabelSumFields = {
   __typename?: 'label_sum_fields',
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "label" */
export type LabelSumOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** update columns of table "label" */
export enum LabelUpdateColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EDIT_OF_ID = 'edit_of_id',
  /** column name */
  HEIGHT = 'height',
  /** column name */
  ID = 'id',
  /** column name */
  IS_TEMPLATE = 'is_template',
  /** column name */
  ITEM_ID = 'item_id',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WIDTH = 'width'
}

/** aggregate var_pop on columns */
export type LabelVarPopFields = {
   __typename?: 'label_var_pop_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "label" */
export type LabelVarPopOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type LabelVarSampFields = {
   __typename?: 'label_var_samp_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "label" */
export type LabelVarSampOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type LabelVarianceFields = {
   __typename?: 'label_variance_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "label" */
export type LabelVarianceOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

/** Label characteristics and properties */
export type LabelCharacteristic = {
   __typename?: 'LabelCharacteristic',
  pinsLeft: Scalars['Int'],
  pinsPrint: Scalars['Int'],
  pinsRight: Scalars['Int'],
  widthMillimeters: Scalars['Int'],
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
  /** 
 * Send a label to be printed
   * Image Buffer / Raster data arranged as [page][column][pixels] of uint8 to the printer
 **/
  putLabelMonochromeBuffer?: Maybe<OperationResult>,
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
  /** delete data from the table: "icon" */
  delete_icon?: Maybe<IconMutationResponse>,
  /** delete data from the table: "item_hardware_fastener_bolt" */
  delete_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>,
  /** delete data from the table: "item_hardware_nut" */
  delete_item_hardware_nut?: Maybe<ItemHardwareNutMutationResponse>,
  /** delete data from the table: "label" */
  delete_label?: Maybe<LabelMutationResponse>,
  /** delete data from the table: "purchase" */
  delete_purchase?: Maybe<PurchaseMutationResponse>,
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
  /** insert data into the table: "icon" */
  insert_icon?: Maybe<IconMutationResponse>,
  /** insert data into the table: "item_hardware_fastener_bolt" */
  insert_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>,
  /** insert data into the table: "item_hardware_nut" */
  insert_item_hardware_nut?: Maybe<ItemHardwareNutMutationResponse>,
  /** insert data into the table: "label" */
  insert_label?: Maybe<LabelMutationResponse>,
  /** insert data into the table: "purchase" */
  insert_purchase?: Maybe<PurchaseMutationResponse>,
  /** 
 * Send a label to be printed
   * Image Buffer / Raster data arranged as [page][column][pixels] of uint8 to the printer
 **/
  putLabelMonochromeBuffer?: Maybe<OperationResult>,
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
  /** update data of the table: "icon" */
  update_icon?: Maybe<IconMutationResponse>,
  /** update data of the table: "item_hardware_fastener_bolt" */
  update_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>,
  /** update data of the table: "item_hardware_nut" */
  update_item_hardware_nut?: Maybe<ItemHardwareNutMutationResponse>,
  /** update data of the table: "label" */
  update_label?: Maybe<LabelMutationResponse>,
  /** update data of the table: "purchase" */
  update_purchase?: Maybe<PurchaseMutationResponse>,
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
export type MutationRootDeleteIconArgs = {
  where: IconBoolExp
};


/** mutation root */
export type MutationRootDeleteItemHardwareFastenerBoltArgs = {
  where: ItemHardwareFastenerBoltBoolExp
};


/** mutation root */
export type MutationRootDeleteItemHardwareNutArgs = {
  where: ItemHardwareNutBoolExp
};


/** mutation root */
export type MutationRootDeleteLabelArgs = {
  where: LabelBoolExp
};


/** mutation root */
export type MutationRootDeletePurchaseArgs = {
  where: PurchaseBoolExp
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
export type MutationRootInsertIconArgs = {
  objects: Array<IconInsertInput>,
  on_conflict?: Maybe<IconOnConflict>
};


/** mutation root */
export type MutationRootInsertItemHardwareFastenerBoltArgs = {
  objects: Array<ItemHardwareFastenerBoltInsertInput>
};


/** mutation root */
export type MutationRootInsertItemHardwareNutArgs = {
  objects: Array<ItemHardwareNutInsertInput>,
  on_conflict?: Maybe<ItemHardwareNutOnConflict>
};


/** mutation root */
export type MutationRootInsertLabelArgs = {
  objects: Array<LabelInsertInput>,
  on_conflict?: Maybe<LabelOnConflict>
};


/** mutation root */
export type MutationRootInsertPurchaseArgs = {
  objects: Array<PurchaseInsertInput>,
  on_conflict?: Maybe<PurchaseOnConflict>
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
export type MutationRootUpdateIconArgs = {
  _set?: Maybe<IconSetInput>,
  where: IconBoolExp
};


/** mutation root */
export type MutationRootUpdateItemHardwareFastenerBoltArgs = {
  _inc?: Maybe<ItemHardwareFastenerBoltIncInput>,
  _set?: Maybe<ItemHardwareFastenerBoltSetInput>,
  where: ItemHardwareFastenerBoltBoolExp
};


/** mutation root */
export type MutationRootUpdateItemHardwareNutArgs = {
  _inc?: Maybe<ItemHardwareNutIncInput>,
  _set?: Maybe<ItemHardwareNutSetInput>,
  where: ItemHardwareNutBoolExp
};


/** mutation root */
export type MutationRootUpdateLabelArgs = {
  _append?: Maybe<LabelAppendInput>,
  _delete_at_path?: Maybe<LabelDeleteAtPathInput>,
  _delete_elem?: Maybe<LabelDeleteElemInput>,
  _delete_key?: Maybe<LabelDeleteKeyInput>,
  _inc?: Maybe<LabelIncInput>,
  _prepend?: Maybe<LabelPrependInput>,
  _set?: Maybe<LabelSetInput>,
  where: LabelBoolExp
};


/** mutation root */
export type MutationRootUpdatePurchaseArgs = {
  _inc?: Maybe<PurchaseIncInput>,
  _set?: Maybe<PurchaseSetInput>,
  where: PurchaseBoolExp
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

export type OperationResult = {
   __typename?: 'OperationResult',
  result: Scalars['Boolean'],
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

/** Printer and label status and properies */
export type PrinterLabelStatus = {
   __typename?: 'PrinterLabelStatus',
  labelCharacteristic?: Maybe<LabelCharacteristic>,
  mediaType?: Maybe<MediaType>,
  mediaWidth: Scalars['Int'],
  tapeColor?: Maybe<TapeColor>,
  textColor?: Maybe<TextColor>,
};

/** Label characteristics and properties */
export type PrinterStatus = {
   __typename?: 'PrinterStatus',
  firmwareVersion: Scalars['Float'],
  heightInch?: Maybe<Scalars['Float']>,
  heightMillimeter?: Maybe<Scalars['Float']>,
  labelStatus: PrinterLabelStatus,
  labelType: Scalars['String'],
  model: Scalars['String'],
  uptime: Scalars['Int'],
};

/** columns and relationships of "purchase" */
export type Purchase = {
   __typename?: 'purchase',
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

/** aggregated selection of "purchase" */
export type PurchaseAggregate = {
   __typename?: 'purchase_aggregate',
  aggregate?: Maybe<PurchaseAggregateFields>,
  nodes: Array<Purchase>,
};

/** aggregate fields of "purchase" */
export type PurchaseAggregateFields = {
   __typename?: 'purchase_aggregate_fields',
  avg?: Maybe<PurchaseAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<PurchaseMaxFields>,
  min?: Maybe<PurchaseMinFields>,
  stddev?: Maybe<PurchaseStddevFields>,
  stddev_pop?: Maybe<PurchaseStddevPopFields>,
  stddev_samp?: Maybe<PurchaseStddevSampFields>,
  sum?: Maybe<PurchaseSumFields>,
  var_pop?: Maybe<PurchaseVarPopFields>,
  var_samp?: Maybe<PurchaseVarSampFields>,
  variance?: Maybe<PurchaseVarianceFields>,
};


/** aggregate fields of "purchase" */
export type PurchaseAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PurchaseSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "purchase" */
export type PurchaseAggregateOrderBy = {
  avg?: Maybe<PurchaseAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<PurchaseMaxOrderBy>,
  min?: Maybe<PurchaseMinOrderBy>,
  stddev?: Maybe<PurchaseStddevOrderBy>,
  stddev_pop?: Maybe<PurchaseStddevPopOrderBy>,
  stddev_samp?: Maybe<PurchaseStddevSampOrderBy>,
  sum?: Maybe<PurchaseSumOrderBy>,
  var_pop?: Maybe<PurchaseVarPopOrderBy>,
  var_samp?: Maybe<PurchaseVarSampOrderBy>,
  variance?: Maybe<PurchaseVarianceOrderBy>,
};

/** input type for inserting array relation for remote table "purchase" */
export type PurchaseArrRelInsertInput = {
  data: Array<PurchaseInsertInput>,
  on_conflict?: Maybe<PurchaseOnConflict>,
};

/** aggregate avg on columns */
export type PurchaseAvgFields = {
   __typename?: 'purchase_avg_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "purchase" */
export type PurchaseAvgOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** Boolean expression to filter rows from the table "purchase". All fields are combined with a logical 'AND'. */
export type PurchaseBoolExp = {
  _and?: Maybe<Array<Maybe<PurchaseBoolExp>>>,
  _not?: Maybe<PurchaseBoolExp>,
  _or?: Maybe<Array<Maybe<PurchaseBoolExp>>>,
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

/** unique or primary key constraints on table "purchase" */
export enum PurchaseConstraint {
  /** unique or primary key constraint */
  PURCHASES_PKEY = 'purchases_pkey'
}

/** input type for incrementing integer columne in table "purchase" */
export type PurchaseIncInput = {
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "purchase" */
export type PurchaseInsertInput = {
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
export type PurchaseMaxFields = {
   __typename?: 'purchase_max_fields',
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

/** order by max() on columns of table "purchase" */
export type PurchaseMaxOrderBy = {
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
export type PurchaseMinFields = {
   __typename?: 'purchase_min_fields',
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

/** order by min() on columns of table "purchase" */
export type PurchaseMinOrderBy = {
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

/** response of any mutation on the table "purchase" */
export type PurchaseMutationResponse = {
   __typename?: 'purchase_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Purchase>,
};

/** input type for inserting object relation for remote table "purchase" */
export type PurchaseObjRelInsertInput = {
  data: PurchaseInsertInput,
  on_conflict?: Maybe<PurchaseOnConflict>,
};

/** on conflict condition type for table "purchase" */
export type PurchaseOnConflict = {
  constraint: PurchaseConstraint,
  update_columns: Array<PurchaseUpdateColumn>,
  where?: Maybe<PurchaseBoolExp>,
};

/** ordering options when selecting data from "purchase" */
export type PurchaseOrderBy = {
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

/** select columns of table "purchase" */
export enum PurchaseSelectColumn {
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

/** input type for updating data in table "purchase" */
export type PurchaseSetInput = {
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
export type PurchaseStddevFields = {
   __typename?: 'purchase_stddev_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "purchase" */
export type PurchaseStddevOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate stddev_pop on columns */
export type PurchaseStddevPopFields = {
   __typename?: 'purchase_stddev_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "purchase" */
export type PurchaseStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate stddev_samp on columns */
export type PurchaseStddevSampFields = {
   __typename?: 'purchase_stddev_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "purchase" */
export type PurchaseStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate sum on columns */
export type PurchaseSumFields = {
   __typename?: 'purchase_sum_fields',
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "purchase" */
export type PurchaseSumOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** update columns of table "purchase" */
export enum PurchaseUpdateColumn {
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
export type PurchaseVarPopFields = {
   __typename?: 'purchase_var_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "purchase" */
export type PurchaseVarPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate var_samp on columns */
export type PurchaseVarSampFields = {
   __typename?: 'purchase_var_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "purchase" */
export type PurchaseVarSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

/** aggregate variance on columns */
export type PurchaseVarianceFields = {
   __typename?: 'purchase_variance_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "purchase" */
export type PurchaseVarianceOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type Query = {
   __typename?: 'Query',
  /** Retrieve Printer and Label status and properties */
  PrinterStatus?: Maybe<PrinterStatus>,
  files?: Maybe<Array<Maybe<File>>>,
};

/** query root */
export type QueryRoot = {
   __typename?: 'query_root',
  /** Retrieve Printer and Label status and properties */
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
  /** fetch data from the table: "icon" */
  icon: Array<Icon>,
  /** fetch aggregated fields from the table: "icon" */
  icon_aggregate: IconAggregate,
  /** fetch data from the table: "icon" using primary key columns */
  icon_by_pk?: Maybe<Icon>,
  /** fetch data from the table: "item" */
  item: Array<Item>,
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: ItemAggregate,
  /** fetch data from the table: "item_hardware_fastener_bolt" */
  item_hardware_fastener_bolt: Array<ItemHardwareFastenerBolt>,
  /** fetch aggregated fields from the table: "item_hardware_fastener_bolt" */
  item_hardware_fastener_bolt_aggregate: ItemHardwareFastenerBoltAggregate,
  /** fetch data from the table: "item_hardware_nut" */
  item_hardware_nut: Array<ItemHardwareNut>,
  /** fetch aggregated fields from the table: "item_hardware_nut" */
  item_hardware_nut_aggregate: ItemHardwareNutAggregate,
  /** fetch data from the table: "item_hardware_nut" using primary key columns */
  item_hardware_nut_by_pk?: Maybe<ItemHardwareNut>,
  /** fetch data from the table: "label" */
  label: Array<Label>,
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: LabelAggregate,
  /** fetch data from the table: "label" using primary key columns */
  label_by_pk?: Maybe<Label>,
  /** fetch data from the table: "purchase" */
  purchase: Array<Purchase>,
  /** fetch aggregated fields from the table: "purchase" */
  purchase_aggregate: PurchaseAggregate,
  /** fetch data from the table: "purchase" using primary key columns */
  purchase_by_pk?: Maybe<Purchase>,
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
export type QueryRootIconArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


/** query root */
export type QueryRootIconAggregateArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


/** query root */
export type QueryRootIconByPkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type QueryRootItemArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


/** query root */
export type QueryRootItemAggregateArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


/** query root */
export type QueryRootItemHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


/** query root */
export type QueryRootItemHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


/** query root */
export type QueryRootItemHardwareNutArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


/** query root */
export type QueryRootItemHardwareNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


/** query root */
export type QueryRootItemHardwareNutByPkArgs = {
  id: Scalars['Int']
};


/** query root */
export type QueryRootLabelArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


/** query root */
export type QueryRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


/** query root */
export type QueryRootLabelByPkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type QueryRootPurchaseArgs = {
  distinct_on?: Maybe<Array<PurchaseSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchaseOrderBy>>,
  where?: Maybe<PurchaseBoolExp>
};


/** query root */
export type QueryRootPurchaseAggregateArgs = {
  distinct_on?: Maybe<Array<PurchaseSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchaseOrderBy>>,
  where?: Maybe<PurchaseBoolExp>
};


/** query root */
export type QueryRootPurchaseByPkArgs = {
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
  /** fetch data from the table: "icon" */
  icon: Array<Icon>,
  /** fetch aggregated fields from the table: "icon" */
  icon_aggregate: IconAggregate,
  /** fetch data from the table: "icon" using primary key columns */
  icon_by_pk?: Maybe<Icon>,
  /** fetch data from the table: "item" */
  item: Array<Item>,
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: ItemAggregate,
  /** fetch data from the table: "item_hardware_fastener_bolt" */
  item_hardware_fastener_bolt: Array<ItemHardwareFastenerBolt>,
  /** fetch aggregated fields from the table: "item_hardware_fastener_bolt" */
  item_hardware_fastener_bolt_aggregate: ItemHardwareFastenerBoltAggregate,
  /** fetch data from the table: "item_hardware_nut" */
  item_hardware_nut: Array<ItemHardwareNut>,
  /** fetch aggregated fields from the table: "item_hardware_nut" */
  item_hardware_nut_aggregate: ItemHardwareNutAggregate,
  /** fetch data from the table: "item_hardware_nut" using primary key columns */
  item_hardware_nut_by_pk?: Maybe<ItemHardwareNut>,
  /** fetch data from the table: "label" */
  label: Array<Label>,
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: LabelAggregate,
  /** fetch data from the table: "label" using primary key columns */
  label_by_pk?: Maybe<Label>,
  /** fetch data from the table: "purchase" */
  purchase: Array<Purchase>,
  /** fetch aggregated fields from the table: "purchase" */
  purchase_aggregate: PurchaseAggregate,
  /** fetch data from the table: "purchase" using primary key columns */
  purchase_by_pk?: Maybe<Purchase>,
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
export type SubscriptionRootIconArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


/** subscription root */
export type SubscriptionRootIconAggregateArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


/** subscription root */
export type SubscriptionRootIconByPkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type SubscriptionRootItemArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


/** subscription root */
export type SubscriptionRootItemAggregateArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


/** subscription root */
export type SubscriptionRootItemHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


/** subscription root */
export type SubscriptionRootItemHardwareNutArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


/** subscription root */
export type SubscriptionRootItemHardwareNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


/** subscription root */
export type SubscriptionRootItemHardwareNutByPkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type SubscriptionRootLabelArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


/** subscription root */
export type SubscriptionRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


/** subscription root */
export type SubscriptionRootLabelByPkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type SubscriptionRootPurchaseArgs = {
  distinct_on?: Maybe<Array<PurchaseSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchaseOrderBy>>,
  where?: Maybe<PurchaseBoolExp>
};


/** subscription root */
export type SubscriptionRootPurchaseAggregateArgs = {
  distinct_on?: Maybe<Array<PurchaseSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PurchaseOrderBy>>,
  where?: Maybe<PurchaseBoolExp>
};


/** subscription root */
export type SubscriptionRootPurchaseByPkArgs = {
  item_id: Scalars['Int'],
  order_no: Scalars['String']
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
  & { insert_icon: Maybe<(
    { __typename?: 'icon_mutation_response' }
    & Pick<IconMutationResponse, 'affected_rows'>
  )> }
);

export type GetIconQueryVariables = {};


export type GetIconQuery = (
  { __typename?: 'query_root' }
  & { icon: Array<(
    { __typename?: 'icon' }
    & Pick<Icon, 'data' | 'description' | 'id' | 'label' | 'category'>
  )> }
);

export type ItemHardwareFastenerBoltQueryVariables = {};


export type ItemHardwareFastenerBoltQuery = (
  { __typename?: 'query_root' }
  & { items: Array<(
    { __typename?: 'item_hardware_fastener_bolt' }
    & Pick<ItemHardwareFastenerBolt, 'id' | 'name' | 'description' | 'unit' | 'thread_length'>
  )> }
);

export type LabelFieldsFragment = (
  { __typename?: 'label' }
  & Pick<Label, 'id' | 'created_at' | 'content' | 'is_template' | 'title' | 'width' | 'height'>
  & { item: Maybe<(
    { __typename?: 'item' }
    & Pick<Item, 'id' | 'class' | 'name'>
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

export type GetLabelByIdQueryVariables = {
  label_id?: Maybe<Scalars['uuid']>
};


export type GetLabelByIdQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetLabelByItemIdQueryVariables = {
  item_id?: Maybe<Scalars['Int']>
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

export type SaveLabelMutationVariables = {
  content?: Maybe<Scalars['jsonb']>,
  height?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  is_template?: Maybe<Scalars['Boolean']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>
};


export type SaveLabelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_label: Maybe<(
    { __typename?: 'label_mutation_response' }
    & Pick<LabelMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'label' }
      & Pick<Label, 'id'>
    )> }
  )> }
);

export type EditLabelMutationVariables = {
  content?: Maybe<Scalars['jsonb']>,
  height?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  is_template?: Maybe<Scalars['Boolean']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>
};


export type EditLabelMutation = (
  { __typename: 'mutation_root' }
  & { update_label: Maybe<(
    { __typename?: 'label_mutation_response' }
    & Pick<LabelMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'label' }
      & Pick<Label, 'id'>
    )> }
  )> }
);

export type GetPrinterStatusQueryVariables = {};


export type GetPrinterStatusQuery = (
  { __typename?: 'query_root' }
  & { PrinterStatus: Maybe<(
    { __typename?: 'PrinterStatus' }
    & Pick<PrinterStatus, 'labelType' | 'heightInch'>
    & { labelStatus: (
      { __typename?: 'PrinterLabelStatus' }
      & Pick<PrinterLabelStatus, 'mediaType' | 'tapeColor' | 'textColor'>
      & { labelCharacteristic: Maybe<(
        { __typename?: 'LabelCharacteristic' }
        & Pick<LabelCharacteristic, 'pinsRight' | 'pinsPrint' | 'pinsLeft' | 'widthMillimeters'>
      )> }
    ) }
  )> }
);

export type SendBufferMutationVariables = {
  buffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};


export type SendBufferMutation = (
  { __typename?: 'mutation_root' }
  & { putLabelMonochromeBuffer: Maybe<(
    { __typename?: 'OperationResult' }
    & Pick<OperationResult, 'result'>
  )> }
);

export const LabelFieldsFragmentDoc = gql`
    fragment labelFields on label {
  id
  created_at
  content
  is_template
  title
  width
  height
  item {
    id
    class
    name
  }
}
    `;
export const InsertIconDocument = gql`
    mutation InsertIcon($mimeData: String, $description: String, $id: uuid, $label: String, $category: enum_icon_category_enum) {
  insert_icon(objects: {data: $mimeData, description: $description, id: $id, label: $label, category: $category}) {
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
 *      label: // value for 'label'
 *      category: // value for 'category'
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
    query GetIcon {
  icon {
    data
    description
    id
    label
    category
  }
}
    `;
export type GetIconComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetIconQuery, GetIconQueryVariables>, 'query'>;

    export const GetIconComponent = (props: GetIconComponentProps) => (
      <ApolloReactComponents.Query<GetIconQuery, GetIconQueryVariables> query={GetIconDocument} {...props} />
    );
    
export type GetIconProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetIconQuery, GetIconQueryVariables> & TChildProps;
export function withGetIcon<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetIconQuery,
  GetIconQueryVariables,
  GetIconProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetIconQuery, GetIconQueryVariables, GetIconProps<TChildProps>>(GetIconDocument, {
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
export const ItemHardwareFastenerBoltDocument = gql`
    query item_hardware_fastener_bolt {
  items: item_hardware_fastener_bolt {
    id
    name
    description
    unit
    thread_length
  }
}
    `;
export type ItemHardwareFastenerBoltComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables>, 'query'>;

    export const ItemHardwareFastenerBoltComponent = (props: ItemHardwareFastenerBoltComponentProps) => (
      <ApolloReactComponents.Query<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables> query={ItemHardwareFastenerBoltDocument} {...props} />
    );
    
export type ItemHardwareFastenerBoltProps<TChildProps = {}> = ApolloReactHoc.DataProps<ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables> & TChildProps;
export function withItemHardwareFastenerBolt<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ItemHardwareFastenerBoltQuery,
  ItemHardwareFastenerBoltQueryVariables,
  ItemHardwareFastenerBoltProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ItemHardwareFastenerBoltQuery, ItemHardwareFastenerBoltQueryVariables, ItemHardwareFastenerBoltProps<TChildProps>>(ItemHardwareFastenerBoltDocument, {
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
export const GetLabelsDocument = gql`
    query GetLabels {
  label(order_by: {created_at: asc}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetLabelsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLabelsQuery, GetLabelsQueryVariables>, 'query'>;

    export const GetLabelsComponent = (props: GetLabelsComponentProps) => (
      <ApolloReactComponents.Query<GetLabelsQuery, GetLabelsQueryVariables> query={GetLabelsDocument} {...props} />
    );
    
export type GetLabelsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetLabelsQuery, GetLabelsQueryVariables> & TChildProps;
export function withGetLabels<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLabelsQuery,
  GetLabelsQueryVariables,
  GetLabelsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetLabelsQuery, GetLabelsQueryVariables, GetLabelsProps<TChildProps>>(GetLabelsDocument, {
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
export const GetLabelByIdDocument = gql`
    query GetLabelById($label_id: uuid) {
  label(order_by: {created_at: asc}, where: {id: {_eq: $label_id}}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetLabelByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLabelByIdQuery, GetLabelByIdQueryVariables>, 'query'>;

    export const GetLabelByIdComponent = (props: GetLabelByIdComponentProps) => (
      <ApolloReactComponents.Query<GetLabelByIdQuery, GetLabelByIdQueryVariables> query={GetLabelByIdDocument} {...props} />
    );
    
export type GetLabelByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetLabelByIdQuery, GetLabelByIdQueryVariables> & TChildProps;
export function withGetLabelById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLabelByIdQuery,
  GetLabelByIdQueryVariables,
  GetLabelByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetLabelByIdQuery, GetLabelByIdQueryVariables, GetLabelByIdProps<TChildProps>>(GetLabelByIdDocument, {
      alias: 'getLabelById',
      ...operationOptions
    });
};

/**
 * __useGetLabelByIdQuery__
 *
 * To run a query within a React component, call `useGetLabelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelByIdQuery({
 *   variables: {
 *      label_id: // value for 'label_id'
 *   },
 * });
 */
export function useGetLabelByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLabelByIdQuery, GetLabelByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLabelByIdQuery, GetLabelByIdQueryVariables>(GetLabelByIdDocument, baseOptions);
      }
export function useGetLabelByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLabelByIdQuery, GetLabelByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLabelByIdQuery, GetLabelByIdQueryVariables>(GetLabelByIdDocument, baseOptions);
        }
export type GetLabelByIdQueryHookResult = ReturnType<typeof useGetLabelByIdQuery>;
export type GetLabelByIdLazyQueryHookResult = ReturnType<typeof useGetLabelByIdLazyQuery>;
export type GetLabelByIdQueryResult = ApolloReactCommon.QueryResult<GetLabelByIdQuery, GetLabelByIdQueryVariables>;
export const GetLabelByItemIdDocument = gql`
    query GetLabelByItemId($item_id: Int) {
  label(order_by: {created_at: asc}, where: {item_id: {_eq: $item_id}}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetLabelByItemIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>, 'query'>;

    export const GetLabelByItemIdComponent = (props: GetLabelByItemIdComponentProps) => (
      <ApolloReactComponents.Query<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables> query={GetLabelByItemIdDocument} {...props} />
    );
    
export type GetLabelByItemIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables> & TChildProps;
export function withGetLabelByItemId<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLabelByItemIdQuery,
  GetLabelByItemIdQueryVariables,
  GetLabelByItemIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables, GetLabelByItemIdProps<TChildProps>>(GetLabelByItemIdDocument, {
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
  label(order_by: {created_at: asc}, where: {is_template: {_eq: true}}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;
export type GetTemplatesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTemplatesQuery, GetTemplatesQueryVariables>, 'query'>;

    export const GetTemplatesComponent = (props: GetTemplatesComponentProps) => (
      <ApolloReactComponents.Query<GetTemplatesQuery, GetTemplatesQueryVariables> query={GetTemplatesDocument} {...props} />
    );
    
export type GetTemplatesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetTemplatesQuery, GetTemplatesQueryVariables> & TChildProps;
export function withGetTemplates<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTemplatesQuery,
  GetTemplatesQueryVariables,
  GetTemplatesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetTemplatesQuery, GetTemplatesQueryVariables, GetTemplatesProps<TChildProps>>(GetTemplatesDocument, {
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
export const SaveLabelDocument = gql`
    mutation SaveLabel($content: jsonb, $height: Int, $id: uuid, $is_template: Boolean, $item_id: Int, $title: String, $width: Int) {
  insert_label(objects: {content: $content, height: $height, id: $id, is_template: $is_template, item_id: $item_id, title: $title, width: $width}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type SaveLabelMutationFn = ApolloReactCommon.MutationFunction<SaveLabelMutation, SaveLabelMutationVariables>;
export type SaveLabelComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SaveLabelMutation, SaveLabelMutationVariables>, 'mutation'>;

    export const SaveLabelComponent = (props: SaveLabelComponentProps) => (
      <ApolloReactComponents.Mutation<SaveLabelMutation, SaveLabelMutationVariables> mutation={SaveLabelDocument} {...props} />
    );
    
export type SaveLabelProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SaveLabelMutation, SaveLabelMutationVariables> & TChildProps;
export function withSaveLabel<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SaveLabelMutation,
  SaveLabelMutationVariables,
  SaveLabelProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SaveLabelMutation, SaveLabelMutationVariables, SaveLabelProps<TChildProps>>(SaveLabelDocument, {
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
 *      is_template: // value for 'is_template'
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
    mutation EditLabel($content: jsonb, $height: Int, $id: uuid, $is_template: Boolean, $item_id: Int, $title: String, $width: Int) {
  __typename
  update_label(where: {id: {_eq: $id}}, _set: {content: $content, height: $height, is_template: $is_template, item_id: $item_id, title: $title, width: $width}) {
    returning {
      id
    }
    affected_rows
  }
}
    `;
export type EditLabelMutationFn = ApolloReactCommon.MutationFunction<EditLabelMutation, EditLabelMutationVariables>;
export type EditLabelComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditLabelMutation, EditLabelMutationVariables>, 'mutation'>;

    export const EditLabelComponent = (props: EditLabelComponentProps) => (
      <ApolloReactComponents.Mutation<EditLabelMutation, EditLabelMutationVariables> mutation={EditLabelDocument} {...props} />
    );
    
export type EditLabelProps<TChildProps = {}> = ApolloReactHoc.MutateProps<EditLabelMutation, EditLabelMutationVariables> & TChildProps;
export function withEditLabel<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditLabelMutation,
  EditLabelMutationVariables,
  EditLabelProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, EditLabelMutation, EditLabelMutationVariables, EditLabelProps<TChildProps>>(EditLabelDocument, {
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
 *      is_template: // value for 'is_template'
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
// graphql typescript defs generated on 2020-01-07T07:33:21-07:00
