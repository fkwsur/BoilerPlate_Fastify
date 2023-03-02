const { userController: controller } = require("../controller");

async function userRouter (fastify, options) {

    fastify.post('/user/signup', controller.SignUp);
    fastify.post('/user/signin', controller.SignIn);

}

module.exports = userRouter;