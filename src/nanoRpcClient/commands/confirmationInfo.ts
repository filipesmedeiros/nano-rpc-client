import { NanoFetcher } from '../fetcher'

export interface ConfirmationInfoResponse {
  RESPONSE_TYPE: any
}

export default function confirmationInfo(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ConfirmationInfoResponse>(
    {
      action: 'confirmation_info',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
