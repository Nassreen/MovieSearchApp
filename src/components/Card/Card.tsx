import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import './Card.css'
import { Results } from '../Fetch-API/getFetch'

interface Props {
    movie: Results 
}

const Card: React.FC<Props> = ({ movie }) => {

   const [isLoading, setIsLoding] = useState(true)

   useEffect(() => {
    setTimeout(() => {
        setIsLoding(false)
    }, 1500)
   }, [])

  return (
    <>
        {
            isLoading 
            ? 
            <div className='cards'>
                <SkeletonTheme  highlightColor='#444'>
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration: 'none', color: 'white'}} >
                <div className='cards'>
                    <img className='cards-img' src={`https://image.tmdb.org/t/p/original${movie ?  movie.poster_path : ''}`} />
                    <div className='cards-over'>
                        <div className='card-title'>{ movie ? movie.original_title : '' }</div>
                        <div className='card-runtime'>{ movie ? movie.release_date : '' }
                        <span className='card-rating'>{ movie ? movie.vote_average : '' }<i className='fas fa-star' /></span>
                        </div>
                    </div>
                </div>
            </Link>
        }
    </>
  )
}

export default Card