export default function RutasIconos() {
  return (
    <table>
      <thead>
          <tr>
            <th>Icono</th>
            <th>Requerimiento</th>
            <th>Ruta</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <th><img className="iconos-tabla" src="/examen.svg" alt="Requerimiento Examen" /></th>
          <th><p>Examen</p></th>
          <th><p>/examen.svg</p></th>
        </tr>
        <tr>
          <th><img className="iconos-tabla" src="/horario.svg" alt="Requerimiento Examen" /></th>
          <th><p>Horario</p></th>
          <th><p>/horario.svg</p></th>
        </tr>
        <tr>
          <th><img className="iconos-tabla" src="/papeleria.svg" alt="Requerimiento Papeleria" /></th>
          <th><p>Papeleria</p></th>
          <th><p>/papeleria.svg</p></th>
        </tr>
        <tr>
          <th><img className="iconos-tabla" src="/resultados.svg" alt="Requerimiento Resultados" /></th>
          <th><p>Resultados</p></th>
          <th><p>/resultados.svg</p></th>
        </tr>
      </tbody>
    </table>
  )
}
