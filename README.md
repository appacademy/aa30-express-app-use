# Practice: `app.use()`

In this practice, you will see the difference between `app.use()` and
`app.METHOD()` for connecting route handlers.

## Getting started

Download starter. `cd` into __server__ folder, and install dependencies using
`npm install`.

Start the Express server in development mode using `npm run dev`.

Open your browser (e.g. Google Chrome), and go to
[http://localhost:5000][localhost].

You should see this response:

```json
{"message":"API server is running"}
```

## Part 1: Exploring `req.url` within `app.use()`

Take a look at the code in the __server/app.js__ file. Based off of the code in
Part 1 of the code, what should be returned from a request to `GET /get`? Write
your guess down and open up Postman. In Postman, make a request to `GET /get`
with a host of `localhost:5000`. What is returned as the response to that
request in Postman? Did your expectations match the response? Pay attention to
what `req.url` in the code evaluated to in the response.

Now, what do you think should be returned from a request to `GET /use`? In
Postman, make a request to `GET /use` with a host of `localhost:5000`. What is
returned as the response to that request in Postman? Did your expectations match
the response? Again, pay attention to what `req.url` in the code evaluated to in
the response.

## Part 2: Exploring requests that match `app.use()`

Now, you will be working on the code in Part 2 of the __server/app.js__ file.

Connect the `blogResource` route handler to the Express application with the
URL pattern prefix of `/blogs/:id`.

Which of the following requests will call the `blogResource` route handler?
WRite your expectation down for each request.

1. `GET /blogs/2`
2. `DELETE /blogs/2/comments`
3. `POST /blogs`
4. `GET /blog`
5. `PUT /blogs/id`
6. `GET /blogs/2comments`

Now try making those requests in Postman to see if what you expected matches
the response of the `blogResource` route handler.
