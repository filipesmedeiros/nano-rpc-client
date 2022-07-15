import { NanoFetcher } from '../fetcher'

export interface AccountRemoveResponse {
  RESPONSE_TYPE: any
}

export default function accountRemove(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountRemoveResponse>(
    {
      action: 'account_remove',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
