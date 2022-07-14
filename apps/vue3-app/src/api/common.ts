import type { AxiosRequestConfig } from 'axios'
import http, { httpGet } from './http'

export const helloGet = (params?: any, config?: AxiosRequestConfig) =>
  http.get('hello', { params, ...config })

export const helloGet2 = (params?: any, config?: AxiosRequestConfig) =>
  httpGet<string>('hello', { params, ...config })

export const helloPost = (params?: any, config?: AxiosRequestConfig) =>
  http.post('hello', params, config)
