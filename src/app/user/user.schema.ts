import { Injectable } from '@nestjs/common';
import { pgTable, varchar, uuid } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  uuid: uuid('uuid').primaryKey(),
  firstName: varchar('first_name', { length: 256 }),
  lastName: varchar('last_name', { length: 256 }),
  email: varchar('email', { length: 256 }),
});
export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
