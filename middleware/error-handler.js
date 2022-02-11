const errorHandlerMiddleware = (err,req, res,next) => {
    console.log(err);
    res.status(500).json({ message: 'there ws an error' });
}

export default errorHandlerMiddleware