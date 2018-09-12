import React from 'react'
import Markdown from 'react-markdown'
import { withRouteData } from 'react-static'

const Intro = withRouteData(({infos: {intro}}) => (
    <div className="intro">
        <div className="container" style={{
            backgroundImage: `url(${intro.image})`
        }}>
            <h3><strong>{intro.data.title}</strong><br />{intro.data.subtitle}</h3>
            <Markdown source={intro.content}/>
        </div>
    </div>
                                                                                     ))

export default Intro
