import React from 'react'

import Profile from './Profile'

const Speakers = ({id, speakers}) => {
    return (
        <div className="speakers section" id={id}>
            <div className="container">

                <h2>Speakers</h2>
                <ul>
                    {speakers.map(s => <li key={s.name}><Profile {...s}/></li>)}
                </ul>
            </div>
        </div>)
}

export default Speakers
