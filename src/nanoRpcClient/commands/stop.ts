import { NanoFetcher } from '../fetcher'

export interface StopResponse {
  RESPONSE_TYPE: any
}

export default function stop(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<StopResponse>(
    {
      action: 'stop',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
