{
  //Readonly type
  const video: Readonly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };
  
    //mapped type
  type Video = {
    title: string;
    author: string;
  };
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };
  type VideoOptional = Optional<Video>;
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
