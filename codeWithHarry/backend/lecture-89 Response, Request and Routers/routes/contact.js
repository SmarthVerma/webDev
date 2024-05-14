const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("CONTACT PAGE");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("ABOUT developer");
});
router.get("/developer/", (req, res) => {
    res.send(`Our best developer list: <br> Smarth verma <br> Shivansh Mahajan`);
    console.log(req.query);
    
});
router.get("/developer/:slug", (req, res) => {
  res.send(`Our best developer: ${req.params.slug}`);
});

module.exports = router;
