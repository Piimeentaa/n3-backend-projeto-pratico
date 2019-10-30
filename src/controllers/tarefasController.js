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

exports.getConcluido = (req, res) =>{

    const conc = tarefas.filter((item) =>{
        return item.concluido === "true";
    })
    res.status(200).send(conc)
}
exports.getByNome = (req, res) => {
    const nomeColaborador = req.params.nome
    const nomeBusca = tarefas.filter(nomeBusca  => nomeBusca.nomeColaborador === nomeColaborador)
    
    res.status(200).send(nomeBusca)
 }


    

    
   