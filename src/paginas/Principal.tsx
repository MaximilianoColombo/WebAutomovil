import { Stack } from "@mui/material"
import BarraBusqueda from "../componentes/BarraBusqueda"
import Tabla from "../componentes/Tabla"
import data from "../datos/vehiculos.json"
import type { Vehiculo } from "../interfaces/Interfaces"
import { useState } from "react"



function Principal () {
    const vehiculos: Vehiculo[] = data
    const [datosFiltrados, actualizarDatos] = useState(data)


    return (
        <Stack gap={5}>
            <BarraBusqueda vehiculos={vehiculos} funcionActualizarDatos={actualizarDatos}></BarraBusqueda>
            <Tabla datosFiltrados={datosFiltrados} propiedadesExcluidas={["vehiculo_id", "descripcion", "link"]}></Tabla>
        </Stack>

    )
}

export default Principal