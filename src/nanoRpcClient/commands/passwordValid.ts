import { NanoFetcher } from '../fetcher'

export interface PasswordValidResponse {
  RESPONSE_TYPE: any
}

export default function passwordValid(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<PasswordValidResponse>(
    {
      action: 'password_valid',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
