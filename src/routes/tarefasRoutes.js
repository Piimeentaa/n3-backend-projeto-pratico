const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/ba", controller.getConcluido)
router.get("/dataInclusao", controller.getByTempo)
router.get("/buscaid/:id", controller.getById)
router.get("/find/:nome", controller.getByNome)



module.exports = router
