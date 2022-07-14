import { NanoFetcher } from '../fetcher'

export interface WalletWorkGetResponse {
  RESPONSE_TYPE: any
}

export default function walletWorkGet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletWorkGetResponse>(
    {
      action: 'wallet_work_get',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
