interface IFoo {
  stringify(arr: Foo[]): string[]
}

class Foo implements IFoo {
  id: number
  type: string
  date: Date
  name: string

  constructor(id: number, type: string, date: Date, name: string) {
    this.id = id
    this.type = type
    this.date = date
    this.name = name
  }
  public stringify(arr: Foo[]): string[] {
    return ['']
  }
}
