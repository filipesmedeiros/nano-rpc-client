import { NanoFetcher } from './fetcher'

export interface BlocksInfoResponse {
  RESPONSE_TYPE: any
}

export default function blocksInfo(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlocksInfoResponse>(
    {
      action: 'blocks_info',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
