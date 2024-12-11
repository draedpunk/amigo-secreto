// outra formade fazer
let amigoS = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    amigoS.push(amigo);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo;
    }

    amigo.innerHTML = '';   
}

function sortear(){
    embaralha(amigoS);
    let sorteio = document.getElementById('lista-sorteio');

    for (let p = 0; p < amigoS.length; p++){
        if (p == amigoS.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigoS[p] + ' → ' + amigoS[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigoS[p] + ' → ' + amigoS[p + 1] + '<br>';
        }
        
    
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigoS = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    let amigo = document.getElementById('nome-amigo').value;
    amigo.innerHTML = '';   

}