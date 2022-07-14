import { NanoFetcher } from './fetcher'

export interface StopResponse {
  RESPONSE_TYPE: any
}

export default function stop(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<StopResponse>(
    {
      action: 'stop',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
