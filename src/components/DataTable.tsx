interface DataTableProps<T> {
    datos: T[];
    columnas: { cabecera: string; clave: keyof T }[];
  }
  
  export function DataTable<T>({ datos, columnas }: DataTableProps<T>) {
    return (
      <table border={1} style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#f4f4f4' }}>
          <tr>
            {columnas.map((col, i) => (
              <th key={i} style={{ padding: '10px' }}>{col.cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index}>
              {columnas.map((col, i) => (
                <td key={i} style={{ padding: '10px' }}>
                  {String(item[col.clave])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }