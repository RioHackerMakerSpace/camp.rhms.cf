import React from 'react'
import Attribution from './Attribution'

import './location.css'

const Place = ({name, url, addr}) => (
    <div className="venue">
        <p><span><a href={url} target="blank">{name}</a></span></p>
        <p>{addr}</p>
        <p>Paty do Alferes - RJ</p>
    </div>
)

const Location = ({place: {image, location, city, state, country, description}, housing}) => (
    <div className="location section" style={{
        backgroundImage: `url(${image.url})`
    }}>
        <div className="container">

            <h2>Localização</h2>
            <p className="subtitle">{location} &ndash; {city} &ndash; {state} &ndash; {country}</p>

            <div className="info">

                <div className="maps">
                    <div className="images">
                        <img src={image.url} />
                    </div>
                </div>

                <div className="address">
                    <h4>{description}</h4>

                    <h5><i className="fa fa-chevron-right"></i>Local</h5>
                    <ul className='venues'>
                        <li><Place {...housing[0]}/></li>
                    </ul>

                    <h5><i className="fa fa-chevron-right"></i>Acomodações</h5>
                    <ul className='venues'>
                        {housing.slice(1).map(p => <li key={p.name}><Place {...p}/></li>)}
                    </ul>

                </div>

            </div>

            <Attribution {...image}/>
        </div>
    </div>
)

export default Location
