import { NanoAccountsBalances } from './accountsBalances'

export type AccountsFrontiersResponseFrontiers<
  Accounts extends readonly string[]
> = {
  [account in Accounts[number]]: string
}

export interface AccountsFrontiersResponse<Accounts extends readonly string[]> {
  frontiers: AccountsFrontiersResponseFrontiers<Accounts>
}

export class NanoAccountsFrontiers extends NanoAccountsBalances {
  constructor(rpcBaseUrl: string, fetcher: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  /**
   *
   * @param accounts use `as const` to enable autocomplete on the return data
   * @param requestOptions
   * @returns Account balances
   */
  async accountsFrontiers<Accounts extends readonly string[]>(
    accounts: Accounts,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountsFrontiersResponse<Accounts>>(
      {
        action: 'accounts_frontiers',
        data: {
          accounts,
        },
      },
      requestOptions
    )
  }
}
