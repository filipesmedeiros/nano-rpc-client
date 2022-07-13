import { NanoAccountKey } from './accountKey'

export interface AccountRepresentativeResponse {
  representative: string
}

export class NanoAccountRepresentative extends NanoAccountKey {
  constructor(rpcBaseUrl?: string, fetcher?: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountRepresentative(
    account: string,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountRepresentativeResponse>(
      {
        action: 'account_representative',
        data: {
          account,
        },
      },
      requestOptions
    )
  }
}
