import { NanoFetcher } from '../fetcher'

export interface WalletCreateResponse {
  RESPONSE_TYPE: any
}

export default function walletCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletCreateResponse>(
    {
      action: 'wallet_create',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
