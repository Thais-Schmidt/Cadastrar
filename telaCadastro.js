// 1 - Criar uma pasta em documentos com o nome cadastrar;
// 2 - Criar um repositório local;
// 3 - Criar um repositório no github e sincroniza-los;
// 4 - Criar um tela de boas vindas igual ao exercício da aula anterior;
// 5 - Acrescentar uma variável nomeCadastro e colocar o seu nome;
// 6 - O usuário só entrará se estiver cadastrado 

var bemvindo = document.getElementById('bemvindo');

let botao = document.createElement("button");
botao.innerText = "Acessar";
botao.onclick = entrar;
bemvindo.appendChild(botao);

function entrar(){

    let  nomeCadastro = prompt("Por favor, digite seu nome: ");

    if(nomeCadastro === "Thais Schmidt"){
        bemvindo.innerHTML = "Bem vinda! "+nomeCadastro+".<br>"

        let botaoVoltar = document.createElement("button")
        botaoVoltar.innerText = "Sair da conta";
        botaoVoltar.onclick = voltar;
        bemvindo.appendChild(botaoVoltar); 
    }
    else{
        alert("Algo deu errado, tente novamente!");
        bemvindo.innerHTML = "Clique no botao para acessar. <br>";

        let botao = document.createElement("button");
        botao.innerText = "Acessar";
        botao.onclick = entrar;
        bemvindo.appendChild(botao);
    }

}

function voltar(){

    alert("Voce saiu da sua conta.")
    bemvindo.innerHTML = "Voce saiu.<br>"

    let botao = document.createElement("button");
    botao.innerText = "Acessar";
    botao.onclick = entrar;
    bemvindo.appendChild(botao);

}

