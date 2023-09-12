const express = require('express');
const routes = require('./routes');
// import sequelize connection
// const sequelize = require('./config/connection');
// const seedAll = require('./seeds/index');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false }).then(() => {
//   console.log('Database synced.');
//   seedAll().then(() => {
//     console.log('Data seeded.');
//     app.listen(PORT, () => {
//       console.log(`App listening on port ${PORT}!`);
//     });
//   });
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
