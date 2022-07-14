import { NanoFetcher } from '../fetcher'

export interface WorkSetResponse {
  RESPONSE_TYPE: any
}

export default function workSet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkSetResponse>(
    {
      action: 'work_set',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
