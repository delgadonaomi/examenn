import { Schema, model, Document } from 'mongoose';

// Interfaz de Alumno
export interface IAlumno extends Document {
  nombre: string;
  edad: number;
  matricula: string;
}

// Definir el esquema de Alumno
const alumnoSchema = new Schema<IAlumno>({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  matricula: {
    type: String,
    unique: true,
    required: true
  }
});

// Crear y exportar el modelo Alumno
export const Alumno = model<IAlumno>('Alumno', alumnoSchema);
