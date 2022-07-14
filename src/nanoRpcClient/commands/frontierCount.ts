import { NanoFetcher } from '../fetcher'

export interface FrontierCountResponse {
  RESPONSE_TYPE: any
}

export default function frontierCount(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<FrontierCountResponse>(
    {
      action: 'frontier_count',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
