import app from "./app";
import { addTurma } from "./endpoints/criarTurma";
import { mudarTurma } from "./endpoints/mudarTurma";
import { mudarDocente } from "./endpoints/mudarDocente";
import { mudarEstudante } from "./endpoints/mudarEstudante";
import getAllDocente from "./endpoints/docente";
import getAllEstudantes from './endpoints/estudante';
import getAllTurmas from "./endpoints/turmas";

app.get("/estudantes", getAllEstudantes);
app.get("/turmas",getAllTurmas)
app.get("/docentes",getAllDocente)

app.post("/turmas", addTurma);


app.put('/turmas/turma',mudarTurma);
app.put('/turmas/docente',mudarDocente);
app.put('/turmas/estudante',mudarEstudante);