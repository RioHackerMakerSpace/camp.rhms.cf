import React from 'react'
import { withRouteData } from 'react-static'

const Intro = withRouteData(({infos: {intro}}) => (
    <div className="intro">
        <div className="container">
            <h3><strong>{intro.data.title}</strong><br />{intro.data.subtitle}</h3>
            {intro.content} 
        </div>
    </div>
))

export default Intro
