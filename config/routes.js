//Update the name of the controller below and rename the file.
// const company = require("../controllers/user.js");
// const member = require("../controllers/member.js");
const user = require("../controllers/user.js")
module.exports = function(app){

  app.get('/', user.login);
  app.post('/login', user.check);

//   app.post('/login', admin.check);
//
//   //NOeverything below this is protected
//   app.use(loginAuthentication);
//   //NOTE: anything pass this line that will run through this filter. thats how app.use works.
//
//   app.get('/', company.index);
//
//   app.get('/company/:id', company.getOne);
//
//   app.post('/member/:co_id', member.create);
//
//   app.post('/company', company.create);
}

function loginAuthentication(req,res,next){
  if(req.session.user){
    next(); //NOTE: if condition meets then go to next task which will make routes work after line 12
  }else{
    res.redirect('/');
  }
}
