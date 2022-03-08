interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<string>;
