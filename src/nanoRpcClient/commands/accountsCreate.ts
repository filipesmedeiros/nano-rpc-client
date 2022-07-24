import { NanoFetcher } from '../fetcher'

export interface AccountsCreateResponse {
  accounts: string[]
}

export default function accountsCreate(
  this: NanoFetcher,
  args: {
    wallet: string
    count: number
  },
  options?: { work?: true },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountsCreateResponse>(
    {
      action: 'accounts_create',
      data: {
        ...args,
        ...options,
      },
    },
    requestOptions
  )
}
