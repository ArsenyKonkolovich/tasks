export enum Types {
  BEST = 'Best',
  AVERAGE = 'Average',
  WORST = 'Worst',
}

interface IFoo {
  stringifyArray(
    arr: Foo[],
    type: Types,
    indexFrom?: number,
    count?: number
  ): string[]
}

export class Foo implements IFoo {
  id: number
  type: Types
  date: Date
  name: string

  constructor(id: number, type: Types, date: Date, name: string) {
    this.id = id
    this.type = type
    this.date = date
    this.name = name
  }
  public stringifyArray(
    arr: Foo[],
    type: Types,
    count: number = 0,
    indexFrom: number = 0
  ): string[] {
    const result: string[] = []
    const lastIndex =
      indexFrom + count > arr.length ? arr.length : indexFrom + count
    const slicedArr = arr.slice(indexFrom, lastIndex)
    slicedArr.forEach((element, index) => {
      const date = `${element.date.getDate()}.${element.date.getMonth()}.${element.date.getFullYear()}`
      if (element.type === type) {
        const string = `${index} - ${date} Была добавлена строка ${element.id} c содержимым ${element.name}`
        result.push(string)
      }
    })
    return result
  }
}
