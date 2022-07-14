import { NanoFetcher } from '../fetcher'

export interface BootstrapLazyResponse {
  started: 1n | 0n
  keyInserted: 1n | 0n
}

export default function bootstrapLazy(
  this: NanoFetcher,
  hash: string,
  options?: { id?: string; force?: true },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapLazyResponse>(
    {
      action: 'bootstrap_lazy',
      data: {
        hash,
        ...options,
      },
    },
    requestOptions
  )
}
