import React from 'react'

function Projectcard({ image, name}) {
    return (
        <div className='projectItem'>
            <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
            <h1> {name} </h1>
        </div>
    )
}

export default Projectcard