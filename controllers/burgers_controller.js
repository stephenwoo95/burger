var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne("burger_name",
    req.body.burgerName, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  burger.updateOne({
    devoured: req.body.devoured
  }, req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;
