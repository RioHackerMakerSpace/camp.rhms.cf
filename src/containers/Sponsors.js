import React from 'react'

const Sponsor = ({name, url, image}) => (
    <a href={url}>
        <img src={image}/>
        {name}
    </a>
)

const Sponsors = ({sponsors}) => (
    <div className="sponsors section">
        <div className="container">
            <div>
                <h2>Agradecemos nossos sponsors</h2>
                {sponsors.map(s => <Sponsor {...s}/> )}
            </div>
        </div>
    </div>
)

export default Sponsors
