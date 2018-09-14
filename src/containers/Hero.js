import React from 'react'
import DayJS from 'dayjs'
import { withRouteData, Link } from 'react-static'

import Attribution from './Attribution'

const months = [
    'Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Out', 'Nov', 'Dic'
]

const slice = (s, l = 50) =>
    s.length < l
            ?  s
             : `${s.slice(0, l)}…`

const _ = (k) => (
    {
        When: 'Quando',
        Where: 'Onde',
        'News Archive': 'Mais Articulos'
    }[k]
)

const NewsShortItem = ({data: {title, date, slug}, content, _ = _}) => {
    const d = DayJS(date)
    return (
        <div>
            <Link to={`/blog/post/${slug}`}>
                <div className="recent-news info-box right">

                    <div className="icon-holder">

                        <span className="date">{d.$D}</span>
                        <span className="month">{months[d.$M]}</span>
                    </div>

                    <div>
                        <p><strong>
                            {title}
                        </strong></p>
                        <p><span>{slice(content)}</span><br /></p>
                    </div>

                </div>
            </Link>

        </div>
    )
}

const Hero = withRouteData(({title, subtitle, date, place, image,  posts}) => (
    <div className="header" style={{
        backgroundImage: `url(${image.url})`
    }}>
        <div className="container">
            <img src="./assets/hacker-camp-header.svg"/>

            <div className="news-list">
                {posts.slice(0, 3).map(post => <NewsShortItem {...post} />)}
                <div className="archive-link">
                    <a href="/blogcp /">&raquo; {_('News Archive')}</a>
                </div>
            </div>

            <Attribution {...image}/>
        </div>
    </div>
))

export default Hero
