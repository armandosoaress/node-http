const http=require("http");

http

.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if (request.url === '/produto') {
     return response.end(
            JSON.stringify({
            message:"rota de produto",
              })
        );
    }


    
    if (request.url === '/usuario') {
        return response.end(
            JSON.stringify({
            message:"rota de usuario",
              })
        );
    }

    return response.end(
        JSON.stringify({
        message:"QUALQUER OUTRA ROTA!!",
          })
    );

    response.end(JSON.stringify({
message:"minha primeira aplicação"
    }));
})
.listen(4001,()=>console.log("servidor rodando"));