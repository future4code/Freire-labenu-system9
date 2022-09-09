import { connection } from "./connection";

export default async function insertTurma(turma: any) {
    const {id, nome,  modulo} = turma    
    await connection(`turma`).insert({
        id,
        nome,
        modulo       
    })
}

