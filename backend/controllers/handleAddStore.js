import db from "../database/database.js"

export default function handleAddStore(req, res) {
    
    const {name, email, address} = req.body

    db.query("insert into stores(name, email, address) values (?, ? , ?);", [name, email, address], (error, result)=>{
        res.json({message : error ? error : "Store added successfully"})
    })

}