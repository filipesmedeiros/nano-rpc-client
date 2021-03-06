import { NanoFetcher } from '../fetcher'

export interface WalletLockResponse {
  RESPONSE_TYPE: any
}

export default function walletLock(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletLockResponse>(
    {
      action: 'wallet_lock',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
