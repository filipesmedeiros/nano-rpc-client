import { NanoFetcher } from './fetcher'

export interface FrontiersResponse {
  RESPONSE_TYPE: any
}

export default function frontiers(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<FrontiersResponse>(
    {
      action: 'frontiers',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
