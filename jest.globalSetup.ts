import { sequelize } from './src/database/config/database';

export default async function globalSetup() {
  await sequelize.sync({ force: true });
}
