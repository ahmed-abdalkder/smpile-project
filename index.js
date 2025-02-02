
import path from 'path';
 import dotenv from 'dotenv';
 dotenv.config({path: path.resolve('config/.env')});
import express from 'express'
import cors from 'cors'
import connection from './db/connection.js'
import postrouter from './src/modules/posts/post.routes.js'
 
 
const app = express()

const port = process.env.PORT || 3001

connection

app.use(express.json())

app.use(cors())

app.use("/posts",postrouter)

app.get('*', (req, res) => res.json(' hello world !'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 