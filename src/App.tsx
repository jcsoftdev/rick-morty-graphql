import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { client } from './api'
import List from './components/List'

import './App.css'
import CharacterDetailed from './components/CharacterDetailed'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  )
}

export default App
