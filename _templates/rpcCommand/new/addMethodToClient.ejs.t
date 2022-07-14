---
inject: true
to: src/nanoRpcClient/nanoRpcClient.ts
before: // here
skip_if: h.changeCase.camel(name)
---
public <%= h.changeCase.camel(name) %> = <%= h.changeCase.camel(name) %>

