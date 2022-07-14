import { NanoFetcher } from '../fetcher'

export interface WorkPeersClearResponse {
  RESPONSE_TYPE: any
}

export default function workPeersClear(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkPeersClearResponse>(
    {
      action: 'work_peers_clear',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
