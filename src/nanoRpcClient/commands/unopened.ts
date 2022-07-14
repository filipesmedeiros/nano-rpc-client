import { NanoFetcher } from '../fetcher'

export interface UnopenedResponse {
  RESPONSE_TYPE: any
}

export default function unopened(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<UnopenedResponse>(
    {
      action: 'unopened',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
