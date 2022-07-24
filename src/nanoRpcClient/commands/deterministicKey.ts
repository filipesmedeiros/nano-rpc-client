import { NanoFetcher } from '../fetcher'

export interface DeterministicKeyResponse {
  private: string
  public: string
  account: string
}

export default function deterministicKey(
  this: NanoFetcher,
  args: {
    seed: string
    index: number
  },
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<DeterministicKeyResponse>(
    {
      action: 'deterministic_key',
      data: {
        ...args,
      },
    },
    requestOptions
  )
}
