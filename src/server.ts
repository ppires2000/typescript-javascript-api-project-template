// src/server.ts
import app from './app';
import { logger } from './utils/logger';
import { sequelize } from './database/config/database';

sequelize
  .authenticate()
  .then(() => {
    logger.success('🟢 PostgreSQL connection has been established successfully.');
  })
  .catch(error => {
    logger.error('🔴 Unable to connect to the PostgreSQL database: ' + error);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.success(`🚀 Server running at http://localhost:${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
