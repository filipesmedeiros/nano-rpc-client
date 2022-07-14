import { NanoFetcher } from '../fetcher'

export type AccountsFrontiersResponseFrontiers<
  Accounts extends readonly string[]
> = {
  [account in Accounts[number]]: string
}

export interface AccountsFrontiersResponse<Accounts extends readonly string[]> {
  frontiers: AccountsFrontiersResponseFrontiers<Accounts>
}

/**
 *
 * @param accounts use `as const` to enable autocomplete on the return data
 * @param requestOptions
 * @returns Account frontiers
 */
export default function accountsFrontiers<Accounts extends readonly string[]>(
  this: NanoFetcher,
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
