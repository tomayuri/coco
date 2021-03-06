// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import xml2js from 'xml2js'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  fetch('https://anchor.fm/s/4881bfd0/podcast/rss')
    .then((res) => res.text())
    .then((xml) => {
      const parser = new xml2js.Parser()
      parser.parseStringPromise(xml).then((result) => {
        res.status(200).json(result)
      })
    })
}

export default handler
