import { NanoFetcher } from '../fetcher'

export interface WalletFrontiersResponse {
  RESPONSE_TYPE: any
}

export default function walletFrontiers(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletFrontiersResponse>(
    {
      action: 'wallet_frontiers',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
