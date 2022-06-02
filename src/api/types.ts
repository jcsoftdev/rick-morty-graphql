export interface Character {
  id: string

  name: string
  image: string
}
export interface CharactersData {
  characters: {
    info: {
      count: number
    }
    results: Character[]
  }
}
export interface CharactersVars {
  page: number
  search?: string
}

interface Episode {
  id: string
  name: string
  air_date: string
}
export interface CharacterDetailed {
  name: string
  gender: string
  status: string
  origin: {
    id: string
    name: string
  }
  image: string
  location: {
    id: string
    name: string
    dimension: string
  }
  episode: Episode[]
}

export interface CharacterDetailedData {
  character: CharacterDetailed
}

export interface CharacterDetailedVars {
  id: string
}
