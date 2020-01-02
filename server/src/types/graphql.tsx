import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
  /** uint8 (unsigned int between 0 and 255) scalar type for Apollo GraphQL */
  uint8: any,
};

export type File = {
   __typename?: 'File',
  name: Scalars['String'],
  path: Scalars['String'],
  type: Scalars['String'],
  base64: Scalars['String'],
};

export type LabelMonochromeBuffer = {
   __typename?: 'LabelMonochromeBuffer',
  imageBuffer?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>>,
};

export type LabelMonochromeRasterBuffer = {
   __typename?: 'LabelMonochromeRasterBuffer',
  rasterBuffer?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>>,
};

export enum MediaType {
  NO_MEDIA = 'NO_MEDIA',
  LAMINATED_TAPE = 'LAMINATED_TAPE',
  NON_LAMINATED_TAPE = 'NON_LAMINATED_TAPE',
  FABRIC_TAPE = 'FABRIC_TAPE',
  HEAT_SHRINK_TUBE = 'HEAT_SHRINK_TUBE',
  FLE_TAPE = 'FLE_TAPE',
  FLEXIBLE_ID_TAPE = 'FLEXIBLE_ID_TAPE',
  SATIN_TAPE = 'SATIN_TAPE',
  INCOMPATIBLE_TAPE = 'INCOMPATIBLE_TAPE'
}

export type Mutation = {
   __typename?: 'Mutation',
  uploadFiles: Array<Maybe<File>>,
  putLabelMonochromeBuffer?: Maybe<Array<Maybe<LabelMonochromeBuffer>>>,
  putLabelMonochromeRasterBuffer?: Maybe<Array<Maybe<LabelMonochromeRasterBuffer>>>,
};


export type MutationUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>
};


export type MutationPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>>>
};


export type MutationPutLabelMonochromeRasterBufferArgs = {
  rasterBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};

export type MyStruct = {
   __typename?: 'myStruct',
  color?: Maybe<Rgb>,
  mediaType?: Maybe<MediaType>,
};

export type PrinterStatus = {
   __typename?: 'PrinterStatus',
  labelType: Scalars['String'],
  uptime?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  firmwareVersion?: Maybe<Scalars['Float']>,
  heightInch?: Maybe<Scalars['Float']>,
  heightMillimeter?: Maybe<Scalars['Float']>,
};

export type Query = {
   __typename?: 'Query',
  files?: Maybe<Array<Maybe<File>>>,
  PrinterStatus?: Maybe<PrinterStatus>,
  /** get color, returns RGB */
  getColor?: Maybe<MyStruct>,
};

export enum Rgb {
  RED = 'RED',
  GREEN = 'GREEN',
  BLUE = 'BLUE'
}



export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  File: ResolverTypeWrapper<File>,
  String: ResolverTypeWrapper<Scalars['String']>,
  PrinterStatus: ResolverTypeWrapper<PrinterStatus>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  myStruct: ResolverTypeWrapper<MyStruct>,
  RGB: Rgb,
  MEDIA_TYPE: MediaType,
  Mutation: ResolverTypeWrapper<{}>,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  uint8: ResolverTypeWrapper<Scalars['uint8']>,
  LabelMonochromeBuffer: ResolverTypeWrapper<LabelMonochromeBuffer>,
  LabelMonochromeRasterBuffer: ResolverTypeWrapper<LabelMonochromeRasterBuffer>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  File: File,
  String: Scalars['String'],
  PrinterStatus: PrinterStatus,
  Int: Scalars['Int'],
  Float: Scalars['Float'],
  myStruct: MyStruct,
  RGB: Rgb,
  MEDIA_TYPE: MediaType,
  Mutation: {},
  Upload: Scalars['Upload'],
  uint8: Scalars['uint8'],
  LabelMonochromeBuffer: LabelMonochromeBuffer,
  LabelMonochromeRasterBuffer: LabelMonochromeRasterBuffer,
  Boolean: Scalars['Boolean'],
}>;

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type LabelMonochromeBufferResolvers<ContextType = any, ParentType extends ResolversParentTypes['LabelMonochromeBuffer'] = ResolversParentTypes['LabelMonochromeBuffer']> = ResolversObject<{
  imageBuffer?: Resolver<Maybe<Array<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['uint8']>>>>>>>, ParentType, ContextType>,
}>;

export type LabelMonochromeRasterBufferResolvers<ContextType = any, ParentType extends ResolversParentTypes['LabelMonochromeRasterBuffer'] = ResolversParentTypes['LabelMonochromeRasterBuffer']> = ResolversObject<{
  rasterBuffer?: Resolver<Maybe<Array<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['uint8']>>>>>>>, ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  uploadFiles?: Resolver<Array<Maybe<ResolversTypes['File']>>, ParentType, ContextType, RequireFields<MutationUploadFilesArgs, 'files'>>,
  putLabelMonochromeBuffer?: Resolver<Maybe<Array<Maybe<ResolversTypes['LabelMonochromeBuffer']>>>, ParentType, ContextType, RequireFields<MutationPutLabelMonochromeBufferArgs, 'imageBuffer'>>,
  putLabelMonochromeRasterBuffer?: Resolver<Maybe<Array<Maybe<ResolversTypes['LabelMonochromeRasterBuffer']>>>, ParentType, ContextType, RequireFields<MutationPutLabelMonochromeRasterBufferArgs, 'rasterBuffer'>>,
}>;

export type MyStructResolvers<ContextType = any, ParentType extends ResolversParentTypes['myStruct'] = ResolversParentTypes['myStruct']> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes['RGB']>, ParentType, ContextType>,
  mediaType?: Resolver<Maybe<ResolversTypes['MEDIA_TYPE']>, ParentType, ContextType>,
}>;

export type PrinterStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrinterStatus'] = ResolversParentTypes['PrinterStatus']> = ResolversObject<{
  labelType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  uptime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  firmwareVersion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  heightInch?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  heightMillimeter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['File']>>>, ParentType, ContextType>,
  PrinterStatus?: Resolver<Maybe<ResolversTypes['PrinterStatus']>, ParentType, ContextType>,
  getColor?: Resolver<Maybe<ResolversTypes['myStruct']>, ParentType, ContextType>,
}>;

export interface Uint8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uint8'], any> {
  name: 'uint8'
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = any> = ResolversObject<{
  File?: FileResolvers<ContextType>,
  LabelMonochromeBuffer?: LabelMonochromeBufferResolvers<ContextType>,
  LabelMonochromeRasterBuffer?: LabelMonochromeRasterBufferResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  myStruct?: MyStructResolvers<ContextType>,
  PrinterStatus?: PrinterStatusResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  uint8?: GraphQLScalarType,
  Upload?: GraphQLScalarType,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

// inventory-server graphql typescript defs generated on 2020-01-01T18:55:42-07:00
