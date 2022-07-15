import { NanoFetcher } from '../fetcher'

export interface WalletRepresentativeResponse {
  RESPONSE_TYPE: any
}

export default function walletRepresentative(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletRepresentativeResponse>(
    {
      action: 'wallet_representative',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
