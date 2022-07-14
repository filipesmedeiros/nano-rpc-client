import { NanoFetcher } from './fetcher'

export interface PasswordValidResponse {
  RESPONSE_TYPE: any
}

export default function passwordValid(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<PasswordValidResponse>(
    {
      action: 'password_valid',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
