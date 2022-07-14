import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/hello',
    method: 'post',
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: 'hello from mock',
      }
    },
  },
] as MockMethod[]
