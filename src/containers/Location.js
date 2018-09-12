import React from 'react'
import Attribution from './Attribution'

const Location = ({place: {image, location, city, state, country, description}}) => (
    <div className="location section imgover" style={{
        backgroundImage: `url(${image.url})`
    }}>
        <div className="container">

            <h2>Location and Venue</h2>
            <p className="subtitle">{location} &ndash; {city} &ndash; {state} &ndash; {country}</p>

            <div className="info">

                <div className="maps">
                    <div className="images">
                        <img src={image.url} />
                    </div>
                </div>

                <div className="address">
                    <h4>{description}</h4>

                    <h5><i className="fa fa-chevron-right"></i> Venue</h5>

                    <div className="venue">
                        <p><span><a href="https://wueaddress.uni-wuerzburg.de/building/3123" target="blank">Zentrales Hörsaal- &amp; Seminargebäude Z6</a></span></p>
                        <p>Am Hubland</p>
                        <p>97074 Würzburg</p>
                    </div>

                    <h5><i className="fa fa-chevron-right"></i> Accommodation</h5>

                    <div className="venue">
                        <p><span>Hotel Poppular</span></p>
                        <p>Textorstraße 17</p>
                        <p>+49 931 322770</p>
                        <a href="http://hotelpoppular.de/">Website</a>
                    </div>

                    <div className="venue">
                        <p><span>Hotel Zur Stadt Mainz</span></p>
                        <p>Semmelstraße 395</p>
                        <p>+49 931 53155</p>
                        <a href="http://www.hotel-stadtmainz.de/">Website</a>
                    </div>

                    <div className="venue">
                        <p><span>Hotel Würzburger Hof</span></p>
                        <p>Barbarossaplatz 2</p>
                        <p>+49 931 53814</p>
                        <a href="https://www.hotel-wuerzburgerhof.de/">Website</a>
                    </div>

                    <h5><i className="fa fa-chevron-right"></i> Additional details</h5>

                    <p>We have collected the information for guests <a href="/info">on a separate page</a>.</p>
                </div>

            </div>

            <Attribution {...image}/>
        </div>
    </div>
)

export default Location
