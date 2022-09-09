import { Request, Response } from "express"
import AtualizarModulo from "../data/AtualizarTurma"
import { PutModuloTurma } from "../types"

export const mudarTurma = async (req: Request, res: Response) => {
    try {
        const {id,modulo} = req.body

        if(Number(modulo) > 6){
            throw new Error("Modulo maior que 6. O modulo deve ser menor ou igual a 6 ")
        }

        const moduloAtual: PutModuloTurma = {
            id,
            modulo
        }

        await AtualizarModulo(moduloAtual)
        res.status(200).send("Turma modificada com sucesso!")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}
