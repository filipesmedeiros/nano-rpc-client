import { NanoFetcher } from '../fetcher'

export interface AccountsPendingResponse<Accounts extends readonly string[]> {
  representatives: { [account in Accounts[number]]: string }
}

/**
 *
 * @param accounts use `as const` to enable autocomplete on the return data
 * @param requestOptions
 * @returns Account representatives
 */
export default function accountsPending<Accounts extends readonly string[]>(
  this: NanoFetcher,
  accounts: Accounts,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountsPendingResponse<Accounts>>(
    {
      action: 'accounts_representatives',
      data: {
        accounts,
      },
    },
    requestOptions
  )
}
