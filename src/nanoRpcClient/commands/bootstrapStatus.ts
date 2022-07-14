import { NanoFetcher } from '../fetcher'

export interface BootstrapStatusResponse {
  bootstrap_threads: bigint
  running_attempts_count: bigint
  total_attempts_count: bigint
  connections: {
    clients: bigint
    connections: bigint
    idle: bigint
    target_connections: bigint
    pulls: bigint
  }
  attempts: {
    id: string
    mode: 'lazy' | 'legacy'
    started: boolean
    pulling: bigint
    total_blocks: bigint
    requeued_pulls: bigint
    lazy_blocks: bigint
    lazy_state_backlog: bigint
    lazy_balances: bigint
    lazy_destinations: bigint
    lazy_undefined_links: bigint
    lazy_pulls: bigint
    lazy_keys: bigint
    lazy_key_1: string
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
