const { Router } = require("express");

const userRoutes = require("./users.routes");
const noteRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/notes", noteRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;
