const whiteList=['http://localhost:3500','https://www.youtube.com','https://www.yoursite.com']

const corsOptions={
    origin:(origin,callback)=>{
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error("Not Allowed By CORS"))
        }
    },
    optionSucessStates:200
}
module.exports=corsOptions