const lineIntersection = (str1, str2) => {
  return str1
    .split('')
    .filter((word) => str2.includes(word))
    .join('')
}
