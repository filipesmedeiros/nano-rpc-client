import { NanoFetcher } from './fetcher'

export interface ReceivableResponse {
  RESPONSE_TYPE: any
}

export default function receivable(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ReceivableResponse>(
    {
      action: 'receivable',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
