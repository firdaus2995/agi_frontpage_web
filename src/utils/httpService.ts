import { BASE_URL } from './baseUrl';

type Environment =
  | 'page'
  | 'content'
  | 'default'
  | 'content/category'
  | 'content-detail'
  | 'form'
  | 'cms'
  | '';

export interface QueryParams {
  [key: string]: string;
}

interface FetchOptions extends RequestInit {
  responseType?: 'json';
  queryParams?: QueryParams;
  headers?: {
    Authorization?: string;
    'Content-Type': string;
  };
}

export async function httpService<T>(
  env: Environment,
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const baseUrl = getBaseUrl(env);
  const urlWithParams = buildURL(baseUrl + '/' + endpoint, options.queryParams);

  try {
    const response = await fetch(urlWithParams, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error('Error fetching data:', error);

    throw error;
  }
}

function getBaseUrl(env: Environment): string {
  switch (env) {
    case 'page':
      return BASE_URL.apiPage;
    case 'content':
      return BASE_URL.contentPage;
    case 'content/category':
      return BASE_URL.contentCategoryPage;
    case 'default':
      return BASE_URL.default;
    case 'content-detail':
      return BASE_URL.contentDetail;
    case 'form':
      return BASE_URL.formUrl;
    case 'cms':
      return BASE_URL.cms;
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}

function buildURL(endpoint: string, queryParams?: QueryParams): string {
  const url = new URL(endpoint);
  if (queryParams) {
    Object.keys(queryParams).forEach((key) =>
      url.searchParams.append(key, queryParams[key])
    );
  }
  return url.toString();
}
