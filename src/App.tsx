import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import { client } from './api'
import { store } from './store'
import CharacterDetailed from './components/CharacterDetailed'
import List from './components/List'

import './App.css'

const persistor = persistStore(store)

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="character">
                  <Route path=":characterId" element={<CharacterDetailed />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
