Cricket Database Web Application

A web application built with Node.js, Express, and SQLite to manage and display cricket-related data.

The application stores and allows viewing/filtering of information about cricketers, teams, captains, coaches, stadiums, wicket-keepers, and umpires.

Features

View all players, captains, teams, coaches, stadiums, umpires, and wicket-keepers.

Filter information by player name, team, captain, coach, stadium, wicket-keeper, or umpire.

Data is stored in a SQLite database (final.db).

Dynamic frontend rendered with EJS templates.

Prerequisites

Node.js
 (v14 or above)

npm (comes with Node.js)

SQLite3

Installation

Clone the repository

git clone https://github.com/Paplesh107/Movie-Application-App.git
cd Movie-Application-App


Install dependencies

npm install


Ensure the SQLite database exists

The database file final.db should be in the project root and include the following tables:

captain

player

team

wicket_keeper

stadium

coach

umpire

You can create the database manually or use a SQL script (not included here).

Running the Application

Start the server

node app.js


Access the application

The app will automatically open in your default browser at http://localhost:3000
.

From the homepage, you can browse and filter cricket data.

Project Structure
Cricket-Database-App/
├─ public/                 # Static files (CSS, JS, images)
├─ views/                  # EJS templates
│  ├─ index.ejs
│  └─ homepage.ejs
├─ final.db                # SQLite database
├─ app.js                  # Main server file
├─ package.json
└─ README.md

Dependencies

express – Web framework for Node.js

body-parser – Parse incoming request bodies

sqlite3 – SQLite database driver

ejs – Templating engine for dynamic HTML

open – Open URL in default browser

Install all dependencies with:

npm install

Notes

The server runs on port 3000 by default. You can change it in app.js if needed.

All data interactions happen via POST requests to filter and display cricket information.

Ensure your database contains valid data in all tables for the app to function correctly.