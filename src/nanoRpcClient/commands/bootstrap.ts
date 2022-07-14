import { NanoFetcher } from '../fetcher'

export interface BootstrapResponse {
  RESPONSE_TYPE: any
}

export default function bootstrap(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapResponse>(
    {
      action: 'bootstrap',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
