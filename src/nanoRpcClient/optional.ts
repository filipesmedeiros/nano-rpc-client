import { NanoFetcher } from './fetcher'

export interface OptionalResponse {
  RESPONSE_TYPE: any
}

export default function optional(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<OptionalResponse>(
    {
      action: '(optional',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
