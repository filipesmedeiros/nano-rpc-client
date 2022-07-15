import { NanoFetcher } from '../fetcher'

export interface RepresentativesResponse {
  RESPONSE_TYPE: any
}

export default function representatives(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<RepresentativesResponse>(
    {
      action: 'representatives',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
