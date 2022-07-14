import { NanoFetcher } from '../fetcher'

export interface ReceiveMinimumResponse {
  RESPONSE_TYPE: any
}

export default function receiveMinimum(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceiveMinimumResponse>(
    {
      action: 'receive_minimum',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
