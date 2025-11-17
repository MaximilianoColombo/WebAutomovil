export interface Vehiculo {
  vehiculo_id: number;
  marca: string;
  modelo: string;
  kilometraje: number;
  anio: number;
  precio: number;
  descripcion: string;
  link: string
}

export type Filtros = {
  marca: string;
  modelo: string;
  precio: [number, number];
}

export type manejarCambio = <K extends keyof Filtros>(campo: K, valor: Filtros[K]) => void

export type filtrarDatos = (listaCompleta: Vehiculo[], filtros: Filtros) => void

export type actualizarDatos = (listaFiltrada: Vehiculo[]) => void
