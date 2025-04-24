import swaggerJSDoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import _ from 'lodash';

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
  apis: [], // not scanning JSDoc anymore
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Load and merge all YAML docs
const yamlFiles = ['auth.openapi.yaml', 'health.openapi.yaml', 'users.openapi.yaml'];
yamlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const doc = yaml.load(fs.readFileSync(filePath, 'utf8')) as Record<string, unknown>;
  _.merge(swaggerSpec, doc);
});

export default swaggerSpec;
