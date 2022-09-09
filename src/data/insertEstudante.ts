import { connection } from "./connection";

export default async function insertEstudante(estudante: any) {

    const {id, nome, email, data_nasc, turma_id} = estudante    

    await connection(`estudante`).insert({
        id,
        nome,
        email,
        data_nasc: `${data_nasc.split("/")[2]}-${data_nasc.split("/")[1]}-${data_nasc.split("/")[0]}`,
        turma_id      
    })
}