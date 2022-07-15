import { NanoFetcher } from '../fetcher'

export interface ReceiveMinimumResponse {
  RESPONSE_TYPE: any
}

export default function receiveMinimum(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceiveMinimumResponse>(
    {
      action: 'receive_minimum',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
