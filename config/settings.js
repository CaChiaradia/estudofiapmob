const env = process.env.NODE_ENV || "dev";

const config = ()=>{
    switch(env){
        case "dev":
            return{
                dbpath: "mongodb+srv://carol:carol123@clustercliente.exwd1.mongodb.net/banco?retryWrites=true&w=majority",
                jwt_Key:"Navegação",
                jwt_expire:'2d'
            };
    };
};