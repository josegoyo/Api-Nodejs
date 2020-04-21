# Api Rest with NodeJS and Express

This is a basic example of api rest using `nodejs`, `express` and `sequelize` to manage our data base.

Create this `.env` file:

```
DB_HOST=localhost
DB_USER=localuser
DB_PASS=localpass
DB_NAME=db_name
DB_DIALECT=mysql

PORT=8000
```

To run this project you must execute the following commands:

- `npm install` to install all dependencies.
- `npm run dev` to run nodemon. this only in local development.

And you can see the following links in your browser or postman:

- `GET: http://localhost:8000/api/services`
- `GET: http://localhost:8000/api/services/:id`
- `POST: http://localhost:8000/api/services`
- `PUT: http://localhost:8000/api/services/:id`
- `DELETE: http://localhost:8000/api/services/:id`
