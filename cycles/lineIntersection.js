const str1 = "asdfgh"
const str2 = "fghjkl"

const lineIntersection = (str1, str2) => {
  return str1
    .split("")
    .filter((word) => str2.includes(word))
    .join("")
}

console.log(lineIntersection(str1, str2))
