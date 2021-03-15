import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import newsReducer from './news-reducer/news-reducer'

const rootReducer = combineReducers({
  newsReducer: newsReducer
})

export type AppState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

type ActionFuncType<T> = T extends {[key: string]: infer U} ? U : never

//Example
// const actions = {
//   go: (go: string) => {
//     return {
//       type: 'GO'
//     } as const
//   }
// }

type InferActionTypes<T extends {[key: string]: (...args: any) => any}> = ReturnType<ActionFuncType<T>>

// @ts-ignore
window.__store__ = store

export default store
