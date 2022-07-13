import { NanoAccountsFrontiers } from './accountsFrontiers'

export type AccountsPendingResponsePending<
  Accounts extends readonly string[],
  Options extends { threshold?: true; source?: true } = {}
> = {
  [account in Accounts[number]]: Options['source'] extends true
    ? {
        [blockHash: string]: {
          amount: bigint
          source: string
        }
      }
    : Options['threshold'] extends true
    ? {
        [blockHash: string]: bigint
      }
    : string
}

export interface AccountsPendingResponse<
  Accounts extends readonly string[],
  Options extends { threshold?: true; source?: true }
> {
  blocks: AccountsPendingResponsePending<Accounts, Options>
}

export class NanoAccountsPending extends NanoAccountsFrontiers {
  constructor(rpcBaseUrl?: string, fetcher?: typeof fetch) {
    super(rpcBaseUrl, fetcher)
  }

  /**
   *
   * @param accounts use `as const` to enable autocomplete on the return data
   * @param requestOptions
   * @returns Account balances
   */
  async accountsPending<
    Accounts extends readonly string[],
    Options extends {
      count?: number
      threshold?: bigint
      source?: true
      includeActive?: true
      sorting?: true
      includeOnlyConfirmed?: true
    }
  >(
    accounts: Accounts,
    options?: Options,
    requestOptions?: { abortSignal: AbortSignal }
  ) {
    return this.fetch<
      AccountsPendingResponse<
        Accounts,
        {
          source: Options['source'] extends true ? true : undefined
          threshold: Options['threshold'] extends bigint ? true : undefined
        }
      >
    >(
      {
        action: 'accounts_frontiers',
        data: {
          accounts,
          ...options,
        },
      },
      requestOptions
    )
  }
}
