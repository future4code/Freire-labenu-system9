import { connection } from "./connection";

export default async function AtualizarTurmaEstudante (estudanteAtual: any) {
    const {id_turma,id} = estudanteAtual    
    await connection.raw(`
        UPDATE estudante
        SET turma_id = "${id_turma}"
        WHERE id = "${id}";
    `)
}