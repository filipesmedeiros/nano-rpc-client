import { NanoFetcher } from '../fetcher'

export interface BootstrapAnyResponse {
  success: ''
}

export default function bootstrapAny(
  this: NanoFetcher,
  options?: { id?: string; force?: true; account?: string },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapAnyResponse>(
    {
      action: 'bootstrap_any',
      data: {
        ...options,
      },
    },
    requestOptions
  )
}
