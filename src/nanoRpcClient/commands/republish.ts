import { NanoFetcher } from '../fetcher'

export interface RepublishResponse {
  RESPONSE_TYPE: any
}

export default function republish(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<RepublishResponse>(
    {
      action: 'republish',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
