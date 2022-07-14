import { NanoFetcher } from '../fetcher'

export interface SearchPendingAllResponse {
  RESPONSE_TYPE: any
}

export default function searchPendingAll(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SearchPendingAllResponse>(
    {
      action: 'search_pending_all',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
