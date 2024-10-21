export interface GlobalConfigList {
  code: number;
  status: string;
  data: Data;
  errors: any;
  pagination: any;
}

export interface Data {
  total: number;
  configs: Config[];
}

export interface Config {
  id: number;
  variable: string;
  value: string;
  description: string;
}
