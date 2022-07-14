import { NanoFetcher } from '../fetcher'

export interface ConfirmationHeightCurrentlyProcessingResponse {
  hash: string
}

export default function confirmationHeightCurrentlyProcessing(
  this: NanoFetcher,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<ConfirmationHeightCurrentlyProcessingResponse>(
    {
      action: 'confirmation_height_currently_processing',
    },
    requestOptions
  )
}
