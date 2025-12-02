import db from "../database/database.js";

export default function handleGetStores(req, res) {
    db.query("select * from stores;", [], (error, result)=>{
        if (error) return res.json({error})

        return res.json({result : result})
    })
}