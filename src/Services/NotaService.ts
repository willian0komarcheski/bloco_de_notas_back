import { Nota, INota } from '../Models/Nota';

class NotaService {
  async createNota(content: string): Promise<INota> {
    const nota = new Nota({ content });
    return await nota.save();
  }

  async getNotas(): Promise<INota[]> {
    return await Nota.find();
  }

  async getNotaById(id: string): Promise<INota | null> {
    return await Nota.findById(id);
  }

  async updateNota(id: string, content: string): Promise<INota | null> {
    return await Nota.findByIdAndUpdate(id, { content }, { new: true });
  }

  async deleteNota(id: string): Promise<INota | null> {
    return await Nota.findByIdAndDelete(id);
  }
}

export default new NotaService();
