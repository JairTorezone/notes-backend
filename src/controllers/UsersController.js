const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUsersEmailExist = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUsersEmailExist) {
      throw new AppError("Este e-mail já esta cadastrado");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }
}

module.exports = UsersController;
