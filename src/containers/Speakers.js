import React from 'react'

import Profile from './Profile'

import './speaker.css'

const Speakers = ({id, speakers}) => {
    return (
        <div className="speakers section" id={id}>
            <div className="container">

                <h2>Speakers</h2>
                <ul>
                    {Object.values(speakers).map(s => <li key={s.email} id={s.email}>
                        <Profile {...s}/>
                    </li>)}
                </ul>
            </div>
        </div>)
}

export default Speakers
