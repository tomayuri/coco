import { useEffect, useState } from 'react'
import { Episode } from './episode'
import { RssFeed } from '../domain/rssfeed'
import { FetchRssFeeds } from '../domain/services/fetchRssFeeds'
import { Header, Segment } from 'semantic-ui-react'

export const Episodes = (): JSX.Element => {
  const [items, setItems] = useState<RssFeed[]>()

  useEffect(() => {
    FetchRssFeeds().then((feeds) => setItems(feeds))
  }, [])
  return (
    <Segment basic>
      <Header as="h2" color="grey" dividing>
        Episodes
      </Header>
      {items?.map((item, index) => (
        <Episode item={item} key={index} />
      ))}
    </Segment>
  )
}

export default Episodes
