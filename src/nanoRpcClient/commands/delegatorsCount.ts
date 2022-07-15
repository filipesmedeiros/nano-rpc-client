import { NanoFetcher } from '../fetcher'

export interface DelegatorsCountResponse {
  RESPONSE_TYPE: any
}

export default function delegatorsCount(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DelegatorsCountResponse>(
    {
      action: 'delegators_count',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
