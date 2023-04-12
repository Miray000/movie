import React, {useEffect, useState} from 'react'
import Cards from '../card/card'
import './movieList.css'
import {useParams} from 'react-router-dom'




const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=2cbc2f8851ce589625841cb5d6f48d9c&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    return (
        <div className='movie_list'>
            <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className='list_cards'>
                {
                    movieList.map(movie => (
                        <Cards movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}


export default MovieList