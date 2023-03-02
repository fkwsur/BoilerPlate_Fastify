async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { test: '라우터 분리 테스트' }
    })
  }
  
module.exports = routes;