import { RssFeed } from '../domain/rssfeed'
import { Card } from 'semantic-ui-react'
import moment from 'moment'

type EpisodesPropsType = {
  item: RssFeed
}

export const Episode = (props: EpisodesPropsType) => {
  const { item } = props
  return (
    <Card.Group>
      <Card fluid href={`/episodes/${item.episode}`}>
        <Card.Content>
          <Card.Meta>{moment(item.pubDate).format('YYYY/MM/DD')}</Card.Meta>
          <Card.Header>{item.title}</Card.Header>
          <Card.Description>{item.personalities.join(' , ')}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}
