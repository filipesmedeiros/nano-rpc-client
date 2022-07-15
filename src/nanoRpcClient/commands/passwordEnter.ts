import { NanoFetcher } from '../fetcher'

export interface PasswordEnterResponse {
  RESPONSE_TYPE: any
}

export default function passwordEnter(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<PasswordEnterResponse>(
    {
      action: 'password_enter',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
