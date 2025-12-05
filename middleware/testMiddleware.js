//Application-Level Middleware
// Used globally for the entire app.

const testMiddleware = (req, res, next) => {
     console.log("route Test Middleware executed", Date.now());
    next();
}

export default testMiddleware;