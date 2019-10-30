const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/concluido", controller.getByConcluido)
router.get("/:id", controller.getById)

// router.get("/tarefas", controller.getNome)

module.exports = router
