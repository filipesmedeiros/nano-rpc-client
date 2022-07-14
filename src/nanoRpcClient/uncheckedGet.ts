import { NanoFetcher } from './fetcher'

export interface UncheckedGetResponse {
  RESPONSE_TYPE: any
}

export default function uncheckedGet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedGetResponse>(
    {
      action: 'unchecked_get',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
