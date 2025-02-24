const express=require('express')
const app = express()
const path = require('path')
const cors=require('cors')
const corsOptions=require('./config/corsOptions')
const { MannuallogEvents } = require('./middlewares/logEvents')
const errEvents = require('./middlewares/errorEvents')
const PORT=process.env.PORT || 3500


app.use(MannuallogEvents)
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))
app.use('/',require('./routes/root'))

app.use('/basic-api',require('./routes/api/basic_api'))
app.use('/employee',require('./routes/api/api'))


app.use(errEvents)
app.listen(PORT,()=>{
    console.log(`Server Running On PORT : ${PORT}`)
})