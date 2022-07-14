import { NanoFetcher } from '../fetcher'

export interface ConfirmationQuorumResponse {
  RESPONSE_TYPE: any
}

export default function confirmationQuorum(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ConfirmationQuorumResponse>(
    {
      action: 'confirmation_quorum',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
