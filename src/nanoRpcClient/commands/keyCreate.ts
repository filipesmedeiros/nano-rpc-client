import { NanoFetcher } from '../fetcher'

export interface KeyCreateResponse {
  RESPONSE_TYPE: any
}

export default function keyCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<KeyCreateResponse>(
    {
      action: 'key_create',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
