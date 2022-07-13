import { NanoFetcher } from './fetcher'

export interface AccountBalanceResponse {
  balance: bigint
  pending: bigint
  receivable: bigint
}

export class NanoAccountBalance extends NanoFetcher {
  constructor(rpcBaseUrl?: string, fetcher?: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountBalance(
    account: string,
    options?: {
      includeOnlyConfirmed?: true
    },
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountBalanceResponse>(
      {
        action: 'account_balance',
        data: {
          account,
          ...options,
        },
      },
      requestOptions
    )
  }
}
