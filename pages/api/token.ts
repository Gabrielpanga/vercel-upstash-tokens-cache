// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuth0M2MTokenWithCache } from '../../lib/token'

type Data = {
  accessToken: string
}

type Error = {
  message: string
}

// TODO: Add security
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { audience } = req.query
  const service = Array.isArray(audience) ? audience[0] : audience

  if (!service) {
    return res.status(400).json({ message: 'Service not provided' })
  }

  const accessToken = await getAuth0M2MTokenWithCache(service)

  // TODO: Instead of returning it, use it internally
  return res.status(200).json({ accessToken })
}
