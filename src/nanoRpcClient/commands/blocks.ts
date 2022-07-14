import { NanoFetcher } from '../fetcher'

export type BlocksResponse<Hashes extends readonly string[]> = {
  [hash in Hashes[number]]: {
    type: 'state'
    account: string
    previous: string
    representative: string
    balance: bigint
    link: string
    link_as_account: string
    signature: string
    work: string
  }
}

export default function blocks(
  this: NanoFetcher,
  hashes: readonly string[],
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlocksResponse<typeof hashes>>(
    {
      action: 'blocks',
      data: {
        hashes,
        jsonBlock: true,
      },
    },
    requestOptions
  )
}
