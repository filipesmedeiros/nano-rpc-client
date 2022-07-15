import { NanoFetcher } from '../fetcher'

export interface KeepaliveResponse {
  RESPONSE_TYPE: any
}

export default function keepalive(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<KeepaliveResponse>(
    {
      action: 'keepalive',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
