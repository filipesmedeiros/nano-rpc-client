import { NanoFetcher } from '../fetcher'

export interface NodeIdDeleteResponse {
  RESPONSE_TYPE: any
}

export default function nodeIdDelete(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<NodeIdDeleteResponse>(
    {
      action: 'node_id_delete',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
