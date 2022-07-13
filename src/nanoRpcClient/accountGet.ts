import { NanoFetcher } from './fetcher'

export interface AccountGetResponse {
  account: string
}

export default async function accountGet(
  this: NanoFetcher,
  key: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountGetResponse>(
    {
      action: 'account_get',
      data: {
        key,
      },
    },
    requestOptions
  )
}
