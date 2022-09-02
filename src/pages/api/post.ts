import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from 'src/lib/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.form.values)
  try {
    await client.create({ endpoint: 'contact', content: req.body.form.values })
    res.status(200).json('ok')
  } catch {
    res.statusCode = 500
  }
}

export default handler
