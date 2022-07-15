import { NanoFetcher } from '../fetcher'

export interface WalletDestroyResponse {
  RESPONSE_TYPE: any
}

export default function walletDestroy(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletDestroyResponse>(
    {
      action: 'wallet_destroy',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
