import { NanoFetcher } from '../fetcher'

export interface WalletRepresentativeSetResponse {
  RESPONSE_TYPE: any
}

export default function walletRepresentativeSet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletRepresentativeSetResponse>(
    {
      action: 'wallet_representative_set',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
