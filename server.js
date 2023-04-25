

function iniciarServidor() {
    const http = require("http")

    const server = http.createServer((req,res) => {
        res.end('Bem-vindo ao site!');
    })

    const PORT=8000;
    server.listen(PORT, console.log(`Servidor Iniciado em http://localhost:${PORT}`));
}