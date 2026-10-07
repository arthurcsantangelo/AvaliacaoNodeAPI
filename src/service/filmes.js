import Filme from '../model/filmes.js'
class ServiceFilme {
   Buscar() {
       return Filme.Buscar()
   }
   BuscarUm(id) {
       if(!id || isNaN(id)) {
           throw new Error("Favor informar somente números")
       }
       return Filme.BuscarUm(id)
   }
   Criar(titulo, descricaao, classificacao, lancamento) {
       if(!titulo) {
           throw new Error("Favor informar o titulo")
       }
       Filme.Criar(titulo, descricaao, classificacao, lancamento)
   }
   Alterar(id, nome) {
       if(!id || isNaN(id) || !nome) {
           throw new Error("Favor informar todos os dados")
       }
       Filme.Alterar(id, nome)
   }
   Deletar(id) {
       if(!id || isNaN(id)) {
           throw new Error("Favor informar o Id corretamente")
       }
       Filme.Deletar(id)
   }
}
export default new ServiceFilme()

