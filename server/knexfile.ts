import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        //path.resolve retorna o caminho do diretorio independente do SO
        //__dirname retorna o caminho do diretorio atual
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    //Caminho das migrations
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        //Caminho dos seeds(usado para adicionar dados precarregados na aplicação)
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};