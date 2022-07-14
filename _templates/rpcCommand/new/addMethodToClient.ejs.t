---
inject: true
to: src/nanoRpcClient/nanoRpcClient.ts
after: public
skip_if: h.changeCase.camel(name)
---
<% camelName = h.changeCase.camel(name) %>
public <%= camelName %> = <%= camelName %>

