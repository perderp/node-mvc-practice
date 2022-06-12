const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Database Connected'))
.catch(error => console.error(error))

//SETUP
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'))
app.use(express.static(__dirname + '/src'));
//ROUTER
app.use('/',require('./src/router/userRouter'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})