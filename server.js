const cluster = require("cluster")
const cpus = require("os").cpus
const pid = require("process").pid

function iniciarServidor() {
    const http = require("http")

    const server = http.createServer((req,res) => {
        res.end('Bem-vindo ao site!');
        //console.debug(`Requsição atendida pelo PID ${pid}`);
    })

    const PORT=8000;
    server.listen(PORT, console.debug(`Servidor PID ${pid} Iniciado em http://localhost:${PORT}`));
}

function criarProcessosFilhos(){
    //console.debug(`Processo pai PID ${pid}`);
    for (let i=0; i < cpus().length; i++){
        cluster.fork()
    }
}

cluster.isMaster ? criarProcessosFilhos() : iniciarServidor()