import type { Config, Context } from '@netlify/functions'

export default async (_req: Request, _context: Context) => {
    return Response.json({ memory: process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE });
}

/*
function getMemoryConfig()  {
  let result = {}
  const rawMemorySize = process.env.NETLIFY_PRERENDER_MEMORY_SIZE;
  if (rawMemorySize) {
    result = { memory: rawMemorySize };
  }
  console.log("getMemoryConfig() result:", result);
  return result;
}
*/

const mem = "4gb";

export const config: Config = {
  path: '/api/hello',
  //....getMemoryConfig()
  memory: mem
}
