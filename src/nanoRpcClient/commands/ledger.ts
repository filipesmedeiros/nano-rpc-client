import { NanoFetcher } from '../fetcher'

export interface LedgerResponse {
  RESPONSE_TYPE: any
}

export default function ledger(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<LedgerResponse>(
    {
      action: 'ledger',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
