import app from "./app.js";
import db from "./database/database.js";

app.listen( process.env.PORT || 2201, ()=>{
    console.log("App running");
})