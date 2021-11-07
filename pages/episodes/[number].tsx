import { useRouter } from 'next/router'
import { Layout } from '../../components/layout'

const Episode = () => {
  const router = useRouter()
  const { number } = router.query
  return (
    <Layout>
      <div>Hello : {number}</div>
      <iframe
        src="https://anchor.fm/coconuts-tech/embed/episodes/33---Nuxt3----GitLab--JFrogep17-e19mbn1"
        width="100%"
        scrolling="no"
      ></iframe>
    </Layout>
  )
}

export default Episode
