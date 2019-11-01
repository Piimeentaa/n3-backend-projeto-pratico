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
   
 exports.getByTempo = (req, res) =>{

    const inclusao1 = tarefas.dataInclusao.split('/')
    const day1 = inclusao[0];
    const month1 = inclusao[1];
    const year1 = inclusao[2];
    const dataNova1 = new Date(year1, month1 - 1, day1);

    console.log(dataNova1)
    
    const inclusao2 = tarefas.dataInclusao.split('/')
    const day2 = inclusao2[0];
    const month2 = inclusao2[1];
    const year2 = inclusao2[2];
    const dataNova2 = new Date(year2, month2 - 1, day2);

    console.log(dataNova2)
    
    function ordemCresc (a,b) {
        return a.dataNova1 > b.dataNova2;
    }
    const ordenar = listarTarefas.sort(ordemCresc)

    res.status(200).send(ordenar)
   
 }