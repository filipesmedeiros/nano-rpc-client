import { NanoFetcher } from './fetcher'

export interface WalletAddWatchResponse {
  RESPONSE_TYPE: any
}

export default function walletAddWatch(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletAddWatchResponse>(
    {
      action: 'wallet_add_watch',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
