// data={}
// data.employee=require('../models/data.json')

// const getAllEmployees=(req,res)=>{
//     res.json(data.employee)
// }
// const createEmployee=(req,res)=>{
//     res.json({
//         "firstName":req.body.firstName,
//         "lastName":req.body.lastName
//     })
// }
// const updateEmployee=(req,res)=>{
//     res.json({
//         "firstName":req.body.firstName,
//         "lastName":req.body.lastName
//     })
// }
// const deleteEmployee=(req,res)=>{
//     res.json({
//         "id":req.body.id
//     })
// }
// const getAEmployee=(req,res)=>{
//     res.json({
//         "id":req.params.id
//     })
// }
// module.exports={
//     getAllEmployees,
//     createEmployee,
//     updateEmployee,
//     deleteEmployee,
//     getAEmployee
// }



// The above are basic apis integration
// Below is the exact and advanced apis integration

const data={
    employee:require('../models/data.json'),
    setEmployee:function(data){this.employee =data}
}

const getAllEmployees=(req,res)=>{
    res.json(data.employee)
}
const createEmployee=(req,res)=>{
    const newEmployee={
        id:data.employee?.length ? data.employee[data.employee.length - 1].id+1 :1,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    }
    if(!newEmployee.firstName || !newEmployee.lastName){
       return res.status(400).json({"message":"Employee FirstName and LastName Required"})
    }
    data.setEmployee([...data.employee,newEmployee])
    res.json(data.employee)
}

const updateEmployee=(req,res)=>{
    const emp=data.employee.find(emp=>emp.id === parseInt(req.body.id))
    if(!emp){
       return res.status(400).json({"message":`Employee with ID:${req.body.id}  not Found`})
    }
    if(req.body.firstName) emp.firstName=req.body.firstName;
    if(req.body.lastName) emp.lastName=req.body.lastName;

    const updateemp=data.employee.filter(emp=>emp.id !== parseInt(req.body.id))
    const updateArray=[...updateemp,emp]
    data.setEmployee(updateArray.sort((a,b)=>a.id>b.id?1:a.id<b.id?-1:0))
    res.json(data.employee)
}
const deleteEmployee=(req,res)=>{
    const emp=data.employee.find(emp=>emp.id===parseInt(req.body.id))
    if(!emp){
        return res.status(400).json({"message":`Employee Id : ${req.body.id} Not Found`})
    }
    const filterarray=data.employee.filter(emp=>emp.id!==parseInt(req.body.id))
    data.setEmployee([...filterarray])
    res.json(data.employee)
}
const getAEmployee=(req,res)=>{
    const emp=data.employee.find(emp=>emp.id===parseInt(req.body.id))
    if(!emp){
        return res.status(400).json({"message":`Employee Id : ${req.body.id} Not Found`})
    }
    res.json(emp)
}
module.exports={
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getAEmployee
}