import React from 'react'

const Attribution = ({url, title, licence, author}) => (
    <div className="image-attribution">

        <a href={url} target="_blank">Background Image “{title}”</a> by <a href={author.url} target="_blank">{author.name}</a>
        (<a href={licence.url} target="_blank">{licence.name}</a>)
    </div>
)

export default Attribution
