import { NanoFetcher } from './fetcher'

export type AccountInfoResponse<
  Options extends {
    representative?: true
    receivable?: true
    weight?: true
    includeConfirmed?: true
  } = {}
> = {
  frontier: string
  openBlock: string
  representativeBlock: string
  balance: bigint
  modifiedTimestamp: bigint
  blockCount: bigint
  accountVersion: bigint
  confirmationHeight: bigint
  confirmationHeightFrontier: string
} & (Options['representative'] extends true
  ? {
      representative: string
    }
  : {}) &
  (Options['receivable'] extends true
    ? {
        receivable: bigint
      }
    : {}) &
  (Options['weight'] extends true ? { weight: bigint } : {}) &
  (Options['includeConfirmed'] extends true
    ? {
        confirmedBalance: bigint
        confirmedHeight: bigint
        confirmedFrontier: string
      } & (Options['representative'] extends true
        ? { confirmedRepresentative: string }
        : {}) &
        (Options['receivable'] extends true
          ? { confirmedReceivable: bigint }
          : {})
    : {})

export default function accountInfo<
  Options extends {
    representative?: true
    receivable?: true
    weight?: true
    includeConfirmed?: true
  }
>(
  this: NanoFetcher,
  account: string,
  options?: Options,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountInfoResponse<Options>>(
    {
      action: 'account_info',
      data: {
        account,
        ...options,
      },
    },
    requestOptions
  )
}
