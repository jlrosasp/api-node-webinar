import express, { Request, Response } from 'express';
import cors from 'cors';

const api = express();

api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use(cors());

api.get('/api/', (req:Request, res:Response) => {
    res.status(200).json({
        ok: true,
        msg: 'Welcome to API NodeJS on Webinar'
    })
});

api.get('/api/getEntidades', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'OK',
        message: [
            {
                "cve_agee": "01",
                "cve_agem": "001",
                "cve_loc": "0001",
                "nom_loc": "Aguascalientes",
                "ambito": "URBANO",
                "latitud": "21.8798228",
                "longitud": "-102.2960467",
                "altitud": "1878",
                "pob": "863893",
                "viv": "246259",
                "cve_carta": "F13D19",
                "estatus": 1,
                "periodo": "2015-06-01"
            }
        ]
    });
});

api.listen(3000, () => {
    console.log('API Corriendo y Funcionando Exitosamente !!!');
});