import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { client } from './api'
import List from './components/List'

import './App.css'
import CharacterDetailed from './components/CharacterDetailed'

const App = () => {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
