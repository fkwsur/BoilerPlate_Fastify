const { ourFirstController: controller } = require("../controller");

async function ourFirstRouter (fastify, options) {

    fastify.post('/ourfirst/test', controller.Test);

}

module.exports = ourFirstRouter;