const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')
import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/posts')) {
      klaw('./src/posts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}
const ical2json = require('ical2json')
const url = `https://calendar.google.com/calendar/ical/l1rhpqh5tk0dgr8373kchtae5s%40group.calendar.google.com/private-f330c43ef49f9d4bf13d774f55fe5c91/basic.ics`

const parseDate = (date) => {
  const year = date.substr(0, 4);
  const month = parseInt(date.substr(4, 2), 10) - 1;
  const day = date.substr(6, 2);
  const hour = date.substr(9, 2);
  const minute = date.substr(11, 2);
  const second = date.substr(13, 2);

  return new Date(Date.UTC(year, month, day, hour, minute, second));
}

const getEvents = async () =>  axios(url)
  .then(({data}) => ical2json.convert(data))
  .then(({VCALENDAR}) => VCALENDAR[0].VEVENT)
  .then(events => events.map(e => ({
    summary: e.SUMMARY,
    location: e.LOCATION,
    description: e.DESCRIPTION,
    start: parseDate(e.DTSTART)
  })).sort((a, b) => a.start - b.start))

export default {
  getSiteData: async () => ({
    title: 'React Static with Netlify CMS',
    conf: {
      title: 'HackCamp 2018',
      date: '12 ao 14 de Outoubro 2018',
      place: {
        location: 'Jardim 5.0',
        city: 'Paty Do Alferes',
        state: 'RJ'
      }
    },
    events: await getEvents()
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts,
        })
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {renderMeta.styleTags}
            </Head>
            <Body>{children}</Body>
        </Html>
      )
    }
  },
}
