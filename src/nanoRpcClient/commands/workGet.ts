import { NanoFetcher } from '../fetcher'

export interface WorkGetResponse {
  RESPONSE_TYPE: any
}

export default function workGet(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkGetResponse>(
    {
      action: 'work_get',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
