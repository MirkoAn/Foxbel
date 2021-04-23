import React, { useCallback, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setAlbum, setSearch } from '../../redux/actions/albumActions'

import { MdSearch } from 'react-icons/md'

import { Icon, Search } from './style'

export const SearchBar = () => {
  const search = useSelector(state => state.search.search)

  const [searchQuery, setSearchQuery] = useState(search)
  
  const dispatch = useDispatch()

  const handleInput = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  }
  
  const handleSubmit = () => {
    dispatch(setSearch(searchQuery.toString().toLowerCase()))
  }

  onkeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  const loadData = useCallback(async (search) => {
    try {
      const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "697adfe8e9msh2db1b83446bd246p15c288jsnd0d8cb383b09",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
      })
      const data = await response.json()
      dispatch(setAlbum(data.data))
    } catch (error) {
      console.log(error)
    }

  }, [dispatch])
  
  useEffect(() => {
    loadData(search)
  }, [loadData, search])

  return (
      <Search>
        <input
          onChange={handleInput}
          onKeyDown={onkeydown}
          type="search"
          name='search'
          placeholder='Buscar'
        />
        <Icon onClick={handleSubmit}>
          <MdSearch size='18px' />
        </Icon>
      </Search>
  )
}