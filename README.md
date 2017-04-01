# Notforgotten

Account Manager application for the Notforgotten OTS

#### Requirements
- Node.js (v7.8.0 or later is recomended)
- NPM (4.2.0 or later is recommended)
- MySQL (14.14 or later is recommended)
- TheForgottenServer or at least it's schema loaded into the database.

#### Setup
- Clone the repository and `cd` into it's directory
- `cp .env.sample .env`
- Add correct configuration variables to `.env` file.
- Run `npm install`
- Make sure MySQL is running, your database is created and TFS's schema is loaded.
- Run the server with `node index.js`
