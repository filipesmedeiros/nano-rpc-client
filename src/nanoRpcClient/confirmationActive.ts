import { NanoFetcher } from './fetcher'

export interface ConfirmationActiveResponse {
  RESPONSE_TYPE: any
}

export default function confirmationActive(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ConfirmationActiveResponse>(
    {
      action: 'confirmation_active',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
