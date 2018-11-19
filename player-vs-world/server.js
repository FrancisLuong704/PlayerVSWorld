const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const db = require("./models");
// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/api-routes.js")(app);
app.use(express.static("public"));
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

  //app.use(routes);
  db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}`);
    });
  });
