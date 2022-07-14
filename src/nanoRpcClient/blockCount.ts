import { NanoFetcher } from './fetcher'

export interface BlockCountResponse {
  RESPONSE_TYPE: any
}

export default function blockCount(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockCountResponse>(
    {
      action: 'block_count',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
