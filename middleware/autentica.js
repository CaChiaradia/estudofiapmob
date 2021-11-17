const jwt = require("jasonwebtoken");
const settings = require("../config/settings");

const autentica = (req,res,next)=>{
    const token_gerado = req.headers.token;

    if (!token_gerado){
        return res.status(401).send({output:'Não há token'});
    }
    jwt.verify(token_gerado,settings.jwt_key,(erro,dados)=>{
        if(erro){
            return res.status(401).send({output:`Token invalido -> ${erro}`})
        }

        req.content = {
            id:dados.id,
            usuario:dados.usuario,
            nome:dados.nome  
        }
        return next();


    });


};
module.exports = autentica;
