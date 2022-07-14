import { NanoFetcher } from './fetcher'

export interface UncheckedResponse {
  RESPONSE_TYPE: any
}

export default function unchecked(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedResponse>(
    {
      action: 'unchecked',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
