import { NanoFetcher } from './fetcher'

export type AccountsBalancesResponseBalances<
  Accounts extends readonly string[]
> = {
  [account in Accounts[number]]: {
    balance: bigint
    pending: bigint
    receivable: bigint
  }
}

export interface AccountsBalancesResponse<Accounts extends readonly string[]> {
  balances: AccountsBalancesResponseBalances<Accounts>
}

/**
 *
 * @param accounts use `as const` to enable autocomplete on the return data
 * @param requestOptions
 * @returns Account balances
 */
export default async function accountsBalances<
  Accounts extends readonly string[]
>(
  this: NanoFetcher,
  accounts: Accounts,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountsBalancesResponse<Accounts>>(
    {
      action: 'accounts_balances',
      data: {
        accounts,
      },
    },
    requestOptions
  )
}
