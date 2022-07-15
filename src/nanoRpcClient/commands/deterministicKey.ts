import { NanoFetcher } from '../fetcher'

export interface DeterministicKeyResponse {
  RESPONSE_TYPE: any
}

export default function deterministicKey(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DeterministicKeyResponse>(
    {
      action: 'deterministic_key',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
