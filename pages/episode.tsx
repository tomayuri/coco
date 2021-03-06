import { useRouter } from 'next/router'

const Episode = () => {
  const router = useRouter()
  const { ep } = router.query
  return <div>Hello : {ep}</div>
}

export default Episode
