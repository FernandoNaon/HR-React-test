import React from 'react'


export const CardComponent = ({name, image, house}) => {
    return (
        <div>
             <h1>{name}</h1>
            <img src={image}/>
            <h3>{house}</h3>
        </div>
    )
}


