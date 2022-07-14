import { NanoFetcher } from '../fetcher'

export interface WorkCancelResponse {
  RESPONSE_TYPE: any
}

export default function workCancel(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkCancelResponse>(
    {
      action: 'work_cancel',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
