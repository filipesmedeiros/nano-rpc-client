import { NanoFetcher } from './fetcher'

export interface KeepaliveResponse {
  RESPONSE_TYPE: any
}

export default function keepalive(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<KeepaliveResponse>(
    {
      action: 'keepalive',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
