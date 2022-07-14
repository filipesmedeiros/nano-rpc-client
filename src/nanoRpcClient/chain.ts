import { NanoFetcher } from './fetcher'

export interface ChainResponse {
  RESPONSE_TYPE: any
}

export default function chain(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ChainResponse>(
    {
      action: 'chain',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
