import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

// whatever is in the environment variable PORT, or 5075 if there's nothing there.
const app = express()
const PORT = 5075

app.use(express.json())                         // build an express server
app.use(morgan('combined'))                      // for logging purposes
app.use(bodyParser.json())                      // allow our app to easily parse any json requests
app.use(cors())                                 // allow any host/client to access this (make sure you have good security on your server though!)

app.get('/status', (req, res) => {              // status is the endpoint
    res.send({
        message: 'Hi, TP'
    })
})


app.listen(process.env.PORT || PORT)



