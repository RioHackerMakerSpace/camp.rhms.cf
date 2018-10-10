import React from 'react'
import Markdown from 'react-markdown'

import { withSiteData } from 'react-static'

import './minispeaker.css'

const MiniSpeaker = ({name, pic, email}) => (
    <li className='minispeaker'>
        <a href={`#${email}`}>
            <img src={pic}/>
            <span>{name}</span>
        </a>
    </li>
)

const Event = withSiteData(({start, summary, description, location, slides, attendee, speakers}) => {
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
                    <ul className='attendees'>
                        {attendee && attendee.map(a => {
                             const e = a['X-NUM-GUESTS'].split(/:mailto:/)[1]
                             const s = speakers[e]
                             if (!s) {
                                 return <p>NO SPEAKER DATA FOR {e}</p>
                             }

                             return (
                                 <MiniSpeaker {...s} key={s.email}/>
                             )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
})

export default Event
