import { NanoFetcher } from '../fetcher'

export interface WorkPeersClearResponse {
  RESPONSE_TYPE: any
}

export default function workPeersClear(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkPeersClearResponse>(
    {
      action: 'work_peers_clear',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
