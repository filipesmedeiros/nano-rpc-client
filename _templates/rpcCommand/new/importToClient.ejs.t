---
inject: true
to: src/nanoRpcClient/nanoRpcClient.ts
before: import { NanoFetcher } from './fetcher'
---
import <%= h.changeCase.camel(name) %> from './<%= h.changeCase.camel(name) %>'