import { Router } from 'express';
import NotaController from '../Controllers/NotaController';

const router = Router();

router.post('/notas', NotaController.create);
router.get('/notas', NotaController.getAll);
router.get('/notas/:id', NotaController.getById);
router.put('/notas/:id', NotaController.update);
router.delete('/notas/:id', NotaController.delete);

export default router;
