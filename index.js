import express from "express";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import open from 'open';

const app = express();
const port = 3000;
const db = new sqlite3.Database('final.db');
let captain, player, team, wk;
const urlToOpen = "http://localhost:3000/";

open(urlToOpen)
    .then(() => {
        console.log(`Opened ${urlToOpen} in the default web browser.`);
    })
    .catch((err) => {
        console.error(`Error opening ${urlToOpen}: ${err.message}`);
    });


app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.render("index");
});


app.post("/homepage", async (req, res) => {
        db.all("SELECT * FROM captain", (err, captain) => {
            db.all("SELECT * FROM player", (err, player) => {
                db.all("SELECT * FROM team", (err, team) => {
                    db.all("SELECT * FROM wicket_keeper", (err, wk) => {
                        db.all("SELECT * FROM stadium", (err, stadium) => {
                            db.all("SELECT * FROM coach", (err, coach) => {
                                db.all("SELECT * FROM umpire", (err, umpire) => {
                                    res.render('homepage',{
                                        captain:captain,
                                        team:team,
                                        player:player,
                                        wk:wk,
                                        stadium:stadium,
                                        coach:coach,
                                        umpire:umpire
                                    });
                                })
                            })
                        })
                    })
                })
            })
        })
});


app.post("/team", async (req, res) => {
    db.all("SELECT * FROM captain", (err, captain) => {
        db.all("SELECT * FROM player", (err, player) => {
            db.all("SELECT * FROM team WHERE team_name=?", [req.body.team], (err, team) => {
                db.all("SELECT * FROM wicket_keeper", (err, wk) => {
                    db.all("SELECT * FROM stadium", (err, stadium) => {
                        db.all("SELECT * FROM coach", (err, coach) => {
                            db.all("SELECT * FROM umpire", (err, umpire) => {
                                res.render('homepage',{
                                    captain:captain,
                                    team:team,
                                    player:player,
                                    wk:wk,
                                    stadium:stadium,
                                    coach:coach,
                                    umpire:umpire
                                });
                            })
                        })
                    })
                })
            })
        })
    })
});

app.post("/player", async (req, res) => {
    db.all("SELECT * FROM captain", (err, captain) => {
        db.all("SELECT * FROM player WHERE player_name=? OR team_id=?", [req.body.player,req.body.player], (err, player) => {
            db.all("SELECT * FROM team", (err, team) => {
                db.all("SELECT * FROM wicket_keeper", (err, wk) => {
                    db.all("SELECT * FROM stadium", (err, stadium) => {
                        db.all("SELECT * FROM coach", (err, coach) => {
                            db.all("SELECT * FROM umpire", (err, umpire) => {
                                res.render('homepage',{
                                    captain:captain,
                                    team:team,
                                    player:player,
                                    wk:wk,
                                    stadium:stadium,
                                    coach:coach,
                                    umpire:umpire
                                });
                            })
                        })
                    })
                })
            })
        })
    })
});


app.post("/wk", async (req, res) => {
    db.all("SELECT * FROM captain", (err, captain) => {
        db.all("SELECT * FROM player", (err, player) => {
            db.all("SELECT * FROM team", (err, team) => {
                db.all("SELECT * FROM wicket_keeper WHERE wk_name=?", [req.body.wk], (err, wk) => {
                    db.all("SELECT * FROM stadium", (err, stadium) => {
                        db.all("SELECT * FROM coach", (err, coach) => {
                            db.all("SELECT * FROM umpire", (err, umpire) => {
                                res.render('homepage',{
                                    captain:captain,
                                    team:team,
                                    player:player,
                                    wk:wk,
                                    stadium:stadium,
                                    coach:coach,
                                    umpire:umpire
                                });
                            })
                        })
                    })
                })
            })
        })
    })
});

app.post("/captain", async (req, res) => {
    db.all("SELECT * FROM captain WHERE captain_name=?", [req.body.captain], (err, captain) => {
        db.all("SELECT * FROM player", (err, player) => {
            db.all("SELECT * FROM team", (err, team) => {
                db.all("SELECT * FROM wicket_keeper", (err, wk) => {
                    db.all("SELECT * FROM stadium", (err, stadium) => {
                        db.all("SELECT * FROM coach", (err, coach) => {
                            db.all("SELECT * FROM umpire", (err, umpire) => {
                                res.render('homepage',{
                                    captain:captain,
                                    team:team,
                                    player:player,
                                    wk:wk,
                                    stadium:stadium,
                                    coach:coach,
                                    umpire:umpire
                                });
                            })
                        })
                    })
                })
            })
        })
    })
});


app.post("/coach", async (req, res) => {
    db.all("SELECT * FROM captain", (err, captain) => {
        db.all("SELECT * FROM player", (err, player) => {
            db.all("SELECT * FROM team", (err, team) => {
                db.all("SELECT * FROM wicket_keeper", (err, wk) => {
                    db.all("SELECT * FROM stadium", (err, stadium) => {
                        db.all("SELECT * FROM coach WHERE coach_name=?",[req.body.coach], (err, coach) => {
                            db.all("SELECT * FROM umpire", (err, umpire) => {
                                res.render('homepage',{
                                    captain:captain,
                                    team:team,
                                    player:player,
                                    wk:wk,
                                    stadium:stadium,
                                    coach:coach,
                                    umpire:umpire
                                });
                            })
                        })
                    })
                })
            })
        })
    })
});

app.post("/stadium", async (req, res) => {
    db.all("SELECT * FROM captain", (err, captain) => {
        db.all("SELECT * FROM player", (err, player) => {
            db.all("SELECT * FROM team", (err, team) => {
                db.all("SELECT * FROM wicket_keeper", (err, wk) => {
                    db.all("SELECT * FROM stadium WHERE stadium_name=?",[req.body.stadium], (err, stadium) => {
                        db.all("SELECT * FROM coach", (err, coach) => {
                            db.all("SELECT * FROM umpire", (err, umpire) => {
                                res.render('homepage',{
                                    captain:captain,
                                    team:team,
                                    player:player,
                                    wk:wk,
                                    stadium:stadium,
                                    coach:coach,
                                    umpire:umpire
                                });
                            })
                        })
                    })
                })
            })
        })
    })
});

app.post("/umpire", async (req, res) => {
    db.all("SELECT * FROM captain", (err, captain) => {
        db.all("SELECT * FROM player", (err, player) => {
            db.all("SELECT * FROM team", (err, team) => {
                db.all("SELECT * FROM wicket_keeper", (err, wk) => {
                    db.all("SELECT * FROM stadium", (err, stadium) => {
                        db.all("SELECT * FROM coach", (err, coach) => {
                            db.all("SELECT * FROM umpire WHERE umpire_name=?",[req.body.umpire], (err, umpire) => {
                                res.render('homepage',{
                                    captain:captain,
                                    team:team,
                                    player:player,
                                    wk:wk,
                                    stadium:stadium,
                                    coach:coach,
                                    umpire:umpire
                                });
                            })
                        })
                    })
                })
            })
        })
    })
});

app.listen(port, () => {
    console.log("listening on port");
})