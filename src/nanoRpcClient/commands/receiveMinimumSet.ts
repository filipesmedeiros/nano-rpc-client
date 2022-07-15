import { NanoFetcher } from '../fetcher'

export interface ReceiveMinimumSetResponse {
  RESPONSE_TYPE: any
}

export default function receiveMinimumSet(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceiveMinimumSetResponse>(
    {
      action: 'receive_minimum_set',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
