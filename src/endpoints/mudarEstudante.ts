import { Request, Response } from "express"
import AtualizarTurmaEstudante from "../data/AtualizarTurmaEstudante"
import { IdTurma } from "../types"

export const mudarEstudante = async (req: Request, res: Response) => {
    try {
        const {id_turma,id} = req.body

        const estudanteAtual: IdTurma = {
            id_turma,
            id
        }

        await AtualizarTurmaEstudante(estudanteAtual)
        res.status(200).send("Estudante modificada com sucesso!")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}