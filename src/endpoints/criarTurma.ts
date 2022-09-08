import { Request, Response } from "express"
import insertTurma from "../data/insertTurma"
import { Turma } from "../types"

export const addTurma = async (req: Request, res: Response) => {
    try {
        const {nome} = req.body

        const turma: Turma = {
            id: Date.now().toString(),
            nome: nome,
            docentes: [],
            estudantes: [],
            modulo: "0"
        }

        await insertTurma(turma)
        res.status(200).send("Turma criada com sucesso")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}