const jwt = require('jwt-simple')

module.exports = async ({ req }) => {
    // Em desenvolvimento
    await require('./simularUsuarioLogado')(req)

    const auth = req.headers.authorization
    const token = auth && auth.substring(7)

    let usuario = null
    let admin = false

    if (token) {
        try {
            let conteudoToken = jwt.decode(token,
                process.env.APP_AUTH_SECRET)
            if (new Date(conteudoToken.exp * 1000) > new Date()) {
                usuario = conteudoToken
            }
        } catch (error) {
            // token inválido

        }
    }
    if (usuario && usuario.perfis) {
        admin = usuario.perfis.includes('admin')
    }

    const err = new Error('Acesso negado!')
    const err_admin = new Error('Não é Admin!')
    const err_usu = new Error('Não é usuário!')
    const err_fil = new Error('Não passou filtro!')

    return {
        usuario,
        admin,
        validarUsuario() {
            if (!usuario) throw err
        },
        validarAdmin() {
            if (!admin) throw err_admin
        },
        validarUsuarioFiltro(filtro) {
            if (admin) return

            if (!usuario) throw err_usu
            if (!filtro) throw err_fil

            const { id, email } = filtro
            if (!id && !email) throw err
            if (!id && id !== usuario.id) throw err
            if (email && email !== usuario.email) throw err
        }
    }
}
