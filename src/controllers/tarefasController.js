const tarefas = require("../model/listaTarefas.json")

exports.get = (req, res) => {
    console.log(req.url)

    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const task = tarefas.find(task => task.id == id)

    res.status(200).send(task)
}

exports.getConcluido = (req, res) => {
    
    const conc = tarefas.filter(item => item.concluido)
        return conc;
    // const conc = tarefas.filter((item) => {
    //     return item.concluido === "true";
    res.status(200).send(conc)

}   
exports.getByNome = (req, res) => {
    const nomeColaborador = req.params.nome
    const nomeBusca = tarefas.filter(nomeBusca => nomeBusca.nomeColaborador === nomeColaborador)

    res.status(200).send(nomeBusca)
}

exports.getByTempo = (req, res) => {

    /*const inclusaoA = tarefas.dataInclusao

    const dataNova1 = new Date(inclusaoA);
    const dataNova2 = new Date(inclusaoA[0], inclusaoA[1] - 1, inclusaoA[2]);

    console.log(dataNova1)
    console.log(dataNova2)

    const ordenar = dataInclusao.map(function(a, b) {
        const dataSplitA = a.dataInclusao.split('/');
        const dataSplitB = b.dataInclusao.split('/');
        const dataA = new Date(dataSplitA[2], dataSplitA[1], dataSplitA[0]);
        const dataB = new Date(dataSplitB[2], dataSplitB[1], dataSplitB[0]);

        return dataA - dataB.sort()

         res.status(200).send(ordenar)
    }*/

    const ordenar = tarefas.sort((a,b) => {
        var dataQuebradaA = a.dataInclusao.split('/');
        var dataQuebradaB = b.dataInclusao.split('/');
        var dataA = new Date(dataQuebradaA[2], dataQuebradaA[1], dataQuebradaA[0]);
        var dataB = new Date(dataQuebradaB[2], dataQuebradaB[1], dataQuebradaB[0]);
        return dataA - dataB
    });

    res.status(200).send(ordenar)
}