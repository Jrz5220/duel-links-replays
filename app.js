const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();    // creates an express application

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));   // allows express to parse data coming from an html form

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.gt8nl.mongodb.net/duelsDB?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

const duelSchema = mongoose.Schema({
  name: String,
  title: String,
  videoPath: String,
  numOfCards: Number,
  cards: [{
    htmlId: String,
    cardType: String,
    path: String,
    name: String
  }],
  skill: String,
  skillDetail: String,
  containsSkillCard: Boolean,
  skillCard: String,
  skillCardPath: String,
  skillCardName: String,
  skillCardType: String,
  skillCardEffect: String
});

const Vendread = mongoose.model("vendreads", duelSchema);
const Vampire = mongoose.model("vampires", duelSchema);
const SacredSoldier = mongoose.model("sacredsoldiers", duelSchema);
const Amazon = mongoose.model("amazons", duelSchema);
const Archfiend = mongoose.model("archfiends", duelSchema);
const Dino = mongoose.model("dinos", duelSchema);
const RedEyesZombie = mongoose.model("redeyeszombies", duelSchema);
const SpecialDuel = mongoose.model("specialduels", duelSchema);
const OtherDuel = mongoose.model("otherduels", duelSchema);

app.get("/", function(req, res) {
  res.render("index");
});

//----------- V E N D R E A D S -----------
app.get("/vendreads-v-shiranui", function(req, res) {
  Vendread.findOne({name: "vendreadVShiranui"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  })
});
app.get("/vendreads-v-eHeroes", function(req, res) {
  Vendread.findOne({name: "vendreadVEHeroes"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/vendreads-v-blackwings", function(req, res) {
  Vendread.findOne({name: "vendreadVBlackwings"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/vendreads-v-cyberEndDragon", function(req, res) {
  Vendread.findOne({name: "vendreadVCyberEndDragon"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/vendreads-v-magnets", function(req, res) {
  Vendread.findOne({name: "vendreadVMagnets"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/vendreads-v-triple-desperado", function(req, res) {
  Vendread.findOne({name: "vendreadVTripleDesperado"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
//----------- V A M P I R E S -----------
app.get("/vampires-v-ancientGear", function(req, res) {
  Vampire.findOne({name: "vampiresVAncientGear"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/vampires-v-fortuneLadies", function(req, res) {
  Vampire.findOne({name: "vampiresVFortuneLadies"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/vampires-v-nephthys", function(req, res) {
  Vampire.findOne({name: "vampiresVNephthys"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/vampires-v-burn", function(req, res) {
  Vampire.findOne({name: "vampiresVBurn"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
      console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
//----------- S A C R E D  S O L D I E R -----------
app.get("/sacredSoldier-v-silentMagician", function(req, res) {
  SacredSoldier.findOne({name: "sacredSoldierVSilentMag"}, function(err, duelFound) {
    if(err) {
      res.redirect("/");
        console.log(err);
    } else if(duelFound === null) {
      res.redirect("/");
      console.log("Document not found in database");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/sacredSoldier-v-BEWD", function(req, res) {
  SacredSoldier.findOne({name: "sacredSoldierVBEWD"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/sacredSoldier-ftk", function(req, res) {
  SacredSoldier.findOne({name: "sacredSoldierFTK"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/lavaGolemFinish", function(req, res) {
  SacredSoldier.findOne({name: "lavaGolemFinish"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
//----------- A M A Z O N E S S -----------
app.get("/amazon-meta", function(req, res) {
  Amazon.findOne({name: "amazonMeta"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
//----------- A R C H F I E N D S -----------
app.get("/archfiends-v-dragons", function(req, res) {
  Archfiend.findOne({name: "archfiendsVDragons"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const replayData = duelFound;
      res.render("replays", {replay: replayData});
    }
  });
});
//----------- D I N O S -----------
app.get("/dinos-v-subterrors", function(req, res) {
  Dino.findOne({name: "dinosVSubterrors"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/dinos-v-gravekeepers", function(req, res) {
  Dino.findOne({name: "dinosVGK"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/dinos-v-coin-flip", function(req, res) {
  Dino.findOne({name: "dinosVCoinFlip"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
//----------- R E D - E Y E S   Z O M B I E -----------
app.get("/rezd-v-armedDragon", function(req, res) {
  RedEyesZombie.findOne({name: "rezdVArmedDragon"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
//----------- S P E C I A L   D U E L S -----------
app.get("/necrofear-v-nobleKnights", function(req, res) {
  SpecialDuel.findOne({name: "necrofearVNobleKnights"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
//----------- O T H E R   D U E L S -----------
app.get("/bakura-otk", function(req, res) {
  OtherDuel.findOne({name: "bakuraOTK"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/constellar-v-bewd", function(req, res) {
  OtherDuel.findOne({name: "constellarVBEWD"}, function(err, duelFound) {
    if(err) {
      console.log(err);
      res.redirect("/");
    } else if(duelFound === null) {
      console.log("Document not found in database");
      res.redirect("/");
    } else {
      const duelData = duelFound;
      res.render("replays", {replay: duelData});
    }
  });
});
app.get("/email", function(req, res) {
  res.render("email");
});

// if deploying on Heroku, specify correct port (visit Heroku for proper configuration)
let port = process.env.PORT;
if(port == "" || port == null) {
  port = 3000;
}

app.listen(port, function(req, res) {
  console.log("Server running successfully");
});
