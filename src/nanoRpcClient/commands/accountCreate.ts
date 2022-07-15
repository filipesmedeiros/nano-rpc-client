import { NanoFetcher } from '../fetcher'

export interface AccountCreateResponse {
  RESPONSE_TYPE: any
}

export default function accountCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountCreateResponse>(
    {
      action: 'account_create',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
