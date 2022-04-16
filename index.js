const express = require("express");
const app = express();
const gis = require("g-i-s");
const {
  getFromAmor,
  getFromCollection,
  getFromMotivacionais,
  getFromSoltas,
} = require("pensador");
const port = 80;

app.get("/pensador/amor", async (req, res) => {
  res.send(await getFromAmor());
});

app.get("/pensador/colecao", async (req, res) => {
  res.send(await getFromCollection());
});

app.get("/pensador/motivacional", async (req, res) => {
  res.send(await getFromMotivacionais());
});

app.get("/pensador/solta", async (req, res) => {
  res.send(await getFromSoltas());
});

app.get("/gis/:id", async (req, res) => {
  gis(req.params.id, logResults);
  function logResults(error, results) {
    if (error) {
      res.send(error);
    } else {
      res.send(JSON.stringify(results[1], null, "  "));
    }
  }
});

app.listen(port, () => console.log("api online"));
