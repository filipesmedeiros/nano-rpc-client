import { NanoFetcher } from './fetcher'

export interface AccountMoveResponse {
  RESPONSE_TYPE: any
}

export default function accountMove(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AccountMoveResponse>(
    {
      action: 'account_move',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
