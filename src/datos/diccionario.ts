export  const nombresVisibles: Record<string, string> = {
  anio: "Año",
  marca: "Marca",
  modelo: "Modelo",
  precio: "Precio",
  kilometraje: "Kilometraje",
  descripcion: "Descripción"
};

export const formateador: Record<string, (value: any) => string> = {
  marca: (v) => v,
  modelo: (v) => v,
  anio: (v) => `${v}`,
  kilometraje: (v) => `${v.toLocaleString()} km`,
  precio: (v) => `$${v.toLocaleString()}`,
  descripcion: (v) => v,
};
