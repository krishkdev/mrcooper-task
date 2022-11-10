module.exports.getAge = (birthYear) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const b = parseInt(birthYear);
    const a = parseInt(yyyy);
    return a-b;
}