export type Modifier<T> = (c: T) => T;

class Factory<T> {
  modifiers: Array<Modifier<T>> = [];
  defaultEntity: T;

  constructor(defaultEntity: T) {
    this.defaultEntity = defaultEntity;
  }
  with(...modifier: Array<Modifier<T>>) {
    this.modifiers = this.modifiers.concat(modifier);
    return this;
  }
  build(): T {
    return this.modifiers.reduce((resource: T, modifier: Modifier<T>) => {
      return modifier(resource);
    }, this.defaultEntity);
  }
}

export function newFixture<T>(defaultEntity: T) {
  return new Factory<T>(defaultEntity);
}

export function newIdGenerator() {
  let id = 0;
  return function generateId() {
    id += 1;
    return id;
  };
}
