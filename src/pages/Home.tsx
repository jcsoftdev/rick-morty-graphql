import { useQuery } from '@apollo/client'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { GET_CHARACTERS } from '../api/queries'
import { CharactersData, CharactersVars } from '../api/types'
import InputSearch from '../components/Atoms/InputSearch'
import List from '../components/Organisms/List'
import { AppDispatch, useAppSelector } from '../store'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import {
  favoritesSlice,
  selectFavorites,
  selectSearchText
} from '../store/reducers/favorites'
const INITIAL_PAGE = 1
const Home = () => {
  const favorites = useAppSelector(selectFavorites)
  const searchText = useAppSelector(selectSearchText)
  const [search, setSearch] = useState(searchText)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [noMore, setNoMore] = useState(false)
  const { data, loading, error, fetchMore } = useQuery<
    CharactersData,
    CharactersVars
  >(GET_CHARACTERS, {
    variables: {
      page: INITIAL_PAGE,
      search: searchText
    }
  })
  const dispatch = useDispatch<AppDispatch>()
  const { loadMoreRef, hasMore } = useInfiniteScroll()
  const setPageCallback = useCallback(
    (page: number) => {
      setTimeout(() => {
        setPage(page)
      }, 100)
    },
    [setPage]
  )
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchText === e.currentTarget.value) return
      dispatch(favoritesSlice.actions.setSearchText(e.currentTarget.value))
      setPageCallback(INITIAL_PAGE)
      setNoMore(false)
    }
  }

  useEffect(() => {
    const quantity = data?.characters.results.length || 20

    if (quantity < 20) {
      setNoMore(true)
    }

    if (page > 1 && quantity >= 20) {
      fetchMore({
        variables: {
          page,
          search: searchText
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev
          return {
            ...prev,
            characters: {
              info: fetchMoreResult.characters.info,
              results: [
                ...prev.characters.results,
                ...fetchMoreResult.characters.results
              ]
            }
          }
        }
      }).catch(e => {
        if (e.message.includes('404: Not Found')) {
          setNoMore(true)
        }
      })
    }

    return () => {}
  }, [page])

  useEffect(() => {
    if (hasMore) {
      setPageCallback(page + 1)
    }
  }, [hasMore])

  const charactersMapped =
    data?.characters.results.map(character => {
      const isFavorite = favorites.find(
        favorite => favorite.id === character.id
      )
      return {
        ...character,
        favorite: !!isFavorite
      }
    }) || []

  return (
    <>
      <InputSearch
        value={search}
        onChange={e => setSearch(e.target.value)}
        onEnter={handleEnter}
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error :(, nothing to show</div>}
      <List characters={charactersMapped} />
      {!loading && !noMore && (
        <div className="Loader" ref={loadMoreRef}>
          {hasMore && <p>Loading more...</p>}
        </div>
      )}
      {!error && noMore && !loading && <p>No more characters</p>}
    </>
  )
}

export default Home
