import { NanoFetcher } from '../fetcher'

export interface UncheckedResponse {
  RESPONSE_TYPE: any
}

export default function unchecked(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedResponse>(
    {
      action: 'unchecked',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
