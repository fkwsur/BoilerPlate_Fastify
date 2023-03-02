module.exports = {

  Test : async (req, res) => {
    try {
        let {id} = req.body
        console.log(id);
      return  res.send({ result: '테스트 성공'  })
    } catch (error) {
        console.log(error);
    }
  }

}