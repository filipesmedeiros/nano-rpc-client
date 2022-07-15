import { NanoFetcher } from '../fetcher'

export interface ValidateAccountNumberResponse {
  RESPONSE_TYPE: any
}

export default function validateAccountNumber(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ValidateAccountNumberResponse>(
    {
      action: 'validate_account_number',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
