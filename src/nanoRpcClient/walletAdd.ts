import { NanoFetcher } from './fetcher'

export interface WalletAddResponse {
  RESPONSE_TYPE: any
}

export default function walletAdd(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletAddResponse>(
    {
      action: 'wallet_add',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
