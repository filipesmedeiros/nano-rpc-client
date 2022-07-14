import { NanoFetcher } from '../fetcher'

export interface PeersResponse {
  RESPONSE_TYPE: any
}

export default function peers(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<PeersResponse>(
    {
      action: 'peers',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
