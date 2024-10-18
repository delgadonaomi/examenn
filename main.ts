import { agregarAlumno, obtenerAlumnos } from './alumno';
import { agregarAsignatura, obtenerAsignaturas } from './src/asignatura';
import { agregarNota, obtenerNotas } from './src/nota';

// Ejemplos de uso de Alumno
agregarAlumno({ nombre: 'María López', edad: 21, matricula: 'A004' });
console.log('Alumnos:', obtenerAlumnos());

// Ejemplos de uso de Asignatura
agregarAsignatura({ nombre: 'Química', codigo: 'QUI404', creditos: 4 });
console.log('Asignaturas:', obtenerAsignaturas());

// Ejemplos de uso de Nota
agregarNota({ alumno: 'A001', asignatura: 'QUI404', calificacion: 90 });
console.log('Notas:', obtenerNotas());
