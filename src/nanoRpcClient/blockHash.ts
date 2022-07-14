import { NanoFetcher } from './fetcher'

export interface BlockHashResponse {
  RESPONSE_TYPE: any
}

export default function blockHash(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockHashResponse>(
    {
      action: 'block_hash',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
