import React from 'react'
import Attribution from './Attribution'

const Place = ({nome, endereco, city, state}) => (
    <div className="venue">
        <p><span><a href="https://wueaddress.uni-wuerzburg.de/building/3123" target="blank">{nome}</a></span></p>
        <p>{endereco}</p>
        <p>{city} - {state}</p>
    </div>
)

const Location = ({place: {image, location, city, state, country, description}, housing}) => (
    <div className="location section imgover" style={{
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
                    <Place {...housing[0]}/>

                    <h5><i className="fa fa-chevron-right"></i>Acomodações</h5>
                    {housing.slice(1).map(p => <Place {...p}/>)}

                </div>

            </div>

            <Attribution {...image}/>
        </div>
    </div>
)

export default Location
