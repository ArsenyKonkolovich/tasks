type Collection = any[]

export const myFilter = (
  arr: Collection,
  callback: (element: any) => boolean
): Collection => {
  return arr.reduce((acc, el) => {
    if (callback(el)) {
      acc.push(el)
    }
    return acc
  }, [])
}

export const myMap = (
  arr: Collection,
  callback: (element: any) => any
): Collection => {
  return arr.reduce((acc: any[], el: any) => {
    const tmpEl = callback(el)
    acc.push(tmpEl)
    return acc
  }, [])
}

export const filterMap = (
  arr: Collection,
  filterCallback: (element: any) => boolean,
  mapCallback: (element: any) => any
): Collection => {
  return arr.reduce((acc: any[], el: any) => {
    if (filterCallback(el)) {
      const tmpEl = mapCallback(el)
      acc.push(tmpEl)
    }
    return acc
  }, [])
}
