import fs from 'fs'
import klaw from 'klaw'
import path from 'path'
import matter from 'gray-matter'
import GSheets from 'picosheet'
import ical2json from 'ical2json'
import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

const getMD = (filePath) => {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = (filePath) => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync(filePath)) {
      klaw(filePath)
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            const slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            dataObj.data.slug = slug
            dataObj.key = slug
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
  return getFiles(filePath)
}

const getPosts = () => getMD('./src/posts')
const getHousing = async () => GSheets('1izRv2WQ_mKcibrgC0zgTdLNYCHDaydDm9cFsbTuzgnA', 0, 200)

const url = `https://calendar.google.com/calendar/ical/l1rhpqh5tk0dgr8373kchtae5s%40group.calendar.google.com/private-f330c43ef49f9d4bf13d774f55fe5c91/basic.ics`

const parseDate = (date) => {
  const year = date.substr(0, 4);
  const month = parseInt(date.substr(4, 2), 10) - 1;
  const day = date.substr(6, 2);
  const hour = date.substr(9, 2);
  const minute = date.substr(11, 2);
  const second = date.substr(13, 2);

  //return new Date(Date.UTC(year, month, day, hour, minute, second));
  return `${year}-${month}-${day}T${hour}:${minute}:${second}`
}

const getEvents = async () =>  axios(url)
  .then(({data}) => ical2json.convert(data))
  .then(({VCALENDAR}) => VCALENDAR[0].VEVENT)
  .then(events => events.map(e => ({
    key: e.UID,
    summary: e.SUMMARY,
    location: e.LOCATION,
    description: e.DESCRIPTION.replace('\\n',''),
    start: parseDate(e.DTSTART)
  })).sort((a, b) => a.start > b.start ? 1: -1))

const eventsByDay = (events) => events.reduce((acc, cur) => {
  const day = cur.start.split('T')[0]
  return {
    ...acc,
    [day]: (acc[day] || []).concat(cur)
  }
}, {})

export default {
  getSiteData: async () => {
    const events = await getEvents()
    const housing = await getHousing()

    return {
      title: 'React Static with Netlify CMS',
      social: {
        twitter: 'RHMS'
      },
      sponsors: [{
        name: 'Portabilis',
        url: 'https://portabilis.com.br',
        image: '/assets/portabilis.svg'
      }],
      conf: {
        title: 'HackCamp 2018',
        date: '12 ao 14 de Outoubro 2018',
        image: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Palmares-Paty_do_Alferes.jpg/768px-Palmares-Paty_do_Alferes.jpg',
          title: 'Um dos melhores climas do mundo!!',
          author: {
            name: 'Malrelio63',
            url: 'https://commons.wikimedia.org/w/index.php?title=User:Malrelio63&action=edit&redlink=1'
          },
          licence: {
            name: 'CCBY 3.0',
            url: 'https://creativecommons.org/licenses/by-sa/3.0/deed.en'
          }
        },
        place: {
          location: 'Jardim 5.0',
          city: 'Paty Do Alferes',
          state: 'RJ',
          country: 'Brasil',
          description: 'Paty do Alferes é um município no interior do estado do Rio de Janeiro. Ocupa uma área de 319,103 km². Seus habitantes são denominados como patienses, sendo um dos importantes centros culturais do estado.',
          image: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Paty_do_Alferes_%28cerca_1930%29.jpg/1024px-Paty_do_Alferes_%28cerca_1930%29.jpg',
            title: 'Paty do Alferes, Rio de Janeiro, Brasil, cerca de 1930.',
            author: {
              name: 'Wanderley Duck',
              url: 'http://www.estacoesferroviarias.com.br/efcb_rj_auxiliar_ramais/vassouras.htm'
            },
            licence: {
              name: 'Public Domain',
              url: 'https://pt.wikipedia.org/wiki/Wikipedia:Recursos_no_dom%C3%ADnio_p%C3%BAblico'
            }
          }
        }
      },
      events: eventsByDay(events),
      housing
    }
  },
  getRoutes: async () => {
    const posts = await getMD('./src/posts')
    const infos =  await getMD('./src/infos')
      .then(infos => infos.reduce((acc, cur) => Object.assign({}, acc, {
        [cur.data.id]: cur
      }), {}))
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts,
          infos
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
