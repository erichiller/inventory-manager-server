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
  jsonb: any,
  uuid: any,
  smallint: any,
  timestamptz: any,
  money: any,
  numeric: any,
  date: any,
  uint8: any,
  Upload: any,
};


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

export type EnumHardwareFastenerMaterial = {
   __typename?: 'enum_hardware_fastener_material',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type EnumHardwareFastenerMaterialAggregate = {
   __typename?: 'enum_hardware_fastener_material_aggregate',
  aggregate?: Maybe<EnumHardwareFastenerMaterialAggregateFields>,
  nodes: Array<EnumHardwareFastenerMaterial>,
};

export type EnumHardwareFastenerMaterialAggregateFields = {
   __typename?: 'enum_hardware_fastener_material_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumHardwareFastenerMaterialMaxFields>,
  min?: Maybe<EnumHardwareFastenerMaterialMinFields>,
};


export type EnumHardwareFastenerMaterialAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type EnumHardwareFastenerMaterialAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumHardwareFastenerMaterialMaxOrderBy>,
  min?: Maybe<EnumHardwareFastenerMaterialMinOrderBy>,
};

export type EnumHardwareFastenerMaterialArrRelInsertInput = {
  data: Array<EnumHardwareFastenerMaterialInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>,
};

export type EnumHardwareFastenerMaterialBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerMaterialBoolExp>>>,
  _not?: Maybe<EnumHardwareFastenerMaterialBoolExp>,
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerMaterialBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

export enum EnumHardwareFastenerMaterialConstraint {
  HARDWARE_FASTENER_MATERIAL_PKEY = 'hardware_fastener_material_pkey'
}

export type EnumHardwareFastenerMaterialInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFastenerMaterialMaxFields = {
   __typename?: 'enum_hardware_fastener_material_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFastenerMaterialMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumHardwareFastenerMaterialMinFields = {
   __typename?: 'enum_hardware_fastener_material_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFastenerMaterialMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumHardwareFastenerMaterialMutationResponse = {
   __typename?: 'enum_hardware_fastener_material_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<EnumHardwareFastenerMaterial>,
};

export type EnumHardwareFastenerMaterialObjRelInsertInput = {
  data: EnumHardwareFastenerMaterialInsertInput,
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>,
};

export type EnumHardwareFastenerMaterialOnConflict = {
  constraint: EnumHardwareFastenerMaterialConstraint,
  update_columns: Array<EnumHardwareFastenerMaterialUpdateColumn>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>,
};

export type EnumHardwareFastenerMaterialOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export enum EnumHardwareFastenerMaterialSelectColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumHardwareFastenerMaterialSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export enum EnumHardwareFastenerMaterialUpdateColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumHardwareFastenerScrewPoint = {
   __typename?: 'enum_hardware_fastener_screw_point',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type EnumHardwareFastenerScrewPointAggregate = {
   __typename?: 'enum_hardware_fastener_screw_point_aggregate',
  aggregate?: Maybe<EnumHardwareFastenerScrewPointAggregateFields>,
  nodes: Array<EnumHardwareFastenerScrewPoint>,
};

export type EnumHardwareFastenerScrewPointAggregateFields = {
   __typename?: 'enum_hardware_fastener_screw_point_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumHardwareFastenerScrewPointMaxFields>,
  min?: Maybe<EnumHardwareFastenerScrewPointMinFields>,
};


export type EnumHardwareFastenerScrewPointAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type EnumHardwareFastenerScrewPointAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumHardwareFastenerScrewPointMaxOrderBy>,
  min?: Maybe<EnumHardwareFastenerScrewPointMinOrderBy>,
};

export type EnumHardwareFastenerScrewPointArrRelInsertInput = {
  data: Array<EnumHardwareFastenerScrewPointInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerScrewPointOnConflict>,
};

export type EnumHardwareFastenerScrewPointBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFastenerScrewPointBoolExp>>>,
  _not?: Maybe<EnumHardwareFastenerScrewPointBoolExp>,
  _or?: Maybe<Array<Maybe<EnumHardwareFastenerScrewPointBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

export enum EnumHardwareFastenerScrewPointConstraint {
  HARDWARE_FASTENER_SCREW_POINT_PKEY = 'hardware_fastener_screw_point_pkey'
}

export type EnumHardwareFastenerScrewPointInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFastenerScrewPointMaxFields = {
   __typename?: 'enum_hardware_fastener_screw_point_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFastenerScrewPointMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumHardwareFastenerScrewPointMinFields = {
   __typename?: 'enum_hardware_fastener_screw_point_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFastenerScrewPointMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumHardwareFastenerScrewPointMutationResponse = {
   __typename?: 'enum_hardware_fastener_screw_point_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<EnumHardwareFastenerScrewPoint>,
};

export type EnumHardwareFastenerScrewPointObjRelInsertInput = {
  data: EnumHardwareFastenerScrewPointInsertInput,
  on_conflict?: Maybe<EnumHardwareFastenerScrewPointOnConflict>,
};

export type EnumHardwareFastenerScrewPointOnConflict = {
  constraint: EnumHardwareFastenerScrewPointConstraint,
  update_columns: Array<EnumHardwareFastenerScrewPointUpdateColumn>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>,
};

export type EnumHardwareFastenerScrewPointOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export enum EnumHardwareFastenerScrewPointSelectColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumHardwareFastenerScrewPointSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export enum EnumHardwareFastenerScrewPointUpdateColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumHardwareFinish = {
   __typename?: 'enum_hardware_finish',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type EnumHardwareFinishAggregate = {
   __typename?: 'enum_hardware_finish_aggregate',
  aggregate?: Maybe<EnumHardwareFinishAggregateFields>,
  nodes: Array<EnumHardwareFinish>,
};

export type EnumHardwareFinishAggregateFields = {
   __typename?: 'enum_hardware_finish_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumHardwareFinishMaxFields>,
  min?: Maybe<EnumHardwareFinishMinFields>,
};


export type EnumHardwareFinishAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type EnumHardwareFinishAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumHardwareFinishMaxOrderBy>,
  min?: Maybe<EnumHardwareFinishMinOrderBy>,
};

export type EnumHardwareFinishArrRelInsertInput = {
  data: Array<EnumHardwareFinishInsertInput>,
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>,
};

export type EnumHardwareFinishBoolExp = {
  _and?: Maybe<Array<Maybe<EnumHardwareFinishBoolExp>>>,
  _not?: Maybe<EnumHardwareFinishBoolExp>,
  _or?: Maybe<Array<Maybe<EnumHardwareFinishBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

export enum EnumHardwareFinishConstraint {
  HARDWARE_FINISH_PKEY = 'hardware_finish_pkey'
}

export type EnumHardwareFinishInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFinishMaxFields = {
   __typename?: 'enum_hardware_finish_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFinishMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumHardwareFinishMinFields = {
   __typename?: 'enum_hardware_finish_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumHardwareFinishMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumHardwareFinishMutationResponse = {
   __typename?: 'enum_hardware_finish_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<EnumHardwareFinish>,
};

export type EnumHardwareFinishObjRelInsertInput = {
  data: EnumHardwareFinishInsertInput,
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>,
};

export type EnumHardwareFinishOnConflict = {
  constraint: EnumHardwareFinishConstraint,
  update_columns: Array<EnumHardwareFinishUpdateColumn>,
  where?: Maybe<EnumHardwareFinishBoolExp>,
};

export type EnumHardwareFinishOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export enum EnumHardwareFinishSelectColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumHardwareFinishSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export enum EnumHardwareFinishUpdateColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumIconCategory = {
   __typename?: 'enum_icon_category',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type EnumIconCategoryAggregate = {
   __typename?: 'enum_icon_category_aggregate',
  aggregate?: Maybe<EnumIconCategoryAggregateFields>,
  nodes: Array<EnumIconCategory>,
};

export type EnumIconCategoryAggregateFields = {
   __typename?: 'enum_icon_category_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumIconCategoryMaxFields>,
  min?: Maybe<EnumIconCategoryMinFields>,
};


export type EnumIconCategoryAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumIconCategorySelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type EnumIconCategoryAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumIconCategoryMaxOrderBy>,
  min?: Maybe<EnumIconCategoryMinOrderBy>,
};

export type EnumIconCategoryArrRelInsertInput = {
  data: Array<EnumIconCategoryInsertInput>,
  on_conflict?: Maybe<EnumIconCategoryOnConflict>,
};

export type EnumIconCategoryBoolExp = {
  _and?: Maybe<Array<Maybe<EnumIconCategoryBoolExp>>>,
  _not?: Maybe<EnumIconCategoryBoolExp>,
  _or?: Maybe<Array<Maybe<EnumIconCategoryBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

export enum EnumIconCategoryConstraint {
  ICON_CATEGORY_ID_KEY = 'icon_category_id_key',
  ICON_CATEGORY_PKEY = 'icon_category_pkey'
}

export enum EnumIconCategoryEnum {
  HARDWAREFASTENER = 'HardwareFastener'
}

export type EnumIconCategoryEnumComparisonExp = {
  _eq?: Maybe<EnumIconCategoryEnum>,
  _in?: Maybe<Array<EnumIconCategoryEnum>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<EnumIconCategoryEnum>,
  _nin?: Maybe<Array<EnumIconCategoryEnum>>,
};

export type EnumIconCategoryInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumIconCategoryMaxFields = {
   __typename?: 'enum_icon_category_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumIconCategoryMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumIconCategoryMinFields = {
   __typename?: 'enum_icon_category_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumIconCategoryMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumIconCategoryMutationResponse = {
   __typename?: 'enum_icon_category_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<EnumIconCategory>,
};

export type EnumIconCategoryObjRelInsertInput = {
  data: EnumIconCategoryInsertInput,
  on_conflict?: Maybe<EnumIconCategoryOnConflict>,
};

export type EnumIconCategoryOnConflict = {
  constraint: EnumIconCategoryConstraint,
  update_columns: Array<EnumIconCategoryUpdateColumn>,
  where?: Maybe<EnumIconCategoryBoolExp>,
};

export type EnumIconCategoryOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export enum EnumIconCategorySelectColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumIconCategorySetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export enum EnumIconCategoryUpdateColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumPaymentMethodType = {
   __typename?: 'enum_payment_method_type',
  description: Scalars['String'],
  id: Scalars['String'],
};

export type EnumPaymentMethodTypeAggregate = {
   __typename?: 'enum_payment_method_type_aggregate',
  aggregate?: Maybe<EnumPaymentMethodTypeAggregateFields>,
  nodes: Array<EnumPaymentMethodType>,
};

export type EnumPaymentMethodTypeAggregateFields = {
   __typename?: 'enum_payment_method_type_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumPaymentMethodTypeMaxFields>,
  min?: Maybe<EnumPaymentMethodTypeMinFields>,
};


export type EnumPaymentMethodTypeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type EnumPaymentMethodTypeAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumPaymentMethodTypeMaxOrderBy>,
  min?: Maybe<EnumPaymentMethodTypeMinOrderBy>,
};

export type EnumPaymentMethodTypeArrRelInsertInput = {
  data: Array<EnumPaymentMethodTypeInsertInput>,
  on_conflict?: Maybe<EnumPaymentMethodTypeOnConflict>,
};

export type EnumPaymentMethodTypeBoolExp = {
  _and?: Maybe<Array<Maybe<EnumPaymentMethodTypeBoolExp>>>,
  _not?: Maybe<EnumPaymentMethodTypeBoolExp>,
  _or?: Maybe<Array<Maybe<EnumPaymentMethodTypeBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

export enum EnumPaymentMethodTypeConstraint {
  PAYMENT_METHOD_TYP_PKEY = 'payment_method_typ_pkey'
}

export enum EnumPaymentMethodTypeEnum {
  ACH = 'ACH',
  CASH = 'CASH',
  CC = 'CC',
  CHECK = 'CHECK'
}

export type EnumPaymentMethodTypeEnumComparisonExp = {
  _eq?: Maybe<EnumPaymentMethodTypeEnum>,
  _in?: Maybe<Array<EnumPaymentMethodTypeEnum>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<EnumPaymentMethodTypeEnum>,
  _nin?: Maybe<Array<EnumPaymentMethodTypeEnum>>,
};

export type EnumPaymentMethodTypeInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumPaymentMethodTypeMaxFields = {
   __typename?: 'enum_payment_method_type_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumPaymentMethodTypeMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumPaymentMethodTypeMinFields = {
   __typename?: 'enum_payment_method_type_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumPaymentMethodTypeMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumPaymentMethodTypeMutationResponse = {
   __typename?: 'enum_payment_method_type_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<EnumPaymentMethodType>,
};

export type EnumPaymentMethodTypeObjRelInsertInput = {
  data: EnumPaymentMethodTypeInsertInput,
  on_conflict?: Maybe<EnumPaymentMethodTypeOnConflict>,
};

export type EnumPaymentMethodTypeOnConflict = {
  constraint: EnumPaymentMethodTypeConstraint,
  update_columns: Array<EnumPaymentMethodTypeUpdateColumn>,
  where?: Maybe<EnumPaymentMethodTypeBoolExp>,
};

export type EnumPaymentMethodTypeOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export enum EnumPaymentMethodTypeSelectColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumPaymentMethodTypeSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export enum EnumPaymentMethodTypeUpdateColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumUnit = {
   __typename?: 'enum_unit',
  description?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type EnumUnitAggregate = {
   __typename?: 'enum_unit_aggregate',
  aggregate?: Maybe<EnumUnitAggregateFields>,
  nodes: Array<EnumUnit>,
};

export type EnumUnitAggregateFields = {
   __typename?: 'enum_unit_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<EnumUnitMaxFields>,
  min?: Maybe<EnumUnitMinFields>,
};


export type EnumUnitAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EnumUnitSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type EnumUnitAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<EnumUnitMaxOrderBy>,
  min?: Maybe<EnumUnitMinOrderBy>,
};

export type EnumUnitArrRelInsertInput = {
  data: Array<EnumUnitInsertInput>,
  on_conflict?: Maybe<EnumUnitOnConflict>,
};

export type EnumUnitBoolExp = {
  _and?: Maybe<Array<Maybe<EnumUnitBoolExp>>>,
  _not?: Maybe<EnumUnitBoolExp>,
  _or?: Maybe<Array<Maybe<EnumUnitBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<StringComparisonExp>,
};

export enum EnumUnitConstraint {
  UNIT_PKEY = 'unit_pkey'
}

export enum EnumUnitEnum {
  METRIC = 'metric',
  USC = 'usc'
}

export type EnumUnitEnumComparisonExp = {
  _eq?: Maybe<EnumUnitEnum>,
  _in?: Maybe<Array<EnumUnitEnum>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<EnumUnitEnum>,
  _nin?: Maybe<Array<EnumUnitEnum>>,
};

export type EnumUnitInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumUnitMaxFields = {
   __typename?: 'enum_unit_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumUnitMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumUnitMinFields = {
   __typename?: 'enum_unit_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type EnumUnitMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type EnumUnitMutationResponse = {
   __typename?: 'enum_unit_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<EnumUnit>,
};

export type EnumUnitObjRelInsertInput = {
  data: EnumUnitInsertInput,
  on_conflict?: Maybe<EnumUnitOnConflict>,
};

export type EnumUnitOnConflict = {
  constraint: EnumUnitConstraint,
  update_columns: Array<EnumUnitUpdateColumn>,
  where?: Maybe<EnumUnitBoolExp>,
};

export type EnumUnitOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export enum EnumUnitSelectColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type EnumUnitSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export enum EnumUnitUpdateColumn {
  DESCRIPTION = 'description',
  ID = 'id'
}

export type File = {
   __typename?: 'File',
  base64: Scalars['String'],
  name: Scalars['String'],
  path: Scalars['String'],
  type: Scalars['String'],
};

export type Icon = {
   __typename?: 'icon',
  categories: Array<IconItemCategoryMap>,
  categories_aggregate: IconItemCategoryMapAggregate,
  created_at: Scalars['timestamptz'],
  data: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['uuid'],
  labels: Array<IconLabelMap>,
  labels_aggregate: IconLabelMapAggregate,
  title?: Maybe<Scalars['String']>,
};


export type IconCategoriesArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>,
  where?: Maybe<IconItemCategoryMapBoolExp>
};


export type IconCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>,
  where?: Maybe<IconItemCategoryMapBoolExp>
};


export type IconLabelsArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconLabelMapOrderBy>>,
  where?: Maybe<IconLabelMapBoolExp>
};


export type IconLabelsAggregateArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconLabelMapOrderBy>>,
  where?: Maybe<IconLabelMapBoolExp>
};

export type IconAggregate = {
   __typename?: 'icon_aggregate',
  aggregate?: Maybe<IconAggregateFields>,
  nodes: Array<Icon>,
};

export type IconAggregateFields = {
   __typename?: 'icon_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<IconMaxFields>,
  min?: Maybe<IconMinFields>,
};


export type IconAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type IconAggregateOrderBy = {
  count?: Maybe<OrderBy>,
  max?: Maybe<IconMaxOrderBy>,
  min?: Maybe<IconMinOrderBy>,
};

export type IconArrRelInsertInput = {
  data: Array<IconInsertInput>,
  on_conflict?: Maybe<IconOnConflict>,
};

export type IconBoolExp = {
  _and?: Maybe<Array<Maybe<IconBoolExp>>>,
  _not?: Maybe<IconBoolExp>,
  _or?: Maybe<Array<Maybe<IconBoolExp>>>,
  categories?: Maybe<IconItemCategoryMapBoolExp>,
  created_at?: Maybe<TimestamptzComparisonExp>,
  data?: Maybe<StringComparisonExp>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<UuidComparisonExp>,
  labels?: Maybe<IconLabelMapBoolExp>,
  title?: Maybe<StringComparisonExp>,
};

export enum IconConstraint {
  ICONS_ID_KEY = 'icons_id_key',
  ICONS_PKEY = 'icons_pkey'
}

export type IconInsertInput = {
  categories?: Maybe<IconItemCategoryMapArrRelInsertInput>,
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  labels?: Maybe<IconLabelMapArrRelInsertInput>,
  title?: Maybe<Scalars['String']>,
};

export type IconItemCategoryMap = {
   __typename?: 'icon_item_category_map',
  category: EnumIconCategoryEnum,
  criteria?: Maybe<Scalars['jsonb']>,
  icon_id: Scalars['uuid'],
  sequence: Scalars['smallint'],
};


export type IconItemCategoryMapCriteriaArgs = {
  path?: Maybe<Scalars['String']>
};

export type IconItemCategoryMapAggregate = {
   __typename?: 'icon_item_category_map_aggregate',
  aggregate?: Maybe<IconItemCategoryMapAggregateFields>,
  nodes: Array<IconItemCategoryMap>,
};

export type IconItemCategoryMapAggregateFields = {
   __typename?: 'icon_item_category_map_aggregate_fields',
  avg?: Maybe<IconItemCategoryMapAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<IconItemCategoryMapMaxFields>,
  min?: Maybe<IconItemCategoryMapMinFields>,
  stddev?: Maybe<IconItemCategoryMapStddevFields>,
  stddev_pop?: Maybe<IconItemCategoryMapStddevPopFields>,
  stddev_samp?: Maybe<IconItemCategoryMapStddevSampFields>,
  sum?: Maybe<IconItemCategoryMapSumFields>,
  var_pop?: Maybe<IconItemCategoryMapVarPopFields>,
  var_samp?: Maybe<IconItemCategoryMapVarSampFields>,
  variance?: Maybe<IconItemCategoryMapVarianceFields>,
};


export type IconItemCategoryMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconItemCategoryMapSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type IconItemCategoryMapAggregateOrderBy = {
  avg?: Maybe<IconItemCategoryMapAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<IconItemCategoryMapMaxOrderBy>,
  min?: Maybe<IconItemCategoryMapMinOrderBy>,
  stddev?: Maybe<IconItemCategoryMapStddevOrderBy>,
  stddev_pop?: Maybe<IconItemCategoryMapStddevPopOrderBy>,
  stddev_samp?: Maybe<IconItemCategoryMapStddevSampOrderBy>,
  sum?: Maybe<IconItemCategoryMapSumOrderBy>,
  var_pop?: Maybe<IconItemCategoryMapVarPopOrderBy>,
  var_samp?: Maybe<IconItemCategoryMapVarSampOrderBy>,
  variance?: Maybe<IconItemCategoryMapVarianceOrderBy>,
};

export type IconItemCategoryMapAppendInput = {
  criteria?: Maybe<Scalars['jsonb']>,
};

export type IconItemCategoryMapArrRelInsertInput = {
  data: Array<IconItemCategoryMapInsertInput>,
  on_conflict?: Maybe<IconItemCategoryMapOnConflict>,
};

export type IconItemCategoryMapAvgFields = {
   __typename?: 'icon_item_category_map_avg_fields',
  sequence?: Maybe<Scalars['Float']>,
};

export type IconItemCategoryMapAvgOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapBoolExp = {
  _and?: Maybe<Array<Maybe<IconItemCategoryMapBoolExp>>>,
  _not?: Maybe<IconItemCategoryMapBoolExp>,
  _or?: Maybe<Array<Maybe<IconItemCategoryMapBoolExp>>>,
  category?: Maybe<EnumIconCategoryEnumComparisonExp>,
  criteria?: Maybe<JsonbComparisonExp>,
  icon_id?: Maybe<UuidComparisonExp>,
  sequence?: Maybe<SmallintComparisonExp>,
};

