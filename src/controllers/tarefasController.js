const tarefas = require("../model/listaTarefas.json")

exports.get = (req,res) =>{
    console.log(req.url)
    res.status(200).send(tarefas)
  }

exports.getById = (req, res) => {
    const id = req.params.id
    const task = tarefas.find(task => task.id == id)
    
    res.status(200).send(task)
 }
exports.getByConcluido = (req, res) => {
    const status = tarefas.find(taks => status.concluido == true)
            
    res.status(200).send(status)
    }


    

    
   