export function getSince(date: string) {
    const hireDate = new Date(+date);
    const now = new Date();
    const years = now.getFullYear() - hireDate.getFullYear();
    const months = now.getMonth() - hireDate.getMonth();
    const days = now.getDate() - hireDate.getDate();
    return `${years} y - ${months} m - ${days} d`;
}