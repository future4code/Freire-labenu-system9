import express, {Express} from 'express'
import cors from 'cors'
import getAllEstudantes from './endpoints/estudante';

const app: Express = express();

app.use(express.json());
app.use(cors());

// estudantes
app.get("/estudantes", getAllEstudantes);

export default app