import { NanoFetcher } from '../fetcher'

export interface ConfirmationHistoryResponse {
  confirmation_stats: {
    count: bigint
    average: bigint
  }
  confirmations: {
    hash: string
    duration: bigint
    time: bigint
    tally: bigint
    blocks: bigint
    voters: bigint
    requestCount: bigint
  }[]
}

export default function confirmationHistory(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ConfirmationHistoryResponse>(
    {
      action: 'confirmation_history',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
