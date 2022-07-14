import { NanoFetcher } from './fetcher'

export interface RepresentativesResponse {
  RESPONSE_TYPE: any
}

export default function representatives(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<RepresentativesResponse>(
    {
      action: 'representatives',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
