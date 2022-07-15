import { NanoFetcher } from '../fetcher'

export interface WorkCancelResponse {
  RESPONSE_TYPE: any
}

export default function workCancel(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkCancelResponse>(
    {
      action: 'work_cancel',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
