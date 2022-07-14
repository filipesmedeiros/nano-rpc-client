import { NanoFetcher } from './fetcher'

export interface BootstrapStatusResponse {
  RESPONSE_TYPE: any
}

export default function bootstrapStatus(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapStatusResponse>(
    {
      action: 'bootstrap_status',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
