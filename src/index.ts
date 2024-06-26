import express, { Application } from 'express';
import mongoose from 'mongoose';
import notaRoutes from './Routes/NotaRoutes';
import cors from 'cors';

const db = "mongodb+srv://willian:euodeiobancodedados123@cluster0.26xkzrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.database();
    this.configureCors();
    this.middlewares();
    this.routes();

    this.express.listen(3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001`)
    );
  }

  private database(): void {
    mongoose.connect(db)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.error('Failed to connect to MongoDB', err));
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private configureCors(): void {
    // Configuração para permitir todas as origens, métodos e cabeçalhos
    this.express.use(cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }));
  }

  private routes(): void {
    this.express.use(notaRoutes);
  }

}

export default new App().express;
