import { NanoFetcher } from '../fetcher'

export interface UncheckedKeysResponse {
  RESPONSE_TYPE: any
}

export default function uncheckedKeys(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UncheckedKeysResponse>(
    {
      action: 'unchecked_keys',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
