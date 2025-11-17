import ComboBox from "./ComboBox";
import RangoSlider from "./Slider";
import {filtrarArray, obtenerArraySinDuplicados, ObtenerMinimoMaximo} from "../utils/utils"
import Stack from "@mui/material/Stack";
import type { Filtros, Vehiculo, actualizarDatos, manejarCambio, filtrarDatos } from "../interfaces/Interfaces";
import { useEffect, useState } from "react";


function BarraBusqueda ({vehiculos, funcionActualizarDatos}: {vehiculos:Vehiculo[], funcionActualizarDatos: actualizarDatos }) {
    const marcas = obtenerArraySinDuplicados(vehiculos, "marca")
    const modelos = obtenerArraySinDuplicados(vehiculos,"modelo")
    const rango = ObtenerMinimoMaximo(vehiculos, "precio")

    const [filtros, modificarFiltros] = useState<Filtros>({
        marca: '',
        modelo: '',
        precio: rango
    })

    const manejarCambio: manejarCambio = (campo, valor) => {
        modificarFiltros(prev => ({...prev, [campo]: valor}))
        console.log(filtros)
    }

    const filtrarDatos: filtrarDatos = (listaCompleta, filtros) => {
        const listaFiltrada = filtrarArray(listaCompleta, filtros)
        funcionActualizarDatos(listaFiltrada)
    }

    useEffect(() => {
        filtrarDatos(vehiculos, filtros)
    }, [filtros]) 



    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <ComboBox opciones={marcas} propiedad= 'marca' funcionCambio={manejarCambio} ></ComboBox>
            <ComboBox opciones={modelos} propiedad= 'modelo' funcionCambio={manejarCambio}></ComboBox>
            <RangoSlider rango={rango} propiedad='precio' funcionCambio={manejarCambio}></RangoSlider>
        </Stack>
    )
}

export default BarraBusqueda