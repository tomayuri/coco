import { useState } from 'react'
import { Layout } from '../components/layout'
import { Episodes } from '../components/episodes'
import { RssFeed } from '../domain/rssfeed'
import xml2js from 'xml2js'

export const Home = (): JSX.Element => {
  const [items, setItems] = useState<RssFeed[]>()
  fetch('https://anchor.fm/s/4881bfd0/podcast/rss')
    .then((res) => res.text())
    .then((xml) => {
      const parser = new xml2js.Parser()
      parser.parseStringPromise(xml).then((result) => {
        const items = new Array<RssFeed>()
        result.rss.channel[0].item.map((i) => {
          const personalities = i.description[0]
            .replace(/\n/g, '')
            .replace(/^.*パーソナリティ/g, '')
            .match(/jakelizzi|tomayuri|tonkotyu/g)

          const rssFeed: RssFeed = {
            description: i.description[0],
            link: i.link[0],
            pubDate: i.pubDate[0],
            title: i.title[0],
            episode: i['itunes:episode'],
            personalities: personalities,
          }
          items.push(rssFeed)
        })
        setItems(items)
      })
    })
  return (
    <Layout>
      <h1 className="title">Welcome to Coconuts.tech</h1>
      {items?.map((item, index) => (
        <Episodes item={item} key={index} />
      ))}
    </Layout>
  )
}

export default Home
