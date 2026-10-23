import type { Config } from 'drizzle-kit'

export default {
  schema: './src/http/db/schema/index.ts',
  out: './drizzle',
  driver: 'pglite',
  dialect: 'postgresql',
} satisfies Config