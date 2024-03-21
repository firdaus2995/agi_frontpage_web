export type ParamDataType = string | undefined;
export type ParamEntryType = Record<string, ParamDataType>;
export type ParamsProps = {
  params: ParamEntryType;
  searchParams: ParamEntryType;
};
