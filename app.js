const fastify = require('fastify');
const app = fastify({
    logger: true
  })
const router = require('./routes');
const dotenv = require('dotenv');
dotenv.config();
const db = require("./models");

const check_mysql_health = async () => {
    setInterval(async () => {
      try {
        await db.sequelize.authenticate();
      } catch (error) {
        console.log("db ping error : ", error);
      }
    }, 60000 * 3);
  };
  // mysql + sequelize
  db.sequelize
    .authenticate()
    .then(async () => {
      try {
        const { sequelize } = require("./models");
        await sequelize.sync(true);
        console.log("db connect ok");
      } catch (err) {
        console.log("seq:", err);
      }
    })
    .catch(async (err) => {
      console.log("db" + err);
      await SlackAPI.SendErrorChannel({
        location: "db -sequelize",
        error: err.toString(),
      });
      process.exit(0);
    });

app.register(router.userRouter, { prefix: "/api/v1/user" });
app.register(router.ourFirstRouter, { prefix: "/api/v1/ourfirst" });

app.listen(8081, (err, host) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${host}`)
})

check_mysql_health();