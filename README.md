# Random average number service

- When the random average number service starts it calls a target service using recursion every one second ``https://csrng.net/csrng/csrng.php?min=0&max=100``

- The target API returns an object that contains a random number ``[{ max: 100, min: 0, random: 23, status: success }]``

- This number is pushed in a number list promise

- When the random average number endpoint is called ``/random-average-number`` it takes the number list stored in the promise and builds a json response object 

- The json response includes a list of the random numbers since the service started, a calculated average number and fixed average number ``{randomNumbers:[69,19,1,55],averageNumber:36,averageNumberFixed:36}`` 




## How to run
1. You will need the latest LTS version of Node JS ``18.17.1`` 
2. ``npm run build``
3. ``npm run start``
4. When you are ready you can go hit the service endpoint [http://localhost:8005/random-average-number](http://localhost:8005/random-average-number) ``http://localhost:8005/random-average-number`` 
5. You should see the average random number response``{randomNumbers:[69,19,1,55],averageNumber:36,averageNumberFixed:36}``
6. If you hit the endpoint again you will see an increment in the results


## How to run tests with code coverage
``npm run test``


## Run scripts
|       Action | Script                   |
|-------------:|--------------------------|
|        Build | ``npm run build``        |
|  Build watch | ``npm run build-watch``  |
|  Run locally | ``npm run start``        |
|    Run tests | ``npm run test``         |
|         Lint | ``npm run lint``         |
|     Lint fix | ``npm run lint-fix``     |
|     Prettier | ``npm run prettier``     |
| Prettier fix | ``npm run prettier-fix`` |



## Tech stack
- typescript
- express
- jest
- supertest
- axios
- pino
- esbuild

