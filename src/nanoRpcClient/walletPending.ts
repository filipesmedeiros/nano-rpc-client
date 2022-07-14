import { NanoFetcher } from './fetcher'

export interface WalletPendingResponse {
  RESPONSE_TYPE: any
}

export default function walletPending(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletPendingResponse>(
    {
      action: 'wallet_pending',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
