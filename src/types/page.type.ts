export interface PageResponse {
  code: number;
  status: string;
  data: Data;
  errors: string;
  pagination: Pagination;
}

export interface Data {
  metaTitle: string;
  metaDescription: string;
  pageContent: string;
  pageContentDataType: string;
  pageTemplate: PageTemplate;
  contentType: ContentType;
}

export interface ContentType {
  id: number;
  contentDataList: ContentDataList[];
}

export interface ContentDataList {
  id: number;
  title: string;
  shortDesc: string;
  categoryName: string;
  contentData: ContentDatum[];
}

export interface ContentDatum {
  id: number;
  name: string;
  fieldType: string;
  fieldId: string;
  config: null | string;
  parentId: string;
  value: string;
  contentData: string;
}

export interface PageTemplate {
  id: number;
  fileName: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}
