import { NanoFetcher } from './fetcher'

export interface BlockAccountResponse {
  account: bigint
}

export default async function blockAccount(
  this: NanoFetcher,
  hash: string,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlockAccountResponse>(
    {
      action: 'block_account',
      data: {
        hash,
      },
    },
    requestOptions
  )
}
