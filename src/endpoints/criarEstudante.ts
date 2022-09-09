import { Request, Response } from "express"
import insertEstudante from "../data/insertEstudante"
import { Estudante } from "../types"

export const addEstudante = async (req: Request, res: Response) => {
    try {
        const {nome, email, data_nasc, turma_id} = req.body

        const estudante: Estudante = {
            id: Date.now().toString(),
            nome: nome,
            email: email,
            data_nasc: data_nasc,
            turma_id: turma_id
        }

        await insertEstudante(estudante)
        res.status(200).send("Estudante adicionado com sucesso com sucesso")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}