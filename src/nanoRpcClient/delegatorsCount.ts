import { NanoFetcher } from './fetcher'

export interface DelegatorsCountResponse {
  RESPONSE_TYPE: any
}

export default function delegatorsCount(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DelegatorsCountResponse>(
    {
      action: 'delegators_count',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
