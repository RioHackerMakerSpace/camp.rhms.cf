import React from 'react'
import { withSiteData } from 'react-static'

import Hero from './Hero'
import Intro from './Intro'
import Registration from './Registration'
import Schedule from './Schedule'
import Location from './Location'
//import Social from './Social'
import Sponsors from './Sponsors'
import Footer from './Footer'

import './style.css'

export default withSiteData(({conf, events, social, housing, sponsors}) => (
  <div className="page declare">
      <Hero {...conf}/>
      <Intro/>
      <Schedule events={events}/>
      <Registration/>
      <Location {...conf} housing={housing}/>
      { /* <Social {...social}/> */}
      <Sponsors sponsors={sponsors}/>
      <Footer/>
  </div>
))
