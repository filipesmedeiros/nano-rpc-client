import { NanoAccountBlockCount } from './accountBlockCount'

export interface AccountGetResponse {
  account: string
}

export class NanoAccountGet extends NanoAccountBlockCount {
  constructor(rpcBaseUrl?: string, fetcher?: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountGet(
    account: string,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountGetResponse>(
      {
        action: 'account_get',
        data: {
          account,
        },
      },
      requestOptions
    )
  }
}
