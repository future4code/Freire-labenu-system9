import { connection } from "./connection"

const selectAllTurmas = async () => {

    const result = await connection
            .select("*")
            .from("turma")

    return result;
}

export default selectAllTurmas