import { NanoFetcher } from './fetcher'

export interface SearchPendingResponse {
  RESPONSE_TYPE: any
}

export default function searchPending(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SearchPendingResponse>(
    {
      action: 'search_pending',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
