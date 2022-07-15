import { NanoFetcher } from '../fetcher'

export interface WorkPeerAddResponse {
  RESPONSE_TYPE: any
}

export default function workPeerAdd(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkPeerAddResponse>(
    {
      action: 'work_peer_add',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
