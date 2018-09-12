import React from 'react'
import Markdown from 'react-markdown'

const Event = ({start, summary, description, location, slides}) => {
    let s = start.toString()
    let d;
    try {
        d = s.match(/T(\d\d:\d\d)/)[1]
    } catch(e) {
        console.error("FAILED", start, s, d, s.match(/T(\d\d:\d\d)/))
        d = 'FAILED'
    }

    return (
            <div className={`event ${description ? 'extend' : ''}`}>
                <div className="event-time">{d}<span></span></div>
                <div className="event-info">
                    <div>
                        <h4>{summary}</h4>
                        {location &&  <p className="speaker"><strong>
                            {location}
                        </strong></p>}
                        {description && <Markdown source={description}/>}
                        {slides && <p className="speaker permanent"> <a href="/data/slides/tompits.pdf" target="_blank">» Slides</a> </p>}
                    </div>
                </div>
            </div>
    )
}

export default Event
