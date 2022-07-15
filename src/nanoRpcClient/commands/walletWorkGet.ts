import { NanoFetcher } from '../fetcher'

export interface WalletWorkGetResponse {
  RESPONSE_TYPE: any
}

export default function walletWorkGet(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WalletWorkGetResponse>(
    {
      action: 'wallet_work_get',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
