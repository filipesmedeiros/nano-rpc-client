import { NanoFetcher } from './fetcher'

export interface RepresentativesOnlineResponse {
  RESPONSE_TYPE: any
}

export default function representativesOnline(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<RepresentativesOnlineResponse>(
    {
      action: 'representatives_online',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
