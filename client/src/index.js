/*const areaRoutes = require("./app/routes/areaRoutes");
const participantesRoutes = require("./app/routes/participantesRoutes");
const ciudadRoutes = require("./app/routes/ciudadRoutes");
const cargoRoutes = require("./app/routes/cargoRoutes");
const eventosRoutes = require("./app/routes/eventosRoutes");*/

const cors = require('cors');
require("dotenv").config();
require("./database");
const app = require("./server");

app.use(cors());

app.listen(app.get("port"), () => {
    console.log("Port: ", app.get("port"));
});

/*app.use("/eventos", eventosRoutes);
app.use("/participantes", participantesRoutes);
app.use("/cargos", cargoRoutes);
app.use("/ciudades", ciudadRoutes);
app.use("/area", areaRoutes);*/