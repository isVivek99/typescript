interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

enum ResourceType {
  BOOK = 1,
  AUTHOR,
  FILM,
  DIRECTOR,
}

const dockOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'Shantaraam' },
};

const dockTwo: Resource<object> = {
  uid: 3,
  resourceType: ResourceType.FILM,
  data: { title: 'gone with the wind' },
};

console.log(dockOne, dockTwo);
