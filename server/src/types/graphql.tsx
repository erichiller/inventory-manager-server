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

/** Label characteristics and properties */
export type LabelCharacteristic = {
   __typename?: 'LabelCharacteristic',
  widthMillimeters: Scalars['Int'],
  pinsLeft: Scalars['Int'],
  pinsPrint: Scalars['Int'],
  pinsRight: Scalars['Int'],
};

/** Image Buffer / Raster data arranged as [page][column][pixels] of uint8 to the printer */
export type LabelMonochromeBuffer = {
   __typename?: 'LabelMonochromeBuffer',
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>,
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
  /** Send a label to be printed */
  putLabelMonochromeBuffer?: Maybe<LabelMonochromeBuffer>,
};


export type MutationUploadFilesArgs = {
  files: Array<Maybe<Scalars['Upload']>>
};


export type MutationPutLabelMonochromeBufferArgs = {
  imageBuffer: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['uint8']>>>>>>
};

/** Printer and label status and properies */
export type PrinterLabelStatus = {
   __typename?: 'PrinterLabelStatus',
  mediaType?: Maybe<MediaType>,
  mediaWidth: Scalars['Int'],
  labelCharacteristic?: Maybe<LabelCharacteristic>,
};

/** Label characteristics and properties */
export type PrinterStatus = {
   __typename?: 'PrinterStatus',
  labelType: Scalars['String'],
  uptime: Scalars['Int'],
  model: Scalars['String'],
  firmwareVersion: Scalars['Float'],
  heightInch?: Maybe<Scalars['Float']>,
  heightMillimeter?: Maybe<Scalars['Float']>,
  labelStatus: PrinterLabelStatus,
};

export type Query = {
   __typename?: 'Query',
  files?: Maybe<Array<Maybe<File>>>,
  /** Retrieve Printer and Label status and properties */
  PrinterStatus?: Maybe<PrinterStatus>,
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
  PrinterLabelStatus: ResolverTypeWrapper<PrinterLabelStatus>,
  MEDIA_TYPE: MediaType,
  LabelCharacteristic: ResolverTypeWrapper<LabelCharacteristic>,
  Mutation: ResolverTypeWrapper<{}>,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  uint8: ResolverTypeWrapper<Scalars['uint8']>,
  LabelMonochromeBuffer: ResolverTypeWrapper<LabelMonochromeBuffer>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  RGB: Rgb,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  File: File,
  String: Scalars['String'],
  PrinterStatus: PrinterStatus,
  Int: Scalars['Int'],
  Float: Scalars['Float'],
  PrinterLabelStatus: PrinterLabelStatus,
  MEDIA_TYPE: MediaType,
  LabelCharacteristic: LabelCharacteristic,
  Mutation: {},
  Upload: Scalars['Upload'],
  uint8: Scalars['uint8'],
  LabelMonochromeBuffer: LabelMonochromeBuffer,
  Boolean: Scalars['Boolean'],
  RGB: Rgb,
}>;

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type LabelCharacteristicResolvers<ContextType = any, ParentType extends ResolversParentTypes['LabelCharacteristic'] = ResolversParentTypes['LabelCharacteristic']> = ResolversObject<{
  widthMillimeters?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  pinsLeft?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  pinsPrint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  pinsRight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
}>;

export type LabelMonochromeBufferResolvers<ContextType = any, ParentType extends ResolversParentTypes['LabelMonochromeBuffer'] = ResolversParentTypes['LabelMonochromeBuffer']> = ResolversObject<{
  imageBuffer?: Resolver<Array<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['uint8']>>>>>>, ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  uploadFiles?: Resolver<Array<Maybe<ResolversTypes['File']>>, ParentType, ContextType, RequireFields<MutationUploadFilesArgs, 'files'>>,
  putLabelMonochromeBuffer?: Resolver<Maybe<ResolversTypes['LabelMonochromeBuffer']>, ParentType, ContextType, RequireFields<MutationPutLabelMonochromeBufferArgs, 'imageBuffer'>>,
}>;

export type PrinterLabelStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrinterLabelStatus'] = ResolversParentTypes['PrinterLabelStatus']> = ResolversObject<{
  mediaType?: Resolver<Maybe<ResolversTypes['MEDIA_TYPE']>, ParentType, ContextType>,
  mediaWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  labelCharacteristic?: Resolver<Maybe<ResolversTypes['LabelCharacteristic']>, ParentType, ContextType>,
}>;

export type PrinterStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrinterStatus'] = ResolversParentTypes['PrinterStatus']> = ResolversObject<{
  labelType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  uptime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firmwareVersion?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  heightInch?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  heightMillimeter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  labelStatus?: Resolver<ResolversTypes['PrinterLabelStatus'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['File']>>>, ParentType, ContextType>,
  PrinterStatus?: Resolver<Maybe<ResolversTypes['PrinterStatus']>, ParentType, ContextType>,
}>;

export interface Uint8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uint8'], any> {
  name: 'uint8'
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = any> = ResolversObject<{
  File?: FileResolvers<ContextType>,
  LabelCharacteristic?: LabelCharacteristicResolvers<ContextType>,
  LabelMonochromeBuffer?: LabelMonochromeBufferResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  PrinterLabelStatus?: PrinterLabelStatusResolvers<ContextType>,
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

// inventory-server graphql typescript defs generated on 2020-01-04T07:15:20-07:00
