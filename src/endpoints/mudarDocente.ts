import { Request, Response } from "express"
import AtualizarTurmaDocente from "../data/AtualizarTurmaDocente"
import { IdTurma } from "../types"

export const mudarDocente = async (req: Request, res: Response) => {
    try {
        const {id_turma,id} = req.body

        const docenteAtual: IdTurma = {
            id_turma,
            id
        }

        await AtualizarTurmaDocente(docenteAtual)
        res.status(200).send("Docente modificada com sucesso!")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}