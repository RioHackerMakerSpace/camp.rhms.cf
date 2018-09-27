import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
//

export default withRouteData(({ post }) => (
  <div className="blog-post">
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <div class="container">
          <h3>{post.data.title}</h3>
          <Markdown source={post.content} escapeHtml={false} />
          <img className="image" src={post.data.thumbnail} alt="" />
      </div>
  </div>
))
