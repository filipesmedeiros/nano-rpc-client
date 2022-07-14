import { NanoFetcher } from './fetcher'

export interface WalletRepublishResponse {
  RESPONSE_TYPE: any
}

export default function walletRepublish(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletRepublishResponse>(
    {
      action: 'wallet_republish',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
