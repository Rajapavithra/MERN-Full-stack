const service = require('./service');



module.exports = function () {

 let app = service.createApp();
 app = service.setupWebpack(app);
 app = service.setupStaticRoutes(app);
 app = service.setupMiddlewares(app);
 app = service.setupAppRoutes(app);
 app = service.setupRESTRoutes(app);
 service.setupMongooseConnections();
 return app;
};
