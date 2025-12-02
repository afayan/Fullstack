import db from "../database/database.js";

export default function handleGetUsers(req, res) {
    db.query("select * from users;", [], (error, result)=>{
        if (error) return res.json({error})

        return res.json({result : result})
    })
}