export enum IconItemCategoryMapConstraint {
  ICON_ITEM_CATEGORY_MAP_CATEGORY_SEQUENCE_KEY = 'icon_item_category_map_category_sequence_key',
  ICON_ITEM_CATEGORY_MAP_PKEY = 'icon_item_category_map_pkey'
}

export type IconItemCategoryMapDeleteAtPathInput = {
  criteria?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type IconItemCategoryMapDeleteElemInput = {
  criteria?: Maybe<Scalars['Int']>,
};

export type IconItemCategoryMapDeleteKeyInput = {
  criteria?: Maybe<Scalars['String']>,
};

export type IconItemCategoryMapIncInput = {
  sequence?: Maybe<Scalars['smallint']>,
};

export type IconItemCategoryMapInsertInput = {
  category?: Maybe<EnumIconCategoryEnum>,
  criteria?: Maybe<Scalars['jsonb']>,
  icon_id?: Maybe<Scalars['uuid']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type IconItemCategoryMapMaxFields = {
   __typename?: 'icon_item_category_map_max_fields',
  sequence?: Maybe<Scalars['smallint']>,
};

export type IconItemCategoryMapMaxOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapMinFields = {
   __typename?: 'icon_item_category_map_min_fields',
  sequence?: Maybe<Scalars['smallint']>,
};

export type IconItemCategoryMapMinOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapMutationResponse = {
   __typename?: 'icon_item_category_map_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<IconItemCategoryMap>,
};

export type IconItemCategoryMapObjRelInsertInput = {
  data: IconItemCategoryMapInsertInput,
  on_conflict?: Maybe<IconItemCategoryMapOnConflict>,
};

export type IconItemCategoryMapOnConflict = {
  constraint: IconItemCategoryMapConstraint,
  update_columns: Array<IconItemCategoryMapUpdateColumn>,
  where?: Maybe<IconItemCategoryMapBoolExp>,
};

export type IconItemCategoryMapOrderBy = {
  category?: Maybe<OrderBy>,
  criteria?: Maybe<OrderBy>,
  icon_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapPrependInput = {
  criteria?: Maybe<Scalars['jsonb']>,
};

export enum IconItemCategoryMapSelectColumn {
  CATEGORY = 'category',
  CRITERIA = 'criteria',
  ICON_ID = 'icon_id',
  SEQUENCE = 'sequence'
}

export type IconItemCategoryMapSetInput = {
  category?: Maybe<EnumIconCategoryEnum>,
  criteria?: Maybe<Scalars['jsonb']>,
  icon_id?: Maybe<Scalars['uuid']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type IconItemCategoryMapStddevFields = {
   __typename?: 'icon_item_category_map_stddev_fields',
  sequence?: Maybe<Scalars['Float']>,
};

export type IconItemCategoryMapStddevOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapStddevPopFields = {
   __typename?: 'icon_item_category_map_stddev_pop_fields',
  sequence?: Maybe<Scalars['Float']>,
};

export type IconItemCategoryMapStddevPopOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapStddevSampFields = {
   __typename?: 'icon_item_category_map_stddev_samp_fields',
  sequence?: Maybe<Scalars['Float']>,
};

export type IconItemCategoryMapStddevSampOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapSumFields = {
   __typename?: 'icon_item_category_map_sum_fields',
  sequence?: Maybe<Scalars['smallint']>,
};

export type IconItemCategoryMapSumOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export enum IconItemCategoryMapUpdateColumn {
  CATEGORY = 'category',
  CRITERIA = 'criteria',
  ICON_ID = 'icon_id',
  SEQUENCE = 'sequence'
}

export type IconItemCategoryMapVarPopFields = {
   __typename?: 'icon_item_category_map_var_pop_fields',
  sequence?: Maybe<Scalars['Float']>,
};

export type IconItemCategoryMapVarPopOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapVarSampFields = {
   __typename?: 'icon_item_category_map_var_samp_fields',
  sequence?: Maybe<Scalars['Float']>,
};

export type IconItemCategoryMapVarSampOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconItemCategoryMapVarianceFields = {
   __typename?: 'icon_item_category_map_variance_fields',
  sequence?: Maybe<Scalars['Float']>,
};

export type IconItemCategoryMapVarianceOrderBy = {
  sequence?: Maybe<OrderBy>,
};

export type IconLabelMap = {
   __typename?: 'icon_label_map',
  icon: Icon,
  icon_id: Scalars['uuid'],
  label_id: Scalars['uuid'],
};

export type IconLabelMapAggregate = {
   __typename?: 'icon_label_map_aggregate',
  aggregate?: Maybe<IconLabelMapAggregateFields>,
  nodes: Array<IconLabelMap>,
};

export type IconLabelMapAggregateFields = {
   __typename?: 'icon_label_map_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
};


export type IconLabelMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IconLabelMapSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type IconLabelMapAggregateOrderBy = {
  count?: Maybe<OrderBy>,
};

export type IconLabelMapArrRelInsertInput = {
  data: Array<IconLabelMapInsertInput>,
  on_conflict?: Maybe<IconLabelMapOnConflict>,
};

export type IconLabelMapBoolExp = {
  _and?: Maybe<Array<Maybe<IconLabelMapBoolExp>>>,
  _not?: Maybe<IconLabelMapBoolExp>,
  _or?: Maybe<Array<Maybe<IconLabelMapBoolExp>>>,
  icon?: Maybe<IconBoolExp>,
  icon_id?: Maybe<UuidComparisonExp>,
  label_id?: Maybe<UuidComparisonExp>,
};

export enum IconLabelMapConstraint {
  ICON_LABEL_MAP_PKEY = 'icon_label_map_pkey'
}

export type IconLabelMapInsertInput = {
  icon?: Maybe<IconObjRelInsertInput>,
  icon_id?: Maybe<Scalars['uuid']>,
  label_id?: Maybe<Scalars['uuid']>,
};

export type IconLabelMapMutationResponse = {
   __typename?: 'icon_label_map_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<IconLabelMap>,
};

export type IconLabelMapObjRelInsertInput = {
  data: IconLabelMapInsertInput,
  on_conflict?: Maybe<IconLabelMapOnConflict>,
};

export type IconLabelMapOnConflict = {
  constraint: IconLabelMapConstraint,
  update_columns: Array<IconLabelMapUpdateColumn>,
  where?: Maybe<IconLabelMapBoolExp>,
};

export type IconLabelMapOrderBy = {
  icon?: Maybe<IconOrderBy>,
  icon_id?: Maybe<OrderBy>,
  label_id?: Maybe<OrderBy>,
};

export enum IconLabelMapSelectColumn {
  ICON_ID = 'icon_id',
  LABEL_ID = 'label_id'
}

export type IconLabelMapSetInput = {
  icon_id?: Maybe<Scalars['uuid']>,
  label_id?: Maybe<Scalars['uuid']>,
};

export enum IconLabelMapUpdateColumn {
  ICON_ID = 'icon_id',
  LABEL_ID = 'label_id'
}

export type IconMaxFields = {
   __typename?: 'icon_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type IconMaxOrderBy = {
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  title?: Maybe<OrderBy>,
};

export type IconMinFields = {
   __typename?: 'icon_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type IconMinOrderBy = {
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  title?: Maybe<OrderBy>,
};

export type IconMutationResponse = {
   __typename?: 'icon_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Icon>,
};

export type IconObjRelInsertInput = {
  data: IconInsertInput,
  on_conflict?: Maybe<IconOnConflict>,
};

export type IconOnConflict = {
  constraint: IconConstraint,
  update_columns: Array<IconUpdateColumn>,
  where?: Maybe<IconBoolExp>,
};

export type IconOrderBy = {
  categories_aggregate?: Maybe<IconItemCategoryMapAggregateOrderBy>,
  created_at?: Maybe<OrderBy>,
  data?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  labels_aggregate?: Maybe<IconLabelMapAggregateOrderBy>,
  title?: Maybe<OrderBy>,
};

export enum IconSelectColumn {
  CREATED_AT = 'created_at',
  DATA = 'data',
  DESCRIPTION = 'description',
  ID = 'id',
  TITLE = 'title'
}

export type IconSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  title?: Maybe<Scalars['String']>,
};

export enum IconUpdateColumn {
  CREATED_AT = 'created_at',
  DATA = 'data',
  DESCRIPTION = 'description',
  ID = 'id',
  TITLE = 'title'
}

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

export type Item = {
   __typename?: 'item',
  bundle: Array<ItemBundleMap>,
  bundle_aggregate: ItemBundleMapAggregate,
  class: Scalars['String'],
  id: Scalars['Int'],
  labelTemplates: Array<LabelTemplateMap>,
  labelTemplates_aggregate: LabelTemplateMapAggregate,
  labels: Array<Label>,
  labels_aggregate: LabelAggregate,
  manufacturerItems: Array<ManufacturerItem>,
  manufacturerItems_aggregate: ManufacturerItemAggregate,
  object?: Maybe<Scalars['jsonb']>,
  orderItems: Array<OrderItem>,
  orderItems_aggregate: OrderItemAggregate,
  vendorItems: Array<VendorItem>,
  vendorItems_aggregate: VendorItemAggregate,
};


export type ItemBundleArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>,
  where?: Maybe<ItemBundleMapBoolExp>
};


export type ItemBundleAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>,
  where?: Maybe<ItemBundleMapBoolExp>
};


export type ItemLabelTemplatesArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};


export type ItemLabelTemplatesAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};


export type ItemLabelsArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type ItemLabelsAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type ItemManufacturerItemsArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>,
  where?: Maybe<ManufacturerItemBoolExp>
};


export type ItemManufacturerItemsAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>,
  where?: Maybe<ManufacturerItemBoolExp>
};


export type ItemObjectArgs = {
  path?: Maybe<Scalars['String']>
};


export type ItemOrderItemsArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderItemOrderBy>>,
  where?: Maybe<OrderItemBoolExp>
};


export type ItemOrderItemsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderItemOrderBy>>,
  where?: Maybe<OrderItemBoolExp>
};


export type ItemVendorItemsArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorItemOrderBy>>,
  where?: Maybe<VendorItemBoolExp>
};


export type ItemVendorItemsAggregateArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorItemOrderBy>>,
  where?: Maybe<VendorItemBoolExp>
};

export type ItemAggregate = {
   __typename?: 'item_aggregate',
  aggregate?: Maybe<ItemAggregateFields>,
  nodes: Array<Item>,
};

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


export type ItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

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

export type ItemAppendInput = {
  object?: Maybe<Scalars['jsonb']>,
};

export type ItemArrRelInsertInput = {
  data: Array<ItemInsertInput>,
  on_conflict?: Maybe<ItemOnConflict>,
};

export type ItemAvgFields = {
   __typename?: 'item_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBoolExp>>>,
  _not?: Maybe<ItemBoolExp>,
  _or?: Maybe<Array<Maybe<ItemBoolExp>>>,
  bundle?: Maybe<ItemBundleMapBoolExp>,
  class?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  labelTemplates?: Maybe<LabelTemplateMapBoolExp>,
  labels?: Maybe<LabelBoolExp>,
  manufacturerItems?: Maybe<ManufacturerItemBoolExp>,
  object?: Maybe<JsonbComparisonExp>,
  orderItems?: Maybe<OrderItemBoolExp>,
  vendorItems?: Maybe<VendorItemBoolExp>,
};

