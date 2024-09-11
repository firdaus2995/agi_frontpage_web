export interface SubscribeResponse {
    body: any
    code: number
    status: string
    data: DataSubscribe
    errors: any
    pagination: any
  }
  
  export interface DataSubscribe {
    email: string
    entity: string
  }