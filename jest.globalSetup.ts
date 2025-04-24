// jest.globalSetup.ts
import { sequelize } from './src/database/config/database';

const waitForDatabase = async (retries = 15, delay = 3000): Promise<void> => {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('✅ Database connection successful!');
      return;
    } catch (err) {
      console.log(`⏳ DB not ready, retrying... (${i + 1}/${retries})`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error('❌ Database not ready after max retries.');
};

export default async () => {
  console.log('🌐 Jest Global Setup: Waiting for database...');
  await waitForDatabase();
  await sequelize.sync({ force: true }); // Optional: or skip if not required in CI
};