export type ItemBundle = {
   __typename?: 'item_bundle',
  created_at: Scalars['timestamptz'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};

export type ItemBundleAggregate = {
   __typename?: 'item_bundle_aggregate',
  aggregate?: Maybe<ItemBundleAggregateFields>,
  nodes: Array<ItemBundle>,
};

export type ItemBundleAggregateFields = {
   __typename?: 'item_bundle_aggregate_fields',
  avg?: Maybe<ItemBundleAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemBundleMaxFields>,
  min?: Maybe<ItemBundleMinFields>,
  stddev?: Maybe<ItemBundleStddevFields>,
  stddev_pop?: Maybe<ItemBundleStddevPopFields>,
  stddev_samp?: Maybe<ItemBundleStddevSampFields>,
  sum?: Maybe<ItemBundleSumFields>,
  var_pop?: Maybe<ItemBundleVarPopFields>,
  var_samp?: Maybe<ItemBundleVarSampFields>,
  variance?: Maybe<ItemBundleVarianceFields>,
};


export type ItemBundleAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemBundleSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type ItemBundleAggregateOrderBy = {
  avg?: Maybe<ItemBundleAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemBundleMaxOrderBy>,
  min?: Maybe<ItemBundleMinOrderBy>,
  stddev?: Maybe<ItemBundleStddevOrderBy>,
  stddev_pop?: Maybe<ItemBundleStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemBundleStddevSampOrderBy>,
  sum?: Maybe<ItemBundleSumOrderBy>,
  var_pop?: Maybe<ItemBundleVarPopOrderBy>,
  var_samp?: Maybe<ItemBundleVarSampOrderBy>,
  variance?: Maybe<ItemBundleVarianceOrderBy>,
};

export type ItemBundleArrRelInsertInput = {
  data: Array<ItemBundleInsertInput>,
  on_conflict?: Maybe<ItemBundleOnConflict>,
};

export type ItemBundleAvgFields = {
   __typename?: 'item_bundle_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemBundleAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemBundleBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBundleBoolExp>>>,
  _not?: Maybe<ItemBundleBoolExp>,
  _or?: Maybe<Array<Maybe<ItemBundleBoolExp>>>,
  created_at?: Maybe<TimestamptzComparisonExp>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
  updated_at?: Maybe<TimestamptzComparisonExp>,
};

export enum ItemBundleConstraint {
  ITEM_BUNDLE_NAME_KEY = 'item_bundle_name_key',
  ITEM_BUNDLE_PKEY = 'item_bundle_pkey'
}

export type ItemBundleIncInput = {
  id?: Maybe<Scalars['Int']>,
};

export type ItemBundleInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type ItemBundleMap = {
   __typename?: 'item_bundle_map',
  item_bundle_id: Scalars['Int'],
  item_member_id: Scalars['Int'],
};

export type ItemBundleMapAggregate = {
   __typename?: 'item_bundle_map_aggregate',
  aggregate?: Maybe<ItemBundleMapAggregateFields>,
  nodes: Array<ItemBundleMap>,
};

export type ItemBundleMapAggregateFields = {
   __typename?: 'item_bundle_map_aggregate_fields',
  avg?: Maybe<ItemBundleMapAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ItemBundleMapMaxFields>,
  min?: Maybe<ItemBundleMapMinFields>,
  stddev?: Maybe<ItemBundleMapStddevFields>,
  stddev_pop?: Maybe<ItemBundleMapStddevPopFields>,
  stddev_samp?: Maybe<ItemBundleMapStddevSampFields>,
  sum?: Maybe<ItemBundleMapSumFields>,
  var_pop?: Maybe<ItemBundleMapVarPopFields>,
  var_samp?: Maybe<ItemBundleMapVarSampFields>,
  variance?: Maybe<ItemBundleMapVarianceFields>,
};


export type ItemBundleMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemBundleMapSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type ItemBundleMapAggregateOrderBy = {
  avg?: Maybe<ItemBundleMapAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ItemBundleMapMaxOrderBy>,
  min?: Maybe<ItemBundleMapMinOrderBy>,
  stddev?: Maybe<ItemBundleMapStddevOrderBy>,
  stddev_pop?: Maybe<ItemBundleMapStddevPopOrderBy>,
  stddev_samp?: Maybe<ItemBundleMapStddevSampOrderBy>,
  sum?: Maybe<ItemBundleMapSumOrderBy>,
  var_pop?: Maybe<ItemBundleMapVarPopOrderBy>,
  var_samp?: Maybe<ItemBundleMapVarSampOrderBy>,
  variance?: Maybe<ItemBundleMapVarianceOrderBy>,
};

export type ItemBundleMapArrRelInsertInput = {
  data: Array<ItemBundleMapInsertInput>,
  on_conflict?: Maybe<ItemBundleMapOnConflict>,
};

export type ItemBundleMapAvgFields = {
   __typename?: 'item_bundle_map_avg_fields',
  item_bundle_id?: Maybe<Scalars['Float']>,
  item_member_id?: Maybe<Scalars['Float']>,
};

export type ItemBundleMapAvgOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapBoolExp = {
  _and?: Maybe<Array<Maybe<ItemBundleMapBoolExp>>>,
  _not?: Maybe<ItemBundleMapBoolExp>,
  _or?: Maybe<Array<Maybe<ItemBundleMapBoolExp>>>,
  item_bundle_id?: Maybe<IntComparisonExp>,
  item_member_id?: Maybe<IntComparisonExp>,
};

export enum ItemBundleMapConstraint {
  ITEM_BUNDLE_MAP_PKEY = 'item_bundle_map_pkey'
}

export type ItemBundleMapIncInput = {
  item_bundle_id?: Maybe<Scalars['Int']>,
  item_member_id?: Maybe<Scalars['Int']>,
};

export type ItemBundleMapInsertInput = {
  item_bundle_id?: Maybe<Scalars['Int']>,
  item_member_id?: Maybe<Scalars['Int']>,
};

export type ItemBundleMapMaxFields = {
   __typename?: 'item_bundle_map_max_fields',
  item_bundle_id?: Maybe<Scalars['Int']>,
  item_member_id?: Maybe<Scalars['Int']>,
};

export type ItemBundleMapMaxOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapMinFields = {
   __typename?: 'item_bundle_map_min_fields',
  item_bundle_id?: Maybe<Scalars['Int']>,
  item_member_id?: Maybe<Scalars['Int']>,
};

export type ItemBundleMapMinOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapMutationResponse = {
   __typename?: 'item_bundle_map_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<ItemBundleMap>,
};

export type ItemBundleMapObjRelInsertInput = {
  data: ItemBundleMapInsertInput,
  on_conflict?: Maybe<ItemBundleMapOnConflict>,
};

export type ItemBundleMapOnConflict = {
  constraint: ItemBundleMapConstraint,
  update_columns: Array<ItemBundleMapUpdateColumn>,
  where?: Maybe<ItemBundleMapBoolExp>,
};

export type ItemBundleMapOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export enum ItemBundleMapSelectColumn {
  ITEM_BUNDLE_ID = 'item_bundle_id',
  ITEM_MEMBER_ID = 'item_member_id'
}

export type ItemBundleMapSetInput = {
  item_bundle_id?: Maybe<Scalars['Int']>,
  item_member_id?: Maybe<Scalars['Int']>,
};

export type ItemBundleMapStddevFields = {
   __typename?: 'item_bundle_map_stddev_fields',
  item_bundle_id?: Maybe<Scalars['Float']>,
  item_member_id?: Maybe<Scalars['Float']>,
};

export type ItemBundleMapStddevOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapStddevPopFields = {
   __typename?: 'item_bundle_map_stddev_pop_fields',
  item_bundle_id?: Maybe<Scalars['Float']>,
  item_member_id?: Maybe<Scalars['Float']>,
};

export type ItemBundleMapStddevPopOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapStddevSampFields = {
   __typename?: 'item_bundle_map_stddev_samp_fields',
  item_bundle_id?: Maybe<Scalars['Float']>,
  item_member_id?: Maybe<Scalars['Float']>,
};

export type ItemBundleMapStddevSampOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapSumFields = {
   __typename?: 'item_bundle_map_sum_fields',
  item_bundle_id?: Maybe<Scalars['Int']>,
  item_member_id?: Maybe<Scalars['Int']>,
};

export type ItemBundleMapSumOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export enum ItemBundleMapUpdateColumn {
  ITEM_BUNDLE_ID = 'item_bundle_id',
  ITEM_MEMBER_ID = 'item_member_id'
}

export type ItemBundleMapVarPopFields = {
   __typename?: 'item_bundle_map_var_pop_fields',
  item_bundle_id?: Maybe<Scalars['Float']>,
  item_member_id?: Maybe<Scalars['Float']>,
};

export type ItemBundleMapVarPopOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapVarSampFields = {
   __typename?: 'item_bundle_map_var_samp_fields',
  item_bundle_id?: Maybe<Scalars['Float']>,
  item_member_id?: Maybe<Scalars['Float']>,
};

export type ItemBundleMapVarSampOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMapVarianceFields = {
   __typename?: 'item_bundle_map_variance_fields',
  item_bundle_id?: Maybe<Scalars['Float']>,
  item_member_id?: Maybe<Scalars['Float']>,
};

export type ItemBundleMapVarianceOrderBy = {
  item_bundle_id?: Maybe<OrderBy>,
  item_member_id?: Maybe<OrderBy>,
};

export type ItemBundleMaxFields = {
   __typename?: 'item_bundle_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type ItemBundleMaxOrderBy = {
  created_at?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
};

export type ItemBundleMinFields = {
   __typename?: 'item_bundle_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type ItemBundleMinOrderBy = {
  created_at?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
};

export type ItemBundleMutationResponse = {
   __typename?: 'item_bundle_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<ItemBundle>,
};

export type ItemBundleObjRelInsertInput = {
  data: ItemBundleInsertInput,
  on_conflict?: Maybe<ItemBundleOnConflict>,
};

export type ItemBundleOnConflict = {
  constraint: ItemBundleConstraint,
  update_columns: Array<ItemBundleUpdateColumn>,
  where?: Maybe<ItemBundleBoolExp>,
};

export type ItemBundleOrderBy = {
  created_at?: Maybe<OrderBy>,
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
};

export enum ItemBundleSelectColumn {
  CREATED_AT = 'created_at',
  DESCRIPTION = 'description',
  ID = 'id',
  NAME = 'name',
  UPDATED_AT = 'updated_at'
}

export type ItemBundleSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type ItemBundleStddevFields = {
   __typename?: 'item_bundle_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemBundleStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemBundleStddevPopFields = {
   __typename?: 'item_bundle_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemBundleStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemBundleStddevSampFields = {
   __typename?: 'item_bundle_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemBundleStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemBundleSumFields = {
   __typename?: 'item_bundle_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type ItemBundleSumOrderBy = {
  id?: Maybe<OrderBy>,
};

export enum ItemBundleUpdateColumn {
  CREATED_AT = 'created_at',
  DESCRIPTION = 'description',
  ID = 'id',
  NAME = 'name',
  UPDATED_AT = 'updated_at'
}

export type ItemBundleVarPopFields = {
   __typename?: 'item_bundle_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemBundleVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemBundleVarSampFields = {
   __typename?: 'item_bundle_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemBundleVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemBundleVarianceFields = {
   __typename?: 'item_bundle_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemBundleVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

export enum ItemConstraint {
  ITEM_PKEY = 'item_pkey'
}

export type ItemDeleteAtPathInput = {
  object?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ItemDeleteElemInput = {
  object?: Maybe<Scalars['Int']>,
};

export type ItemDeleteKeyInput = {
  object?: Maybe<Scalars['String']>,
};

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

export type ItemHardwareFastenerBoltAggregate = {
   __typename?: 'item_hardware_fastener_bolt_aggregate',
  aggregate?: Maybe<ItemHardwareFastenerBoltAggregateFields>,
  nodes: Array<ItemHardwareFastenerBolt>,
};

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


export type ItemHardwareFastenerBoltAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

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

export type ItemHardwareFastenerBoltArrRelInsertInput = {
  data: Array<ItemHardwareFastenerBoltInsertInput>,
  on_conflict?: Maybe<ItemHardwareFastenerBoltOnConflict>,
};

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

export enum ItemHardwareFastenerBoltConstraint {
  ITEM_HARDWARE_FASTENER_BOLT_PKEY = 'item_hardware_fastener_bolt_pkey'
}

export type ItemHardwareFastenerBoltIncInput = {
  id?: Maybe<Scalars['Int']>,
};

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

export type ItemHardwareFastenerBoltMutationResponse = {
   __typename?: 'item_hardware_fastener_bolt_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<ItemHardwareFastenerBolt>,
};

export type ItemHardwareFastenerBoltObjRelInsertInput = {
  data: ItemHardwareFastenerBoltInsertInput,
  on_conflict?: Maybe<ItemHardwareFastenerBoltOnConflict>,
};

export type ItemHardwareFastenerBoltOnConflict = {
  constraint: ItemHardwareFastenerBoltConstraint,
  update_columns: Array<ItemHardwareFastenerBoltUpdateColumn>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>,
};

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

export enum ItemHardwareFastenerBoltSelectColumn {
  COUNTERSUNK = 'countersunk',
  DESCRIPTION = 'description',
  DRIVE_SIZE = 'drive_size',
  DRIVE_TYPE = 'drive_type',
  HEAD = 'head',
  HEAD_DIAMETER = 'head_diameter',
  HEAD_HEIGHT = 'head_height',
  ID = 'id',
  LENGTH_EMBEDDED = 'length_embedded',
  NAME = 'name',
  POINT = 'point',
  PRODUCT_URL = 'product_url',
  SHAFT_LENGTH = 'shaft_length',
  THREAD = 'thread',
  THREAD_LENGTH = 'thread_length',
  UNIT = 'unit'
}

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

export enum ItemHardwareFastenerBoltUpdateColumn {
  COUNTERSUNK = 'countersunk',
  DESCRIPTION = 'description',
  DRIVE_SIZE = 'drive_size',
  DRIVE_TYPE = 'drive_type',
  HEAD = 'head',
  HEAD_DIAMETER = 'head_diameter',
  HEAD_HEIGHT = 'head_height',
  ID = 'id',
  LENGTH_EMBEDDED = 'length_embedded',
  NAME = 'name',
  POINT = 'point',
  PRODUCT_URL = 'product_url',
  SHAFT_LENGTH = 'shaft_length',
  THREAD = 'thread',
  THREAD_LENGTH = 'thread_length',
  UNIT = 'unit'
}

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

export type ItemHardwareNut = {
   __typename?: 'item_hardware_nut',
  description: Scalars['String'],
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type ItemHardwareNutAggregate = {
   __typename?: 'item_hardware_nut_aggregate',
  aggregate?: Maybe<ItemHardwareNutAggregateFields>,
  nodes: Array<ItemHardwareNut>,
};

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


export type ItemHardwareNutAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

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

export type ItemHardwareNutArrRelInsertInput = {
  data: Array<ItemHardwareNutInsertInput>,
  on_conflict?: Maybe<ItemHardwareNutOnConflict>,
};

export type ItemHardwareNutAvgFields = {
   __typename?: 'item_hardware_nut_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemHardwareNutAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemHardwareNutBoolExp = {
  _and?: Maybe<Array<Maybe<ItemHardwareNutBoolExp>>>,
  _not?: Maybe<ItemHardwareNutBoolExp>,
  _or?: Maybe<Array<Maybe<ItemHardwareNutBoolExp>>>,
  description?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
};

export enum ItemHardwareNutConstraint {
  ITEMS_HARDWARE_NUT_PKEY = 'items_hardware_nut_pkey'
}

export type ItemHardwareNutIncInput = {
  id?: Maybe<Scalars['Int']>,
};

export type ItemHardwareNutInsertInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type ItemHardwareNutMaxFields = {
   __typename?: 'item_hardware_nut_max_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type ItemHardwareNutMaxOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

export type ItemHardwareNutMinFields = {
   __typename?: 'item_hardware_nut_min_fields',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type ItemHardwareNutMinOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

export type ItemHardwareNutMutationResponse = {
   __typename?: 'item_hardware_nut_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<ItemHardwareNut>,
};

export type ItemHardwareNutObjRelInsertInput = {
  data: ItemHardwareNutInsertInput,
  on_conflict?: Maybe<ItemHardwareNutOnConflict>,
};

export type ItemHardwareNutOnConflict = {
  constraint: ItemHardwareNutConstraint,
  update_columns: Array<ItemHardwareNutUpdateColumn>,
  where?: Maybe<ItemHardwareNutBoolExp>,
};

export type ItemHardwareNutOrderBy = {
  description?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

export enum ItemHardwareNutSelectColumn {
  DESCRIPTION = 'description',
  ID = 'id',
  NAME = 'name'
}

export type ItemHardwareNutSetInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type ItemHardwareNutStddevFields = {
   __typename?: 'item_hardware_nut_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemHardwareNutStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemHardwareNutStddevPopFields = {
   __typename?: 'item_hardware_nut_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemHardwareNutStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemHardwareNutStddevSampFields = {
   __typename?: 'item_hardware_nut_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemHardwareNutStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemHardwareNutSumFields = {
   __typename?: 'item_hardware_nut_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type ItemHardwareNutSumOrderBy = {
  id?: Maybe<OrderBy>,
};

export enum ItemHardwareNutUpdateColumn {
  DESCRIPTION = 'description',
  ID = 'id',
  NAME = 'name'
}

export type ItemHardwareNutVarPopFields = {
   __typename?: 'item_hardware_nut_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemHardwareNutVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemHardwareNutVarSampFields = {
   __typename?: 'item_hardware_nut_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemHardwareNutVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemHardwareNutVarianceFields = {
   __typename?: 'item_hardware_nut_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemHardwareNutVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemIncInput = {
  id?: Maybe<Scalars['Int']>,
};

export type ItemInsertInput = {
  bundle?: Maybe<ItemBundleMapArrRelInsertInput>,
  class?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  labelTemplates?: Maybe<LabelTemplateMapArrRelInsertInput>,
  labels?: Maybe<LabelArrRelInsertInput>,
  manufacturerItems?: Maybe<ManufacturerItemArrRelInsertInput>,
  object?: Maybe<Scalars['jsonb']>,
  orderItems?: Maybe<OrderItemArrRelInsertInput>,
  vendorItems?: Maybe<VendorItemArrRelInsertInput>,
};

export type ItemMaxFields = {
   __typename?: 'item_max_fields',
  class?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
};

export type ItemMaxOrderBy = {
  class?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type ItemMinFields = {
   __typename?: 'item_min_fields',
  class?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
};

export type ItemMinOrderBy = {
  class?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
};

export type ItemMutationResponse = {
   __typename?: 'item_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Item>,
};

export type ItemObjRelInsertInput = {
  data: ItemInsertInput,
  on_conflict?: Maybe<ItemOnConflict>,
};

export type ItemOnConflict = {
  constraint: ItemConstraint,
  update_columns: Array<ItemUpdateColumn>,
  where?: Maybe<ItemBoolExp>,
};

export type ItemOrderBy = {
  bundle_aggregate?: Maybe<ItemBundleMapAggregateOrderBy>,
  class?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  labelTemplates_aggregate?: Maybe<LabelTemplateMapAggregateOrderBy>,
  labels_aggregate?: Maybe<LabelAggregateOrderBy>,
  manufacturerItems_aggregate?: Maybe<ManufacturerItemAggregateOrderBy>,
  object?: Maybe<OrderBy>,
  orderItems_aggregate?: Maybe<OrderItemAggregateOrderBy>,
  vendorItems_aggregate?: Maybe<VendorItemAggregateOrderBy>,
};

export type ItemPrependInput = {
  object?: Maybe<Scalars['jsonb']>,
};

export enum ItemSelectColumn {
  CLASS = 'class',
  ID = 'id',
  OBJECT = 'object'
}

export type ItemSetInput = {
  class?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  object?: Maybe<Scalars['jsonb']>,
};

export type ItemStddevFields = {
   __typename?: 'item_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemStddevPopFields = {
   __typename?: 'item_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemStddevSampFields = {
   __typename?: 'item_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemSumFields = {
   __typename?: 'item_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type ItemSumOrderBy = {
  id?: Maybe<OrderBy>,
};

export enum ItemUpdateColumn {
  CLASS = 'class',
  ID = 'id',
  OBJECT = 'object'
}

export type ItemVarPopFields = {
   __typename?: 'item_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemVarSampFields = {
   __typename?: 'item_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type ItemVarianceFields = {
   __typename?: 'item_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type ItemVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};


export type JsonbComparisonExp = {
  _contained_in?: Maybe<Scalars['jsonb']>,
  _contains?: Maybe<Scalars['jsonb']>,
  _eq?: Maybe<Scalars['jsonb']>,
  _gt?: Maybe<Scalars['jsonb']>,
  _gte?: Maybe<Scalars['jsonb']>,
  _has_key?: Maybe<Scalars['String']>,
  _has_keys_all?: Maybe<Array<Scalars['String']>>,
  _has_keys_any?: Maybe<Array<Scalars['String']>>,
  _in?: Maybe<Array<Scalars['jsonb']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['jsonb']>,
  _lte?: Maybe<Scalars['jsonb']>,
  _neq?: Maybe<Scalars['jsonb']>,
  _nin?: Maybe<Array<Scalars['jsonb']>>,
};

export type Label = {
   __typename?: 'label',
  content: Scalars['jsonb'],
  created_at: Scalars['timestamptz'],
  edit_of?: Maybe<Label>,
  edit_of_id?: Maybe<Scalars['uuid']>,
  height: Scalars['Int'],
  id: Scalars['uuid'],
  item?: Maybe<Item>,
  item_id?: Maybe<Scalars['Int']>,
  parent_of: Array<Label>,
  parent_of_aggregate: LabelAggregate,
  template_items: Array<LabelTemplateMap>,
  template_items_aggregate: LabelTemplateMapAggregate,
  title?: Maybe<Scalars['String']>,
  updated_at: Scalars['timestamptz'],
  width: Scalars['Int'],
};


export type LabelContentArgs = {
  path?: Maybe<Scalars['String']>
};


export type LabelParentOfArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type LabelParentOfAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type LabelTemplateItemsArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};


export type LabelTemplateItemsAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};

export type LabelAggregate = {
   __typename?: 'label_aggregate',
  aggregate?: Maybe<LabelAggregateFields>,
  nodes: Array<Label>,
};

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


export type LabelAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

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

export type LabelAppendInput = {
  content?: Maybe<Scalars['jsonb']>,
};

export type LabelArrRelInsertInput = {
  data: Array<LabelInsertInput>,
  on_conflict?: Maybe<LabelOnConflict>,
};

export type LabelAvgFields = {
   __typename?: 'label_avg_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type LabelAvgOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

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
  item?: Maybe<ItemBoolExp>,
  item_id?: Maybe<IntComparisonExp>,
  parent_of?: Maybe<LabelBoolExp>,
  template_items?: Maybe<LabelTemplateMapBoolExp>,
  title?: Maybe<StringComparisonExp>,
  updated_at?: Maybe<TimestamptzComparisonExp>,
  width?: Maybe<IntComparisonExp>,
};

export enum LabelConstraint {
  LABEL_ID_KEY = 'label_id_key',
  LABEL_PKEY = 'label_pkey'
}

export type LabelDeleteAtPathInput = {
  content?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type LabelDeleteElemInput = {
  content?: Maybe<Scalars['Int']>,
};

export type LabelDeleteKeyInput = {
  content?: Maybe<Scalars['String']>,
};

export type LabelIncInput = {
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
};

export type LabelInsertInput = {
  content?: Maybe<Scalars['jsonb']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  edit_of?: Maybe<LabelObjRelInsertInput>,
  edit_of_id?: Maybe<Scalars['uuid']>,
  height?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  item?: Maybe<ItemObjRelInsertInput>,
  item_id?: Maybe<Scalars['Int']>,
  parent_of?: Maybe<LabelArrRelInsertInput>,
  template_items?: Maybe<LabelTemplateMapArrRelInsertInput>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

export type LabelItemMap = {
   __typename?: 'label_item_map',
  item_id: Scalars['Int'],
  label_id: Scalars['uuid'],
};

export type LabelItemMapAggregate = {
   __typename?: 'label_item_map_aggregate',
  aggregate?: Maybe<LabelItemMapAggregateFields>,
  nodes: Array<LabelItemMap>,
};

export type LabelItemMapAggregateFields = {
   __typename?: 'label_item_map_aggregate_fields',
  avg?: Maybe<LabelItemMapAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<LabelItemMapMaxFields>,
  min?: Maybe<LabelItemMapMinFields>,
  stddev?: Maybe<LabelItemMapStddevFields>,
  stddev_pop?: Maybe<LabelItemMapStddevPopFields>,
  stddev_samp?: Maybe<LabelItemMapStddevSampFields>,
  sum?: Maybe<LabelItemMapSumFields>,
  var_pop?: Maybe<LabelItemMapVarPopFields>,
  var_samp?: Maybe<LabelItemMapVarSampFields>,
  variance?: Maybe<LabelItemMapVarianceFields>,
};


export type LabelItemMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelItemMapSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type LabelItemMapAggregateOrderBy = {
  avg?: Maybe<LabelItemMapAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<LabelItemMapMaxOrderBy>,
  min?: Maybe<LabelItemMapMinOrderBy>,
  stddev?: Maybe<LabelItemMapStddevOrderBy>,
  stddev_pop?: Maybe<LabelItemMapStddevPopOrderBy>,
  stddev_samp?: Maybe<LabelItemMapStddevSampOrderBy>,
  sum?: Maybe<LabelItemMapSumOrderBy>,
  var_pop?: Maybe<LabelItemMapVarPopOrderBy>,
  var_samp?: Maybe<LabelItemMapVarSampOrderBy>,
  variance?: Maybe<LabelItemMapVarianceOrderBy>,
};

export type LabelItemMapArrRelInsertInput = {
  data: Array<LabelItemMapInsertInput>,
  on_conflict?: Maybe<LabelItemMapOnConflict>,
};

export type LabelItemMapAvgFields = {
   __typename?: 'label_item_map_avg_fields',
  item_id?: Maybe<Scalars['Float']>,
};

export type LabelItemMapAvgOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapBoolExp = {
  _and?: Maybe<Array<Maybe<LabelItemMapBoolExp>>>,
  _not?: Maybe<LabelItemMapBoolExp>,
  _or?: Maybe<Array<Maybe<LabelItemMapBoolExp>>>,
  item_id?: Maybe<IntComparisonExp>,
  label_id?: Maybe<UuidComparisonExp>,
};

export enum LabelItemMapConstraint {
  LABEL_ITEM_MAP_PKEY = 'label_item_map_pkey'
}

export type LabelItemMapIncInput = {
  item_id?: Maybe<Scalars['Int']>,
};

export type LabelItemMapInsertInput = {
  item_id?: Maybe<Scalars['Int']>,
  label_id?: Maybe<Scalars['uuid']>,
};

export type LabelItemMapMaxFields = {
   __typename?: 'label_item_map_max_fields',
  item_id?: Maybe<Scalars['Int']>,
};

export type LabelItemMapMaxOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapMinFields = {
   __typename?: 'label_item_map_min_fields',
  item_id?: Maybe<Scalars['Int']>,
};

export type LabelItemMapMinOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapMutationResponse = {
   __typename?: 'label_item_map_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<LabelItemMap>,
};

export type LabelItemMapObjRelInsertInput = {
  data: LabelItemMapInsertInput,
  on_conflict?: Maybe<LabelItemMapOnConflict>,
};

export type LabelItemMapOnConflict = {
  constraint: LabelItemMapConstraint,
  update_columns: Array<LabelItemMapUpdateColumn>,
  where?: Maybe<LabelItemMapBoolExp>,
};

export type LabelItemMapOrderBy = {
  item_id?: Maybe<OrderBy>,
  label_id?: Maybe<OrderBy>,
};

export enum LabelItemMapSelectColumn {
  ITEM_ID = 'item_id',
  LABEL_ID = 'label_id'
}

export type LabelItemMapSetInput = {
  item_id?: Maybe<Scalars['Int']>,
  label_id?: Maybe<Scalars['uuid']>,
};

export type LabelItemMapStddevFields = {
   __typename?: 'label_item_map_stddev_fields',
  item_id?: Maybe<Scalars['Float']>,
};

export type LabelItemMapStddevOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapStddevPopFields = {
   __typename?: 'label_item_map_stddev_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
};

export type LabelItemMapStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapStddevSampFields = {
   __typename?: 'label_item_map_stddev_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
};

export type LabelItemMapStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapSumFields = {
   __typename?: 'label_item_map_sum_fields',
  item_id?: Maybe<Scalars['Int']>,
};

export type LabelItemMapSumOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export enum LabelItemMapUpdateColumn {
  ITEM_ID = 'item_id',
  LABEL_ID = 'label_id'
}

export type LabelItemMapVarPopFields = {
   __typename?: 'label_item_map_var_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
};

export type LabelItemMapVarPopOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapVarSampFields = {
   __typename?: 'label_item_map_var_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
};

export type LabelItemMapVarSampOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelItemMapVarianceFields = {
   __typename?: 'label_item_map_variance_fields',
  item_id?: Maybe<Scalars['Float']>,
};

export type LabelItemMapVarianceOrderBy = {
  item_id?: Maybe<OrderBy>,
};

export type LabelMaxFields = {
   __typename?: 'label_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

export type LabelMaxOrderBy = {
  created_at?: Maybe<OrderBy>,
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  title?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelMinFields = {
   __typename?: 'label_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

export type LabelMinOrderBy = {
  created_at?: Maybe<OrderBy>,
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  title?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelMutationResponse = {
   __typename?: 'label_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Label>,
};

export type LabelObjRelInsertInput = {
  data: LabelInsertInput,
  on_conflict?: Maybe<LabelOnConflict>,
};

export type LabelOnConflict = {
  constraint: LabelConstraint,
  update_columns: Array<LabelUpdateColumn>,
  where?: Maybe<LabelBoolExp>,
};

export type LabelOrderBy = {
  content?: Maybe<OrderBy>,
  created_at?: Maybe<OrderBy>,
  edit_of?: Maybe<LabelOrderBy>,
  edit_of_id?: Maybe<OrderBy>,
  height?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  item?: Maybe<ItemOrderBy>,
  item_id?: Maybe<OrderBy>,
  parent_of_aggregate?: Maybe<LabelAggregateOrderBy>,
  template_items_aggregate?: Maybe<LabelTemplateMapAggregateOrderBy>,
  title?: Maybe<OrderBy>,
  updated_at?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelPrependInput = {
  content?: Maybe<Scalars['jsonb']>,
};

export enum LabelSelectColumn {
  CONTENT = 'content',
  CREATED_AT = 'created_at',
  EDIT_OF_ID = 'edit_of_id',
  HEIGHT = 'height',
  ID = 'id',
  ITEM_ID = 'item_id',
  TITLE = 'title',
  UPDATED_AT = 'updated_at',
  WIDTH = 'width'
}

export type LabelSetInput = {
  content?: Maybe<Scalars['jsonb']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  edit_of_id?: Maybe<Scalars['uuid']>,
  height?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
  item_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  width?: Maybe<Scalars['Int']>,
};

export type LabelStddevFields = {
   __typename?: 'label_stddev_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type LabelStddevOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelStddevPopFields = {
   __typename?: 'label_stddev_pop_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type LabelStddevPopOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelStddevSampFields = {
   __typename?: 'label_stddev_samp_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type LabelStddevSampOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelSumFields = {
   __typename?: 'label_sum_fields',
  height?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
};

export type LabelSumOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelTemplateMap = {
   __typename?: 'label_template_map',
  criteria?: Maybe<Scalars['jsonb']>,
  item_class: Scalars['String'],
  item_id: Scalars['Int'],
  label: Label,
  label_id: Scalars['uuid'],
  sequence: Scalars['smallint'],
};


export type LabelTemplateMapCriteriaArgs = {
  path?: Maybe<Scalars['String']>
};

export type LabelTemplateMapAggregate = {
   __typename?: 'label_template_map_aggregate',
  aggregate?: Maybe<LabelTemplateMapAggregateFields>,
  nodes: Array<LabelTemplateMap>,
};

export type LabelTemplateMapAggregateFields = {
   __typename?: 'label_template_map_aggregate_fields',
  avg?: Maybe<LabelTemplateMapAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<LabelTemplateMapMaxFields>,
  min?: Maybe<LabelTemplateMapMinFields>,
  stddev?: Maybe<LabelTemplateMapStddevFields>,
  stddev_pop?: Maybe<LabelTemplateMapStddevPopFields>,
  stddev_samp?: Maybe<LabelTemplateMapStddevSampFields>,
  sum?: Maybe<LabelTemplateMapSumFields>,
  var_pop?: Maybe<LabelTemplateMapVarPopFields>,
  var_samp?: Maybe<LabelTemplateMapVarSampFields>,
  variance?: Maybe<LabelTemplateMapVarianceFields>,
};


export type LabelTemplateMapAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type LabelTemplateMapAggregateOrderBy = {
  avg?: Maybe<LabelTemplateMapAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<LabelTemplateMapMaxOrderBy>,
  min?: Maybe<LabelTemplateMapMinOrderBy>,
  stddev?: Maybe<LabelTemplateMapStddevOrderBy>,
  stddev_pop?: Maybe<LabelTemplateMapStddevPopOrderBy>,
  stddev_samp?: Maybe<LabelTemplateMapStddevSampOrderBy>,
  sum?: Maybe<LabelTemplateMapSumOrderBy>,
  var_pop?: Maybe<LabelTemplateMapVarPopOrderBy>,
  var_samp?: Maybe<LabelTemplateMapVarSampOrderBy>,
  variance?: Maybe<LabelTemplateMapVarianceOrderBy>,
};

export type LabelTemplateMapAppendInput = {
  criteria?: Maybe<Scalars['jsonb']>,
};

export type LabelTemplateMapArrRelInsertInput = {
  data: Array<LabelTemplateMapInsertInput>,
  on_conflict?: Maybe<LabelTemplateMapOnConflict>,
};

export type LabelTemplateMapAvgFields = {
   __typename?: 'label_template_map_avg_fields',
  item_id?: Maybe<Scalars['Float']>,
  sequence?: Maybe<Scalars['Float']>,
};

export type LabelTemplateMapAvgOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapBoolExp = {
  _and?: Maybe<Array<Maybe<LabelTemplateMapBoolExp>>>,
  _not?: Maybe<LabelTemplateMapBoolExp>,
  _or?: Maybe<Array<Maybe<LabelTemplateMapBoolExp>>>,
  criteria?: Maybe<JsonbComparisonExp>,
  item_class?: Maybe<StringComparisonExp>,
  item_id?: Maybe<IntComparisonExp>,
  label?: Maybe<LabelBoolExp>,
  label_id?: Maybe<UuidComparisonExp>,
  sequence?: Maybe<SmallintComparisonExp>,
};

export enum LabelTemplateMapConstraint {
  LABEL_TEMPLATE_MAP_ITEM_ID_LABEL_ID_KEY = 'label_template_map_item_id_label_id_key',
  LABEL_TEMPLATE_MAP_PKEY = 'label_template_map_pkey'
}

export type LabelTemplateMapDeleteAtPathInput = {
  criteria?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type LabelTemplateMapDeleteElemInput = {
  criteria?: Maybe<Scalars['Int']>,
};

export type LabelTemplateMapDeleteKeyInput = {
  criteria?: Maybe<Scalars['String']>,
};

export type LabelTemplateMapIncInput = {
  item_id?: Maybe<Scalars['Int']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type LabelTemplateMapInsertInput = {
  criteria?: Maybe<Scalars['jsonb']>,
  item_class?: Maybe<Scalars['String']>,
  item_id?: Maybe<Scalars['Int']>,
  label?: Maybe<LabelObjRelInsertInput>,
  label_id?: Maybe<Scalars['uuid']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type LabelTemplateMapMaxFields = {
   __typename?: 'label_template_map_max_fields',
  item_class?: Maybe<Scalars['String']>,
  item_id?: Maybe<Scalars['Int']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type LabelTemplateMapMaxOrderBy = {
  item_class?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapMinFields = {
   __typename?: 'label_template_map_min_fields',
  item_class?: Maybe<Scalars['String']>,
  item_id?: Maybe<Scalars['Int']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type LabelTemplateMapMinOrderBy = {
  item_class?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapMutationResponse = {
   __typename?: 'label_template_map_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<LabelTemplateMap>,
};

export type LabelTemplateMapObjRelInsertInput = {
  data: LabelTemplateMapInsertInput,
  on_conflict?: Maybe<LabelTemplateMapOnConflict>,
};

export type LabelTemplateMapOnConflict = {
  constraint: LabelTemplateMapConstraint,
  update_columns: Array<LabelTemplateMapUpdateColumn>,
  where?: Maybe<LabelTemplateMapBoolExp>,
};

export type LabelTemplateMapOrderBy = {
  criteria?: Maybe<OrderBy>,
  item_class?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  label?: Maybe<LabelOrderBy>,
  label_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapPrependInput = {
  criteria?: Maybe<Scalars['jsonb']>,
};

export enum LabelTemplateMapSelectColumn {
  CRITERIA = 'criteria',
  ITEM_CLASS = 'item_class',
  ITEM_ID = 'item_id',
  LABEL_ID = 'label_id',
  SEQUENCE = 'sequence'
}

export type LabelTemplateMapSetInput = {
  criteria?: Maybe<Scalars['jsonb']>,
  item_class?: Maybe<Scalars['String']>,
  item_id?: Maybe<Scalars['Int']>,
  label_id?: Maybe<Scalars['uuid']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type LabelTemplateMapStddevFields = {
   __typename?: 'label_template_map_stddev_fields',
  item_id?: Maybe<Scalars['Float']>,
  sequence?: Maybe<Scalars['Float']>,
};

export type LabelTemplateMapStddevOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapStddevPopFields = {
   __typename?: 'label_template_map_stddev_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  sequence?: Maybe<Scalars['Float']>,
};

export type LabelTemplateMapStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapStddevSampFields = {
   __typename?: 'label_template_map_stddev_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  sequence?: Maybe<Scalars['Float']>,
};

export type LabelTemplateMapStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapSumFields = {
   __typename?: 'label_template_map_sum_fields',
  item_id?: Maybe<Scalars['Int']>,
  sequence?: Maybe<Scalars['smallint']>,
};

export type LabelTemplateMapSumOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export enum LabelTemplateMapUpdateColumn {
  CRITERIA = 'criteria',
  ITEM_CLASS = 'item_class',
  ITEM_ID = 'item_id',
  LABEL_ID = 'label_id',
  SEQUENCE = 'sequence'
}

export type LabelTemplateMapVarPopFields = {
   __typename?: 'label_template_map_var_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  sequence?: Maybe<Scalars['Float']>,
};

export type LabelTemplateMapVarPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapVarSampFields = {
   __typename?: 'label_template_map_var_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  sequence?: Maybe<Scalars['Float']>,
};

export type LabelTemplateMapVarSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export type LabelTemplateMapVarianceFields = {
   __typename?: 'label_template_map_variance_fields',
  item_id?: Maybe<Scalars['Float']>,
  sequence?: Maybe<Scalars['Float']>,
};

export type LabelTemplateMapVarianceOrderBy = {
  item_id?: Maybe<OrderBy>,
  sequence?: Maybe<OrderBy>,
};

export enum LabelUpdateColumn {
  CONTENT = 'content',
  CREATED_AT = 'created_at',
  EDIT_OF_ID = 'edit_of_id',
  HEIGHT = 'height',
  ID = 'id',
  ITEM_ID = 'item_id',
  TITLE = 'title',
  UPDATED_AT = 'updated_at',
  WIDTH = 'width'
}

export type LabelVarPopFields = {
   __typename?: 'label_var_pop_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type LabelVarPopOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelVarSampFields = {
   __typename?: 'label_var_samp_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type LabelVarSampOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelVarianceFields = {
   __typename?: 'label_variance_fields',
  height?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type LabelVarianceOrderBy = {
  height?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  width?: Maybe<OrderBy>,
};

export type LabelCharacteristic = {
   __typename?: 'LabelCharacteristic',
  pinsLeft: Scalars['Int'],
  pinsPrint: Scalars['Int'],
  pinsRight: Scalars['Int'],
  widthMillimeters: Scalars['Int'],
};

export type Manufacturer = {
   __typename?: 'manufacturer',
  id: Scalars['Int'],
  name: Scalars['String'],
  url: Scalars['String'],
  vendor_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerAggregate = {
   __typename?: 'manufacturer_aggregate',
  aggregate?: Maybe<ManufacturerAggregateFields>,
  nodes: Array<Manufacturer>,
};

export type ManufacturerAggregateFields = {
   __typename?: 'manufacturer_aggregate_fields',
  avg?: Maybe<ManufacturerAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ManufacturerMaxFields>,
  min?: Maybe<ManufacturerMinFields>,
  stddev?: Maybe<ManufacturerStddevFields>,
  stddev_pop?: Maybe<ManufacturerStddevPopFields>,
  stddev_samp?: Maybe<ManufacturerStddevSampFields>,
  sum?: Maybe<ManufacturerSumFields>,
  var_pop?: Maybe<ManufacturerVarPopFields>,
  var_samp?: Maybe<ManufacturerVarSampFields>,
  variance?: Maybe<ManufacturerVarianceFields>,
};


export type ManufacturerAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ManufacturerSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type ManufacturerAggregateOrderBy = {
  avg?: Maybe<ManufacturerAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ManufacturerMaxOrderBy>,
  min?: Maybe<ManufacturerMinOrderBy>,
  stddev?: Maybe<ManufacturerStddevOrderBy>,
  stddev_pop?: Maybe<ManufacturerStddevPopOrderBy>,
  stddev_samp?: Maybe<ManufacturerStddevSampOrderBy>,
  sum?: Maybe<ManufacturerSumOrderBy>,
  var_pop?: Maybe<ManufacturerVarPopOrderBy>,
  var_samp?: Maybe<ManufacturerVarSampOrderBy>,
  variance?: Maybe<ManufacturerVarianceOrderBy>,
};

export type ManufacturerArrRelInsertInput = {
  data: Array<ManufacturerInsertInput>,
  on_conflict?: Maybe<ManufacturerOnConflict>,
};

export type ManufacturerAvgFields = {
   __typename?: 'manufacturer_avg_fields',
  id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerAvgOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerBoolExp = {
  _and?: Maybe<Array<Maybe<ManufacturerBoolExp>>>,
  _not?: Maybe<ManufacturerBoolExp>,
  _or?: Maybe<Array<Maybe<ManufacturerBoolExp>>>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
  url?: Maybe<StringComparisonExp>,
  vendor_id?: Maybe<IntComparisonExp>,
};

export enum ManufacturerConstraint {
  MANUFACTURER_PKEY = 'manufacturer_pkey',
  MANUFACTURER_VENDOR_ID_KEY = 'manufacturer_vendor_id_key'
}

export type ManufacturerIncInput = {
  id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerInsertInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerItem = {
   __typename?: 'manufacturer_item',
  id: Scalars['Int'],
  item_id: Scalars['Int'],
  manufacturer_id: Scalars['Int'],
  manufacturer_product_id: Scalars['String'],
  product_url: Scalars['String'],
};

export type ManufacturerItemAggregate = {
   __typename?: 'manufacturer_item_aggregate',
  aggregate?: Maybe<ManufacturerItemAggregateFields>,
  nodes: Array<ManufacturerItem>,
};

export type ManufacturerItemAggregateFields = {
   __typename?: 'manufacturer_item_aggregate_fields',
  avg?: Maybe<ManufacturerItemAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ManufacturerItemMaxFields>,
  min?: Maybe<ManufacturerItemMinFields>,
  stddev?: Maybe<ManufacturerItemStddevFields>,
  stddev_pop?: Maybe<ManufacturerItemStddevPopFields>,
  stddev_samp?: Maybe<ManufacturerItemStddevSampFields>,
  sum?: Maybe<ManufacturerItemSumFields>,
  var_pop?: Maybe<ManufacturerItemVarPopFields>,
  var_samp?: Maybe<ManufacturerItemVarSampFields>,
  variance?: Maybe<ManufacturerItemVarianceFields>,
};


export type ManufacturerItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ManufacturerItemSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type ManufacturerItemAggregateOrderBy = {
  avg?: Maybe<ManufacturerItemAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ManufacturerItemMaxOrderBy>,
  min?: Maybe<ManufacturerItemMinOrderBy>,
  stddev?: Maybe<ManufacturerItemStddevOrderBy>,
  stddev_pop?: Maybe<ManufacturerItemStddevPopOrderBy>,
  stddev_samp?: Maybe<ManufacturerItemStddevSampOrderBy>,
  sum?: Maybe<ManufacturerItemSumOrderBy>,
  var_pop?: Maybe<ManufacturerItemVarPopOrderBy>,
  var_samp?: Maybe<ManufacturerItemVarSampOrderBy>,
  variance?: Maybe<ManufacturerItemVarianceOrderBy>,
};

export type ManufacturerItemArrRelInsertInput = {
  data: Array<ManufacturerItemInsertInput>,
  on_conflict?: Maybe<ManufacturerItemOnConflict>,
};

export type ManufacturerItemAvgFields = {
   __typename?: 'manufacturer_item_avg_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerItemAvgOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export type ManufacturerItemBoolExp = {
  _and?: Maybe<Array<Maybe<ManufacturerItemBoolExp>>>,
  _not?: Maybe<ManufacturerItemBoolExp>,
  _or?: Maybe<Array<Maybe<ManufacturerItemBoolExp>>>,
  id?: Maybe<IntComparisonExp>,
  item_id?: Maybe<IntComparisonExp>,
  manufacturer_id?: Maybe<IntComparisonExp>,
  manufacturer_product_id?: Maybe<StringComparisonExp>,
  product_url?: Maybe<StringComparisonExp>,
};

export enum ManufacturerItemConstraint {
  MANUFACTURER_ITEM_PKEY = 'manufacturer_item_pkey'
}

export type ManufacturerItemIncInput = {
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerItemInsertInput = {
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_product_id?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
};

export type ManufacturerItemMaxFields = {
   __typename?: 'manufacturer_item_max_fields',
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_product_id?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
};

export type ManufacturerItemMaxOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  manufacturer_product_id?: Maybe<OrderBy>,
  product_url?: Maybe<OrderBy>,
};

export type ManufacturerItemMinFields = {
   __typename?: 'manufacturer_item_min_fields',
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_product_id?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
};

export type ManufacturerItemMinOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  manufacturer_product_id?: Maybe<OrderBy>,
  product_url?: Maybe<OrderBy>,
};

export type ManufacturerItemMutationResponse = {
   __typename?: 'manufacturer_item_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<ManufacturerItem>,
};

export type ManufacturerItemObjRelInsertInput = {
  data: ManufacturerItemInsertInput,
  on_conflict?: Maybe<ManufacturerItemOnConflict>,
};

export type ManufacturerItemOnConflict = {
  constraint: ManufacturerItemConstraint,
  update_columns: Array<ManufacturerItemUpdateColumn>,
  where?: Maybe<ManufacturerItemBoolExp>,
};

export type ManufacturerItemOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
  manufacturer_product_id?: Maybe<OrderBy>,
  product_url?: Maybe<OrderBy>,
};

export enum ManufacturerItemSelectColumn {
  ID = 'id',
  ITEM_ID = 'item_id',
  MANUFACTURER_ID = 'manufacturer_id',
  MANUFACTURER_PRODUCT_ID = 'manufacturer_product_id',
  PRODUCT_URL = 'product_url'
}

export type ManufacturerItemSetInput = {
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
  manufacturer_product_id?: Maybe<Scalars['String']>,
  product_url?: Maybe<Scalars['String']>,
};

export type ManufacturerItemStddevFields = {
   __typename?: 'manufacturer_item_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerItemStddevOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export type ManufacturerItemStddevPopFields = {
   __typename?: 'manufacturer_item_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export type ManufacturerItemStddevSampFields = {
   __typename?: 'manufacturer_item_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export type ManufacturerItemSumFields = {
   __typename?: 'manufacturer_item_sum_fields',
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerItemSumOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export enum ManufacturerItemUpdateColumn {
  ID = 'id',
  ITEM_ID = 'item_id',
  MANUFACTURER_ID = 'manufacturer_id',
  MANUFACTURER_PRODUCT_ID = 'manufacturer_product_id',
  PRODUCT_URL = 'product_url'
}

export type ManufacturerItemVarPopFields = {
   __typename?: 'manufacturer_item_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerItemVarPopOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export type ManufacturerItemVarSampFields = {
   __typename?: 'manufacturer_item_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerItemVarSampOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export type ManufacturerItemVarianceFields = {
   __typename?: 'manufacturer_item_variance_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerItemVarianceOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_id?: Maybe<OrderBy>,
};

export type ManufacturerMaxFields = {
   __typename?: 'manufacturer_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerMaxOrderBy = {
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerMinFields = {
   __typename?: 'manufacturer_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerMinOrderBy = {
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerMutationResponse = {
   __typename?: 'manufacturer_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Manufacturer>,
};

export type ManufacturerObjRelInsertInput = {
  data: ManufacturerInsertInput,
  on_conflict?: Maybe<ManufacturerOnConflict>,
};

export type ManufacturerOnConflict = {
  constraint: ManufacturerConstraint,
  update_columns: Array<ManufacturerUpdateColumn>,
  where?: Maybe<ManufacturerBoolExp>,
};

export type ManufacturerOrderBy = {
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export enum ManufacturerSelectColumn {
  ID = 'id',
  NAME = 'name',
  URL = 'url',
  VENDOR_ID = 'vendor_id'
}

export type ManufacturerSetInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerStddevFields = {
   __typename?: 'manufacturer_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerStddevOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerStddevPopFields = {
   __typename?: 'manufacturer_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerStddevSampFields = {
   __typename?: 'manufacturer_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerSumFields = {
   __typename?: 'manufacturer_sum_fields',
  id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type ManufacturerSumOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export enum ManufacturerUpdateColumn {
  ID = 'id',
  NAME = 'name',
  URL = 'url',
  VENDOR_ID = 'vendor_id'
}

export type ManufacturerVarPopFields = {
   __typename?: 'manufacturer_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerVarPopOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerVarSampFields = {
   __typename?: 'manufacturer_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerVarSampOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type ManufacturerVarianceFields = {
   __typename?: 'manufacturer_variance_fields',
  id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type ManufacturerVarianceOrderBy = {
  id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
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
  putLabelMonochromeBuffer?: Maybe<OperationResult>,
  uploadFiles: Array<Maybe<File>>,
};


export type MutationPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};


export type MutationUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>
};

export type MutationRoot = {
   __typename?: 'mutation_root',
  delete_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>,
  delete_enum_hardware_fastener_screw_point?: Maybe<EnumHardwareFastenerScrewPointMutationResponse>,
  delete_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>,
  delete_enum_icon_category?: Maybe<EnumIconCategoryMutationResponse>,
  delete_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>,
  delete_enum_unit?: Maybe<EnumUnitMutationResponse>,
  delete_icon?: Maybe<IconMutationResponse>,
  delete_icon_item_category_map?: Maybe<IconItemCategoryMapMutationResponse>,
  delete_icon_label_map?: Maybe<IconLabelMapMutationResponse>,
  delete_item?: Maybe<ItemMutationResponse>,
  delete_item_bundle?: Maybe<ItemBundleMutationResponse>,
  delete_item_bundle_map?: Maybe<ItemBundleMapMutationResponse>,
  delete_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>,
  delete_item_hardware_nut?: Maybe<ItemHardwareNutMutationResponse>,
  delete_label?: Maybe<LabelMutationResponse>,
  delete_label_item_map?: Maybe<LabelItemMapMutationResponse>,
  delete_label_template_map?: Maybe<LabelTemplateMapMutationResponse>,
  delete_manufacturer?: Maybe<ManufacturerMutationResponse>,
  delete_manufacturer_item?: Maybe<ManufacturerItemMutationResponse>,
  delete_order?: Maybe<OrderMutationResponse>,
  delete_order_item?: Maybe<OrderItemMutationResponse>,
  delete_payment_method?: Maybe<PaymentMethodMutationResponse>,
  delete_shipment?: Maybe<ShipmentMutationResponse>,
  delete_vendor?: Maybe<VendorMutationResponse>,
  delete_vendor_item?: Maybe<VendorItemMutationResponse>,
  insert_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>,
  insert_enum_hardware_fastener_screw_point?: Maybe<EnumHardwareFastenerScrewPointMutationResponse>,
  insert_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>,
  insert_enum_icon_category?: Maybe<EnumIconCategoryMutationResponse>,
  insert_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>,
  insert_enum_unit?: Maybe<EnumUnitMutationResponse>,
  insert_icon?: Maybe<IconMutationResponse>,
  insert_icon_item_category_map?: Maybe<IconItemCategoryMapMutationResponse>,
  insert_icon_label_map?: Maybe<IconLabelMapMutationResponse>,
  insert_item?: Maybe<ItemMutationResponse>,
  insert_item_bundle?: Maybe<ItemBundleMutationResponse>,
  insert_item_bundle_map?: Maybe<ItemBundleMapMutationResponse>,
  insert_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>,
  insert_item_hardware_nut?: Maybe<ItemHardwareNutMutationResponse>,
  insert_label?: Maybe<LabelMutationResponse>,
  insert_label_item_map?: Maybe<LabelItemMapMutationResponse>,
  insert_label_template_map?: Maybe<LabelTemplateMapMutationResponse>,
  insert_manufacturer?: Maybe<ManufacturerMutationResponse>,
  insert_manufacturer_item?: Maybe<ManufacturerItemMutationResponse>,
  insert_order?: Maybe<OrderMutationResponse>,
  insert_order_item?: Maybe<OrderItemMutationResponse>,
  insert_payment_method?: Maybe<PaymentMethodMutationResponse>,
  insert_shipment?: Maybe<ShipmentMutationResponse>,
  insert_vendor?: Maybe<VendorMutationResponse>,
  insert_vendor_item?: Maybe<VendorItemMutationResponse>,
  putLabelMonochromeBuffer?: Maybe<OperationResult>,
  update_enum_hardware_fastener_material?: Maybe<EnumHardwareFastenerMaterialMutationResponse>,
  update_enum_hardware_fastener_screw_point?: Maybe<EnumHardwareFastenerScrewPointMutationResponse>,
  update_enum_hardware_finish?: Maybe<EnumHardwareFinishMutationResponse>,
  update_enum_icon_category?: Maybe<EnumIconCategoryMutationResponse>,
  update_enum_payment_method_type?: Maybe<EnumPaymentMethodTypeMutationResponse>,
  update_enum_unit?: Maybe<EnumUnitMutationResponse>,
  update_icon?: Maybe<IconMutationResponse>,
  update_icon_item_category_map?: Maybe<IconItemCategoryMapMutationResponse>,
  update_icon_label_map?: Maybe<IconLabelMapMutationResponse>,
  update_item?: Maybe<ItemMutationResponse>,
  update_item_bundle?: Maybe<ItemBundleMutationResponse>,
  update_item_bundle_map?: Maybe<ItemBundleMapMutationResponse>,
  update_item_hardware_fastener_bolt?: Maybe<ItemHardwareFastenerBoltMutationResponse>,
  update_item_hardware_nut?: Maybe<ItemHardwareNutMutationResponse>,
  update_label?: Maybe<LabelMutationResponse>,
  update_label_item_map?: Maybe<LabelItemMapMutationResponse>,
  update_label_template_map?: Maybe<LabelTemplateMapMutationResponse>,
  update_manufacturer?: Maybe<ManufacturerMutationResponse>,
  update_manufacturer_item?: Maybe<ManufacturerItemMutationResponse>,
  update_order?: Maybe<OrderMutationResponse>,
  update_order_item?: Maybe<OrderItemMutationResponse>,
  update_payment_method?: Maybe<PaymentMethodMutationResponse>,
  update_shipment?: Maybe<ShipmentMutationResponse>,
  update_vendor?: Maybe<VendorMutationResponse>,
  update_vendor_item?: Maybe<VendorItemMutationResponse>,
  uploadFiles: Array<Maybe<File>>,
};


export type MutationRootDeleteEnumHardwareFastenerMaterialArgs = {
  where: EnumHardwareFastenerMaterialBoolExp
};


export type MutationRootDeleteEnumHardwareFastenerScrewPointArgs = {
  where: EnumHardwareFastenerScrewPointBoolExp
};


export type MutationRootDeleteEnumHardwareFinishArgs = {
  where: EnumHardwareFinishBoolExp
};


export type MutationRootDeleteEnumIconCategoryArgs = {
  where: EnumIconCategoryBoolExp
};


export type MutationRootDeleteEnumPaymentMethodTypeArgs = {
  where: EnumPaymentMethodTypeBoolExp
};


export type MutationRootDeleteEnumUnitArgs = {
  where: EnumUnitBoolExp
};


export type MutationRootDeleteIconArgs = {
  where: IconBoolExp
};


export type MutationRootDeleteIconItemCategoryMapArgs = {
  where: IconItemCategoryMapBoolExp
};


export type MutationRootDeleteIconLabelMapArgs = {
  where: IconLabelMapBoolExp
};


export type MutationRootDeleteItemArgs = {
  where: ItemBoolExp
};


export type MutationRootDeleteItemBundleArgs = {
  where: ItemBundleBoolExp
};


export type MutationRootDeleteItemBundleMapArgs = {
  where: ItemBundleMapBoolExp
};


export type MutationRootDeleteItemHardwareFastenerBoltArgs = {
  where: ItemHardwareFastenerBoltBoolExp
};


export type MutationRootDeleteItemHardwareNutArgs = {
  where: ItemHardwareNutBoolExp
};


export type MutationRootDeleteLabelArgs = {
  where: LabelBoolExp
};


export type MutationRootDeleteLabelItemMapArgs = {
  where: LabelItemMapBoolExp
};


export type MutationRootDeleteLabelTemplateMapArgs = {
  where: LabelTemplateMapBoolExp
};


export type MutationRootDeleteManufacturerArgs = {
  where: ManufacturerBoolExp
};


export type MutationRootDeleteManufacturerItemArgs = {
  where: ManufacturerItemBoolExp
};


export type MutationRootDeleteOrderArgs = {
  where: OrderBoolExp
};


export type MutationRootDeleteOrderItemArgs = {
  where: OrderItemBoolExp
};


export type MutationRootDeletePaymentMethodArgs = {
  where: PaymentMethodBoolExp
};


export type MutationRootDeleteShipmentArgs = {
  where: ShipmentBoolExp
};


export type MutationRootDeleteVendorArgs = {
  where: VendorBoolExp
};


export type MutationRootDeleteVendorItemArgs = {
  where: VendorItemBoolExp
};


export type MutationRootInsertEnumHardwareFastenerMaterialArgs = {
  objects: Array<EnumHardwareFastenerMaterialInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerMaterialOnConflict>
};


export type MutationRootInsertEnumHardwareFastenerScrewPointArgs = {
  objects: Array<EnumHardwareFastenerScrewPointInsertInput>,
  on_conflict?: Maybe<EnumHardwareFastenerScrewPointOnConflict>
};


export type MutationRootInsertEnumHardwareFinishArgs = {
  objects: Array<EnumHardwareFinishInsertInput>,
  on_conflict?: Maybe<EnumHardwareFinishOnConflict>
};


export type MutationRootInsertEnumIconCategoryArgs = {
  objects: Array<EnumIconCategoryInsertInput>,
  on_conflict?: Maybe<EnumIconCategoryOnConflict>
};


export type MutationRootInsertEnumPaymentMethodTypeArgs = {
  objects: Array<EnumPaymentMethodTypeInsertInput>,
  on_conflict?: Maybe<EnumPaymentMethodTypeOnConflict>
};


export type MutationRootInsertEnumUnitArgs = {
  objects: Array<EnumUnitInsertInput>,
  on_conflict?: Maybe<EnumUnitOnConflict>
};


export type MutationRootInsertIconArgs = {
  objects: Array<IconInsertInput>,
  on_conflict?: Maybe<IconOnConflict>
};


export type MutationRootInsertIconItemCategoryMapArgs = {
  objects: Array<IconItemCategoryMapInsertInput>,
  on_conflict?: Maybe<IconItemCategoryMapOnConflict>
};


export type MutationRootInsertIconLabelMapArgs = {
  objects: Array<IconLabelMapInsertInput>,
  on_conflict?: Maybe<IconLabelMapOnConflict>
};


export type MutationRootInsertItemArgs = {
  objects: Array<ItemInsertInput>,
  on_conflict?: Maybe<ItemOnConflict>
};


export type MutationRootInsertItemBundleArgs = {
  objects: Array<ItemBundleInsertInput>,
  on_conflict?: Maybe<ItemBundleOnConflict>
};


export type MutationRootInsertItemBundleMapArgs = {
  objects: Array<ItemBundleMapInsertInput>,
  on_conflict?: Maybe<ItemBundleMapOnConflict>
};


export type MutationRootInsertItemHardwareFastenerBoltArgs = {
  objects: Array<ItemHardwareFastenerBoltInsertInput>,
  on_conflict?: Maybe<ItemHardwareFastenerBoltOnConflict>
};


export type MutationRootInsertItemHardwareNutArgs = {
  objects: Array<ItemHardwareNutInsertInput>,
  on_conflict?: Maybe<ItemHardwareNutOnConflict>
};


export type MutationRootInsertLabelArgs = {
  objects: Array<LabelInsertInput>,
  on_conflict?: Maybe<LabelOnConflict>
};


export type MutationRootInsertLabelItemMapArgs = {
  objects: Array<LabelItemMapInsertInput>,
  on_conflict?: Maybe<LabelItemMapOnConflict>
};


export type MutationRootInsertLabelTemplateMapArgs = {
  objects: Array<LabelTemplateMapInsertInput>,
  on_conflict?: Maybe<LabelTemplateMapOnConflict>
};


export type MutationRootInsertManufacturerArgs = {
  objects: Array<ManufacturerInsertInput>,
  on_conflict?: Maybe<ManufacturerOnConflict>
};


export type MutationRootInsertManufacturerItemArgs = {
  objects: Array<ManufacturerItemInsertInput>,
  on_conflict?: Maybe<ManufacturerItemOnConflict>
};


export type MutationRootInsertOrderArgs = {
  objects: Array<OrderInsertInput>,
  on_conflict?: Maybe<OrderOnConflict>
};


export type MutationRootInsertOrderItemArgs = {
  objects: Array<OrderItemInsertInput>,
  on_conflict?: Maybe<OrderItemOnConflict>
};


export type MutationRootInsertPaymentMethodArgs = {
  objects: Array<PaymentMethodInsertInput>,
  on_conflict?: Maybe<PaymentMethodOnConflict>
};


export type MutationRootInsertShipmentArgs = {
  objects: Array<ShipmentInsertInput>,
  on_conflict?: Maybe<ShipmentOnConflict>
};


export type MutationRootInsertVendorArgs = {
  objects: Array<VendorInsertInput>,
  on_conflict?: Maybe<VendorOnConflict>
};


export type MutationRootInsertVendorItemArgs = {
  objects: Array<VendorItemInsertInput>,
  on_conflict?: Maybe<VendorItemOnConflict>
};


export type MutationRootPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};


export type MutationRootUpdateEnumHardwareFastenerMaterialArgs = {
  _set?: Maybe<EnumHardwareFastenerMaterialSetInput>,
  where: EnumHardwareFastenerMaterialBoolExp
};


export type MutationRootUpdateEnumHardwareFastenerScrewPointArgs = {
  _set?: Maybe<EnumHardwareFastenerScrewPointSetInput>,
  where: EnumHardwareFastenerScrewPointBoolExp
};


export type MutationRootUpdateEnumHardwareFinishArgs = {
  _set?: Maybe<EnumHardwareFinishSetInput>,
  where: EnumHardwareFinishBoolExp
};


export type MutationRootUpdateEnumIconCategoryArgs = {
  _set?: Maybe<EnumIconCategorySetInput>,
  where: EnumIconCategoryBoolExp
};


export type MutationRootUpdateEnumPaymentMethodTypeArgs = {
  _set?: Maybe<EnumPaymentMethodTypeSetInput>,
  where: EnumPaymentMethodTypeBoolExp
};


export type MutationRootUpdateEnumUnitArgs = {
  _set?: Maybe<EnumUnitSetInput>,
  where: EnumUnitBoolExp
};


export type MutationRootUpdateIconArgs = {
  _set?: Maybe<IconSetInput>,
  where: IconBoolExp
};


export type MutationRootUpdateIconItemCategoryMapArgs = {
  _append?: Maybe<IconItemCategoryMapAppendInput>,
  _delete_at_path?: Maybe<IconItemCategoryMapDeleteAtPathInput>,
  _delete_elem?: Maybe<IconItemCategoryMapDeleteElemInput>,
  _delete_key?: Maybe<IconItemCategoryMapDeleteKeyInput>,
  _inc?: Maybe<IconItemCategoryMapIncInput>,
  _prepend?: Maybe<IconItemCategoryMapPrependInput>,
  _set?: Maybe<IconItemCategoryMapSetInput>,
  where: IconItemCategoryMapBoolExp
};


export type MutationRootUpdateIconLabelMapArgs = {
  _set?: Maybe<IconLabelMapSetInput>,
  where: IconLabelMapBoolExp
};


export type MutationRootUpdateItemArgs = {
  _append?: Maybe<ItemAppendInput>,
  _delete_at_path?: Maybe<ItemDeleteAtPathInput>,
  _delete_elem?: Maybe<ItemDeleteElemInput>,
  _delete_key?: Maybe<ItemDeleteKeyInput>,
  _inc?: Maybe<ItemIncInput>,
  _prepend?: Maybe<ItemPrependInput>,
  _set?: Maybe<ItemSetInput>,
  where: ItemBoolExp
};


export type MutationRootUpdateItemBundleArgs = {
  _inc?: Maybe<ItemBundleIncInput>,
  _set?: Maybe<ItemBundleSetInput>,
  where: ItemBundleBoolExp
};


export type MutationRootUpdateItemBundleMapArgs = {
  _inc?: Maybe<ItemBundleMapIncInput>,
  _set?: Maybe<ItemBundleMapSetInput>,
  where: ItemBundleMapBoolExp
};


export type MutationRootUpdateItemHardwareFastenerBoltArgs = {
  _inc?: Maybe<ItemHardwareFastenerBoltIncInput>,
  _set?: Maybe<ItemHardwareFastenerBoltSetInput>,
  where: ItemHardwareFastenerBoltBoolExp
};


export type MutationRootUpdateItemHardwareNutArgs = {
  _inc?: Maybe<ItemHardwareNutIncInput>,
  _set?: Maybe<ItemHardwareNutSetInput>,
  where: ItemHardwareNutBoolExp
};


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


export type MutationRootUpdateLabelItemMapArgs = {
  _inc?: Maybe<LabelItemMapIncInput>,
  _set?: Maybe<LabelItemMapSetInput>,
  where: LabelItemMapBoolExp
};


export type MutationRootUpdateLabelTemplateMapArgs = {
  _append?: Maybe<LabelTemplateMapAppendInput>,
  _delete_at_path?: Maybe<LabelTemplateMapDeleteAtPathInput>,
  _delete_elem?: Maybe<LabelTemplateMapDeleteElemInput>,
  _delete_key?: Maybe<LabelTemplateMapDeleteKeyInput>,
  _inc?: Maybe<LabelTemplateMapIncInput>,
  _prepend?: Maybe<LabelTemplateMapPrependInput>,
  _set?: Maybe<LabelTemplateMapSetInput>,
  where: LabelTemplateMapBoolExp
};


export type MutationRootUpdateManufacturerArgs = {
  _inc?: Maybe<ManufacturerIncInput>,
  _set?: Maybe<ManufacturerSetInput>,
  where: ManufacturerBoolExp
};


export type MutationRootUpdateManufacturerItemArgs = {
  _inc?: Maybe<ManufacturerItemIncInput>,
  _set?: Maybe<ManufacturerItemSetInput>,
  where: ManufacturerItemBoolExp
};


export type MutationRootUpdateOrderArgs = {
  _inc?: Maybe<OrderIncInput>,
  _set?: Maybe<OrderSetInput>,
  where: OrderBoolExp
};


export type MutationRootUpdateOrderItemArgs = {
  _inc?: Maybe<OrderItemIncInput>,
  _set?: Maybe<OrderItemSetInput>,
  where: OrderItemBoolExp
};


export type MutationRootUpdatePaymentMethodArgs = {
  _inc?: Maybe<PaymentMethodIncInput>,
  _set?: Maybe<PaymentMethodSetInput>,
  where: PaymentMethodBoolExp
};


export type MutationRootUpdateShipmentArgs = {
  _inc?: Maybe<ShipmentIncInput>,
  _set?: Maybe<ShipmentSetInput>,
  where: ShipmentBoolExp
};


export type MutationRootUpdateVendorArgs = {
  _inc?: Maybe<VendorIncInput>,
  _set?: Maybe<VendorSetInput>,
  where: VendorBoolExp
};


export type MutationRootUpdateVendorItemArgs = {
  _inc?: Maybe<VendorItemIncInput>,
  _set?: Maybe<VendorItemSetInput>,
  where: VendorItemBoolExp
};


export type MutationRootUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>
};


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

export type Order = {
   __typename?: 'order',
  fulfilled_date?: Maybe<Scalars['date']>,
  id: Scalars['Int'],
  items_cost: Scalars['money'],
  payment_method_id?: Maybe<Scalars['Int']>,
  placed_date: Scalars['date'],
  pon?: Maybe<Scalars['String']>,
  tax_cost: Scalars['money'],
  total_cost: Scalars['money'],
  url?: Maybe<Scalars['String']>,
  vendor_id: Scalars['Int'],
  vendor_order_id: Scalars['String'],
};

export type OrderAggregate = {
   __typename?: 'order_aggregate',
  aggregate?: Maybe<OrderAggregateFields>,
  nodes: Array<Order>,
};

export type OrderAggregateFields = {
   __typename?: 'order_aggregate_fields',
  avg?: Maybe<OrderAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<OrderMaxFields>,
  min?: Maybe<OrderMinFields>,
  stddev?: Maybe<OrderStddevFields>,
  stddev_pop?: Maybe<OrderStddevPopFields>,
  stddev_samp?: Maybe<OrderStddevSampFields>,
  sum?: Maybe<OrderSumFields>,
  var_pop?: Maybe<OrderVarPopFields>,
  var_samp?: Maybe<OrderVarSampFields>,
  variance?: Maybe<OrderVarianceFields>,
};


export type OrderAggregateFieldsCountArgs = {
  columns?: Maybe<Array<OrderSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type OrderAggregateOrderBy = {
  avg?: Maybe<OrderAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<OrderMaxOrderBy>,
  min?: Maybe<OrderMinOrderBy>,
  stddev?: Maybe<OrderStddevOrderBy>,
  stddev_pop?: Maybe<OrderStddevPopOrderBy>,
  stddev_samp?: Maybe<OrderStddevSampOrderBy>,
  sum?: Maybe<OrderSumOrderBy>,
  var_pop?: Maybe<OrderVarPopOrderBy>,
  var_samp?: Maybe<OrderVarSampOrderBy>,
  variance?: Maybe<OrderVarianceOrderBy>,
};

export type OrderArrRelInsertInput = {
  data: Array<OrderInsertInput>,
  on_conflict?: Maybe<OrderOnConflict>,
};

export type OrderAvgFields = {
   __typename?: 'order_avg_fields',
  id?: Maybe<Scalars['Float']>,
  payment_method_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type OrderAvgOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type OrderBoolExp = {
  _and?: Maybe<Array<Maybe<OrderBoolExp>>>,
  _not?: Maybe<OrderBoolExp>,
  _or?: Maybe<Array<Maybe<OrderBoolExp>>>,
  fulfilled_date?: Maybe<DateComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  items_cost?: Maybe<MoneyComparisonExp>,
  payment_method_id?: Maybe<IntComparisonExp>,
  placed_date?: Maybe<DateComparisonExp>,
  pon?: Maybe<StringComparisonExp>,
  tax_cost?: Maybe<MoneyComparisonExp>,
  total_cost?: Maybe<MoneyComparisonExp>,
  url?: Maybe<StringComparisonExp>,
  vendor_id?: Maybe<IntComparisonExp>,
  vendor_order_id?: Maybe<StringComparisonExp>,
};

export enum OrderBy {
  ASC = 'asc',
  ASC_NULLS_FIRST = 'asc_nulls_first',
  ASC_NULLS_LAST = 'asc_nulls_last',
  DESC = 'desc',
  DESC_NULLS_FIRST = 'desc_nulls_first',
  DESC_NULLS_LAST = 'desc_nulls_last'
}

export enum OrderConstraint {
  ORDER_PKEY = 'order_pkey'
}

export type OrderIncInput = {
  id?: Maybe<Scalars['Int']>,
  payment_method_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type OrderInsertInput = {
  fulfilled_date?: Maybe<Scalars['date']>,
  id?: Maybe<Scalars['Int']>,
  items_cost?: Maybe<Scalars['money']>,
  payment_method_id?: Maybe<Scalars['Int']>,
  placed_date?: Maybe<Scalars['date']>,
  pon?: Maybe<Scalars['String']>,
  tax_cost?: Maybe<Scalars['money']>,
  total_cost?: Maybe<Scalars['money']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_order_id?: Maybe<Scalars['String']>,
};

export type OrderItem = {
   __typename?: 'order_item',
  cost_item: Scalars['money'],
  cost_tax?: Maybe<Scalars['money']>,
  cost_total?: Maybe<Scalars['money']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_item_id: Scalars['Int'],
  order_id: Scalars['Int'],
  qty?: Maybe<Scalars['numeric']>,
  serial_no: Scalars['String'],
  shipment_id?: Maybe<Scalars['Int']>,
  vendor_item_id: Scalars['Int'],
};

export type OrderItemAggregate = {
   __typename?: 'order_item_aggregate',
  aggregate?: Maybe<OrderItemAggregateFields>,
  nodes: Array<OrderItem>,
};

export type OrderItemAggregateFields = {
   __typename?: 'order_item_aggregate_fields',
  avg?: Maybe<OrderItemAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<OrderItemMaxFields>,
  min?: Maybe<OrderItemMinFields>,
  stddev?: Maybe<OrderItemStddevFields>,
  stddev_pop?: Maybe<OrderItemStddevPopFields>,
  stddev_samp?: Maybe<OrderItemStddevSampFields>,
  sum?: Maybe<OrderItemSumFields>,
  var_pop?: Maybe<OrderItemVarPopFields>,
  var_samp?: Maybe<OrderItemVarSampFields>,
  variance?: Maybe<OrderItemVarianceFields>,
};


export type OrderItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<OrderItemSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type OrderItemAggregateOrderBy = {
  avg?: Maybe<OrderItemAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<OrderItemMaxOrderBy>,
  min?: Maybe<OrderItemMinOrderBy>,
  stddev?: Maybe<OrderItemStddevOrderBy>,
  stddev_pop?: Maybe<OrderItemStddevPopOrderBy>,
  stddev_samp?: Maybe<OrderItemStddevSampOrderBy>,
  sum?: Maybe<OrderItemSumOrderBy>,
  var_pop?: Maybe<OrderItemVarPopOrderBy>,
  var_samp?: Maybe<OrderItemVarSampOrderBy>,
  variance?: Maybe<OrderItemVarianceOrderBy>,
};

export type OrderItemArrRelInsertInput = {
  data: Array<OrderItemInsertInput>,
  on_conflict?: Maybe<OrderItemOnConflict>,
};

export type OrderItemAvgFields = {
   __typename?: 'order_item_avg_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_item_id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
  qty?: Maybe<Scalars['Float']>,
  shipment_id?: Maybe<Scalars['Float']>,
  vendor_item_id?: Maybe<Scalars['Float']>,
};

export type OrderItemAvgOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemBoolExp = {
  _and?: Maybe<Array<Maybe<OrderItemBoolExp>>>,
  _not?: Maybe<OrderItemBoolExp>,
  _or?: Maybe<Array<Maybe<OrderItemBoolExp>>>,
  cost_item?: Maybe<MoneyComparisonExp>,
  cost_tax?: Maybe<MoneyComparisonExp>,
  cost_total?: Maybe<MoneyComparisonExp>,
  item_id?: Maybe<IntComparisonExp>,
  manufacturer_item_id?: Maybe<IntComparisonExp>,
  order_id?: Maybe<IntComparisonExp>,
  qty?: Maybe<NumericComparisonExp>,
  serial_no?: Maybe<StringComparisonExp>,
  shipment_id?: Maybe<IntComparisonExp>,
  vendor_item_id?: Maybe<IntComparisonExp>,
};

export enum OrderItemConstraint {
  ORDER_ITEM_PKEY = 'order_item_pkey',
  ORDER_ITEM_VENDOR_ITEM_ID_ORDER_ID_SERIAL_NO_KEY = 'order_item_vendor_item_id_order_id_serial_no_key'
}

export type OrderItemIncInput = {
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_item_id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  shipment_id?: Maybe<Scalars['Int']>,
  vendor_item_id?: Maybe<Scalars['Int']>,
};

export type OrderItemInsertInput = {
  cost_item?: Maybe<Scalars['money']>,
  cost_tax?: Maybe<Scalars['money']>,
  cost_total?: Maybe<Scalars['money']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_item_id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  qty?: Maybe<Scalars['numeric']>,
  serial_no?: Maybe<Scalars['String']>,
  shipment_id?: Maybe<Scalars['Int']>,
  vendor_item_id?: Maybe<Scalars['Int']>,
};

export type OrderItemMaxFields = {
   __typename?: 'order_item_max_fields',
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_item_id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  qty?: Maybe<Scalars['numeric']>,
  serial_no?: Maybe<Scalars['String']>,
  shipment_id?: Maybe<Scalars['Int']>,
  vendor_item_id?: Maybe<Scalars['Int']>,
};

export type OrderItemMaxOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  serial_no?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemMinFields = {
   __typename?: 'order_item_min_fields',
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_item_id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  qty?: Maybe<Scalars['numeric']>,
  serial_no?: Maybe<Scalars['String']>,
  shipment_id?: Maybe<Scalars['Int']>,
  vendor_item_id?: Maybe<Scalars['Int']>,
};

export type OrderItemMinOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  serial_no?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemMutationResponse = {
   __typename?: 'order_item_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<OrderItem>,
};

export type OrderItemObjRelInsertInput = {
  data: OrderItemInsertInput,
  on_conflict?: Maybe<OrderItemOnConflict>,
};

export type OrderItemOnConflict = {
  constraint: OrderItemConstraint,
  update_columns: Array<OrderItemUpdateColumn>,
  where?: Maybe<OrderItemBoolExp>,
};

export type OrderItemOrderBy = {
  cost_item?: Maybe<OrderBy>,
  cost_tax?: Maybe<OrderBy>,
  cost_total?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  serial_no?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export enum OrderItemSelectColumn {
  COST_ITEM = 'cost_item',
  COST_TAX = 'cost_tax',
  COST_TOTAL = 'cost_total',
  ITEM_ID = 'item_id',
  MANUFACTURER_ITEM_ID = 'manufacturer_item_id',
  ORDER_ID = 'order_id',
  QTY = 'qty',
  SERIAL_NO = 'serial_no',
  SHIPMENT_ID = 'shipment_id',
  VENDOR_ITEM_ID = 'vendor_item_id'
}

export type OrderItemSetInput = {
  cost_item?: Maybe<Scalars['money']>,
  cost_tax?: Maybe<Scalars['money']>,
  cost_total?: Maybe<Scalars['money']>,
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_item_id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  qty?: Maybe<Scalars['numeric']>,
  serial_no?: Maybe<Scalars['String']>,
  shipment_id?: Maybe<Scalars['Int']>,
  vendor_item_id?: Maybe<Scalars['Int']>,
};

export type OrderItemStddevFields = {
   __typename?: 'order_item_stddev_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_item_id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
  qty?: Maybe<Scalars['Float']>,
  shipment_id?: Maybe<Scalars['Float']>,
  vendor_item_id?: Maybe<Scalars['Float']>,
};

export type OrderItemStddevOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemStddevPopFields = {
   __typename?: 'order_item_stddev_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_item_id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
  qty?: Maybe<Scalars['Float']>,
  shipment_id?: Maybe<Scalars['Float']>,
  vendor_item_id?: Maybe<Scalars['Float']>,
};

export type OrderItemStddevPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemStddevSampFields = {
   __typename?: 'order_item_stddev_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_item_id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
  qty?: Maybe<Scalars['Float']>,
  shipment_id?: Maybe<Scalars['Float']>,
  vendor_item_id?: Maybe<Scalars['Float']>,
};

export type OrderItemStddevSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemSumFields = {
   __typename?: 'order_item_sum_fields',
  item_id?: Maybe<Scalars['Int']>,
  manufacturer_item_id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  qty?: Maybe<Scalars['numeric']>,
  shipment_id?: Maybe<Scalars['Int']>,
  vendor_item_id?: Maybe<Scalars['Int']>,
};

export type OrderItemSumOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export enum OrderItemUpdateColumn {
  COST_ITEM = 'cost_item',
  COST_TAX = 'cost_tax',
  COST_TOTAL = 'cost_total',
  ITEM_ID = 'item_id',
  MANUFACTURER_ITEM_ID = 'manufacturer_item_id',
  ORDER_ID = 'order_id',
  QTY = 'qty',
  SERIAL_NO = 'serial_no',
  SHIPMENT_ID = 'shipment_id',
  VENDOR_ITEM_ID = 'vendor_item_id'
}

export type OrderItemVarPopFields = {
   __typename?: 'order_item_var_pop_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_item_id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
  qty?: Maybe<Scalars['Float']>,
  shipment_id?: Maybe<Scalars['Float']>,
  vendor_item_id?: Maybe<Scalars['Float']>,
};

export type OrderItemVarPopOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemVarSampFields = {
   __typename?: 'order_item_var_samp_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_item_id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
  qty?: Maybe<Scalars['Float']>,
  shipment_id?: Maybe<Scalars['Float']>,
  vendor_item_id?: Maybe<Scalars['Float']>,
};

export type OrderItemVarSampOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderItemVarianceFields = {
   __typename?: 'order_item_variance_fields',
  item_id?: Maybe<Scalars['Float']>,
  manufacturer_item_id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
  qty?: Maybe<Scalars['Float']>,
  shipment_id?: Maybe<Scalars['Float']>,
  vendor_item_id?: Maybe<Scalars['Float']>,
};

export type OrderItemVarianceOrderBy = {
  item_id?: Maybe<OrderBy>,
  manufacturer_item_id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  qty?: Maybe<OrderBy>,
  shipment_id?: Maybe<OrderBy>,
  vendor_item_id?: Maybe<OrderBy>,
};

export type OrderMaxFields = {
   __typename?: 'order_max_fields',
  fulfilled_date?: Maybe<Scalars['date']>,
  id?: Maybe<Scalars['Int']>,
  payment_method_id?: Maybe<Scalars['Int']>,
  placed_date?: Maybe<Scalars['date']>,
  pon?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_order_id?: Maybe<Scalars['String']>,
};

export type OrderMaxOrderBy = {
  fulfilled_date?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  placed_date?: Maybe<OrderBy>,
  pon?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_order_id?: Maybe<OrderBy>,
};

export type OrderMinFields = {
   __typename?: 'order_min_fields',
  fulfilled_date?: Maybe<Scalars['date']>,
  id?: Maybe<Scalars['Int']>,
  payment_method_id?: Maybe<Scalars['Int']>,
  placed_date?: Maybe<Scalars['date']>,
  pon?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_order_id?: Maybe<Scalars['String']>,
};

export type OrderMinOrderBy = {
  fulfilled_date?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  placed_date?: Maybe<OrderBy>,
  pon?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_order_id?: Maybe<OrderBy>,
};

export type OrderMutationResponse = {
   __typename?: 'order_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Order>,
};

export type OrderObjRelInsertInput = {
  data: OrderInsertInput,
  on_conflict?: Maybe<OrderOnConflict>,
};

export type OrderOnConflict = {
  constraint: OrderConstraint,
  update_columns: Array<OrderUpdateColumn>,
  where?: Maybe<OrderBoolExp>,
};

export type OrderOrderBy = {
  fulfilled_date?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  items_cost?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  placed_date?: Maybe<OrderBy>,
  pon?: Maybe<OrderBy>,
  tax_cost?: Maybe<OrderBy>,
  total_cost?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_order_id?: Maybe<OrderBy>,
};

export enum OrderSelectColumn {
  FULFILLED_DATE = 'fulfilled_date',
  ID = 'id',
  ITEMS_COST = 'items_cost',
  PAYMENT_METHOD_ID = 'payment_method_id',
  PLACED_DATE = 'placed_date',
  PON = 'pon',
  TAX_COST = 'tax_cost',
  TOTAL_COST = 'total_cost',
  URL = 'url',
  VENDOR_ID = 'vendor_id',
  VENDOR_ORDER_ID = 'vendor_order_id'
}

export type OrderSetInput = {
  fulfilled_date?: Maybe<Scalars['date']>,
  id?: Maybe<Scalars['Int']>,
  items_cost?: Maybe<Scalars['money']>,
  payment_method_id?: Maybe<Scalars['Int']>,
  placed_date?: Maybe<Scalars['date']>,
  pon?: Maybe<Scalars['String']>,
  tax_cost?: Maybe<Scalars['money']>,
  total_cost?: Maybe<Scalars['money']>,
  url?: Maybe<Scalars['String']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_order_id?: Maybe<Scalars['String']>,
};

export type OrderStddevFields = {
   __typename?: 'order_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  payment_method_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type OrderStddevOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type OrderStddevPopFields = {
   __typename?: 'order_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  payment_method_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type OrderStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type OrderStddevSampFields = {
   __typename?: 'order_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  payment_method_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type OrderStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type OrderSumFields = {
   __typename?: 'order_sum_fields',
  id?: Maybe<Scalars['Int']>,
  payment_method_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type OrderSumOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export enum OrderUpdateColumn {
  FULFILLED_DATE = 'fulfilled_date',
  ID = 'id',
  ITEMS_COST = 'items_cost',
  PAYMENT_METHOD_ID = 'payment_method_id',
  PLACED_DATE = 'placed_date',
  PON = 'pon',
  TAX_COST = 'tax_cost',
  TOTAL_COST = 'total_cost',
  URL = 'url',
  VENDOR_ID = 'vendor_id',
  VENDOR_ORDER_ID = 'vendor_order_id'
}

export type OrderVarPopFields = {
   __typename?: 'order_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  payment_method_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type OrderVarPopOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type OrderVarSampFields = {
   __typename?: 'order_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  payment_method_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type OrderVarSampOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type OrderVarianceFields = {
   __typename?: 'order_variance_fields',
  id?: Maybe<Scalars['Float']>,
  payment_method_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type OrderVarianceOrderBy = {
  id?: Maybe<OrderBy>,
  payment_method_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type PaymentMethod = {
   __typename?: 'payment_method',
  class: EnumPaymentMethodTypeEnum,
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type PaymentMethodAggregate = {
   __typename?: 'payment_method_aggregate',
  aggregate?: Maybe<PaymentMethodAggregateFields>,
  nodes: Array<PaymentMethod>,
};

export type PaymentMethodAggregateFields = {
   __typename?: 'payment_method_aggregate_fields',
  avg?: Maybe<PaymentMethodAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<PaymentMethodMaxFields>,
  min?: Maybe<PaymentMethodMinFields>,
  stddev?: Maybe<PaymentMethodStddevFields>,
  stddev_pop?: Maybe<PaymentMethodStddevPopFields>,
  stddev_samp?: Maybe<PaymentMethodStddevSampFields>,
  sum?: Maybe<PaymentMethodSumFields>,
  var_pop?: Maybe<PaymentMethodVarPopFields>,
  var_samp?: Maybe<PaymentMethodVarSampFields>,
  variance?: Maybe<PaymentMethodVarianceFields>,
};


export type PaymentMethodAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PaymentMethodSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type PaymentMethodAggregateOrderBy = {
  avg?: Maybe<PaymentMethodAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<PaymentMethodMaxOrderBy>,
  min?: Maybe<PaymentMethodMinOrderBy>,
  stddev?: Maybe<PaymentMethodStddevOrderBy>,
  stddev_pop?: Maybe<PaymentMethodStddevPopOrderBy>,
  stddev_samp?: Maybe<PaymentMethodStddevSampOrderBy>,
  sum?: Maybe<PaymentMethodSumOrderBy>,
  var_pop?: Maybe<PaymentMethodVarPopOrderBy>,
  var_samp?: Maybe<PaymentMethodVarSampOrderBy>,
  variance?: Maybe<PaymentMethodVarianceOrderBy>,
};

export type PaymentMethodArrRelInsertInput = {
  data: Array<PaymentMethodInsertInput>,
  on_conflict?: Maybe<PaymentMethodOnConflict>,
};

export type PaymentMethodAvgFields = {
   __typename?: 'payment_method_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type PaymentMethodAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

export type PaymentMethodBoolExp = {
  _and?: Maybe<Array<Maybe<PaymentMethodBoolExp>>>,
  _not?: Maybe<PaymentMethodBoolExp>,
  _or?: Maybe<Array<Maybe<PaymentMethodBoolExp>>>,
  class?: Maybe<EnumPaymentMethodTypeEnumComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
};

export enum PaymentMethodConstraint {
  PAYMENT_METHOD_PKEY = 'payment_method_pkey'
}

export type PaymentMethodIncInput = {
  id?: Maybe<Scalars['Int']>,
};

export type PaymentMethodInsertInput = {
  class?: Maybe<EnumPaymentMethodTypeEnum>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type PaymentMethodMaxFields = {
   __typename?: 'payment_method_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type PaymentMethodMaxOrderBy = {
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

export type PaymentMethodMinFields = {
   __typename?: 'payment_method_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type PaymentMethodMinOrderBy = {
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

export type PaymentMethodMutationResponse = {
   __typename?: 'payment_method_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<PaymentMethod>,
};

export type PaymentMethodObjRelInsertInput = {
  data: PaymentMethodInsertInput,
  on_conflict?: Maybe<PaymentMethodOnConflict>,
};

export type PaymentMethodOnConflict = {
  constraint: PaymentMethodConstraint,
  update_columns: Array<PaymentMethodUpdateColumn>,
  where?: Maybe<PaymentMethodBoolExp>,
};

export type PaymentMethodOrderBy = {
  class?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
};

export enum PaymentMethodSelectColumn {
  CLASS = 'class',
  ID = 'id',
  NAME = 'name'
}

export type PaymentMethodSetInput = {
  class?: Maybe<EnumPaymentMethodTypeEnum>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type PaymentMethodStddevFields = {
   __typename?: 'payment_method_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type PaymentMethodStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

export type PaymentMethodStddevPopFields = {
   __typename?: 'payment_method_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type PaymentMethodStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type PaymentMethodStddevSampFields = {
   __typename?: 'payment_method_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type PaymentMethodStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type PaymentMethodSumFields = {
   __typename?: 'payment_method_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type PaymentMethodSumOrderBy = {
  id?: Maybe<OrderBy>,
};

export enum PaymentMethodUpdateColumn {
  CLASS = 'class',
  ID = 'id',
  NAME = 'name'
}

export type PaymentMethodVarPopFields = {
   __typename?: 'payment_method_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type PaymentMethodVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type PaymentMethodVarSampFields = {
   __typename?: 'payment_method_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type PaymentMethodVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type PaymentMethodVarianceFields = {
   __typename?: 'payment_method_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type PaymentMethodVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

export type PrinterLabelStatus = {
   __typename?: 'PrinterLabelStatus',
  labelCharacteristic?: Maybe<LabelCharacteristic>,
  mediaType?: Maybe<MediaType>,
  mediaWidth: Scalars['Int'],
  tapeColor?: Maybe<TapeColor>,
  textColor?: Maybe<TextColor>,
};

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

export type Query = {
   __typename?: 'Query',
  PrinterStatus?: Maybe<PrinterStatus>,
  files?: Maybe<Array<Maybe<File>>>,
};

export type QueryRoot = {
   __typename?: 'query_root',
  PrinterStatus?: Maybe<PrinterStatus>,
  enum_hardware_fastener_material: Array<EnumHardwareFastenerMaterial>,
  enum_hardware_fastener_material_aggregate: EnumHardwareFastenerMaterialAggregate,
  enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>,
  enum_hardware_fastener_screw_point: Array<EnumHardwareFastenerScrewPoint>,
  enum_hardware_fastener_screw_point_aggregate: EnumHardwareFastenerScrewPointAggregate,
  enum_hardware_fastener_screw_point_by_pk?: Maybe<EnumHardwareFastenerScrewPoint>,
  enum_hardware_finish: Array<EnumHardwareFinish>,
  enum_hardware_finish_aggregate: EnumHardwareFinishAggregate,
  enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>,
  enum_icon_category: Array<EnumIconCategory>,
  enum_icon_category_aggregate: EnumIconCategoryAggregate,
  enum_icon_category_by_pk?: Maybe<EnumIconCategory>,
  enum_payment_method_type: Array<EnumPaymentMethodType>,
  enum_payment_method_type_aggregate: EnumPaymentMethodTypeAggregate,
  enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>,
  enum_unit: Array<EnumUnit>,
  enum_unit_aggregate: EnumUnitAggregate,
  enum_unit_by_pk?: Maybe<EnumUnit>,
  files?: Maybe<Array<Maybe<File>>>,
  icon: Array<Icon>,
  icon_aggregate: IconAggregate,
  icon_by_pk?: Maybe<Icon>,
  icon_item_category_map: Array<IconItemCategoryMap>,
  icon_item_category_map_aggregate: IconItemCategoryMapAggregate,
  icon_item_category_map_by_pk?: Maybe<IconItemCategoryMap>,
  icon_label_map: Array<IconLabelMap>,
  icon_label_map_aggregate: IconLabelMapAggregate,
  icon_label_map_by_pk?: Maybe<IconLabelMap>,
  item: Array<Item>,
  item_aggregate: ItemAggregate,
  item_bundle: Array<ItemBundle>,
  item_bundle_aggregate: ItemBundleAggregate,
  item_bundle_by_pk?: Maybe<ItemBundle>,
  item_bundle_map: Array<ItemBundleMap>,
  item_bundle_map_aggregate: ItemBundleMapAggregate,
  item_bundle_map_by_pk?: Maybe<ItemBundleMap>,
  item_by_pk?: Maybe<Item>,
  item_hardware_fastener_bolt: Array<ItemHardwareFastenerBolt>,
  item_hardware_fastener_bolt_aggregate: ItemHardwareFastenerBoltAggregate,
  item_hardware_fastener_bolt_by_pk?: Maybe<ItemHardwareFastenerBolt>,
  item_hardware_nut: Array<ItemHardwareNut>,
  item_hardware_nut_aggregate: ItemHardwareNutAggregate,
  item_hardware_nut_by_pk?: Maybe<ItemHardwareNut>,
  label: Array<Label>,
  label_aggregate: LabelAggregate,
  label_by_pk?: Maybe<Label>,
  label_item_map: Array<LabelItemMap>,
  label_item_map_aggregate: LabelItemMapAggregate,
  label_item_map_by_pk?: Maybe<LabelItemMap>,
  label_template_map: Array<LabelTemplateMap>,
  label_template_map_aggregate: LabelTemplateMapAggregate,
  label_template_map_by_pk?: Maybe<LabelTemplateMap>,
  manufacturer: Array<Manufacturer>,
  manufacturer_aggregate: ManufacturerAggregate,
  manufacturer_by_pk?: Maybe<Manufacturer>,
  manufacturer_item: Array<ManufacturerItem>,
  manufacturer_item_aggregate: ManufacturerItemAggregate,
  manufacturer_item_by_pk?: Maybe<ManufacturerItem>,
  order: Array<Order>,
  order_aggregate: OrderAggregate,
  order_by_pk?: Maybe<Order>,
  order_item: Array<OrderItem>,
  order_item_aggregate: OrderItemAggregate,
  order_item_by_pk?: Maybe<OrderItem>,
  payment_method: Array<PaymentMethod>,
  payment_method_aggregate: PaymentMethodAggregate,
  payment_method_by_pk?: Maybe<PaymentMethod>,
  shipment: Array<Shipment>,
  shipment_aggregate: ShipmentAggregate,
  shipment_by_pk?: Maybe<Shipment>,
  vendor: Array<Vendor>,
  vendor_aggregate: VendorAggregate,
  vendor_by_pk?: Maybe<Vendor>,
  vendor_item: Array<VendorItem>,
  vendor_item_aggregate: VendorItemAggregate,
  vendor_item_by_pk?: Maybe<VendorItem>,
};


export type QueryRootEnumHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


export type QueryRootEnumHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


export type QueryRootEnumHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String']
};


export type QueryRootEnumHardwareFastenerScrewPointArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


export type QueryRootEnumHardwareFastenerScrewPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


export type QueryRootEnumHardwareFastenerScrewPointByPkArgs = {
  id: Scalars['String']
};


export type QueryRootEnumHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


export type QueryRootEnumHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


export type QueryRootEnumHardwareFinishByPkArgs = {
  id: Scalars['String']
};


export type QueryRootEnumIconCategoryArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


export type QueryRootEnumIconCategoryAggregateArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


export type QueryRootEnumIconCategoryByPkArgs = {
  id: Scalars['String']
};


export type QueryRootEnumPaymentMethodTypeArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>,
  where?: Maybe<EnumPaymentMethodTypeBoolExp>
};


export type QueryRootEnumPaymentMethodTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>,
  where?: Maybe<EnumPaymentMethodTypeBoolExp>
};


export type QueryRootEnumPaymentMethodTypeByPkArgs = {
  id: Scalars['String']
};


export type QueryRootEnumUnitArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


export type QueryRootEnumUnitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


export type QueryRootEnumUnitByPkArgs = {
  id: Scalars['String']
};


export type QueryRootIconArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


export type QueryRootIconAggregateArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


export type QueryRootIconByPkArgs = {
  id: Scalars['uuid']
};


export type QueryRootIconItemCategoryMapArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>,
  where?: Maybe<IconItemCategoryMapBoolExp>
};


export type QueryRootIconItemCategoryMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>,
  where?: Maybe<IconItemCategoryMapBoolExp>
};


export type QueryRootIconItemCategoryMapByPkArgs = {
  category: EnumIconCategoryEnum,
  icon_id: Scalars['uuid'],
  sequence: Scalars['smallint']
};


export type QueryRootIconLabelMapArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconLabelMapOrderBy>>,
  where?: Maybe<IconLabelMapBoolExp>
};


export type QueryRootIconLabelMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconLabelMapOrderBy>>,
  where?: Maybe<IconLabelMapBoolExp>
};


export type QueryRootIconLabelMapByPkArgs = {
  icon_id: Scalars['uuid'],
  label_id: Scalars['uuid']
};


export type QueryRootItemArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


export type QueryRootItemAggregateArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


export type QueryRootItemBundleArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleOrderBy>>,
  where?: Maybe<ItemBundleBoolExp>
};


export type QueryRootItemBundleAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleOrderBy>>,
  where?: Maybe<ItemBundleBoolExp>
};


export type QueryRootItemBundleByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootItemBundleMapArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>,
  where?: Maybe<ItemBundleMapBoolExp>
};


export type QueryRootItemBundleMapAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>,
  where?: Maybe<ItemBundleMapBoolExp>
};


export type QueryRootItemBundleMapByPkArgs = {
  item_bundle_id: Scalars['Int'],
  item_member_id: Scalars['Int']
};


export type QueryRootItemByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootItemHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


export type QueryRootItemHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


export type QueryRootItemHardwareFastenerBoltByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootItemHardwareNutArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


export type QueryRootItemHardwareNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


export type QueryRootItemHardwareNutByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootLabelArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type QueryRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type QueryRootLabelByPkArgs = {
  id: Scalars['uuid']
};


export type QueryRootLabelItemMapArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelItemMapOrderBy>>,
  where?: Maybe<LabelItemMapBoolExp>
};


export type QueryRootLabelItemMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelItemMapOrderBy>>,
  where?: Maybe<LabelItemMapBoolExp>
};


export type QueryRootLabelItemMapByPkArgs = {
  item_id: Scalars['Int'],
  label_id: Scalars['uuid']
};


export type QueryRootLabelTemplateMapArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};


export type QueryRootLabelTemplateMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};


export type QueryRootLabelTemplateMapByPkArgs = {
  item_class: Scalars['String'],
  label_id: Scalars['uuid'],
  sequence: Scalars['smallint']
};


export type QueryRootManufacturerArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerOrderBy>>,
  where?: Maybe<ManufacturerBoolExp>
};


export type QueryRootManufacturerAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerOrderBy>>,
  where?: Maybe<ManufacturerBoolExp>
};


export type QueryRootManufacturerByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootManufacturerItemArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>,
  where?: Maybe<ManufacturerItemBoolExp>
};


export type QueryRootManufacturerItemAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>,
  where?: Maybe<ManufacturerItemBoolExp>
};


export type QueryRootManufacturerItemByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootOrderArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderOrderBy>>,
  where?: Maybe<OrderBoolExp>
};


export type QueryRootOrderAggregateArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderOrderBy>>,
  where?: Maybe<OrderBoolExp>
};


export type QueryRootOrderByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootOrderItemArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderItemOrderBy>>,
  where?: Maybe<OrderItemBoolExp>
};


export type QueryRootOrderItemAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderItemOrderBy>>,
  where?: Maybe<OrderItemBoolExp>
};


export type QueryRootOrderItemByPkArgs = {
  order_id: Scalars['Int'],
  serial_no: Scalars['String'],
  vendor_item_id: Scalars['Int']
};


export type QueryRootPaymentMethodArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PaymentMethodOrderBy>>,
  where?: Maybe<PaymentMethodBoolExp>
};


export type QueryRootPaymentMethodAggregateArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PaymentMethodOrderBy>>,
  where?: Maybe<PaymentMethodBoolExp>
};


export type QueryRootPaymentMethodByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootShipmentArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ShipmentOrderBy>>,
  where?: Maybe<ShipmentBoolExp>
};


export type QueryRootShipmentAggregateArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ShipmentOrderBy>>,
  where?: Maybe<ShipmentBoolExp>
};


export type QueryRootShipmentByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootVendorArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorOrderBy>>,
  where?: Maybe<VendorBoolExp>
};


export type QueryRootVendorAggregateArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorOrderBy>>,
  where?: Maybe<VendorBoolExp>
};


export type QueryRootVendorByPkArgs = {
  id: Scalars['Int']
};


export type QueryRootVendorItemArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorItemOrderBy>>,
  where?: Maybe<VendorItemBoolExp>
};


export type QueryRootVendorItemAggregateArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorItemOrderBy>>,
  where?: Maybe<VendorItemBoolExp>
};


export type QueryRootVendorItemByPkArgs = {
  id: Scalars['Int']
};

export type Shipment = {
   __typename?: 'shipment',
  id: Scalars['Int'],
  order?: Maybe<Order>,
  order_id?: Maybe<Scalars['Int']>,
  received_date: Scalars['date'],
  shipped_date?: Maybe<Scalars['date']>,
  shipping_carrier: Scalars['String'],
  tracking_id?: Maybe<Scalars['String']>,
  vendor_invoice_id?: Maybe<Scalars['String']>,
};

export type ShipmentAggregate = {
   __typename?: 'shipment_aggregate',
  aggregate?: Maybe<ShipmentAggregateFields>,
  nodes: Array<Shipment>,
};

export type ShipmentAggregateFields = {
   __typename?: 'shipment_aggregate_fields',
  avg?: Maybe<ShipmentAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<ShipmentMaxFields>,
  min?: Maybe<ShipmentMinFields>,
  stddev?: Maybe<ShipmentStddevFields>,
  stddev_pop?: Maybe<ShipmentStddevPopFields>,
  stddev_samp?: Maybe<ShipmentStddevSampFields>,
  sum?: Maybe<ShipmentSumFields>,
  var_pop?: Maybe<ShipmentVarPopFields>,
  var_samp?: Maybe<ShipmentVarSampFields>,
  variance?: Maybe<ShipmentVarianceFields>,
};


export type ShipmentAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ShipmentSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type ShipmentAggregateOrderBy = {
  avg?: Maybe<ShipmentAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<ShipmentMaxOrderBy>,
  min?: Maybe<ShipmentMinOrderBy>,
  stddev?: Maybe<ShipmentStddevOrderBy>,
  stddev_pop?: Maybe<ShipmentStddevPopOrderBy>,
  stddev_samp?: Maybe<ShipmentStddevSampOrderBy>,
  sum?: Maybe<ShipmentSumOrderBy>,
  var_pop?: Maybe<ShipmentVarPopOrderBy>,
  var_samp?: Maybe<ShipmentVarSampOrderBy>,
  variance?: Maybe<ShipmentVarianceOrderBy>,
};

export type ShipmentArrRelInsertInput = {
  data: Array<ShipmentInsertInput>,
  on_conflict?: Maybe<ShipmentOnConflict>,
};

export type ShipmentAvgFields = {
   __typename?: 'shipment_avg_fields',
  id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
};

export type ShipmentAvgOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};

export type ShipmentBoolExp = {
  _and?: Maybe<Array<Maybe<ShipmentBoolExp>>>,
  _not?: Maybe<ShipmentBoolExp>,
  _or?: Maybe<Array<Maybe<ShipmentBoolExp>>>,
  id?: Maybe<IntComparisonExp>,
  order?: Maybe<OrderBoolExp>,
  order_id?: Maybe<IntComparisonExp>,
  received_date?: Maybe<DateComparisonExp>,
  shipped_date?: Maybe<DateComparisonExp>,
  shipping_carrier?: Maybe<StringComparisonExp>,
  tracking_id?: Maybe<StringComparisonExp>,
  vendor_invoice_id?: Maybe<StringComparisonExp>,
};

export enum ShipmentConstraint {
  SHIPMENT_PKEY = 'shipment_pkey'
}

export type ShipmentIncInput = {
  id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
};

export type ShipmentInsertInput = {
  id?: Maybe<Scalars['Int']>,
  order?: Maybe<OrderObjRelInsertInput>,
  order_id?: Maybe<Scalars['Int']>,
  received_date?: Maybe<Scalars['date']>,
  shipped_date?: Maybe<Scalars['date']>,
  shipping_carrier?: Maybe<Scalars['String']>,
  tracking_id?: Maybe<Scalars['String']>,
  vendor_invoice_id?: Maybe<Scalars['String']>,
};

export type ShipmentMaxFields = {
   __typename?: 'shipment_max_fields',
  id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  received_date?: Maybe<Scalars['date']>,
  shipped_date?: Maybe<Scalars['date']>,
  shipping_carrier?: Maybe<Scalars['String']>,
  tracking_id?: Maybe<Scalars['String']>,
  vendor_invoice_id?: Maybe<Scalars['String']>,
};

export type ShipmentMaxOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  received_date?: Maybe<OrderBy>,
  shipped_date?: Maybe<OrderBy>,
  shipping_carrier?: Maybe<OrderBy>,
  tracking_id?: Maybe<OrderBy>,
  vendor_invoice_id?: Maybe<OrderBy>,
};

export type ShipmentMinFields = {
   __typename?: 'shipment_min_fields',
  id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  received_date?: Maybe<Scalars['date']>,
  shipped_date?: Maybe<Scalars['date']>,
  shipping_carrier?: Maybe<Scalars['String']>,
  tracking_id?: Maybe<Scalars['String']>,
  vendor_invoice_id?: Maybe<Scalars['String']>,
};

export type ShipmentMinOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
  received_date?: Maybe<OrderBy>,
  shipped_date?: Maybe<OrderBy>,
  shipping_carrier?: Maybe<OrderBy>,
  tracking_id?: Maybe<OrderBy>,
  vendor_invoice_id?: Maybe<OrderBy>,
};

export type ShipmentMutationResponse = {
   __typename?: 'shipment_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Shipment>,
};

export type ShipmentObjRelInsertInput = {
  data: ShipmentInsertInput,
  on_conflict?: Maybe<ShipmentOnConflict>,
};

export type ShipmentOnConflict = {
  constraint: ShipmentConstraint,
  update_columns: Array<ShipmentUpdateColumn>,
  where?: Maybe<ShipmentBoolExp>,
};

export type ShipmentOrderBy = {
  id?: Maybe<OrderBy>,
  order?: Maybe<OrderOrderBy>,
  order_id?: Maybe<OrderBy>,
  received_date?: Maybe<OrderBy>,
  shipped_date?: Maybe<OrderBy>,
  shipping_carrier?: Maybe<OrderBy>,
  tracking_id?: Maybe<OrderBy>,
  vendor_invoice_id?: Maybe<OrderBy>,
};

export enum ShipmentSelectColumn {
  ID = 'id',
  ORDER_ID = 'order_id',
  RECEIVED_DATE = 'received_date',
  SHIPPED_DATE = 'shipped_date',
  SHIPPING_CARRIER = 'shipping_carrier',
  TRACKING_ID = 'tracking_id',
  VENDOR_INVOICE_ID = 'vendor_invoice_id'
}

export type ShipmentSetInput = {
  id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
  received_date?: Maybe<Scalars['date']>,
  shipped_date?: Maybe<Scalars['date']>,
  shipping_carrier?: Maybe<Scalars['String']>,
  tracking_id?: Maybe<Scalars['String']>,
  vendor_invoice_id?: Maybe<Scalars['String']>,
};

export type ShipmentStddevFields = {
   __typename?: 'shipment_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
};

export type ShipmentStddevOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};

export type ShipmentStddevPopFields = {
   __typename?: 'shipment_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
};

export type ShipmentStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};

export type ShipmentStddevSampFields = {
   __typename?: 'shipment_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
};

export type ShipmentStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};

export type ShipmentSumFields = {
   __typename?: 'shipment_sum_fields',
  id?: Maybe<Scalars['Int']>,
  order_id?: Maybe<Scalars['Int']>,
};

export type ShipmentSumOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};

export enum ShipmentUpdateColumn {
  ID = 'id',
  ORDER_ID = 'order_id',
  RECEIVED_DATE = 'received_date',
  SHIPPED_DATE = 'shipped_date',
  SHIPPING_CARRIER = 'shipping_carrier',
  TRACKING_ID = 'tracking_id',
  VENDOR_INVOICE_ID = 'vendor_invoice_id'
}

export type ShipmentVarPopFields = {
   __typename?: 'shipment_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
};

export type ShipmentVarPopOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};

export type ShipmentVarSampFields = {
   __typename?: 'shipment_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
};

export type ShipmentVarSampOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};

export type ShipmentVarianceFields = {
   __typename?: 'shipment_variance_fields',
  id?: Maybe<Scalars['Float']>,
  order_id?: Maybe<Scalars['Float']>,
};

export type ShipmentVarianceOrderBy = {
  id?: Maybe<OrderBy>,
  order_id?: Maybe<OrderBy>,
};


export type SmallintComparisonExp = {
  _eq?: Maybe<Scalars['smallint']>,
  _gt?: Maybe<Scalars['smallint']>,
  _gte?: Maybe<Scalars['smallint']>,
  _in?: Maybe<Array<Scalars['smallint']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['smallint']>,
  _lte?: Maybe<Scalars['smallint']>,
  _neq?: Maybe<Scalars['smallint']>,
  _nin?: Maybe<Array<Scalars['smallint']>>,
};

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

export type SubscriptionRoot = {
   __typename?: 'subscription_root',
  enum_hardware_fastener_material: Array<EnumHardwareFastenerMaterial>,
  enum_hardware_fastener_material_aggregate: EnumHardwareFastenerMaterialAggregate,
  enum_hardware_fastener_material_by_pk?: Maybe<EnumHardwareFastenerMaterial>,
  enum_hardware_fastener_screw_point: Array<EnumHardwareFastenerScrewPoint>,
  enum_hardware_fastener_screw_point_aggregate: EnumHardwareFastenerScrewPointAggregate,
  enum_hardware_fastener_screw_point_by_pk?: Maybe<EnumHardwareFastenerScrewPoint>,
  enum_hardware_finish: Array<EnumHardwareFinish>,
  enum_hardware_finish_aggregate: EnumHardwareFinishAggregate,
  enum_hardware_finish_by_pk?: Maybe<EnumHardwareFinish>,
  enum_icon_category: Array<EnumIconCategory>,
  enum_icon_category_aggregate: EnumIconCategoryAggregate,
  enum_icon_category_by_pk?: Maybe<EnumIconCategory>,
  enum_payment_method_type: Array<EnumPaymentMethodType>,
  enum_payment_method_type_aggregate: EnumPaymentMethodTypeAggregate,
  enum_payment_method_type_by_pk?: Maybe<EnumPaymentMethodType>,
  enum_unit: Array<EnumUnit>,
  enum_unit_aggregate: EnumUnitAggregate,
  enum_unit_by_pk?: Maybe<EnumUnit>,
  icon: Array<Icon>,
  icon_aggregate: IconAggregate,
  icon_by_pk?: Maybe<Icon>,
  icon_item_category_map: Array<IconItemCategoryMap>,
  icon_item_category_map_aggregate: IconItemCategoryMapAggregate,
  icon_item_category_map_by_pk?: Maybe<IconItemCategoryMap>,
  icon_label_map: Array<IconLabelMap>,
  icon_label_map_aggregate: IconLabelMapAggregate,
  icon_label_map_by_pk?: Maybe<IconLabelMap>,
  item: Array<Item>,
  item_aggregate: ItemAggregate,
  item_bundle: Array<ItemBundle>,
  item_bundle_aggregate: ItemBundleAggregate,
  item_bundle_by_pk?: Maybe<ItemBundle>,
  item_bundle_map: Array<ItemBundleMap>,
  item_bundle_map_aggregate: ItemBundleMapAggregate,
  item_bundle_map_by_pk?: Maybe<ItemBundleMap>,
  item_by_pk?: Maybe<Item>,
  item_hardware_fastener_bolt: Array<ItemHardwareFastenerBolt>,
  item_hardware_fastener_bolt_aggregate: ItemHardwareFastenerBoltAggregate,
  item_hardware_fastener_bolt_by_pk?: Maybe<ItemHardwareFastenerBolt>,
  item_hardware_nut: Array<ItemHardwareNut>,
  item_hardware_nut_aggregate: ItemHardwareNutAggregate,
  item_hardware_nut_by_pk?: Maybe<ItemHardwareNut>,
  label: Array<Label>,
  label_aggregate: LabelAggregate,
  label_by_pk?: Maybe<Label>,
  label_item_map: Array<LabelItemMap>,
  label_item_map_aggregate: LabelItemMapAggregate,
  label_item_map_by_pk?: Maybe<LabelItemMap>,
  label_template_map: Array<LabelTemplateMap>,
  label_template_map_aggregate: LabelTemplateMapAggregate,
  label_template_map_by_pk?: Maybe<LabelTemplateMap>,
  manufacturer: Array<Manufacturer>,
  manufacturer_aggregate: ManufacturerAggregate,
  manufacturer_by_pk?: Maybe<Manufacturer>,
  manufacturer_item: Array<ManufacturerItem>,
  manufacturer_item_aggregate: ManufacturerItemAggregate,
  manufacturer_item_by_pk?: Maybe<ManufacturerItem>,
  order: Array<Order>,
  order_aggregate: OrderAggregate,
  order_by_pk?: Maybe<Order>,
  order_item: Array<OrderItem>,
  order_item_aggregate: OrderItemAggregate,
  order_item_by_pk?: Maybe<OrderItem>,
  payment_method: Array<PaymentMethod>,
  payment_method_aggregate: PaymentMethodAggregate,
  payment_method_by_pk?: Maybe<PaymentMethod>,
  shipment: Array<Shipment>,
  shipment_aggregate: ShipmentAggregate,
  shipment_by_pk?: Maybe<Shipment>,
  vendor: Array<Vendor>,
  vendor_aggregate: VendorAggregate,
  vendor_by_pk?: Maybe<Vendor>,
  vendor_item: Array<VendorItem>,
  vendor_item_aggregate: VendorItemAggregate,
  vendor_item_by_pk?: Maybe<VendorItem>,
};


export type SubscriptionRootEnumHardwareFastenerMaterialArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


export type SubscriptionRootEnumHardwareFastenerMaterialAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerMaterialSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerMaterialOrderBy>>,
  where?: Maybe<EnumHardwareFastenerMaterialBoolExp>
};


export type SubscriptionRootEnumHardwareFastenerMaterialByPkArgs = {
  id: Scalars['String']
};


export type SubscriptionRootEnumHardwareFastenerScrewPointArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


export type SubscriptionRootEnumHardwareFastenerScrewPointAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFastenerScrewPointSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFastenerScrewPointOrderBy>>,
  where?: Maybe<EnumHardwareFastenerScrewPointBoolExp>
};


