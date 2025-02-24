const path = require('path')
const express=require('express')
const { getAllEmployees, createEmployee, updateEmployee, deleteEmployee, getAEmployee } = require('../../controllers/employeeController')
const routes=express.Router()
data={}
data.employee=require('../../models/data.json')

routes.route('/')
        .get(getAllEmployees)
        .post(createEmployee)
        .put(updateEmployee)
        .delete(deleteEmployee)

routes.route('/:id')
        .get(getAEmployee)

module.exports=routes