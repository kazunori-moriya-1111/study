function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value.name
  value[key]
  return value
}
console.log(copy({ name: 'abc', age: 33 }, 'age'))
type K = keyof { name: string; age: number }

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = []
  add(item: T) {
    this.data.push(item)
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  get() {
    return this.data
  }
}
const stringLightDatabase = new LightDatabase()
stringLightDatabase.add('Apple')
stringLightDatabase.add('Banana')
stringLightDatabase.add('Grape')
stringLightDatabase.remove('Banana')
console.log(stringLightDatabase.get())

interface TmpDataabase<T> {
  id: number
  data: T[]
}
const tmpDatabase: TmpDataabase<number> = {
  id: 3,
  data: [32]
}

interface Todo {
  title: string;
  text: string
}

type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>