export type SubscriptionRootEnumHardwareFastenerScrewPointByPkArgs = {
  id: Scalars['String']
};


export type SubscriptionRootEnumHardwareFinishArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


export type SubscriptionRootEnumHardwareFinishAggregateArgs = {
  distinct_on?: Maybe<Array<EnumHardwareFinishSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumHardwareFinishOrderBy>>,
  where?: Maybe<EnumHardwareFinishBoolExp>
};


export type SubscriptionRootEnumHardwareFinishByPkArgs = {
  id: Scalars['String']
};


export type SubscriptionRootEnumIconCategoryArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


export type SubscriptionRootEnumIconCategoryAggregateArgs = {
  distinct_on?: Maybe<Array<EnumIconCategorySelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumIconCategoryOrderBy>>,
  where?: Maybe<EnumIconCategoryBoolExp>
};


export type SubscriptionRootEnumIconCategoryByPkArgs = {
  id: Scalars['String']
};


export type SubscriptionRootEnumPaymentMethodTypeArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>,
  where?: Maybe<EnumPaymentMethodTypeBoolExp>
};


export type SubscriptionRootEnumPaymentMethodTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EnumPaymentMethodTypeSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumPaymentMethodTypeOrderBy>>,
  where?: Maybe<EnumPaymentMethodTypeBoolExp>
};


