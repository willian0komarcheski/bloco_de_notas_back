import { Schema, model, Document } from 'mongoose';

interface INota extends Document {
  content: string;
}

const notaSchema = new Schema<INota>({
  content: { type: String, required: true },
}, {
  timestamps: true
});

const Nota = model<INota>('Nota', notaSchema);

export { Nota, INota };
