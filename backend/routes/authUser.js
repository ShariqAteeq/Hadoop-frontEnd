const router = require('express').Router();
const { userRegister } = require('../utils/Auth');
const { userLogin } = require('../utils/Auth');

router.post("/register-user", async (req, res) => {
    await userRegister(req.body, "admin", res);
  });
  
  // Admin Registration Route
  router.post("/register-admin", async (req, res) => {
    await userRegister(req.body, "admin", res);
  });
  
  // // Users Login Route
  // router.post("/login-user", async (req, res) => {
  //   await userLogin(req.body, "user", res);
  // });
  
  // // // Admin Login Route
  // router.post("/login-admin", async (req, res) => {
  //   await userLogin(req.body, "admin", res);
  // });
  
  // router.get("/profile", userAuth, async (req, res) => {
  //   return res.json(serializeUser(req.user));
  // });

  // router.get("/user-protect", userAuth, async (req, res) => {
  //   return res.json(serializeUser(req.user));
  // });

  // router.get("/admin-protected", userAuth, async (req, res) => {
  //   return res.json(serializeUser(req.user));
  // });

module.exports = router;