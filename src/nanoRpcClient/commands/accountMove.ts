import { NanoFetcher } from '../fetcher'

export interface AccountMoveResponse {
  moved: 1n
}

export default function accountMove(
  this: NanoFetcher,
  args: {
    wallet: string
    source: string
    accounts: string[]
  },

  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountMoveResponse>(
    {
      action: 'account_move',
      data: {
        ...args,
      },
    },
    requestOptions
  )
}
