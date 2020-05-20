const db = require('../config/db')
// 1ª FORMA
// db('perfis')
//     .then(res => res.map(p => p.nome))
//     .then(nomes => console.log(nomes))
//     .finally(() => db.destroy())

// 2ª FORMA
// db('perfis').select('nome', 'id')
//     .then((res => console.log(res)))
//     .finally(() => db.destroy())

// 3ª FORMA
// db.select('nome', 'id')
//     .from('perfis')
//     .limit(4)
//     .then((res => console.log(res)))
//     .finally(() => db.destroy())

// 4ª FORMA
db.select('nome', 'id')
    .from('perfis')
    .where({ id: 2 })
    // .first() // para obter um único elemento do array tem que utilizar o first() senão ele retorna undefined
    .then((res => console.log(res)))
    .finally(() => db.destroy())