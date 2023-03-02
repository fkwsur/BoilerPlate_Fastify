// Require the framework and instantiate it
const fastify = require('fastify')
const app = fastify()


app.get('/gettest', async (req, res) => {
    try {
        let userId = req.query.userId
        let xauth = req.headers.xauth
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

app.listen(8081, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})