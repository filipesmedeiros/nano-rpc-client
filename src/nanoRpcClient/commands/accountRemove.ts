import { NanoFetcher } from '../fetcher'

export interface AccountRemoveResponse {
  RESPONSE_TYPE: any
}

export default function accountRemove(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountRemoveResponse>(
    {
      action: 'account_remove',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
