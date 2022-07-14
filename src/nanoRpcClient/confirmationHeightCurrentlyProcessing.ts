import { NanoFetcher } from './fetcher'

export interface ConfirmationHeightCurrentlyProcessingResponse {
  RESPONSE_TYPE: any
}

export default function confirmationHeightCurrentlyProcessing(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ConfirmationHeightCurrentlyProcessingResponse>(
    {
      action: 'confirmation_height_currently_processing',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
