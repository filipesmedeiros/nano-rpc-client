import { NanoFetcher } from '../fetcher'

export interface ReceiveResponse {
  RESPONSE_TYPE: any
}

export default function receive(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceiveResponse>(
    {
      action: 'receive',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
