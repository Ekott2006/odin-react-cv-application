export function formatDateMonthYear(date: Date) {
    const month = date.toLocaleString("default", {month: "long"});
    const year = date.getFullYear();
    return `${month} ${year}`;
}
