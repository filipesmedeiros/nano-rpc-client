import { NanoFetcher } from '../fetcher'

export interface BlockCountResponse {
  count: bigint
  unchecked: bigint
  cemented: bigint
}

export default function blockCount(
  this: NanoFetcher,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockCountResponse>(
    {
      action: 'block_count',
    },
    requestOptions
  )
}
