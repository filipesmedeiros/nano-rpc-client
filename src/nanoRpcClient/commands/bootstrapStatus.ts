import { NanoFetcher } from '../fetcher'

export interface BootstrapStatusResponse {
  bootstrapThreads: bigint
  runningAttemptsCount: bigint
  totalAttemptsCount: bigint
  connections: {
    clients: bigint
    connections: bigint
    idle: bigint
    targetConnections: bigint
    pulls: bigint
  }
  attempts: {
    id: string
    mode: 'lazy' | 'legacy'
    started: boolean
    pulling: bigint
    totalBlocks: bigint
    requeuedPulls: bigint
    lazyBlocks: bigint
    lazyStateBacklog: bigint
    lazyBalances: bigint
    lazyDestinations: bigint
    lazyUndefinedLinks: bigint
    lazyPulls: bigint
    lazyKeys: bigint
    lazyKey1: string
    duration: bigint
  }[]
}

export default function bootstrapStatus(
  this: NanoFetcher,
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<BootstrapStatusResponse>(
    {
      action: 'bootstrap_status',
    },
    requestOptions
  )
}
