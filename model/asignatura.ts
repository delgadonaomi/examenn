import { Schema, model, Document } from 'mongoose';

// Interfaz de Asignatura
export interface IAsignatura extends Document {
  nombre: string;
  codigo: string;
  creditos: number;
}

// Definir el esquema de Asignatura
const asignaturaSchema = new Schema<IAsignatura>({
  nombre: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    unique: true,
    required: true
  },
  creditos: {
    type: Number,
    required: true
  }
});

// Crear y exportar el modelo Asignatura
export const Asignatura = model<IAsignatura>('Asignatura', asignaturaSchema);
