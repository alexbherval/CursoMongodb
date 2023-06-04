// Esta Função Deleta todos os bancos do MongoDB preservando apanas as instancias por padrão

Mongo().getDBNames().forEach(function(db) {

    if(['admin', 'config', 'local', 'aupBD'].indexOf(db) < 0) {
        Mongo().getDB(db).dropDatabase()
    }

});