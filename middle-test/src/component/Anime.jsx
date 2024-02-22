import React from 'react'
import data from '../data.json'
import '../App.css'

export const Anime = ({ data }) => {
    return (
        <div className='anime' onClick={() => handleClick(item.image)}>
            <div className='img-list'>
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
