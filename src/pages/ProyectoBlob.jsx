import React, { useState } from "react";
import "./ProyectoBlob.css";

function ProyectoBlob() {
  const [blob, setBlob] = useState(null);
  const [resultado, setResultado] = useState("");

  // 1. Crear Blob
  const crearBlob = () => {
    const archivo = new Blob(
      ["Hola, este es mi archivo de texto creado con Blob."],
      { type: "text/plain" }
    );

    setBlob(archivo);
    setResultado("Blob creado correctamente");
    console.log(archivo);
  };

  // 2. Descargar Blob
  const descargarBlob = () => {
    if (!blob) {
      alert("Primero tenés que crear el Blob");
      return;
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "archivo.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  // 3. Slice
  const cortarBlob = async () => {
    if (!blob) {
      alert("Primero tenés que crear el Blob");
      return;
    }

    const nuevoBlob = blob.slice(0, 10);
    const texto = await nuevoBlob.text();

    setResultado(texto);
    console.log(texto);
  };

  return (
    <div className="proyecto">
      <h1>Proyecto Blob</h1>

      <button onClick={crearBlob}>Crear Blob</button>
      <button onClick={descargarBlob}>Descargar Blob</button>
      <button onClick={cortarBlob}>Slice Blob</button>

      <p>{resultado}</p>
    </div>
  );
}
export default ProyectoBlob;