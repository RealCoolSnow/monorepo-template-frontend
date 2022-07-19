import { createLogger, createStore } from 'vuex'
import type { AppState } from './modules/app'
import app from './modules/app'
import { isProd } from '@/utils/constants'

export interface State {
  app: AppState
}

export default createStore<State>({
  modules: { app },
  strict: !isProd,
  plugins: isProd ? [] : [createLogger()],
})
