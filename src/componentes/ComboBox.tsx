import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import type { Filtros, manejarCambio } from '../interfaces/Interfaces';
import { nombresVisibles } from '../datos/diccionario';

export default function ComboBox({ opciones, propiedad, funcionCambio }: { opciones: string[]; propiedad: keyof Filtros; funcionCambio: manejarCambio}) {
  return (
    <Autocomplete
      onChange={(_, value) => funcionCambio(propiedad, value || '')}
      disablePortal
      options={opciones}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={nombresVisibles[propiedad] ?? propiedad} />}
    />
  );
}
