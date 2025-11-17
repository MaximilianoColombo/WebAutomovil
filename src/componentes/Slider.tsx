import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import type { Filtros, manejarCambio } from '../interfaces/Interfaces';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { nombresVisibles } from '../datos/diccionario';

function valuetext(value: number) {
  return `$ ${value}`;
}

export default function RangoSlider ({propiedad, rango , funcionCambio} : {propiedad: keyof Filtros, rango: [number, number], funcionCambio: manejarCambio}) {
  const [minimo, maximo] = rango
  const [nuevoRango, actualizarRango] = useState(rango)
  const manejarCambioRango = (_:Event, valor: number[]) => {
    actualizarRango(valor as [number, number]);
  }

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="subtitle1" gutterBottom align='left'>
        {nombresVisibles[propiedad] ?? propiedad}
      </Typography>
      <Slider
        getAriaLabel={() => `Rango de ${propiedad}`}
        value={nuevoRango}
        onChange={(_, value) => manejarCambioRango(_, value)}
        onChangeCommitted={(_, value) => funcionCambio(propiedad, value as [number, number])}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={minimo}
        max={maximo}
        marks={true}
        step={(maximo-minimo)/10}
      />
    </Box>
  );
}
