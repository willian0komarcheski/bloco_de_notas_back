import { Request, Response } from 'express';
import NotaService from '../Services/NotaService';

class NotaController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { content } = req.body;
      const nota = await NotaService.createNota(content);
      res.status(201).json(nota);
    } catch (error) {
      res.status(500).json({error});
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const notas = await NotaService.getNotas();
      res.status(200).json(notas);
    } catch (error) {
      res.status(500).json({ error});
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const nota = await NotaService.getNotaById(req.params.id);
      if (nota) {
        res.status(200).json(nota);
      } else {
        res.status(404).json({ message: 'Nota not found' });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { content } = req.body;
      const nota = await NotaService.updateNota(req.params.id, content);
      if (nota) {
        res.status(200).json(nota);
      } else {
        res.status(404).json({ message: 'Nota not found' });
      }
    } catch (error) {
      res.status(500).json({error });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const nota = await NotaService.deleteNota(req.params.id);
      if (nota) {
        res.status(200).json({ message: 'Nota deleted' });
      } else {
        res.status(404).json({ message: 'Nota not found' });
      }
    } catch (error) {
      res.status(500).json({ error});
    }
  }
}

export default new NotaController();
