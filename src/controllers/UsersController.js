const AppError = require("../utils/AppError");

class UsersController {
  create(request, response) {
    const { name, email, password } = request.bodyx;

    if (!name) {
      throw new AppError("Nome é obrigatório!");
    }

    return response.status(500).json({ name, email, password });
  }
}

module.exports = UsersController;
