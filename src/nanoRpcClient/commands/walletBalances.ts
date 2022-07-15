import { NanoFetcher } from '../fetcher'

export interface WalletBalancesResponse {
  RESPONSE_TYPE: any
}

export default function walletBalances(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletBalancesResponse>(
    {
      action: 'wallet_balances',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
