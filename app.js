function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {

        // Certifique-se de que 'titulo', 'descricao' e 'tags' existem antes de usar toLowerCase()
        titulo = dado.titulo ? dado.titulo.toLowerCase() : "";
        descricao = dado.descricao ? dado.descricao.toLowerCase() : ""; 
        // Corrigido aqui
        tags = dado.tags ? dado.tags.toLowerCase() : "";

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (resultados === "") {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
    } else {
        
        section.innerHTML = resultados;
    }
}


