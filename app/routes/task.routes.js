module.exports = app => {
  const tasks = require("../controllers/task.controller.js");

  var router = require("express").Router();

  // Create a new task
  router.post("/", tasks.create);

  // Retrieve all task
  router.get("/", tasks.findAll);

  // Retrieve all published task
  router.get("/completed", tasks.findAllPublished);

  // Retrieve a single task with id
  router.get("/:id", tasks.findOne);

  // Update a task with id
  router.put("/:id", tasks.update);

  // Delete a task with id
  router.delete("/:id", tasks.delete);

  // Create a new task
  router.delete("/", tasks.deleteAll);

  app.use("/api/tasks", router);
};
