import { NanoFetcher } from '../fetcher'

export interface WorkValidateResponse {
  RESPONSE_TYPE: any
}

export default function workValidate(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<WorkValidateResponse>(
    {
      action: 'work_validate',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS,
      },
    },
    requestOptions
  )
}
