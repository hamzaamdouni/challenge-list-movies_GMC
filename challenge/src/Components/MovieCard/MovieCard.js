
import React from 'react'
import './MovieCard.css'
import Rating from '@material-ui/lab/Rating';

const MovieCard = ({ListMovie, handelName}) => {
    const style = {
        backgroundImage: `url(${ListMovie.image})`,
};
    return (
    <div onClick={()=>handelName(ListMovie.name)}>
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={ListMovie.image} alt='img'/>
                    <h1>{ListMovie.name}</h1>
                    <h4>{ListMovie.date}, David Ayer</h4>
                    <span className="minutes">117 min</span>
                    <p className="type">{ListMovie.type}</p>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {ListMovie.description}
                    </p>
                </div>
                <div className="movie_social">
                    <ul>
                        <li><i className="material-icons">share</i></li>
                        <li><i className="material-icons"></i></li>
                        <li><i className="material-icons">chat_bubble</i></li>
                    </ul>
                    <Rating name="size-medium" value={ListMovie.rating} disabled className='Rating'/>
                </div>
            </div>
            <div className="blur_back bright_back" style={style}/>
        </div>
    </div>
    )
}

export default MovieCard
