import { connection } from "./connection"

const selectAllEstudantes = async () => {

    const result = await connection
            .select("*")
            .from("estudante")

    return result;
}

export default selectAllEstudantes