import { useState } from 'react'

function App() {
  const [estudiantes] = useState([
    { id: 1, nombre: "Daniel", estado: "ACTIVA" },
    { id: 2, nombre: "Ana", estado: "FINALIZADA" }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Gestión Universitaria - Módulo 3</h1>
      <p>Panel de administración de estudiantes:</p>
      
      <table border={1} style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>Nombre</th>
            <th style={{ padding: '10px' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map(est => (
            <tr key={est.id}>
              <td style={{ padding: '10px' }}>{est.id}</td>
              <td style={{ padding: '10px' }}>{est.nombre}</td>
              <td style={{ padding: '10px' }}>{est.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App