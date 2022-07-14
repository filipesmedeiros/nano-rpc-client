import { NanoFetcher } from '../fetcher'

export interface SuccessorsResponse {
  RESPONSE_TYPE: any
}

export default function successors(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SuccessorsResponse>(
    {
      action: 'successors',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
