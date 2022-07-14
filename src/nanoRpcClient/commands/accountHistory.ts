import { BlockType, BooleanString, NumberString } from '../../types/types'
import { NanoFetcher } from '../fetcher'

export interface AccountHistoryResponse<Raw extends boolean = false> {
  account: string
  history: (Raw extends true
    ? {
        type: 'state'
        subtype: BlockType
        account: string
        amount: NumberString
        localTimestamp: NumberString
        height: NumberString
        hash: string
        confirmed: BooleanString
        previous: string
        representative: string
        balance: NumberString
        link: string
        linkAsAccount: string
        signature: string
        work: string
      }
    : {
        type: BlockType
        account: string
        amount: NumberString
        localTimestamp: NumberString
        height: NumberString
        hash: string
        confirmed: BooleanString
      })[]
  previous: string
}

export default function accountHistory<
  Options extends {
    count?: number
    raw?: true
    head?: string
    offset?: number
    reverse?: true
    accountFilter?: string[]
  }
>(
  this: NanoFetcher,
  account: string,
  options?: Options,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<
    AccountHistoryResponse<Options['raw'] extends true ? true : false>
  >(
    {
      action: 'account_history',
      data: {
        account,
        ...options,
      },
    },
    requestOptions
  )
}
