import { HttpError } from '../lib/httpError'
import { RpcError } from '../lib/rpcError'
import {
  keysToCamel,
  keysToSnake,
  replacer,
  reviver,
} from '../lib/transformData'
import {
  BlockType,
  BooleanString,
  NumberString,
  RpcAction,
  RpcResponse,
} from '../types/types'
import { NanoAccountGet } from './accountGet'

export interface AccountHistoryResponse {
  account: string
  history: {
    type: BlockType
    account: string
    amount: NumberString
    localTimestamp: NumberString
    height: NumberString
    hash: string
    confirmed: BooleanString
  }[]
  previous: string
}

export interface AccountHistoryResponseRaw {
  account: string
  history: {
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
  }[]
  previous: string
}

export class NanoAccountHistory extends NanoAccountGet {
  constructor(rpcBaseUrl: string, fetcher: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountHistory(
    account: string,
    options: {
      count?: number | string
      raw: true
      head?: string
      offset?: number | string
      reverse?: true
      accountFilter?: string[]
    },
    requestOptions?: { abortSignal: AbortSignal }
  ): Promise<AccountHistoryResponseRaw>
  async accountHistory(
    account: string,
    options?: {
      count?: number | string
      head?: string
      offset?: number | string
      reverse?: true
      accountFilter?: string[]
    },
    requestOptions?: { abortSignal: AbortSignal }
  ): Promise<AccountHistoryResponse>
  async accountHistory(
    account: string,
    options?: {
      count?: number | string
      raw?: true
      head?: string
      offset?: number | string
      reverse?: true
      accountFilter?: string[]
    },
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch(
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
}
