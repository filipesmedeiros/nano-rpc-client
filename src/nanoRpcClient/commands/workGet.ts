import { NanoFetcher } from '../fetcher'

export interface WorkGetResponse {
  RESPONSE_TYPE: any
}

export default function workGet(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkGetResponse>(
    {
      action: 'work_get',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
