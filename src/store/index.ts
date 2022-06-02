import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import favoritesReducer from './reducers/favorites'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'favorites',
  storage
}

const persistedReducer = persistReducer(persistConfig, favoritesReducer)
export const store = configureStore({
  reducer: {
    favorites: persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
