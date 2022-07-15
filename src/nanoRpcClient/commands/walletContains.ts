import { NanoFetcher } from '../fetcher'

export interface WalletContainsResponse {
  RESPONSE_TYPE: any
}

export default function walletContains(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletContainsResponse>(
    {
      action: 'wallet_contains',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
