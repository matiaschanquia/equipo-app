import React from "react";
import Titulares from "./Titulares";
import Suplentes from "./Suplentes";

const EquipoSeleccionado = (props) => {
    return (
        <section className="section-seleccionados">
            <Titulares />
            <hr />
            <Suplentes />
        </section>
    )
}

export default EquipoSeleccionado;