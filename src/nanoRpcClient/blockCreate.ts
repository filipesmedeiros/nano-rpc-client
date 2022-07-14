import { NanoFetcher } from './fetcher'

export interface BlockCreateResponse {
  RESPONSE_TYPE: any
}

export default function blockCreate(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockCreateResponse>(
    {
      action: 'block_create',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
