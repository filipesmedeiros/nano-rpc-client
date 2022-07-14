import { NanoFetcher } from '../fetcher'

export interface BlocksResponse<Hashes extends readonly string[]> {
  blocks: {
    [hash in Hashes[number]]: {
      type: 'state'
      account: string
      previous: string
      representative: string
      balance: bigint
      link: string
      linkAsAccount: string
      signature: string
      work: string
    }
  }
}

/**
 *
 * @param hashes use `as const` to enable autocomplete on the return data
 * @param requestOptions
 * @returns Blocks
 */
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
