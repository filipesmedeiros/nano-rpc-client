import { NanoFetcher } from '../fetcher'

export interface AccountRepresentativeSetResponse {
  RESPONSE_TYPE: any
}

export default function accountRepresentativeSet(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountRepresentativeSetResponse>(
    {
      action: 'account_representative_set',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
