// 1 - Criar uma pasta em documentos com o nome cadastrar;
// 2 - Criar um repositório local;
// 3 - Criar um repositório no github e sincroniza-los;
// 4 - Criar um tela de boas vindas igual ao exercício da aula anterior;
// 5 - Acrescentar uma variável nomeCadastro e colocar o seu nome;
// 6 - O usuário só entrará se estiver cadastrado 

let bemvindo = document.getElementById('bemvindo');
let botao = document.createElement("button");
botao.innerText = "Acessar";
botao.onclick = entrar;
bemvindo.appendChild(botao);

usuarios = ["Thais Schmidt", "fulano2", "fulano3", "fulano4", "fulano5"];

function entrar(){

    let encontrou = false;
    let nomeCadastro = prompt("Por favor, digite seu nome: ");

    if(nomeCadastro === '' || nomeCadastro === null){

        alert("Algo deu errado, tente novamente!");
        bemvindo.innerHTML = "Clique no botao para acessar. <br>";

        let botao = document.createElement("button");
        botao.innerText = "Acessar";
        botao.onclick = entrar;
        bemvindo.appendChild(botao);

    } else {
        
        for (let i = 0; i <=4; i++) {

            if ((nomeCadastro[i] == usuarios)) {

                bemvindo.innerHTML = "Bem vinda! "+nomeCadastro+".<br>";
                let botaoVoltar = document.createElement("button");
                botaoVoltar.innerText = "Sair da conta";
                botaoVoltar.onclick = voltar;
                bemvindo.appendChild(botaoVoltar);
                encontrou = true;
                return;
            }
        }
    }

    if(encontrou == false){
        alert("Nome não cadastrado!");
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
