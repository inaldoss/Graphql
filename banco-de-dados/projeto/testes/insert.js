const db = require('../config/db')
// 1ª FORMA
// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy())

// 2ª FORMA
const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

db.insert(perfilSU).into('perfis')
    .then(res => res[0])
    .then(id => `O código gerado foi ${id}`)
    .then(string => console.log(string))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())