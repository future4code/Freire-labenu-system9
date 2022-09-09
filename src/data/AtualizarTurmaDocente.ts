import { connection } from "./connection";

export default async function AtualizarTurmaDocente (docenteAtual: any) {

    const {id_turma,id} = docenteAtual    

    await connection.raw(`
        UPDATE docente
        SET turma_id = "${id_turma}"
        WHERE id = "${id}";
    `)
}