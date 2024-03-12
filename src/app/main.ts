import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as path from 'path'; // Import the path module

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

  // for migrations
  const migrationClient = postgres(connectionString, {
    max: 1,
  });

  migrate(drizzle(migrationClient), {
    migrationsFolder: 'drizzle',
  });

  // for query purposes
  const queryClient = postgres(connectionString);
  const db = drizzle(queryClient);
}
bootstrap();
