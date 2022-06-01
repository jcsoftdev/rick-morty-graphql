import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        image
        status
        location {
          name
          dimension
          type
          id
        }
        id
      }
    }
  }
`
