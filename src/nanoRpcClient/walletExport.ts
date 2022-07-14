import { NanoFetcher } from './fetcher'

export interface WalletExportResponse {
  RESPONSE_TYPE: any
}

export default function walletExport(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletExportResponse>(
    {
      action: 'wallet_export',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
