import type { Config, Context } from '@netlify/functions'

export default async (_req: Request, _context: Context) => {
    return Response.json({ memory: process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE });
}

export const config: Config = {
  path: '/api/hello',
  memory: '2gb'
}
