import React, { useEffect, useCallback, useState } from 'react'
import Card from '../../components/Card/Card'
import './MovieList.css'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getFetch, Results } from '../../components/Fetch-API/getFetch' 

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Results[]>([])
    const [hasMore] = useState(true);
    const [lastPosition, setLastPosition] = useState(0);
    const perPage = 4;

    const { type } = useParams()

    useEffect(() => {
        getFetch(setMovies, type)
    }, [type])
    

    const loadProducts = useCallback(() => {
        setTimeout(() => {
            setMovies((prev) => [...prev, ...prev]);
        }, 1500);

        setLastPosition(lastPosition + perPage);
    }, []);

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={loadProducts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            style={{ textAlign: 'center', fontFamily: 'inherit', fontSize: '2rem', paddingBottom: '1.5rem' }}
        >
            <div className='movie-list'>
                <h2 className='list-title'>{(type ? type : 'POPULAR').toUpperCase()}</h2>
                <div className='list-cards'>
                    {
                            movies.map(movie => (
                                <Card key={movie.id * Math.random()} movie={movie} />
                            ))
                    }
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default MovieList