let amigos = [];

alert("Bem-vindo ao jogo Amigo Secreto!");
alert("Adicione todos os nomes que deseja sortear e depois clique em 'Sortear Amigo'.");

function adicionarAmigo() {
    const adiNome = document.getElementById("amigo");
    const nome = adiNome.value.trim();

    if (!nome) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    amigos.push(nome);
    console.log(`Lista: ${amigos}`);
    atualizarLista();
    adiNome.value = ""; 
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigo;
        lista.appendChild(novoAmigo);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo secreto sorteado foi: ${sorteado}`;
}