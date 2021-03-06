import { NanoFetcher } from '../fetcher'

export interface WalletChangeSeedResponse {
  RESPONSE_TYPE: any
}

export default function walletChangeSeed(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletChangeSeedResponse>(
    {
      action: 'wallet_change_seed',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
