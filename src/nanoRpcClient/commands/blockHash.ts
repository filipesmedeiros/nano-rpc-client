import { NanoFetcher } from '../fetcher'

export interface BlockHashResponse {
  hash: string
}

export default function blockHash(
  this: NanoFetcher,
  block: {
    type: 'state'
    account: string
    previous: string
    representative: string
    balance: bigint | string
    link: string
    linkAsAccount: string
    signature: string
    work: string
  },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockHashResponse>(
    {
      action: 'block_hash',
      data: {
        jsonBlock: true,
        block,
      },
    },
    requestOptions
  )
}
