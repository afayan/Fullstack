import db from "../database/database.js"
import bcrypt from 'bcrypt'

export default function handleAddStore(req, res) {
    
    const {name, email, address, password} = req.body

    db.query("insert into stores(name, email, address) values (?, ? , ?);", [name, email, address], (error, result)=>{

    const role = "store"
    const hash = bcrypt.hashSync(password, 10);
    db.query("insert into users( name, password, email, address, role) values (? , ?, ? , ?, ?);", [name, hash, email, address, role], (error, result)=>{
        res.json({message : error ? error : "User added successfully"})
    })

    })

}