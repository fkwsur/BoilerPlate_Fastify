module.exports = (sequelize, DataTypes) => {
    const user_info = sequelize.define(
      "user_info",
      {
        idx: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        user_id: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        addr : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING
        },
        hp : {
            type : DataTypes.STRING
        },
        device : {
            type : DataTypes.STRING
        },
        devicetoken : {
            type : DataTypes.STRING
        },
        age : {
            type : DataTypes.STRING
        },
        nickname : {
            type : DataTypes.STRING
        },
        code : {
            type : DataTypes.STRING
        },
        follow : {
            type : DataTypes.STRING
        },
        board : {
            type : DataTypes.STRING
        },
        history_code : {
            type : DataTypes.STRING
        },
        auth : {
            type : DataTypes.BOOLEAN
        },        
      },
      {
        freezeTableName: true,
        timestamps: true,
        comment: '유저 정보',
      }
    );
    return user_info;
  };