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

npm run start
```

`fill in the copied environment earlier`

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
docker-compose exec apps npm run test
```

## enjoy 