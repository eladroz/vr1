import type { Config, Context } from '@netlify/functions'

export default async (_req: Request, _context: Context) => {
  return Response.json({ message: 'Hello, world!' })
}

export const config: Config = {
  path: '/api/hello',
}
