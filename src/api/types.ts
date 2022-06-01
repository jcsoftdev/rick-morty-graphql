export interface Character {
  id: string

  name: string
  image: string
  status: string
  location: {
    name: string
    dimension: string
    type: string
    id: string
  }
}
export interface Characters {
  characters: {
    info: {
      count: number
    }
    results: Character[]
  }
}
export interface CharactersVars {
  page: number
}
