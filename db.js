import sqlite3 from "sqlite3";

const db = new sqlite3.Database('final.db');

db.run(`ALTER TABLE player
RENAME COLUMN '100' to hundred;`, function (err) {
  if (err) {
    return console.error(err.message);
  }

  console.log("success");
});

// Close the database connection
db.close();


`INSERT INTO player (player_id,team_id,player_name,no_of_matches,no_of_runs,no_of_wickets,type_of_bowler,economy) VALUES (11, 1, 'Mohammed Shami', 75, 400, 130, 'Fast Bowler', 4.90
)`