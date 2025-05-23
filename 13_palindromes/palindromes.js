const palindromes = function (str) {
    const alphanumeric = removeNonAlphaNumeric(str);
    let start = 0;
    let end = alphanumeric.length - 1;
    while (start <= end) {
        const char1 = alphanumeric[start];
        const char2 = alphanumeric[end];
        if (char1 !== char2) return false;
        start++;
        end--;
    }
    return true;
};

const removeNonAlphaNumeric = (str) => {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
    return str.toLowerCase().split("").filter((char) => alphanumeric.includes(char)).join("");
}
palindromes("rac3e3car")
// Do not edit below this line
module.exports = palindromes;
