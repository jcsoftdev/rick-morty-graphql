import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import { client } from './api'
import { store } from './store'
import CharacterDetailed from './components/Molecules/CharacterDetailed'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Organisms/Navbar'
import Favorites from './pages/Favorites'

const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Navbar />
            <div className="AppWrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="character">
                  <Route path=":characterId" element={<CharacterDetailed />} />
                </Route>
                <Route path="favorites" element={<Favorites />} />
                <Route path="*" element={<div>Not found</div>} />
              </Routes>
            </div>
          </BrowserRouter>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
