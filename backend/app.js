import express from 'express'
import bodyParser from 'json-body-parser'
import cors from 'cors'
import handleUserReg from './controllers/handleUserRegister.js'
import handleLogin from './controllers/handleLogin.js'
import handleAddStore from './controllers/handleAddStore.js'
import handleGetStores from './controllers/handleGetStores.js'
import handleGetUsers from './controllers/handleGetUsers.js'
import handleRate from './controllers/handleRate.js'
import verifyToken from './utils/verifyUser.js'
import verifyAdmin from './utils/verifyAdmin.js'
import changePassword from './controllers/changePassword.js'
import handleVerify from './controllers/handleVerify.js'
import handleGetRatings from './controllers/handleGetRatings.js'

const app = express()
app.use(bodyParser)
app.use(cors())

app.post('/register', handleUserReg)
app.post('/login', handleLogin)
app.post('/addstore', verifyAdmin, handleAddStore)
app.get('/getstores', verifyToken, handleGetStores)
app.get('/getusers', verifyToken, handleGetUsers)
app.post('/rate', handleRate)
app.post('/changepassword', verifyToken, changePassword)
app.get('/verify', verifyToken, handleVerify)
app.get('/getratings', verifyToken, handleGetRatings)

export default app