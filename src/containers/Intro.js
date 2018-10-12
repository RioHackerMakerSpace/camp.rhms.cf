import React from 'react'
import Markdown from 'react-markdown'
import { withRouteData } from 'react-static'

import Place from './Place'

const Intro = withRouteData(({id, infos: {intro}, place}) => (
    <div className="intro" id={id}>
        <div className="container" style={{
            backgroundImage: `url(${intro.image})`
        }}>
            <h1><strong>{intro.data.title}</strong><br />{intro.data.subtitle}</h1>
            <Markdown source={intro.content}/>

            <h5><i className="fa fa-chevron-right"></i>Endereço</h5>
            <ul className='venues'>
                <li>
                    <Place {...place}/>
                </li>
            </ul>
        </div>
    </div>
))

export default Intro
