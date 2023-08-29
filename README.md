# Skeleton Mock service

## How to run

1. You will need the latest LTS version of Node JS `18.17.1`
2. `npm run build`
3. `npm run start`
4. When you are ready you can go hit the service endpoint [http://localhost:8005(http://localhost:8005) 
5. You should see the response ``{ hello: 'world' }``

## How to run tests with code coverage

`npm run test`

## Run scripts

|       Action | Script                 |
| -----------: | ---------------------- |
|        Build | `npm run build`        |
|  Build watch | `npm run build-watch`  |
|  Run locally | `npm run start`        |
|    Run tests | `npm run test`         |
|         Lint | `npm run lint`         |
|     Lint fix | `npm run lint-fix`     |
|     Prettier | `npm run prettier`     |
| Prettier fix | `npm run prettier-fix` |

## Tech stack

- typescript
- express
- jest
- supertest
- axios
- pino
- esbuild
