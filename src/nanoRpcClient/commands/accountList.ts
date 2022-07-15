import { NanoFetcher } from '../fetcher'

export interface AccountListResponse {
  RESPONSE_TYPE: any
}

export default function accountList(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountListResponse>(
    {
      action: 'account_list',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
