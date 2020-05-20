const { perfil } = require('../data/db'); // Esse resolve está utilizando o módulo de perfil

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const sels = perfil
            .filter(p => p.id == usuario.perfil_id)
        return sels ? sels[0] : null
    }
}