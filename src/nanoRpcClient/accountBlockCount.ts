import { NanoFetcher } from './fetcher'

export interface AccountBlockCountResponse {
  blockCount: bigint
}

export default async function accountBlockCount(
  this: NanoFetcher,
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
