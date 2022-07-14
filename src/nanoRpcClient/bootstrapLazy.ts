import { NanoFetcher } from './fetcher'

export interface BootstrapLazyResponse {
  RESPONSE_TYPE: any
}

export default function bootstrapLazy(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapLazyResponse>(
    {
      action: 'bootstrap_lazy',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
