const newRouter  = require('./news.route')
const siteRouter = require('./site.route')

function route(app){ 
  
  app.get('/news', newRouter);
  app.use('/', siteRouter)

}

module.exports = route;
