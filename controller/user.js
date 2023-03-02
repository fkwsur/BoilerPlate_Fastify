async function routes (fastify, options) {
    fastify.get('/user/signup', async (request, reply) => {
      return { test: '가입 테스트' }
    })
  }
  
module.exports = routes;