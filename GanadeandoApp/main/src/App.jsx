import { useState } from 'react'
import './App.css'
import '../src/css/style.css'

import Pie from './Componentes/Pie'; 
import Encabezado from './Componentes/Encabezado'; 
import InicioSesion from './Componentes/inicioSesion';
import Registro from './Componentes/Registro';
import AnimalBovinos from './Componentes/AnimalBovinos';
import Contacto from './Componentes/Contacto';
import Conocenos from './Componentes/Conocenos';

function App() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const irRegistro = () => setMostrarRegistro(true);
  const irInicioSesion = () => setMostrarRegistro(false);

  return (
    <>
      <div>
        <Encabezado />
        {mostrarRegistro ? (
          <Registro irInicioSesion={irInicioSesion} />
          ) : (
            <InicioSesion irRegistro={irRegistro} />
          )}
        
      <Pie />
      <AnimalBovinos/>
      <Contacto/>
      <Conocenos/>
      </div>
    </>
  )
}

export default App