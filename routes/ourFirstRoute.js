const { ourFirstController: controller } = require("../controller");

    const ourFirstRouter = (fastify, opt, done) => {

    fastify.post('/test', controller.Test);
    done();
    
};


module.exports = ourFirstRouter;