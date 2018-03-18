# Nodejs, Sequelize, MySQL, Rest API Example

Build Restful CRUD API for a simple application using Nodejs, Sequelize, and MySQL

## Requirements

1. Nodejs - 9.8.x

2. Mysql - 5.x.x

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/sean3z/nodejs-hero-api-example.git
```

**2. Create DATABASE_URL environment variable**

+ `export DATABASE_URL=mysql://user:pass@localhost/heroes`

**3. Install Node Dependencies**
```bash
npm i
```

**4. Run the app**

```bash
node app.js
```

The app will start running at <http://localhost:8000>

## Explore Rest APIs

The app defines following CRUD APIs.

    GET /heroes

You can test them using postman or any other rest client.

## Learn more

You can find more information on my blog post -

<https://medium.com/p/1867308352d8>