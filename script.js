let projetoIndex = 0;
let indexSobreMim = 0;

// Obtém todos os projetos definidos no HTML
const projetos = document.querySelectorAll("#projetos .projeto");

// Obtém todos os itens da seção Sobre Mim
const sobreMimItens = document.querySelectorAll("#sobreMimDados .sobre-item");

// Atualiza os dados do Projeto com base no Index fornecido
function atualizarConteudo(index) {
    const projeto = projetos[index];

    document.getElementById("imagemProjeto").src = projeto.dataset.img;
    document.getElementById("tituloProjeto").innerText = projeto.dataset.titulo;
    document.getElementById("descricaoProjeto").innerHTML = projeto.dataset.descricao;
}

// Alterna entre os Projetos, indo para frente ou para trás
function trocarImagem(direcao) {
    projetoIndex = (projetoIndex + direcao + projetos.length) % projetos.length;
    atualizarConteudo(projetoIndex);
}

// Atualiza os dados do "Sobre Mim" com base no Index fornecido
function atualizarSobreMim(index) {
    const item = sobreMimItens[index];

    document.getElementById("imagemSobreMim").src = item.dataset.img;
    document.getElementById("tituloSobreMim").textContent = item.dataset.titulo;
    document.getElementById("descricaoSobreMim").innerHTML = item.dataset.descricao;
}

// Alterna entre os itens do "Sobre Mim", indo para frente ou para trás
function trocarSobreMim(direcao) {
    let itens = document.querySelectorAll("#sobreMimDados .sobre-item");
    indexSobreMim = (indexSobreMim + direcao + itens.length) % itens.length;
    
    let novaImagem = itens[indexSobreMim].getAttribute("data-img");
    let novoTitulo = itens[indexSobreMim].getAttribute("data-titulo");
    let novaDescricao = itens[indexSobreMim].getAttribute("data-descricao");
    
    document.getElementById("imagemSobreMim").src = novaImagem;
    document.getElementById("tituloSobreMim").textContent = novoTitulo;
    document.getElementById("descricaoSobreMim").innerHTML = novaDescricao;
}

// Garante que ao carregar a página, o primeiro projeto e sobre mim sejam exibidos corretamente
window.onload = function () {
    atualizarConteudo(0);
    atualizarSobreMim(0);
    
    //Cria um pequeno delay ao recarregar a página, para que ela volte ao topo normalmente.
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
};

