import { NanoFetcher } from '../fetcher'

export interface BlockCreateResponse {
  hash: string
  difficulty: string
  block: {
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
}

export default function blockCreate(
  this: NanoFetcher,
  block: {
    balance: bigint
    wallet?: string
    account?: string
    key?: string
    source?: string
    destination?: string
    link?: string
    representative: string
    previous: string
  },
  options?:
    | {
        work: string
      }
    | { difficulty?: string; version?: string },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockCreateResponse>(
    {
      action: 'block_create',
      data: {
        ...block,
        jsonBlock: true,
        ...options,
      },
    },
    requestOptions
  )
}
