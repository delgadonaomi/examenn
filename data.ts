// Definición del objeto con tres arreglos para Alumno, Asignatura y Nota

const data = {
    alumno: [
        { id: 1, nombre: 'Juan Pérez', edad: 20, matricula: 'A001' },
        { id: 2, nombre: 'María Gómez', edad: 21, matricula: 'A002' },
        { id: 3, nombre: 'Carlos Ruiz', edad: 22, matricula: 'A003' },
        { id: 4, nombre: 'Ana Torres', edad: 23, matricula: 'A004' },
        { id: 5, nombre: 'Pedro Molina', edad: 24, matricula: 'A005' },
        { id: 6, nombre: 'Laura Cordero', edad: 25, matricula: 'A006' },
        { id: 7, nombre: 'Sofía Durán', edad: 26, matricula: 'A007' },
        { id: 8, nombre: 'Diego Salazar', edad: 27, matricula: 'A008' },
        { id: 9, nombre: 'Lucía López', edad: 28, matricula: 'A009' },
        { id: 10, nombre: 'Daniel Fernández', edad: 29, matricula: 'A010' }
    ],
    asignatura: [
        { id: 1, nombre: 'Matemáticas', codigo: 'M001', profesor: 'Profe A' },
        { id: 2, nombre: 'Física', codigo: 'F001', profesor: 'Profe B' },
        { id: 3, nombre: 'Química', codigo: 'Q001', profesor: 'Profe C' },
        { id: 4, nombre: 'Biología', codigo: 'B001', profesor: 'Profe D' },
        { id: 5, nombre: 'Historia', codigo: 'H001', profesor: 'Profe E' },
        { id: 6, nombre: 'Geografía', codigo: 'G001', profesor: 'Profe F' },
        { id: 7, nombre: 'Lengua', codigo: 'L001', profesor: 'Profe G' },
        { id: 8, nombre: 'Inglés', codigo: 'I001', profesor: 'Profe H' },
        { id: 9, nombre: 'Filosofía', codigo: 'F002', profesor: 'Profe I' },
        { id: 10, nombre: 'Arte', codigo: 'A001', profesor: 'Profe J' }
    ],
    nota: [
        { id: 1, alumnoId: 1, asignaturaId: 1, calificacion: 85 },
        { id: 2, alumnoId: 2, asignaturaId: 2, calificacion: 90 },
        { id: 3, alumnoId: 3, asignaturaId: 3, calificacion: 75 },
        { id: 4, alumnoId: 4, asignaturaId: 4, calificacion: 88 },
        { id: 5, alumnoId: 5, asignaturaId: 5, calificacion: 92 },
        { id: 6, alumnoId: 6, asignaturaId: 6, calificacion: 70 },
        { id: 7, alumnoId: 7, asignaturaId: 7, calificacion: 95 },
        { id: 8, alumnoId: 8, asignaturaId: 8, calificacion: 60 },
        { id: 9, alumnoId: 9, asignaturaId: 9, calificacion: 85 },
        { id: 10, alumnoId: 10, asignaturaId: 10, calificacion: 77 }
    ]
};


export default data;
