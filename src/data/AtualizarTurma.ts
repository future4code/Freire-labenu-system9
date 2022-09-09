import { connection } from "./connection";

export default async function AtualizarModulo (moduloAtual: any) {
    const {id,modulo} = moduloAtual    
    await connection.raw(`
        UPDATE turma
        SET modulo = "${modulo}"
        WHERE id = "${id}";
    `)
}