module.exports = `{
    "name": "",
    "version": "0.0.0",
    "main": "main.ts",
    "author": "api-smith",
    "scripts": {
      "start": "TS_NODE_PROJECT=tsconfig-paths.json node -r tsconfig-paths/register dist/main.js",
      "clean": "rm -rf dist/",
      "build": "tsc --build --pretty",
      "dev": "ts-node-dev -r tsconfig-paths/register --rs --respawn --transpile-only src/main.ts"
    },
    "dependencies": {
      "@supercharge/request-ip": "^1.2.0",
      "axios": "^1.1.3",
      "compression": "^1.7.4",
      "cors": "^2.8.5",
      "dotenv": "^16.0.3",
      "express": "^4.18.2",
      "express-validator": "^6.14.2",
      "helmet": "^6.0.0",
      "lodash": "^4.17.21",
      "morgan": "^1.10.0",
      "tsconfig": "^7.0.0",
      "tsconfig-paths": "^4.1.0",
      "typescript": "^4.8.4",
      "validator": "^13.7.0"
    },
    "devDependencies": {
      "@types/btoa": "^1.2.3",
      "@types/compression": "^1.7.2",
      "@types/cors": "^2.8.12",
      "@types/express": "^4.17.17",
      "@types/helmet": "^4.0.0",
      "@types/lodash": "^4.14.188",
      "@types/morgan": "^1.9.3",
      "@types/node": "^18.13.0",
      "@types/validator": "^13.7.10",
      "@typescript-eslint/eslint-plugin": "^5.42.1",
      "@typescript-eslint/parser": "^5.42.1",
      "eslint": "^8.27.0",
      "eslint-config-prettier": "^8.5.0",
      "eslint-plugin-prettier": "^4.2.1",
      "prettier": "^2.7.1",
      "ts-node": "^10.9.1",
      "ts-node-dev": "^2.0.0"
    }
}
`;
