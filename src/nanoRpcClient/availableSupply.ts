import { NanoFetcher } from './fetcher'

export interface AvailableSupplyResponse {
  available: bigint
}

export default async function availableSupply(
  this: NanoFetcher,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<AvailableSupplyResponse>(
    {
      action: 'available_supply',
    },
    requestOptions
  )
}
