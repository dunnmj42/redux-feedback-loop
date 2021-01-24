# React Feedback Loop

## Description

A simple, full-stack feedback form app that takes input from a user across multiple client-side routed pages, and gives the user a chance to review before submitting. Submitted feedback is stored in the postgres database for data permanence. Input validation requires the user to enter a value for each page in the form before continuing, with the exception of the comments page, which does not require an input.

## Installation

1. Create a SQL database named `prime_feedback`
2. The queries in the `data.sql` file are set up to create all the necessary tables. The INSERT statement will populate the table with data. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run `npm install` in the terminal
4. Run `npm run server` 
5. Run `npm run client`
## Built With

 React, Redux, Node.js, PostgreSQL and PG, Express, Redux-logger, Material UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped me with the skills to make this application a reality.
