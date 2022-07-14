import { NanoFetcher } from '../fetcher'

export interface NodeIdResponse {
  RESPONSE_TYPE: any
}

export default function nodeId(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<NodeIdResponse>(
    {
      action: 'node_id',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
