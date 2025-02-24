const path = require('path')
const fs=require('fs')
const fsPromises=require('fs').promises
const {format}=require('date-fns')
const {v4: uuid}=require('uuid')

const logEvents= async (msg,file)=>{
        const datetIME=`${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`
        const logItem=`${datetIME}\t${uuid()}\t${msg}\n`
        try {
            if(!fs.existsSync(path.join(__dirname,'..','logs'))){
                await fsPromises.mkdir(path.join(__dirname,'..','logs'))
            }
            await fsPromises.appendFile(path.join(__dirname,'..','logs',file),logItem)
            console.log(logItem)
        } catch (error) {
            console.log(error)
        }
}
const MannuallogEvents=(req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`,'logEvents.txt')
    console.log(`${req.method}\t${req.url}`)
    next()
}
module.exports={logEvents,MannuallogEvents}