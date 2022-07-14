import { NanoFetcher } from '../fetcher'

export interface DelegatorsResponse {
  RESPONSE_TYPE: any
}

export default function delegators(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DelegatorsResponse>(
    {
      action: 'delegators',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
