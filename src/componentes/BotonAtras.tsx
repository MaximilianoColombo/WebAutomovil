import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function BotonAtras () {
    const navigate = useNavigate();
    return(
        <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{ mb: 2 }}
        >
            Volver
        </Button>
    )

}

export default BotonAtras