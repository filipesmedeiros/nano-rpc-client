import { NanoFetcher } from '../fetcher'

export interface ChainResponse {
  blocks: string[]
}

export default function chain(
  this: NanoFetcher,
  block: string,
  options?: { count?: number; offset?: number; reverse?: true },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ChainResponse>(
    {
      action: 'chain',
      data: {
        block,
        ...options,
      },
    },
    requestOptions
  )
}
