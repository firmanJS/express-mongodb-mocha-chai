# Boilerplate express mongodb

### This app for the Boilerplate express mongodb

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