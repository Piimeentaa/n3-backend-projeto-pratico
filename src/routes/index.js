const express = require("express")
const router = express.Router()

router.get("/", function(req, res){
    res.status(200).send({
        title: "Projeto Backend Noturno Reprograma",
        version: "0.0.1"
    })
})

module.exports = router
