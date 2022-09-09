import { Request, Response } from "express"
import insertDocente from "../data/insertDocente"
import { Docente} from "../types"

export const addDocente = async (req: Request, res: Response) => {
    try {
        const {nome, email, data_nasc, turma_id} = req.body

        const docente: Docente = {
            id: Date.now().toString(),
            nome: nome,
            email: email,
            data_nasc: data_nasc,
            turma_id: turma_id
        }

        await insertDocente(docente)
        res.status(200).send("Docente adicionado com sucesso com sucesso")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}