const path = require('path')
const express=require('express')
const routes=express.Router()
data={}
data.employee=require('../../models/data.json')

routes.route('/')
        .get((req,res)=>{
            res.json(data.employee)
        })
        .post((req,res)=>{
            res.json({
                "firstName":req.body.firstName,
                "lastName":req.body.lastName
            })
        })
        .put((req,res)=>{
            res.json({
                "firstName":req.body.firstName,
                "lastName":req.body.lastName
            })
        })
        .delete((req,res)=>{
            res.json({
                "id":req.body.id
            })
        })

routes.route('/:id')
        .get((req,res)=>{
            res.json({
                "id":req.params.id
            })
        })

module.exports=routes