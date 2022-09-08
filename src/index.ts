import app from "./app";
import { addTurma } from "./endpoints/criarTurma";
import getAllEstudantes from './endpoints/estudante';

app.post("/turmas", addTurma);
app.get("/estudantes", getAllEstudantes);

