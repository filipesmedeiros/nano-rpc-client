import { NanoFetcher } from './fetcher'

export interface WalletDestroyResponse {
  RESPONSE_TYPE: any
}

export default function walletDestroy(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletDestroyResponse>(
    {
      action: 'wallet_destroy',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
