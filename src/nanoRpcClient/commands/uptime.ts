import { NanoFetcher } from '../fetcher'

export interface UptimeResponse {
  RESPONSE_TYPE: any
}

export default function uptime(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UptimeResponse>(
    {
      action: 'uptime',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
