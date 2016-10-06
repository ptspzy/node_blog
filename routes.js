function routeRegister(app) {
  app.use('',require('./routes/index.js'));

  /* register page routes*/
  app.use('/reg', require('./routes/reg.js'));
  console.log('ssss');
  app.use('/login', require('./routes/login.js'));
  //app.use('/post', require('./routes/post.js'));
  //app.use('/logout', require('./routes/logout.js'));
}

module.exports = routeRegister;
