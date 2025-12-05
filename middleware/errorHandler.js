
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
        console.error(err.stack, 'error');
        const status = err.status || 500;
        res.status(status).send({ message: err.message || "Something went wrong!", status });
}

export default errorHandler;