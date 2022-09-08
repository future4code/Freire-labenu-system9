import { Request, Response } from "express";
import selectAllEstudantes from "../data/estudante";

const getAllEstudantes = async (req: Request, res: Response) => {
    try {
        const estudantes = await selectAllEstudantes()
        res.status(200).send({ estudantes: estudantes })
    }
    catch (error: any) {
        res.status(res.statusCode).send(error.message)
    }
}

export default getAllEstudantes;