import React from 'react'

import './sponsors.css'

const Sponsor = ({name, url, image}) => (
    <a href={url}>
        <img src={image}/>
        <p>{name}</p>
    </a>
)

const Sponsors = ({sponsors, support, prod}) => (
    <div className="sponsors section">
        <div className="container">
            <div>
                <h3>Agradecemos nossos sponsors</h3>
                <ul className='sponsors-list'>
                    {sponsors.map(s => <li key={s.name}><Sponsor {...s}/></li>)}
                </ul>
                <h3>e nossos parceiros</h3>
                <ul className='sponsors-list'>
                    {support.map(s => <li key={s.name}><Sponsor {...s}/></li>)}
                </ul>
                <h3>produzido por</h3>
                <ul className='sponsors-list'>
                    {prod.map(s => <li key={s.name}><Sponsor {...s}/></li>)}
                </ul>

            </div>
        </div>
    </div>
)

export default Sponsors
