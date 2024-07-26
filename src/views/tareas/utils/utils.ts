export function formatDate(isoString: string): string {
    if (!isoString) return 'Fecha no disponible';

    const date = new Date(isoString);
    if (isNaN(date.getTime())) return 'Fecha no disponible';

    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return formatter.format(date);
}