
export
    function authmiddleware(secret) {

    return function (req, res, next) {
        //check if the header contains a token named 'x-auth-token'
        if (req.headers['x-auth-token'] === secret) {
            next()
        }
        else {
            res.status(401).send('Access Denied')
        }
    }
}
