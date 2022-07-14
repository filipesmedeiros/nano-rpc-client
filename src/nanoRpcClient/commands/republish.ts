import { NanoFetcher } from '../fetcher'

export interface RepublishResponse {
  RESPONSE_TYPE: any
}

export default function republish(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<RepublishResponse>(
    {
      action: 'republish',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
