import { connection } from "./connection";

export default async function insertTurma(turma: any) {

    const {id, nome, docentes, estudantes, modulo} = turma    

    await connection(`turma`).insert({
        id,
        nome,
        modulo       
    })
}