import { NanoFetcher } from '../fetcher'

export interface WorkValidateResponse {
  RESPONSE_TYPE: any
}

export default function workValidate(
  this: NanoFetcher,
  MAIN_ARG: string,
  options?: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkValidateResponse>(
    {
      action: 'work_validate',
      data: {
        MAIN_ARG,
        ...options,
      },
    },
    requestOptions
  )
}
