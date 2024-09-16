function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let dataCriacao = "";
    let link = "";
    let tags = "";



    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        dataCriacao = dado.dataCriacao.toLowerCase()
        // Cria um novo elemento HTML para cada resultado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.dataCriacao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }
    if (!campoPesquisa){
        section.innerHTML = "<p> Nada foi encontrado. Você precisa entrar no contexto do Site </p>" 
        return
        if (!resultados){
            resultados = "<p> Nada foi encontrado.</p>" 
        }
}

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
}