export type SubscriptionRootEnumPaymentMethodTypeByPkArgs = {
  id: Scalars['String']
};


export type SubscriptionRootEnumUnitArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


export type SubscriptionRootEnumUnitAggregateArgs = {
  distinct_on?: Maybe<Array<EnumUnitSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<EnumUnitOrderBy>>,
  where?: Maybe<EnumUnitBoolExp>
};


export type SubscriptionRootEnumUnitByPkArgs = {
  id: Scalars['String']
};


export type SubscriptionRootIconArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


export type SubscriptionRootIconAggregateArgs = {
  distinct_on?: Maybe<Array<IconSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconOrderBy>>,
  where?: Maybe<IconBoolExp>
};


export type SubscriptionRootIconByPkArgs = {
  id: Scalars['uuid']
};


export type SubscriptionRootIconItemCategoryMapArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>,
  where?: Maybe<IconItemCategoryMapBoolExp>
};


export type SubscriptionRootIconItemCategoryMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconItemCategoryMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconItemCategoryMapOrderBy>>,
  where?: Maybe<IconItemCategoryMapBoolExp>
};


export type SubscriptionRootIconItemCategoryMapByPkArgs = {
  category: EnumIconCategoryEnum,
  icon_id: Scalars['uuid'],
  sequence: Scalars['smallint']
};


export type SubscriptionRootIconLabelMapArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconLabelMapOrderBy>>,
  where?: Maybe<IconLabelMapBoolExp>
};


export type SubscriptionRootIconLabelMapAggregateArgs = {
  distinct_on?: Maybe<Array<IconLabelMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<IconLabelMapOrderBy>>,
  where?: Maybe<IconLabelMapBoolExp>
};


export type SubscriptionRootIconLabelMapByPkArgs = {
  icon_id: Scalars['uuid'],
  label_id: Scalars['uuid']
};


export type SubscriptionRootItemArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


export type SubscriptionRootItemAggregateArgs = {
  distinct_on?: Maybe<Array<ItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemOrderBy>>,
  where?: Maybe<ItemBoolExp>
};


export type SubscriptionRootItemBundleArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleOrderBy>>,
  where?: Maybe<ItemBundleBoolExp>
};


export type SubscriptionRootItemBundleAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleOrderBy>>,
  where?: Maybe<ItemBundleBoolExp>
};


export type SubscriptionRootItemBundleByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootItemBundleMapArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>,
  where?: Maybe<ItemBundleMapBoolExp>
};


export type SubscriptionRootItemBundleMapAggregateArgs = {
  distinct_on?: Maybe<Array<ItemBundleMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemBundleMapOrderBy>>,
  where?: Maybe<ItemBundleMapBoolExp>
};


