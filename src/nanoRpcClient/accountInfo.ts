import { NanoAccountHistory } from './accountHistory'

export type AccountInfoResponse<
  Optionals extends {
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
} & (Optionals['representative'] extends true
  ? {
      representative: string
    }
  : {}) &
  (Optionals['receivable'] extends true
    ? {
        receivable: bigint
      }
    : {}) &
  (Optionals['weight'] extends true ? { weight: bigint } : {}) &
  (Optionals['includeConfirmed'] extends true
    ? {
        confirmedBalance: bigint
        confirmedHeight: bigint
        confirmedFrontier: string
      } & (Optionals['representative'] extends true
        ? { confirmedRepresentative: string }
        : {}) &
        (Optionals['receivable'] extends true
          ? { confirmedReceivable: bigint }
          : {})
    : {})

export class NanoAccountInfo extends NanoAccountHistory {
  constructor(rpcBaseUrl?: string, fetcher?: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  async accountInfo<
    Optionals extends {
      representative?: true
      receivable?: true
      weight?: true
      includeConfirmed?: true
    }
  >(
    account: string,
    options?: Optionals,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<AccountInfoResponse<Optionals>>(
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
}
