export interface Nota {
  alumno: string;
  asignatura: string;
  calificacion: number;
}

export const notas: Nota[] = [
  { alumno: 'A001', asignatura: 'MAT101', calificacion: 95 },
  { alumno: 'A002', asignatura: 'HIS202', calificacion: 88 },
  { alumno: 'A003', asignatura: 'FIS303', calificacion: 92 }
];

export function agregarNota(nuevaNota: Nota) {
  notas.push(nuevaNota);
}

export function obtenerNotas(): Nota[] {
  return notas;
}

export function actualizarNota(alumno: string, asignatura: string, nuevaCalificacion: number) {
  const index = notas.findIndex(nota => nota.alumno === alumno && nota.asignatura === asignatura);
  if (index !== -1) {
    notas[index].calificacion = nuevaCalificacion;
  }
}

export function eliminarNota(alumno: string, asignatura: string) {
  const index = notas.findIndex(nota => nota.alumno === alumno && nota.asignatura === asignatura);
  if (index !== -1) {
    notas.splice(index, 1);
  }
}
