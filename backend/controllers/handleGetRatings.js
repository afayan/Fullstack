import db from "../database/database.js"

export default function handleGetRatings(req, res){
const storeid = req.query.storeid

if (!storeid) {
    return res.json({message : "No store id provided"})
}

db.query("select u.userid as userid, u.name as username, s.name as storename, r.rating from users u, stores s, ratings r where r.userid = u.userid and s.storeid = r.storeid and s.storeid = ?;", [storeid], (error, result)=>{
    if (error) {
        return res.json({message : error.message})
    }

    return res.json({result})
})
}