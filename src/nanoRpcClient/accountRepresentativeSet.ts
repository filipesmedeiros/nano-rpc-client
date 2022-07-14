import { NanoFetcher } from './fetcher'

export interface AccountRepresentativeSetResponse {
  RESPONSE_TYPE: any
}

export default function accountRepresentativeSet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountRepresentativeSetResponse>(
    {
      action: 'account_representative_set',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
