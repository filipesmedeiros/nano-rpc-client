import { NanoFetcher } from './fetcher'

export interface AccountKeyResponse {
  key: string
}

export default async function accountKey(
  this: NanoFetcher,
  account: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountKeyResponse>(
    {
      action: 'account_key',
      data: {
        account,
      },
    },
    requestOptions
  )
}
