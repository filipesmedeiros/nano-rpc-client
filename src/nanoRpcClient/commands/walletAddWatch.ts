import { NanoFetcher } from '../fetcher'

export interface WalletAddWatchResponse {
  RESPONSE_TYPE: any
}

export default function walletAddWatch(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletAddWatchResponse>(
    {
      action: 'wallet_add_watch',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
