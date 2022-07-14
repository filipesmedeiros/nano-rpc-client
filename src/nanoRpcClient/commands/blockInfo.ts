import { BlockType } from '../../types/types'
import { NanoFetcher } from '../fetcher'

export interface BlockInfoResponse {
  block_account: string
  amount: bigint
  balance: bigint
  height: bigint
  local_timestamp: bigint
  successor: string
  confirmed: boolean
  contents: {
    type: 'state'
    account: string
    previous: string
    representative: string
    balance: bigint
    link: string
    link_as_account: string
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
      },
    },
    requestOptions
  )
}
