import { NanoFetcher } from '../fetcher'

export interface KeyCreateResponse {
  RESPONSE_TYPE: any
}

export default function keyCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<KeyCreateResponse>(
    {
      action: 'key_create',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
