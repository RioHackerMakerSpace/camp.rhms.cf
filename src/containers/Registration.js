import React from 'react'
import Markdown from 'react-markdown'
import { withRouteData } from 'react-static'

const Registration = withRouteData(({id, infos: {registration}}) => (
    <div className="registration section" id={id}>
        <div className="container">
            <h2>{registration.data.title}</h2>
            <h3>{registration.data.subtitle}</h3>
            <Markdown source={registration.content}/>
        </div>
    </div>
))

export default Registration
