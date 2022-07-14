import { NanoFetcher } from '../fetcher'

export interface AccountBalanceResponse {
  balance: bigint
  pending: bigint
  receivable: bigint
}

export default function accountBalance(
  this: NanoFetcher,
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
