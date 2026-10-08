import ServiceFilme from '../service/filme.js'
class ControllerFilme {
    Buscar(req, res) {
        try {
            const filmes = ServiceFilme.Buscar()
            res.send({ filmes })
            res.send({ filmes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }
    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const filmes = ServiceFilme.BuscarUm(id)
            res.send({ filmes })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    Criar(req, res) {
        try {
            const titulo = req.body.titulo
            const classificacao = req.body.classificacao
            const descricao= req.body.descricao
            const lancamento = req.body.lancamento
            ServiceFilme.Criar(titulo, classificacao, descricao, lancamento)
            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    Alterar(req, res) {
        try {
            const id = req.params.id
            const filmes = req.body.filmes
            ServiceFilme.Alterar(id, filmes)
            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
}
export default new ControllerFilme()
 
