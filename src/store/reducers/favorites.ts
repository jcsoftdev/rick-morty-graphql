import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Character } from '../../api/types'
import initialState from './initialState'

interface FavoritesState {
  list: Character[]
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState().favorites as FavoritesState,
  reducers: {
    addFavorite: (state, action) => {
      state.list.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter(
        character => character.id !== action.payload
      )
    }
  }
})

export const selectFavorites = (state: RootState) => state.favorites.list
export default favoritesSlice.reducer
