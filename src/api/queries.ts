import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!, $search: String = "") {
    characters(page: $page, filter: { name: $search }) {
      info {
        count
      }
      results {
        name
        image
        id
      }
    }
  }
`

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      gender
      status
      origin {
        id
        name
      }
      image
      location {
        id
        name
        dimension
      }
      episode {
        id
        name
        air_date
      }
    }
  }
`
