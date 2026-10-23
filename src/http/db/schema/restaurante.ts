import { text, timestamp, pgTable} from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'






export const restaurante = pgTable('restaurante', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  name: text('name').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
 