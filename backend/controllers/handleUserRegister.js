import db from "../database/database.js"
import bcrypt from 'bcrypt'

export default function handleUserReg(req, res) {
    const {name, password, email, address } = req.body
    const role = req.body?.role || "normal"

    const hash = bcrypt.hashSync(password, 10);

    db.query("insert into users( name, password, email, address, role) values (? , ?, ? , ?, ?);", [name, hash, email, address, role], (error, result)=>{
        res.json({message : error ? error : "User added successfully"})
    })
}