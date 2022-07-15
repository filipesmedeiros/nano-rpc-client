import { NanoFetcher } from '../fetcher'

export interface SuccessorsResponse {
  RESPONSE_TYPE: any
}

export default function successors(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<SuccessorsResponse>(
    {
      action: 'successors',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
