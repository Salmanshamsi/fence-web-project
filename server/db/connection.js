const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_DB_uri).then(() => {
  console.log("DB IS CONNECTED");
}).catch((err) => {
  console.log("Error while connecting to the database.", err);
});
