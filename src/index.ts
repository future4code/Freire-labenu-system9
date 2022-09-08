import app from "./app";
import { addTurma } from "./endpoints/criarTurma";
import getAllDocente from "./endpoints/docente";
import getAllEstudantes from './endpoints/estudante';
import getAllTurmas from "./endpoints/turmas";

app.post("/turmas", addTurma);
app.get("/estudantes", getAllEstudantes);
app.get( "/turmas",getAllTurmas)
app.get("/docentes",getAllDocente)