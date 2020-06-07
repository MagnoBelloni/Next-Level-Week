import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

//Permite que só as urls no origin, acessem a api
// app.use(cors({
//     origin: 'www.site.com.br'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

//Habilita erros
app.use(errors);

app.listen(3333);