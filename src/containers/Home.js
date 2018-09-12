import React from 'react'
import { withSiteData } from 'react-static'

import Hero from './Hero'
import Intro from './Intro'
import Registration from './Registration'
import Schedule from './Schedule'
import Social from './Social'
import Footer from './Footer'

import './style.css'

export default withSiteData(({conf, events}) => (
  <div className="page declare">
      <div className="header">
          <Hero {...conf}/>
      </div>
      <Intro/>
      <Schedule events={events}/>
      <Registration/>

      <div className="location section imgover">
          <div className="container">

              <h2>Location and Venue</h2>
              <p className="subtitle">Universität Würzburg &ndash; Franconia &ndash; Bavaria &ndash; Germany</p>


              <div className="info">

                  <div className="maps">

                      <div className="images">
                          <img src="images/uniwue-z6.jpg" />
                      </div>
                  </div>

                  <div className="address">

                      <h4>Würzburg is located about equidistant from Frankfurt and Nuremberg in the center of Germany. The city of 125.000 inhabitants is best known for the Residence Palace and Franconian Wine.</h4>

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


              <div className="image-attribution">
                  <a href="https://www.flickr.com/photos/floris-oosterveld/9356064319" target="_blank">Background Image “An der Uni”</a> by <a href="https://www.flickr.com/photos/martinroell/" target="_blank">Martina Roell</a> (
                  <a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank">CC BY-SA 2.0</a>)
              </div>
          </div>
      </div>

      <Social/>
      <Footer/>

  </div>
))
