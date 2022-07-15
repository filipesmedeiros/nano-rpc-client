import { NanoFetcher } from '../fetcher'

export interface AccountsCreateResponse {
  RESPONSE_TYPE: any
}

export default function accountsCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountsCreateResponse>(
    {
      action: 'accounts_create',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
