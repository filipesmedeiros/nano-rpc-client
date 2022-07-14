import { NanoFetcher } from '../fetcher'

export interface BlocksResponse {
  RESPONSE_TYPE: any
}

export default function blocks(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlocksResponse>(
    {
      action: 'blocks',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
