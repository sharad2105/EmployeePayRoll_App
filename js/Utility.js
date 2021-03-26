const date = `1 November 2020`;
const stringifyDate = (date) => {
    console.log(date);
    return new Date(date);
};
const option = { day: "numeric", month: "short", year: "numeric" };
console.log(stringifyDate(date).toLocaleDateString("en-GB", option));