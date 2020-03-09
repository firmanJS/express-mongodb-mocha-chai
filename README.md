# Boilerplate express mongodb

### this app for the Boilerplate express mongodb

### How To run

`copy environment variable`

```sh
cp .env-sample .env
```

* run manualy

```sh
npm install

npm runstart
```

`fill in the copied environment earlier`

```sh
MONGO_DATA_DIR= #mongodb directory
MONGO_LOG_DIR= #mongodb directory log
MONGO_DB=expressMongoDB
MONGO_ROOT_USER= #mongodb root user
MONGO_ROOT_PASSWORD= #mongodb root password
MONGOEXPRESS_LOGIN= #mongodb like phpmyadmin login
MONGOEXPRESS_PASSWORD= #mongodb like phpmyadmin password
MONGODB_PORT=27017
MONGO_EXPRESS_PORT_SECURE=8888
MONGO_EXPRESS_PORT_UNSECURE=8081

APP_PORT=3000
JWT_SECRET= # jwt secret key name here
APP_ENV=development
```

`run with docker-compose`

```sh
docker-compose up --build
```

or run with background process

```sh
docker-compose up --build -d
```

`run unit testing`
```sh
docker-compose exec service_nodejs npm run test
```

## enjoy 