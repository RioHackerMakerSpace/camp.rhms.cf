import React from 'react'
import Markdown from 'react-markdown'
import { withRouteData } from 'react-static'

const Intro = withRouteData(({id, infos: {intro}}) => (
    <div className="intro" id={id}>
        <div className="container" style={{
            backgroundImage: `url(${intro.image})`
        }}>
            <h1><strong>{intro.data.title}</strong><br />{intro.data.subtitle}</h1>
            <Markdown source={intro.content}/>
        </div>
    </div>
                                                                                     ))

export default Intro
