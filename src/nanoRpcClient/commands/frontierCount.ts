import { NanoFetcher } from '../fetcher'

export interface FrontierCountResponse {
  count: number
}

export default function frontierCount(
  this: NanoFetcher,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<FrontierCountResponse>(
    {
      action: 'frontier_count',
    },
    requestOptions
  )
}
