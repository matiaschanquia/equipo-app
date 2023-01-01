import React from "react";
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import Footer from "./components/Footer";
import Jugadores from "./components/Jugadores";

function App() {
    return (
      <main className="main">
        <Jugadores />
        <EquipoSeleccionado />
        <Footer />
      </main>
    );
}

export default App;
