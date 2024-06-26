module.exports = app => {
    const user = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", user.create);
  
    // Retrieve all user
    router.get("/", user.findAll);
  
    // Retrieve all published user
    router.get("/published", user.findAllPublished);
  
    // Retrieve a single User with id
    router.get("/:id", user.findOne);
  
    // Update a User with id
    router.put("/:id", user.update);
  
    // Delete a User with id
    router.delete("/:id", user.delete);
  
    // Create a new User
    router.delete("/", user.deleteAll);
  
    app.use("/api/user", router);
  };