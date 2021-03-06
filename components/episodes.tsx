import Link from 'next/link'
import { RssFeed } from '../domain/rssfeed'
import { Segment } from 'semantic-ui-react'
import moment from 'moment'

type EpisodesPropsType = {
  item: RssFeed
}

export const Episodes = (props: EpisodesPropsType) => {
  const { item } = props
  return (
    <Segment>
      {moment(item.pubDate).format('YYYY/MM/DD')} <br />
      {item.title} <br />
      <Link href={{ pathname: '/episode', query: { ep: item.episode } }}>
        more
      </Link>
    </Segment>
  )
}
