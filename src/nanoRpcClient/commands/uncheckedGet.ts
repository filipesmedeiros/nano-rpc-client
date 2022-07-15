import { NanoFetcher } from '../fetcher'

export interface UncheckedGetResponse {
  RESPONSE_TYPE: any
}

export default function uncheckedGet(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedGetResponse>(
    {
      action: 'unchecked_get',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
