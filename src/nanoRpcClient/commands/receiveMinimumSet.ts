import { NanoFetcher } from '../fetcher'

export interface ReceiveMinimumSetResponse {
  RESPONSE_TYPE: any
}

export default function receiveMinimumSet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceiveMinimumSetResponse>(
    {
      action: 'receive_minimum_set',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
