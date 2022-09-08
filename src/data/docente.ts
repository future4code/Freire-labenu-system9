import { connection } from "./connection"

const selectAllDocente = async () => {

    const result = await connection
            .select("*")
            .from("docente")

    return result;
}

export default selectAllDocente