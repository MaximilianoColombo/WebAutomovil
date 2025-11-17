export function obtenerArray<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}

export function obtenerArraySinDuplicados<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return Array.from(new Set(array.map((item) => item[key])));
}

export function ObtenerMinimoMaximo<T, K extends keyof T>(array: T[], key: K): [number, number]{
  const valores = array.map((item) => Number(item[key]))

  return [Math.min(...valores), Math.max(...valores)]
}

export function filtrarArray<T extends Record<string, any>>(array: T[], filtros: Record<string, any>): T[] {
  const llavesFiltros = Object.keys(filtros);

  const resultado = array.filter((item) =>
    llavesFiltros.every((llave) => {
      const valorFiltro = filtros[llave];
      if (valorFiltro === "" || valorFiltro === undefined || valorFiltro === null) return true; // ignora filtros vacíos

      if (Array.isArray(valorFiltro) && valorFiltro.length === 2) { //Si se trata de un rango, debe realizar otra comparación
        const [min, max] = valorFiltro;
        return item[llave] >= min && item[llave] <= max;
      }

      return item[llave] === valorFiltro;
    })
  );

  return resultado

}

import {formateador} from "../datos/diccionario"
export function formatearString(prop: string, valor: any) {
  const funcion = formateador[prop]
  return funcion(valor) 
}