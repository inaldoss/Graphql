const { perfis, proximoId } = require('../../data/db');

function indicePerfil(filtro) {
    if (!filtro) return -1
    const { id, nome } = filtro
    if (id) {
        return perfis
            .findIndex(u => u.id === id)
    } else if (nome) {
        return perfis
            .findIndex(p => p.nome === nome)
    }
    return -1
}

module.exports = {
    // { nome, nome, idade }
    novoPerfil(_, { dados }) {
        const nomeExistente = perfis
            .some(u => u.nome === dados.nome)
        if (nomeExistente) {
            throw new Error('Perfil cadastrado')
        }
        const novo = {
            id: proximoId(),
            ...dados
        }
        perfis.push(novo)
        return novo
    },
    excluirPerfil(_, { filtro }) {
        const i = indicePerfil(filtro)
        if (i < 0) return null
        const excluidos = perfis.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    alterarPerfil(_, { filtro, dados }) {
        const i = indicePerfil(filtro)
        if (i < 0) return null
        perfis[i].nome = dados.nome
        return perfis[i]
        //const Perfil = {
        //   ...perfis[i],
        //    ...args
        // }
        //perfis.splice(i, 1, usuario)
        //return usuario
    }
}