import { Schema, model, Document } from 'mongoose';
import { IAlumno } from './alumno.model';
import { IAsignatura } from './asignatura.model';

// Interfaz de Nota
export interface INota extends Document {
  alumno: IAlumno['_id'];
  asignatura: IAsignatura['_id'];
  calificacion: number;
}

// Definir el esquema de Nota
const notaSchema = new Schema<INota>({
  alumno: {
    type: Schema.Types.ObjectId,
    ref: 'Alumno',
    required: true
  },
  asignatura: {
    type: Schema.Types.ObjectId,
    ref: 'Asignatura',
    required: true
  },
  calificacion: {
    type: Number,
    required: true
  }
});

// Crear y exportar el modelo Nota
export const Nota = model<INota>('Nota', notaSchema);
