import { useState } from "react";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImagenVehiculo = ({link} : {link: string}) => {
  const [estaAbierto, modificarEstado] = useState(false);

  return (
    <>
      <Box
        component="img"
        src={link}
        alt="Vehiculo"
        onClick={() => modificarEstado(true)}
        sx={{
          width: 500,  
          height: "auto",
          borderRadius: 2,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.02)" },
        }}
      />

      <Dialog open={estaAbierto} onClose={() => modificarEstado(false)} maxWidth="lg">
        <IconButton
            onClick={() => modificarEstado(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              background: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": {
                background: "rgba(0,0,0,0.7)"
              }
            }}
          >
            <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={link}
          alt="Imagen grande"
          sx={{ width: "100%", height: "auto" }}
        />
      </Dialog>
    </>
  );
};

export default ImagenVehiculo;
