import { sequelize } from './src/database/config/database';

const waitForDatabase = async (retries = 5, delay = 2000): Promise<void> => {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('✅ Database is ready!');
      return;
    } catch (err) {
      console.log(`⏳ Waiting for DB (${i + 1}/${retries})...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('❌ Database not ready after retries.');
};

export default async () => {
  await waitForDatabase();
  await sequelize.sync({ force: true });
};
