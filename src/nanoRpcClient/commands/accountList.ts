import { NanoFetcher } from '../fetcher'

export interface AccountListResponse {
  accounts: string[]
}

export default function accountList(
  this: NanoFetcher,
  wallet: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountListResponse>(
    {
      action: 'account_list',
      data: {
        wallet,
      },
    },
    requestOptions
  )
}
