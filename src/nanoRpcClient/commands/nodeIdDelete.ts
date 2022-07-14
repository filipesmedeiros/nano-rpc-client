import { NanoFetcher } from '../fetcher'

export interface NodeIdDeleteResponse {
  RESPONSE_TYPE: any
}

export default function nodeIdDelete(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<NodeIdDeleteResponse>(
    {
      action: 'node_id_delete',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
