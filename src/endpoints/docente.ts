import { Request, Response } from "express";
import selectAllDocentes from "../data/docente";

const getAllDocente = async (req: Request, res: Response) => {
    try {
        const docente = await selectAllDocentes()
        res.status(200).send({ docente: docente })
    }
    catch (error: any) {
        res.status(res.statusCode).send(error.message)
    }
}

export default getAllDocente;