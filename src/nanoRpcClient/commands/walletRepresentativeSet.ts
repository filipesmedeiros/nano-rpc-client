import { NanoFetcher } from '../fetcher'

export interface WalletRepresentativeSetResponse {
  RESPONSE_TYPE: any
}

export default function walletRepresentativeSet(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletRepresentativeSetResponse>(
    {
      action: 'wallet_representative_set',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
