# typescript-javascript-api-project-template

Project to create and maintain a typecript/javascript backend api project template

# 1. Clone the repo

git clone https://github.com/ppires2000/typescript-javascript-api-project-template.git
cd typescript-javascript-api-project-template

# 2. Install dependencies

npm install

# 3. Copy environment variables

cp .env.example .env

# 4. Start in development mode

npm run dev

## Available Commands

Command Description
npm run dev Start development server with auto-restart + logging
npm run build Compile TypeScript to JavaScript (dist/)
npm start Run compiled app (production mode)
npm test Run test suite (Jest + Supertest)
npm run lint Run ESLint for code quality
npm run lint:fix Auto-fix ESLint issues
npm run format Format code with Prettier
