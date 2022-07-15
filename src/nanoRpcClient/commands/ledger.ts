import { NanoFetcher } from '../fetcher'

export interface LedgerResponse {
  RESPONSE_TYPE: any
}

export default function ledger(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<LedgerResponse>(
    {
      action: 'ledger',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
