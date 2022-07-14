import { NanoFetcher } from './fetcher'

export interface WalletResponse {
  RESPONSE_TYPE: any
}

export default function wallet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletResponse>(
    {
      action: 'wallet)',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
