import React from 'react'

import './profile.css'

const Profile = ({name, title, bio, pic, url}) => (
    <div className="profile-card">
        <div className="profile-left">
            <a href={url}>
                <img src={pic}/>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </a>
        </div>

        <div className="profile-right">
            <div className="profile-bio">
                <p>{bio}</p>
            </div>

            <ul className="profile-social-links">

            </ul>
        </div>
    </div>
)

export { Profile as default }
