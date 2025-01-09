import React from "react";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Productos({ producto }) {
  const { nombre, precio, imagen } = producto;
  const { handleClickModal, handleSetProducto } = useQuiosco();
  return (
    <div className="border p-3 shadow bg-white">
      <img
        src={`/img/${imagen}.jpg`}
        className="w-full"
        alt={`Imagen ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-bold text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-lg"
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
