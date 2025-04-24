#!/bin/bash

echo "⚠️  Resetting the database..."
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
echo "✅ Database reset complete!"
