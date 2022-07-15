import { NanoFetcher } from '../fetcher'

export interface ReceivableExistsResponse {
  RESPONSE_TYPE: any
}

export default function receivableExists(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceivableExistsResponse>(
    {
      action: 'receivable_exists',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
