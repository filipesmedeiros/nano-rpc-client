import { NanoFetcher } from '../fetcher'

export interface AccountRepresentativeSetResponse {
  block: string
}

export default function accountRepresentativeSet(
  this: NanoFetcher,
  args: {
    wallet: string
    account: string
  },
  options?: { work?: string },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountRepresentativeSetResponse>(
    {
      action: 'account_representative_set',
      data: {
        ...args,
        ...options,
      },
    },
    requestOptions
  )
}
