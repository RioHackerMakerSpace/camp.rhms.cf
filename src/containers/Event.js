import React from 'react'

const Event = ({start, summary, description, location}) => {
    const d = start.match(/T(\d\d:\d\d)/)[1]

    return (
        <div className="event extend">
            <div className="event-time">{d}<span></span></div>
            <div className="event-info">
                <div>
                    <h4>{summary}</h4>
                    <p className="speaker"><strong>
                        {location}
                    </strong></p>

                    <p>{description}</p>
                    <p className="speaker permanent"> <a href="/data/slides/tompits.pdf" target="_blank">» Slides</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Event
