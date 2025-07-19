import { useState } from "react";
import ModeloBota from "./components/ModeloBota";
import ModeloNike from "./components/ModeloNike";
import ModeloCaterpillar from "./components/ModeloCaterpillar";
import ModeloRing from "./components/ModeloRing";
// import ModeloCorset from "./components/ModeloCorset";
import ModalEscenario from "./components/ModalEscenario";
import ModeloLeather from "./components/ModeloLeather";
import ModeloNikeZoom from "./components/ModeloNikeZoom";

// usamos la misma base para todos: .glb y .png en /models/
const modelos = [
  { nombre: "Coraline Boot", clave: "coraline_riding_boot", componente: <ModeloBota /> },
  { nombre: "Caterpillar", clave: "caterpillar_work_boot", componente: <ModeloCaterpillar /> },
  { nombre: "Nike Jordan", clave: "air_jordan_1", componente: <ModeloNike /> },
  { nombre: "Anillo de oro", clave: "ring_gold_with_diamond", componente: <ModeloRing /> },
  // { nombre: "Corset", clave: "corset", componente: <ModeloCorset /> },
  { nombre: "Leather", clave: "leather_shoes", componente: <ModeloLeather /> },
  { nombre: "Nike Air Zoom", clave: "nike_air_zoom_pegasus_36", componente: <ModeloNikeZoom /> },
];

export default function App() {
  const [modalActual, setModalActual] = useState(null);

  const cerrarModal = () => setModalActual(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-coral-400 to-blue-500 p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-10"> Confiture 3D </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {modelos.map((modelo) => (
          <div
            key={modelo.clave}
            onClick={() => setModalActual(modelo.clave)}
            className="bg-black rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={`/models/${modelo.clave}.png`}
              alt={modelo.nombre}
              className="w-full h-50 object-cover mb-2"
            />
            <h2 className="text-center text-blue-700 font-bold">{modelo.nombre}</h2>
          </div>
        ))}
      </div>

      {modalActual && (
        <ModalEscenario onCerrar={cerrarModal}>
          {modelos.find((m) => m.clave === modalActual)?.componente}
        </ModalEscenario>
      )}
    </div>
  );
}
