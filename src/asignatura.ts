
  export interface Asignatura {
    nombre: string;
    codigo: string;
    creditos: number;
  }
  
  export const asignaturas: Asignatura[] = [
    { nombre: 'Matemáticas', codigo: 'MAT101', creditos: 4 },
    { nombre: 'Historia', codigo: 'HIS202', creditos: 3 },
    { nombre: 'Física', codigo: 'FIS303', creditos: 4 }
  ];
  
  export function agregarAsignatura(nuevaAsignatura: Asignatura) {
    asignaturas.push(nuevaAsignatura);
  }
  
  export function obtenerAsignaturas(): Asignatura[] {
    return asignaturas;
  }
  
  export function actualizarAsignatura(codigo: string, datosActualizados: Partial<Asignatura>) {
    const index = asignaturas.findIndex(asignatura => asignatura.codigo === codigo);
    if (index !== -1) {
      asignaturas[index] = { ...asignaturas[index], ...datosActualizados };
    }
  }
  
  export function eliminarAsignatura(codigo: string) {
    const index = asignaturas.findIndex(asignatura => asignatura.codigo === codigo);
    if (index !== -1) {
      asignaturas.splice(index, 1);
    }
  }
  