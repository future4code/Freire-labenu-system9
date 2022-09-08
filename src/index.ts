import { AddressInfo } from "net";
import app from "./app";
import { addTurma } from "./endpoints/criarTurma";


app.post("/turmas", addTurma)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});