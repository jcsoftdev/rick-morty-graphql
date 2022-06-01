import { ApolloProvider } from '@apollo/client'
import { client } from './api'
import './App.css'
import List from './components/List'
const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <List />
      </ApolloProvider>
    </div>
  )
}

export default App
