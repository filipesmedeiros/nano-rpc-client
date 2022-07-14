import { NanoFetcher } from './fetcher'

export interface SignResponse {
  RESPONSE_TYPE: any
}

export default function sign(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SignResponse>(
    {
      action: 'sign',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
