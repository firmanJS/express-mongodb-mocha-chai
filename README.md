# Boilerplate express mongodb

### This app for the Boilerplate express mongodb

[![Maintainability](https://api.codeclimate.com/v1/badges/dfb2ca2f2e1db6fdfab2/maintainability)](https://codeclimate.com/github/firmanJS/express-mongodb-mocha-chai/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dfb2ca2f2e1db6fdfab2/test_coverage)](https://codeclimate.com/github/firmanJS/express-mongodb-mocha-chai/test_coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/232af6534921479f8212b79dfbe6db2b)](https://www.codacy.com/manual/firmanJS/express-mongodb-mocha-chai?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=firmanJS/express-mongodb-mocha-chai&amp;utm_campaign=Badge_Grade)

### How To run

#### Copy environment variable

```sh
cp .env-sample .env
```

#### Run manualy via npm

```sh
npm install

npm run start
```

#### Fill in the copied environment earlier

```sh
#MONGO SETUP
MONGO_DB_URI=mongose://mongodb:27017/mocha-chai # URL MONGOSE
MONGO_INITDB_ROOT_USERNAME= # username
MONGO_INITDB_ROOT_PASSWORD= # password
MONGODB_PORT=27017

#auth mongoDB Management
ME_CONFIG_MONGODB_SERVER=mongose
ME_CONFIG_BASICAUTH_USERNAME=# username
ME_CONFIG_BASICAUTH_PASSWORD=# password
ME_CONFIG_MONGODB_PORT=8081

#image docker
MNG_DATABASE=mongo-express
MNG_DB=mongose

APP_PORT=3000
JWT_SECRET= # jwt secret key name here
APP_ENV=development
```

#### Run with docker-compose

```sh
docker-compose up --build
```

#### Or run with background process

```sh
docker-compose up --build -d
```

#### Run unit testing
```sh
docker-compose exec apps npm run test
```

## Enjoy :yum: