import xml2js from 'xml2js'
import { RssFeed } from '../../domain/rssfeed'

export const FetchRssFeeds = async (): Promise<RssFeed[]> => {
  const res = await fetch('https://anchor.fm/s/4881bfd0/podcast/rss')
  const xml = await res.text()
  const parser = new xml2js.Parser()
  return parser.parseStringPromise(xml).then((result) => {
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
    return items
  })
}
