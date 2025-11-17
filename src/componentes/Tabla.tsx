import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type {Vehiculo} from "../interfaces/Interfaces";
import { nombresVisibles } from '../datos/diccionario';
import { useNavigate } from 'react-router';

export default function Tabla({datosFiltrados, propiedadesExcluidas}: {datosFiltrados: Vehiculo[], propiedadesExcluidas: string[]}) {
    
  if (!datosFiltrados || datosFiltrados.length === 0) return <p>No hay datos para mostrar.</p>;
const propiedades = Object.keys(datosFiltrados[0])
    .filter((key) => !propiedadesExcluidas.includes(key)) as (keyof Vehiculo)[];

  const navigate = useNavigate()

  return (
    <TableContainer component={Paper} sx={{}}>
      <Table sx={{}} aria-label="tabla">
        <TableHead>
          <TableRow>
            {propiedades.map((propiedad, indice) => (
                <TableCell key={indice} align='left'>{nombresVisibles[propiedad] ?? propiedad}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {datosFiltrados.map((item) => (  /*Primero se recorre el array completo */
            <TableRow 
            key={item.vehiculo_id}
            onClick={() => navigate(`/vehiculo/${item.vehiculo_id}`, {state: item})}
            sx={{
                "&:hover": { 
                  backgroundColor: "#e0f7fa", 
                  cursor: "pointer", 
                  "& .MuiTableCell-root": {
                    color: "black",  
                  },
                 },
            }}
            > 
                {propiedades.map((propiedad, indiceCelda) => ( /*Luego sobre cada item se vuelve a recorrer para mostrar cada celda*/
                    <TableCell key={indiceCelda}>{item[propiedad]} </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
