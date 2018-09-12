import React from 'react'

import Event from './Event'
import './tabs.css'

const Schedule = ({events}) => {
    const days = Object.keys(events)

    return (
        <div className="schedule section">
            <div className="container">

                <h2>Conference Schedule</h2>

                <p className="text"><a href="/data/Declare17_Schedule.pdf" target="_blank">&raquo; Download Schedule as PDF </a>
                </p>

                <div className="pc-tab">
                    {days.map((day, i) =>
                        <input key={day} id={`tab${i}`} type="radio" name="pct" defaultChecked={i === 0}/> )}
                    <nav>
                        <ul>
                            {days.map((day, i) => <li key={day} className={`tab tab${i}`}>
                                <label for={`tab${i}`}>{day}</label>
                            </li>
                            )}
                        </ul>
                    </nav>
                    <section>
                        {days.map((day, i) => <div key={day} className={`tab tab${i}`}>
                            { events[day]
                                .map(e => <Event {...e}/>)}
                        </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Schedule
