import { NanoFetcher } from '../fetcher'

export interface AccountCreateResponse {
  RESPONSE_TYPE: any
}

export default function accountCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountCreateResponse>(
    {
      action: 'account_create',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
