const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')
const initDatabase = require('./startUp/initDatabase')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api', routes)

const PORT = process.env.PORT || 8080

if (process.env.NODE_ENV === 'production') {
    console.log(chalk.yellow('Production'));
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    console.log(chalk.yellow('Development'));
}

async function start() {
    try {
        mongoose.connection.once('open', () => {
            initDatabase()
        })
        
        await mongoose.connect(config.get('mongoUri'))
        
        app.listen(PORT, () => {
            console.log(chalk.green(`Server started on port ${PORT}...`))
        })
        
    } catch (e) {
        console.log(chalk.red(e.message))
        process.exit(1)
    }
}

start()

