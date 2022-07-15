import { NanoFetcher } from '../fetcher'

export interface FrontierCountResponse {
  RESPONSE_TYPE: any
}

export default function frontierCount(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<FrontierCountResponse>(
    {
      action: 'frontier_count',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
