import { NanoFetcher } from '../fetcher'

export interface KeyExpandResponse {
  RESPONSE_TYPE: any
}

export default function keyExpand(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<KeyExpandResponse>(
    {
      action: 'key_expand',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
