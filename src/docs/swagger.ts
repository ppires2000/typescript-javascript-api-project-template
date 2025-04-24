import swaggerJSDoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import _ from 'lodash'; // you'll install this

const userDocPath = path.join(__dirname, 'users.openapi.yaml');
const userDoc = yaml.load(fs.readFileSync(userDocPath, 'utf8')) as Record<string, any>;

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Template',
      version: '1.0.0',
      description: 'Starter API with Express, TypeScript, and Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Merge loaded YAML into swaggerSpec definition
_.merge(swaggerSpec, userDoc);

export default swaggerSpec;
