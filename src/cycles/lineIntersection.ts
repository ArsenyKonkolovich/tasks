const lineIntersection = (str1: string, str2: string): string => {
  return str1
    .split('')
    .filter((word) => str2.includes(word))
    .join('')
}
