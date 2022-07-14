---
to: src/nanoRpcClient/<%= h.changeCase.camel(name) %>.ts
---

import { NanoFetcher } from '../fetcher'
<% PascalName = h.changeCase.pascal(name) %>
export interface <%= PascalName %>Response {
  RESPONSE_TYPE: any
}

export default function <%= h.changeCase.camel(name) %>(
  this: NanoFetcher,
  MAIN_ARG: string,
  OPTIONAL_ARGS: {},
  requestOptions?: { abortSignal: AbortSignal }
) {
  return this.fetch<<%= PascalName %>Response>(
    {
      action: '<%= name %>',
      data: {
        MAIN_ARG,
        ...OPTIONAL_ARGS
      },
    },
    requestOptions
  )
}
