---
inject: true
to: src/nanoRpcClient/nanoRpcClient.ts
before: import { NanoFetcher } from './fetcher'
---
<% camelName = h.changeCase.camel(name) %>
import <%= camelName %> from './<%= camelName %>'