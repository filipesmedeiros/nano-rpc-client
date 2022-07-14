import { NanoFetcher } from '../fetcher'

export interface BootstrapAnyResponse {
  RESPONSE_TYPE: any
}

export default function bootstrapAny(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapAnyResponse>(
    {
      action: 'bootstrap_any',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
