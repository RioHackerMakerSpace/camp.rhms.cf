import React from 'react'
import Markdown from 'react-markdown'
import { withRouteData } from 'react-static'

const Registration = withRouteData(({infos: {registration}}) => (
    <div className="registration section">
        <div className="container">

            <h2>{registration.data.title}</h2>

            <div className="row">
                <div className="form">
                    <h3>{registration.data.subtitle}</h3>
                    <Markdown source={registration.content}/>
                </div>
            </div>
        </div>
    </div>
))

export default Registration
