import { NanoFetcher } from '../fetcher'

export interface SignResponse {
  RESPONSE_TYPE: any
}

export default function sign(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SignResponse>(
    {
      action: 'sign',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
