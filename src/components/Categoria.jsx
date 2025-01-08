import React from "react";
import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({ categoria }) {
  const { handleClickCategoria, categoriaActual } = useQuiosco();
  const { icono, id, nombre } = categoria;

  return (
    <div>
      <form
        action="submit"
        onClick={() => handleClickCategoria(id)}
        className={`${
          categoriaActual.id === id ? "bg-amber-400" : "bg-white"
        } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
      >
        <img
          src={`/img/icono_${icono}.svg`}
          alt="Icono Categoria"
          className="w-12"
        />
        <p type="button" className="text-lg font-bold cursor-pointer truncate">
          {nombre}
        </p>
      </form>
    </div>
  );
}
