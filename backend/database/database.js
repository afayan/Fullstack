import mysql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql2.createConnection({
    user : 'root',
    host : "localhost",
    password : '',
    database : "storeratings"
})