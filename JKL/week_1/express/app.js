import express from 'express'
import { authmiddleware } from './middleware.js'
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/secret', authmiddleware, (req, res, next) => {
    res.send('Hello Stijn, who plays MTG!')
    next();
})

//geen res versturen, is al gebeurd!
app.use((req, res) => {
    console.log('Req is finished, GJ team!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})