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
                <li>
                    <a href="https://www.facebook.com/v1ctory">
                        <svg viewBox="0 0 24 24">
                            <path fill="#3b5998" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export { Profile as default }
