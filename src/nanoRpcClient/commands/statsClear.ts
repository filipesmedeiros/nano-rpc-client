import { NanoFetcher } from '../fetcher'

export interface StatsClearResponse {
  RESPONSE_TYPE: any
}

export default function statsClear(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<StatsClearResponse>(
    {
      action: 'stats_clear',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
