import React from 'react'

import Profile from './Profile'

import './speaker.css'

const Speakers = ({id, speakers}) => {
    return (
        <div className="speakers section" id={id}>
            <div className="container">

                <h2>Speakers</h2>
                <ul>
                    {Object.values(speakers).map((s, i) => {
                         const id = s.email || `speaker-${i}`
                         return (
                             <li key={id} id={id}>
                                 <Profile {...s}/>
                             </li>
                         )
                    })}
                </ul>
            </div>
        </div>)
}

export default Speakers
