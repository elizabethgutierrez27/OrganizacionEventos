const mongoose = require("mongoose");
require("dotenv").config();

const { EVENTS_APP_MONGODB_HOST, EVENTS_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URL = `mongodb://${EVENTS_APP_MONGODB_HOST}/
${EVENTS_APP_MONGODB_DATABASE}`;

mongoose
    .connect(MONGODB_URL, {})
    .then(() => console.log("Mongo is working"))
    .catch((err) => console.error(err))


