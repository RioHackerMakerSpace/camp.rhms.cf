import React from 'react'
import { withSiteData } from 'react-static'

import Hero from './Hero'
import Intro from './Intro'
import Schedule from './Schedule'

import './style.css'

export default withSiteData(({conf, events}) => (
  <div className="page declare">
      <div className="header">
          <Hero {...conf}/>
      </div>
      <Intro/>
      <a id="events" className="anchor"></a>
      <a id="schedule" className="anchor"></a>

      <Schedule events={events}/>

      <a id="registration" className="anchor"></a>
      <div className="registration section">
          <div className="container">

              <h2>Registration</h2>

              <div className="row">
                  <div className="form">
                      <h3>Process</h3>

                      <p>To start the registration process, please fill the <a href="/registration/">form on our registration page</a>. You will automatically get a confirmation mail that we received your data. This confirmation mail also includes a copy of your entered data.</p>
                  </div>
                  <div className="form">
                      <h3>&nbsp;</h3>
                      <p>We will send you instructions for bank transfer via mail. This may take up to three days. Once we receive the money, your registration is completed. You will get a written receipt at the conference.</p>
                  </div>
              </div>
          </div>
      </div>

      <a id="location" className="anchor"></a>

      
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
      

      
      <div className="social section">
          <div className="container">
              <div>
                  <h2>Keep me informed</h2>
                  <p className="subtitle">Follow us on Twitter</p>

                  <a href="https://twitter.com/Declare_Conf" target="_blank"><i className="fa fa-twitter"></i></a>
              </div>
          </div>
      </div>


      <div className="footer">


          <div className="container">
              <div className="bmbf">
                  <img src="/images/BMBF_RGB_Gef_M.jpg" alt="Logo BMBF" />
                  <p>
                      Dieses Vorhaben wird aus Mitteln des Bundesministeriums für Bildung und Forschung unter dem Förderkennzeichen 01PL16019 gefördert. Die Verantwortung für den Inhalt dieser Veröffentlichung liegt beim Autor.
                  </p>
              </div>
          </div>
      </div>

  </div>
))
