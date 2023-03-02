const fastify = require('fastify');
const app = fastify({
    logger: true
  })
const router = require('./routes');

app.get('/gettest', async (req, res) => {
    try {
        let {userId} = req.query
        let {xauth} = req.headers
        console.log(userId);
        console.log(xauth);
      return  res.send({ hello: 'world' })
    } catch (error) {
        console.log(error);
    }
  
})
// post
app.post('/posttest', async (req, res) => {
    try {
        let {id} = req.body
        console.log(id);
      return  res.send({ hello: 'world' })
    } catch (error) {
        console.log(error);
    }
 
})
app.register(router.userRouter);
app.register(router.ourFirstRouter);

app.listen(8081, function (err, host) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${host}`)
})