module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("Person", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING,
      unique: true, //ต้อง unique ห้ามมีซ้ำกัน
      allowNull: false, //เป็นค่าว่างไไม่ได้
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: "persons",
    timestamps: false,
  });

  model.associate = (models) => {
    model.hasMany(models.Todo, { foreignKey: "person_id" });
  };

  return model;
}