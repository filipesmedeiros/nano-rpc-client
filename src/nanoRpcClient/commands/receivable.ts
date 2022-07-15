import { NanoFetcher } from '../fetcher'

export interface ReceivableResponse {
  RESPONSE_TYPE: any
}

export default function receivable(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceivableResponse>(
    {
      action: 'receivable',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
