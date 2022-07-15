import { NanoFetcher } from '../fetcher'

export interface WalletLedgerResponse {
  RESPONSE_TYPE: any
}

export default function walletLedger(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletLedgerResponse>(
    {
      action: 'wallet_ledger',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
