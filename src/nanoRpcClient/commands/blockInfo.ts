import { NanoFetcher } from '../fetcher'

export interface BlockInfoResponse {
  RESPONSE_TYPE: any
}

export default function blockInfo(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockInfoResponse>(
    {
      action: 'block_info',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
