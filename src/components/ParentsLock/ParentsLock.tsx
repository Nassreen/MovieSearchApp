import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth-context'
import MovieList from '../../pages/MovieList/MovieList'
import Auth from '../Auth/Auth'

const ParentsLock: React.FC = () => {

    const authContext = useContext(AuthContext)

    let contet = <Auth />

    if (authContext.isAuth) {
        contet = <MovieList />
    }
  return contet
}

export default ParentsLock