import { NanoFetcher } from '../fetcher'

export interface ProcessResponse {
  RESPONSE_TYPE: any
}

export default function process(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ProcessResponse>(
    {
      action: 'process',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
