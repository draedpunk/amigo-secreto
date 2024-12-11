let listaAmigoSecreto = []; // lista vazia para colocar os nomes

function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim();//trim() remove espaços em branco
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (listaAmigoSecreto.includes(nome)) {
        alert('Esta pessoa já está presente no sorteio. Adicione uma nova pessoa.');
        return;
    }

    listaAmigoSecreto.push(nome); // adiciona os nomes à lista
    let campoListaDeAmigos = document.getElementById('lista-amigos');
    campoListaDeAmigos.textContent = `${listaAmigoSecreto.join(', ')} `; //join() pra separar osnomescom uma virgula 
                                                                        // e um espaço dps dela
    document.getElementById('nome-amigo').value = ''; // apaga o campo para digitar um novo nome
    console.log(listaAmigoSecreto);
}


function sortear() {
    if (listaAmigoSecreto.length < 4) {
        alert('São necessárias, no mínimo, quatro pessoas para realizar o sorteio.');
        return;
    }

    let listaEmbaralhada;
    let verificarParEmbaralhado = false;

    while (!verificarParEmbaralhado) {
        listaEmbaralhada = listaAmigoSecreto.slice();
        listaEmbaralhada.sort(() => Math.random() - 0.5); // para embaralhar a lista
        
        verificarParEmbaralhado = true;
        for (let i = 0; i < listaAmigoSecreto.length; i++) {
            if (listaAmigoSecreto[i] === listaEmbaralhada[i]) {
                verificarParEmbaralhado = false;
                break;
            }
        }
    }

    let resultadoDosPares = {};
    for (let amigoAtual = 0; amigoAtual < listaAmigoSecreto.length; amigoAtual++) {
        resultadoDosPares[listaAmigoSecreto[amigoAtual]] = listaEmbaralhada[amigoAtual];
    } // isso garante que os pares serão com pessoas diferentes

    let campoDoSorteio = document.getElementById('lista-sorteio');
    campoDoSorteio.innerHTML = '';  //limpa os resultados anteriores sempre q apertar o botao novamente!!

    for (let [amigo, sorteado] of Object.entries(resultadoDosPares)) {
        let resultadoLinha = document.createElement('p'); // cria um novo paragrafo pra cada par
        resultadoLinha.textContent = `${amigo} → ${sorteado}`;
        campoDoSorteio.appendChild(resultadoLinha); // insere o resultadoLinha dentro do campo de sorteio
    }
}


function reiniciar() {
    listaAmigoSecreto = [];
    let campoListaDeAmigos = document.getElementById('lista-amigos');
    let campoDoSorteio = document.getElementById('lista-sorteio');
    campoListaDeAmigos.textContent = ''; 
    campoDoSorteio.textContent = '';
    console.log("Lista de amigos reiniciada.");
}

//OK!!!
