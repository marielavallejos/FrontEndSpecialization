import React from "react";
import { useStore } from "../../context/ContextoFormulario";

const Detalle = () => {
const store = useStore()
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {store.entrenador?.nombre}</p>
          <p>Apellido:{store.entrenador?.apellido}</p>
          <p>Email:{store.entrenador?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {store.pokemon?.nombrePokemon}</p>
          <p>Tipo: {store.pokemon?.tipoPokemon}</p>
          <p>Altura: {store.pokemon?.alturaPokemon}</p>
          <p>Edad: {store.pokemon?.edadPokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
