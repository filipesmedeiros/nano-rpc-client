import { NanoFetcher } from '../fetcher'

export interface WalletFrontiersResponse {
  RESPONSE_TYPE: any
}

export default function walletFrontiers(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletFrontiersResponse>(
    {
      action: 'wallet_frontiers',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
