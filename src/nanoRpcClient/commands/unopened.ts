import { NanoFetcher } from '../fetcher'

export interface UnopenedResponse {
  RESPONSE_TYPE: any
}

export default function unopened(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UnopenedResponse>(
    {
      action: 'unopened',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
