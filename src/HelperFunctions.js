export function formatDateMonthYear(date) {
    const month = date.toLocaleString("default", {month: "long"});
    const year = date.getFullYear();
    return `${month} ${year}`;
}
