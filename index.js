const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000;

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'public')))


app.use(todoRoutes)


async function start(){
    try {
        await mongoose.connect(
            'mongodb+srv://xtame:admin@cluster0.rru2gqv.mongodb.net/todo',
            {
            useNewUrlParser: true
        })
        app.listen((PORT), () => {
            console.log('start server....')
        })
    } catch (e) {
        return console.log(e)
    }
}
start()