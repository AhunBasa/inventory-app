const express = require("express");
const mongoose = require("mongoose");

const categoriesRouter = require("./routes/categories");

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

async function main() {
  await mongoose.connect("mongodb://localhost/testDB");
  await app.listen(3000, () => {
    console.log("Listening on 3000");
  });
}

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error.message);
});
db.on("open", () => console.log("Connected"));

main().catch((err) => console.log(err));

app.use("/categories", categoriesRouter);
app.get("/", (req, res) => {
  res.redirect("/categories");
});
