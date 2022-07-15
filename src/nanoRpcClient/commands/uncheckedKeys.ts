import { NanoFetcher } from '../fetcher'

export interface UncheckedKeysResponse {
  RESPONSE_TYPE: any
}

export default function uncheckedKeys(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedKeysResponse>(
    {
      action: 'unchecked_keys',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
