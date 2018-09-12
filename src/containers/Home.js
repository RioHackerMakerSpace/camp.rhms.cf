import React from 'react'
import { withSiteData } from 'react-static'

import Hero from './Hero'
import Intro from './Intro'
import Registration from './Registration'
import Schedule from './Schedule'
import Location from './Location'
import Social from './Social'
import Footer from './Footer'

import './style.css'

export default withSiteData(({conf, events, social}) => (
  <div className="page declare">
      <Hero {...conf}/>
      <Intro/>
      <Schedule events={events}/>
      <Registration/>
      <Location {...conf}/>
      <Social {...social}/>
      <Footer/>
  </div>
))
