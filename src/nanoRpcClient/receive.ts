import { NanoFetcher } from './fetcher'

export interface ReceiveResponse {
  RESPONSE_TYPE: any
}

export default function receive(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceiveResponse>(
    {
      action: 'receive',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
