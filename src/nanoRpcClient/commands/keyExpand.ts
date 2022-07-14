import { NanoFetcher } from '../fetcher'

export interface KeyExpandResponse {
  RESPONSE_TYPE: any
}

export default function keyExpand(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<KeyExpandResponse>(
    {
      action: 'key_expand',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
