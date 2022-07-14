import { NanoFetcher } from './fetcher'

export interface PasswordChangeResponse {
  RESPONSE_TYPE: any
}

export default function passwordChange(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<PasswordChangeResponse>(
    {
      action: 'password_change',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
