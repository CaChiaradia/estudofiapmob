const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());


app.get("/",(req,res) =>{
    res.status(200).send({output: "Rota raiz"});
})

app.post("/cadastro",(req,res) =>{
    res.status(201).send({output: "Rota do cadastro", payload:req.body});
});

app.put("/atualizar/:id",(req,res) =>{
    res.status(200).send({output: "Rota do atualizar", payload:req.body});
});

app.delete("/apagar/:id",(req,res) =>{
    res.status(204).send({output: "Rota do Apagar"});
});

app.use((req,res) =>{
    res.type("application/jason");
    res.status(404).send({output:"Pagina não localizada"});
});

app.listen(3000,()=>"Servidor online na porta 3000");