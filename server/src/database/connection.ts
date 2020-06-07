import knex from 'knex';
import path from 'path';

const connection = knex({
    client:'sqlite3',
    connection: {
        //path.resolve retorna o caminho do diretorio independente do SO
        //__dirname retorna o caminho do diretorio atual
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //Usar null como valor default
    useNullAsDefault: true,
});

export default connection;