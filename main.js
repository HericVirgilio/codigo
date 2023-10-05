let res = document.getElementById('res')
let lista = [];
    
    function gerarPessoa(){
        let nome = document.getElementById('nome').value
        let senha = document.getElementById('email').value
        let email = document.getElementById('senha').value
        let usuario = {nome,email,senha}
        lista.push(usuario)
        res.innerHTML = `<p>Usuário Cadastrado</p>`
    }
   
    function listarPessoa(){
            res.innerHTML = lista.map(item => `<div id="res2">
            <p>Nome: ${item.nome}</p>
            <p>Email: ${item.email}</p>
            <p>Senha: ${item.senha}</p>
            </div>`).join('')
    }

    function deletarPessoa(){
        let nome = document.getElementById('nome').value

        for(let n = 0; n < lista.length; n++){
            if(lista[n].nome == nome){
                res.innerHTML = `<p>Usuário ${lista[n].nome} deletado!`
                lista.splice(n, 1)
            }else{
                res.innerHTML = `<p>Usuário não encontrado!`
            }
        }
    }