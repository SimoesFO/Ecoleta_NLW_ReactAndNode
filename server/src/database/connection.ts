import knex from 'knex'
import path from 'path'

/*
const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})
*/

const connection = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'nlw_ed01'
    },
    useNullAsDefault: true
})


export default connection;