import { useLocation} from "react-router-dom"
import type { Vehiculo } from "../interfaces/Interfaces"
import { Card, CardContent, Typography, Divider, Stack, Box } from "@mui/material"
import { nombresVisibles} from "../datos/diccionario"
import { formatearString } from "../utils/utils"
import Imagen from "../componentes/Imagen"
import BotonAtras from "../componentes/BotonAtras"

function VehiculoDetalle () {
    const vehiculo: Vehiculo = useLocation().state
    const camposVisibles: Array<keyof Vehiculo> = ["marca", "modelo", "precio", "kilometraje","descripcion"]
    
    return (
        <>

        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
            <BotonAtras />
        </Box>
        
        <Card sx={{ margin: "auto", mt: 4, p: 2 }}>
            <Stack
            direction={{ xs: "column", md: "row" }}   // vertical en móviles, horizontal en desktop
            spacing={2}
            alignItems={{ xs: "center", md: "flex-start" }}
        >
                <Imagen link={vehiculo.link}></Imagen>

                <CardContent>
                {camposVisibles.map((campo)=>(
                    <div key={campo}>
                    <Typography  align="left">
                        {`${nombresVisibles[campo] ?? campo}: ${formatearString(campo,vehiculo[campo])}`}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    </div>
                ))}
                </CardContent>
            </Stack>
        </Card>
        </>
    )
}

export default VehiculoDetalle