import { NanoFetcher } from '../fetcher'

export interface WalletLockedResponse {
  RESPONSE_TYPE: any
}

export default function walletLocked(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletLockedResponse>(
    {
      action: 'wallet_locked',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
