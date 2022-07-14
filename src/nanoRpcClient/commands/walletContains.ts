import { NanoFetcher } from '../fetcher'

export interface WalletContainsResponse {
  RESPONSE_TYPE: any
}

export default function walletContains(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletContainsResponse>(
    {
      action: 'wallet_contains',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
