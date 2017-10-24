const user = require("../controllers/user.js")
const register = require("../controllers/registration.js")
const profile = require("../controllers/profile.js")
const logout = require("../controllers/logout.js")
module.exports = function(app){

  // Index page shows up
  app.get('/', user.index);

  // User login
  app.post('/login', user.login);

  // User registration
  app.post('/register', register.createUser);

  // loginAuthentication will check after this point
  app.use(loginAuthentication);

  // After login user will be redirected to profile
  app.get('/profile', profile.userProfile);

  // logout
  app.get('/logout', logout.getOut);


}
function loginAuthentication(req,res,next){
  if(req.session.user){
    next();
  }else{
    res.redirect('/');
  }
}
