import { NanoFetcher } from '../fetcher'

export interface AccountCreateResponse {
  account: string
}

export default function accountCreate(
  this: NanoFetcher,
  wallet: string,
  options?: { index?: number; work?: false },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountCreateResponse>(
    {
      action: 'account_create',
      data: {
        wallet,
        ...options,
      },
    },
    requestOptions
  )
}
