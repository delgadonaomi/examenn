import mongoose from 'mongoose';
import { Alumno } from './alumno.model';
import { Asignatura } from './asignatura.model';
import { Nota } from './nota.model';

// Conectar a MongoDB
async function conectarDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/escuela', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado a MongoDB');

    // Crear un nuevo alumno
    const nuevoAlumno = new Alumno({
      nombre: 'Juan Pérez',
      edad: 20,
      matricula: 'A001'
    });
    await nuevoAlumno.save();
    console.log('Alumno creado:', nuevoAlumno);

    // Crear una nueva asignatura
    const nuevaAsignatura = new Asignatura({
      nombre: 'Matemáticas',
      codigo: 'MAT101',
      creditos: 4
    });
    await nuevaAsignatura.save();
    console.log('Asignatura creada:', nuevaAsignatura);

    // Crear una nueva nota
    const nuevaNota = new Nota({
      alumno: nuevoAlumno._id,
      asignatura: nuevaAsignatura._id,
      calificacion: 95
    });
    await nuevaNota.save();
    console.log('Nota creada:', nuevaNota);

  } catch (error) {
    console.error('Error al conectar a MongoDB o guardar datos:', error);
  } finally {
    mongoose.connection.close();
  }
}

conectarDB();
