export const myFilter = <T>(
  arr: T[],
  callback: (element: T) => boolean
): T[] => {
  return arr.reduce((acc: T[], el: T) => {
    if (callback(el)) {
      acc.push(el)
    }
    return acc
  }, [])
}

export const myMap = <T>(arr: T[], callback: (element: T) => T): T[] => {
  return arr.reduce((acc: T[], el: T) => {
    const tmpEl = callback(el)
    acc.push(tmpEl)
    return acc
  }, [])
}

export const filterMap = <T>(
  arr: T[],
  filterCallback: (element: T) => boolean,
  mapCallback: (element: T) => T
): T[] => {
  return arr.reduce((acc: T[], el: T) => {
    if (filterCallback(el)) {
      const tmpEl = mapCallback(el)
      acc.push(tmpEl)
    }
    return acc
  }, [])
}
