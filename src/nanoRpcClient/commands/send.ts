import { NanoFetcher } from '../fetcher'

export interface SendResponse {
  RESPONSE_TYPE: any
}

export default function send(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SendResponse>(
    {
      action: 'send',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
