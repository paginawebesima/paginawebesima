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
          <th><p className="elemento_tabla">Examen</p></th>
          <th><p className="elemento_tabla">/examen.svg</p></th>
        </tr>
        <tr>
          <th><img className="iconos-tabla" src="/horario.svg" alt="Requerimiento Examen" /></th>
          <th><p className="elemento_tabla">Horario</p></th>
          <th><p className="elemento_tabla">/horario.svg</p></th>
        </tr>
        <tr>
          <th><img className="iconos-tabla" src="/papeleria.svg" alt="Requerimiento Papeleria" /></th>
          <th><p className="elemento_tabla">Papeleria</p></th>
          <th><p className="elemento_tabla">/papeleria.svg</p></th>
        </tr>
        <tr>
          <th><img className="iconos-tabla" src="/resultados.svg" alt="Requerimiento Resultados" /></th>
          <th><p className="elemento_tabla">Resultados</p></th>
          <th><p className="elemento_tabla">/resultados.svg</p></th>
        </tr>
      </tbody>
    </table>
  )
}
