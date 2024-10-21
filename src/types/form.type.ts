import { Pagination } from './page.type';

export interface FormResponse {
  code: number;
  errors: string | null;
  pagination: Pagination | null;
  status: string;
  data: FormData;
}

export interface FormData {
  enableCaptcha: boolean;
  id: number;
  total: number;
  attributeList: Attribute[];
}

export interface Attribute {
  id: number;
  name: string;
  fieldType: string;
  fieldId: string;
  config: string;
  parentId: number | null;
  value: string | null;
  attributeList?: null;
  componentId: string;
}

export interface SendEmailResponse {
  code: number;
  status: string;
  data: dataSendEmail;
  errors: any;
  pagination: any;
}

export interface dataSendEmail {
  id: string;
  pic: string;
  placeholderValue: placeholderValue[];
}

export interface placeholderValue {
  name: string;
  value: string;
}
