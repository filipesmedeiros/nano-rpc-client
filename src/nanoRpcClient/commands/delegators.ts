import { NanoFetcher } from '../fetcher'

export interface DelegatorsResponse {
  RESPONSE_TYPE: any
}

export default function delegators(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DelegatorsResponse>(
    {
      action: 'delegators',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
