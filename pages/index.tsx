import { Layout } from '../components/layout'
import { Header, Segment } from 'semantic-ui-react'
import { Episodes } from '../components/episodes'

export const IndexPage = (): JSX.Element => (
  <Layout>
    <Segment basic>
      <Header as="h1" color="grey">
        Welcome to Coconuts.tech
      </Header>
    </Segment>
    <Segment basic>
      <Header as="h2" color="grey" dividing>
        About
      </Header>
    </Segment>
    <Segment basic padded>
      <p style={{ fontSize: '1.33em' }}>
        このポッドキャストは、テックに興味のあるおじさんが２週間に一度気になったトピックについて
        <br />
        ゆるゆると話すポッドキャストです。
        <br />
        ポッドキャストの名前は、カタカナで「ココナッツテック」です。
        <br />
        もし、感想などあれば、ハッシュタグ全角カタカナで
        <span style={{ fontSize: '1.5em' }}>#ココナッツテック</span>
        でつぶやいていただけると大変うれしいです。
        <br />
      </p>
    </Segment>
    <Episodes />
  </Layout>
)

export default IndexPage
