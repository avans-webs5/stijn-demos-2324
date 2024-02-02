
export function authmiddleware(req, res, next){
    //check if the header contains a token named 'x-auth-token'
    if(req.headers['x-auth-token'] === 'monoblueisthebest'){
        next()
    }
    else{
        res.status(401).send('Access Denied')
    }
}

