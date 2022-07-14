import { NanoFetcher } from './fetcher'

export interface AccountsCreateResponse {
  RESPONSE_TYPE: any
}

export default function accountsCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountsCreateResponse>(
    {
      action: 'accounts_create',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
