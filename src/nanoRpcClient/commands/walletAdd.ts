import { NanoFetcher } from '../fetcher'

export interface WalletAddResponse {
  RESPONSE_TYPE: any
}

export default function walletAdd(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletAddResponse>(
    {
      action: 'wallet_add',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
