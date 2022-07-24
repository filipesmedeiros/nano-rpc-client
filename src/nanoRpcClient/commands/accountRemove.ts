import { NanoFetcher } from '../fetcher'

export interface AccountRemoveResponse {
  removed: 1
}

export default function accountRemove(
  this: NanoFetcher,
  args: {
    wallet: string
    account: string
  },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountRemoveResponse>(
    {
      action: 'account_remove',
      data: {
        ...args,
      },
    },
    requestOptions
  )
}
