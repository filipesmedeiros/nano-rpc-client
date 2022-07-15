import { NanoFetcher } from '../fetcher'

export interface AccountMoveResponse {
  RESPONSE_TYPE: any
}

export default function accountMove(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountMoveResponse>(
    {
      action: 'account_move',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
