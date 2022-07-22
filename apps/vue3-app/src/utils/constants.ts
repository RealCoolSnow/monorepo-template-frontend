import type { InjectionKey, Ref } from 'vue'

export const isProd = process.env.NODE_ENV === 'production'

export const PROVIDE_APP_TIMESTAMP = Symbol('app/timestamp') as InjectionKey<Ref<number>>
