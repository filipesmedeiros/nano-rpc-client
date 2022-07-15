import { NanoFetcher } from '../fetcher'

export interface RepresentativesOnlineResponse {
  RESPONSE_TYPE: any
}

export default function representativesOnline(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<RepresentativesOnlineResponse>(
    {
      action: 'representatives_online',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
