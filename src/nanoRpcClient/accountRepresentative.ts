import { NanoFetcher } from './fetcher'

export interface AccountRepresentativeResponse {
  representative: string
}

export default function accountRepresentative(
  this: NanoFetcher,
  account: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountRepresentativeResponse>(
    {
      action: 'account_representative',
      data: {
        account,
      },
    },
    requestOptions
  )
}
