import { NanoAccountBalance } from './accountBalance'

export interface AccountBlockCountResponse {
  blockCount: bigint
}

export class NanoAccountBlockCount extends NanoAccountBalance {
  constructor(rpcBaseUrl: string, fetcher: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountBlockCount(
    account: string,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountBlockCountResponse>(
      {
        action: 'account_block_count',
        data: {
          account,
        },
      },
      requestOptions
    )
  }
}
