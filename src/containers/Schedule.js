import React from 'react'

import Event from './Event'

const Schedule = ({events}) => (
    <div className="schedule section">
        <div className="container">

            <h2>Conference Schedule</h2>

            <p className="text"><a href="/data/Declare17_Schedule.pdf" target="_blank">&raquo; Download Schedule as PDF</a>
            </p>

            <div className="tabs">

                <ul>
                    <li><a href="#tabs-1">Tue, 19th</a></li>
                    <li><a href="#tabs-2">Wed, 20th</a></li>
                    <li><a href="#tabs-3">Thu, 21st</a></li>
                    <li><a href="#tabs-4">Fri, 22nd</a></li>
                </ul>
                
                <div id="tabs-1" className="day">
                    <div className="name"><span>Tue, 19th</span></div>

                    <div className="events">
                        {events.map(e => <Event {...e}/>)}
                    </div>

                </div>
            </div>

        </div>
    </div>
)

export default Schedule
