interface ITree {
  data: number
  refs?: ITree[]
}

let tree: ITree = {
  data: 1,
  refs: [
    {
      data: 5,
      refs: [
        { data: 10 },
        {
          data: 7,
          refs: [{ data: 9 }, { data: 8 }],
        },
        { data: 6 },
      ],
    },
    {
      data: 2,
      refs: [{ data: 4 }, { data: 3 }],
    },
  ],
}

const traversal = (tree: ITree): void => {
  let currentRef: ITree | undefined
  let memory: ITree[] = [tree]

  while ((currentRef = memory.pop())) {
    while (true) {
      console.log(currentRef.data)

      if (!currentRef.refs) break

      for (let i = 0; i < currentRef.refs.length - 1; i++) {
        memory.push(currentRef.refs[i])
      }

      currentRef = currentRef.refs[currentRef.refs.length - 1]
    }
  }
}
