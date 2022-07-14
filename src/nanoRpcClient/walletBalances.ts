import { NanoFetcher } from './fetcher'

export interface WalletBalancesResponse {
  RESPONSE_TYPE: any
}

export default function walletBalances(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletBalancesResponse>(
    {
      action: 'wallet_balances',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
