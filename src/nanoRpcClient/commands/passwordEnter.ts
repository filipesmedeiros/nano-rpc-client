import { NanoFetcher } from '../fetcher'

export interface PasswordEnterResponse {
  RESPONSE_TYPE: any
}

export default function passwordEnter(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<PasswordEnterResponse>(
    {
      action: 'password_enter',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
