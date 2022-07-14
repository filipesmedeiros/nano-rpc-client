import { NanoFetcher } from './fetcher'

export interface WalletLedgerResponse {
  RESPONSE_TYPE: any
}

export default function walletLedger(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletLedgerResponse>(
    {
      action: 'wallet_ledger',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
