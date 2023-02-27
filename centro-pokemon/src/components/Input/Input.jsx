import React from "react";
import { useDispatch } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", isEntrenador }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.

  const dispatch = useDispatch()

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
  };

  const onBlur = (e) => dispatch({
      type: isEntrenador ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
      payload: {[e.target.name]: e.target.value}
    })
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
