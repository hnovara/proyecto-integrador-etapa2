import React from 'react'
import Counter from './Counter'

function Card({
    id,
    name,
    img,
    category,
    brand,
    price,
    ageFrom,
    ageTo,
    shortDesc,
    delivery,
}) {
    return (

        <div className="card__container">
            <div className='card__data'>
                <h2>{name}</h2>
                <img src={img} alt={shortDesc} />
                <b>Edad: {ageFrom} a {ageTo}</b>
                <p>{shortDesc}</p>
            </div>
            <div className="card__price">
                $ {price}
            </div>
            <Counter id={id}/>
        </div>
    )
}

export default Card