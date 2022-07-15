import { NanoFetcher } from '../fetcher'

export interface UncheckedClearResponse {
  RESPONSE_TYPE: any
}

export default function uncheckedClear(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedClearResponse>(
    {
      action: 'unchecked_clear',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
