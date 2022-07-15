import { NanoFetcher } from '../fetcher'

export interface WorkPeersResponse {
  RESPONSE_TYPE: any
}

export default function workPeers(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkPeersResponse>(
    {
      action: 'work_peers',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
