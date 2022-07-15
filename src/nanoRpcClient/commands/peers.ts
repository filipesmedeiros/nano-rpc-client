import { NanoFetcher } from '../fetcher'

export interface PeersResponse {
  RESPONSE_TYPE: any
}

export default function peers(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<PeersResponse>(
    {
      action: 'peers',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
