import { NanoFetcher } from '../fetcher'

export interface DeterministicKeyResponse {
  RESPONSE_TYPE: any
}

export default function deterministicKey(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DeterministicKeyResponse>(
    {
      action: 'deterministic_key',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