export type SubscriptionRootItemBundleMapByPkArgs = {
  item_bundle_id: Scalars['Int'],
  item_member_id: Scalars['Int']
};


export type SubscriptionRootItemByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootItemHardwareFastenerBoltArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


export type SubscriptionRootItemHardwareFastenerBoltAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareFastenerBoltSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareFastenerBoltOrderBy>>,
  where?: Maybe<ItemHardwareFastenerBoltBoolExp>
};


export type SubscriptionRootItemHardwareFastenerBoltByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootItemHardwareNutArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


export type SubscriptionRootItemHardwareNutAggregateArgs = {
  distinct_on?: Maybe<Array<ItemHardwareNutSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ItemHardwareNutOrderBy>>,
  where?: Maybe<ItemHardwareNutBoolExp>
};


export type SubscriptionRootItemHardwareNutByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootLabelArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type SubscriptionRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelOrderBy>>,
  where?: Maybe<LabelBoolExp>
};


export type SubscriptionRootLabelByPkArgs = {
  id: Scalars['uuid']
};


export type SubscriptionRootLabelItemMapArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelItemMapOrderBy>>,
  where?: Maybe<LabelItemMapBoolExp>
};


export type SubscriptionRootLabelItemMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelItemMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelItemMapOrderBy>>,
  where?: Maybe<LabelItemMapBoolExp>
};


