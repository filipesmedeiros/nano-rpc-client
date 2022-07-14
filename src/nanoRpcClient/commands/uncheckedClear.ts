import { NanoFetcher } from '../fetcher'

export interface UncheckedClearResponse {
  RESPONSE_TYPE: any
}

export default function uncheckedClear(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedClearResponse>(
    {
      action: 'unchecked_clear',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
