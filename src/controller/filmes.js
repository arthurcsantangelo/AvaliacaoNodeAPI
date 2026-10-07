import ServiceFilme from '../service/filme.js'

class ControllerFilme {

    Buscar(req, res) {
        try {

            const nomes = ServiceFilme.Buscar()
            res.send({ nomes })
            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }

    }

    BuscarUm(req, res) {

        try {
            const id = req.params.id
            const nome = ServiceFilme.BuscarUm(id)
            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }

    }

    Criar(req, res) {

        try {
            const nome = req.body.nome
            const idade = req.body.idade
            ServiceFilme.Criar(nome, idade)
            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }

    }

    Alterar(req, res) {

        try {
            const id = req.params.id
            const nome = req.body.nome
            ServiceFilme.Alterar(id, nome)
            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }

    }
}
export default new ControllerFilme()
 
