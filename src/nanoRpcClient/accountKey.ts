import { NanoAccountInfo } from './accountInfo'

export interface AccountKeyResponse {
  key: string
}

export class NanoAccountKey extends NanoAccountInfo {
  constructor(rpcBaseUrl: string, fetcher: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountKey(
    account: string,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountKeyResponse>(
      {
        action: 'account_key',
        data: {
          account,
        },
      },
      requestOptions
    )
  }
}
