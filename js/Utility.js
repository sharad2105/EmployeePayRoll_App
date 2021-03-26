const stingyfyDate = (date) => {
    const option = { day: "numeric", month: "long", year: "number" };
    const newDate = !date ?
        "undefined" :
        new Date(Date.parse(date)).toLocaleDateString("en-US", option);
};