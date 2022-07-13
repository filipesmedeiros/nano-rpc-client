import { NanoAccountRepresentative } from './accountRepresentative'

export interface AccountWeightResponse {
  weight: bigint
}

export class NanoAccountWeight extends NanoAccountRepresentative {
  constructor(rpcBaseUrl: string, fetcher: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountWeight(
    account: string,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountWeightResponse>(
      {
        action: 'account_weight',
        data: {
          account,
        },
      },
      requestOptions
    )
  }
}
