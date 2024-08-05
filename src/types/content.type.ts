import { ContentDatum, PageTemplate, Pagination } from "./page.type";

export interface ContentResponse {
    code: number;
    status: string;
    data: Data;
    errors: string;
    pagination: Pagination;
  }
  
  export interface Data {
    id: number;
    name: string;
    slug: string;
    useCategory: boolean;
    type: PageTemplate;
    contentDataList: ContentData[];
  }
  
  export interface ContentData {
    categories: any;
    id: number;
    title: string;
    shortDesc: string;
    categoryName: string;
    status: string;
    lastComment?: string;
    lastEdited?: string;
    createdAt: string;
    contentData: ContentDatum[];
    formId?: number
  }

  export interface ContentCategoryResponse {
    code: number;
    status: string;
    data: DataCategory;
    errors: string;
    pagination: Pagination;
  }
 
  export interface DataCategory {
    id: number;
    name: string;
    slug: string;
    useCategory: boolean;
    type: PageTemplate;
    categoryList: CategoryListData
  }

  interface CategoryListData {
    [key: string]: ContentData[];
  }

  export interface ContentDetailResponse {
    code: number;
    status: string;
    data: ContentData;
    errors: string;
    pagination: Pagination;
  }
  
  export interface DetailPage {
    id: number;
    name: string;
    fieldType: string;
    fieldId: string;
    config: string;
    parentId: number;
    value: string;
    contentData: any; // Anda mungkin ingin mendefinisikan tipe ini dengan lebih spesifik
  }
  
  interface ContentDataPage {
    details: DetailPage[];
  }
  
  export interface DetailDataPage {
    id: number;
    name: string;
    fieldType: string;
    fieldId: string;
    config: string | null;
    parentId: number | null;
    value: string;
    contentData: ContentDataPage[];
  }