export type SubscriptionRootLabelItemMapByPkArgs = {
  item_id: Scalars['Int'],
  label_id: Scalars['uuid']
};


export type SubscriptionRootLabelTemplateMapArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};


export type SubscriptionRootLabelTemplateMapAggregateArgs = {
  distinct_on?: Maybe<Array<LabelTemplateMapSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<LabelTemplateMapOrderBy>>,
  where?: Maybe<LabelTemplateMapBoolExp>
};


export type SubscriptionRootLabelTemplateMapByPkArgs = {
  item_class: Scalars['String'],
  label_id: Scalars['uuid'],
  sequence: Scalars['smallint']
};


export type SubscriptionRootManufacturerArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerOrderBy>>,
  where?: Maybe<ManufacturerBoolExp>
};


export type SubscriptionRootManufacturerAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerOrderBy>>,
  where?: Maybe<ManufacturerBoolExp>
};


export type SubscriptionRootManufacturerByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootManufacturerItemArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>,
  where?: Maybe<ManufacturerItemBoolExp>
};


export type SubscriptionRootManufacturerItemAggregateArgs = {
  distinct_on?: Maybe<Array<ManufacturerItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ManufacturerItemOrderBy>>,
  where?: Maybe<ManufacturerItemBoolExp>
};


export type SubscriptionRootManufacturerItemByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootOrderArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderOrderBy>>,
  where?: Maybe<OrderBoolExp>
};


export type SubscriptionRootOrderAggregateArgs = {
  distinct_on?: Maybe<Array<OrderSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderOrderBy>>,
  where?: Maybe<OrderBoolExp>
};


export type SubscriptionRootOrderByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootOrderItemArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderItemOrderBy>>,
  where?: Maybe<OrderItemBoolExp>
};


export type SubscriptionRootOrderItemAggregateArgs = {
  distinct_on?: Maybe<Array<OrderItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<OrderItemOrderBy>>,
  where?: Maybe<OrderItemBoolExp>
};


export type SubscriptionRootOrderItemByPkArgs = {
  order_id: Scalars['Int'],
  serial_no: Scalars['String'],
  vendor_item_id: Scalars['Int']
};


export type SubscriptionRootPaymentMethodArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PaymentMethodOrderBy>>,
  where?: Maybe<PaymentMethodBoolExp>
};


export type SubscriptionRootPaymentMethodAggregateArgs = {
  distinct_on?: Maybe<Array<PaymentMethodSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<PaymentMethodOrderBy>>,
  where?: Maybe<PaymentMethodBoolExp>
};


export type SubscriptionRootPaymentMethodByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootShipmentArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ShipmentOrderBy>>,
  where?: Maybe<ShipmentBoolExp>
};


export type SubscriptionRootShipmentAggregateArgs = {
  distinct_on?: Maybe<Array<ShipmentSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<ShipmentOrderBy>>,
  where?: Maybe<ShipmentBoolExp>
};


export type SubscriptionRootShipmentByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootVendorArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorOrderBy>>,
  where?: Maybe<VendorBoolExp>
};


export type SubscriptionRootVendorAggregateArgs = {
  distinct_on?: Maybe<Array<VendorSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorOrderBy>>,
  where?: Maybe<VendorBoolExp>
};


export type SubscriptionRootVendorByPkArgs = {
  id: Scalars['Int']
};


export type SubscriptionRootVendorItemArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorItemOrderBy>>,
  where?: Maybe<VendorItemBoolExp>
};


export type SubscriptionRootVendorItemAggregateArgs = {
  distinct_on?: Maybe<Array<VendorItemSelectColumn>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<VendorItemOrderBy>>,
  where?: Maybe<VendorItemBoolExp>
};


export type SubscriptionRootVendorItemByPkArgs = {
  id: Scalars['Int']
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

export type Vendor = {
   __typename?: 'vendor',
  account_id?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name: Scalars['String'],
  url?: Maybe<Scalars['String']>,
};

export type VendorAggregate = {
   __typename?: 'vendor_aggregate',
  aggregate?: Maybe<VendorAggregateFields>,
  nodes: Array<Vendor>,
};

export type VendorAggregateFields = {
   __typename?: 'vendor_aggregate_fields',
  avg?: Maybe<VendorAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<VendorMaxFields>,
  min?: Maybe<VendorMinFields>,
  stddev?: Maybe<VendorStddevFields>,
  stddev_pop?: Maybe<VendorStddevPopFields>,
  stddev_samp?: Maybe<VendorStddevSampFields>,
  sum?: Maybe<VendorSumFields>,
  var_pop?: Maybe<VendorVarPopFields>,
  var_samp?: Maybe<VendorVarSampFields>,
  variance?: Maybe<VendorVarianceFields>,
};


export type VendorAggregateFieldsCountArgs = {
  columns?: Maybe<Array<VendorSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type VendorAggregateOrderBy = {
  avg?: Maybe<VendorAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<VendorMaxOrderBy>,
  min?: Maybe<VendorMinOrderBy>,
  stddev?: Maybe<VendorStddevOrderBy>,
  stddev_pop?: Maybe<VendorStddevPopOrderBy>,
  stddev_samp?: Maybe<VendorStddevSampOrderBy>,
  sum?: Maybe<VendorSumOrderBy>,
  var_pop?: Maybe<VendorVarPopOrderBy>,
  var_samp?: Maybe<VendorVarSampOrderBy>,
  variance?: Maybe<VendorVarianceOrderBy>,
};

export type VendorArrRelInsertInput = {
  data: Array<VendorInsertInput>,
  on_conflict?: Maybe<VendorOnConflict>,
};

export type VendorAvgFields = {
   __typename?: 'vendor_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type VendorAvgOrderBy = {
  id?: Maybe<OrderBy>,
};

export type VendorBoolExp = {
  _and?: Maybe<Array<Maybe<VendorBoolExp>>>,
  _not?: Maybe<VendorBoolExp>,
  _or?: Maybe<Array<Maybe<VendorBoolExp>>>,
  account_id?: Maybe<StringComparisonExp>,
  id?: Maybe<IntComparisonExp>,
  name?: Maybe<StringComparisonExp>,
  url?: Maybe<StringComparisonExp>,
};

export enum VendorConstraint {
  VENDOR_PKEY = 'vendor_pkey'
}

export type VendorIncInput = {
  id?: Maybe<Scalars['Int']>,
};

export type VendorInsertInput = {
  account_id?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type VendorItem = {
   __typename?: 'vendor_item',
  id: Scalars['Int'],
  item_id: Scalars['Int'],
  vendor_id: Scalars['Int'],
  vendor_sku: Scalars['String'],
};

export type VendorItemAggregate = {
   __typename?: 'vendor_item_aggregate',
  aggregate?: Maybe<VendorItemAggregateFields>,
  nodes: Array<VendorItem>,
};

export type VendorItemAggregateFields = {
   __typename?: 'vendor_item_aggregate_fields',
  avg?: Maybe<VendorItemAvgFields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<VendorItemMaxFields>,
  min?: Maybe<VendorItemMinFields>,
  stddev?: Maybe<VendorItemStddevFields>,
  stddev_pop?: Maybe<VendorItemStddevPopFields>,
  stddev_samp?: Maybe<VendorItemStddevSampFields>,
  sum?: Maybe<VendorItemSumFields>,
  var_pop?: Maybe<VendorItemVarPopFields>,
  var_samp?: Maybe<VendorItemVarSampFields>,
  variance?: Maybe<VendorItemVarianceFields>,
};


export type VendorItemAggregateFieldsCountArgs = {
  columns?: Maybe<Array<VendorItemSelectColumn>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type VendorItemAggregateOrderBy = {
  avg?: Maybe<VendorItemAvgOrderBy>,
  count?: Maybe<OrderBy>,
  max?: Maybe<VendorItemMaxOrderBy>,
  min?: Maybe<VendorItemMinOrderBy>,
  stddev?: Maybe<VendorItemStddevOrderBy>,
  stddev_pop?: Maybe<VendorItemStddevPopOrderBy>,
  stddev_samp?: Maybe<VendorItemStddevSampOrderBy>,
  sum?: Maybe<VendorItemSumOrderBy>,
  var_pop?: Maybe<VendorItemVarPopOrderBy>,
  var_samp?: Maybe<VendorItemVarSampOrderBy>,
  variance?: Maybe<VendorItemVarianceOrderBy>,
};

export type VendorItemArrRelInsertInput = {
  data: Array<VendorItemInsertInput>,
  on_conflict?: Maybe<VendorItemOnConflict>,
};

export type VendorItemAvgFields = {
   __typename?: 'vendor_item_avg_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type VendorItemAvgOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type VendorItemBoolExp = {
  _and?: Maybe<Array<Maybe<VendorItemBoolExp>>>,
  _not?: Maybe<VendorItemBoolExp>,
  _or?: Maybe<Array<Maybe<VendorItemBoolExp>>>,
  id?: Maybe<IntComparisonExp>,
  item_id?: Maybe<IntComparisonExp>,
  vendor_id?: Maybe<IntComparisonExp>,
  vendor_sku?: Maybe<StringComparisonExp>,
};

export enum VendorItemConstraint {
  VENDOR_ITEM_PKEY = 'vendor_item_pkey'
}

export type VendorItemIncInput = {
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type VendorItemInsertInput = {
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_sku?: Maybe<Scalars['String']>,
};

export type VendorItemMaxFields = {
   __typename?: 'vendor_item_max_fields',
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_sku?: Maybe<Scalars['String']>,
};

export type VendorItemMaxOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_sku?: Maybe<OrderBy>,
};

export type VendorItemMinFields = {
   __typename?: 'vendor_item_min_fields',
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_sku?: Maybe<Scalars['String']>,
};

export type VendorItemMinOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_sku?: Maybe<OrderBy>,
};

export type VendorItemMutationResponse = {
   __typename?: 'vendor_item_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<VendorItem>,
};

export type VendorItemObjRelInsertInput = {
  data: VendorItemInsertInput,
  on_conflict?: Maybe<VendorItemOnConflict>,
};

export type VendorItemOnConflict = {
  constraint: VendorItemConstraint,
  update_columns: Array<VendorItemUpdateColumn>,
  where?: Maybe<VendorItemBoolExp>,
};

export type VendorItemOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
  vendor_sku?: Maybe<OrderBy>,
};

export enum VendorItemSelectColumn {
  ID = 'id',
  ITEM_ID = 'item_id',
  VENDOR_ID = 'vendor_id',
  VENDOR_SKU = 'vendor_sku'
}

export type VendorItemSetInput = {
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
  vendor_sku?: Maybe<Scalars['String']>,
};

export type VendorItemStddevFields = {
   __typename?: 'vendor_item_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type VendorItemStddevOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type VendorItemStddevPopFields = {
   __typename?: 'vendor_item_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type VendorItemStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type VendorItemStddevSampFields = {
   __typename?: 'vendor_item_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type VendorItemStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type VendorItemSumFields = {
   __typename?: 'vendor_item_sum_fields',
  id?: Maybe<Scalars['Int']>,
  item_id?: Maybe<Scalars['Int']>,
  vendor_id?: Maybe<Scalars['Int']>,
};

export type VendorItemSumOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export enum VendorItemUpdateColumn {
  ID = 'id',
  ITEM_ID = 'item_id',
  VENDOR_ID = 'vendor_id',
  VENDOR_SKU = 'vendor_sku'
}

export type VendorItemVarPopFields = {
   __typename?: 'vendor_item_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type VendorItemVarPopOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type VendorItemVarSampFields = {
   __typename?: 'vendor_item_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type VendorItemVarSampOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type VendorItemVarianceFields = {
   __typename?: 'vendor_item_variance_fields',
  id?: Maybe<Scalars['Float']>,
  item_id?: Maybe<Scalars['Float']>,
  vendor_id?: Maybe<Scalars['Float']>,
};

export type VendorItemVarianceOrderBy = {
  id?: Maybe<OrderBy>,
  item_id?: Maybe<OrderBy>,
  vendor_id?: Maybe<OrderBy>,
};

export type VendorMaxFields = {
   __typename?: 'vendor_max_fields',
  account_id?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type VendorMaxOrderBy = {
  account_id?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
};

export type VendorMinFields = {
   __typename?: 'vendor_min_fields',
  account_id?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type VendorMinOrderBy = {
  account_id?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
};

export type VendorMutationResponse = {
   __typename?: 'vendor_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Vendor>,
};

export type VendorObjRelInsertInput = {
  data: VendorInsertInput,
  on_conflict?: Maybe<VendorOnConflict>,
};

export type VendorOnConflict = {
  constraint: VendorConstraint,
  update_columns: Array<VendorUpdateColumn>,
  where?: Maybe<VendorBoolExp>,
};

export type VendorOrderBy = {
  account_id?: Maybe<OrderBy>,
  id?: Maybe<OrderBy>,
  name?: Maybe<OrderBy>,
  url?: Maybe<OrderBy>,
};

export enum VendorSelectColumn {
  ACCOUNT_ID = 'account_id',
  ID = 'id',
  NAME = 'name',
  URL = 'url'
}

export type VendorSetInput = {
  account_id?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type VendorStddevFields = {
   __typename?: 'vendor_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type VendorStddevOrderBy = {
  id?: Maybe<OrderBy>,
};

export type VendorStddevPopFields = {
   __typename?: 'vendor_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type VendorStddevPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type VendorStddevSampFields = {
   __typename?: 'vendor_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type VendorStddevSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type VendorSumFields = {
   __typename?: 'vendor_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type VendorSumOrderBy = {
  id?: Maybe<OrderBy>,
};

export enum VendorUpdateColumn {
  ACCOUNT_ID = 'account_id',
  ID = 'id',
  NAME = 'name',
  URL = 'url'
}

export type VendorVarPopFields = {
   __typename?: 'vendor_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type VendorVarPopOrderBy = {
  id?: Maybe<OrderBy>,
};

export type VendorVarSampFields = {
   __typename?: 'vendor_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type VendorVarSampOrderBy = {
  id?: Maybe<OrderBy>,
};

export type VendorVarianceFields = {
   __typename?: 'vendor_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type VendorVarianceOrderBy = {
  id?: Maybe<OrderBy>,
};

export type InsertIconMutationVariables = {
  mimeData?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  title?: Maybe<Scalars['String']>,
  categories?: Maybe<IconItemCategoryMapArrRelInsertInput>,
  labels?: Maybe<IconLabelMapArrRelInsertInput>
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
  & Pick<Label, 'id' | 'created_at' | 'content' | 'title' | 'width' | 'height'>
  & { item: Maybe<(
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

export type GetSingleLabelsQueryVariables = {};


export type GetSingleLabelsQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & Pick<Label, 'id'>
  )> }
);

export type SaveLabelMutationVariables = {
  content?: Maybe<Scalars['jsonb']>,
  height?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['uuid']>,
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
  title
  width
  height
  item {
    id
    class
  }
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
    query GetIcon {
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
  label(order_by: {created_at: asc}, where: {template_items: {}}) {
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
export const GetSingleLabelsDocument = gql`
    query GetSingleLabels {
  label(order_by: {created_at: asc}, where: {_not: {template_items: {}}}) {
    id
  }
}
    `;
export type GetSingleLabelsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>, 'query'>;

    export const GetSingleLabelsComponent = (props: GetSingleLabelsComponentProps) => (
      <ApolloReactComponents.Query<GetSingleLabelsQuery, GetSingleLabelsQueryVariables> query={GetSingleLabelsDocument} {...props} />
    );
    
export type GetSingleLabelsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetSingleLabelsQuery, GetSingleLabelsQueryVariables> & TChildProps;
export function withGetSingleLabels<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSingleLabelsQuery,
  GetSingleLabelsQueryVariables,
  GetSingleLabelsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetSingleLabelsQuery, GetSingleLabelsQueryVariables, GetSingleLabelsProps<TChildProps>>(GetSingleLabelsDocument, {
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
// graphql typescript defs generated on 2020-02-05T07:10:03-07:00
