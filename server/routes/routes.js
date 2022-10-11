// import users routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome server');
    });

    // // user routes
    userRoutes(app, fs);

};

module.exports = appRouter;