import { Request, Response } from "express";
import selectAllTurmas from "../data/turmas";



const getAllTurmas = async (req: Request, res: Response) => {
    try {
        const turmas = await selectAllTurmas()
        res.status(200).send({ turmas: turmas })
    }
    catch (error: any) {
        res.status(res.statusCode).send(error.message)
    }
}

export default getAllTurmas;