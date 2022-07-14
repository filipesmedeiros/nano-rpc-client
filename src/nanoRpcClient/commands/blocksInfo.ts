import { BlockType } from '../../types/types'
import { NanoFetcher } from '../fetcher'

export type BlocksInfoResponse<
  Hashes extends readonly string[],
  Options extends {
    pending?: true
    source?: true
    includeNotFound?: true
  }
> = {
  blocks: {
    [hash in Hashes[number]]: {
      blockAccount: string
      amount: bigint
      balance: bigint
      height: bigint
      localTimestamp: bigint
      successor: string
      confirmed: boolean
      contents: {
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
    } & (Options['pending'] extends true ? { pending: bigint } : {}) &
      (Options['source'] extends true
        ?
            | {
                subtype: 'send' | 'change'
                sourceAccount: 0n
              }
            | {
                subtype: 'receive'
                sourceAccount: string
              }
        : {
            subtype: BlockType
          })
  }
} & Options['includeNotFound'] extends true
  ? {
      blocksNotFound: string[]
    }
  : {}

/**
 *
 * @param hashes use `as const` to enable autocomplete on the return data
 * @param options
 * @param requestOptions
 * @returns Blocks
 */
export default function blocksInfo<
  Options extends {
    pending?: true
    source?: true
    includeNotFound?: true
  }
>(
  this: NanoFetcher,
  hashes: readonly string[],
  options?: Options,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BlocksInfoResponse<typeof hashes, Options>>(
    {
      action: 'blocks_info',
      data: {
        hashes,
        ...options,
        jsonBlock: true,
      },
    },
    requestOptions
  )
}
