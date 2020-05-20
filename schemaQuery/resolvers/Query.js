const { usuarios, perfil } = require('../data/db');

module.exports = {
    ola() {
        return 'basta retornar uma string'
    },
    horaAtual() {
        return `${new Date}`
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'anadaweb@email.com',
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Gamer',
            preco: 4890.89,
            desconto: 0.15
        }
    },
    numeroMegaSena() {
        //return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b
        const aleatorio = Array(6)
            .fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
        //Tira a duplicidade dos números
        return aleatorio.filter((item, index) => aleatorio.indexOf(item) === index)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, args) {
        const sels = usuarios
            .filter(u => u.id == args.id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfil
    },
    perfil(_, args) {
        const sels = perfil
            .filter(p => p.id == args.id)
        return sels ? sels[0] : null
    }
}