import { NanoFetcher } from '../fetcher'

export interface SearchPendingAllResponse {
  RESPONSE_TYPE: any
}

export default function searchPendingAll(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SearchPendingAllResponse>(
    {
      action: 'search_pending_all',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
