const express = require("express");
const route = express.Router();

route.use(express.json());

const data = require("../models/Note");
const cors = require("cors");
//route.use(cors());

// update data : PUT Method 
route.put("/getallnotes/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        await data.updateOne({_id : req.params.id}, req.body);
        const notes =  await data.findOne({_id : req.params.id});
        res.status(200).json({
            status: "Success",
            notes
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

// delete data : Delete Method 
route.delete("/getallnotes/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const notes = await data.deleteOne({_id : req.params.id});
        res.status(200).json({
            status: "Success",
            notes
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

  
 

module.exports = route;