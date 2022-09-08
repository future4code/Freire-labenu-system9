import { connection } from "./connection"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTableEstudantes = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS estudante (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         data_nasc DATE NOT NULL,
         turma_id VARCHAR(255) FOREING KEY NOT NULL         
      );
   `)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const createTableTurma = () => connection.raw(`
   CREATE TABLE IF NOT EXISTS turma (
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255),
      modulo VARCHAR(255) DEFAULT 0        
   );
`)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const createTableDocente = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS docente (
       id VARCHAR(255) PRIMARY KEY,
       nome VARCHAR(255),
       email VARCHAR(255) NOT NULL UNIQUE,       
       data_nasc DATE NOT NULL,
       turma_id VARCHAR(255) FOREING KEY NOT NULL            
    );
 `)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTableEstudantes()
   .then(() => console.log("Banco pronto!"))
   .finally(closeConnection)