const {
  user_info
} = require("../models");

module.exports = {

  Test : async (req, res) => {
    try {
        let {id} = req.body
        const rows = await user_info.findOne({
          where : {user_id : id}
        })
        if (!rows) {
          throw { code: 1 };
      }
      return  res.status(200).send({ result: rows  })
    } catch (error) {
        console.log(error);
    }
  }

}