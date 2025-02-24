const { logEvents } = require("./logEvents")
const errEvents=(err,req,res,next)=>{
    logEvents(`${err.name}\t${err.message}\t${req.headers.origin}`,'errEvents.txt')
    console.log(err.stack)
    // console.log("first")
    res.status(500).send(err.message)
    next()
}
module.exports=errEvents