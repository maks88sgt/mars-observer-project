export const dateToApi = (val) => {
    const date = new Date(val);
    const year = date.getFullYear();
    const monthString = (date.getMonth() + 1).toString();
    let month = monthString;
    if (monthString.length === 1) {
        month = `0${monthString}`;
    }
    const dayString = date.getDate().toString();
    let day = dayString;
    if (dayString.length === 1) {
        day = `0${dayString}`;
    }

    return `${year}-${month}-${day}`
}
