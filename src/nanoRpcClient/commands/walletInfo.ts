import { NanoFetcher } from '../fetcher'

export interface WalletInfoResponse {
  RESPONSE_TYPE: any
}

export default function walletInfo(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletInfoResponse>(
    {
      action: 'wallet_info',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
