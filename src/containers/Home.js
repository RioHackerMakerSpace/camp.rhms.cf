import React from 'react'
import { withSiteData } from 'react-static'

import Hero from './Hero'
import Intro from './Intro'
import Registration from './Registration'
import Schedule from './Schedule'
import Speakers from './Speakers'
import Location from './Location'
//import Social from './Social'
import Sponsors from './Sponsors'
import Footer from './Footer'

import './style.css'

export default withSiteData(({conf, events, social, housing, speakers, sponsors}) => (
  <div className="page declare">
      <Hero {...conf} sections={
        [
          {name: 'Como Chegar', url: '#intro'},
          {name: 'Programação', url: '#schedule'},
          {name: 'Inscrições', url: '#registration'},
          {name: 'Contacto', url: '#contact'},
        ]
      }/>
      <Intro id="intro"/>
      <Schedule events={events} id="schedule"/>
      <Registration id="registration"/>
      <Speakers speakers={speakers} id="speakers"/>
      <Location {...conf} housing={housing}/>
      { /* <Social {...social}/> */}
      <Sponsors {...sponsors}/>
      <Footer id="contact"/>
  </div>
))
