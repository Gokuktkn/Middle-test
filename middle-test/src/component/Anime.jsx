import React from 'react'
import data from '../data.json'
import '../App.css'

export const Anime = ({ data, handleClick }) => {
    return (
        <div className='anime' >
            <div className='img-list' onClick={() => handleClick(data.id)}>
                <p className='episode'>Episode {data.episode}</p>
                <div className="effect-list"></div>
                <img src={data.image} alt={data.movieName} />
            </div>
            <div className="name-list">
                {data.movieName}
            </div>
        </div>
    )
}
