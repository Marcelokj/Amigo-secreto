
let amigos =[];

let sorteados ={};

function adicionarAmigo() {
   const imput = document.getElementById('amigo');
   let nome = imput.value.trim();

   if (nome === '' ) { 
    alert('Por favor, digite um nome!');
    return;
   }

   amigos.push(nome)
   console.log(amigos)
}
function atualilizarLista(){
    const lista = document.getElementById(listaAmigos);
    (lista.innerHTML = '');
    amigos.forEach((amigo, index) => {
    const li =document.createElement('li');
    li.textContent = amigo + (index < amigos.length - 1 ? ',' : '');
    lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert('A lista de amigos está vazia.');
        return;

    }

    if (amigos.length <= 2){
        alert('Para realizar o sorteio, é preciso ter três amigos ou mais.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * adicionarAmigomigos.length);
    
    let amigoSorteado = amigos[indiceSorteado];

    sorteados.push(amigoSorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O amigo secreto sorteado foi: ' + sorteados;

    dispararConfete();

    sorteados = [];

    atualilizarLista();

 }

