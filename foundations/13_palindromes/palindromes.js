const palindromes = function (string) {
const str = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
const length = str.length
for(let i = 0; i < length / 2; i++) {
    if(str[i] !== str[length - i - 1]) return false;
}
return true;
};

// // Second solution
// const palindromes = function (string) {
// const str = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// const rev = str.split("").reverse().join("");
// for(let i = 0; i < str.length; i++) {
//     if(str[i] !== rev[i]) return false;
// }
// return true;
// };

// Do not edit below this line
module.exports = palindromes;
