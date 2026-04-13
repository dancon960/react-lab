import { useState } from 'react'
import { DataTable } from './components/DataTable'

function App() {
  const [estudiantes] = useState([
    { id: 1, nombre: "Daniel", estado: "ACTIVA" },
    { id: 2, nombre: "Ana", estado: "FINALIZADA" }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Gestión Universitaria - Módulo 3</h1>
      
      {/* Usamos nuestra tabla genérica pasándole los datos y las columnas */}
      <DataTable 
        datos={estudiantes} 
        columnas={[
          { cabecera: "ID", clave: "id" },
          { cabecera: "Nombre del Alumno", clave: "nombre" },
          { cabecera: "Estado Matrícula", clave: "estado" }
        ]} 
      />
    </div>
  )
}

export default App