import { NanoFetcher } from '../fetcher'

export interface BootstrapAnyResponse {
  success: ''
}

export default function bootstrapAny(
  this: NanoFetcher,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapAnyResponse>(
    {
      action: 'bootstrap_any',
    },
    requestOptions
  )
}
