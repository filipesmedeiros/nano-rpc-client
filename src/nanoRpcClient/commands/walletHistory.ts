import { NanoFetcher } from '../fetcher'

export interface WalletHistoryResponse {
  RESPONSE_TYPE: any
}

export default function walletHistory(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletHistoryResponse>(
    {
      action: 'wallet_history',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
