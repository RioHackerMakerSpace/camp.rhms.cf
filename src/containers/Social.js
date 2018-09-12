import React from 'react'

const Social = ({twitter}) => (
    <div className="social section">
        <div className="container">
            <div>
                <h2>Keep me informed</h2>
                <p className="subtitle">Follow us on Twitter</p>

                <a href={`https://twitter.com/${twitter}`} target="_blank"><i className="fa fa-twitter"></i></a>
            </div>
        </div>
    </div>
)

export default Social
