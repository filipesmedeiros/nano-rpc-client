import { BlockType } from '../../types/types'
import { NanoFetcher } from '../fetcher'

export interface BlockInfoResponse {
  blockAccount: string
  amount: bigint
  balance: bigint
  height: bigint
  localTimestamp: bigint
  successor: string
  confirmed: boolean
  contents: {
    type: 'state'
    account: string
    previous: string
    representative: string
    balance: bigint
    link: string
    linkAsAccount: string
    signature: string
    work: string
  }
  subtype: BlockType
}

export default function blockInfo(
  this: NanoFetcher,
  hash: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockInfoResponse>(
    {
      action: 'block_info',
      data: {
        hash,
        jsonBlock: true,
      },
    },
    requestOptions
  )
}
