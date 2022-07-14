import { NanoFetcher } from '../fetcher'

export interface ConfirmationHistoryResponse {
  RESPONSE_TYPE: any
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
