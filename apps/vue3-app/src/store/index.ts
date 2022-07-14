import { createLogger, createStore } from 'vuex'
import app from './modules/app'
import { isProd } from '~/utils/constants'

export default createStore({
  modules: { app },
  strict: !isProd,
  plugins: isProd ? [] : [createLogger()],
})
