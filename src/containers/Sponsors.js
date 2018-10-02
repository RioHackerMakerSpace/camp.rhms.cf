import React from 'react'

import './sponsors.css'

const Sponsor = ({name, url, image}) => (
    <a href={url}>
        <img src={image}/>
        <p>{name}</p>
    </a>
)

const Sponsors = ({sponsors, parceiros}) => (
    <div className="sponsors section">
        <div className="container">
            <div>
                <h3>Agradecemos nossos sponsors</h3>
                <ul className='sponsors-list'>
                    {sponsors.map(s => <li key={s.name}><Sponsor {...s}/></li>)}
                </ul>
                <h3>e nossos parceiros</h3>
                <ul className='sponsors-list'>
                    {parceiros.map(s => <li key={s.name}><Sponsor {...s}/></li>)}
                </ul>
            </div>
        </div>
    </div>
)

export default Sponsors
