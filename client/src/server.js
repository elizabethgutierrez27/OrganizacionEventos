const express = require("express");
const app = express();
const morgan = require("morgan");
const areaRoutes = require("./app/routes/areaRoutes")
const ciudadRoutes=require("./app/routes/ciudadRoutes")

module.exports = app;

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false}));
app.use(morgan("dev"));

app.use("/api/areas", areaRoutes)
app.use("/api/ciudad", ciudadRoutes)
/*app.use(require("./app/routes/areaRoutes"));
app.use(require("./app/routes/cargoRoutes"));
app.use(require("./app/routes/ciudadRoutes"));
app.use(require("./app/routes/eventosRoutes"));
app.use(require("./app/routes/participantesRoutes"));*/
