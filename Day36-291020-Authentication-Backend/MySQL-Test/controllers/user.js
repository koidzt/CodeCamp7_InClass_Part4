const db = require('../models/index');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password, name, age } = req.body;
  const targetUser = await db.Person.findOne({ where: { username } });
  if (targetUser) {
    res.status(400).send({ message: "Username already taken." })
  } else {
    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);
    await db.Person.create({
      username,
      name,
      age,
      password: hashedPassword
    });

    res.status(201).send({ message: "User created." });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const targetUser = await db.Person.findOne({ where: { username } });
  if (!targetUser) {
    res.status(400).send({ message: "Not found Username." })
  } else {
    const isCorrect = bcryptjs.compareSync(password, targetUser.password);

    if (isCorrect) {
      const payload = { //ตัวที่ user จะส่งกลับมาที่ system แล้วระบบจะรู้ว่าเป็นใคร
        id: targetUser.id, //อย่างน้อยต้องใส่ เพื่อให้รู้ว่าเป็น token ของใคร
        name: targetUser.name
      };
      
      const token = jwt.sign(payload, "secretOrPrivateKey", { expiresIn: 3600 });

      res.status(200).send({ token });
    } else {
      res.status(400).send({message: "Password incorrect"});
    }
  }
};

module.exports = {
  register,
  login
}