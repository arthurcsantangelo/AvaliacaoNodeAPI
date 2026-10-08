const filmes = new Array(
    {
        titulo: "+Velozes e +Furiosos",
        classificaao: "16 anos",
        descricao: "Ação/comédia",
        lançamento: "2003"
    },

    {
        titulo: "Vingadores ",
        classificaao: "16 anos",
        descricao: "Ação/ficção",
        lancamento: "2026"
    },

    {
        titulo: "Rio",
        classificaao: "Livre",
        descricao: "Desenho infantil",
        lancamento: "2011"
    }
)
class Filme  {

    Buscar() {
        return filmes

    }

    BuscarUm(id) {
        return filmes[id]
    }

    Criar(titulo, classificaao, descricao, lancamento ) {
        filmes.push({titulo, classificaao, descricao, lancamento})
    }

    Alterar(id, nome, idade) {
        filmes[id].nome = nome
        filmes[id].idade = idade
    }

    Deletar(id) {
        filmes.splice(id, 1)
    }

}

export default new Filme()
 