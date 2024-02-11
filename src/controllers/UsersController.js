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
      throw new AppError("Email já esta cadastrado");
    }

    return response.status(201).json();
  }
}

module.exports = UsersController;
