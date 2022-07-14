import { NanoFetcher } from './fetcher'

export interface UptimeResponse {
  RESPONSE_TYPE: any
}

export default function uptime(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UptimeResponse>(
    {
      action: 'uptime',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
