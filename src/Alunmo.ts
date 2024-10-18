export interface Alumno {
  nombre: string;
  edad: number;
  matricula: string;
}

export const alumnos: Alumno[] = [
  { nombre: 'Juan Pérez', edad: 20, matricula: 'A001' },
  { nombre: 'Ana García', edad: 22, matricula: 'A002' },
  { nombre: 'Carlos Ramírez', edad: 19, matricula: 'A003' }
];

export function agregarAlumno(nuevoAlumno: Alumno) {
  alumnos.push(nuevoAlumno);
}

export function obtenerAlumnos(): Alumno[] {
  return alumnos;
}

export function actualizarAlumno(matricula: string, datosActualizados: Partial<Alumno>) {
  const index = alumnos.findIndex(alumno => alumno.matricula === matricula);
  if (index !== -1) {
    alumnos[index] = { ...alumnos[index], ...datosActualizados };
  }
}

export function eliminarAlumno(matricula: string) {
  const index = alumnos.findIndex(alumno => alumno.matricula === matricula);
  if (index !== -1) {
    alumnos.splice(index, 1);
  }
}
