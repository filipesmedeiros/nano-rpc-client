import { NanoFetcher } from '../fetcher'

export interface BootstrapResponse {
  RESPONSE_TYPE: any
}

export default function bootstrap(
  this: NanoFetcher,
  args: {
    address: string
    port: string
  },
  options?: { id?: string; bypassFrontierConfirmation?: true },
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapResponse>(
    {
      action: 'bootstrap',
      data: {
        ...args,
        ...options,
      },
    },
    requestOptions
  )
}
