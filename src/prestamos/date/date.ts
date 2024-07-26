export function convertirFecha(fecha:string):string{
    const date = new Date(fecha)
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const formatter= new Intl.DateTimeFormat('es-ES',{
        year:'numeric',
        month:'long',
        day:'2-digit'
    })
    return formatter.format(date)
}