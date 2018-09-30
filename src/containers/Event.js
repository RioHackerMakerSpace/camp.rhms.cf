import React from 'react'
import Markdown from 'react-markdown'

const Event = ({start, summary, description, location, slides}) => {
    const d = `${start.hour}:${start.minute}`;

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
