export interface ProviderResponse {
    responseMessage: string,
    requestId: string,
    requestTimestamp: number,
    requestPath: string,
    content: Content[],
    pageInfo: PageInfo
  }

export interface Content {
    id: number,
    uid: string,
    name: string,
    address: string,
    phone: string,
    province: string,
    city: string,
    subdistrict: string,
    postalCode: string,
    country: ContentObject,
    providerType: ContentObject,
    facilities: ContentObject[],
    thirdPartyAdministrations: ContentObject[],
    latitude: number,
    longitude: number,
    note: string | null,
    status: string,
    isIndividual: boolean,
    isGroup: boolean,
    distanceInKm: string,
    createdAt: string,
    updatedAt: string,
    createdBy: string,
    updatedBy: string
}

export interface ContentObject {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string
}

export interface PageInfo {
    pagePos: number,
    pageSize: number,
    totalData: number,
    totalPage: number
}
