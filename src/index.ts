import app from "./app";
import { addDocente } from "./endpoints/criarDocente";
import { addEstudante } from "./endpoints/criarEstudante";
import { addTurma } from "./endpoints/criarTurma";
import { mudarTurma } from "./endpoints/mudarTurma";
import { mudarDocente } from "./endpoints/mudarDocente";
import { mudarEstudante } from "./endpoints/mudarEstudante";
import getAllDocente from "./endpoints/docente";
import getAllEstudantes from './endpoints/estudante';
import getAllTurmas from "./endpoints/turmas";

app.post("/turmas", addTurma);
app.post("/estudantes", addEstudante);
app.post("/docentes", addDocente)

app.get("/estudantes", getAllEstudantes);
app.get("/turmas",getAllTurmas)
app.get("/docentes",getAllDocente)

app.put('/turmas/turma',mudarTurma);
app.put('/turmas/docente',mudarDocente);
app.put('/turmas/estudante',mudarEstudante);
