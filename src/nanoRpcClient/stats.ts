import { NanoFetcher } from './fetcher'

export interface StatsResponse {
  RESPONSE_TYPE: any
}

export default function stats(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<StatsResponse>(
    {
      action: 'stats',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
