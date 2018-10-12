import React from 'react'

const Place = ({name, url, addr}) => (
    <div className="venue">
        <p><span><a href={url} target="blank">{name}</a></span></p>
        <p>{addr}</p>
        <p>Paty do Alferes - RJ</p>
    </div>
)

export { Place as default }
